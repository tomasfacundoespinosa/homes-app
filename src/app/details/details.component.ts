import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details works! {{ housingLocationid }}
    </p>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationid = 0;

  constructor() {
    // Suscribirse a los cambios en los parámetros de la ruta
    this.route.paramMap.subscribe(params => {
      this.housingLocationid = Number(params.get('id'));
    });
  }
}
