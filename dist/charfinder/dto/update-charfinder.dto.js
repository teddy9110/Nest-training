"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCharfinderDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_charfinder_dto_1 = require("./create-charfinder.dto");
class UpdateCharfinderDto extends (0, mapped_types_1.PartialType)(create_charfinder_dto_1.CreateCharfinderDto) {
}
exports.UpdateCharfinderDto = UpdateCharfinderDto;
//# sourceMappingURL=update-charfinder.dto.js.map