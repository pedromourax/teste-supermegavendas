import { UsuarioEntity } from './usuarios.entity';
import { Repository } from 'typeorm';
import { ContatosService } from 'src/contatos/contatos.service';
export declare class UsuariosService {
    private readonly usuarioRepository;
    private contatosService;
    constructor(usuarioRepository: Repository<UsuarioEntity>, contatosService: ContatosService);
    private logger;
    criarUsuarios(usuarios: any, grupoId: number): Promise<any[]>;
    consultarUsuariosPorGrupo(grupoId: number): Promise<UsuarioEntity[]>;
}
