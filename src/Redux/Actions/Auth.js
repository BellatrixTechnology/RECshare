import { LOGIN, LOGOUT, SELECT, DESELECT } from '../Types';
export const login = payload => {
    return {
        type: LOGIN,
        payload: payload
    }
};
export const logout = () => {
    return {
        type: LOGOUT,
        payload: { uid: '' }
    }
};
export const select = payload => {
    return {
        type: SELECT,
        payload: payload
    }
};
export const deselect = () => {
    return {
        type: DESELECT,
        payload: { Types: '' }
    }
};