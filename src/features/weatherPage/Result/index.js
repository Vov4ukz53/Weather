import { useSelector } from "react-redux";
import { Section } from "../../../common/Section";
import { selectWeather } from "../weatherPageSlice";

export const Result = () => {
  const {
    name,
    weather,
    sys,
    main,
    wind,
  } = useSelector(selectWeather);

  return (
    <>
      {weather &&
        <Section>
          <h3>Search results for {name}:</h3>
          <p>temperature : {`${main.temp.toFixed()} ℃`} </p>
          <p>feels like: {`${main.feels_like.toFixed()} ℃`}</p>
          <p>sunrise: {new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
          <p>sunset: {new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
          <p>wind force: {`${wind.speed.toFixed()} m/s`}</p>
          <p>pressure: {`${main.pressure} hPa`}</p>
        </Section>
      }
    </>
  )
}