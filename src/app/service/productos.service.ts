import { reject } from 'q';
import { resolve } from 'dns';
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
    return new Promise( (resolve, reject) => {
      this.http.get('https://angular-html-54241.firebaseio.com/productos_id.json')
              .subscribe((resp: Producto[]) => {
                  this.productos = resp;
                  this.cargando = false;
                  resolve();
              });
    });
  }
  getproducto(id: string) {
    return this.http.get(`https://angular-html-54241.firebaseio.com/productos/${ id }.json`);
  }

  buscarProducto( termino: string ) {

    if ( this.productos.length === 0 ) {
      // cargar productos
      this.cargarProductos(). then( () => {
        // ejecutar cuando tenga los productos
        // aplicar el filtro
        this.filtrarProducto( termino );

      });
    } else {
      this.filtrarProducto( termino );
    }
  }

  private filtrarProducto( termino: string ) {
    termino = termino.toLocaleLowerCase();

    this.productos.forEach(prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();

      if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf(termino) >= 0) {
        this.productoFiltrado.push(prod);
      }
    });
  }
}
