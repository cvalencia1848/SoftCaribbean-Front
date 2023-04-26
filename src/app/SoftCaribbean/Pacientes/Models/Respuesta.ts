export interface Respuesta {
    entidad:      Entidad[];
    exitoso:      boolean;
    mensajeError: string;
}

export interface Entidad {
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
