//曲线图
var summaryTitle = '运动心率轨迹图';
var xData = ['12:40','12:42','12:44','12:46','12:48','12:50','12:52','12:54','12:56','12:58','13:00'];
var heartData = [80, 110, 140, 160, 155, 140, 150, 162, 171, 179, 120];

var rateChart = echarts.init(document.getElementById('heartRate'));
rateOption = {
    color:['rgba(0, 0, 0, 0.5)'],
    title : {
        text: summaryTitle,
        x:"left"
    },
    tooltip : {
        trigger: 'axis'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: false},
            dataView : {show: false, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        },
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : xData,
            splitLine:{
                show:false,
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            min : 70,
            max : 190,
            splitNumber: 6,
            splitArea:{
                show:true,
                areaStyle:{
                    color: [
                        'rgba(255,69,0,0.2)',
                        'rgba(70,130,180,0.2)',
                        'rgba(70,130,180,0.2)',
                        'rgba(60,179,113,0.2)',
                        'rgba(60,179,113,0.2)',
                        'rgba(255,69,0,0.2)',
                    ]
                }
            }
        }
    ],
    series : [
        {
            name:'心率',
            type:'line',
            data:heartData,
            smooth:true,
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        }
    ],
    grid:{
        x:30,
        y:50,
        x2:30,
        y2:30
    }
};
rateChart.setOption(rateOption);

//饼图
var pieChart = echarts.init(document.getElementById('piechart'));
pieOption = {
    color:['rgba(60,179,113,0.5)', 'rgba(70,130,180,0.5)','rgba(255,69,0,0.5)'],
    title : {
        text : "运动区间占比",
        x:"center",
        y:"top"
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'horizontal',
        x: "center",
        y : "bottom",
        data:['最佳区间','低于标准','高于标准']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: false},
            dataView : {show: false, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'center',
                        max: 1548
                    }
                }
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'访问来源',
            type:'pie',
            center: ['50%', '50%'],
            radius : ['50%', '70%'],
            itemStyle : {
                normal : {
                    label : {
                        show : false
                    },
                    labelLine : {
                        show : false
                    }
                },
                emphasis : {
                    label : {
                        show : true,
                        position : 'center',
                        textStyle : {
                            fontSize : '20',
                            fontWeight : 'bold'
                        }
                    }
                }
            },
            data:[
                {value:535, name:'最佳区间'},
                {value:310, name:'低于标准'},
                {value:234, name:'高于标准'},
            ]
        }
    ]
};
pieChart.setOption(pieOption);
