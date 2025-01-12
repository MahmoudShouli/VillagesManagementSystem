import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

function Map() {

    const markers = [
        { id: 1, position: [31.7683, 35.2137], name: "Location 1" },
        { id: 2, position: [32.0853, 34.7818], name: "Location 2" },
        { id: 3, position: [31.9515, 35.9321], name: "Location 3" },
    ];

    return (
        <div className="w-full h-96 bg-gray-700 rounded-lg overflow-hidden shadow-md">
            <MapContainer
                center={[31.7683, 35.2137]} 
                zoom={8}
                scrollWheelZoom={true}
                style={{ height: "100%", width: "100%" }}
            >
                
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                
                {markers.map((marker) => (
                <Marker key={marker.id} position={marker.position}>
                    <Popup>{marker.name}</Popup>
                </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

export default Map;
