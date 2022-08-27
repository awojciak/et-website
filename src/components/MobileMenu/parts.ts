import styled from "@suid/system/styled";

export const Wrapper = styled("div")(({ theme }) => ({
  boxSizing: "border-box",
  width: 160,
  padding: 8,
  border: "2px solid black",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  zIndex: 10,
}));

export const Item = styled("div")(({ theme }) => ({
  boxSizing: "border-box",
  width: "100%",
  padding: 8,
  border: "2px solid black",
  display: "flex",
  flexDirection: "column",
  fontSize: 20,

  "&:not(:last-child)": {
    marginBottom: 8,
  },

  position: "relative",

  "& .menu-dropdown": {
    position: "absolute",
    display: "none",
    top: 0,
    right: 135,
  },

  "&:hover .menu-dropdown": {
    display: "block",
  },
}));
