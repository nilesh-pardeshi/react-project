import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let[error, setError]= useState(false);

const API_URL= "https://api.openweathermap.org/data/2.5/weather";
const API_KEY= "75d20727f90291c0dafac20aa7cdb77d";

let getWeatherInfo=async()=>{

  try{
    let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
    let jsonResponse= await response.json();
    console.log(jsonResponse); 
    let result={
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feelsLike,
      weather: jsonResponse.weather[0].description,
    }
    console.log(result);
    return result;
  }catch(error){
    throw error;
  }
};

  

  let handlechange = (evt) => {
    setCity(evt.target.value);
  };
  let handleSubmit=async(evt)=>{

  try{
    evt.preventDefault();
    console.log(city);
    setCity("");
    let newInfo= await getWeatherInfo();
    updateInfo(newInfo);
  }catch(error){
    setError(true);
  }
    
  };
  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handlechange}
          
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color: "red"}}>No such place exists!</p>}
      </form>
    </div>
  );
}
