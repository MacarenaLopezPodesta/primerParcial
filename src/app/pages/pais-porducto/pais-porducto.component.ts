import { Producto } from 'src/app/clases/producto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais-porducto',
  templateUrl: './pais-porducto.component.html',
  styleUrls: ['./pais-porducto.component.css']
})
export class PaisPorductoComponent implements OnInit {
  @Input() detalleProd: Producto

  constructor() { }

  ngOnInit(): void {
  }

}
