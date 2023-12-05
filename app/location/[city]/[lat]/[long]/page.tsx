import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import React from "react";
import fetchWeatherQueries from "@/graphql/queries/fetchWeatherQueries";
import { gql, useQuery } from "@apollo/client";
import { __DEV__ } from "@apollo/client/utilities/globals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

type Props = {
    params: {
        city: string;
        lat: string;
        long: string;
    };
};

const client = new ApolloClient({
    uri: process.env.API_URL,
    cache: new InMemoryCache(),
    headers: {
        Authorization: `apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`,
    },
});

export default function WeatherPage({ params: { city, lat, long } }: Props) {
    if (__DEV__) {
        // Adds messages only in a dev environment
        loadDevMessages();
        loadErrorMessages();
    }
    const { loading, error, data } = useQuery(
        gql`
            query myQuery($daily: String, $latitude: String, $longitude: String, $timezone: String) {
                myQuery(daily: $daily, latitude: $latitude, longitude: $longitude, timezone: $timezone) {
                    daily {
                        temperature_2m_max
                        time
                        weather_code
                    }
                    daily_units {
                        temperature_2m_max
                        time
                        weather_code
                    }
                    elevation
                    generationtime_ms
                    latitude
                    longitude
                    timezone
                    timezone_abbreviation
                    utc_offset_seconds
                }
            }
        `,
        {
            variables: { daily: "String", latitude: "String", longitude: "String", timezone: "String" },
        },
    );

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Something went wrong...</p>;
    return (
        <ul>
            <li>{city}</li>
            <li>{lat}</li>
            <li>{long}</li>
            <li>{data.myQuery}</li>
        </ul>
    );
}
