import { OnInit, Component } from '@angular/core';
import { PacienteService } from '../Shared/paciente.service';

@Component({
    selector: 'app-paciente-informe',
    templateUrl: './paciente-informe.component.html'
})

export class PacienteInformeComponent implements OnInit{
    displayedColumns: string[] = ['id', 'documento', 'nombreCompleto', 'medico', 'eps', 'arl','genero', 'tipoPersona', 'direccion', 'telefono', 'email'];
    datosEntidad: any[];

    constructor(public pacienteService: PacienteService){}

    ngOnInit(){
        this.Refrescar();
    }

    Refrescar() {
        this.pacienteService.ObtenerTodoPacienteInforme().subscribe(personas => {
            this.datosEntidad = personas.entidad;
        });
    }


}