import { ContatoEntity } from "src/contatos/contatos.entity";
import { GrupoEntity } from "src/grupos/grupos.entity";
export declare class UsuarioEntity {
    id: number;
    nome: string;
    grupo: GrupoEntity;
    contato: ContatoEntity;
}
