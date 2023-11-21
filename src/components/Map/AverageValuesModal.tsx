import ReactModal from "react-modal"
import {useQuery} from "@tanstack/react-query";
import {useAverageValues} from "../../api/useAverageValues.ts";
import Select, {SingleValue} from "react-select";
import {useState} from "react";
import {AverageDataContainer, SelectContainer, ValuesContainer, ValueText} from "./ModalStyled.ts";
import {capitalizeFirstLetter} from "../../util/Capitalize.ts";

interface AvgModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

interface VoivodeshipOption {
    voivodeship: string;
    label: string;
}

export const AverageValuesModal: React.FC<AvgModalProps> = ({isOpen, onRequestClose}) => {
    const {data} = useQuery({queryKey: ['average'], queryFn: useAverageValues})
    console.log(data)

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
                width: '30vw',
                height: '60vh',
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
            <AverageDataContainer>
                <ValueText>
                    Średnie wartości dla {selectedOption.label} z ostatnich x godzin:
                </ValueText>
                <ValuesContainer>
                    {data?.filter(it => it.voivodeship === "DOLNOŚLĄSKIE").map(it =>
                        <ValueText>{capitalizeFirstLetter(it.parameterName)+": " + it.value.toFixed(2)+ "µg/m3"}</ValueText>
                    )}
                </ValuesContainer>
                <SelectContainer>
                    <Select
                        value={selectedOption}
                        onChange={handleSelectChange}
                        options={voivodeships}
                        getOptionValue={(option) => option.voivodeship}
                    />
                </SelectContainer>
            </AverageDataContainer>
        </ReactModal>
    )
}