/**
 * Having a main method (and/or class) is common practice for Electron.
 * 
 */
import { BrowserWindow } from "electron";
import TV from "./TV";

export default class Main {
  static mainWindow: Electron.BrowserWindow;
  static application: Electron.App;
  static BrowserWindow;

  private static onWindowAllClosed() {
    if (process.platform !== "darwin") {
      Main.application.quit();
    }
  }

  private static onClose() {
    // Dereference the window object.
    Main.mainWindow = null;
  }

  private static onReady() {
    Main.mainWindow = new Main.BrowserWindow({
      fullscreen: true,
      darkTheme: true,
      webPreferences: {
        contextIsolation: true,
        nodeIntegration: false,
        webSecurity: false,
        autoplayPolicy: "no-user-gesture-required", // < --- moved to here
      },
      backgroundColor: "#000000",
    });
    // Uncomment for chrome dev tooling
    // Main.mainWindow.webContents.openDevTools();

    // Instead of loading an index file, load an off state
    Main.mainWindow.loadURL("file://" + __dirname + "/../assets/off.html");
    Main.mainWindow.on("closed", Main.onClose);
    // My USB port path and baud rate
    // If I weren't so lazy, I might have this path in a .env, but really I don't know what
    // anyone would do with this information. Would just make it nicer for others to use
    TV.initialize("/dev/cu.usbmodem14101", 9600, Main.mainWindow);
  }

  static main(app: Electron.App, browserWindow: typeof BrowserWindow) {
    // we pass the Electron.App object and the
    // Electron.BrowserWindow into this function
    // so this class has no dependencies. This
    // makes the code easier to write tests for
    app.commandLine.appendSwitch("autoplay-policy", "no-user-gesture-required");
    Main.BrowserWindow = browserWindow;
    Main.application = app;
    Main.application.on("window-all-closed", Main.onWindowAllClosed);
    Main.application.on("ready", Main.onReady);
  }
}
