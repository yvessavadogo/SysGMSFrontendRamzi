import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MutualisteListComponent } from './components/mutualiste-list/mutualiste-list.component';
import { MutualisteDetailComponent } from './components/mutualiste-detail/mutualiste-detail.component';
import { MutualisteCreateComponent } from './components/mutualiste-create/mutualiste-create.component';
import { MutualisteEditComponent } from './components/mutualiste-edit/mutualiste-edit.component';
import { PersonneAChargeListComponent } from './components/personne-a-charge-list/personne-a-charge-list.component';
import { PersonneAChargeDetailComponent } from './components/personne-a-charge-detail/personne-a-charge-detail.component';
import { PersonneAChargeCreateComponent } from './components/personne-a-charge-create/personne-a-charge-create.component';
import { PersonneAChargeEditComponent } from './components/personne-a-charge-edit/personne-a-charge-edit.component';
import { AssureListComponent } from './components/assure-list/assure-list.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mutualistes', component: MutualisteListComponent },
  { path: 'mutualistes/create', component: MutualisteCreateComponent },
  { path: 'mutualistes/:id', component: MutualisteDetailComponent },
  { path: 'mutualistes/edit/:id', component: MutualisteEditComponent },
  { path: ':id/personnesacharge', component: PersonneAChargeListComponent },
  { path: 'personnesacharge/:id', component: PersonneAChargeDetailComponent },
  { path: 'personnesacharge/create/:id', component: PersonneAChargeCreateComponent },
  { path: 'personnesacharge/edit/:id', component: PersonneAChargeEditComponent },
  { path: 'assures', component: AssureListComponent },
  { path: 'users', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
