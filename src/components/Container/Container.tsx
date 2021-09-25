import React from "react";
import { useSelector } from "react-redux";
import { IDefaultDate } from "../../reducer/dateReducer";
import ChangeButton from "../ChangeButton/ChangeButton";
import { BtnContainer, Display } from "./styles";

interface IContainer {
  type: string;
}

const Container: React.FC<IContainer> = ({ type }): React.ReactElement => {
  const date = useSelector((state: { date: IDefaultDate }) => state.date);

  const fontSize: number = type === "YEAR" ? 50 : 40;
  const text: number = type === "YEAR" ? date.year : date.month + 1;
  const marginBottom: number = type === "YEAR" ? 0 : 20;

  return (
    <BtnContainer marginBottom={marginBottom}>
      <ChangeButton type={type} direction="DECREMENT"></ChangeButton>
      <Display fontSize={fontSize}>{text}</Display>
      <ChangeButton type={type} direction="INCREMENT"></ChangeButton>
    </BtnContainer>
  );
};

export default Container;
