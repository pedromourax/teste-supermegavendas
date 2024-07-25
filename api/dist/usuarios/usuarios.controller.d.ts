import { UsuariosService } from './usuarios.service';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    criarUsuario(input: any): Promise<any[]>;
    consultarUsuariosPorGrupo(): Promise<import("./usuarios.entity").UsuarioEntity[]>;
}
