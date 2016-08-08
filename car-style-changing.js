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

  // When any element inside the div with the class 'car'
  // is clicked, traverse up the DOM until the wrapping
  // div with the class 'car' is found, and then apply
  // a larger border and change the background color.

  carLot.selectCar = (carElement, color) => {
    var node = carElement.parentNode;
    while (node != null) {
      // If a class exists on the current node
      if (node.classList) {
        // Traversed to a 'car'
        if (node.classList.contains('car')) {
          node.style.border = '6px solid';
          node.style.backgroundColor = color;
          break;
        }
        // Continue traversing up the DOM
        node = node.parentNode;
      }
    }
  };

  return carLot;
})(CarLot);
