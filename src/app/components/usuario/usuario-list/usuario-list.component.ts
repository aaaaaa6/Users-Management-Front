import { ChangeDetectorRef, Component, Input, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { Usuario } from 'src/app/core/models/usuario';
import { UsuarioUseCase } from 'src/app/core/useCase/usuarioUseCase';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'apellido'];

  @Input() set dataSourceUsuario(DataUsuario: Usuario[]){
    this.dataSource.data = DataUsuario
  }

  dataSource = new MatTableDataSource<Usuario>([]);


  constructor(public activatedRoute: ActivatedRoute
              ,private router: Router
              ,private usuarioUseCase :UsuarioUseCase) { }

  ngOnInit(): void {


  }
}