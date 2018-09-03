import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../service/productos.service';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from '../../interface/producto.descripcion';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  producto: ProductoDescripcion;
  id: string;

  constructor(public productoService: ProductosService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params
      .subscribe(parametro => {
        this.productoService.getproducto(parametro['id'])
          .subscribe( (producto: ProductoDescripcion) => {
            this.producto = producto;
            this.id = parametro['id'];
            console.log(producto);

          });

      });
  }

}
