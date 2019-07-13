for (var count = 0; count < 300; count++) {
  crab.placeDown('5', 0);
  if (crab.isBlocked()) {
    crab.up();
    crab.turnLeft();
    crab.turnLeft();
    crab.placeDown('5', 0);
  }
  crab.forward();
}
