import { Navigate, Route, Router, Routes } from "@solidjs/router";
import { ThemeProvider } from "@suid/material";
import type { Component } from "solid-js";
import { Header } from "./components/Header/Header";
import { theme } from "./theme/theme";

const App: Component = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="*" element={<Navigate href="/" />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
