import ReactModal from 'react-modal';
import {BarChart, CartesianGrid, Line, XAxis, YAxis} from "recharts";
import {useAQData} from "../../api/useAQData.ts";
import {useQuery} from "@tanstack/react-query";
import {useStations} from "../../api/useStations.ts";

interface GraphModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export const GraphModal: React.FC<GraphModalProps> = ({isOpen, onRequestClose}) => {
    const {data} = useQuery({queryKey: ['data'], queryFn: useAQData})
    const {data: stations} = useQuery({queryKey: ['stations'], queryFn: useStations})
    // const mapDataToChartFormat = (inputData:ApiResponse, parameterName, cityName) => {
    //     inputData.map(it => it.cities.map(it => it.stations.map(it => it.parameter.map(it=>it.values.map(it=>it.value)))))
    // };

    const data2 = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
    console.log(data)
    console.log(stations);

    return (

            <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} style={{
                overlay: {
                    position: 'fixed',
                    zIndex: 1020,
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    background: 'rgba(255, 255, 255, 0.75)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                content: {
                    display: 'flex',
                    background: 'white',
                    width: '80vw',
                    height: '70vh',
                    maxWidth: 'calc(100vw - 2rem)',
                    maxHeight: 'calc(100vh - 2rem)',
                    overflowY: 'auto',
                    position: 'relative',
                    border: '1px solid #ccc',
                    borderRadius: '0.3rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}} ariaHideApp={false}>
                <div>
                    <BarChart width={900} height={600} data={data2}>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <CartesianGrid/>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
                        <Line type="monotone" dataKey="pv" stroke="#82ca9d"/>
                    </BarChart>
                </div>
            </ReactModal>


    );
};