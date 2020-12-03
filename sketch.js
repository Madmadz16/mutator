let button, mutations, outputMsg;

function setup() {
  createCanvas(710, 400);

  fill(255, 0, 0)
  textSize(20);
  text('how many mutations do you have?', 20,30);


  mutations = createInput('');
  mutations.position(20, 70);
  button = createButton('submit');
  button.position(mutations.x + mutations.width, 70);
  //button.mousePressed(clear(outputMsg));
  button.mousePressed(mut);


  textAlign(CENTER);
  textSize(50);
}

function mut() {
  const mutation = mutations.value();
  let remaningMut = (254-mutation)/2-2;
  if(remaningMut < 30) {
      fill(255, 0, 0)
      textSize(20);
      if(outputMsg != '')
      outputMsg = text('You need ' + remaningMut + ' to complete your line', 190, 110);
  } else {
      fill(255, 0, 0)
      textSize(20);
      outputMsg = text('You still need need 30 mutation pulses', 190, 110);
  }
  mutations.value('');
}
