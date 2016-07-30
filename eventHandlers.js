var CarLot = (function eventHandlersModule(carLot = {}) {
  var inventory = [];

  function loadCarIntoDom(car, index) {
    // The div where cars will be appended
    var carArea = document.getElementById('car-area');

    // DOM Element containing the car
    var carElement = document.createElement('div');
    carElement.classList ="col-sm-4";

    var carContent = `
      <div class="panel panel-default car" id="car-${index}" style="border:3px solid ${car.color}">
        <div class="panel-heading">
         <h1>${car.make} ${car.model}, ${car.year}<h1>
        </div>
        <div class="panel-body">
         <h2>$${car.price}</h2>
         <section id="car-${index}-desc">${car.description}</section>
         <section>Color: ${car.color}</section>
          <section>
           <h2>
            ${car.purchased ? 
             '<span class="label label-danger">Sold</span>' : 
             '<span class="label label-success">For Sale</span>' 
           }
           </h2>
          </section> 
        </div>
     </div>
    `;

    carElement.innerHTML = carContent;

    // Append the car to the DOM
    carArea.appendChild(carElement);
  }

  carLot.activateEvents = () => {
    inventory = carLot.getInventory();
    inventory.forEach(loadCarIntoDom);
    setEventHandlers();
  };

  carLot.loadInventory(carLot.activateEvents);

  function setEventHandlers() {
    var carElements = document.getElementsByClassName('car');
    var input = document.querySelector('input');

    // Adds a new property to each car to be used when determining which car description to edit
    inventory = inventory.map(car => {
      car.editMode = false;
      return car;
    });

    // Resets borders and background colors on all cars
    function resetCars() {
      carLot.resetBorders();
      inventory.forEach(car => car.editMode = false);
    }

    for (let i = 0; i < carElements.length; i++) {
      // Add click event where borders get larger and background color changes
      carElements[i].addEventListener('click', e => {
        resetCars();
        inventory[i].editMode = true;
        carLot.selectCar(e.target, '#FFA000');
        input.value = '';
        input.focus();

        // Event listener for input field to update car description
        input.addEventListener('keyup', e => {
          if (inventory[i].editMode) {
            inventory[i].description = input.value;

            // Targeting section with description
            document.getElementById(`car-${i}-desc`).innerHTML = inventory[i].description;
          }
        });
      });
    }

    input.addEventListener('keyup', e => {
      if (e.keyCode == 13 && isEditModeOn()) {
        // Reset the input field when enter is pressed
        input.value = '';
        resetCars();
      }
    });

    function isEditModeOn() {
       var isEditModeSelected = inventory.reduce((editStatus, car) => {
        if (car.editMode === true) {
          editStatus = true;
        }
        return editStatus;
      }, false);

      if (!isEditModeSelected) {
        alert('Please select a car.');
      }

      return isEditModeSelected;
    }

    document.querySelector('button').addEventListener('click', e => {
      if (isEditModeOn()) {
        // Determine which car is in editMode
        for (let i = 0; i < inventory.length; i++) {
          if (inventory.editMode) {
            document.getElementById(`car-${i}-desc`).innerHTML = inventory[i].description;
          }
        }
      }

      input.value = '';
      resetCars();
    });
  }

  return carLot;
})(CarLot);
