import { Component, Input, OnInit } from "@angular/core";
import { PacienteService } from "../Shared/paciente.service";
import { Entidad } from '../Models/Respuesta';
import { Router } from "@angular/router";

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }
  
@Component({
    selector: 'app-paciente-lista',
    templateUrl: './paciente-lista.component.html'
})

export class PacienteListaComponent implements OnInit{
    displayedColumns: string[] = ['id', 'documento', 'nombres', 'apellidos', 'Acciones'];
    @Input() datosEntidad: any[];
    @Input() mostrarBotones: boolean = false;

    

    constructor(public pacienteService: PacienteService, private router: Router) {
    }

    ngOnInit() {
        this.Refrescar();
        this.mostrarBotones = true;
    }

    

    Refrescar() {
        this.pacienteService.ObtenerTodo().subscribe(personas => {
            this.datosEntidad = personas.entidad;
        });
    }

    editar(event:any) {
        this.router.navigate(['/pacientes/editar', event.id]);
    }

    agregar() {
        this.router.navigate(['/pacientes/crear']);
    }

    eliminar(evetn:any){
        this.pacienteService.EliminarPaciente(evetn.id).subscribe( respuesta => {
            this.Refrescar();
        }
        );
    }
}