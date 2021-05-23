<template>
 <div class="custom-card header-card card">
   <div class="card-body pt-0">
     <fusioncharts
       type="spline"
       dataformat="json"  
       height="100%"
       width= "100%"     
       dataEmptyMessage="i-https://i.postimg.cc/R0QCk9vV/Rolling-0-9s-99px.gif"
       dataEmptyMessageImageScale=39
       :datasource="tempChartData"
     >
     </fusioncharts>
   </div>

 </div>
</template>

<script>
// import {formatDate} from '../utils/utils.js';
// import _ from 'lodash';

export default {
 props: ["tempVar"],
 components: {},
 data() {
   return {
     tempChartData: {
       chart: {
         caption: "Day Temperature Graph",
         captionFontBold: "0",
         captionFontColor: "#000000",
         captionPadding: "30",
         baseFont: "Courier New', Courier, monospace",
         chartTopMargin: "30",
         showHoverEffect: "1",
         theme: "fusion",
         showaxislines: "1",
         numberSuffix: "°C",
         anchorBgColor: "#800000",
         paletteColors: "#800000",
         drawCrossLine: "1",
         plotToolText: "$label<br><hr><b>$dataValue</b>",
         showAxisLines: "0",
         showYAxisValues: "0",
         anchorRadius: "4",
         divLineAlpha: "0",
         labelFontSize: "13",
         labelAlpha: "65",
         labelFontBold: "0",
         rotateLabels: "1",
         slantLabels: "1",
         canvasPadding: "20"
       },
       data: [],
     },
   };
 },
 methods: {
   setChartData: function() {


    // Group data by hour   
    const hourGroup = this.tempVar.reduce((groups, game) => {
        const date = game.obsTimeLocal.split(' ')[1].split(':')[0];
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(game);
        return groups;
    }, {});


    for (const property in hourGroup) {
        var avgBucket = [];

        const groupedObservations = hourGroup[property];

        groupedObservations.forEach(element => {
            avgBucket.push(element.metric.tempAvg)
            avgBucket / avgBucket.length
        });

        const length = avgBucket.length;
        const finalAvg =  avgBucket.reduce((a, b) => a + b, 0)
        hourGroup[property] = finalAvg / length
    }

    const sortedObj = Object.entries(hourGroup).sort((a,b) => a[0]-b[0]);

    var data = [];

    for(const hour in sortedObj) {
        var dataObject = {
            label: sortedObj[hour][0],
            value: Math.round(sortedObj[hour][1])
        };
        data.push(dataObject);
    }


    // for (var i = 0; i < this.tempVar.length; i++) {
    //     var dataObject = {
    //         label: formatDate(this.tempVar[i].obsTimeLocal),
    //         value: this.tempVar[i].metric.tempAvg
    // };
    //     data.push(dataObject);
    // }
    this.tempChartData.data = data;
   },
 },
 mounted: function() {
   this.setChartData();
 },
 watch: {
   tempVar: {
     handler: function() {
       this.setChartData();                                   
     },
     deep: true
   },
 },
};
</script>

<style>
</style>
