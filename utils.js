/**
 * Beat class that keeps track of playing the audio
 */
class Beat {
  constructor(audioSrc) {
    this.playAudio = new Audio(audioSrc);
    // console.log(audioSrc);
  }
  play = () => {
    this.playAudio.currentTime = 0; //Setting time 0 to reset the audio if the key is pressed twice
    this.playAudio.play();
  };
}

/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
  constructor(color, keyCode) {
    this.color = color;
    this.keyCode = keyCode;
    this.element = document.getElementById(keyCode);
    this.setButtonColorInHTML();
    this.setTransitionEndListener();
  }

  /*
   * setTransitionEndListenerfunction ends the transition and calls the deselect class
   */

  setTransitionEndListener = () => {
    this.element.addEventListener("transitionend", () => {
      this.deselect();
    });
  };
  /**
   * Set the button color based on color specified
   */
  setButtonColorInHTML = () => {
    this.element.style.borderColor = this.color;
  };

  /**
   * Select function to set the background color and boxShadow
   */
  select = () => {
    this.element.style.backgroundColor = this.color;
    this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
    this.element.style.color = "#000";
  };

  /**
   * Deselect function to reset background color and boxShadow
   */
  deselect = () => {
    this.element.style.backgroundColor = "transparent";
    this.element.style.boxShadow = "none";
    this.element.style.color = "#fff";
  };
}
