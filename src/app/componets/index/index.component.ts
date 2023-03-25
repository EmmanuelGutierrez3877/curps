import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  constructor(private http: HttpClient) { }

  campanas = [
    {
      nombre: "Personas de 18 o mas",
      dosis: "Primera dosis"
    },
    {
      nombre: "Personas de 18 o mas",
      dosis: "Segunda dosis",
      vacuna: "Aztra seneca",
      detalles: "Primera dosis aplicada antes del 15 de Agosto."
    }
  ]

  curp=""

  async guardar(){
    let curp = {
      curp: this.curp
    }
    this.http.post(environment.url + `/curp`,curp).subscribe(
      res=>{
        console.log(res)
        alert("Guardado con exito")
      },
      error => {
        alert(error.error.message)
      }
    );
  }

}
