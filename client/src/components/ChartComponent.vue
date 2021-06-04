<template>
 <div class="custom-card header-card card">
   <div class="card-body pt-0">
     <fusioncharts
       type="spline"
       dataformat="json"  
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
    this.tempChartData.data = this.tempVar;
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
