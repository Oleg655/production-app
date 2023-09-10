import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";

interface AppProps {
  className?: string;
}

export const App = ({ className }: AppProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>Hello</div>
    // <div className={`app ${theme}`}>
    //   <button onClick={toggleTheme}>TOGGLE THEME</button>
    //   <Link to={"/"}>Main</Link>
    //   <Link to={"/about"}>About Us</Link>
    //   <Suspense fallback={<div>Loadings</div>}>
    //     <Routes>
    //       <Route path={"/about"} element={<AboutPageAsync />} />
    //       <Route path={"/"} element={<MainPageAsync />} />
    //     </Routes>
    //   </Suspense>
    //   hxfghg
    // </div>
  );
};
