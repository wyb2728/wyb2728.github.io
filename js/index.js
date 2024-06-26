// 柱状图1模块
(function() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [
          "2023年3月15日",
          "2023年3月28日",
          "2023年4月2日",
          "2023年4月5日",
          "2023年4月7日",
          "2023年4月11日",
          "2023年4月13日"
        ],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
            // width: 1,
            // type: "solid"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "千克数",
        type: "bar",
        barWidth: "35%",
        data: [600, 700, 750, 900, 1500, 1200, 1300],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };

  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });

  // 数据变化
  var dataAll = [
    { year: "2019", data: [200, 300, 300, 900, 1500, 1200, 600] },
    { year: "2020", data: [300, 400, 350, 800, 1800, 1400, 700] }
  ];

  $(".bar h2 ").on("click", "a", function() {
    option.series[0].data = dataAll[$(this).index()].data;
    myChart.setOption(option);
  });
})();

// 折线图定制
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line .chart"));

  // (1)准备数据
  var data = {
    year: [
      [21, 25, 28, 30, 32, 31, 28, 27, 21, 28, 23, 27, 22, 17, 16, 25, 24, 17, 23, 28, 28, 24, 30, 27, 25, 20, 19, 21, 27, 30, 28, 25, 30, 30, 33, 24, 32, 34, 28, 25, 30, 23, 24, 30, 32, 35, 33, 31, 29, 31, 33, 33, 32, 29, 33, 30, 30, 25, 32, 35, 36, 34, 33, 34, 34, 36, 36, 35, 36, 35, 37, 35, 35, 34, 37, 36, 35, 32, 34, 28, 27, 32, 33, 32, 35, 36, 37, 30, 35, 34, 35, 36, 36, 35, 37, 38, 37, 37, 37, 38, 39, 39, 38, 39, 38, 39, 41, 39, 40, 40, 41, 40, 39, 38, 40, 39, 39, 36, 36, 35, 33, 25, 23, 24, 27, 27, 33, 36, 37, 36, 33, 28, 35, 35, 33, 23, 27, 28, 30, 26, 29, 27, 26, 18, 19, 20, 17, 23, 27, 20, 23, 28, 32, 32, 32, 34, 31, 21, 13, 13, 14, 18, 22, 25, 26, 24, 24, 24, 27, 27, 25, 25, 24, 27, 27, 25, 18, 17, 17, 16, 17, 17, 20, 25, 24, 24, 24, 18, 21, 24, 24, 20, 24, 24, 25, 26, 11, 12, 16, 14, 17, 16, 18, 19, 15, 17, 14, 17, 22, 20, 18, 19, 12, 6, 4, 6, 8, 8, 9, 10, 10, 10, 10, 11, 7, 11, 10, 13, 9, 9, 11, 12, 13, 7, 8, 8, 14, 14, 8, 6, 5, 7, 10, 11, 11, 7, 7, 8, 8, 9, 9, 7, 7, 10, 13, 9, 14, 12, 9, 3, 3, 5, 5, 11, 5, 5, 6, 8, 7, 5, 4, 12, 13, 15, 15, 18, 11, 8, 10, 8, 11, 15, 13, 9, 10, 10, 9, 8, 9, 7, 8, 6, 9, 9, 13, 11, 6, 6, 8, 14, 15, 16, 13, 12, 10, 14, 20, 21, 24, 15, 14, 21, 24, 13, 20, 12, 18, 23, 26, 13, 12, 10, 11, 14, 19, 15, 13, 11, 13, 12, 16, 14, 17, 22, 22, 24, 18, 26, 17, 13, 21, 16, 21, 26, 29, 30, 22, 20, 19, 28, 34, 31, 23, 32, 31, 23, 18, 11, 13, 25, 27, 22, 18, 24, 28, 30, 20, 22, 23, 22, 19, 17, 17, 16, 19, 23, 28, 27, 30, 30, 21, 32, 25, 24, 25, 28, 18, 18, 28, 22, 25, 27, 32, 35, 31, 26],
      [12, 10, 12, 14, 16, 19, 19, 17, 19, 18, 18, 18, 14, 11, 14, 13, 15, 15, 16, 17, 17, 16, 18, 20, 18, 17, 18, 18, 20, 20, 20, 21, 22, 22, 22, 21, 20, 20, 21, 19, 20, 20, 19, 19, 18, 20, 20, 21, 22, 23, 23, 24, 23, 23, 23, 23, 24, 22, 21, 23, 24, 23, 22, 23, 23, 23, 21, 23, 25, 24, 25, 24, 24, 24, 22, 24, 26, 25, 23, 23, 24, 23, 22, 23, 23, 23, 23, 23, 22, 19, 23, 23, 22, 22, 24, 26, 26, 27, 24, 26, 26, 27, 27, 27, 27, 25, 24, 27, 27, 27, 27, 27, 28, 27, 25, 25, 26, 27, 23, 24, 23, 20, 18, 20, 18, 17, 18, 20, 22, 20, 23, 23, 20, 20, 20, 20, 20, 20, 21, 23, 22, 19, 19, 14, 17, 15, 15, 16, 21, 17, 16, 21, 21, 23, 22, 21, 17, 14, 12, 12, 13, 9, 13, 12, 13, 15, 15, 17, 13, 11, 10, 9, 14, 14, 15, 17, 15, 14, 14, 13, 15, 15, 12, 11, 12, 9, 14, 12, 10, 11, 12, 12, 14, 16, 16, 11, 8, 9, 13, 12, 11, 13, 10, 13, 12, 13, 11, 13, 8, 13, 15, 11, 2, 1, 3, 3, 5, 3, 4, 5, 5, 6, 6, 6, 4, 6, 3, 4, 5, 1, 0, 0, 3, 2, 0, 5, 3, 4, 5, 3, 3, 3, 1, 1, 5, 5, 5, 6, 7, 3, 1, 2, 3, 6, 5, 8, 10, 7, 2, 2, 1, 1, 1, 2, 2, 3, 2, 1, 0, 2, 2, 0, 1, 0, 2, 7, 7, 4, 6, 7, 5, 7, 7, 8, 8, 7, 8, 6, 3, 5, 6, 5, 8, 8, 8, 5, 4, 5, 5, 4, 5, 5, 9, 9, 8, 7, 7, 4, 9, 8, 12, 10, 11, 9, 11, 5, 5, 9, 12, 10, 8, 8, 8, 10, 13, 13, 10, 9, 9, 9, 10, 9, 9, 10, 10, 15, 15, 15, 13, 11, 8, 11, 9, 13, 16, 13, 16, 17, 14, 12, 17, 19, 18, 17, 18, 14, 11, 9, 11, 12, 13, 15, 12, 10, 12, 16, 19, 19, 20, 18, 13, 14, 15, 13, 15, 14, 15, 14, 16, 17, 17, 19, 18, 18, 20, 15, 16, 15, 18, 21, 20, 22, 23, 23, 24, 22]
    ]
  };

  // 2. 指定配置和数据
  var option = {
    color: [ "#ed3f35","#00f2f1"],
    tooltip: {
      // 通过坐标轴来触发
      trigger: "axis"
    },
    legend: {
      // 距离容器10%
      right: "10%",
      // 修饰图例文字的颜色
      textStyle: {
        color: "#4c9bfd"
      }
      // 如果series 里面设置了name，此时图例组件的data可以省略
      // data: ["邮件营销", "联盟广告"]
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true,
      borderColor: "#012f4a",
      containLabel: true
    },

    xAxis: {
      type: "category",
      data: ['2022-05-01 周日', '2022-05-02 周一', '2022-05-03 周二', '2022-05-04 周三', '2022-05-05 周四', '2022-05-06 周五', '2022-05-07 周六', '2022-05-08 周日', '2022-05-09 周一', '2022-05-10 周二', '2022-05-11 周三', '2022-05-12 周四', '2022-05-13 周五', '2022-05-14 周六', '2022-05-15 周日', '2022-05-16 周一', '2022-05-17 周二', '2022-05-18 周三', '2022-05-19 周四', '2022-05-20 周五', '2022-05-21 周六', '2022-05-22 周日', '2022-05-23 周一', '2022-05-24 周二', '2022-05-25 周三', '2022-05-26 周四', '2022-05-27 周五', '2022-05-28 周六', '2022-05-29 周日', '2022-05-30 周一', '2022-05-31 周二', '2022-06-01 周三', '2022-06-02 周四', '2022-06-03 周五', '2022-06-04 周六', '2022-06-05 周日', '2022-06-06 周一', '2022-06-07 周二', '2022-06-08 周三', '2022-06-09 周四', '2022-06-10 周五', '2022-06-11 周六', '2022-06-12 周日', '2022-06-13 周一', '2022-06-14 周二', '2022-06-15 周三', '2022-06-16 周四', '2022-06-17 周五', '2022-06-18 周六', '2022-06-19 周日', '2022-06-20 周一', '2022-06-21 周二', '2022-06-22 周三', '2022-06-23 周四', '2022-06-24 周五', '2022-06-25 周六', '2022-06-26 周日', '2022-06-27 周一', '2022-06-28 周二', '2022-06-29 周三', '2022-06-30 周四', '2022-07-01 周五', '2022-07-02 周六', '2022-07-03 周日', '2022-07-04 周一', '2022-07-05 周二', '2022-07-06 周三', '2022-07-07 周四', '2022-07-08 周五', '2022-07-09 周六', '2022-07-10 周日', '2022-07-11 周一', '2022-07-12 周二', '2022-07-13 周三', '2022-07-14 周四', '2022-07-15 周五', '2022-07-16 周六', '2022-07-17 周日', '2022-07-18 周一', '2022-07-19 周二', '2022-07-20 周三', '2022-07-21 周四', '2022-07-22 周五', '2022-07-23 周六', '2022-07-24 周日', '2022-07-25 周一', '2022-07-26 周二', '2022-07-27 周三', '2022-07-28 周四', '2022-07-29 周五', '2022-07-30 周六', '2022-07-31 周日', '2022-08-01 周一', '2022-08-02 周二', '2022-08-03 周三', '2022-08-04 周四', '2022-08-05 周五', '2022-08-06 周六', '2022-08-07 周日', '2022-08-08 周一', '2022-08-09 周二', '2022-08-10 周三', '2022-08-11 周四', '2022-08-12 周五', '2022-08-13 周六', '2022-08-14 周日', '2022-08-15 周一', '2022-08-16 周二', '2022-08-17 周三', '2022-08-18 周四', '2022-08-19 周五', '2022-08-20 周六', '2022-08-21 周日', '2022-08-22 周一', '2022-08-23 周二', '2022-08-24 周三', '2022-08-25 周四', '2022-08-26 周五', '2022-08-27 周六', '2022-08-28 周日', '2022-08-29 周一', '2022-08-30 周二', '2022-08-31 周三', '2022-09-01 周四', '2022-09-02 周五', '2022-09-03 周六', '2022-09-04 周日', '2022-09-05 周一', '2022-09-06 周二', '2022-09-07 周三', '2022-09-08 周四', '2022-09-09 周五', '2022-09-10 周六', '2022-09-11 周日', '2022-09-12 周一', '2022-09-13 周二', '2022-09-14 周三', '2022-09-15 周四', '2022-09-16 周五', '2022-09-17 周六', '2022-09-18 周日', '2022-09-19 周一', '2022-09-20 周二', '2022-09-21 周三', '2022-09-22 周四', '2022-09-23 周五', '2022-09-24 周六', '2022-09-25 周日', '2022-09-26 周一', '2022-09-27 周二', '2022-09-28 周三', '2022-09-29 周四', '2022-09-30 周五', '2022-10-01 周六', '2022-10-02 周日', '2022-10-03 周一', '2022-10-04 周二', '2022-10-05 周三', '2022-10-06 周四', '2022-10-07 周五', '2022-10-08 周六', '2022-10-09 周日', '2022-10-10 周一', '2022-10-11 周二', '2022-10-12 周三', '2022-10-13 周四', '2022-10-14 周五', '2022-10-15 周六', '2022-10-16 周日', '2022-10-17 周一', '2022-10-18 周二', '2022-10-19 周三', '2022-10-20 周四', '2022-10-21 周五', '2022-10-22 周六', '2022-10-23 周日', '2022-10-24 周一', '2022-10-25 周二', '2022-10-26 周三', '2022-10-27 周四', '2022-10-28 周五', '2022-10-29 周六', '2022-10-30 周日', '2022-10-31 周一', '2022-11-01 周二', '2022-11-02 周三', '2022-11-03 周四', '2022-11-04 周五', '2022-11-05 周六', '2022-11-06 周日', '2022-11-07 周一', '2022-11-08 周二', '2022-11-09 周三', '2022-11-10 周四', '2022-11-11 周五', '2022-11-12 周六', '2022-11-13 周日', '2022-11-14 周一', '2022-11-15 周二', '2022-11-16 周三', '2022-11-17 周四', '2022-11-18 周五', '2022-11-19 周六', '2022-11-20 周日', '2022-11-21 周一', '2022-11-22 周二', '2022-11-23 周三', '2022-11-24 周四', '2022-11-25 周五', '2022-11-26 周六', '2022-11-27 周日', '2022-11-28 周一', '2022-11-29 周二', '2022-11-30 周三', '2022-12-01 周四', '2022-12-02 周五', '2022-12-03 周六', '2022-12-04 周日', '2022-12-05 周一', '2022-12-06 周二', '2022-12-07 周三', '2022-12-08 周四', '2022-12-09 周五', '2022-12-10 周六', '2022-12-11 周日', '2022-12-12 周一', '2022-12-13 周二', '2022-12-14 周三', '2022-12-15 周四', '2022-12-16 周五', '2022-12-17 周六', '2022-12-18 周日', '2022-12-19 周一', '2022-12-20 周二', '2022-12-21 周三', '2022-12-22 周四', '2022-12-23 周五', '2022-12-24 周六', '2022-12-25 周日', '2022-12-26 周一', '2022-12-27 周二', '2022-12-28 周三', '2022-12-29 周四', '2022-12-30 周五', '2022-12-31 周六', '2023-01-01 周日', '2023-01-02 周一', '2023-01-03 周二', '2023-01-04 周三', '2023-01-05 周四', '2023-01-06 周五', '2023-01-07 周六', '2023-01-08 周日', '2023-01-09 周一', '2023-01-10 周二', '2023-01-11 周三', '2023-01-12 周四', '2023-01-13 周五', '2023-01-14 周六', '2023-01-15 周日', '2023-01-16 周一', '2023-01-17 周二', '2023-01-18 周三', '2023-01-19 周四', '2023-01-20 周五', '2023-01-21 周六', '2023-01-22 周日', '2023-01-23 周一', '2023-01-24 周二', '2023-01-25 周三', '2023-01-26 周四', '2023-01-27 周五', '2023-01-28 周六', '2023-01-29 周日', '2023-01-30 周一', '2023-01-31 周二', '2023-02-01 周三', '2023-02-02 周四', '2023-02-03 周五', '2023-02-04 周六', '2023-02-05 周日', '2023-02-06 周一', '2023-02-07 周二', '2023-02-08 周三', '2023-02-09 周四', '2023-02-10 周五', '2023-02-11 周六', '2023-02-12 周日', '2023-02-13 周一', '2023-02-14 周二', '2023-02-15 周三', '2023-02-16 周四', '2023-02-17 周五', '2023-02-18 周六', '2023-02-19 周日', '2023-02-20 周一', '2023-02-21 周二', '2023-02-22 周三', '2023-02-23 周四', '2023-02-24 周五', '2023-02-25 周六', '2023-02-26 周日', '2023-02-27 周一', '2023-02-28 周二', '2023-03-01 周三', '2023-03-02 周四', '2023-03-03 周五', '2023-03-04 周六', '2023-03-05 周日', '2023-03-06 周一', '2023-03-07 周二', '2023-03-08 周三', '2023-03-09 周四', '2023-03-10 周五', '2023-03-11 周六', '2023-03-12 周日', '2023-03-13 周一', '2023-03-14 周二', '2023-03-15 周三', '2023-03-16 周四', '2023-03-17 周五', '2023-03-18 周六', '2023-03-19 周日', '2023-03-20 周一', '2023-03-21 周二', '2023-03-22 周三', '2023-03-23 周四', '2023-03-24 周五', '2023-03-25 周六', '2023-03-26 周日', '2023-03-27 周一', '2023-03-28 周二', '2023-03-29 周三', '2023-03-30 周四', '2023-03-31 周五', '2023-04-01 周六', '2023-04-02 周日', '2023-04-03 周一', '2023-04-04 周二', '2023-04-05 周三', '2023-04-06 周四', '2023-04-07 周五', '2023-04-08 周六', '2023-04-09 周日', '2023-04-10 周一', '2023-04-11 周二', '2023-04-12 周三', '2023-04-13 周四', '2023-04-14 周五', '2023-04-15 周六', '2023-04-16 周日', '2023-04-17 周一', '2023-04-18 周二', '2023-04-19 周三', '2023-04-20 周四', '2023-04-21 周五', '2023-04-22 周六', '2023-04-23 周日', '2023-04-24 周一', '2023-04-25 周二', '2023-04-26 周三', '2023-04-27 周四', '2023-04-28 周五', '2023-04-29 周六', '2023-04-30 周日', '2023-05-01 周一', '2023-05-02 周二', '2023-05-03 周三', '2023-05-04 周四', '2023-05-05 周五', '2023-05-06 周六', '2023-05-07 周日', '2023-05-08 周一', '2023-05-09 周二', '2023-05-10 周三', '2023-05-11 周四', '2023-05-12 周五', '2023-05-13 周六', '2023-05-14 周日', '2023-05-15 周一', '2023-05-16 周二', '2023-05-17 周三', '2023-05-18 周四', '2023-05-19 周五', '2023-05-20 周六', '2023-05-21 周日', '2023-05-22 周一', '2023-05-23 周二', '2023-05-24 周三', '2023-05-25 周四', '2023-05-26 周五', '2023-05-27 周六', '2023-05-28 周日', '2023-05-29 周一', '2023-05-30 周二', '2023-05-31 周三'],
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      // 去除x坐标轴的颜色
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      // 修改y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    dataZoom: [{
        type: 'inside',
        show: true,
        start: 0,
        end: 30,
        xAxisIndex: [0],
        bottom:-10
    }] ,

    series: [
      {
        name: "最高温度",
        type: "line",
        // 是否让线条圆滑显示
        smooth: true,
        data: data.year[0]
      },
      {
        name: "最低温度",
        type: "line",
        smooth: true,
        data: data.year[1]
      }
    ]
  };
  // 3. 把配置和数据给实例对象
  myChart.setOption(option);

  // 重新把配置好的新数据给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 饼形图定制
