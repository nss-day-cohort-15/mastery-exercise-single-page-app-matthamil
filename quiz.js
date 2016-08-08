var CarLot = (function loadModule(carLot = {}){
  var inventory = [];

  carLot.loadInventory = (cb) => {
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'inventory.json');
    xhr.addEventListener('load', () => {
      inventory = JSON.parse(xhr.responseText).cars;
      console.info('Success: Loaded JSON data.');
      cb(inventory);
    });

    xhr.send();
  };

  carLot.getInventory = () => {
    return inventory;
  };

  return carLot;
})(CarLot);
