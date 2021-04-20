import { LOGIN, LOGOUT, SELECT, DESELECT } from '../Types';
const intialState = {
    user: {
    },
    Service: {
        isTravel: false,
        isFood: false,
        isGrocery: false
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
                Service: action.payload,
            }
        }
        case DESELECT: {
            return {
                ...state,
                Service: {},

            }
        }
        default:
            return state

    }
}
export default reducer;