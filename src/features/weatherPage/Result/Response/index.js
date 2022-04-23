import { useSelector } from "react-redux";
import { selectWeather } from "../../weatherPageSlice";
import { Section } from "../../../../common/Section";
import { Title, Info } from "./styled";

export const Response = () => {
  const {
    name,
    weather,
    sys,
    main,
    wind,
  } = useSelector(selectWeather);

  return weather &&
    <Section>
      <Title>Search results for <em>{name}</em> :</Title>
      <Info>temperature : <em>{`${main.temp.toFixed()} ℃`}</em></Info>
      <Info>feels like: <em>{`${main.feels_like.toFixed()} ℃`}</em></Info>
      <Info>sunrise: <em>{new Date(sys.sunrise * 1000).toLocaleTimeString()}</em></Info>
      <Info>sunset: <em>{new Date(sys.sunset * 1000).toLocaleTimeString()}</em></Info>
      <Info>wind force: <em>{`${wind.speed.toFixed()} m/s`}</em></Info>
      <Info>pressure: <em>{`${main.pressure} hPa`}</em></Info>
    </Section>
}