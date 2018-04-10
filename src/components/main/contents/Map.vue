<template lang="html">
  <div class="map">
    <div id="map-container">

    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LWMSTileLayer, LControlLayers,LMarker } from 'vue2-leaflet'
import L from 'leaflet'

// import image from './components/img/submarine.png'

// L.Icon.Default.imagePath = '.';
// OR
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  // iconUrl: require('~images/submarine.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

var tldmIcon = L.Icon.extend({
    options: {
        shadowUrl: 'leaf-shadow.png',
        iconSize:     [35, 35],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 20],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -20]
    }
});
  // var greenIcon = L.icon({
  //     // iconUrl: '~@/assets/submarine.png',
  //     // iconUrl: './static/img/submarine.png',
  //     iconUrl: this.image,
  //     // iconUrl : 'https://cdn0.iconfinder.com/data/icons/transportation-icons-3/110/Submarine-512.png',
  //     // shadowUrl: 'leaf-shadow.png',
  //
  //     iconSize:     [50, 50], // size of the icon
  //     shadowSize:   [50, 64], // size of the shadow
  //     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  //     shadowAnchor: [4, 62],  // the same for the shadow
  //     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  // });

export default {
  // components: {
  //   LMap,
  //   LTileLayer,
  //   'l-wms-tile-layer':LWMSTileLayer,
  //   LMarker,
  //   LControlLayers
  // },
  data() {
    return {
      image : 'img/ship.png',
      image2 : 'img/submarine.png'
    }
  },
  methods : {
    initMap(){
      var baseLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  			maxZoom: 18,
  			crossOrigin: true,
  		});

      var map = L.map('map-container',{
          layers: [baseLayer],
          crossOrigin: true,
          center: [2.939012181038986, 101.68361663818361],
          zoom: 9,
          crs: L.CRS.EPSG3857
      });

      // var layer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  		// 	maxZoom: 18,
  		// 	crossOrigin: true,
  		// });
      //
      // layer.addTo(map);

      var jasinLayer = L.tileLayer.wms("https://geoserver.geekz.com.my/geoserver/JASIN_DEMO/wms", {
        layers: ['JASIN_DEMO:zoning','JASIN_DEMO:mukim'],
  			format: 'image/png',
  			transparent: true
  		});

      var wmsLayer = L.tileLayer.wms("https://geoserver.geekz.com.my/geoserver/TLDM/wms", {
  			layers: ['TLDM:International_3857.shp'],
  			format: 'image/png',
  			transparent: true
  		});
      jasinLayer.addTo(map);
  		wmsLayer.addTo(map);
      // L.layerGroup().addLayer(jasinLayer,wmsLayer).addTo(map);
      this.addMarker(map);

      map.on('click',function(e){
        console.log(e.layer);
      });
      // map.eachLayer(function(layer){
      //     layer.bindPopup('Hello');
      // });
      // console.log(map);
    },
    addMarker(map){
      var shipIcon = new tldmIcon({iconUrl: this.image});
      var subIcon = new tldmIcon({iconUrl: this.image2});
      var myIcon = L.marker([2.939012181038986, 101.68361663818361],{
        title : 'anip',
        icon:shipIcon
      });
      myIcon.addTo(map).bindPopup('<div><h3>Title1</h3><div onclick="alert(\'1\')">Content1</div></div>');
      var myIcon = L.marker([2.939012181, 102.6836166],{
        title : 'asdf',
        icon:subIcon
      });
      myIcon.addTo(map).bindPopup('<div><h3>Title2</h3><div onclick="alert(\'2\')">Content2</div></div>');

    }
  },
  mounted(){
    this.initMap();
  }
}
</script>

<style lang="scss">

.map{
  position:absolute;
  height:100%;
  width:100%;
}

#map-container{
  position:absolute;
  height:100%;
  width:100%;
}
</style>
