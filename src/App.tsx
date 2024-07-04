import {Route, Routes, Link} from "react-router-dom";
import {Suspense} from "react";
import {AboutAsync} from "./pages/About/About.async";
import {MainAsync} from "./pages/Main/Main.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";
import './styles/index.scss'

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={'/'}>Go to main</Link>
            <Link to={'/about'}>Go to about</Link>

            <Suspense fallback={'Loading'}>
                <Routes>
                    <Route path={'/about'} element={<AboutAsync />}/>
                    <Route path={'/'} element={<MainAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;