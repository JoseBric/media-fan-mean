import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidateService } from './services/validate.service';
import { LoginComponent } from './components/login/login.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { PostComponent } from './components/post/post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { GuestGuard } from './guards/guest.guard';
import { UserService } from './services/user.service';
import { PostsComponent } from './components/posts/posts.component';
import { PostCreatorComponent } from './components/post-creator/post-creator.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FollowersModalComponent } from './components/followers-modal/followers-modal.component';
import { UserProfileItemComponent } from './components/user-profile-item/user-profile-item.component';
import { SearchComponent } from './components/search/search.component';
import { ChatComponent } from './components/chat/chat.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const appRoutes: Routes = [
  {
    path: 'welcome',
    component: LandingPageComponent,
    canActivate: [GuestGuard],
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuestGuard],
  },
  {
    path: 'signup',
    component: RegisterComponent,
    canActivate: [GuestGuard],
  },
  {
    path: ':username',
    component: ProfileComponent,
  },
  {
    path: 'edit/:username',
    component: EditProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'chat/:username',
    component: ChatComponent,
  },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    PostComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    PostsComponent,
    PostCreatorComponent,
    FollowersModalComponent,
    EditProfileComponent,
    UserProfileItemComponent,
    SearchComponent,
    ChatComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [ValidateService, AuthGuard, AuthService, GuestGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
