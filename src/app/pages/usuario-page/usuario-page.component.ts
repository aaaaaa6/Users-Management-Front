import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/models/usuario';
import { UsuarioUseCase } from 'src/app/core/useCase/usuarioUseCase';

@Component({
  selector: 'app-usuario-page',
  templateUrl: './usuario-page.component.html',
  styleUrls: ['./usuario-page.component.css']
})
export class UsuarioPageComponent implements OnInit {

  usuarios: Usuario[] = [];
  search: string = ''

  constructor(private router: Router,
              private usuarioUseCase :UsuarioUseCase) { }

  ngOnInit(): void {
    
    this.rowsInit();

  }

  rowsInit(){

    this.usuarioUseCase.get().subscribe((result) => {
      if(result){
        this.usuarios = result;
      }
    });
  }

  goToSearch(){

    console.log(this.search)

    this.usuarioUseCase.getBySearch(this.search).subscribe((result) => {
      console.log(result)
      if(result){
        this.usuarios = result;
      }
    });
  }


}



