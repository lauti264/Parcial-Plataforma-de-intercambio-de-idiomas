
import { Preferencia } from "../../preferencias/entities/preferencia.entity";
import { Catalogo } from "../../catalogo/entities/catalogo.entity";

export class Persona {
    nombre: string;
    apellido: string;
    alias: string;
    email: string;
    pais: string;
    estado: Boolean;
    personapc: string
    personasBloqueadas: Persona[];
    preferencias: Preferencia[];
    conversaciones:[]
    catalogos: []
}
