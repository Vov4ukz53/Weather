import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "../../common/Container";
import { Form } from "./Form.js";
import { fetchWeather } from "./weatherPageSlice";
import { Result } from "./Result";
import { Title } from "./styled";
import { useQueryParameter } from "./useQueryParameter";

export const WeatherPage = () => {
  const dispatch = useDispatch();
  const query = useQueryParameter("search");

  useEffect(() => {
    query !== null &&
      dispatch(fetchWeather({ query }));
  }, [dispatch, query]);

  return (
    <Container>
      <Title>
        Look at the weather of the selected city.
      </Title>
      <Form />
      <Result />
    </Container>
  )
};