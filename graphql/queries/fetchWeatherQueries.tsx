import { gql } from "@apollo/client";

const fetchWeatherQueries = gql`
    query myQuery(
        $current: String
        $daily: String
        $hourly: String
        $latitude: String
        $longitude: String
        $timezone: String
    ) {
        myQuery(
            current: $current
            daily: $daily
            hourly: $hourly
            latitude: $latitude
            longitude: $longitude
            timezone: $timezone
        ) {
            current {
                interval
                temperature_2m
                time
                weather_code
            }
            current_units {
                interval
                temperature_2m
                time
                weather_code
            }
            daily {
                time
                uv_index_clear_sky_max
                uv_index_max
            }
            daily_units {
                time
                uv_index_clear_sky_max
                uv_index_max
            }
            elevation
            generationtime_ms
            hourly {
                apparent_temperature
                dew_point_2m
                precipitation_probability
                relative_humidity_2m
                temperature_2m
                time
            }
            hourly_units {
                apparent_temperature
                dew_point_2m
                precipitation_probability
                relative_humidity_2m
                temperature_2m
                time
            }
            latitude
            longitude
            timezone
            timezone_abbreviation
            utc_offset_seconds
        }
    }
`;
export default fetchWeatherQueries;
