import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClubListComponent } from './club-list/club-list/club-list.component';
import { UserFormComponent } from './club-form/user-form/user-form.component';
import { ClubFormComponent } from './club-form/club-form.component';
import { UserListComponent } from './club-list/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ClubListComponent,
    UserFormComponent,
    ClubFormComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
