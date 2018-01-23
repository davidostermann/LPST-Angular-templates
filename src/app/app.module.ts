import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './user.service';

import { AppComponent } from './app.component';
import { ExBindingComponent } from './ex-binding/ex-binding.component';
import { UsersComponent } from './users/users.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ExBindingComponent,
    UsersComponent,
    UserItemComponent,
    UserDetailComponent
  ],
  imports: [BrowserModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
