var paragraph;
var audio = [];
var sound;
var actionFrame;
let soundfile;
let activate = 0;
let numClicks = 0;

function preload() {
  soundFormats('wav');
  for (let i = 1; i < 6; i++) {
      audio[i] = loadSound('files/audio/' + i + '.wav');
      console.log(audio[i]);
  }
}

function setup() {
  paragraph = select('#generate');
  paragraph.mouseClicked(click);
  paragraph.mouseOver(bgChangeMouseOver);
  paragraph.mouseOut(bgChangeMouseOut);
}


function draw() {
  let sfRand = round(random(1, 5));
  let soundfile;
  if (frameCount === actionFrame) {
    console.log('go');
    soundfile = audio[sfRand];
    soundfile.pan(0);
  
    soundfile.play(0, random(0.8, 1.2));
    performAction();
  }
}

function bgChangeMouseOver() {
  paragraph.style('background-color', 'rgb(200, 200, 200)'); 
}

function bgChangeMouseOut() {
  paragraph.style('background-color', 'rgb(255, 255, 255)'); 
}

function performAction() {
  actionFrame = frameCount + round(random(10, 200));
  
}

function click() {
  if (numClicks %2 == 0) { 
    actionFrame = frameCount + 5;
  }
  else {
    actionFrame = 0;
  }
  numClicks = numClicks + 1;
  console.log(actionFrame);
  console.log(frameCount);
}
