import {Route, Routes, Link} from "react-router-dom";
import {Suspense} from "react";
import {Main} from "pages/Main";
import {About} from "pages/About";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
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
                    <Route path={'/about'} element={<About />}/>
                    <Route path={'/'} element={<Main />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;