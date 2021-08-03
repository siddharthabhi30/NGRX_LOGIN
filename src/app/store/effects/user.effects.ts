import { Injectable } from "@angular/core";
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EUserActions, GetUser, UserFailure, UserSuccess } from "../action/user.action";
import { of } from 'rxjs';
import { UserService } from "src/app/user.service";


@Injectable()
export class UserEffects {

    
  @Effect() loadUser$ = this.actions$
  .pipe(
    ofType<GetUser>(EUserActions.FIND_USER),
    mergeMap(
      (data) => this.userService.getUser(data.payload)
        .pipe(
          map(() => new UserSuccess(data.payload)),
          catchError(error => of(new UserFailure(error)))
        )
    ),
)
constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }

}
