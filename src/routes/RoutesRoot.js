import {Route, Routes} from 'react-router-dom'
import Main from "../pages/Main";
import FormPage from "../pages/FormPage";
import PostsList from "../testRedux/features/post/PostsList";

export const PATH = {
    MAIN: '/main',
    FORM: '/form',
    POSTS:'/posts'
}
export const RoutesRoot = () => {
    return (
        <div>
            <Routes>
                {/*<Route path={'/'} element={<PostsList/>}/>*/}
                <Route path={'/'} element={<Main/>}/>
                <Route path={PATH.FORM} element={<FormPage/>}/>

            </Routes>
        </div>
    );
};
