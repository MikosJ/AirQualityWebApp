import 'leaflet/dist/leaflet.css'
import {CircleMarker, MapContainer, Popup, TileLayer} from 'react-leaflet'
import {StyledMap} from "./styled/StyledMap.ts";



export const Map= () => {
    const position: [number, number] = [50.912475, 15.31219]; // [latitude, longitude]
    const zoomLevel = 15;
    return (
        <StyledMap>
            <MapContainer
                style={{ height: "60vh", width: "94%" }}
                center={position}
                zoom={zoomLevel}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <CircleMarker
                    center={[50.912475, 15.31219]}
                    color={"#000000"}
                    fillColor={"#FDD876"}
                    stroke={true}
                    fillOpacity={0.5}
                    weight={1}
                >
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </CircleMarker>
            </MapContainer>
        </StyledMap>
    )
}