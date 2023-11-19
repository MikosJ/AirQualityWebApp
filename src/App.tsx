
import {MainActivity} from "./components/MainActivity/MainActivity.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()
function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <MainActivity/>
        </QueryClientProvider>
    )
}

export default App
