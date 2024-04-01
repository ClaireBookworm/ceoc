import React from 'react';
import App from 'next/app';
import '../styles/globals.css'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

require('dotenv').config();
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext) => {
	const appProps = await App.getInitialProps(appContext);
	return { ...appProps };
};

export default MyApp;