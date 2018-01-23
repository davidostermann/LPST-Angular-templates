import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ExBindingComponent } from './ex-binding/ex-binding.component';
import { UsersComponent } from './users/users.component';
import { UserItemComponent } from './user-item/user-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ExBindingComponent,
    UsersComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
