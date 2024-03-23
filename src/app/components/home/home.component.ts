import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  responsables = [
    {
      name: 'Rocío Palacios Solano',
      photo: 'assets/img/prof1.jpg',
      mail: 'rpalacioss@ipn.mx',
      info: 'M. en C. <br/>Docente en ESCOM <br/> Project Manager en IPN',
      intereses:
        'Administración de Proyectos PMI<br/> Gobernanza IT<br/> Seguridad de la Información<br/> Desarrollo de aplicaciones',
    },
    {
      name: 'Verónica Agustín Domínguez',
      photo: 'assets/img/prof2.jpg',
      mail: 'vagustin@ipn.mx',
      info: 'M. en C. ESCA Sto. Tomas IPN<br/>C. P. C. ESCA Sto. Tomas IPN<br/>ESCOM-IPN Depto. de ISC profesora titular desde 2009',
      intereses:
        'Gestión Empresarial<br/>Finanzas<br/> Desarrollo de Proyectos<br/> Educación continua<br/> Emprendimiento',
    },
    {
      name: 'Axel Ernesto Moreno Cervantes',
      photo: 'assets/img/prof3.jpg',
      mail: 'amorenoc@ipn.mx',
      info: 'Doctor en Educación (CUGS) en 2020.<br/> M. en C. (CINVESTAV) en 2004 <br/> Ingeniero en Sistemas Computacionales (ESCOM-IPN) en 2000. <br/> Profesor del Depto ISC (ESCOM-IPN) desde 2004',
      intereses: 'Sistemas distribuidos<br/> Educación',
    },
  ];

  goToId(id: any) {
    const element = document.querySelector(id);
    element.scrollIntoView();
  }
}
