import ReactModal from 'react-modal';
import {CartesianGrid, Line, LineChart, XAxis, YAxis} from "recharts";
import {BoldText, SelectContainer, TextAndSelect} from "./ModalStyled.ts";
import Select, {SingleValue} from "react-select";
import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {useStationGraphData} from "../../api/useStationGraphData.ts";

interface GraphModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    stationId: number;
}

interface ParameterOption {
    formula: string;
    label: string;
}

export const StationGraphModal: React.FC<GraphModalProps> = ({isOpen, onRequestClose, stationId}) => {
    const [selectedParameter, setSelectedParameterOption] = useState<ParameterOption>({
        formula: "CO",
        label: "CO",
    });
    const handleSelectParameterChange = (
        newValue: SingleValue<ParameterOption>,
    ) => {
        if (newValue && 'formula' in newValue) {
            setSelectedParameterOption(newValue);
        }
    };
    const parameters: {
        formula: string;
        label: string;
    }[] = [
        {formula: "NO2", label: "NO2"},
        {formula: "O3", label: "O3"},
        {formula: "PM10", label: "PM10"},
        {formula: "PM2.5", label: "PM2.5"},
        {formula: "C6H6", label: "C6H6"},
        {formula: "CO", label: "CO"},
        {formula: "SO2", label: "SO2"}
    ]
    const {data} = useQuery({queryKey: ['stationId', stationId], queryFn: useStationGraphData})
    const filteredData = data?.filter(it => it.parameterFormula === selectedParameter.formula)
    const availableFormulas = new Set()

    data?.forEach(it => availableFormulas.add(it.parameterFormula));
    const parametersFiltered = parameters.filter(param => availableFormulas.has(param.formula));


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
                width: '65vw',
                height: '70vh',
                maxWidth: 'calc(100vw - 2rem)',
                maxHeight: 'calc(100vh - 2rem)',
                overflowY: 'auto',
                position: 'relative',
                border: '1px solid #ccc',
                borderRadius: '0.3rem',
                justifyContent: 'center',
                alignItems: 'center',
            }
        }} ariaHideApp={false}>
            <div>
                {filteredData && <LineChart width={900} height={600} data={filteredData}>
                    <XAxis dataKey={"date"}/>
                    <YAxis dataKey={"value"}/>
                    <CartesianGrid/>
                    <Line type={"monotone"} dataKey={"value"} stroke={"#82ca9d"}/>
                </LineChart>
                }

                <br/>
                <br/>
                <SelectContainer>
                    <TextAndSelect>
                        <BoldText>
                            Parametr:
                        </BoldText>
                        <Select
                            value={selectedParameter}
                            onChange={handleSelectParameterChange}
                            options={parametersFiltered}
                            getOptionValue={(option) => option.formula}
                            menuShouldScrollIntoView={true}
                            menuPosition={"fixed"}
                        />
                    </TextAndSelect>
                </SelectContainer>
            </div>
        </ReactModal>


    );
};