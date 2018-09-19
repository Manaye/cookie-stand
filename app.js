'use strict';

var days = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', ''];
var allStores = [];
var hoursTr = document.getElementById('hours');

for(var i = 0; i<days.length-1; i++){
  var td = document.createElement('td');
  td.textContent = days[i];
  hoursTr.appendChild(td);
}

var Store = function(storeName, minCustomers, maxCustomers, avgSale, avgCustomersHour, cookiesArray, totalCookies){
  this.storeName = storeName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSale = avgSale;
  this.avgCustomersHour = avgCustomersHour;
  this.cookiesArray = cookiesArray;
  this.totalCookies = totalCookies;
  this.getAvgCustomersHour = function (){
    this.avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  };
      
  this.getAvgCookiesHour = function () {
    this.avgCookiesHour = Math.ceil(this.avgCustomersHour * this.avgSale);
  };
  this.render = function () {
    for (var i = 0; i < days.length; i++) {
      this.getAvgCustomersHour();
      this.getAvgCookiesHour();
      var liEl = document.createElement('li');
      liEl.textContent = days[i] + ' ' + this.avgCookiesHour;
      var firstAndPikeUl = document.getElementById('first');
      firstAndPikeUl.appendChild(liEl);
      this.cookiesArray.push(this.avgCookiesHour);
    }
  };   
  this.total = function () {
    this.totalCookies = this.cookiesArray.reduce(function (a,b) {
      return a + b;
    }, 0);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total ' + this.totalCookies;
    var firstAndPikeUl = document.getElementById('first');
    firstAndPikeUl.appendChild(liEl);
  };

};

var firstAndPike = new Store('firstAndPike', 23, 65, 6.3, 0, 0, [], 0);
var seaTacAirport = new Store('seaTacAirport', 3, 24, 1.2, 0, 0, [], 0);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7, 0, 0, [], 0);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3, 0, 0, [], 0);
var Alki = new Store('Alki', 2, 16, 4.6, 0, 0, [], 0);
allStores.push(firstAndPike,seaTacAirport, seattleCenter, capitolHill, Alki);
console.log(allStores);
