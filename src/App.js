import { ThemeProvider } from "styled-components";
import { Route, Routes, useLocation } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import {
  AboutPage,
  ContactPage,
  Header,
  MainPage,
  RegistrationPage,
} from "./components";
import {
  ABOUT_PATH,
  CONTACT_PATH,
  HOME_PATH,
  lightTheme,
  REGISTRATION_PATH,
} from "./constants";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Header />
        <AnimatePresence>
          <Routes location={location} key={location.key}>
            <Route exact path={HOME_PATH} element={<MainPage />} />
            <Route path={REGISTRATION_PATH} element={<RegistrationPage />} />
            <Route path={CONTACT_PATH} element={<ContactPage />} />
            <Route path={ABOUT_PATH} element={<AboutPage />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
