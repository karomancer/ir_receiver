/** 
 * The script that plays on every channel HTML page
 * to determine start times for static and channel videos
 **/
let video;
let static;
window.onload = () => {
  // Randomize where the static starts
  static = document.querySelector("#static");
  static.currentTime = static.duration * Math.random();

  // Randomize where the channel video starts
  video = document.querySelector("#channel");
  video.currentTime = video.duration * Math.random();
  
  // Keep the static playing for a random time up to 400ms
  setTimeout(() => {
    // Start playing the channel video after a random amount of time up to 100ms
    // Static will likely be overlayed over it with limited opacity for a good chunk of time
    setTimeout(() => {
      var playPromise = video.play();

      // In browsers that don’t yet support this functionality,
      // playPromise won’t be defined.
      if (playPromise !== undefined) {
        // For some reason, this is totally required
        // despite there being no functionality in either
        playPromise
          .then(function () {
            // Automatic playback started!
          })
          .catch(function (error) {
            // Automatic playback failed.
            // Show a UI element to let the user manually start playback.
          });
      }
    }, Math.random() * 100); 

    static.remove();
  }, Math.random() * 400);
};
