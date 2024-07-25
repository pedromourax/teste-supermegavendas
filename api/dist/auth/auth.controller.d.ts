import { AuthService } from './auth.service';
import { LoginAuthAdministradorDto } from './dtos/login-administrador.dto';
import { RegisterAuthAdministradorDto } from './dtos/register-administrador.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginInput: LoginAuthAdministradorDto): Promise<{
        access_token: string;
    }>;
    verifyJwt(tokenInput: any): Promise<any>;
    getHello(): Promise<{
        msg: string;
    }>;
    register(registerInput: RegisterAuthAdministradorDto): Promise<{
        usuario: string;
        senha: string;
    } & import("./interfaces/administrador.entity").AdministradorEntity>;
}
