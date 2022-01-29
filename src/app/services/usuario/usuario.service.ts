import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Usuario } from 'src/app/core/models/usuario';

export const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = `${environment.host}${'/api/UsuarioCotroller'}`;

  constructor(private http: HttpClient) { }

  public get(): Observable<any> {
    return this.http.get<any>(this.url + '/GetUsuarios', ).pipe(catchError(err => of(err)));
  }

  public getBySearch(search: string): Observable<any> {
    return this.http.get<any>(this.url + '/GetUsuariosBySearch?search='+ search, ).pipe(catchError(err => of(err)));
  }
}
