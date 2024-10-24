
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import react, {useState,useEffect} from 'react';

function App() {
  const [data, setData] = useState("");
  const [inputBox, setInputBox] = useState("");
  let apiUrl = `http://api.weatherapi.com/v1/current.json?key=${
    import.meta.env.VITE_API
  }&q=${inputBox}`;

  function fetchData() {
    fetch(apiUrl)
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }

  // useEffect(() => {
  //   console.log(inputBox);
  //   fetchData();
  // }, [inputBox]);

  return (
    <>
      <h1> Enter City name :</h1>
      <input
        type="text"
        onChange={(e) => {
          setInputBox(e.target.value);
        }}
      />
      <button onClick={()=>{fetchData()}}>Show</button>
      <hr />
      {data.current && (
        <div>
          <p>
            Request for : {data.location.country}, {data.location.region}
          </p>
          <p>Temp (celcius) : {data.current.temp_c}</p>
          <p>Humidity : {data.current.humidity}</p>
          <p>Wind (kph) : {data.current.wind_kph}</p>
        </div>
      )}
    </>
  );
}

export default App;
