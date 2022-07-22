interface Cities{
    id: number;
    name: string
    coordinates: {
        lat: number;
        lon: number;
    }
}

const CitiesArr : Cities[] = [
    {
        id: 1,
        name: "Пермь",
        coordinates: {
            lat: 58.0105,
            lon: 56.2502
        }
    },
    {
        id: 2,
        name: "Москва",
        coordinates: {
            lat: 55.75222,
            lon: 37.61556
        }
    },
    {
        id: 3,
        name: "Екатеринбург",
        coordinates: {
            lat: 56.8519,
            lon: 60.6122
        }
    },
    {
        id: 4,
        name: "Санкт-Петербург",
        coordinates: {
            lat: 59.93863,
            lon: 30.31413
        }
    },
]

export default CitiesArr;