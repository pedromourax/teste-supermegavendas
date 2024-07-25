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
var GruposService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GruposService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const grupos_entity_1 = require("./grupos.entity");
const typeorm_2 = require("typeorm");
const usuarios_service_1 = require("../usuarios/usuarios.service");
const fs = require("fs");
const XLSX = require("xlsx");
const contatos_service_1 = require("../contatos/contatos.service");
let GruposService = GruposService_1 = class GruposService {
    constructor(GrupoRepository, usuariosService, contatoService) {
        this.GrupoRepository = GrupoRepository;
        this.usuariosService = usuariosService;
        this.contatoService = contatoService;
        this.logger = new common_1.Logger(GruposService_1.name);
    }
    async criarGrupo(nome) {
        return await this.GrupoRepository.save({ nome });
    }
    async adicionarUsuarios(grupoId, usuarios) {
        const usuariosToUpdate = await this.usuariosService.criarUsuarios(usuarios, grupoId);
    }
    async consultarGrupos() {
        try {
            return this.GrupoRepository.find({});
        }
        catch (error) {
            this.logger.error(error.message);
            throw new common_1.BadRequestException(error.message);
        }
    }
    async consultarGrupo(id) {
        try {
            const usuarios = await this.usuariosService.consultarUsuariosPorGrupo(id);
            const grupo = await this.GrupoRepository.find({ where: { id } });
            return {
                grupo: grupo[0],
                usuarios
            };
        }
        catch (error) {
            this.logger.error(error.message);
            throw new common_1.BadRequestException(error.message);
        }
    }
    async adicionarParticipantePorArquivo(file, grupoId) {
        try {
            const extension = file.originalname.split('.');
            if (extension[extension.length - 1] == 'xlsx') {
                await fs.writeFileSync('src/files/output.xlsx', file.buffer);
                const workBook = await XLSX.readFile('src/files/output.xlsx');
                await XLSX.writeFile(workBook, 'src/files/output.csv', { bookType: "csv", compression: true, cellStyles: true });
                const data = await fs.readFileSync('src/files/output.csv', "utf-8");
                const usuarios = data.split(',').map((item) => {
                    const aux = item.replaceAll('\n', ",").split(',');
                    return [...aux];
                });
                const usuariosFlat = usuarios.flatMap(subArray => subArray);
                let arr = [];
                for (let i = 0; i < usuariosFlat.length; i += 2) {
                    const usuario = {
                        nome: usuariosFlat[i],
                        contato: usuariosFlat[i + 1]
                    };
                    arr.push(usuario);
                }
                return await this.usuariosService.criarUsuarios(arr, grupoId);
            }
            else {
                await fs.writeFileSync('src/files/output.csv', file.buffer);
                const data = await fs.readFileSync('src/files/output.csv', "utf-8");
                const usuarios = data.split(',').map((item) => {
                    const aux = item.replaceAll('\r\n', ",").split(',');
                    return [...aux];
                });
                const usuariosFlat = usuarios.flatMap(subArray => subArray);
                let arr = [];
                for (let i = 0; i < usuariosFlat.length; i += 2) {
                    const usuario = {
                        nome: usuariosFlat[i],
                        contato: usuariosFlat[i + 1]
                    };
                    arr.push(usuario);
                }
                return await this.usuariosService.criarUsuarios(arr, grupoId);
            }
        }
        catch (error) {
            this.logger.error(error.message);
            throw new common_1.BadRequestException(error.message);
        }
    }
};
exports.GruposService = GruposService;
exports.GruposService = GruposService = GruposService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(grupos_entity_1.GrupoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        usuarios_service_1.UsuariosService,
        contatos_service_1.ContatosService])
], GruposService);
//# sourceMappingURL=grupos.service.js.map