// This is my TV class
// It has language like a TV would and is responsible for 
// receiving messages and changing channels

import { SerialPort } from "serialport";
const loudness = require('loudness')

import { CHANNEL_FILES, CHANNELS_DIR } from "./utils";

enum ButtonPressed {
  CHANNEL_UP = "CHANNEL_UP",
  CHANNEL_DOWN = "CHANNEL_DOWN",
  POWER_BUTTON = "POWER_BUTTON",
  SUPER_POWER_BUTTON = "SUPER_POWER_BUTTON",
  VOLUME_UP = "VOLUME_UP",
  VOLUME_DOWN = "VOLUME_DOWN",
  MUTE = "MUTE",
}

export default class TV {
  static port: SerialPort;
  static window: Electron.BrowserWindow;
  
  static isOn = false;
  static channel = 0;
  
  static volume = 50;
  static muted = false;

  static initialize(
    path: string, // What port to listen to. In this case, which USB port.
    baudRate: number, 
    window: Electron.BrowserWindow
  ) {
    TV.port = new SerialPort({ path, baudRate });
    TV.window = window;
    loudness.setVolume(TV.volume);

    // Switches the port into "flowing mode"
    TV.port.on("data", function (data) {
      const buttonPressed = data.toString().trim();
      switch (buttonPressed) {
        case ButtonPressed.CHANNEL_UP:
          TV.channel =
            TV.channel + 1 > CHANNEL_FILES.length - 1 ? 0 : TV.channel + 1;
          TV.changeChannel(TV.channel);
          break;
        case ButtonPressed.CHANNEL_DOWN:
          TV.channel =
            TV.channel - 1 < 0 ? CHANNEL_FILES.length - 1 : TV.channel - 1;
          TV.changeChannel(TV.channel);
          break;
        // My remote weirdly had two power buttons
        // One of them "turns the TV off" by playing an animation
        // Though it plays an OFF animation, the program is still running and can be
        // turned back on again.
        case ButtonPressed.POWER_BUTTON:
          TV.isOn ? TV.turnOff() : TV.turnOn();
          break;
        // The other kills the window completely, thus making it non-responsive to future
        // remote commands
        case ButtonPressed.SUPER_POWER_BUTTON:
          TV.port.close();
          TV.window.close();
        case ButtonPressed.VOLUME_UP:
          TV.volume += 15;
          loudness.setVolume(TV.volume);
          break;
        case ButtonPressed.VOLUME_DOWN:
          TV.volume -= 15;
          loudness.setVolume(TV.volume);
          break;
        case ButtonPressed.MUTE:
          TV.muted = !TV.muted;
          loudness.setMuted(!TV.muted);
          break;
        default:
      }
    });
  }

  static turnOn() {
    TV.window.loadURL(`file://${__dirname}/../assets/turnon.html`).then(() => {
      setTimeout(() => TV.changeChannel(TV.channel), 600);
    });
    TV.isOn = true;
  }

  static changeChannel(index: number) {
    TV.window.loadURL(`file://${__dirname}/../${CHANNELS_DIR}/${index}.html`);
  }

  static turnOff() {
    TV.window.loadURL(`file://${__dirname}/../assets/turnoff.html`);
    TV.isOn = false;
  }
}
