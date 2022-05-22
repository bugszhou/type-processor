"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var TypeProcessor = /** @class */ (function () {
    function TypeProcessor() {
        this.processorsMapping = {};
        /**
         * 覆盖老的映射关系或者新增映射关系
         */
        this.moreProcessorsMapping = {};
        this.currentElement = "";
    }
    TypeProcessor.prototype.updateTypeMapping = function () {
        if (!this.processorsMapping) {
            this.processorsMapping = {};
        }
        this.processorsMapping = __assign(__assign({}, this.processorsMapping), this.moreProcessorsMapping);
    };
    TypeProcessor.prototype.getCurrentElement = function () {
        return this.currentElement;
    };
    TypeProcessor.prototype.setCurrentElement = function (val) {
        this.currentElement = val;
    };
    TypeProcessor.prototype.getActor = function (params) {
        this.updateTypeMapping();
        try {
            var actor = new this.processorsMapping[this.getCurrentElement()](params);
            if (!actor) {
                return;
            }
            return actor;
        }
        catch (e) {
            console.error(e);
            return;
        }
    };
    return TypeProcessor;
}());
exports.default = TypeProcessor;
//# sourceMappingURL=typeProcessor.js.map