import {Route, Routes} from 'react-router-dom'
import CardPage from "../secondRedux/pages/CardPage";
import RedactPage from "../secondRedux/pages/RedactPage";

import Main from "../secondRedux/pages/Main";
import UserPage from "../secondRedux/pages/UserPage";



export const PATH = {
    MAIN: '/main',
    USER: '/user',
    CARD: '/card',
    REDACT: '/redact',
    // FORM: '/form',
    // POSTS:'/posts'
}
export const RoutesRoot = () => {
    return (
        <div>
            <Routes>

                <Route path={'/'} element={<Main/>}/>
                <Route path={PATH.CARD} element={<CardPage/>}/>
                <Route path={PATH.USER} element={<UserPage/>}/>
                <Route path={PATH.REDACT} element={<RedactPage/>}/>
                {/*<Route path={PATH.FORM} element={<FormPage/>}/>*/}
                {/*<Route path={'/'} element={<PostsList/>}/>*/}

            </Routes>
        </div>
    );
};
