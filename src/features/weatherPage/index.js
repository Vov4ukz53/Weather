import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container } from "../../common/Container";
import { Form } from "./Form.js";

import { fetchWeather } from "./weatherPageSlice";
import { Result } from "./Result";

export const WeatherPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get("search");

  useEffect(() => {
    dispatch(fetchWeather({ query }));
  }, [dispatch, query]);

  return (
    <Container>
      <h1>Look at the weather of the selected city.</h1>
      <Form />
      <Result />
    </Container>
  )
};