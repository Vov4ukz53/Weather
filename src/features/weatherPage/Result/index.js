import { useSelector } from "react-redux";
import { selectError } from "../weatherPageSlice";
import { Error } from "./Error";
import { Response } from "./Response";

export const Result = () => {
  const error = useSelector(selectError);

  return (
    <>
      {error
        ? <Error />
        : <Response />
      }
    </>
  )
};