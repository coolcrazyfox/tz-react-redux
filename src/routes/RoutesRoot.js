import {Route, Routes} from 'react-router-dom'
import Main from "../pages/Main";
import FormPage from "../pages/FormPage";

export const PATH = {
    MAIN: '/main',
    FORM: '/form',
}
export const RoutesRoot = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={PATH.FORM} element={<FormPage/>}/>

            </Routes>
        </div>
    );
};
