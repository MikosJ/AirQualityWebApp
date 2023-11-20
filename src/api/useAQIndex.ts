export const useAQIndex = async () => {
    const url = 'http://localhost:8080/stations/index/2';
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch the data')
    }

    const data: IndexApiResponse = await response.json();
    return data;
}