import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';
require('dotenv').config();
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const Map = (props) => {

	mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

	const mapContainer = useRef(null);
	const map = useRef(null);
	const position = [42.3710, -71.1073]
	const [lng, setLng] = useState(position[0]);
	const [lat, setLat] = useState(position[1]);
	const [zoom, setZoom] = useState(9);


	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
			accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v12',
			center: [lng, lat],
			zoom: zoom
		});
		map.current.on('move', () => {
			setLng(map.current.getCenter().lng.toFixed(4));
			setLat(map.current.getCenter().lat.toFixed(4));
			setZoom(map.current.getZoom().toFixed(2));
		});
	});

	return (
		<div>
			<div ref={mapContainer} className="map-container" />
		</div>
		// <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
		// 	<TileLayer 
		// 	attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		// 	url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		// 	/>
		// 	<Marker position={position}>
		// 		<Popup>
		// 			Simple CSS Popup!
		// 		</Popup>
		// 	</Marker>
		// </MapContainer>
	)
}

export default Map;


{/* // https://www.openstreetmap.org/relation/1933745#map=14/42.3710/-71.1073 */ }
