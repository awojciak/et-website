import styled from "@suid/system/styled";

export const Wrapper = styled("div")(({ theme }) => ({
  height: 100,
  boxSizing: 'border-box',
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingInline: 40,
  borderBottom: "2px solid black",
  backgroundColor: "white",
  position: "fixed",
  top: 0,

  [theme.breakpoints.down("md")]: {
    paddingInline: 10,
  },
}));

export const Logo = styled("img")(({ theme }) => ({
  height: 80,

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const ItemsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },

  '& .header-item:not(:last-child)': {
    marginRight: 16
  }
}));

export const ShortLogo = styled("img")(({ theme }) => ({
  height: 80,

  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const Hamburger = styled("img")(({ theme }) => ({
  height: 50
}));

export const HamburgerWrapper = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));
