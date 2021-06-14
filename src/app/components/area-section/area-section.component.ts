import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-area-section',
  templateUrl: './area-section.component.html',
  styleUrls: ['./area-section.component.scss'],
})
export class AreaSectionComponent implements OnInit {
  ASSETS = environment.ASSETS_URL;
  items = Array(4);

  areas = [
    {
      title: 'Servicio en la nube.',
      description:
        'Olvídate de las clásicas hojas de cálculo, montamos toda tu información en la nube para que accedas desde cualquier dispositivo.',
      img: this.ASSETS + '/img/iconos/nube.png'
    },
    {
      title: 'Aplicaciones web y escritorio.',
      description:
        'Automatizamos tus procesos, por medio de aplicaciónes a tu medida.',
        img: this.ASSETS + '/img/iconos/pc.png'
    },
    {
      title: 'Aplicaciones móviles.',
      description:
        'Lleva tu solución a todas partes contigo, en tu dispositivo móvil.',
        img: this.ASSETS + '/img/iconos/mobile.png'
    },
    {
      title: 'Servicios UI / UX.',
      description:
        'Nos enfocamos en la experiencia del usuario y la interacción con la interfaz de una manera simple e intuitiva.',
        img: this.ASSETS + '/img/iconos/uiux.png'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
