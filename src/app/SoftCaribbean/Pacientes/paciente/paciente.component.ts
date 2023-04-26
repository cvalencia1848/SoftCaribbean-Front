import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Paciente } from "../Models/paciente";
import { PacienteService } from "../Shared/paciente.service";
import { Genero } from "../Models/generosLista";

@Component({
    selector: 'paciente',
    templateUrl: './paciente.component.html',
    styleUrls: ['./paciente.component.css']
})

export class PacienteComponent implements OnInit {
    entidad: Paciente;
    id: number;
    paciente: Paciente;
    sub: any;
    esEdicion: boolean = false;
    tituloEdicion:string;
    generos: Genero[];
    datepicker: any;

    constructor(private route: ActivatedRoute, public pacienteService: PacienteService ){}

    ngOnInit() {
        this.entidad = new Paciente();
        this.sub = this.route.params.subscribe(
            params => {
                let id = + params['id'];
                if (id) {
                    this.esEdicion = true;
                    this.obtenerPacientePorId(id);
                }
                else {
                    this.esEdicion = false;
                }
                this.ObtenerGeneros();
            });
    }

    obtenerPacientePorId(id: number) {
        this.pacienteService.ObtenerPorId(id).subscribe( Persona => {
            this.entidad = Persona.entidad;
            this.tituloEdicion = Persona.entidad.nombres
        });
    }

    ObtenerGeneros(){
        this.pacienteService.ObtenerGenerosTodo().subscribe( Generos => {
            this.generos = Generos.entidad;
        })
    }


    guardar(){
        this.entidad.idTipoDocumento = 1;
        debugger;
        this.pacienteService.ActualizarOGuardar(this.entidad).subscribe();
    }
}