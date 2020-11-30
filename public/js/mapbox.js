/* eslint-disable */

const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken = 'pk.eyJ1Ijoicm9vazU1IiwiYSI6ImNraTN0OWxyZTBlYngycW4wb3RqNmVxazQifQ.Y46kJbG2fpFCBT74GoAv5Q';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/rook55/cki3zhvoa751n19pjv9wyvs5y',
    scrollZoom: false
    // center: [-118.166040, 34.112621],
    // zoom: 10,
    // interactive: false
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
    // Create  Marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
        element: el,
        anchor: 'bottom'
    })
    .setLngLat(loc.coordinates)
    .addTo(map);

    // Add popup
    new mapboxgl.Popup({
        offset: 30
    })
        .setLngLat(loc.coordinates)
        .setHTML(`<p>Day ${loc.day} ${loc.description}</p>`)
        .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
    padding: {
        top: 200,
        bottom: 150,
        left: 100,
        right: 100
    }
});