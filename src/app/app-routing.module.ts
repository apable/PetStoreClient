import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PetFormComponent } from './components/pet-form/pet-form.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
const routes: Routes = [ { path: 'home', component: HomeComponent},
                         { path: 'login', component: LoginComponent },
                         { path: 'addPerson', component: PersonFormComponent },
                         { path: 'getPerson', component: PersonListComponent },
                         { path: 'addPet', component: PetFormComponent },
                         { path: 'getPet', component: PetListComponent },
                         { path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

