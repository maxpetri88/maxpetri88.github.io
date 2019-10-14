var mymap = L.map('mapid', {
  //fullscreen plugin
    fullscreenControl: true,
    // OR
    fullscreenControl: {
        pseudoFullscreen: false // if true, fullscreen to page width and height
    }
});

var osmURL = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
L.tileLayer(osmURL, {
}).addTo(mymap);

// coordinate position plugin
L.control.mousePosition().addTo(mymap);

// print plugin
L.easyPrint({
	title: 'My awesome print button',
	position: 'bottomleft',
	sizeModes: ['A4Portrait', 'A4Landscape']
}).addTo(mymap);

//		var map = new L.Map('map');
//		var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
//		var osmAttrib='Map data &copy; OpenStreetMap contributors';
//		var osm = new L.TileLayer(osmUrl, {minZoom: 5, maxZoom: 18, attribution: osmAttrib});

//		map.addLayer(osm);
//		map.setView(new L.LatLng(59.92448055859924, 10.758276373601069),10);

		//Plugin magic goes here! Note that you cannot use the same layer object again, as that will confuse the two map controls
//		var osm2 = new L.tileLayer(osmUrl, {minZoom: 0, maxZoom: 13, attribution: osmAttrib });
//		var miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true }).addTo(map);


// minimap plugin - not working at this time
//var osmAttrib='Map data &copy; OpenStreetMap contributors';

//var osm2 = new L.tileLayer(osmURL, {minZoom: 0, maxZoom: 13, attribution: osmAttrib});
//var miniMap = new L.Control.MiniMap(osm2).addTo(mymap);


// geocoder plugin
var options = {
  key: geocoder_api_key,
  limit: 10
};
var control = L.Control.openCageSearch(options).addTo(mymap);

// 7 wonders markers with popup
/*var points = [
        	['<b>India\'s Taj Mahal</b>', 27.174961, 78.042385, L.icon({ iconURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/35px-Flag_of_India.svg.png', iconSize: [20,25],})],
        	['<b>Great Wall of China</b>', 40.334245, 116.477652],
          ['<b>Petra of Jordan</b>', 30.328611, 35.441944],
          ['<b>Brazil\'s statue of Christ the Redeemer</b>', -22.951389, -43.2108334],
          ['<b>Peru\'s Machu Picchu</b>',-13.163056, -72.545556],
          ['<b>Mexico\'s Chichen Itza pyramid</b>', 20.682778, -88.569167],
          ['<b>The Colosseum in Rome</b>', 41.890169, 12.492269]
        ];*/
var indiaFlag = L.icon({
  iconUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/35px-Flag_of_India.svg.png',
  iconSize: [25,20]
});
var chinaFlag = L.icon({
  iconUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/35px-Flag_of_the_People%27s_Republic_of_China.svg.png',
  iconSize: [25,20]
});
var jordanFlag = L.icon({
  iconUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/35px-Flag_of_Jordan.svg.png',
  iconSize: [25,20]
});
var brazilFlag = L.icon({
  iconUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/33px-Flag_of_Brazil.svg.png',
  iconSize: [25,20]
});
var peruFlag = L.icon({
  iconUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/35px-Flag_of_Peru.svg.png',
  iconSize: [25,20]
});
var mexicoFlag = L.icon({
  iconUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/35px-Flag_of_Mexico.svg.png',
  iconSize: [25,20]
});
var italyFlag = L.icon({
  iconUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/35px-Flag_of_Italy.svg.png',
  iconSize: [25,20]
});

var marker0 = L.marker([27.174961, 78.042385], {icon: indiaFlag}).addTo(mymap);
var marker1 = L.marker([40.334245, 116.477652], {icon: chinaFlag}).addTo(mymap);
var marker2 = L.marker([30.328611, 35.441944], {icon: jordanFlag}).addTo(mymap);
var marker3 = L.marker([-22.951389, -43.2108334], {icon: brazilFlag}).addTo(mymap);
var marker4 = L.marker([-13.163056, -72.545556], {icon: peruFlag}).addTo(mymap);
var marker5 = L.marker([20.682778, -88.569167], {icon: mexicoFlag}).addTo(mymap);
var marker6 = L.marker([41.890169, 12.492269], {icon: italyFlag}).addTo(mymap);

var tajM = '<b>India\'s Taj Mahal</b>' +
        '<p>The Taj Mahal was designated as a UNESCO World Heritage Site in 1983 for being "the jewel of Muslim art in India and one of the universally admired masterpieces of the world\'s heritage".' +
        '<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/375px-Taj_Mahal_%28Edited%29.jpeg" width=50px height=50px>';

marker0.bindPopup(tajM);
marker0.on('click', function(e){
  mymap.setView(e.latlng, 14);
});

var gWall = '<b>Great Wall of China</b>' +
          '<p>Apart from defense, other purposes of the Great Wall have included border controls, allowing the imposition of duties on goods transported along the Silk Road, regulation or encouragement of trade and the control of immigration and emigration.' +
          '<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/360px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg" width=80px height=50px>';

marker1.bindPopup(gWall);
marker1.on('click', function(e){
  mymap.setView(e.latlng, 14);
});

