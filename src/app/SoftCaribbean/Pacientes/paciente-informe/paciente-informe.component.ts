import { OnInit, Component } from '@angular/core';

@Component({
    selector: 'app-paciente-informe',
    templateUrl: './paciente-informe.component.html'
})

export class PacienteInformeComponent implements OnInit{
    displayedColumns: string[] = ['documento', 'nombreCompleto', 'medico', 'eps', 'arl','genero', 'tipoPersona', 'direccion', 'telefono', 'email'];
    datosEntidad: any;

    ngOnInit(){
        
    }


}