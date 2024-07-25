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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GruposController = void 0;
const common_1 = require("@nestjs/common");
const grupos_service_1 = require("./grupos.service");
const criar_grupo_dto_1 = require("./dto/criar-grupo.dto");
const auth_guard_1 = require("../guards/auth.guard");
const platform_express_1 = require("@nestjs/platform-express");
let GruposController = class GruposController {
    constructor(gruposService) {
        this.gruposService = gruposService;
    }
    async criarGrupo(input) {
        return await this.gruposService.criarGrupo(input.nome);
    }
    async adicionarUsuarios(input) {
        return await this.gruposService.adicionarUsuarios(input.grupoId, input.usuarios);
    }
    async consultarGrupos() {
        return await this.gruposService.consultarGrupos();
    }
    async consultarGrupo(id) {
        return await this.gruposService.consultarGrupo(Number(id));
    }
    async adicionarParticipantePorArquivo(file, grupoId) {
        return await this.gruposService.adicionarParticipantePorArquivo(file, Number(grupoId));
    }
};
exports.GruposController = GruposController;
__decorate([
    (0, common_1.Post)('criar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criar_grupo_dto_1.CriarGrupoDto]),
    __metadata("design:returntype", Promise)
], GruposController.prototype, "criarGrupo", null);
__decorate([
    (0, common_1.Put)('adicionar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GruposController.prototype, "adicionarUsuarios", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GruposController.prototype, "consultarGrupos", null);
__decorate([
    (0, common_1.Get)("grupo/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GruposController.prototype, "consultarGrupo", null);
__decorate([
    (0, common_1.Post)("file/:grupoId"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('grupoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], GruposController.prototype, "adicionarParticipantePorArquivo", null);
exports.GruposController = GruposController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('api/v1/grupos'),
    __metadata("design:paramtypes", [grupos_service_1.GruposService])
], GruposController);
//# sourceMappingURL=grupos.controller.js.map