interface CurrentWeather {
    temperature: number;
    weathercode: number;
    winddirection: number;
    windspeed: number;
}

interface CurrentUnits {
    interval: String;
    temperature_2m: String;
    time: String;
    weather_code: String;
}

interface Daily {
    time: [Date];
    uv_index_clear_sky_max: [Float];
    uv_index_max: [Float];
}

interface DailyUnits {
    time: String;
    uv_index_clear_sky_max: String;
    uv_index_max: String;
}

interface Hourly {
    apparent_temperature: [Float];
    dew_point_2m: [Float];
    precipitation_probability: [Int];
    relative_humidity_2m: [Int];
    temperature_2m: [Float];
    time: [DateTime];
}

interface HourlyUnits {
    apparent_temperature: String;
    dew_point_2m: String;
    precipitation_probability: String;
    relative_humidity_2m: String;
    temperature_2m: String;
    time: String;
}

interface Root {
    current: Current;
    current_units: CurrentUnits;
    daily: Daily;
    daily_units: DailyUnits;
    elevation: Int;
    generationtime_ms: Float;
    hourly: Hourly;
    hourly_units: HourlyUnits;
    latitude: Float;
    longitude: Int;
    timezone: String;
    timezone_abbreviation: String;
    utc_offset_seconds: Int;
}
