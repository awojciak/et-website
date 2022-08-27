import { Component, For } from "solid-js";
import * as P from "./parts";

export interface IProps {
  items: Array<{
    name: string;
    description: string;
  }>;
}

export const MenuDropdown: Component<IProps> = (props) => {
  return (
    <P.Wrapper className="menu-dropdown">
      <For each={props.items}>
        {(item) => (
          <P.Item>
            <P.Name>{item.name}</P.Name>
            <P.Description>{item.description}</P.Description>
          </P.Item>
        )}
      </For>
    </P.Wrapper>
  );
};
