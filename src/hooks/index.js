import api from "../api/api";
import { Server } from "../utils/config";
import { useEffect, useReducer } from "react";

export const FetchState = {
    FETCH_INIT: 0,
    FETCH_SUCCESS: 1,
    FETCH_FAILURE: 2,
};

export default function useGetUser() {
    const reducer = (state, action) => {
        switch (action.type) {
            case FetchState.FETCH_INIT:
                return { ...state, isLoading: true, isError: false};
            case FetchState.FETCH_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    isError: false,
                    user: action.payload,
                };
            case FetchState.FETCH_FAILURE:
                return { ...state, isLoading: false, isError: true };
            default:
                throw new Error();
        }
    };

    const [state, dispatch] = useReducer(reducer, {
        isLoading: false,
        isError: true,
        data: [],
    });

    useEffect(() => {
        let didCancel = false;
        const getTodos = async () => {
            dispatch({ type: FetchState.FETCH_INIT });
            try {
                const account = await api.getAccount();
                if (!didCancel) {
                    dispatch({ type: FetchState.FETCH_SUCCESS, payload: account });
                }
            } catch (e) {
                if (!didCancel) {
                    dispatch({ type: FetchState.FETCH_FAILURE });
                }
            }
        };
        getTodos();
        return () => (didCancel = true);
    }, []);

    return [state, dispatch];
};


export const useGetUserInfo = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case FetchState.FETCH_INIT:
                return { ...state, isLoadingInfo: true, isErrorInfo: false,
                    userInfo: {"Name":"Na","Mobile":"Na","Country":"Na"}};
            case FetchState.FETCH_SUCCESS:
                return {
                    ...state,
                    isLoadingInfo: false,
                    isErrorInfo: false,
                    userInfo: action.payload,
                };
            case FetchState.FETCH_FAILURE:
                return { ...state, isLoadingInfo: false, isErrorInfo: true };
            default:
                throw new Error();
        }
    };

    const [state, dispatchInfo] = useReducer(reducer, {
        isLoadingInfo: false,
        isErrorInfo: true,
        data: [],
    });

    useEffect(() => {
        let didCancel = false;
        const getTodos = async () => {
            dispatchInfo({ type: FetchState.FETCH_INIT });
            try {
                const data = api.getAccount()
                const account = await api.listDocuments(Server.collectionID);
                if (!didCancel) {
                    dispatchInfo({ type: FetchState.FETCH_SUCCESS, payload: account["documents"][0] });
                }
            } catch (e) {
                if (!didCancel) {
                    dispatchInfo({ type: FetchState.FETCH_FAILURE });
                }
            }
        };
        getTodos();
        return () => (didCancel = true);
    }, []);

    return [state, dispatchInfo];
};