type ParameterValue = {
    date: string;
    value: number;
};

type Parameter = {
    formula: string;
    name: string;
    values: ParameterValue[];
};

type Station = {
    latitude: number;
    longitude: number;
    name: string;
    parameter: Parameter[];
};

type CityData = {
    city: string;
    stations: Station[];
};

type VoivodeshipData = {
    cities: CityData[];
    voivodeship: string;
};

type ApiResponse = VoivodeshipData[];
