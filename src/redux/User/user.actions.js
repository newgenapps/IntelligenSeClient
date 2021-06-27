import { userActionTypes } from "./user.types";

export const login = () => {
    return{
        type: userActionTypes.LOGIN
    }
}

export const logout = () => {
    return{
        type: userActionTypes.LOGOUT
    }
}