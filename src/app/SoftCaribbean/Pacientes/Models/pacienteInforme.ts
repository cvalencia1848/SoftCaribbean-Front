export interface RespuestaInforme {
    entidad:      EntidadInforme[];
    exitoso:      boolean;
    mensajeError: string;
}

export interface EntidadInforme {
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
}
