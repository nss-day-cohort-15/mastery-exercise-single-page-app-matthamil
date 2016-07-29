var CarLot = (function eventHandlersModule(carLot = {}) {
  var inventory = [];

  function loadCarIntoDom(car, index) {
    // The div where cars will be appended
    var carArea = document.getElementById('car-area');

    // DOM Element containing the car
    var carElement = document.createElement('div');
    carElement.classList ="col-sm-4 car";
    carElement.id = `car-${index}`;

    console.dir(carElement);

    var carContent = `
      <div class="panel panel-default" style="border:3px solid ${car.color}">
        <div class="panel-heading">
         <h1>${car.make} ${car.model}, ${car.year}<h1>
        </div>
        <div class="panel-body">
         <h2>$${car.price}</h2>
         <section>${car.description}</section>
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
    console.log(inventory);
    inventory.forEach(loadCarIntoDom);
  };

  carLot.loadInventory(carLot.activateEvents);

  return carLot;
})(CarLot);
