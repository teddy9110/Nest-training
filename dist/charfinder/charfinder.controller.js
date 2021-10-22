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
exports.CharfinderController = void 0;
const common_1 = require("@nestjs/common");
const charfinder_service_1 = require("./charfinder.service");
const create_charfinder_dto_1 = require("./dto/create-charfinder.dto");
const update_charfinder_dto_1 = require("./dto/update-charfinder.dto");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let CharfinderController = class CharfinderController {
    constructor(charfinderService, httpService) {
        this.charfinderService = charfinderService;
        this.httpService = httpService;
    }
    create(createCharfinderDto) {
        return this.charfinderService.create(createCharfinderDto);
    }
    async findAll() {
        return this.httpService.get('https://rickandmortyapi.com/api/character')
            .pipe((0, rxjs_1.map)(response => response.data));
    }
    findOne(id) {
        return this.httpService.get('https://rickandmortyapi.com/api/character/' + id)
            .pipe((0, rxjs_1.map)(response => response.data));
    }
    update(id, updateCharfinderDto) {
        return this.charfinderService.update(+id, updateCharfinderDto);
    }
    remove(id) {
        return this.charfinderService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_charfinder_dto_1.CreateCharfinderDto]),
    __metadata("design:returntype", void 0)
], CharfinderController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('all-chars'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CharfinderController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('find-char/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CharfinderController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_charfinder_dto_1.UpdateCharfinderDto]),
    __metadata("design:returntype", void 0)
], CharfinderController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CharfinderController.prototype, "remove", null);
CharfinderController = __decorate([
    (0, common_1.Controller)('charfinder'),
    __metadata("design:paramtypes", [charfinder_service_1.CharfinderService,
        axios_1.HttpService])
], CharfinderController);
exports.CharfinderController = CharfinderController;
//# sourceMappingURL=charfinder.controller.js.map