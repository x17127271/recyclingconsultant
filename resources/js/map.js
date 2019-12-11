// var map = new ol.Map({
//     target: 'map',
//     layers: [
//       new ol.layer.Tile({
//         source: new ol.source.OSM()
//       }),
//     ],
//     view: new ol.View({
//       center: ol.proj.fromLonLat([-6.2425, 53.34859]),
//       zoom: 16,
//       maxZoom: 18,
//       minZoom: 11
//     })
//   });


var map;

function initialize_map() {
  map = new ol.Map({
    target: "map",
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM({
          url: "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
        })
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([-6.2425, 53.34859]),
      zoom: 16,
      maxZoom: 18,
      minZoom: 11
    })
  });
}

function add_map_point(lat, lng) {
  var vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([parseFloat(-6.2425), parseFloat(53.34859)], 'EPSG:4326', 'EPSG:3857')),
      })]
    }),
    style: new ol.style.Style({
      image: new ol.style.Icon({
        src: "./resources/images/placeholder.png"
      })
    })
  });
  map.addLayer(vectorLayer);
}