var petra = '<b>Petra of Jordan</b>' +
          '<p>Petra (Arabic: ٱلْبَتْرَاء‎, romanized: Al-Batrāʾ; Ancient Greek: Πέτρα, "Stone"), originally known to its inhabitants as Raqmu, is a historical and archaeological city in southern Jordan.' +
          '<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Petra_Jordan_BW_21.JPG/300px-Petra_Jordan_BW_21.JPG" width=50px height=90px>';

marker2.bindPopup(petra);
marker2.on('click', function(e){
  mymap.setView(e.latlng, 14);
});

var christ = '<b>Brazil\'s statue of Christ the Redeemer</b>' +
          '<p>Christ the Redeemer (Portuguese: Cristo Redentor, standard Brazilian Portuguese: [ˈkɾistu ʁedẽˈtoʁ], local pronunciation: [ˈkɾiɕtŭ̻ xe̞dẽ̞ˈtoɦ]) is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot.' +
          '<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Cristo_Redentor_-_Rio_de_Janeiro%2C_Brasil.jpg/330px-Cristo_Redentor_-_Rio_de_Janeiro%2C_Brasil.jpg" width=50px height=90px>';

marker3.bindPopup(christ);
marker3.on('click', function(e){
  mymap.setView(e.latlng, 14);
});

var machuP = '<b>Peru\'s Machu Picchu</b>' +
          '<p>Machu Picchu (English: /ˈmɑːtʃuː ˈpiːktʃuː/ or /ˈpiːtʃuː/, Spanish: [ˈmatʃu ˈpi(k)tʃu]; Quechua: Machu Pikchu [ˈmatʃʊ ˈpɪktʃʊ]) is a 15th-century Inca citadel, located in the Eastern Cordillera of southern Peru, on a 2,430-metre (7,970 ft) mountain ridge.' +
          '<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/80_-_Machu_Picchu_-_Juin_2009_-_edit.2.jpg/450px-80_-_Machu_Picchu_-_Juin_2009_-_edit.2.jpg" width=50px height=60px>';

marker4.bindPopup(machuP);
marker4.on('click', function(e){
  mymap.setView(e.latlng, 14);
});

var chichenI = '<b>Mexico\'s Chichen Itza pyramid</b>' +
          '<p>Chichen Itza was a large pre-Columbian city built by the Maya people of the Terminal Classic period. The archaeological site is located in Tinúm Municipality, Yucatán State, Mexico.' +
          '<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Chichen_Itza_3.jpg/540px-Chichen_Itza_3.jpg" width=80px height=45px>';

marker5.bindPopup(chichenI);
marker5.on('click', function(e){
  mymap.setView(e.latlng, 14);
});

var colosseum = '<b>The Colosseum in Rome</b>' +
          '<p>The Colosseum or Coliseum, also known as the Flavian Amphitheatre (Latin: Amphitheatrum Flavium; Italian: Anfiteatro Flavio or Colosseo), is an oval amphitheatre in the centre of the city of Rome, Italy. Built of travertine limestone, tuff (volcanic rock), and brick-faced concrete, it was the largest amphitheatre ever built at the time and held 50,000 spectators.' +
          '<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg/375px-Colosseum_in_Rome%2C_Italy_-_April_2007.jpg" width=80px height=50px>';

marker6.bindPopup(colosseum);
marker6.on('click', function(e){
  mymap.setView(e.latlng, 14);
});

/*	for( i = 0; i < points.length; i++ ) {
		   	//var position = new google.maps.LatLng(points[i][1], points[i][2]);
		   	//bounds.extend(position);
		   	marker = L.marker([points[i][1],
          points[i][2],
          points[i][3],
      ]).addTo(mymap);
      marker[0] = L.marker(points[i][1]).addTo(mymap);
    }

//        marker[0].bindPopup("I am the first of the seven wonders.");
//        marker[1].bindPopup("I am the second of the seven wonders.");

//        marker.on('click', function(e){
//         mymap.setView(e.latlng, 14);
       });*/

//var marker = L.marker(["India's Taj Mahal", 27.174961, 78.042385]).addTo(mymap);
/*L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={access_Token}', {
  maxZoom: 18,
  id: 'mapbox.mapbox-traffic-v1',
  access_Token: mapbox_access_token
}).addTo(mymap);*/

//      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//      }).addTo(mymap);



/*
var marker = L.marker([51.5, -0.09]).addTo(mymap);

var circle = L.circle([51.508, -0.11], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(mymap);

var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(mymap);

var polyline = L.polyline([
  [51.506, -0.08],
  [51.502, -0.06],
  [51.507, -0.047]
]).addTo(mymap);


marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

marker.on('click', function(e){
  mymap.setView(e.latlng, 14);
});

circle.on('click', function(e){
  mymap.setView(e.latlng, 13);
});

polygon.on('click', function(e){
  mymap.setView(e.latlng, 13);
});
*/
var ZoomViewer = L.Control.extend({
  onAdd: function(){
    var gauge = L.DomUtil.create('div');
    gauge.style.width = '200px';
    gauge.style.background = 'rbga(255,255,255,0.5)';
    gauge.style.textAlign = 'left';
    mymap.on('zoomstart zoom zoomend', function(ev){
      gauge.innerHTML = 'Zoom level: ' + mymap.getZoom();
    })
    return gauge;
  }
});
(new ZoomViewer).addTo(mymap);

mymap.setView([0, 0], 1);
