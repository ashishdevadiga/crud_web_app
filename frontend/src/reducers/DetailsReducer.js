import { 
    GET_USER_DETAILS,
    GET_USER_DETAILS_FAILED, 
    GET_USER_DETAILS_SUCCESS, 
    SET_USER_DETAILS, 
    SET_USER_DETAILS_FAILED, 
    SET_USER_DETAILS_SUCCESS 
} from "../actions/types";

const INITIAL_STATE = {
    details: '',
    loading: false,
    error:'',
    keyDetails: '',
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case SET_USER_DETAILS:
            return {
                ...state, 
                loading: true,
                error: '' 
            };
        case SET_USER_DETAILS_SUCCESS :
            return {
                ...state, 
                loading: false,
            };
        case SET_USER_DETAILS_FAILED :
            return {
                ...state, 
                loading: false, 
                error:'CLIENT_SERVER_ERROR'
            };
        
        case GET_USER_DETAILS: 
            return {
                loading: true,
                ...state, 
                error: '' 
            };
        case GET_USER_DETAILS_SUCCESS:
            return {
                ...state, 
                loading: false,
                details: action.payload,
                keyDetails: action.payloadKey
            };
        case GET_USER_DETAILS_FAILED:
            return {
                ...state, 
                loading:false,
                error:'FAILED!!'
            };
        default:
         return state;
    }
}