//import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { UsuarioPageComponent } from './usuario-page/usuario-page.component';


const pagesRoutes: Routes = [
  {path: '', redirectTo: '/usuarios', pathMatch: 'full' },
  {
    path: '', component: PagesComponent, 
    children: [
      { path: 'usuarios', component: UsuarioPageComponent},
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
