import { GrupoEntity } from './grupos.entity';
import { Repository } from 'typeorm';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { ContatosService } from 'src/contatos/contatos.service';
export declare class GruposService {
    private readonly GrupoRepository;
    private usuariosService;
    private contatoService;
    constructor(GrupoRepository: Repository<GrupoEntity>, usuariosService: UsuariosService, contatoService: ContatosService);
    private logger;
    criarGrupo(nome: string): Promise<{
        nome: string;
    } & GrupoEntity>;
    adicionarUsuarios(grupoId: number, usuarios: any): Promise<void>;
    consultarGrupos(): Promise<GrupoEntity[]>;
    consultarGrupo(id: number): Promise<{
        grupo: GrupoEntity;
        usuarios: import("../usuarios/usuarios.entity").UsuarioEntity[];
    }>;
    adicionarParticipantePorArquivo(file: any, grupoId: any): Promise<any[]>;
}
