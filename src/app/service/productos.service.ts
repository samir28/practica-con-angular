import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interface/productos.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productoFiltrado: Producto[] = [];

  constructor( private http: HttpClient ) {
    this.cargarProductos();
   }

  private cargarProductos() {
    this.http.get('https://angular-html-54241.firebaseio.com/productos_id.json')
        .subscribe((resp: Producto[]) => {
            this.productos = resp;
            this.cargando = false;
        });
  }
  getproducto(id: string) {
    return this.http.get(`https://angular-html-54241.firebaseio.com/productos/${ id }.json`);
  }

  buscarProducto( termino: string ) {
   this.productoFiltrado = this.productos.filter(producto => {
      return true;
    });
  }

}
