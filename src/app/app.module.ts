import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MutualisteListComponent,
    MutualisteDetailComponent,
    MutualisteCreateComponent,
    MutualisteEditComponent,
    PersonneAChargeListComponent,
    PersonneAChargeDetailComponent,
    PersonneAChargeCreateComponent,
    PersonneAChargeEditComponent,
    AssureListComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
