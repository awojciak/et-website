import styled from "@suid/system/styled";

export const Wrapper = styled("div")(({ theme }) => ({
  position: "relative",
  border: '2px solid black',
  padding: '8px 16px',
  boxSizing: 'border-box',
  fontSize: 20,

  "& .menu-dropdown": {
    position: "absolute",
    display: "none",
    top: 44,
    left: -2
  },

  "&:hover .menu-dropdown": {
    display: "block",
  },
}));
