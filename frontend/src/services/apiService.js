import axios from 'axios';
import { GET, PUT } from '../actions/types';

export const SET_API =async(path, method, payload=null) =>{
    switch(method){
        case GET : 
            try{
                const response = await axios.get(path);
                return response.data;
            }catch(error){
                console.info(error);
            }
        break;

        case PUT:
            try{
                const response = await axios.put(path, {payload});
                return response.data;
            }catch(error){
                console.info(error);
            }
    }
}