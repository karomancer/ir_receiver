#include <IRremote.h>

const int IR_RECEIVER = 8;

const unsigned long CHANNEL_UP = 0xEF1000FF;
const unsigned long CHANNEL_DOWN = 0xEF10807F;
const unsigned long HELD_BUTTON = 0xFFFFFFFF;
const unsigned long POWER_BUTTON = 0x61A0F00F;
const unsigned long SUPER_POWER_BUTTON = 0xEF1010EF;
const unsigned long VOLUME_UP = 0xEF1040BF;
const unsigned long VOLUME_DOWN = 0xEF10C03F;
const unsigned long MUTE = 0xEF10906F;

IRrecv irrecv(IR_RECEIVER);
decode_results results;

void setup() {
  irrecv.enableIRIn();
}

void loop() {
  if (irrecv.decode(&results)) {
    unsigned long buttonAction = results.value;

    switch (buttonAction) {
      case CHANNEL_UP:
        Serial.println("CHANNEL_UP");
        break;
      case CHANNEL_DOWN:
        Serial.println("CHANNEL_DOWN");
        break;
      case POWER_BUTTON:
        Serial.println("POWER_BUTTON");
        break;
      case SUPER_POWER_BUTTON:
        Serial.println("SUPER_POWER_BUTTON");
        break;
      case HELD_BUTTON:
        break;
      case VOLUME_UP:
        Serial.println("VOLUME_UP");
        break;
      case VOLUME_DOWN:
        Serial.println("VOLUME_DOWN");
        break;
      case MUTE:
        Serial.println("MUTE");
        break;
      default:
        break;
    }

    irrecv.resume();
  }
}
