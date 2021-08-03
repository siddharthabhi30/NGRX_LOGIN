import { createSelector } from "@ngrx/store";
import { IUser } from "../models/user.model";
import { IAppState } from "../state/app.state";
import { IUserState } from "../state/user.state";

const selectUser=(state:IAppState)=>state.user;


export const selectUserInfo=createSelector(
    selectUser,
    (state:IUserState)=>state.user
)


export const selectLoading=createSelector(
    selectUser,
    (state:IUserState)=>state.loading
)


export const selectError=createSelector(
    selectUser,
    (state:IUserState)=>state.error
)


export const selectState=createSelector(
    selectUser,
    (state:IUserState)=>state.loggedIn
)