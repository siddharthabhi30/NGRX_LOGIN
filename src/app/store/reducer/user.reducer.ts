import { EUserActions, UserActions } from "../action/user.action";
import { initialUserState, IUserState } from "../state/user.state";

export const userReducer=(
    state=initialUserState,
    action:UserActions):IUserState=>{
        switch(action.type){

            case EUserActions.FIND_USER:
                console.log("at find user")
                //console.log(state);
                return{
                    ...state,
                    loading:true,
                    user:action.payload,
                    error:undefined
                }
            


            case EUserActions.USER_FAILURE:
                return {
                    ...state,
                    error:action.payload,
                    loading:false
                }
            case EUserActions.USER_SUCCESS:
                console.log("at  user success")
                console.log(state);
                return {
                    ...state,
                    error:undefined,
                    loggedIn:true,
                    user:action.payload,
                    loading:false,
                }

            default:
               
                return state;
                   
                
        }
    }

