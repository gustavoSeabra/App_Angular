import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-eventos",
  templateUrl: "./eventos.component.html",
  styleUrls: ["./eventos.component.css"],
})
export class EventosComponent implements OnInit {
  _filtroLista: string;
  get filtroLista() {
    return this._filtroLista;
  }
  set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista
      ? this.filtrarEvento(this.filtroLista)
      : this.eventos;
  }

  eventosFiltrados: any = [];
  eventos: any;
  imgLargura: number = 50;
  imgAltura: number = 40;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getEventos();
  }

  getEventos() {
    this.http.get("https://localhost:5001/api/values").subscribe(
      (response) => {
        this.eventos = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  filtrarEvento(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  mostrarImagens() {
    alert("Deu bom!!");
  }
}
