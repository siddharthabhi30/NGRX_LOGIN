import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { appReducer } from './store/reducer/app.reducer';
import {UserEffects}  from './store/effects/user.effects';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatInputModule} from '@angular/material/input';

import {MatSnackBarModule} from '@angular/material/snack-bar';












@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.forRoot(appReducer),
    HttpClientModule,
    BrowserModule,
    FormsModule,
    EffectsModule.forRoot([UserEffects]),
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
