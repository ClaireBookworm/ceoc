import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';

const Map = (props) => {
	const position = [42.3710, -71.1073]
	return (
		<MapContainer center={position} zoom={13} scrollWheelZoom={false}>
			<TileLayer 
			attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={position}>
				<Popup>
					Simple CSS Popup!
				</Popup>
			</Marker>
		</MapContainer>
	)
}      

export default Map;


{/* // https://www.openstreetmap.org/relation/1933745#map=14/42.3710/-71.1073 */}
