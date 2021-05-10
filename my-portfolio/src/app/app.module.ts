import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* import AmplifyUIAngularModule  */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Auth } from '@aws-amplify/auth'
import Amplify from '@aws-amplify/core';
import awsconfig from '../aws-exports';

/* Configure Amplify resources */
Amplify.configure(awsconfig);
Auth.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    /* configure app with AmplifyUIAngularModule */
    AmplifyUIAngularModule,
    BrowserModule,
    AppRoutingModule,
    
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
