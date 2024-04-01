
import { useState } from 'react';
import Map from './components/map';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
require('dotenv').config();
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default function Home() {
	return (
		<div>
			<h1>Food Bank Map</h1>
			<h2>Test</h2>
			<Map></Map>
		</div>
	)
}