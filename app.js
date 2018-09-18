'use strict';

   var workhours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
   
   var dailySells = [];
   var firstandpike =  {
        name: 'firstandpike',
        minCust: 23,
        maxCust: 65,
        avgCookiesPerCust: 6.3,
        cookiesPurchased: [],
        numberofCustomerPerHour: function(){
            return Math.floor(Math.random()*100);
        },
        cookesPurchasedHourly: function(){
            
            for(var i = 0; i<workhours.length; i++){
           
               this.cookiesPurchased.push(this.avgCookiesPerCust*this.numberofCustomerPerHour);
               
            }
            return this.cookiesPurchased;
        },
        totalDailySells: function(){
            var total = this.cookiesPurchased.reduce(function(acc, cur){
                    return acc+cur;
            },0);
            return total;
        }
    };

dailySells.push(firstandpike.totalDailySells());
//setacAirport
var seaTacAirport = {
    name: 'seaTacAirport',
    minCust: 3,
    maxCust: 24,
    avgCookiesPerCust: 1.2,
    numberofCustomerPerHour: function(){
        return Math.floor(Math.random()*100);
    },
    cookesPurchasedHourly: function(){
        return this.avgCookiesPerCust*this.numberofCustomerPerHour
    }
};
dailySells.push(seaTacAirport.cookesPurchasedHourly());
//seattleCenter
var seattleCenter = {
    name: 'seattleCenter',
    minCust: 11,
    maxCust: 38,
    avgCookiesPerCust: 3.7,
    numberofCustomerPerHour: function(){
        return Math.floor(Math.random()*100);
    },
    cookesPurchasedHourly: function(){
        return this.avgCookiesPerCust*this.numberofCustomerPerHour
    }
};
dailySells.push(seattleCenter.cookesPurchasedHourly());
//capitallHill
var capitalHill = {
    name: 'capitalHill',
    minCust: 20,
    maxCust: 38,
    avgCookiesPerCust: 2.3,
    numberofCustomerPerHour: function(){
        return Math.floor(Math.random()*100);
    },
    cookesPurchasedHourly: function(){
        return this.avgCookiesPerCust*this.numberofCustomerPerHour
    }
};

dailySells.push(capitalHill.cookesPurchasedHourly());
//var alki
var alki = {
    name: 'alki',
    minCust: 2,
    maxCust: 16,
    avgCookiesPerCust: 4.6,
    numberofCustomerPerHour: function(){
        return Math.floor(Math.random()*100);
    },
    cookesPurchasedHourly: function(){
        return this.avgCookiesPerCust*this.numberofCustomerPerHour
    }
};
dailySells.push(alki.cookesPurchasedHourly());
//