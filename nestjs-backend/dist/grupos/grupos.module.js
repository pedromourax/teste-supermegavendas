"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GruposModule = void 0;
const common_1 = require("@nestjs/common");
const grupos_service_1 = require("./grupos.service");
const grupos_controller_1 = require("./grupos.controller");
const typeorm_1 = require("@nestjs/typeorm");
const grupos_entity_1 = require("./grupos.entity");
const usuarios_module_1 = require("../usuarios/usuarios.module");
const contatos_module_1 = require("../contatos/contatos.module");
let GruposModule = class GruposModule {
};
exports.GruposModule = GruposModule;
exports.GruposModule = GruposModule = __decorate([
    (0, common_1.Module)({
        controllers: [grupos_controller_1.GruposController],
        providers: [grupos_service_1.GruposService],
        imports: [typeorm_1.TypeOrmModule.forFeature([grupos_entity_1.GrupoEntity]), usuarios_module_1.UsuariosModule, contatos_module_1.ContatosModule]
    })
], GruposModule);
//# sourceMappingURL=grupos.module.js.map