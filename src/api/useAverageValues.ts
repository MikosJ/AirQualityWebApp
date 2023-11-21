import axios from "axios";

export const useAverageValuesSince = async ({ queryKey }) => {
    const [_, interval] = queryKey
    const { data } = await axios.get(`http://localhost:8080/time/${interval}/average`)
    return data
}