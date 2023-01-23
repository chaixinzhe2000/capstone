/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { style } from '@mui/system';
import * as styles from './styles'
import { useRef, useState, useEffect } from 'react';

import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
const newMapBoxGL: any = mapboxgl
// eslint-disable-next-line import/no-webpack-loader-syntax
newMapBoxGL.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
newMapBoxGL.accessToken = 'pk.eyJ1IjoiY2hhaXhpbnpoZSIsImEiOiJjbGNpcGpvNTY1aG5qM3JxbWp3c2w2Ym8wIn0.ZGDOGq-r7uveFAxbbAETtw';

export const Maps = () => {


	const mapContainer: any = useRef(null);
	const map: any = useRef(null);
	const [lng, setLng] = useState(-70.9);
	const [lat, setLat] = useState(42.35);
	const [zoom, setZoom] = useState(9);

	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new newMapBoxGL.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/chaixinzhe/clciqcsxy002814qrntw70lmm',
			center: [lng, lat],
			zoom: zoom
		});
	});

	useEffect(() => {
		if (!map.current) return; // wait for map to initialize
		map.current.on('move', () => {
			setLng(map.current.getCenter().lng.toFixed(4));
			setLat(map.current.getCenter().lat.toFixed(4));
			setZoom(map.current.getZoom().toFixed(2));
		});
	});

	return (
		<div>
			<div ref={mapContainer} css={styles.mapContainer} />
		</div>
	);
}