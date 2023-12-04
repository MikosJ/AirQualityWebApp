import ReactModal from 'react-modal';
import { CartesianGrid, Line, LineChart, XAxis, YAxis} from "recharts";
import {useQuery} from "@tanstack/react-query";
import {useVoivodeshipValuesByHour} from "../../api/useVoivodeshipValuesByHour.ts";
import {BoldText, SelectContainer, TextAndSelect} from "./ModalStyled.ts";
import Select, {SingleValue} from "react-select";
import {useState} from "react";

interface GraphModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

interface VoivodeshipOption {
    voivodeship: string;
    label: string;
}

interface ParameterOption {
    formula: string;
    label: string;
}

export const GraphModal: React.FC<GraphModalProps> = ({isOpen, onRequestClose}) => {
    const {data:graphData} = useQuery({queryKey:['graphData'],queryFn:useVoivodeshipValuesByHour})
    const [selectedOption, setSelectedOption] = useState<VoivodeshipOption>({
        voivodeship: "MAŁOPOLSKIE",
        label: "Małopolskie",
    });
    const handleSelectChange = (
        newValue: SingleValue<VoivodeshipOption>,
    ) => {
        if (newValue && 'voivodeship' in newValue) {
            setSelectedOption(newValue);
        }
    };
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
    const voivodeships: {
        voivodeship: string;
        label: string
    }[] = [
        {voivodeship: "DOLNOŚLĄSKIE", label: "Dolnośląskie"},
        {voivodeship: "KUJAWSKO-POMORSKIE", label: "Kujawsko-Pomorskie"},
        {voivodeship: "LUBELSKIE", label: "Lubelskie"},
        {voivodeship: "LUBUSKIE", label: "Lubuskie"},
        {voivodeship: "MAZOWIECKIE", label: "Mazowieckie"},
        {voivodeship: "MAŁOPOLSKIE", label: "Małopolskie"},
        {voivodeship: "OPOLSKIE", label: "Opolskie"},
        {voivodeship: "PODKARPACKIE", label: "Podkarpackie"},
        {voivodeship: "PODLASKIE", label: "Podlaskie"},
        {voivodeship: "POMORSKIE", label: "Pomorskie"},
        {voivodeship: "ŚLĄSKIE", label: "Śląskie"},
        {voivodeship: "ŚWIĘTOKRZYSKIE", label: "Świętokrzyskie"},
        {voivodeship: "WARMIŃSKO-MAZURSKIE", label: "Warmińsko-Mazurskie"},
        {voivodeship: "WIELKOPOLSKIE", label: "Wielkopolskie"},
        {voivodeship: "ZACHODNIOPOMORSKIE", label: "Zachodniopomorskie"},
        {voivodeship: "ŁÓDZKIE", label: "Łódzkie"}]

    const parameters: {
        formula: string;
        label: string;
    }[] = [
        {formula:"NO2",label:"NO2"},
        {formula:"O3",label:"O3"},
        {formula:"PM10",label:"PM10"},
        {formula:"PM2.5",label:"PM2.5"},
        {formula:"C6H6",label:"C6H6"},
        {formula:"CO",label:"CO"},
        {formula:"SO2",label:"SO2"}
    ]
    const testData = graphData?.filter(ob=>ob.voivodeship==selectedOption.voivodeship).filter(filtered=>filtered.parameterFormula===selectedParameter.formula);
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
                    width: '85vw',
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
                    <LineChart width={800} height={600} data={testData}>
                        <XAxis dataKey={"date"}/>
                        <YAxis dataKey={"averageValue"}/>
                        <CartesianGrid/>
                        <Line type={"monotone"} dataKey={"averageValue"} stroke={"#82ca9d"}/>
                    </LineChart>
                    <br/>
                    <br/>
                    <SelectContainer>
                        <TextAndSelect>
                            <BoldText>
                                Województwo:
                            </BoldText>
                            <Select
                                value={selectedOption}
                                onChange={handleSelectChange}
                                options={voivodeships}
                                getOptionValue={(option) => option.voivodeship}
                                menuShouldScrollIntoView={true}
                                menuPosition={"fixed"}
                            />
                        </TextAndSelect>
                        <TextAndSelect>
                            <BoldText>
                                Parametr:
                            </BoldText>
                            <Select
                                value={selectedParameter}
                                onChange={handleSelectParameterChange}
                                options={parameters}
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