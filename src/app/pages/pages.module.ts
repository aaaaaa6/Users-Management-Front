import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PAGES_ROUTES } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { UsuarioPageComponent } from './usuario-page/usuario-page.component';
import { MaterialModule } from '../shared/material/material.module';
import { UsuarioModule } from '../components/usuario/usuario.module';
import { LoadModule } from '../shared/load/load.module';
import {FormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    PagesComponent,
    UsuarioPageComponent,
  ],
  imports: [
    PAGES_ROUTES,
    CommonModule,
    MaterialModule,
    UsuarioModule,
    LoadModule,
    FormsModule,
  ]
})
export class PagesModule { }
