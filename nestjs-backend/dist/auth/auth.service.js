"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const administrador_entity_1 = require("./interfaces/administrador.entity");
const typeorm_2 = require("typeorm");
const enviroment_1 = require("../enviroment");
let AuthService = AuthService_1 = class AuthService {
    constructor(jwtService, administradorRepository) {
        this.jwtService = jwtService;
        this.administradorRepository = administradorRepository;
        this.logger = new common_1.Logger(AuthService_1.name);
    }
    async valdiateUser(input) {
        try {
            const { usuario, senha } = input;
            const administrador = await this.administradorRepository.createQueryBuilder('administrador')
                .where("administrador.usuario = :usuario", { usuario }).getOne();
            if (!administrador) {
                throw new common_1.UnauthorizedException('Usuário ou senha inválidos');
            }
            const senhaDescriptografada = bcrypt.compareSync(`${senha}`, `${administrador.senha}`);
            if (usuario != administrador.usuario || !senhaDescriptografada) {
                throw new common_1.UnauthorizedException('Usuário ou senha inválidos');
            }
            return this.generateUserToken(administrador.id);
        }
        catch (error) {
            this.logger.error(`Error: ${JSON.stringify(error.message)}`);
            throw new common_1.UnauthorizedException(error.message);
        }
    }
    async generateUserToken(usuarioId) {
        const access_token = this.jwtService.sign({ usuarioId });
        return {
            access_token,
        };
    }
    async registerUser(criarAdministrador) {
        try {
            const { usuario, senha } = criarAdministrador;
            const hash = await bcrypt.hash(`${senha}`, 10);
            return this.administradorRepository.save({ usuario, senha: hash });
        }
        catch (error) {
            this.logger.error(`Error: ${JSON.stringify(error.message)}`);
            throw new common_1.BadRequestException(error.message);
        }
    }
    async verifyJwt(token) {
        try {
            const result = this.jwtService.verify(token, { secret: enviroment_1.enviroment.jwtSecret });
            return result;
        }
        catch (error) {
            this.logger.error(`Error: ${JSON.stringify(error.message)}`);
            throw new common_1.BadRequestException(error.message);
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(administrador_entity_1.AdministradorEntity)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        typeorm_2.Repository])
], AuthService);
//# sourceMappingURL=auth.service.js.map