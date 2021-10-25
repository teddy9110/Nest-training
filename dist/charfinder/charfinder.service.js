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
exports.CharfinderService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const Allchars_interface_1 = require("../interfaces/Allchars.interface");
const SingleChar_interface_1 = require("../interfaces/SingleChar.interface");
let CharfinderService = class CharfinderService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    create(createCharfinderDto) {
        return 'This action adds a new charfinder';
    }
    async findAll() {
        return this.httpService.get('https://rickandmortyapi.com/api/character')
            .pipe((0, rxjs_1.map)(response => response.data));
    }
    async findOne(id) {
        return this.httpService.get('https://rickandmortyapi.com/api/character/' + id)
            .pipe((0, rxjs_1.map)(response => response.data));
    }
    update(id, updateCharfinderDto) {
        return `This action updates a #${id} charfinder`;
    }
    remove(id) {
        return `This action removes a #${id} charfinder`;
    }
};
CharfinderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], CharfinderService);
exports.CharfinderService = CharfinderService;
//# sourceMappingURL=charfinder.service.js.map