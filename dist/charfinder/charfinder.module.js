"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharfinderModule = void 0;
const common_1 = require("@nestjs/common");
const charfinder_service_1 = require("./charfinder.service");
const charfinder_controller_1 = require("./charfinder.controller");
let CharfinderModule = class CharfinderModule {
};
CharfinderModule = __decorate([
    (0, common_1.Module)({
        controllers: [charfinder_controller_1.CharfinderController],
        providers: [charfinder_service_1.CharfinderService]
    })
], CharfinderModule);
exports.CharfinderModule = CharfinderModule;
//# sourceMappingURL=charfinder.module.js.map