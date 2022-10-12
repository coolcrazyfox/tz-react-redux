import {Route, Routes} from 'react-router-dom'
import Main from "../pages/Main";
import FormPage from "../pages/FormPage";
import PostsList from "../testRedux/features/post/PostsList";
import CardPage from "../pages/CardPage";
import RedactPage from "../pages/RedactPage";

export const PATH = {
    MAIN: '/main',
    FORM: '/form',
    CARD: '/card',
    REDACT: '/redact',
    POSTS:'/posts'
}
export const RoutesRoot = () => {
    return (
        <div>
            <Routes>
                {/*<Route path={'/'} element={<PostsList/>}/>*/}
                <Route path={'/'} element={<Main/>}/>
                <Route path={PATH.FORM} element={<FormPage/>}/>
                <Route path={PATH.CARD} element={<CardPage/>}/>
                <Route path={PATH.REDACT} element={<RedactPage/>}/>

            </Routes>
        </div>
    );
};
