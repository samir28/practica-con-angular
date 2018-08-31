import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoInterface } from '../interface/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;

  constructor( private http: HttpClient ) {
    this.cargarProductos();
   }

  private cargarProductos() {
    this.http.get('https://angular-html-54241.firebaseio.com/productos_id.json')
        .subscribe((resp: ProductoInterface[]) => {
            console.log(resp);

            this.cargando = false;
        });



  }

}
