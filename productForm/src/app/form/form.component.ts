import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  datos!: string;
  products: any = [];

  formularioContacto = new FormGroup({
    codigo: new FormControl(''),
    nombre: new FormControl(''),
    precio: new FormControl(''),
    stock: new FormControl(''),
  })

  public enviar() {

    this.products.push({
      codigo: this.formularioContacto.value.codigo,
      nombre:  this.formularioContacto.value.nombre,
      precio: this.formularioContacto.value.precio,
      stock: this.formularioContacto.value.stock
    });
    console.log(this.products);
  }

}
