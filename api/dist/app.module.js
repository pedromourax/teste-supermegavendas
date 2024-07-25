"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const auth_module_1 = require("./auth/auth.module");
const typeorm_1 = require("@nestjs/typeorm");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const contatos_module_1 = require("./contatos/contatos.module");
const grupos_module_1 = require("./grupos/grupos.module");
const enviroment_1 = require("./enviroment");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'database-1.cnqyu2gm8pgh.sa-east-1.rds.amazonaws.com',
                port: 5432,
                username: 'testetecnico',
                password: 'supermegavendas',
                database: 'teste_tecnico',
                synchronize: true,
                logging: true,
                entities: ["dist/**/**/*.entity{.ts,.js}"],
                ssl: true,
                extra: {
                    ssl: {
                        rejectUnauthorized: false
                    }
                }
            }),
            auth_module_1.AuthModule,
            jwt_1.JwtModule.register({ secret: enviroment_1.enviroment.jwtSecret, signOptions: { expiresIn: '8h' }, global: true }),
            usuarios_module_1.UsuariosModule,
            contatos_module_1.ContatosModule,
            grupos_module_1.GruposModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map