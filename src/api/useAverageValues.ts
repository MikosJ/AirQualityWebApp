export const useAverageValues = async () => {
    const url = 'http://localhost:8080/time/5/average';
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch the data')
    }

    const data: VoivodeshipAverageData[] = await response.json();
    return data;
}