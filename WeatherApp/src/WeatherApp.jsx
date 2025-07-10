import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const[WeatherInfo, setWeatherInfo]= useState({
        city: "Delhi",
        feelsLike: 24.80,
        temp: 25.08,
        tempMin: 25.08,
        tempMax: 25.08,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Nilesh Pardeshi</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={WeatherInfo}/>
        </div>
    )
}