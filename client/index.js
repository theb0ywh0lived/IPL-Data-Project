

fetch('../output/matchesPerYear.json')
.then(response => response.json())
.then(data => {
    console.log(data); 
    matchesPerYear(data);

});

function matchesPerYear(data) {
  let keys = Object.keys(data);
  let values = Object.values(data);

Highcharts.chart('matchesPerYearContainer', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Matches per year  '
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: keys,
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Matches Played Per Year'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} runs</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Year',
    data: values
  }]
});
}

fetch('../output/matchesPerTeamPerYear.json')
.then(response => response.json())
.then(data => {
    console.log(data); 
    matchesPerTeamPerYear(data);

});

function matchesPerTeamPerYear(data) {
  var arr=[];
  let keys = Object.keys(data);
  
  (keys.map((key)=>{
      arr.push(Object.values(data[key]))
  }))
  
  //console.log(arr);
 // return arr;
 var newarr=[];
 var newarrfinal =[];
 
for(var j in arr[1])
{
 for(var i in arr)
 {
     newarr[i]=(arr[i][j])
 }
 newarrfinal[j]=newarr;
 newarr=[];
}
//console.log(newarrfinal);
let data2 = (Object.entries(data));
  



  Highcharts.chart('matchesPerTeamPerYearContainer', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Matches Per Team Per Year'
    },
    xAxis: {
      categories: newarr  
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Matches Played Per Year'
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          color: ( // theme
            Highcharts.defaultOptions.title.style &&
            Highcharts.defaultOptions.title.style.color
          ) || 'gray'
        }
      }
    },
    legend: {
      align: 'right',
      x: -30,
      verticalAlign: 'top',
      y: 25,
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || 'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false
    },
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true
        }
      }
    },
    series: arr
  });
}



fetch('../output/extraRunsScoredPerTeam.json')
.then(response => response.json())
.then(data2 => {
    console.log(data2); 
    extraRunsScored(data2);

});

function extraRunsScored(data2) {
  let keys = Object.keys(data2);
  let values = Object.values(data2);

Highcharts.chart('extraRunsScoredContainer', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Extra Runs Scored Per Team '
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: keys,
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Extra Runs Scored Per Team in 2016'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} runs</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Teams',
    data: values
  }]
});
}

fetch('../output/topEconomicalBowlers.json')
.then(response => response.json())
.then(data2 => {
    console.log(data2); 
    topEconomicalBowlers(data2);

});

function topEconomicalBowlers(data2) {
  let keys = Object.keys(data2);
  let values = Object.values(data2);

Highcharts.chart('topEconomicalBowlersContainer', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Top Bowlers in 2015 '
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: keys,
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'TOp Bowlers in 2015'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} runs</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Bowlers',
    data: values
  }]
});
}

