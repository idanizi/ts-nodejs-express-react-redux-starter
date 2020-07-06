import { ActionCreator } from "../../models"

export const SET_LOADING = 'SET_LOADING'

export const setIsLoading: ActionCreator<string> = (payload) => ({
    type: SET_LOADING,
    payload
})
