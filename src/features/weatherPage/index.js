import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Container } from "../../common/Container";
import { Section } from "../../common/Section";
import { Input } from "./styled";
import { fetchWeather } from "./weatherPageSlice";

export const WeatherPage = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  const onFormSubmit = e => {
    e.preventDefault();
    console.log(value);
    setValue('');
  }

  const onInputChange = ({ target }) => {
    setValue(target.value);
  }

  return (
    <Container>
      <Section>
        <form
          onSubmit={onFormSubmit}
        >
          <Input
            value={value}
            onChange={onInputChange}
            type="text"
            placeholder="name of the city"
          />
        </form>
      </Section>
      <Section>
        <div>
          {value}
        </div>
      </Section>
    </Container>
  )
};