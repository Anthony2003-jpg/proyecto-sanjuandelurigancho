var map = L.map('map', {
    center: [-11.942488468870842, -76.99597477113127],
    zoom: 2,
    minZoom: 10,
    maxZoom: 35,
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
googleSat.addTo(map);

var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
googleTerrain.addTo(map);


var clinicas = L.tileLayer.wms("http://localhost:8080/geoserver/Webgis_sjl/wms?", {
	   layers: "Webgis_sjl:clinicas_sjl", //gisweb:clinicas_sjl
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
clinicas.addTo(map);

var hospitales = L.tileLayer.wms("http://localhost:8080/geoserver/Webgis_sjl/wms?", {
	   layers: "Webgis_sjl:hospitales_sjl", //gisweb:hospitales_sjl
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
hospitales.addTo(map);

var hoteles = L.tileLayer.wms("http://localhost:8080/geoserver/Webgis_sjl/wms?", {
	   layers: "Webgis_sjl:hoteles_sjl", //gisweb:hoteles_sjl
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
hoteles.addTo(map);

var sanjuandelurigancho = L.tileLayer.wms("http://localhost:8080/geoserver/Webgis_sjl/wms?", {
	   layers: "Webgis_sjl:sanjuandelurigancho", //gisweb:sanjuanlurigancho
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
sanjuandelurigancho.addTo(map);

var mercados = L.tileLayer.wms("http://localhost:8080/geoserver/Webgis_sjl/wms?", {
	   layers: "Webgis_sjl:mercados_sjl", //gisweb:mercados_sjl
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
mercados.addTo(map);

var restaurantes = L.tileLayer.wms("http://localhost:8080/geoserver/Webgis_sjl/wms?", {
	   layers: "Webgis_sjl:restaurantes_sjl", //gisweb:restaurantes_sjl
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
restaurantes.addTo(map);

var farmacias = L.tileLayer.wms("http://localhost:8080/geoserver/Webgis_sjl/wms?", {
	   layers: "Webgis_sjl:farmacias_sjl", //gisweb:farmacias_sjl
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
farmacias.addTo(map);

var comisarias = L.tileLayer.wms("http://localhost:8080/geoserver/Webgis_sjl/wms?", {
	   layers: "Webgis_sjl:comisarias_sjl", //gisweb:comisarias_sjl
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
comisarias.addTo(map);

var baseMaps = {
    "OSM": basemapOSM,
    "SATELLITE": googleSat,
    "TERRAIN": googleTerrain,
};

var overlayMaps = {
    "Clinicas": clinicas,
    "Hospitales": hospitales,
    "Hoteles": hoteles,
    "Mercados": mercados,
    "Restaurantes": restaurantes,
	"comisarias": comisarias,
	"sanjuandelurigancho": sanjuandelurigancho,
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);

L.control.scale({
    imperial: false
  }).addTo(map);
  




