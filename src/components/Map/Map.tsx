import 'leaflet/dist/leaflet.css'
import {CircleMarker, MapContainer, TileLayer} from 'react-leaflet'
import {
    BlackText,
    ColoredText,
    LocalizationText,
    ParameterText,
    ParameterTextContainer,
    StyledMap, StyledPop, TextContainer
} from "./StyledMap.ts";
import {useQuery} from "@tanstack/react-query";
import {useAQData} from "../../api/useAQData.ts";
import MarkerClusterGroup from "react-leaflet-cluster";
import {useAQIndex} from "../../api/useAQIndex.ts";
import {joinIndexWithStation} from "../../util/JoinIndexWithData.ts";
import {SideBar} from "./SideBar.tsx";


export const Map = () => {
    const position: [number, number] = [52.114503, 19.423561]; // [latitude, longitude]
    const zoomLevel = 9;
    const {data} = useQuery({queryKey: ['data'], queryFn: useAQData})
    const {data: indexData} = useQuery({queryKey: ['indexData'], queryFn: useAQIndex})
    const merged = joinIndexWithStation(indexData, data)
    const airQualityColorScale: ColorScale = {
        0: '#00FF00',
        1: '#FFFF00',
        2: '#FFA500',
        3: '#FF4500',
        4: '#800080',
        5: '#4B0082',
        6: 'rgba(86,86,86,0.48)'
    };
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
                    {merged && merged.map((voivodeship: VoivodeshipData) =>
                        voivodeship.cities.map((city: MergedCity) =>
                            city.stations.map((station: MergedStation) => (
                                <CircleMarker
                                    key={`${city.city}-${station.name}`}
                                    center={[station.latitude, station.longitude]}
                                    color="#000000"
                                    fillColor={airQualityColorScale[station.index?.indexLevel.id !== undefined ? station.index?.indexLevel.id : 6]}
                                    stroke={true}
                                    fillOpacity={0.8}
                                    weight={1}
                                >
                                    <StyledPop>
                                    <LocalizationText>
                                        Miasto: {city.city} <br/> Stacja: {station.name}
                                    </LocalizationText>
                                        <ParameterTextContainer>


                                        {station.parameter.map(parameter => (
                                            <ParameterText>
                                                {parameter.formula + ": " + parameter.values[0].value + " µg/m3"}
                                            </ParameterText>

                                        ))}
                                        </ParameterTextContainer>
                                        <TextContainer>
                                            <BlackText>
                                                Indeks jakości powietrza:
                                            </BlackText>

                                            <ColoredText
                                                color={airQualityColorScale[station.index?.indexLevel.id !== undefined ? station.index?.indexLevel.id : 6]}>
                                                {station.index?.indexLevel.name !== undefined ? station.index?.indexLevel.name.toLowerCase() : "brak danych"}
                                            </ColoredText>
                                        </TextContainer>
                                    </StyledPop>
                                </CircleMarker>
                            ))
                        )
                    )}
                </MarkerClusterGroup>
            </MapContainer>
            <SideBar/>
        </StyledMap>
    )
}