// 折线图定制
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie .chart"));

  option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
      position: function(p) {
        //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      }
    },
    legend: {
      top: "90%",
      itemWidth: 10,
      itemHeight: 10,
      data: ["幼芽", "一芽一叶", "一芽两叶"],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "芽叶比例",
        type: "pie",
        center: ["50%", "42%"],
        radius: ["40%", "60%"],
        color: [
          "#065aab",
          "#066eab",
          "#0682ab",
          "#0696ab",
          "#06a0ab",
          "#06b4ab",
          "#06c8ab",
          "#06dcab",
          "#06f0ab"
        ],
        label: { show: false },
        labelLine: { show: false },
        data: [
          { value: 5, name: "幼芽" },
          { value: 82, name: "一芽一叶" },
          { value: 13, name: "一芽两叶"}
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 学习进度柱状图模块
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));

  var data = [22.49, 1.47, 3.38, 0.11, 9.97];
  var titlename = ["茶多酚", "氨基酸", "咖啡碱", "黄酮", "碳水化合物"];
  var valdata = ["22.49%", "1.47%", "3.38%", "0.11%", "9.97%"];
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  option = {
    //图标位置
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%"
    },
    xAxis: {
      show: false
    },
    yAxis: [
      {
        show: true,
        data: titlename,
        inverse: true,
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#fff",

          rich: {
            lg: {
              backgroundColor: "#339911",
              color: "#fff",
              borderRadius: 15,
              // padding: 5,
              align: "center",
              width: 15,
              height: 15
            }
          }
        }
      },
      {
        show: true,
        inverse: true,
        data: valdata,
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: "#fff"
          }
        }
      }
    ],
    series: [
      {
        name: "条",
        type: "bar",
        yAxisIndex: 0,
        data: data,
        barCategoryGap: 50,
        barWidth: 10,
        itemStyle: {
          normal: {
            barBorderRadius: 20,
            color: function(params) {
              var num = myColor.length;
              return myColor[params.dataIndex % num];
            }
          }
        },
        label: {
          normal: {
            show: false,
            position: "inside",
            formatter: "{c}%"
          }
        }
      },
      {
        name: "框",
        type: "bar",
        yAxisIndex: 1,
        barCategoryGap: 50,
        data: [80, 80, 80, 80, 80],
        barWidth: 15,
        itemStyle: {
          normal: {
            color: "none",
            borderColor: "#00c1de",
            borderWidth: 3,
            barBorderRadius: 15
          }
        }
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 折线图 优秀作品
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line1 .chart"));

  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "#dddc6b"
        }
      }
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        },

        data: ['2022-05-01 周日', '2022-05-02 周一', '2022-05-03 周二', '2022-05-04 周三', '2022-05-05 周四', '2022-05-06 周五', '2022-05-07 周六', '2022-05-08 周日', '2022-05-09 周一', '2022-05-10 周二', '2022-05-11 周三', '2022-05-12 周四', '2022-05-13 周五', '2022-05-14 周六', '2022-05-15 周日', '2022-05-16 周一', '2022-05-17 周二', '2022-05-18 周三', '2022-05-19 周四', '2022-05-20 周五', '2022-05-21 周六', '2022-05-22 周日', '2022-05-23 周一', '2022-05-24 周二', '2022-05-25 周三', '2022-05-26 周四', '2022-05-27 周五', '2022-05-28 周六', '2022-05-29 周日', '2022-05-30 周一', '2022-05-31 周二', '2022-06-01 周三', '2022-06-02 周四', '2022-06-03 周五', '2022-06-04 周六', '2022-06-05 周日', '2022-06-06 周一', '2022-06-07 周二', '2022-06-08 周三', '2022-06-09 周四', '2022-06-10 周五', '2022-06-11 周六', '2022-06-12 周日', '2022-06-13 周一', '2022-06-14 周二', '2022-06-15 周三', '2022-06-16 周四', '2022-06-17 周五', '2022-06-18 周六', '2022-06-19 周日', '2022-06-20 周一', '2022-06-21 周二', '2022-06-22 周三', '2022-06-23 周四', '2022-06-24 周五', '2022-06-25 周六', '2022-06-26 周日', '2022-06-27 周一', '2022-06-28 周二', '2022-06-29 周三', '2022-06-30 周四', '2022-07-01 周五', '2022-07-02 周六', '2022-07-03 周日', '2022-07-04 周一', '2022-07-05 周二', '2022-07-06 周三', '2022-07-07 周四', '2022-07-08 周五', '2022-07-09 周六', '2022-07-10 周日', '2022-07-11 周一', '2022-07-12 周二', '2022-07-13 周三', '2022-07-14 周四', '2022-07-15 周五', '2022-07-16 周六', '2022-07-17 周日', '2022-07-18 周一', '2022-07-19 周二', '2022-07-20 周三', '2022-07-21 周四', '2022-07-22 周五', '2022-07-23 周六', '2022-07-24 周日', '2022-07-25 周一', '2022-07-26 周二', '2022-07-27 周三', '2022-07-28 周四', '2022-07-29 周五', '2022-07-30 周六', '2022-07-31 周日', '2022-08-01 周一', '2022-08-02 周二', '2022-08-03 周三', '2022-08-04 周四', '2022-08-05 周五', '2022-08-06 周六', '2022-08-07 周日', '2022-08-08 周一', '2022-08-09 周二', '2022-08-10 周三', '2022-08-11 周四', '2022-08-12 周五', '2022-08-13 周六', '2022-08-14 周日', '2022-08-15 周一', '2022-08-16 周二', '2022-08-17 周三', '2022-08-18 周四', '2022-08-19 周五', '2022-08-20 周六', '2022-08-21 周日', '2022-08-22 周一', '2022-08-23 周二', '2022-08-24 周三', '2022-08-25 周四', '2022-08-26 周五', '2022-08-27 周六', '2022-08-28 周日', '2022-08-29 周一', '2022-08-30 周二', '2022-08-31 周三', '2022-09-01 周四', '2022-09-02 周五', '2022-09-03 周六', '2022-09-04 周日', '2022-09-05 周一', '2022-09-06 周二', '2022-09-07 周三', '2022-09-08 周四', '2022-09-09 周五', '2022-09-10 周六', '2022-09-11 周日', '2022-09-12 周一', '2022-09-13 周二', '2022-09-14 周三', '2022-09-15 周四', '2022-09-16 周五', '2022-09-17 周六', '2022-09-18 周日', '2022-09-19 周一', '2022-09-20 周二', '2022-09-21 周三', '2022-09-22 周四', '2022-09-23 周五', '2022-09-24 周六', '2022-09-25 周日', '2022-09-26 周一', '2022-09-27 周二', '2022-09-28 周三', '2022-09-29 周四', '2022-09-30 周五', '2022-10-01 周六', '2022-10-02 周日', '2022-10-03 周一', '2022-10-04 周二', '2022-10-05 周三', '2022-10-06 周四', '2022-10-07 周五', '2022-10-08 周六', '2022-10-09 周日', '2022-10-10 周一', '2022-10-11 周二', '2022-10-12 周三', '2022-10-13 周四', '2022-10-14 周五', '2022-10-15 周六', '2022-10-16 周日', '2022-10-17 周一', '2022-10-18 周二', '2022-10-19 周三', '2022-10-20 周四', '2022-10-21 周五', '2022-10-22 周六', '2022-10-23 周日', '2022-10-24 周一', '2022-10-25 周二', '2022-10-26 周三', '2022-10-27 周四', '2022-10-28 周五', '2022-10-29 周六', '2022-10-30 周日', '2022-10-31 周一', '2022-11-01 周二', '2022-11-02 周三', '2022-11-03 周四', '2022-11-04 周五', '2022-11-05 周六', '2022-11-06 周日', '2022-11-07 周一', '2022-11-08 周二', '2022-11-09 周三', '2022-11-10 周四', '2022-11-11 周五', '2022-11-12 周六', '2022-11-13 周日', '2022-11-14 周一', '2022-11-15 周二', '2022-11-16 周三', '2022-11-17 周四', '2022-11-18 周五', '2022-11-19 周六', '2022-11-20 周日', '2022-11-21 周一', '2022-11-22 周二', '2022-11-23 周三', '2022-11-24 周四', '2022-11-25 周五', '2022-11-26 周六', '2022-11-27 周日', '2022-11-28 周一', '2022-11-29 周二', '2022-11-30 周三', '2022-12-01 周四', '2022-12-02 周五', '2022-12-03 周六', '2022-12-04 周日', '2022-12-05 周一', '2022-12-06 周二', '2022-12-07 周三', '2022-12-08 周四', '2022-12-09 周五', '2022-12-10 周六', '2022-12-11 周日', '2022-12-12 周一', '2022-12-13 周二', '2022-12-14 周三', '2022-12-15 周四', '2022-12-16 周五', '2022-12-17 周六', '2022-12-18 周日', '2022-12-19 周一', '2022-12-20 周二', '2022-12-21 周三', '2022-12-22 周四', '2022-12-23 周五', '2022-12-24 周六', '2022-12-25 周日', '2022-12-26 周一', '2022-12-27 周二', '2022-12-28 周三', '2022-12-29 周四', '2022-12-30 周五', '2022-12-31 周六', '2023-01-01 周日', '2023-01-02 周一', '2023-01-03 周二', '2023-01-04 周三', '2023-01-05 周四', '2023-01-06 周五', '2023-01-07 周六', '2023-01-08 周日', '2023-01-09 周一', '2023-01-10 周二', '2023-01-11 周三', '2023-01-12 周四', '2023-01-13 周五', '2023-01-14 周六', '2023-01-15 周日', '2023-01-16 周一', '2023-01-17 周二', '2023-01-18 周三', '2023-01-19 周四', '2023-01-20 周五', '2023-01-21 周六', '2023-01-22 周日', '2023-01-23 周一', '2023-01-24 周二', '2023-01-25 周三', '2023-01-26 周四', '2023-01-27 周五', '2023-01-28 周六', '2023-01-29 周日', '2023-01-30 周一', '2023-01-31 周二', '2023-02-01 周三', '2023-02-02 周四', '2023-02-03 周五', '2023-02-04 周六', '2023-02-05 周日', '2023-02-06 周一', '2023-02-07 周二', '2023-02-08 周三', '2023-02-09 周四', '2023-02-10 周五', '2023-02-11 周六', '2023-02-12 周日', '2023-02-13 周一', '2023-02-14 周二', '2023-02-15 周三', '2023-02-16 周四', '2023-02-17 周五', '2023-02-18 周六', '2023-02-19 周日', '2023-02-20 周一', '2023-02-21 周二', '2023-02-22 周三', '2023-02-23 周四', '2023-02-24 周五', '2023-02-25 周六', '2023-02-26 周日', '2023-02-27 周一', '2023-02-28 周二', '2023-03-01 周三', '2023-03-02 周四', '2023-03-03 周五', '2023-03-04 周六', '2023-03-05 周日', '2023-03-06 周一', '2023-03-07 周二', '2023-03-08 周三', '2023-03-09 周四', '2023-03-10 周五', '2023-03-11 周六', '2023-03-12 周日', '2023-03-13 周一', '2023-03-14 周二', '2023-03-15 周三', '2023-03-16 周四', '2023-03-17 周五', '2023-03-18 周六', '2023-03-19 周日', '2023-03-20 周一', '2023-03-21 周二', '2023-03-22 周三', '2023-03-23 周四', '2023-03-24 周五', '2023-03-25 周六', '2023-03-26 周日', '2023-03-27 周一', '2023-03-28 周二', '2023-03-29 周三', '2023-03-30 周四', '2023-03-31 周五', '2023-04-01 周六', '2023-04-02 周日', '2023-04-03 周一', '2023-04-04 周二', '2023-04-05 周三', '2023-04-06 周四', '2023-04-07 周五', '2023-04-08 周六', '2023-04-09 周日', '2023-04-10 周一', '2023-04-11 周二', '2023-04-12 周三', '2023-04-13 周四', '2023-04-14 周五', '2023-04-15 周六', '2023-04-16 周日', '2023-04-17 周一', '2023-04-18 周二', '2023-04-19 周三', '2023-04-20 周四', '2023-04-21 周五', '2023-04-22 周六', '2023-04-23 周日', '2023-04-24 周一', '2023-04-25 周二', '2023-04-26 周三', '2023-04-27 周四', '2023-04-28 周五', '2023-04-29 周六', '2023-04-30 周日', '2023-05-01 周一', '2023-05-02 周二', '2023-05-03 周三', '2023-05-04 周四', '2023-05-05 周五', '2023-05-06 周六', '2023-05-07 周日', '2023-05-08 周一', '2023-05-09 周二', '2023-05-10 周三', '2023-05-11 周四', '2023-05-12 周五', '2023-05-13 周六', '2023-05-14 周日', '2023-05-15 周一', '2023-05-16 周二', '2023-05-17 周三', '2023-05-18 周四', '2023-05-19 周五', '2023-05-20 周六', '2023-05-21 周日', '2023-05-22 周一', '2023-05-23 周二', '2023-05-24 周三', '2023-05-25 周四', '2023-05-26 周五', '2023-05-27 周六', '2023-05-28 周日', '2023-05-29 周一', '2023-05-30 周二', '2023-05-31 周三']
      },
      {
        axisPointer: { show: false },
        axisLine: { show: false },
        position: "bottom",
        offset: 20
      }
    ],

    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },

        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
        dataZoom: [{
        type: 'inside',
        show: true,
        start: 0,
        end: 30,
        xAxisIndex: [0],
        bottom:-10
    }] ,
    series: [
      {
        name: "空气质量指数",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#0184d5",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(1, 132, 213, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(1, 132, 213, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [
29, 36, 44, 47, 47, 49, 50, 46, 43, 26, 25, 25, 31, 29, 29, 34, 41, 35, 25, 30, 42, 37, 34, 40, 44, 27, 29, 22, 25, 43, 54, 54, 33, 25, 27, 21, 37, 48, 52, 52, 51, 50, 30, 30, 41, 50, 51, 44, 28, 24, 23, 23, 29, 32, 24, 29, 35, 27, 29, 47, 45, 41, 27, 23, 23, 29, 31, 34, 35, 33, 29, 26, 29, 31, 31, 39, 39, 31, 24, 23, 16, 21, 24, 29, 23, 27, 34, 23, 25, 25, 27, 34, 31, 32, 35, 32, 32, 25, 19, 22, 24, 27, 26, 24, 22, 26, 26, 29, 29, 28, 33, 33, 29, 21, 27, 35, 33, 34, 26, 31, 33, 23, 16, 22, 31, 36, 37, 38, 40, 45, 38, 38, 44, 41, 32, 26, 36, 58, 72, 70, 55, 54, 41, 27, 17, 17, 19, 22, 24, 27, 29, 30, 39, 44, 34, 40, 37, 27, 17, 13, 13, 21, 27, 30, 32, 43, 49, 58, 50, 48, 56, 57, 56, 66, 70, 91, 66, 32, 43, 27, 23, 31, 22, 30, 35, 49, 49, 79, 79, 59, 73, 74, 58, 71, 87, 81, 19, 19, 29, 38, 39, 53, 59, 66, 64, 24, 26, 21, 32, 43, 62, 71, 40, 39, 21, 32, 43, 62, 71, 49, 49, 79, 79, 59, 73, 32, 43, 62, 71, 94, 76, 88, 63, 71, 40, 39, 71, 94, 76, 88, 71, 94, 76, 88, 63, 76, 64, 46, 71, 94, 76, 88, 88, 109, 127, 136, 176, 198, 56, 27, 27, 38, 48, 57, 75, 152, '201 重度', 124, 83, 72, 95, 100, 70, 80, 85, 98, 103, 117, 96, 92, 83, 113, 68, 83, 44, 35, 39, 31, 19, 23, 37, 54, 59, 62, 55, 60, 39, 34, 36, 37, 48, 67, 79, 92, 89, 65, 67, 57, 55, 63, 57, 45, 42, 42, 33, 42, 40, 35, 48, 66, 21, 16, 22, 30, 32, 33, 34, 27, 28, 31, 34, 38, 48, 46, 39, 41, 62, 53, 25, 18, 29, 52, 62, 67, 64, 64, 76, 72, 47, 47, 49, 54, 59, 46, 47, 48, 23, 17, 18, 26, 38, 38, 41, 48, 57, 49, 49, 39, 50, 34, 18, 21, 24, 32, 25, 25, 33, 48, 52, 48, 32, 29, 45, 35, 35, 36, 21, 21, 27, 38, 33, 25, 43, 40, 39, 27
        ]
      },
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 点位分布统计模块
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie1  .chart"));
  // 2. 指定配置项和数据
  var option = {
    legend: {
      top: "90%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // 注意颜色写的位置
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],
    series: [
      {
        name: "点位统计",
        type: "pie",
        // 如果radius是百分比则必须加引号
        radius: ["10%", "70%"],
        center: ["50%", "42%"],
        roseType: "radius",
        data: [
          { value: 20, name: "云南" },
          { value: 26, name: "北京" },
          { value: 24, name: "山东" },
          { value: 25, name: "河北" },
          { value: 20, name: "江苏" },
          { value: 25, name: "浙江" },
          { value: 30, name: "深圳" },
          { value: 42, name: "广东" }
        ],
        // 修饰饼形图文字相关的样式 label对象
        label: {
          fontSize: 10
        },
        // 修饰引导线样式
        labelLine: {
          // 连接到图形的线长度
          length: 10,
          // 连接到文字的线长度
          length2: 10
        }
      }
    ]
  };

  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();
