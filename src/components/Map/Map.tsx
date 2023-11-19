import 'leaflet/dist/leaflet.css'
import {CircleMarker, MapContainer, Popup, TileLayer} from 'react-leaflet'
import {LocalizationText, ParameterText, ParameterTextContainer, PopupContent, StyledMap} from "./StyledMap.ts";
import {useQuery} from "@tanstack/react-query";
import {useAQData} from "../../api/useAQData.ts";
import MarkerClusterGroup from "react-leaflet-cluster";


export const Map = () => {
    const position: [number, number] = [50.912475, 15.31219]; // [latitude, longitude]
    const zoomLevel = 15;
    const {data} = useQuery({queryKey: ['data'], queryFn: useAQData})
    return (
        <StyledMap>
            <MapContainer
                style={{height: "100vh", width: "94%"}}
                center={position}
                zoom={zoomLevel}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <MarkerClusterGroup removeOutsideVisibleBounds={false} polygonOptions={{fill: 0, stroke: false}}>
                    {data && data.map((voivodeship: VoivodeshipData) =>
                        voivodeship.cities.map((city: CityData) =>
                            city.stations.map((station: Station) => (
                                <CircleMarker
                                    key={`${city.city}-${station.name}`}
                                    center={[station.latitude, station.longitude]}
                                    color="#000000"
                                    fillColor="#FDD876"
                                    stroke={true}
                                    fillOpacity={0.5}
                                    weight={1}
                                >
                                    <Popup>
                                        <PopupContent>
                                            <LocalizationText>
                                                Miasto: {city.city} <br/> Stacja: {station.name}
                                            </LocalizationText>
                                            <ParameterTextContainer>
                                                {station.parameter.map(parameter => (
                                                    <ParameterText>
                                                        {parameter.formula +": " + parameter.values[0].value}
                                                    </ParameterText>

                                                ))}
                                            </ParameterTextContainer>
                                        </PopupContent>
                                    </Popup>
                                </CircleMarker>
                            ))
                        )
                    )}
                </MarkerClusterGroup>
            </MapContainer>
        </StyledMap>
    )
}