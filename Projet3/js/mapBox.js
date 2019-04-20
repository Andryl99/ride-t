mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcnlsOTkiLCJhIjoiY2p1NWJqeHl5MTNoMzRkcDRodjl6bWFhYSJ9.N3MljCrkJf54VAsvbDWRUg';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
    center: [4.815747, 45.743317],
    zoom: 13
});

let stations = [];

function mapMarker(name, status, long, lat, availableBikes, availableStands, bikeStands, index){
    this.long = long;
    this.lat = lat;
    this.name = name;
    this.status = status;
    this.availableBikes = availableBikes;
    this.availableStands = availableStands;
    this.bikeStands = bikeStands;
    
    this.addToMap = function(){
        var el = document.createElement('div');
        el.className = "marker";
        el.id = 'station_'+index;
        
        let marker = new mapboxgl.Marker(el).setLngLat([this.long, this.lat]).addTo(map).setPopup(new mapboxgl.Popup({offset: 25}).setHTML('<h2>'+this.status+'</h2><h3>' + this.name + '</h3><p><i class="fas fa-bicycle"></i> Vélos disponibles :' + this.availableBikes + '</p><p><i class="far fa-bookmark"></i> Emplacements disponibles :' + this.availableStands + '</p><p><i class="fas fa-bookmark"></i> Emplacements totaux :'+this.bikeStands +'</br><h3>Réservez  <i class="fas fa-arrow-alt-circle-right"></i></h3>'));
                
        marker.addTo(map); 
        
        el.attributes['station'] = index;
        
        el.addEventListener('click', function(){
            let _index = parseInt(this.id.replace('station_',''));            
            document.getElementById("stationName").innerHTML = stations[_index].name;
            document.getElementById("stationAddress").innerHTML = stations[_index].address;
        });
         
        
        
    }

};

    
// MAIN
ajaxGet('https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=1798a0b0a916c745bb74c0deb62e1881d5bc70e1', function(reponse){
    stations = JSON.parse(reponse);
    
    for(var i=0; i<stations.length; i++){
        var marker = new mapMarker(stations[i].name, stations[i].status, stations[i].position.lng, stations[i].position.lat, stations[i].available_bikes, stations[i].available_bike_stands, stations[i].bike_stands, i);
        marker.addToMap();
    }
});

