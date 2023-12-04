import React from "react";

type params = {
    city: string;
    lat: string;
    long: string;
};

function WeatherPage(params: params) {
    return <div>{params.city}</div>;
}

export default WeatherPage;
