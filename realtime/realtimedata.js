$(document).ready(function () {
    var heartData = [80, 110, 140, 160, 155, 140, 80, 110, 140, 160, 155, 140, 80, 110, 140, 160, 155, 140, 80,200];
    function realtimeRecommend(bpm){
        var recommendText = document.getElementById('recommendText');
        switch(true)
        {
        case bpm>170:
            recommendText.innerHTML = "心率偏高！稍微休息一下吧！";
            break;
        case bpm>120:
            recommendText.innerHTML = "心率最佳！继续加油!为你点赞！";
            break;
        case bpm>80:
            recommendText.innerHTML = "心率偏低！加油哦！还可以做得更好！";
            break;
        default:
            recommendText.innerHTML = "心率过低！是不是身体不适？休息一下";
        }
    };
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });
    Highcharts.chart('realtimeheartRate', {
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function () {
                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(),
                            y = Math.floor(Math.random()*140 + 60);
                            realtimeRecommend(y);
                        series.addPoint([x, y], true, true);//新增数据点
                    }, 1000);
                }
            }
        },
        title: {
            text: '运动心率动态数据'
        },
        xAxis: {
            type: 'datetime',
            /*tickPixelInterval: 150*/
            tickAmount: 10
        },
        yAxis: {
            title: {
                text: '心率(bpm)'
            },/*
            plotLines: [{
                value: 0,
                width: 1,
                color: null
            }],*/
            gridLineWidth: 0,
            tickInterval:20,
            min:60,
            max:200,
            plotBands:[
                {
                    from: 60,
                    to: 80,
                    color: 'rgba(102,153,204,0.6)',
                    label: {
                        text: '过低',
                        style: {
                            color: '#000'
                        }
                    }
                },
                {
                    from: 80,
                    to: 120,
                    color: 'rgba(70,130,180,0.3)',
                    label: {
                        text: '偏低',
                        style: {
                            color: '#000'
                        }
                    }
                },
                {
                    from: 120,
                    to: 170,
                    color: 'rgba(60,179,113,0.2)',
                    label: {
                        text: '最佳',
                        style: {
                            color: '#000'
                        }
                    }
                },
                {
                    from: 170,
                    to: 200,
                    color: 'rgba(210,105,30,0.5)',
                    label: {
                        text: '偏高',
                        style: {
                            color: '#000'
                        }
                    }
                }
            ]
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Random data',
            lineWidth: 1,
            color: "rgba(0,0,0,0.5)",
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;
                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: heartData[i+19]
                    });
                }
                return data;
            }())
        }]
    });
});
