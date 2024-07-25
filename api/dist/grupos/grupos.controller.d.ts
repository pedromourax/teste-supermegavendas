import { GruposService } from './grupos.service';
import { CriarGrupoDto } from './dto/criar-grupo.dto';
export declare class GruposController {
    private readonly gruposService;
    constructor(gruposService: GruposService);
    criarGrupo(input: CriarGrupoDto): Promise<{
        nome: string;
    } & import("./grupos.entity").GrupoEntity>;
    adicionarUsuarios(input: any): Promise<void>;
    consultarGrupos(): Promise<import("./grupos.entity").GrupoEntity[]>;
    consultarGrupo(id: string): Promise<{
        grupo: import("./grupos.entity").GrupoEntity;
        usuarios: import("../usuarios/usuarios.entity").UsuarioEntity[];
    }>;
    adicionarParticipantePorArquivo(file: Express.Multer.File, grupoId: string): Promise<any[]>;
}
