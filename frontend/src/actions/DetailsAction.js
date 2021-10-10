import { 
    GET,
    GET_USER_DETAILS,
    GET_USER_DETAILS_FAILED,
    GET_USER_DETAILS_SUCCESS,
    PUT, 
    SET_USER_DETAILS, 
    SET_USER_DETAILS_FAILED, 
    SET_USER_DETAILS_SUCCESS
} from "./types";
import { API_PATH, SET_API } from "../services";

export const postUserDetails = (payload, main) =>{
        return async(dispatch) =>{
            dispatch({ type: SET_USER_DETAILS });
            const response = await SET_API(API_PATH.DETAILS_API, PUT, payload);
            if(response){
                setTimeout(() => {
                    dispatch({ type: SET_USER_DETAILS_SUCCESS });
                    main();
                }, 300);
            }else{
                dispatch({ type: SET_USER_DETAILS_FAILED });
            }
        }
}

export const getUserDetails = () =>{
        return async(dispatch) =>{
            dispatch({ type: GET_USER_DETAILS });
            const response = await SET_API(API_PATH.DETAILS_API, GET);
            if(response){
               
                dispatch({ type: GET_USER_DETAILS_SUCCESS, payload: response });
            }else{
                dispatch({ type: GET_USER_DETAILS_FAILED });
            }
        }
}

export const getUserDetailsByKey = (key, loadDetails) =>{
        return async(dispatch) =>{
            dispatch({ type: GET_USER_DETAILS });
            const response = await SET_API(API_PATH.DETAILS_API+key, GET);
            if(response){
                loadDetails();
                dispatch({ type: GET_USER_DETAILS_SUCCESS, payloadKey: response });
            }else{
                loadDetails();
                dispatch({ type: GET_USER_DETAILS_FAILED });
            }
        }
}