// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

//IMPORT VUE FILES FILES
import App from './App'
import router from './router'

import VueSession from 'vue-session'

//VUE JS TEMPLATE PLUGINS
import moment from "moment";
import VueMomentJS from "vue-momentjs";
import VueToasted from 'vue-toasted'
import VueGoodTable from 'vue-good-table'
import VueDraggable from 'vuedraggable'
import FullCalendar from 'vue-full-calendar'
import "fullcalendar/dist/fullcalendar.min.css";
import Vue2leaflet from 'vue2-leaflet'
import leaflet from 'leaflet'

//VUEX STORAGE
import sidebar from './store/sidebar'
import data from './store/data'

// PLUGINS CSS IMPORT
import 'leaflet/dist/leaflet.css'

//VUE JS MIDDLEWARE
Vue.use(VueSession)
Vue.use(VueToasted)
Vue.use(VueGoodTable)
Vue.use(VueDraggable)
Vue.use(FullCalendar)
Vue.use(VueMomentJS, moment)
Vue.use(Vue2leaflet)
Vue.use(leaflet)
Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  modules : {
    sidebar,
    data
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
