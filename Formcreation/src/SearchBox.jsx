import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox() {
  let [city, setCity] = useState("");

  let handlechange = (event) => {
    setCity(event.target.value);
  };
  let handleSubmit=(event)=>{
    event.preventDefault();
    console.log(city);
    setCity("");
  }
  return (
    <div className="SearchBox">
      <h3>serch for Weather</h3>
      <form>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handlechange}
          onSubmit={handleSubmit}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
