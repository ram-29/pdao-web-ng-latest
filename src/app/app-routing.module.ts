import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForumComponent } from './components/forum/forum.component';
import { HappeningsComponent } from './components/happenings/happenings.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'happenings', component: HappeningsComponent },
  { path: 'users/login', component: LoginComponent },
  { path: 'users/signup', component: SignupComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
