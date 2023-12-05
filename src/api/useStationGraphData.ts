export const useStationGraphData = async ({queryKey}) => {
    const [_, stationId] = queryKey
    const url = 'http://localhost:8080/stations/'+stationId+'/time/6';
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch the data')
    }

    const data: StationGraphData[] = await response.json();
    return data;
}