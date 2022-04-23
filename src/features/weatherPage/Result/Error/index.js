import { Section } from "../../../../common/Section";
import { Paragraph } from "./styled";
import { useQueryParameter } from "../../useQueryParameter";

export const Error = () => {
  const query = useQueryParameter("search");

  return (
    query === null
      ? ""
      : < Section >
        <Paragraph>
          We don't have result for <strong>{query}</strong>
        </Paragraph>
      </Section >
  );
}