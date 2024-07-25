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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioEntity = void 0;
const contatos_entity_1 = require("../contatos/contatos.entity");
const grupos_entity_1 = require("../grupos/grupos.entity");
const typeorm_1 = require("typeorm");
let UsuarioEntity = class UsuarioEntity {
};
exports.UsuarioEntity = UsuarioEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UsuarioEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => grupos_entity_1.GrupoEntity, grupo => grupo.usuarios),
    __metadata("design:type", grupos_entity_1.GrupoEntity)
], UsuarioEntity.prototype, "grupo", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => contatos_entity_1.ContatoEntity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", contatos_entity_1.ContatoEntity)
], UsuarioEntity.prototype, "contato", void 0);
exports.UsuarioEntity = UsuarioEntity = __decorate([
    (0, typeorm_1.Entity)('usuarios')
], UsuarioEntity);
//# sourceMappingURL=usuarios.entity.js.map