import React, { ReactElement, useContext } from "react";
import { DateContext } from "../../context/DateContext";
import { IDateContext } from "../../context/DateContext";
import DateChanger from "../../modules/DateChanger";
import Button from "./styles";

interface IChangeButton {
  type: string;
  direction: string;
}

const ChangeButton: React.FC<IChangeButton> = ({
  type,
  direction,
}): ReactElement => {
  const context: IDateContext = useContext<IDateContext>(DateContext);

  return (
    <Button
      className={`${direction}-${type}-btn`}
      onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
        DateChanger(event, context);
      }}
    >
      {direction === "down" ? "<" : ">"}
    </Button>
  );
};

export default ChangeButton;
