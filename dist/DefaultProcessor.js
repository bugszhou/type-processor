"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultProcessor = /** @class */ (function () {
    function DefaultProcessor(options) {
        this.elementData = null;
        this.elementData = options;
    }
    DefaultProcessor.prototype.getData = function () {
        return this.elementData;
    };
    DefaultProcessor.prototype.process = function () {
        console.error("No Processor, currentElement is ".concat(this.getData()));
    };
    return DefaultProcessor;
}());
exports.default = DefaultProcessor;
//# sourceMappingURL=DefaultProcessor.js.map