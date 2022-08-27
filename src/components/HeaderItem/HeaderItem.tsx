import { Component } from "solid-js";
import { MenuDropdown } from "../MenuDropdown/MenuDropdown";
import * as P from "./parts";

export interface IProps {
  label: string;
  items: Array<{
    name: string;
    description: string;
  }>;
}

export const HeaderItem: Component<IProps> = (props) => {
  return (
    <P.Wrapper className="header-item">
      {props.label}
      <MenuDropdown items={props.items} />
    </P.Wrapper>
  );
};
