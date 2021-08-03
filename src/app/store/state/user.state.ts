import { IUser } from "../models/user.model";

export interface IUserState{
    user:IUser;
    loggedIn:boolean;
    error:Error;
    loading:boolean
}
export const initialUserState:IUserState={
    user:null,
    loggedIn:false,
    error:undefined,
    loading:false

}

