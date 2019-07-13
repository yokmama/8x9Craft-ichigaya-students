crab.placeDown('5', 0);
for (var count = 0; count < 15; count++) {
  crab.forward();
  crab.placeDown('5', 0);
}
if (crab.isBlocked()) {
  crab.turnLeft();
  crab.turnLeft();
}
