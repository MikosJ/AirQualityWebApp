import ReactModal from "react-modal"
import {useQuery} from "@tanstack/react-query";
import {useAverageValuesSince} from "../../api/useAverageValues.ts";
import Select, {SingleValue} from "react-select";
import {ChangeEvent, useMemo, useState} from "react";
import {
    AverageDataContainer, BoldText,
    SelectContainer, StyledInput,
    Table, TableData,
    TableHeader,
    TableRow, TextAndSelect,
    ValuesContainer,
    ValueText
} from "./ModalStyled.ts";
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


    const [selectedOption, setSelectedOption] = useState<VoivodeshipOption>({
        voivodeship: "MAŁOPOLSKIE",
        label: "Małopolskie",
    });

    const [interval, setInterval] = useState<string>('6');
    const {data} = useQuery({queryKey: ['average', interval], queryFn: useAverageValuesSince})
    const memoizedData = useMemo(()=>data,[data])
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

    const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        setInterval(event.target.value);
    };

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

            {/*<ValueText>*/}
            {/*    Średnie wartości dla {selectedOption.label} z ostatnich x godzin:*/}
            {/*</ValueText>*/}
            {/*<ValuesContainer>*/}
            {/*    {data?.filter(it => it.voivodeship === "DOLNOŚLĄSKIE").map(it =>*/}
            {/*        <ValueText>{capitalizeFirstLetter(it.parameterName)+": " + it.value.toFixed(2)+ "µg/m3"}</ValueText>*/}
            {/*    )}*/}
            {/*</ValuesContainer>*/}


            <AverageDataContainer>
                <ValuesContainer>
                    <ValueText>Średnie wartości parametrów dla {selectedOption.label} z ostatnich {interval} godzin:</ValueText>
                    <Table>
                        <thead>
                        <tr>
                            <TableHeader>Parametr</TableHeader>
                            <TableHeader>Wartość</TableHeader>
                        </tr>
                        </thead>
                        <tbody>
                        {memoizedData
                            ?.filter((it: { voivodeship: string; }) => it.voivodeship === selectedOption.voivodeship)
                            .map((it: { parameterName: string; value: number; }) => (
                                <TableRow key={it.parameterName}>
                                    <TableData>
                                        <BoldText>{capitalizeFirstLetter(it.parameterName)}</BoldText>
                                    </TableData>
                                    <TableData>{it.value.toFixed(2)} µg/m³</TableData>
                                </TableRow>
                            ))}
                        </tbody>
                    </Table>
                </ValuesContainer>
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
                            Średnia z ostatnich godzin:
                        </BoldText>
                        <StyledInput value={interval.valueOf()} onInput={handleInputChange} type={"number"} min={0} max={8640}></StyledInput>
                    </TextAndSelect>
                </SelectContainer>
            </AverageDataContainer>
        </ReactModal>
    )
}