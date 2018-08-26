import { InfoPagina } from './../interface/info.pagina.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any = [];

  constructor(private http: HttpClient) {
    this.cargarinfo();
    this.cargarEquipo();

  }
  private cargarinfo() {
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {

        this.cargada = true;
        this.info = resp;
      });
  }
  private cargarEquipo() {
    this.http.get('https://angular-html-54241.firebaseio.com/equipo.json')
      .subscribe((resp: any) => {
        this.equipo = resp;
        console.log(resp);
      });
  }
}
