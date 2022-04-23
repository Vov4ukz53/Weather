import { useLocation, useNavigate } from "react-router-dom";
import { Section } from "../../../common/Section";
import { Input } from "./styled";


export const Form = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
  };

  return (
    <Section>
        <Input
          onChange={onInputChange}
          type="text"
          title="English only!"
          placeholder="name of the city"
        />
    </Section>
  )
};