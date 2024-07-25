import { LoginAuthAdministradorDto } from './dtos/login-administrador.dto';
import { JwtService } from '@nestjs/jwt';
import { RegisterAuthAdministradorDto } from './dtos/register-administrador.dto';
import { AdministradorEntity } from './interfaces/administrador.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private jwtService;
    private readonly administradorRepository;
    constructor(jwtService: JwtService, administradorRepository: Repository<AdministradorEntity>);
    private logger;
    valdiateUser(input: LoginAuthAdministradorDto): Promise<{
        access_token: string;
    }>;
    generateUserToken(usuarioId: any): Promise<{
        access_token: string;
    }>;
    registerUser(criarAdministrador: RegisterAuthAdministradorDto): Promise<{
        usuario: string;
        senha: string;
    } & AdministradorEntity>;
    verifyJwt(token: string): Promise<any>;
}
