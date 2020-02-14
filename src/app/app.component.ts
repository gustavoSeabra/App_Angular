import { Component } from '@angular/core';

@Component({
  // Nome da minha tag
  selector: 'app-root',
  // Nome do meu componente - Arquivo onde está o html
  templateUrl: './app.component.html',
  // CSS do meu componente
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProAgil Eventos';
}
