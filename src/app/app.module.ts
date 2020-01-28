import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './views/main/app.component';
import { EditComponent } from './views/edit/edit.component';
import { ShowComponent } from './views/show/show.component';
import { HomeComponent } from './views/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { searchReducer, employeesReducer, viewReducer, employeeReducer, countriesReducer, jobsReducer } from './controllers/main.reducer';


@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ShowComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      view: viewReducer,
      search: searchReducer,
      jobs: jobsReducer,
      countries: countriesReducer,
      employee: employeeReducer,
      employees: employeesReducer
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
