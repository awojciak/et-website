import { Component } from "solid-js";
import { MenuDropdown } from "../MenuDropdown/MenuDropdown";
import * as P from "./parts";

export const MobileMenu: Component = () => {
  return (
    <P.Wrapper className="mobile-menu">
      <P.Item>
        Example
        <MenuDropdown
          items={[
            {
              name: "Lorem ipsum",
              description: "Dolorem coś tam",
            },
            {
              name: "Lorem ipsum",
              description: "Dolorem coś tam",
            },
            {
              name: "Lorem ipsum",
              description: "Dolorem coś tam",
            },
          ]}
        />
      </P.Item>

      <P.Item>
        Mock
        <MenuDropdown
          items={[
            {
              name: "Lorem ipsum",
              description: "Dolorem coś tam",
            },
            {
              name: "Lorem ipsum",
              description: "Dolorem coś tam",
            },
            {
              name: "Lorem ipsum",
              description: "Dolorem coś tam",
            },
          ]}
        />
      </P.Item>

      <P.Item>
        Another mock
        <MenuDropdown
          items={[
            {
              name: "Lorem ipsum",
              description: "Dolorem coś tam",
            },
            {
              name: "Lorem ipsum",
              description: "Dolorem coś tam",
            },
            {
              name: "Lorem ipsum",
              description: "Dolorem coś tam",
            },
          ]}
        />
      </P.Item>
    </P.Wrapper>
  );
};
