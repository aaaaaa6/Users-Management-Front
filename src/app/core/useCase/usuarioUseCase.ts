import { Injectable } from "@angular/core";
import { UsuarioService } from "../../services/usuario/usuario.service";
import { Usuario } from "../models/usuario";


@Injectable({
    providedIn: 'root'
})
export class UsuarioUseCase
{
    constructor(private services: UsuarioService){}

    public get() {
       
        return this.services.get();
    }

    public getBySearch(search:string) {
       
        return this.services.getBySearch(search);
    }
}