export interface GenerosLista {
    entidad:      Genero[];
    exitoso:      boolean;
    mensajeError: string;
}

export interface Genero {
    id:          number;
    abreviatura: string;
    genero:      string;
    estado:      boolean;
}