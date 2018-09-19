'use strict';

var days = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike =  {
  storeName: 'firstAndPike',
  minCustomers: 23,
  maxCustomers: 65,
  avgSale: 6.3,
  avgCustomersHour: 0,
  avgCookiesHour: 0,
  cookiesArray: [],
  totalCookies: 0,  
  getAvgCustomersHour: function (){
    this.avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },

  getAvgCookiesHour: function () {
    this.avgCookiesHour = Math.ceil(this.avgCustomersHour * this.avgSale);
  },  
  render: function () {
    for (var i = 0; i < days.length; i++) {
      this.getAvgCustomersHour();
      this.getAvgCookiesHour();
      var liEl = document.createElement('li');
      liEl.textContent = days[i] + ' ' + this.avgCookiesHour;
      var firstAndPikeUl = document.getElementById('first');
      firstAndPikeUl.appendChild(liEl);
      this.cookiesArray.push(this.avgCookiesHour);
    }
  },   
  total: function () {
    this.totalCookies = this.cookiesArray.reduce(function (a,b) {
      return a + b;
    }, 0);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total ' + this.totalCookies;
    var firstAndPikeUl = document.getElementById('first');
    firstAndPikeUl.appendChild(liEl);
  }
};

firstAndPike.getAvgCustomersHour();
firstAndPike.getAvgCookiesHour();
firstAndPike.render();
firstAndPike.total();
console.log('Average Customers per Hour ' + firstAndPike.avgCustomersHour);
console.log('Average Cookies per Hour ' + firstAndPike.avgCookiesHour);
console.log(firstAndPike.cookiesArray);
console.log(firstAndPike.totalCookies);

var seatac = {
  storeName: 'SeaTac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  avgSale: 1.2,
  avgCustomersHour: 0,
  avgCookiesHour: 0,
  cookiesArray:[],
  totalCookies: 0,
  getAvgCustomersHour: function (){
    this.avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },
  getAvgCookiesHour: function () {
    this.avgCookiesHour = Math.ceil(this.avgCustomersHour * this.avgSale);
  },
  render: function () {
    for (var i = 0; i < days.length; i++) {
      this.getAvgCustomersHour();
      this.getAvgCookiesHour();
      var liEl = document.createElement('li');
      liEl.textContent = days[i] + ' ' + this.avgCookiesHour;
      var seatacUl = document.getElementById('seatac-airport');
      seatacUl.appendChild(liEl);
      this.cookiesArray.push(this.avgCookiesHour);
    }
  },
  total: function () {
    this.totalCookies = this.cookiesArray.reduce(function (a,b) {
      return a + b;
    }, 0);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total ' + this.totalCookies;
    var seatacUl = document.getElementById('seatac-airport');
    seatacUl.appendChild(liEl);
  }
};

seatac.getAvgCustomersHour();
seatac.getAvgCookiesHour();
seatac.render();
seatac.total();
console.log('Average Customers per Hour ' + seatac.avgCustomersHour);
console.log('Average Cookies per Hour ' + seatac.avgCookiesHour);
console.log(seatac.cookiesArray);
console.log(seatac.totalCookies);


var center = {
  storeName: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  avgSale: 3.7,
  avgCustomersHour: 0,
  avgCookiesHour: 0,
  cookiesArray: [],
  totalCookies: 0,
  getAvgCustomersHour: function (){
    this.avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },
  getAvgCookiesHour: function () {
    this.avgCookiesHour = Math.ceil(this.avgCustomersHour * this.avgSale);
  },
  render: function () {
    for (var i = 0; i < days.length; i++) {
      this.getAvgCustomersHour();
      this.getAvgCookiesHour();
      var liEl = document.createElement('li');
      liEl.textContent = days[i] + ' ' + this.avgCookiesHour;
      var seacenterUl = document.getElementById('seattle-center');
      seacenterUl.appendChild(liEl);
      this.cookiesArray.push(this.avgCookiesHour);
    }
  },
  total: function () {
    this.totalCookies = this.cookiesArray.reduce(function (a,b) {
      return a + b;
    }, 0);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total ' + this.totalCookies;
    var seacenterUl = document.getElementById('seattle-center');
    seacenterUl.appendChild(liEl);
  }
};
          
center.getAvgCustomersHour();
center.getAvgCookiesHour();
center.render();
center.total();
console.log('Average Customers per Hour ' + center.avgCustomersHour);
console.log('Average Cookies per Hour ' + center.avgCookiesHour);console.log(center.cookiesArray);
console.log(center.totalCookies);

var caphill = {
  storeName: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  avgSale: 2.3,
  avgCustomersHour: 0,
  avgCookiesHour: 0,
  cookiesArray: [],
  cookiesTotal: 0,
  getAvgCustomersHour: function (){
    this.avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },
  getAvgCookiesHour: function () {
    this.avgCookiesHour = Math.ceil(this.avgCustomersHour * this.avgSale);
  },
  render: function () {
    for (var i = 0; i < days.length; i++) {
      this.getAvgCustomersHour();
      this.getAvgCookiesHour();
      var liEl = document.createElement('li');
      liEl.textContent = days[i] + ' ' + this.avgCookiesHour;
      var caphillUl = document.getElementById('capital-hill');
      caphillUl.appendChild(liEl);
      this.cookiesArray.push(this.avgCookiesHour);
    }
  },
  total: function () {
    this.totalCookies = this.cookiesArray.reduce(function (a,b) {
      return a + b;
    }, 0);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total ' + this.totalCookies;
    var caphillUl = document.getElementById('capital-hill');
    caphillUl.appendChild(liEl);
  }
};
caphill.getAvgCustomersHour();
caphill.getAvgCookiesHour();
caphill.render();
caphill.total();
console.log('Average Customers per Hour ' + caphill.avgCustomersHour);
console.log('Average Cookies per Hour ' + caphill.avgCookiesHour);
console.log(caphill.cookiesArray);
console.log(caphill.totalCookies);


var alki = {
  storeName: 'Alki Beach',
  minCustomers: 2,
  maxCustomers: 16,
  avgSale: 4.6,
  avgCustomersHour: 0,
  avgCookiesHourcookiesHour: 0,
  cookiesArray: [],
  cookiesTotal: 0,
  getAvgCustomersHour: function (){
    this.avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },
  getAvgCookiesHour: function () {
    this.avgCookiesHour = Math.ceil(this.avgCustomersHour * this.avgSale);
  },
  render: function () {
    for (var i = 0; i < days.length; i++) {
      this.getAvgCustomersHour();
      this.getAvgCookiesHour();
      var liEl = document.createElement('li');
      liEl.textContent = days[i] + ' ' + this.avgCookiesHour;
      var alkiUl = document.getElementById('alki');
      alkiUl.appendChild(liEl);
      this.cookiesArray.push(this.avgCookiesHour);
    }
  },
  total: function () {
    this.totalCookies = this.cookiesArray.reduce(function (a,b) {
      return a + b;
    }, 0);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total ' + this.totalCookies;
    var alkiUl = document.getElementById('alki');
    alkiUl.appendChild(liEl);
  }
            
};
alki.getAvgCustomersHour();
alki.getAvgCookiesHour();
alki.render();
alki.total();
console.log('Average Customers per Hour ' + alki.avgCustomersHour);
console.log('Average Cookies per Hour ' + alki.avgCookiesHour);
console.log(alki.cookiesArray);
console.log(alki.totalCookies);