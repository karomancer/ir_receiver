const fs = require("fs");

export const CHANNELS_DIR = "./channels";
export const VIDEOS_DIR = "./assets/videos";

export const VIDEO_FILES = fs.readdirSync(VIDEOS_DIR);
export const CHANNEL_FILES = fs.readdirSync(CHANNELS_DIR);