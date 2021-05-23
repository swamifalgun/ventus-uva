import Vue from 'vue'
import App from './App.vue'
import store from './store'
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import PowerCharts from 'fusioncharts/fusioncharts.powercharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import VueFusionCharts from 'vue-fusioncharts';
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

Vue.config.productionTip = false

Charts(FusionCharts);
PowerCharts(FusionCharts);
Widgets(FusionCharts);
FusionTheme(FusionCharts);

Vue.use(VueFusionCharts, FusionCharts);
Vue.use(require('vue-moment'));

// name is optional
Vue.use(VueLodash, { name: 'custom' , lodash: lodash })

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
