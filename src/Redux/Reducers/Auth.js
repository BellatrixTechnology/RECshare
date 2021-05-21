import { LOGIN, LOGOUT, SELECT, DESELECT } from '../Types';
const intialState = {
    user: {
    },
    Languages: {
        Types: ''
    },
    isLogin: false,

}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                user: action.payload,
                isLogin: true
            }
        }
        case LOGOUT: {
            return {
                ...state,
                user: {},
                isLogin: false
            }
        }
        case SELECT: {
            return {
                ...state,
                Languages: action.payload,
            }
        }
        case DESELECT: {
            return {
                ...state,
                Languages: {},

            }
        }
        default:
            return state

    }
}
export default reducer;