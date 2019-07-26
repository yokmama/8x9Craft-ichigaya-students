/**
 * この関数の説明…
 */
function syachihoko() {
  for (var count2 = 0; count2 < 2; count2++) {
    crab.place('41', 0);
    crab.stepLeft();
  }
  crab.up();
  for (var count3 = 0; count3 < 3; count3++) {
    crab.place('41', 0);
    crab.stepRight();
  }
  crab.stepLeft();
  crab.up();
  for (var count4 = 0; count4 < 2; count4++) {
    crab.place('41', 0);
    crab.up();
  }
  crab.down();
  crab.stepLeft();
  crab.place('41', 0);
}


for (var count = 0; count < 2; count++) {
  crab.place('252', 7);
  crab.up();
}
crab.stepRight();
crab.place('67', 0);
crab.down();
crab.place('1', 3);
crab.stepRight();
crab.place('252', 7);
crab.up();
crab.place('252', 7);
crab.forward();
crab.forward();
crab.forward();
crab.down();
crab.placeDown('1', 3);
crab.turnLeft();
crab.turnLeft();
crab.stepRight();
crab.place('1', 3);
crab.stepRight();
crab.placeDown('1', 3);
