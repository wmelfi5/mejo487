var yearOfDeath = [];
var countryKilled = [];

$( document ).ready(function() {
    console.log( "page ready" );
    loadData();
});

function loadData(){
  $.getJSON( "data/data.json", function( deaths ) {
    console.log( "data ready" );
    parseData(deaths);
  });
  $.getJSON( "data/data3.json", function() {
  });
}

$(document).ready(function() {
  $('a[data-toggle="tab"]').on( 'shown.bs.tab', function (e) {
       $.fn.dataTable.tables( {visible: true, api: true} ).columns.adjust();
   } );
    $('table.table').DataTable( {
        "ajax": "data/data3.json",
        "columns": [
            { "data": "yearOfDeath" },
            { "data": "nameOfJournalist" },
            { "data": "countryKilled" },
            { "data": "localOrForeign" },
            { "data": "typeOfDeath" }
        ]
    } );
    $('#dataTable2').DataTable().search( '2017' ).draw();
} );

function removeDuplicates(data) {
  return data.filter((value, index) => data.indexOf(value) === index);
}

function parseData(deaths){

    $.each(deaths, function(index) {

      yearOfDeath.push(deaths[index].yearOfDeath);
      countryKilled.push(deaths[index].countryKilled);

    });
    buildCharts();
    buildMap();
}

function buildMap(){
  $.getJSON('data/countries.json', function (mapData) {
      console.log('map data ready');

  Highcharts.mapChart('map', {
      chart: {
          map: 'custom/world-palestine-highres'
      },

      navigation: {
        buttonOptions: {
          enabled: false,
        }
      },

      credits: {
        enabled: false,
      },

      title: {
          text: 'Deaths by Location'
      },

      mapNavigation: {
          enabled: true,
          buttonOptions: {
              verticalAlign: 'bottom'
          }
      },

      colorAxis: {
        minColor: '#F2DF91',
        maxColor: '#CF0A08'
      },

      series: [{
          data: mapData,
          name: 'Deaths',
          color: '#E6E6E6',
          borderColor: "white",
          states: {
              hover: {
                  color: "#CF0A08"
              }
          },
          dataLabels: {
              enabled: false,
              format: '{point.name}'
          }
      }]
    });
  })
}

function buildCharts(){

  var myChart = Highcharts.chart('line', {
      chart: {
          type: 'line',
          boostThreshold: 0
      },
      navigation: {
        buttonOptions: {
          enabled: false,
        }
      },
      credits: {
        enabled: false,
      },
      title: {
          text: 'Journalists Killed between 1992 and 2017'
      },
      legend: {
        enabled: false
      },
      xAxis: {
          categories: removeDuplicates(yearOfDeath),
          title: {
              text: 'Years'
          }
      },
      yAxis: {
          title: {
              text: 'Number of Deaths'
          }
      },
      series: [{
				name: 'Deaths per Year',
				data: [55, 72, 85, 61, 34, 35, 37, 53, 45, 54, 33, 58, 87, 64, 103, 112, 69, 101, 79, 83, 106, 100, 89, 97, 78, 66],
        color: "#CF0A08"
			}],
      dataLabels: {
              enabled: true,
              style: {
                  fontFamily: 'Franklin,arial,helvetica,sans-serif',
                  fontWeight: '300',
                  fontSize: '13px',
                  opacity: '0.6'
              }
          }
		});

Highcharts.chart('pie1', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    colorAxis: {
      minColor: '#F2DF91',
      maxColor: '#CF0A08',
      showInLegend: false
    },
    navigation: {
      buttonOptions: {
        enabled: false,
      }
    },
    credits: {
      enabled: false,
    },
    title: {
        text: 'Type of Death'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: false,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                style: {
                    fontFamily: 'Franklin,arial,helvetica,sans-serif',
                    fontWeight: '300',
                    fontSize: '13px',
                    opacity: '0.6'
                }
            },
            showInLegend: false
        }
    },
    series: [{
        name: '',
        colorByPoint: false,
        data: [{
            name: 'Murder',
            y: 818,
        }, {
            name: 'Crossfire/Combat-Related',
            y: 273,
        },{
            name: 'Dangerous Assignment',
            y: 162
        }, {
            name: 'Unknown',
            y: 606,
        }]
    }]
});

Highcharts.chart('pie2', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    colorAxis: {
      minColor: '#F2DF91',
      maxColor: '#CF0A08',
      showInLegend: false
    },
    navigation: {
      buttonOptions: {
        enabled: false,
      }
    },
    credits: {
      enabled: false,
    },
    title: {
        text: 'Local v Foreign Reporters'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: false,
            cursor: 'pointer',
            dataLabels: {
                enabled: true
            },
            showInLegend: false
        }
    },
    series: [{
        name: '',
        colorByPoint: true,
        data: [{
            name: 'Foreign',
            y: 154,
        }, {
            name: 'Local',
            y: 1123
        }, {
            name: 'Unknown',
            y: 602
        }],
        dataLabels: {
                enabled: true,
                style: {
                    fontFamily: 'Franklin,arial,helvetica,sans-serif',
                    fontWeight: '300',
                    fontSize: '13px',
                    opacity: '0.6'
                }
            }
    }]
});

}
