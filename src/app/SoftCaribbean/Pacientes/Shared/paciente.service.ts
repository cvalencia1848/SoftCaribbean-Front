import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Respuesta } from '../Models/Respuesta';
import { Paciente, RespuestaIndividual } from '../Models/paciente';
import { GenerosLista } from '../Models/generosLista';
import { RespuestaInforme } from '../Models/pacienteInforme';


@Injectable()
export class PacienteService {
    private baseUrl: string = "http://localhost:5179/api";

    constructor(private httpClient: HttpClient){}

    ObtenerTodo(): Observable<Respuesta>{
        return this.httpClient.get<Respuesta>(this.baseUrl+'/Persona/ObtenerTodos');
    }

    ObtenerPorId(id:number): Observable<RespuestaIndividual>
    {
        return this.httpClient.get<RespuestaIndividual>(this.baseUrl+'/Persona/ObtenerPorId/'+ id);
    }

    ObtenerGenerosTodo(): Observable<GenerosLista>{
        return this.httpClient.get<GenerosLista>(this.baseUrl+'/Generos/ObtenerTodos');
    }

    ObtenerTiposDocumentosTodo(): Observable<Respuesta>{
        return this.httpClient.get<Respuesta>(this.baseUrl+'/TiposDocumentos/ObtenerTodos');
    }

    ObtenerMedicosTodo(): Observable<Respuesta>{
        return this.httpClient.get<Respuesta>(this.baseUrl+'/Persona/ObtenerTodos');
    }

    ActualizarOGuardar(paciente: Paciente){
        //const bodyString = JSON.stringify(paciente);
        return this.httpClient.post(this.baseUrl+'/Persona/ActualizarOGuardar',paciente)
    }

    EliminarPaciente(id: number){
        return this.httpClient.delete(this.baseUrl+'/Persona/Eliminar/'+ id);
    }

    ObtenerTodoPacienteInforme(): Observable<RespuestaInforme>{
        return this.httpClient.get<RespuestaInforme>(this.baseUrl+'/Persona/ObtenerTodosInforme');
    }
}