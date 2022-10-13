import {useSelector} from 'react-redux';

export function useAuth() {
    const {name, surname, birth_year, portfolio, id} = useSelector(state => state.user);

    return {
        isAuth: !!name,
        name,
        surname,
        birth_year,
        portfolio,
        id,
    };
}
