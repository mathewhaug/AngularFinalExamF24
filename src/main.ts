import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {CatListComponent} from './app/cat-list/cat-list.component';
import {provideRouter, RouterModule, Routes} from '@angular/router';
import {importProvidersFrom} from '@angular/core';
import {CatDetailComponent} from './app/cat-detail/cat-detail.component';
import {ModifyCatsComponent} from './app/modify-cats/modify-cats.component';

//Routes in the app
const routes: Routes = [
  { path: '', redirectTo:"catList" , pathMatch: 'full' },
  { path: 'catList', component: CatListComponent },
  {path: 'catDetail/:id', component: CatDetailComponent},
  {path: 'modifyCat', component: ModifyCatsComponent},
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(RouterModule),
  ],
}).catch((err) => console.error(err));
