import { ActionTypes } from "../actionTypes";

const initialstate ={
    isLoading :false,
    error:null,
    movies:[],
}

const movieReducer = (state=initialstate,{type,payload})=>{
  switch(type){
    case ActionTypes.MOVIES_LOADING:
        return {...state, isLoading:true}
    case ActionTypes.MOVIES_ERROR:
        return {...state, isLoading:false, error:payload}
    case ActionTypes.MOVIES_SUCCESS:
        return {
            ...state,
            isLoading:false,
            movies:payload.results,
            error:null,
        }
    
    
    
    
    default :
    return state ;
};


  }
  
    


export default movieReducer;