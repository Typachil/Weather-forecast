export interface IWeatherCity {
    cnt: number;
    list: IWeather[];
    city: {
        id: number;
        name: string;
        coord: {
            lat: number,
            lon: number
        }
    };
}

export interface IWeather {
    dt: number;
    main: {
        temp: number,
        humidity: number,
    };
    weather: [
        {
            main: string,
            description: string,
        }
    ];
    wind: {
        speed: number,
    };
    dt_txt: string
}