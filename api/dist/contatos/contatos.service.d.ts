import { ContatoEntity } from './contatos.entity';
import { Repository } from 'typeorm';
export declare class ContatosService {
    private readonly contatoRepository;
    constructor(contatoRepository: Repository<ContatoEntity>);
    criarContato(telefone: string): Promise<{
        telefone: string;
    } & ContatoEntity>;
}
