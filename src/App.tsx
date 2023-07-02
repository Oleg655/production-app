import "./styles/index.scss";
import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";

interface AppProps {
  className?: string;
}

export const App = ({ className }: AppProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About Us</Link>
      <Suspense fallback={<div>Loadings</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
      hxfghg
      <Counter />
    </div>
  );
};
