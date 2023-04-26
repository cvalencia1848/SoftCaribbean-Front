export interface RespuestaIndividual {
    entidad:      Paciente;
    exitoso:      boolean;
    mensajeError: string;
}

export class Paciente {
    Id:              number;
    documento:       string;
    nombres:         string;
    apellidos:       string;
    fechaNacimiento: Date;
    idTipoDocumento: number;
    idGenero:        number;
    direccion:       string;
    telefonoFijo:    string;
    telefonoMovil:   string;
    email:           string;

    Constructor(documento: string){
        this.documento = documento

    }
}