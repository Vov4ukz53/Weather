import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Container } from "../../common/Container";
import { Section } from "../../common/Section";
import { Input } from "./styled";
import { fetchWeather, selectWeather } from "./weatherPageSlice";

export const WeatherPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { main } = useSelector(selectWeather);

  const query = (new URLSearchParams(location.search)).get("search");

  useEffect(() => {
    dispatch(fetchWeather({ query }));
  }, [dispatch, query]);

  const onFormSubmit = e => {
    e.preventDefault();
  };

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete("search");
    } else {
      searchParams.set("search", target.value);
    }

    navigate({
      pathname: location.pathname,
      search: searchParams.toString()
    });

    
  }

  return (
    <Container>
      <Section>
        <form
          onSubmit={onFormSubmit}
        >
          <Input
            onChange={onInputChange}
            type="text"
            placeholder="name of the city"
          />
        </form>
      </Section>
      <Section>
        <div>
          {main ? main.temp : ""}
        </div>
      </Section>
    </Container>
  )
};