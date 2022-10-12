/**
 * The script that generates channels (HTML files) from raw videos
 */
const fs = require("fs");

const CHANNELS_DIR = "./channels";
const VIDEOS_DIR = "./assets/videos";
const VIDEO_FILES = fs.readdirSync(VIDEOS_DIR);

const gen_channels = () => {
  VIDEO_FILES.forEach((file, i) => {
    const data = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'"
    />
    <link href="../styles.css" rel="stylesheet" />
    <script src="../assets/scripts/play_video.js"></script>
    <title>Channel ${i}</title>
  </head>
  <body>
    <div id="tv">      
      <!-- Channel does not autoplay...see play_video.js -->
      <video id="channel" preload="auto" data-setup="{}">
        <source src="../assets/videos/${file}" type="video/mp4" />
      </video>
      <!-- Autoplay the static to make it seem like a transition -->
      <video id="static" preload="auto" autoplay>
        <source src="../assets/effects/static.mp4" type="video/mp4" />
      </video>
    </div>
  </body>
</html>
`;
    fs.writeFileSync(`${CHANNELS_DIR}/${i}.html`, data);
  });
};

gen_channels();
