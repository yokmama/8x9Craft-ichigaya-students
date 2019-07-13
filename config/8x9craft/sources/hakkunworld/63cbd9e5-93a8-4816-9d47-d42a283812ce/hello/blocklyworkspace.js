for (var count3 = 0; count3 < 10; count3++) {
  crab.up();
  for (var count2 = 0; count2 < 4; count2++) {
    for (var count = 0; count < 3; count++) {
      crab.placeDown('1', 0);
      crab.back();
    }
    crab.turnLeft();
  }
}
