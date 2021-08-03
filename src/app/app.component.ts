import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetUser } from './store/action/user.action';
import { IUser } from './store/models/user.model';
import { selectError, selectLoading, selectState, selectUserInfo } from './store/selector/user.selector';
import { IAppState } from './store/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  constructor(private _store: Store<IAppState>,private _snackBar: MatSnackBar) {}

  name:string;
  id:string;
  loggedIn$: Observable<Boolean>;
  loading$: Observable<Boolean>=this._store.pipe(select(selectLoading));
  user$: Observable<IUser>;
  error$: Observable<Error>=this._store.pipe(select(selectError));
  
  ngOnInit() {
    
    this.loggedIn$=this._store.pipe(select(selectState));
    this.user$=this._store.pipe(select(selectUserInfo));
      let snack=this.error$.subscribe((data)=>{
      console.log(data,"dddddd")
      if(data){
        this.openSnackBar()
      }
    })

    
    
  }
  
  onLogin(){
    console.log(this.name,this.id)
    this._store.dispatch(new GetUser({id:this.id,name:this.name}));
   
 
   // this.user$=this._store.pipe(select(selectUserInfo));
    
  }
  openSnackBar() {
    this._snackBar.open("enter valid ID and Name ", "", {
      duration: 1000,
    });
  }
}
