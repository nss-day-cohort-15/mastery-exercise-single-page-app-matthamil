var CarLot = (function eventHandlersModule(carLot = {}) {
  var inventory = [];

  carLot.activateEvents = () => {
    inventory = carLot.getInventory();
    console.log(inventory);
  };

  carLot.loadInventory(carLot.activateEvents);

  return carLot;
})(CarLot);
