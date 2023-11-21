export const useAQDataParametrized = async (time: string) => {
    const url = 'http://localhost:8080/time/'+time+'/parameter/all/voivodeships';
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch the data')
    }

    const data: ApiResponse = await response.json();
    return data;
}