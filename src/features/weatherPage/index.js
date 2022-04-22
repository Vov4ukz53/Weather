import { useState } from "react";
import { Container } from "../../common/Container";
import { Section } from "../../common/Section";
import { Input } from "./styled";

export const WeatherPage = () => {
  const [value, setValue] = useState('');

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
          
        </div>
      </Section>
    </Container>
  )
};