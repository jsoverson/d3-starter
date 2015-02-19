'use strict';

$(document).ready(function () {
  var data = [
    { year: '2010', unitsSold:-100, salesman : 'Bob' },
    { year: '2011', unitsSold:200, salesman : 'Bob' },
    { year: '2012', unitsSold:300, salesman : 'Bob' },
    { year: '2013', unitsSold:400, salesman : 'Bob' },
    { year: '2014', unitsSold:500, salesman : 'Bob' },
    { year: '2010', unitsSold:100, salesman : 'Gina' },
    { year: '2011', unitsSold:100, salesman : 'Gina' },
    { year: '2012', unitsSold:-100, salesman : 'Gina' },
    { year: '2013', unitsSold:500, salesman : 'Gina' },
    { year: '2014', unitsSold:600, salesman : 'Gina' },
    { year: '2010', unitsSold:400, salesman : 'Average' },
    { year: '2011', unitsSold:0, salesman : 'Average' },
    { year: '2012', unitsSold:400, salesman : 'Average' },
    { year: '2013', unitsSold:400, salesman : 'Average' },
    { year: '2014', unitsSold:400, salesman : 'Average' }
  ];
  var parsedData = d4.parsers.nestedGroup()
    .x(function(){
      return 'year';
    })
    .nestKey(function(){
      return 'salesman';
    })
    .y(function(){
      return 'unitsSold';
    })
    .value(function(){
      return 'unitsSold';
    })(data);

  var chart = d4.charts.line()
  .outerWidth($('#d4').width())
  .x(function(x){
    x.key('year');
  })
  .y(function(y){
    y.key('unitsSold');
  });

  d3.select('#d4')
  .datum(parsedData.data)
  .call(chart);
});