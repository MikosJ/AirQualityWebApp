export const useAQData = async () => {
    const url = 'http://localhost:8080/time/2/parameter/all/voivodeships';
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch the data')
    }

    const data: ApiResponse = await response.json();
    return data;
}