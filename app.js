'use strict';
//make Array with open times
var storeHours = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm','total'];
var table = document.getElementById('table');
var th = document.getElementsByTagName('thead')[0];
//var tbody = document.getElementsByTagName('tbody')[0];
//var tfoot = document.getElementsByTagName('tfoot')[0];
var addForm = document.getElementById('add-location');
//var salesForm = document.getElementById('sales-data');

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
    this.avgCustomersHour = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  }; 
  this.getAvgCookiesHour =  function(){
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
    return this.totalCookies;
  };
  allStores.push(this);
}
function addElement(element, content, parent) {
  var newElement = document.createElement(element);
  var newContent = document.createTextNode(content);
  newElement.appendChild(newContent);
  parent.appendChild(newElement);
  return newElement;

/*function renderHeader() {
  thead.innerHTML = '';
  var tr = addElement('tr', '', thead);
  addElement('th', '', tr);
  for (var i = 0; i < hours.length; i++) {
    addElement('th', hours[i], tr);
  }
  addElement('th', 'Total', tr);*/
}


createTableHeader();
var form = document.querySelector('form');
form.onsubmit = function submitHandler(e){
  e.preventDefault();
  var storeName = document.getElementById('store-name').value;
  document.getElementById('store-name').value = '';
  var minCustomer = document.getElementById('min-customer').value;
  document.getElementById('min-customer').value = '';
  var maxCustomer = document.getElementById('max-customer').value;
  document.getElementById('max-customer').value = '';
  var averageSale = document.getElementById('average-sale').value;
  document.getElementById('average-sale').value = '';
  var newStoreFromUser =  new Store(storeName, minCustomer, maxCustomer, averageSale);
  newStoreFromUser.render();
  if(storeName&&minCustomer&&maxCustomer&&averageSale){
    createRow(storeName);
  }
  else{
    alert('please enter all information');
  }
  
};
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



function createRow(storeName){
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = storeName;
  tr.appendChild(th);
  for(var i = 0; i<1; i++){
    for(var j = 0; j<allStores[i].cookiesArray.length-1; j++){
      var td = document.createElement('td');
      td.textContent = allStores[i].cookiesArray[j];
      tr.appendChild(td);
    }
  }
  table.removeChild(table.lastChild);
  table.appendChild(tr);
  createTotalRow();
}
function createTotalRow(){
  
  var hourTotalTFoot = document.createElement('tfoot');
  table.appendChild(hourTotalTFoot);

  var hourTotalTRow = document.createElement('tr');
  hourTotalTFoot.appendChild(hourTotalTRow);

  var hourTotalTH = document.createElement('th');
  hourTotalTH.textContent = 'Totals';
  hourTotalTRow.appendChild(hourTotalTH);

  var hourTotalTD;
  var hourlyTotal = 0;
  var dailyTotalFoot = 0;

  for (var i = 0; i < storeHours.length-2; i++) {
    hourTotalTD = document.createElement ('td');
    hourlyTotal = 0;

    for(var j = 0; j < allStores.length; j++) {
      hourlyTotal += allStores[j].cookiesArray[i];
     
    }
    dailyTotalFoot += hourlyTotal;
    hourTotalTD.textContent = hourlyTotal;
    hourTotalTRow.appendChild(hourTotalTD);
  }
  hourTotalTD = document.createElement ('td');
  hourTotalTD.textContent = dailyTotalFoot;
  hourTotalTRow.appendChild(hourTotalTD);
  }
createTotalRow();
