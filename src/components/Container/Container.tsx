import React from "react";
import { useContext } from "react";
import { DateContext } from "../../context/DateContext";
import { IDateContext, IDateObj } from "../../context/DateContext";
import ChangeButton from "../ChangeButton/ChangeButton";
import { BtnContainer, Display } from "./styles";

interface IContainer {
  type: string;
}

const Container: React.FC<IContainer> = ({ type }): React.ReactElement => {
  const dateObj: IDateObj = useContext<IDateContext>(DateContext).dateState;

  const fontSize: number = type === "year" ? 50 : 40;
  const text: number = type === "year" ? dateObj.year : dateObj.month + 1;
  const marginBottom: number = type === "year" ? 0 : 20;

  return (
    <BtnContainer marginBottom={marginBottom}>
      <ChangeButton type={type} direction="down"></ChangeButton>
      <Display fontSize={fontSize}>{text}</Display>
      <ChangeButton type={type} direction="up"></ChangeButton>
    </BtnContainer>
  );
};

export default Container;
