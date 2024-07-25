import { UsuarioEntity } from "src/usuarios/usuarios.entity";
export declare class GrupoEntity {
    id: number;
    nome: string;
    usuarios: UsuarioEntity[];
}
