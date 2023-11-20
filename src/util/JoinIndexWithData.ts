export function joinIndexWithStation(indexData: IndexData[] | undefined, voivodeshipData: VoivodeshipData[] | undefined): MergedData {
    if (indexData === undefined || voivodeshipData === undefined) {
        return [];
    }

    return voivodeshipData.map((voivodeship) => {
        const newCities = voivodeship.cities.map((city) => {
            const newStations = city.stations.map((station) => {
                const index: IndexData | undefined = indexData.find((indexItem) => indexItem.stationId === station.id) || undefined;

                return {
                    ...station,
                    index,
                };
            });

            return {
                ...city,
                stations: newStations,
            };
        });

        return {
            ...voivodeship,
            cities: newCities,
        };
    });
}
