<template lang="html">
  <div class="map">
    <l-map ref="map" :zoom="zoom" :url="url" :center="center" @click="clicked">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <!-- <l-wms-tile-layer :baseUrl="url" :visible="true" :name="'basemap'" layerType="base" /> -->
          <!-- <l-control-layers /> -->
      <!-- <l-wms-tile-layer v-for="layer in layers" :key="layer.name"  :baseUrl="baseUrl"
        :layers="layer.layers" :visible="layer.visible" :name="layer.name" layerType="base"  />
      <l-marker :lat-lng="marker"></l-marker> -->
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LWMSTileLayer, LControlLayers,LMarker } from 'vue2-leaflet'
import L from 'leaflet'

// L.Icon.Default.imagePath = '.';
// OR
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// L.tileLayer.wms("https://geoserver.geekz.com.my/geoserver/JASIN_DEMO/ows", {
//     layers: 'JASIN_DEMO:zoning',
//     // format: 'image/png',
//     // transparent: true
// });

export default {
  components: {
    LMap,
    LTileLayer,
    'l-wms-tile-layer':LWMSTileLayer,
    LMarker,
    LControlLayers
  },
  data() {
    return {
      zoom:9,
      center: L.latLng(2.939012181038986, 101.68361663818361),
      url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      // url:'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      baseUrl: 'https://geoserver.geekz.com.my/geoserver/JASIN_DEMO/ows',
      layers: [
        {
          name: 'Zoning',
          visible: true,
          layers: 'JASIN_DEMO:zoning',
        },
        {
          name: 'Mukim',
          visible: false,
          layers: 'JASIN_DEMO:mukim',
        }
        // {
        //   name: 'Countries',
        //   visible: false,
        //   layers: 'ne:ne_10m_admin_0_countries',
        // },
        // {
        //   name: 'Boundaries and Countries',
        //   visible: false,
        //   layers: 'ne:ne_10m_admin_0_boundary_lines_land,ne:ne_10m_admin_0_countries',
        // }
      ],
      marker: L.latLng(2.939012181038986, 101.68361663818361),
      transparent : true
    }
  },
  methods : {
    clicked(event){
      console.log(event);
    }
  },
  mounted(){
    console.log(this.$refs.map);
  }
}
</script>

<style lang="scss">
// @import "~leaflet/dist/leaflet.css";
.map{
  position:absolute;
  height:100%;
  width:100%;
}
</style>
