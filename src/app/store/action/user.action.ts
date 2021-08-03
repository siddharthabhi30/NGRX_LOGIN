import { Action } from '@ngrx/store';
import { IUser } from '../models/user.model';
export enum EUserActions {
    FIND_USER = '[User] Get User',
  USER_SUCCESS = '[User] Get User Success',
  USER_FAILURE = '[User] Get failure',
}

export class GetUser implements Action{
    readonly type=EUserActions.FIND_USER;
    constructor(public payload:IUser){}
}

export class UserFailure implements Action{
    readonly type=EUserActions.USER_FAILURE;   
    constructor(public payload:Error){}
}


export class UserSuccess implements Action{
    readonly type=EUserActions.USER_SUCCESS;  
    constructor(public payload:IUser){}  
}

export type UserActions=GetUser|UserFailure|UserSuccess;