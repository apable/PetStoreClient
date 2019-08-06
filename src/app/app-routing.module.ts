import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PetFormComponent } from './components/pet-form/pet-form.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { AuthGuard } from './auth.guard';
import { LoginGuard } from './login.guard';


const routes: Routes = [ 
                        { path: '', component: HomeComponent, pathMatch: 'full' , canActivate: [AuthGuard]},
						 {path: 'home', component: HomeComponent , canActivate: [AuthGuard]},
                         { path: 'login', component: LoginComponent },
                         { path: 'addPerson', component: PersonFormComponent , canActivate: [AuthGuard]},
                         { path: 'getPerson', component: PersonListComponent , canActivate: [AuthGuard]},
                         { path: 'addPet', component: PetFormComponent , canActivate: [AuthGuard]},
                         { path: 'getPet', component: PetListComponent , canActivate: [AuthGuard]},
                         { path: '**', redirectTo: 'home' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

