import { ContatosService } from './contatos.service';
export declare class ContatosController {
    private readonly contatosService;
    constructor(contatosService: ContatosService);
    criarContato(input: any): Promise<{
        telefone: string;
    } & import("./contatos.entity").ContatoEntity>;
}
