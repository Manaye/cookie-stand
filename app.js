'use strict';
//make Array with open times
var storeHours = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var table = document.getElementById('table');
function createTableHeader(){
  var tr = document.createElement('tr');
  for (var i = 0; i < storeHours.length; i++) {
    var th = document.createElement('th');
    th.textContent = storeHours[i];
    tr.appendChild(th);
  }
  table.appendChild(tr);
}
//allstores
var allStores = [];
function Store(storeName, minCustomers, maxCustomers, avgSale){
  this.storeName = storeName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSale = avgSale;
  this.avgCustomersHour = [];
  this.cookiesArray = [];
  this.totalCookies = 0;
  this.getAvgCustomersHour = function (){
    this.avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  };
  this.getAvgCookiesHour =  function () {
    this.avgCookiesHour = Math.ceil(this.avgCustomersHour * this.avgSale);
  };
  this.render = function () {
    for (var i = 0; i < storeHours.length; i++) {
      this.getAvgCustomersHour();
      this.getAvgCookiesHour();
      this.cookiesArray.push(this.avgCookiesHour);

    }
  };
  this.total = function () {
    this.totalCookies = this.cookiesArray.reduce(function (a,b) {
      return a + b;
    }, 0);
    // var tr = document.createElement('tr');
    // var td = document.createElement('td');
    return this.totalCookies;

  };
  allStores.push(this);


};
//

createTableHeader();
var firstAndPike = new Store('firstAndPike', 23, 65, 6.3 );
var seatac = new Store('SeaTacAirport', 3, 24,1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

firstAndPike.render();
seatac.render();
seattleCenter.render();
capitolHill.render();
alki.render();
for(var i = 0; i<allStores.length; i++){
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = allStores[i].storeName;
  tr.appendChild(th);

  for(var j = 0; j<allStores[i].cookiesArray.length-1; j++){
    var td = document.createElement('td');
    td.textContent = allStores[i].cookiesArray[j];
    tr.appendChild(td);

  }
  table.appendChild(tr);
}

function createTotalRow(){
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = 'Total';
  tr.appendChild(th);
  for(var i = 0; i<1; i++){
    for(var j = 0; j<allStores[i].cookiesArray.length-1; j++){
      var td = document.createElement('td');
      td.textContent = allStores[i].cookiesArray.reduce(function(acc, curr){
        return acc+curr;
      },0);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  table.appendChild(tr);
}
createTotalRow();
