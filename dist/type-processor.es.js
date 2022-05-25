/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

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

var ProcessorBase = /** @class */ (function () {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function ProcessorBase(opts) {
    }
    return ProcessorBase;
}());

var TypeProcessor = /** @class */ (function () {
    function TypeProcessor() {
        /**
         * 重写类型映射
         */
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
            var Actor = this.processorsMapping[this.getCurrentElement()] || DefaultProcessor;
            if (!Actor) {
                return;
            }
            var actor = new Actor(params);
            return actor;
        }
        catch (e) {
            console.error(e);
            return;
        }
    };
    return TypeProcessor;
}());

export { ProcessorBase, TypeProcessor as default };
//# sourceMappingURL=type-processor.es.js.map
