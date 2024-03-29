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
    id: number;
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

type IndexApiResponse =IndexData[];

type IndexData = {
    stationId: number,
    date: string,
    indexLevel: IndexLevel
}
type IndexLevel = {
    id:number,
    name:string
}
type ColorScale = {
    [key: number]: string;
};

type MergedIndexData = {
    stationId: number;
    date: string;
    indexLevel: IndexLevel;
};

type MergedStation = {
    latitude: number;
    longitude: number;
    id: number;
    name: string;
    parameter: Parameter[];
    index?: MergedIndexData | null;
};

type MergedCity = {
    city: string;
    stations: MergedStation[];
};

type MergedVoivodeship = {
    voivodeship: string;
    cities: MergedCity[];
};

type MergedData = MergedVoivodeship[];

type StationCompressed = {
    name: string;
    id: number;
    city: string;
}
type VoivodeshipAverageData = {
    averageValue: number;
    date: string;
    parameterFormula: string;
    parameterName: string;
    voivodeship: string;
}

type StationGraphData = {
    value: number;
    date: string;
    parameterFormula: string;
    parameterName: string;
    stationName: string;
    city: string;
    voivodeship: string;
    longitude: number;
    latitude: number;
    stationId: number;
}