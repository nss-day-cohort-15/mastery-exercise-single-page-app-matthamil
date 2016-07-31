var CarLot = (function carStylesModule(carLot = {}) {
  carLot.resetBorders = () => {
    let cars = document.getElementsByClassName('car');
    let carObjects = carLot.getInventory();

    for (let i = 0; i < cars.length; i++) {
      cars[i].style.border = `3px solid ${getCarBorderColor(i)}`;
      cars[i].style.backgroundColor = '#fff';
    }

    function getCarBorderColor(id) {
      return carObjects[id].color;
    }
  };

  carLot.selectCar = (carElement, color) => {
    // Traverse to the wrapping div on the clicked element
    try {
      var node = carElement.parentNode;
      while (node != null) {
        if (node.classList.contains('car')) {
          node.style.border = '6px solid';
          node.style.backgroundColor = color;
        }
        node = node.parentNode;
      }
    } catch (e) {
      // Prevent the error from stopping all code execution
      // Logs error instead
      // console.log(e);
    }
  };

  return carLot;
})(CarLot);
