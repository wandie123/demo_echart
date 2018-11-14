import { Component, OnInit, Input } from '@angular/core';
declare var echarts: any;
@Component({
  selector: 'app-demo-echart',
  templateUrl: './demo-echart.component.html',
  styleUrls: ['./demo-echart.component.css']
})
export class DemoEchartComponent implements OnInit {
  @Input() result = {
    "result": {
      "simple_size": [10, 24, 48, 96],
      "cmax": [86.11162282, 99.80422013, 88.82742124, 89.5800514],
      "ci90": [
        [10.12079116, 9.884907884],
        [8.315755291, 8.157550947],
        [7.104273246, 6.998062628],
        [4.945397473, 4.892707625]
      ]
    }
  };
  constructor() { }

  ngOnInit() {


    let data = this.result.result.cmax.map((val, i) => {
      return {
        value: val,

        x: this.result.result.simple_size[i],
        l: this.result.result.ci90[i][0],
        u: this.result.result.ci90[i][1]
      }
    });
    // [
    //     {
    //         "value": -1.1618426259,
    //         "date": "2012-08-28",
    //         "l": -2.6017329022,
    //         "u": 0.2949717757
    //     },
    //     {
    //         "value": -0.5828247293,
    //         "date": "2012-08-29",
    //         "l": -1.3166963635,
    //         "u": 0.1324086347
    //     },
    //     {
    //         "value": -0.3790770636,
    //         "date": "2012-08-30",
    //         "l": -0.8712221305,
    //         "u": 0.0956413566
    //     }];
    var myChart = echarts.init(document.getElementById('main'));

    myChart.setOption({
      title: {
        text: 'Sample size (AUC Rao)',
        left: 'center',
        bottom: '0%'

      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          animation: false,
          label: {
            backgroundColor: '#ccc',
            borderColor: '#aaa',
            borderWidth: 1,
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            textStyle: {
              color: '#222'
            }
          }
        },
        formatter: function (params) {
          return params[2].name + '<br />' + params[2].value;
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: data.map(function (item) {
          return item.x;
        }),
        axisLabel: {
          formatter: function (value, idx) {
            return value
          }
        },
        splitLine: {
          show: false
        },
        boundaryGap: false,
        splitNumber: 2
      },
      yAxis: {
        min: 60,
        splitNumber: 6,
        splitLine: {
          show: false
        },
        name: 'T/R%'
      },
      series: [{
        name: 'L',
        type: 'line',
        data: data.map(function (item, i) {
          // alert(item.l +":"+ item.u);
          // return (item.value + item.u);
          return item.value - item.u;
        }),
        lineStyle: {
          normal: {
            opacity: 0
          }
        },
        stack: 'confidence-band',
        symbol: 'none'
      }, {
        name: 'U',
        type: 'line',
        data: data.map(function (item, i) {
          return item.u + item.l;
        }),
        lineStyle: {
          normal: {
            opacity: 0
          }
        },
        areaStyle: {
          normal: {
            color: '#ccc'
          }
        },
        stack: 'confidence-band',
        symbol: 'none'
      }, {
        type: 'line',
        data: data.map(function (item) {
          return item.value;
        }),
        hoverAnimation: false,
        symbolSize: 6,
        itemStyle: {
          normal: {
            opacity: 1,
            color: '#c23531'
          }
        },
        showSymbol: false,
      }]
    });

  }

}
