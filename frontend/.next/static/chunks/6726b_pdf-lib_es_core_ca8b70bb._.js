(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CorruptPageTreeError",
    ()=>CorruptPageTreeError,
    "IndexOutOfBoundsError",
    ()=>IndexOutOfBoundsError,
    "InvalidAcroFieldValueError",
    ()=>InvalidAcroFieldValueError,
    "InvalidPDFDateStringError",
    ()=>InvalidPDFDateStringError,
    "InvalidTargetIndexError",
    ()=>InvalidTargetIndexError,
    "MethodNotImplementedError",
    ()=>MethodNotImplementedError,
    "MissingCatalogError",
    ()=>MissingCatalogError,
    "MissingDAEntryError",
    ()=>MissingDAEntryError,
    "MissingKeywordError",
    ()=>MissingKeywordError,
    "MissingPDFHeaderError",
    ()=>MissingPDFHeaderError,
    "MissingPageContentsEmbeddingError",
    ()=>MissingPageContentsEmbeddingError,
    "MissingTfOperatorError",
    ()=>MissingTfOperatorError,
    "MultiSelectValueError",
    ()=>MultiSelectValueError,
    "NextByteAssertionError",
    ()=>NextByteAssertionError,
    "NumberParsingError",
    ()=>NumberParsingError,
    "PDFArrayIsNotRectangleError",
    ()=>PDFArrayIsNotRectangleError,
    "PDFInvalidObjectParsingError",
    ()=>PDFInvalidObjectParsingError,
    "PDFObjectParsingError",
    ()=>PDFObjectParsingError,
    "PDFParsingError",
    ()=>PDFParsingError,
    "PDFStreamParsingError",
    ()=>PDFStreamParsingError,
    "PageEmbeddingMismatchedContextError",
    ()=>PageEmbeddingMismatchedContextError,
    "PrivateConstructorError",
    ()=>PrivateConstructorError,
    "ReparseError",
    ()=>ReparseError,
    "StalledParserError",
    ()=>StalledParserError,
    "UnbalancedParenthesisError",
    ()=>UnbalancedParenthesisError,
    "UnexpectedObjectTypeError",
    ()=>UnexpectedObjectTypeError,
    "UnrecognizedStreamTypeError",
    ()=>UnrecognizedStreamTypeError,
    "UnsupportedEncodingError",
    ()=>UnsupportedEncodingError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/arrays.js [app-client] (ecmascript)");
;
;
var MethodNotImplementedError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(MethodNotImplementedError, _super);
    function MethodNotImplementedError(className, methodName) {
        var _this = this;
        var msg = "Method " + className + "." + methodName + "() not implemented";
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return MethodNotImplementedError;
}(Error);
;
var PrivateConstructorError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PrivateConstructorError, _super);
    function PrivateConstructorError(className) {
        var _this = this;
        var msg = "Cannot construct " + className + " - it has a private constructor";
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return PrivateConstructorError;
}(Error);
;
var UnexpectedObjectTypeError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(UnexpectedObjectTypeError, _super);
    function UnexpectedObjectTypeError(expected, actual) {
        var _this = this;
        var name = function(t) {
            var _a, _b;
            return (_a = t === null || t === void 0 ? void 0 : t.name) !== null && _a !== void 0 ? _a : (_b = t === null || t === void 0 ? void 0 : t.constructor) === null || _b === void 0 ? void 0 : _b.name;
        };
        var expectedTypes = Array.isArray(expected) ? expected.map(name) : [
            name(expected)
        ];
        var msg = "Expected instance of " + expectedTypes.join(' or ') + ", " + ("but got instance of " + (actual ? name(actual) : actual));
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return UnexpectedObjectTypeError;
}(Error);
;
var UnsupportedEncodingError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(UnsupportedEncodingError, _super);
    function UnsupportedEncodingError(encoding) {
        var _this = this;
        var msg = encoding + " stream encoding not supported";
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return UnsupportedEncodingError;
}(Error);
;
var ReparseError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(ReparseError, _super);
    function ReparseError(className, methodName) {
        var _this = this;
        var msg = "Cannot call " + className + "." + methodName + "() more than once";
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return ReparseError;
}(Error);
;
var MissingCatalogError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(MissingCatalogError, _super);
    function MissingCatalogError(ref) {
        var _this = this;
        var msg = "Missing catalog (ref=" + ref + ")";
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return MissingCatalogError;
}(Error);
;
var MissingPageContentsEmbeddingError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(MissingPageContentsEmbeddingError, _super);
    function MissingPageContentsEmbeddingError() {
        var _this = this;
        var msg = "Can't embed page with missing Contents";
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return MissingPageContentsEmbeddingError;
}(Error);
;
var UnrecognizedStreamTypeError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(UnrecognizedStreamTypeError, _super);
    function UnrecognizedStreamTypeError(stream) {
        var _a, _b, _c;
        var _this = this;
        var streamType = (_c = (_b = (_a = stream === null || stream === void 0 ? void 0 : stream.contructor) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : stream === null || stream === void 0 ? void 0 : stream.name) !== null && _c !== void 0 ? _c : stream;
        var msg = "Unrecognized stream type: " + streamType;
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return UnrecognizedStreamTypeError;
}(Error);
;
var PageEmbeddingMismatchedContextError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PageEmbeddingMismatchedContextError, _super);
    function PageEmbeddingMismatchedContextError() {
        var _this = this;
        var msg = "Found mismatched contexts while embedding pages. All pages in the array passed to `PDFDocument.embedPages()` must be from the same document.";
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return PageEmbeddingMismatchedContextError;
}(Error);
;
var PDFArrayIsNotRectangleError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFArrayIsNotRectangleError, _super);
    function PDFArrayIsNotRectangleError(size) {
        var _this = this;
        var msg = "Attempted to convert PDFArray with " + size + " elements to rectangle, but must have exactly 4 elements.";
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return PDFArrayIsNotRectangleError;
}(Error);
;
var InvalidPDFDateStringError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(InvalidPDFDateStringError, _super);
    function InvalidPDFDateStringError(value) {
        var _this = this;
        var msg = "Attempted to convert \"" + value + "\" to a date, but it does not match the PDF date string format.";
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return InvalidPDFDateStringError;
}(Error);
;
var InvalidTargetIndexError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(InvalidTargetIndexError, _super);
    function InvalidTargetIndexError(targetIndex, Count) {
        var _this = this;
        var msg = "Invalid targetIndex specified: targetIndex=" + targetIndex + " must be less than Count=" + Count;
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return InvalidTargetIndexError;
}(Error);
;
var CorruptPageTreeError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(CorruptPageTreeError, _super);
    function CorruptPageTreeError(targetIndex, operation) {
        var _this = this;
        var msg = "Failed to " + operation + " at targetIndex=" + targetIndex + " due to corrupt page tree: It is likely that one or more 'Count' entries are invalid";
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return CorruptPageTreeError;
}(Error);
;
var IndexOutOfBoundsError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(IndexOutOfBoundsError, _super);
    function IndexOutOfBoundsError(index, min, max) {
        var _this = this;
        var msg = "index should be at least " + min + " and at most " + max + ", but was actually " + index;
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return IndexOutOfBoundsError;
}(Error);
;
var InvalidAcroFieldValueError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(InvalidAcroFieldValueError, _super);
    function InvalidAcroFieldValueError() {
        var _this = this;
        var msg = "Attempted to set invalid field value";
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return InvalidAcroFieldValueError;
}(Error);
;
var MultiSelectValueError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(MultiSelectValueError, _super);
    function MultiSelectValueError() {
        var _this = this;
        var msg = "Attempted to select multiple values for single-select field";
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return MultiSelectValueError;
}(Error);
;
var MissingDAEntryError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(MissingDAEntryError, _super);
    function MissingDAEntryError(fieldName) {
        var _this = this;
        var msg = "No /DA (default appearance) entry found for field: " + fieldName;
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return MissingDAEntryError;
}(Error);
;
var MissingTfOperatorError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(MissingTfOperatorError, _super);
    function MissingTfOperatorError(fieldName) {
        var _this = this;
        var msg = "No Tf operator found for DA of field: " + fieldName;
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return MissingTfOperatorError;
}(Error);
;
var NumberParsingError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(NumberParsingError, _super);
    function NumberParsingError(pos, value) {
        var _this = this;
        var msg = "Failed to parse number " + ("(line:" + pos.line + " col:" + pos.column + " offset=" + pos.offset + "): \"" + value + "\"");
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return NumberParsingError;
}(Error);
;
var PDFParsingError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFParsingError, _super);
    function PDFParsingError(pos, details) {
        var _this = this;
        var msg = "Failed to parse PDF document " + ("(line:" + pos.line + " col:" + pos.column + " offset=" + pos.offset + "): " + details);
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return PDFParsingError;
}(Error);
;
var NextByteAssertionError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(NextByteAssertionError, _super);
    function NextByteAssertionError(pos, expectedByte, actualByte) {
        var _this = this;
        var msg = "Expected next byte to be " + expectedByte + " but it was actually " + actualByte;
        _this = _super.call(this, pos, msg) || this;
        return _this;
    }
    return NextByteAssertionError;
}(PDFParsingError);
;
var PDFObjectParsingError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFObjectParsingError, _super);
    function PDFObjectParsingError(pos, byte) {
        var _this = this;
        var msg = "Failed to parse PDF object starting with the following byte: " + byte;
        _this = _super.call(this, pos, msg) || this;
        return _this;
    }
    return PDFObjectParsingError;
}(PDFParsingError);
;
var PDFInvalidObjectParsingError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFInvalidObjectParsingError, _super);
    function PDFInvalidObjectParsingError(pos) {
        var _this = this;
        var msg = "Failed to parse invalid PDF object";
        _this = _super.call(this, pos, msg) || this;
        return _this;
    }
    return PDFInvalidObjectParsingError;
}(PDFParsingError);
;
var PDFStreamParsingError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFStreamParsingError, _super);
    function PDFStreamParsingError(pos) {
        var _this = this;
        var msg = "Failed to parse PDF stream";
        _this = _super.call(this, pos, msg) || this;
        return _this;
    }
    return PDFStreamParsingError;
}(PDFParsingError);
;
var UnbalancedParenthesisError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(UnbalancedParenthesisError, _super);
    function UnbalancedParenthesisError(pos) {
        var _this = this;
        var msg = "Failed to parse PDF literal string due to unbalanced parenthesis";
        _this = _super.call(this, pos, msg) || this;
        return _this;
    }
    return UnbalancedParenthesisError;
}(PDFParsingError);
;
var StalledParserError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(StalledParserError, _super);
    function StalledParserError(pos) {
        var _this = this;
        var msg = "Parser stalled";
        _this = _super.call(this, pos, msg) || this;
        return _this;
    }
    return StalledParserError;
}(PDFParsingError);
;
var MissingPDFHeaderError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(MissingPDFHeaderError, _super);
    function MissingPDFHeaderError(pos) {
        var _this = this;
        var msg = "No PDF header found";
        _this = _super.call(this, pos, msg) || this;
        return _this;
    }
    return MissingPDFHeaderError;
}(PDFParsingError);
;
var MissingKeywordError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(MissingKeywordError, _super);
    function MissingKeywordError(pos, keyword) {
        var _this = this;
        var msg = "Did not find expected keyword '" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayAsString"])(keyword) + "'";
        _this = _super.call(this, pos, msg) || this;
        return _this;
    }
    return MissingKeywordError;
}(PDFParsingError);
;
 //# sourceMappingURL=errors.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/CharCodes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var CharCodes;
(function(CharCodes) {
    CharCodes[CharCodes["Null"] = 0] = "Null";
    CharCodes[CharCodes["Backspace"] = 8] = "Backspace";
    CharCodes[CharCodes["Tab"] = 9] = "Tab";
    CharCodes[CharCodes["Newline"] = 10] = "Newline";
    CharCodes[CharCodes["FormFeed"] = 12] = "FormFeed";
    CharCodes[CharCodes["CarriageReturn"] = 13] = "CarriageReturn";
    CharCodes[CharCodes["Space"] = 32] = "Space";
    CharCodes[CharCodes["ExclamationPoint"] = 33] = "ExclamationPoint";
    CharCodes[CharCodes["Hash"] = 35] = "Hash";
    CharCodes[CharCodes["Percent"] = 37] = "Percent";
    CharCodes[CharCodes["LeftParen"] = 40] = "LeftParen";
    CharCodes[CharCodes["RightParen"] = 41] = "RightParen";
    CharCodes[CharCodes["Plus"] = 43] = "Plus";
    CharCodes[CharCodes["Minus"] = 45] = "Minus";
    CharCodes[CharCodes["Dash"] = 45] = "Dash";
    CharCodes[CharCodes["Period"] = 46] = "Period";
    CharCodes[CharCodes["ForwardSlash"] = 47] = "ForwardSlash";
    CharCodes[CharCodes["Zero"] = 48] = "Zero";
    CharCodes[CharCodes["One"] = 49] = "One";
    CharCodes[CharCodes["Two"] = 50] = "Two";
    CharCodes[CharCodes["Three"] = 51] = "Three";
    CharCodes[CharCodes["Four"] = 52] = "Four";
    CharCodes[CharCodes["Five"] = 53] = "Five";
    CharCodes[CharCodes["Six"] = 54] = "Six";
    CharCodes[CharCodes["Seven"] = 55] = "Seven";
    CharCodes[CharCodes["Eight"] = 56] = "Eight";
    CharCodes[CharCodes["Nine"] = 57] = "Nine";
    CharCodes[CharCodes["LessThan"] = 60] = "LessThan";
    CharCodes[CharCodes["GreaterThan"] = 62] = "GreaterThan";
    CharCodes[CharCodes["A"] = 65] = "A";
    CharCodes[CharCodes["D"] = 68] = "D";
    CharCodes[CharCodes["E"] = 69] = "E";
    CharCodes[CharCodes["F"] = 70] = "F";
    CharCodes[CharCodes["O"] = 79] = "O";
    CharCodes[CharCodes["P"] = 80] = "P";
    CharCodes[CharCodes["R"] = 82] = "R";
    CharCodes[CharCodes["LeftSquareBracket"] = 91] = "LeftSquareBracket";
    CharCodes[CharCodes["BackSlash"] = 92] = "BackSlash";
    CharCodes[CharCodes["RightSquareBracket"] = 93] = "RightSquareBracket";
    CharCodes[CharCodes["a"] = 97] = "a";
    CharCodes[CharCodes["b"] = 98] = "b";
    CharCodes[CharCodes["d"] = 100] = "d";
    CharCodes[CharCodes["e"] = 101] = "e";
    CharCodes[CharCodes["f"] = 102] = "f";
    CharCodes[CharCodes["i"] = 105] = "i";
    CharCodes[CharCodes["j"] = 106] = "j";
    CharCodes[CharCodes["l"] = 108] = "l";
    CharCodes[CharCodes["m"] = 109] = "m";
    CharCodes[CharCodes["n"] = 110] = "n";
    CharCodes[CharCodes["o"] = 111] = "o";
    CharCodes[CharCodes["r"] = 114] = "r";
    CharCodes[CharCodes["s"] = 115] = "s";
    CharCodes[CharCodes["t"] = 116] = "t";
    CharCodes[CharCodes["u"] = 117] = "u";
    CharCodes[CharCodes["x"] = 120] = "x";
    CharCodes[CharCodes["LeftCurly"] = 123] = "LeftCurly";
    CharCodes[CharCodes["RightCurly"] = 125] = "RightCurly";
    CharCodes[CharCodes["Tilde"] = 126] = "Tilde";
})(CharCodes || (CharCodes = {}));
const __TURBOPACK__default__export__ = CharCodes;
 //# sourceMappingURL=CharCodes.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/document/PDFHeader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/CharCodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/strings.js [app-client] (ecmascript)");
;
;
var PDFHeader = function() {
    function PDFHeader(major, minor) {
        this.major = String(major);
        this.minor = String(minor);
    }
    PDFHeader.prototype.toString = function() {
        var bc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charFromCode"])(129);
        return "%PDF-" + this.major + "." + this.minor + "\n%" + bc + bc + bc + bc;
    };
    PDFHeader.prototype.sizeInBytes = function() {
        return 12 + this.major.length + this.minor.length;
    };
    PDFHeader.prototype.copyBytesInto = function(buffer, offset) {
        var initialOffset = offset;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Percent;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].P;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].D;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Dash;
        offset += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyStringIntoBuffer"])(this.major, buffer, offset);
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Period;
        offset += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyStringIntoBuffer"])(this.minor, buffer, offset);
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Percent;
        buffer[offset++] = 129;
        buffer[offset++] = 129;
        buffer[offset++] = 129;
        buffer[offset++] = 129;
        return offset - initialOffset;
    };
    PDFHeader.forVersion = function(major, minor) {
        return new PDFHeader(major, minor);
    };
    return PDFHeader;
}();
const __TURBOPACK__default__export__ = PDFHeader;
 //# sourceMappingURL=PDFHeader.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFObject.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
;
var PDFObject = function() {
    function PDFObject() {}
    PDFObject.prototype.clone = function(_context) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MethodNotImplementedError"](this.constructor.name, 'clone');
    };
    PDFObject.prototype.toString = function() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MethodNotImplementedError"](this.constructor.name, 'toString');
    };
    PDFObject.prototype.sizeInBytes = function() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MethodNotImplementedError"](this.constructor.name, 'sizeInBytes');
    };
    PDFObject.prototype.copyBytesInto = function(_buffer, _offset) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MethodNotImplementedError"](this.constructor.name, 'copyBytesInto');
    };
    return PDFObject;
}();
const __TURBOPACK__default__export__ = PDFObject;
 //# sourceMappingURL=PDFObject.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNumber.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/strings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/numbers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFObject.js [app-client] (ecmascript)");
;
;
;
var PDFNumber = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFNumber, _super);
    function PDFNumber(value) {
        var _this = _super.call(this) || this;
        _this.numberValue = value;
        _this.stringValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToString"])(value);
        return _this;
    }
    PDFNumber.prototype.asNumber = function() {
        return this.numberValue;
    };
    /** @deprecated in favor of [[PDFNumber.asNumber]] */ PDFNumber.prototype.value = function() {
        return this.numberValue;
    };
    PDFNumber.prototype.clone = function() {
        return PDFNumber.of(this.numberValue);
    };
    PDFNumber.prototype.toString = function() {
        return this.stringValue;
    };
    PDFNumber.prototype.sizeInBytes = function() {
        return this.stringValue.length;
    };
    PDFNumber.prototype.copyBytesInto = function(buffer, offset) {
        offset += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyStringIntoBuffer"])(this.stringValue, buffer, offset);
        return this.stringValue.length;
    };
    PDFNumber.of = function(value) {
        return new PDFNumber(value);
    };
    return PDFNumber;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFNumber;
 //# sourceMappingURL=PDFNumber.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFArray.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/CharCodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
;
;
;
;
;
var PDFArray = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFArray, _super);
    function PDFArray(context) {
        var _this = _super.call(this) || this;
        _this.array = [];
        _this.context = context;
        return _this;
    }
    PDFArray.prototype.size = function() {
        return this.array.length;
    };
    PDFArray.prototype.push = function(object) {
        this.array.push(object);
    };
    PDFArray.prototype.insert = function(index, object) {
        this.array.splice(index, 0, object);
    };
    PDFArray.prototype.indexOf = function(object) {
        var index = this.array.indexOf(object);
        return index === -1 ? undefined : index;
    };
    PDFArray.prototype.remove = function(index) {
        this.array.splice(index, 1);
    };
    PDFArray.prototype.set = function(idx, object) {
        this.array[idx] = object;
    };
    PDFArray.prototype.get = function(index) {
        return this.array[index];
    };
    PDFArray.prototype.lookupMaybe = function(index) {
        var _a;
        var types = [];
        for(var _i = 1; _i < arguments.length; _i++){
            types[_i - 1] = arguments[_i];
        }
        return (_a = this.context).lookupMaybe.apply(_a, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])([
            this.get(index)
        ], types));
    };
    PDFArray.prototype.lookup = function(index) {
        var _a;
        var types = [];
        for(var _i = 1; _i < arguments.length; _i++){
            types[_i - 1] = arguments[_i];
        }
        return (_a = this.context).lookup.apply(_a, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])([
            this.get(index)
        ], types));
    };
    PDFArray.prototype.asRectangle = function() {
        if (this.size() !== 4) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFArrayIsNotRectangleError"](this.size());
        var lowerLeftX = this.lookup(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).asNumber();
        var lowerLeftY = this.lookup(1, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).asNumber();
        var upperRightX = this.lookup(2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).asNumber();
        var upperRightY = this.lookup(3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).asNumber();
        var x = lowerLeftX;
        var y = lowerLeftY;
        var width = upperRightX - lowerLeftX;
        var height = upperRightY - lowerLeftY;
        return {
            x: x,
            y: y,
            width: width,
            height: height
        };
    };
    PDFArray.prototype.asArray = function() {
        return this.array.slice();
    };
    PDFArray.prototype.clone = function(context) {
        var clone = PDFArray.withContext(context || this.context);
        for(var idx = 0, len = this.size(); idx < len; idx++){
            clone.push(this.array[idx]);
        }
        return clone;
    };
    PDFArray.prototype.toString = function() {
        var arrayString = '[ ';
        for(var idx = 0, len = this.size(); idx < len; idx++){
            arrayString += this.get(idx).toString();
            arrayString += ' ';
        }
        arrayString += ']';
        return arrayString;
    };
    PDFArray.prototype.sizeInBytes = function() {
        var size = 3;
        for(var idx = 0, len = this.size(); idx < len; idx++){
            size += this.get(idx).sizeInBytes() + 1;
        }
        return size;
    };
    PDFArray.prototype.copyBytesInto = function(buffer, offset) {
        var initialOffset = offset;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LeftSquareBracket;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Space;
        for(var idx = 0, len = this.size(); idx < len; idx++){
            offset += this.get(idx).copyBytesInto(buffer, offset);
            buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Space;
        }
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].RightSquareBracket;
        return offset - initialOffset;
    };
    PDFArray.prototype.scalePDFNumbers = function(x, y) {
        for(var idx = 0, len = this.size(); idx < len; idx++){
            var el = this.lookup(idx);
            if (el instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
                var factor = idx % 2 === 0 ? x : y;
                this.set(idx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(el.asNumber() * factor));
            }
        }
    };
    PDFArray.withContext = function(context) {
        return new PDFArray(context);
    };
    return PDFArray;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFArray;
 //# sourceMappingURL=PDFArray.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFBool.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/CharCodes.js [app-client] (ecmascript)");
;
;
;
;
var ENFORCER = {};
var PDFBool = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFBool, _super);
    function PDFBool(enforcer, value) {
        var _this = this;
        if (enforcer !== ENFORCER) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrivateConstructorError"]('PDFBool');
        _this = _super.call(this) || this;
        _this.value = value;
        return _this;
    }
    PDFBool.prototype.asBoolean = function() {
        return this.value;
    };
    PDFBool.prototype.clone = function() {
        return this;
    };
    PDFBool.prototype.toString = function() {
        return String(this.value);
    };
    PDFBool.prototype.sizeInBytes = function() {
        return this.value ? 4 : 5;
    };
    PDFBool.prototype.copyBytesInto = function(buffer, offset) {
        if (this.value) {
            buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].t;
            buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].r;
            buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].u;
            buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].e;
            return 4;
        } else {
            buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].f;
            buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a;
            buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].l;
            buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].s;
            buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].e;
            return 5;
        }
    };
    PDFBool.True = new PDFBool(ENFORCER, true);
    PDFBool.False = new PDFBool(ENFORCER, false);
    return PDFBool;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFBool;
 //# sourceMappingURL=PDFBool.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/Delimiters.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IsDelimiter",
    ()=>IsDelimiter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/CharCodes.js [app-client] (ecmascript)");
;
var IsDelimiter = new Uint8Array(256);
IsDelimiter[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LeftParen] = 1;
IsDelimiter[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].RightParen] = 1;
IsDelimiter[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LessThan] = 1;
IsDelimiter[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].GreaterThan] = 1;
IsDelimiter[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LeftSquareBracket] = 1;
IsDelimiter[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].RightSquareBracket] = 1;
IsDelimiter[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LeftCurly] = 1;
IsDelimiter[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].RightCurly] = 1;
IsDelimiter[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ForwardSlash] = 1;
IsDelimiter[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Percent] = 1; //# sourceMappingURL=Delimiters.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/Whitespace.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IsWhitespace",
    ()=>IsWhitespace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/CharCodes.js [app-client] (ecmascript)");
;
var IsWhitespace = new Uint8Array(256);
IsWhitespace[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Null] = 1;
IsWhitespace[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Tab] = 1;
IsWhitespace[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline] = 1;
IsWhitespace[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].FormFeed] = 1;
IsWhitespace[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CarriageReturn] = 1;
IsWhitespace[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Space] = 1; //# sourceMappingURL=Whitespace.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/Irregular.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IsIrregular",
    ()=>IsIrregular
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/CharCodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Delimiters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/Delimiters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Whitespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/Whitespace.js [app-client] (ecmascript)");
;
;
;
var IsIrregular = new Uint8Array(256);
for(var idx = 0, len = 256; idx < len; idx++){
    IsIrregular[idx] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Whitespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IsWhitespace"][idx] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Delimiters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IsDelimiter"][idx] ? 1 : 0;
}
IsIrregular[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Hash] = 1; //# sourceMappingURL=Irregular.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/CharCodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Irregular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/Irregular.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/strings.js [app-client] (ecmascript)");
;
;
;
;
;
;
var decodeName = function(name) {
    return name.replace(/#([\dABCDEF]{2})/g, function(_, hex) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charFromHexCode"])(hex);
    });
};
var isRegularChar = function(charCode) {
    return charCode >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ExclamationPoint && charCode <= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Tilde && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Irregular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IsIrregular"][charCode];
};
var ENFORCER = {};
var pool = new Map();
var PDFName = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFName, _super);
    function PDFName(enforcer, name) {
        var _this = this;
        if (enforcer !== ENFORCER) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrivateConstructorError"]('PDFName');
        _this = _super.call(this) || this;
        var encodedName = '/';
        for(var idx = 0, len = name.length; idx < len; idx++){
            var character = name[idx];
            var code = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])(character);
            encodedName += isRegularChar(code) ? character : "#" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHexString"])(code);
        }
        _this.encodedName = encodedName;
        return _this;
    }
    PDFName.prototype.asBytes = function() {
        var bytes = [];
        var hex = '';
        var escaped = false;
        var pushByte = function(byte) {
            if (byte !== undefined) bytes.push(byte);
            escaped = false;
        };
        for(var idx = 1, len = this.encodedName.length; idx < len; idx++){
            var char = this.encodedName[idx];
            var byte = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])(char);
            var nextChar = this.encodedName[idx + 1];
            if (!escaped) {
                if (byte === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Hash) escaped = true;
                else pushByte(byte);
            } else {
                if (byte >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Zero && byte <= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Nine || byte >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a && byte <= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].f || byte >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].A && byte <= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F) {
                    hex += char;
                    if (hex.length === 2 || !(nextChar >= '0' && nextChar <= '9' || nextChar >= 'a' && nextChar <= 'f' || nextChar >= 'A' && nextChar <= 'F')) {
                        pushByte(parseInt(hex, 16));
                        hex = '';
                    }
                } else {
                    pushByte(byte);
                }
            }
        }
        return new Uint8Array(bytes);
    };
    // TODO: This should probably use `utf8Decode()`
    // TODO: Polyfill Array.from?
    PDFName.prototype.decodeText = function() {
        var bytes = this.asBytes();
        return String.fromCharCode.apply(String, Array.from(bytes));
    };
    PDFName.prototype.asString = function() {
        return this.encodedName;
    };
    /** @deprecated in favor of [[PDFName.asString]] */ PDFName.prototype.value = function() {
        return this.encodedName;
    };
    PDFName.prototype.clone = function() {
        return this;
    };
    PDFName.prototype.toString = function() {
        return this.encodedName;
    };
    PDFName.prototype.sizeInBytes = function() {
        return this.encodedName.length;
    };
    PDFName.prototype.copyBytesInto = function(buffer, offset) {
        offset += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyStringIntoBuffer"])(this.encodedName, buffer, offset);
        return this.encodedName.length;
    };
    PDFName.of = function(name) {
        var decodedValue = decodeName(name);
        var instance = pool.get(decodedValue);
        if (!instance) {
            instance = new PDFName(ENFORCER, decodedValue);
            pool.set(decodedValue, instance);
        }
        return instance;
    };
    /* tslint:disable member-ordering */ PDFName.Length = PDFName.of('Length');
    PDFName.FlateDecode = PDFName.of('FlateDecode');
    PDFName.Resources = PDFName.of('Resources');
    PDFName.Font = PDFName.of('Font');
    PDFName.XObject = PDFName.of('XObject');
    PDFName.ExtGState = PDFName.of('ExtGState');
    PDFName.Contents = PDFName.of('Contents');
    PDFName.Type = PDFName.of('Type');
    PDFName.Parent = PDFName.of('Parent');
    PDFName.MediaBox = PDFName.of('MediaBox');
    PDFName.Page = PDFName.of('Page');
    PDFName.Annots = PDFName.of('Annots');
    PDFName.TrimBox = PDFName.of('TrimBox');
    PDFName.ArtBox = PDFName.of('ArtBox');
    PDFName.BleedBox = PDFName.of('BleedBox');
    PDFName.CropBox = PDFName.of('CropBox');
    PDFName.Rotate = PDFName.of('Rotate');
    PDFName.Title = PDFName.of('Title');
    PDFName.Author = PDFName.of('Author');
    PDFName.Subject = PDFName.of('Subject');
    PDFName.Creator = PDFName.of('Creator');
    PDFName.Keywords = PDFName.of('Keywords');
    PDFName.Producer = PDFName.of('Producer');
    PDFName.CreationDate = PDFName.of('CreationDate');
    PDFName.ModDate = PDFName.of('ModDate');
    return PDFName;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFName;
 //# sourceMappingURL=PDFName.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNull.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/CharCodes.js [app-client] (ecmascript)");
;
;
;
var PDFNull = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFNull, _super);
    function PDFNull() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PDFNull.prototype.asNull = function() {
        return null;
    };
    PDFNull.prototype.clone = function() {
        return this;
    };
    PDFNull.prototype.toString = function() {
        return 'null';
    };
    PDFNull.prototype.sizeInBytes = function() {
        return 4;
    };
    PDFNull.prototype.copyBytesInto = function(buffer, offset) {
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].n;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].u;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].l;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].l;
        return 4;
    };
    return PDFNull;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = new PDFNull();
 //# sourceMappingURL=PDFNull.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFDict.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNull$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNull.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/CharCodes.js [app-client] (ecmascript)");
;
;
;
;
;
var PDFDict = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFDict, _super);
    function PDFDict(map, context) {
        var _this = _super.call(this) || this;
        _this.dict = map;
        _this.context = context;
        return _this;
    }
    PDFDict.prototype.keys = function() {
        return Array.from(this.dict.keys());
    };
    PDFDict.prototype.values = function() {
        return Array.from(this.dict.values());
    };
    PDFDict.prototype.entries = function() {
        return Array.from(this.dict.entries());
    };
    PDFDict.prototype.set = function(key, value) {
        this.dict.set(key, value);
    };
    PDFDict.prototype.get = function(key, // TODO: `preservePDFNull` is for backwards compatibility. Should be
    // removed in next breaking API change.
    preservePDFNull) {
        if (preservePDFNull === void 0) {
            preservePDFNull = false;
        }
        var value = this.dict.get(key);
        if (value === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNull$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && !preservePDFNull) return undefined;
        return value;
    };
    PDFDict.prototype.has = function(key) {
        var value = this.dict.get(key);
        return value !== undefined && value !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNull$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    };
    PDFDict.prototype.lookupMaybe = function(key) {
        var _a;
        var types = [];
        for(var _i = 1; _i < arguments.length; _i++){
            types[_i - 1] = arguments[_i];
        }
        // TODO: `preservePDFNull` is for backwards compatibility. Should be
        // removed in next breaking API change.
        var preservePDFNull = types.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNull$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
        var value = (_a = this.context).lookupMaybe.apply(_a, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])([
            this.get(key, preservePDFNull)
        ], types));
        if (value === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNull$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && !preservePDFNull) return undefined;
        return value;
    };
    PDFDict.prototype.lookup = function(key) {
        var _a;
        var types = [];
        for(var _i = 1; _i < arguments.length; _i++){
            types[_i - 1] = arguments[_i];
        }
        // TODO: `preservePDFNull` is for backwards compatibility. Should be
        // removed in next breaking API change.
        var preservePDFNull = types.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNull$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
        var value = (_a = this.context).lookup.apply(_a, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])([
            this.get(key, preservePDFNull)
        ], types));
        if (value === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNull$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && !preservePDFNull) return undefined;
        return value;
    };
    PDFDict.prototype.delete = function(key) {
        return this.dict.delete(key);
    };
    PDFDict.prototype.asMap = function() {
        return new Map(this.dict);
    };
    /** Generate a random key that doesn't exist in current key set */ PDFDict.prototype.uniqueKey = function(tag) {
        if (tag === void 0) {
            tag = '';
        }
        var existingKeys = this.keys();
        var key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(this.context.addRandomSuffix(tag, 10));
        while(existingKeys.includes(key)){
            key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(this.context.addRandomSuffix(tag, 10));
        }
        return key;
    };
    PDFDict.prototype.clone = function(context) {
        var clone = PDFDict.withContext(context || this.context);
        var entries = this.entries();
        for(var idx = 0, len = entries.length; idx < len; idx++){
            var _a = entries[idx], key = _a[0], value = _a[1];
            clone.set(key, value);
        }
        return clone;
    };
    PDFDict.prototype.toString = function() {
        var dictString = '<<\n';
        var entries = this.entries();
        for(var idx = 0, len = entries.length; idx < len; idx++){
            var _a = entries[idx], key = _a[0], value = _a[1];
            dictString += key.toString() + ' ' + value.toString() + '\n';
        }
        dictString += '>>';
        return dictString;
    };
    PDFDict.prototype.sizeInBytes = function() {
        var size = 5;
        var entries = this.entries();
        for(var idx = 0, len = entries.length; idx < len; idx++){
            var _a = entries[idx], key = _a[0], value = _a[1];
            size += key.sizeInBytes() + value.sizeInBytes() + 2;
        }
        return size;
    };
    PDFDict.prototype.copyBytesInto = function(buffer, offset) {
        var initialOffset = offset;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LessThan;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LessThan;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline;
        var entries = this.entries();
        for(var idx = 0, len = entries.length; idx < len; idx++){
            var _a = entries[idx], key = _a[0], value = _a[1];
            offset += key.copyBytesInto(buffer, offset);
            buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Space;
            offset += value.copyBytesInto(buffer, offset);
            buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline;
        }
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].GreaterThan;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].GreaterThan;
        return offset - initialOffset;
    };
    PDFDict.withContext = function(context) {
        return new PDFDict(new Map(), context);
    };
    PDFDict.fromMapWithContext = function(map, context) {
        return new PDFDict(map, context);
    };
    return PDFDict;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFDict;
 //# sourceMappingURL=PDFDict.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFStream.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/CharCodes.js [app-client] (ecmascript)");
;
;
;
;
;
;
var PDFStream = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFStream, _super);
    function PDFStream(dict) {
        var _this = _super.call(this) || this;
        _this.dict = dict;
        return _this;
    }
    PDFStream.prototype.clone = function(_context) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MethodNotImplementedError"](this.constructor.name, 'clone');
    };
    PDFStream.prototype.getContentsString = function() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MethodNotImplementedError"](this.constructor.name, 'getContentsString');
    };
    PDFStream.prototype.getContents = function() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MethodNotImplementedError"](this.constructor.name, 'getContents');
    };
    PDFStream.prototype.getContentsSize = function() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MethodNotImplementedError"](this.constructor.name, 'getContentsSize');
    };
    PDFStream.prototype.updateDict = function() {
        var contentsSize = this.getContentsSize();
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Length, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(contentsSize));
    };
    PDFStream.prototype.sizeInBytes = function() {
        this.updateDict();
        return this.dict.sizeInBytes() + this.getContentsSize() + 18;
    };
    PDFStream.prototype.toString = function() {
        this.updateDict();
        var streamString = this.dict.toString();
        streamString += '\nstream\n';
        streamString += this.getContentsString();
        streamString += '\nendstream';
        return streamString;
    };
    PDFStream.prototype.copyBytesInto = function(buffer, offset) {
        this.updateDict();
        var initialOffset = offset;
        offset += this.dict.copyBytesInto(buffer, offset);
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].s;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].t;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].r;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].e;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].m;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline;
        var contents = this.getContents();
        for(var idx = 0, len = contents.length; idx < len; idx++){
            buffer[offset++] = contents[idx];
        }
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].e;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].n;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].d;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].s;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].t;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].r;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].e;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].m;
        return offset - initialOffset;
    };
    return PDFStream;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFStream;
 //# sourceMappingURL=PDFStream.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRawStream.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/arrays.js [app-client] (ecmascript)");
;
;
;
var PDFRawStream = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFRawStream, _super);
    function PDFRawStream(dict, contents) {
        var _this = _super.call(this, dict) || this;
        _this.contents = contents;
        return _this;
    }
    PDFRawStream.prototype.asUint8Array = function() {
        return this.contents.slice();
    };
    PDFRawStream.prototype.clone = function(context) {
        return PDFRawStream.of(this.dict.clone(context), this.contents.slice());
    };
    PDFRawStream.prototype.getContentsString = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayAsString"])(this.contents);
    };
    PDFRawStream.prototype.getContents = function() {
        return this.contents;
    };
    PDFRawStream.prototype.getContentsSize = function() {
        return this.contents.length;
    };
    PDFRawStream.of = function(dict, contents) {
        return new PDFRawStream(dict, contents);
    };
    return PDFRawStream;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFRawStream;
 //# sourceMappingURL=PDFRawStream.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/strings.js [app-client] (ecmascript)");
;
;
;
;
var ENFORCER = {};
var pool = new Map();
var PDFRef = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFRef, _super);
    function PDFRef(enforcer, objectNumber, generationNumber) {
        var _this = this;
        if (enforcer !== ENFORCER) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrivateConstructorError"]('PDFRef');
        _this = _super.call(this) || this;
        _this.objectNumber = objectNumber;
        _this.generationNumber = generationNumber;
        _this.tag = objectNumber + " " + generationNumber + " R";
        return _this;
    }
    PDFRef.prototype.clone = function() {
        return this;
    };
    PDFRef.prototype.toString = function() {
        return this.tag;
    };
    PDFRef.prototype.sizeInBytes = function() {
        return this.tag.length;
    };
    PDFRef.prototype.copyBytesInto = function(buffer, offset) {
        offset += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyStringIntoBuffer"])(this.tag, buffer, offset);
        return this.tag.length;
    };
    PDFRef.of = function(objectNumber, generationNumber) {
        if (generationNumber === void 0) {
            generationNumber = 0;
        }
        var tag = objectNumber + " " + generationNumber + " R";
        var instance = pool.get(tag);
        if (!instance) {
            instance = new PDFRef(ENFORCER, objectNumber, generationNumber);
            pool.set(tag, instance);
        }
        return instance;
    };
    return PDFRef;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFRef;
 //# sourceMappingURL=PDFRef.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/operators/PDFOperator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/CharCodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/strings.js [app-client] (ecmascript)");
;
;
;
var PDFOperator = function() {
    function PDFOperator(name, args) {
        this.name = name;
        this.args = args || [];
    }
    PDFOperator.prototype.clone = function(context) {
        var args = new Array(this.args.length);
        for(var idx = 0, len = args.length; idx < len; idx++){
            var arg = this.args[idx];
            args[idx] = arg instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] ? arg.clone(context) : arg;
        }
        return PDFOperator.of(this.name, args);
    };
    PDFOperator.prototype.toString = function() {
        var value = '';
        for(var idx = 0, len = this.args.length; idx < len; idx++){
            value += String(this.args[idx]) + ' ';
        }
        value += this.name;
        return value;
    };
    PDFOperator.prototype.sizeInBytes = function() {
        var size = 0;
        for(var idx = 0, len = this.args.length; idx < len; idx++){
            var arg = this.args[idx];
            size += (arg instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] ? arg.sizeInBytes() : arg.length) + 1;
        }
        size += this.name.length;
        return size;
    };
    PDFOperator.prototype.copyBytesInto = function(buffer, offset) {
        var initialOffset = offset;
        for(var idx = 0, len = this.args.length; idx < len; idx++){
            var arg = this.args[idx];
            if (arg instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
                offset += arg.copyBytesInto(buffer, offset);
            } else {
                offset += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyStringIntoBuffer"])(arg, buffer, offset);
            }
            buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Space;
        }
        offset += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyStringIntoBuffer"])(this.name, buffer, offset);
        return offset - initialOffset;
    };
    PDFOperator.of = function(name, args) {
        return new PDFOperator(name, args);
    };
    return PDFOperator;
}();
const __TURBOPACK__default__export__ = PDFOperator;
 //# sourceMappingURL=PDFOperator.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/operators/PDFOperatorNames.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var PDFOperatorNames;
(function(PDFOperatorNames) {
    // Non Stroking Color Operators
    PDFOperatorNames["NonStrokingColor"] = "sc";
    PDFOperatorNames["NonStrokingColorN"] = "scn";
    PDFOperatorNames["NonStrokingColorRgb"] = "rg";
    PDFOperatorNames["NonStrokingColorGray"] = "g";
    PDFOperatorNames["NonStrokingColorCmyk"] = "k";
    PDFOperatorNames["NonStrokingColorspace"] = "cs";
    // Stroking Color Operators
    PDFOperatorNames["StrokingColor"] = "SC";
    PDFOperatorNames["StrokingColorN"] = "SCN";
    PDFOperatorNames["StrokingColorRgb"] = "RG";
    PDFOperatorNames["StrokingColorGray"] = "G";
    PDFOperatorNames["StrokingColorCmyk"] = "K";
    PDFOperatorNames["StrokingColorspace"] = "CS";
    // Marked Content Operators
    PDFOperatorNames["BeginMarkedContentSequence"] = "BDC";
    PDFOperatorNames["BeginMarkedContent"] = "BMC";
    PDFOperatorNames["EndMarkedContent"] = "EMC";
    PDFOperatorNames["MarkedContentPointWithProps"] = "DP";
    PDFOperatorNames["MarkedContentPoint"] = "MP";
    PDFOperatorNames["DrawObject"] = "Do";
    // Graphics State Operators
    PDFOperatorNames["ConcatTransformationMatrix"] = "cm";
    PDFOperatorNames["PopGraphicsState"] = "Q";
    PDFOperatorNames["PushGraphicsState"] = "q";
    PDFOperatorNames["SetFlatness"] = "i";
    PDFOperatorNames["SetGraphicsStateParams"] = "gs";
    PDFOperatorNames["SetLineCapStyle"] = "J";
    PDFOperatorNames["SetLineDashPattern"] = "d";
    PDFOperatorNames["SetLineJoinStyle"] = "j";
    PDFOperatorNames["SetLineMiterLimit"] = "M";
    PDFOperatorNames["SetLineWidth"] = "w";
    PDFOperatorNames["SetTextMatrix"] = "Tm";
    PDFOperatorNames["SetRenderingIntent"] = "ri";
    // Graphics Operators
    PDFOperatorNames["AppendRectangle"] = "re";
    PDFOperatorNames["BeginInlineImage"] = "BI";
    PDFOperatorNames["BeginInlineImageData"] = "ID";
    PDFOperatorNames["EndInlineImage"] = "EI";
    PDFOperatorNames["ClipEvenOdd"] = "W*";
    PDFOperatorNames["ClipNonZero"] = "W";
    PDFOperatorNames["CloseAndStroke"] = "s";
    PDFOperatorNames["CloseFillEvenOddAndStroke"] = "b*";
    PDFOperatorNames["CloseFillNonZeroAndStroke"] = "b";
    PDFOperatorNames["ClosePath"] = "h";
    PDFOperatorNames["AppendBezierCurve"] = "c";
    PDFOperatorNames["CurveToReplicateFinalPoint"] = "y";
    PDFOperatorNames["CurveToReplicateInitialPoint"] = "v";
    PDFOperatorNames["EndPath"] = "n";
    PDFOperatorNames["FillEvenOddAndStroke"] = "B*";
    PDFOperatorNames["FillEvenOdd"] = "f*";
    PDFOperatorNames["FillNonZeroAndStroke"] = "B";
    PDFOperatorNames["FillNonZero"] = "f";
    PDFOperatorNames["LegacyFillNonZero"] = "F";
    PDFOperatorNames["LineTo"] = "l";
    PDFOperatorNames["MoveTo"] = "m";
    PDFOperatorNames["ShadingFill"] = "sh";
    PDFOperatorNames["StrokePath"] = "S";
    // Text Operators
    PDFOperatorNames["BeginText"] = "BT";
    PDFOperatorNames["EndText"] = "ET";
    PDFOperatorNames["MoveText"] = "Td";
    PDFOperatorNames["MoveTextSetLeading"] = "TD";
    PDFOperatorNames["NextLine"] = "T*";
    PDFOperatorNames["SetCharacterSpacing"] = "Tc";
    PDFOperatorNames["SetFontAndSize"] = "Tf";
    PDFOperatorNames["SetTextHorizontalScaling"] = "Tz";
    PDFOperatorNames["SetTextLineHeight"] = "TL";
    PDFOperatorNames["SetTextRenderingMode"] = "Tr";
    PDFOperatorNames["SetTextRise"] = "Ts";
    PDFOperatorNames["SetWordSpacing"] = "Tw";
    PDFOperatorNames["ShowText"] = "Tj";
    PDFOperatorNames["ShowTextAdjusted"] = "TJ";
    PDFOperatorNames["ShowTextLine"] = "'";
    PDFOperatorNames["ShowTextLineAndSpace"] = "\"";
    // Type3 Font Operators
    PDFOperatorNames["Type3D0"] = "d0";
    PDFOperatorNames["Type3D1"] = "d1";
    // Compatibility Section Operators
    PDFOperatorNames["BeginCompatibilitySection"] = "BX";
    PDFOperatorNames["EndCompatibilitySection"] = "EX";
})(PDFOperatorNames || (PDFOperatorNames = {}));
const __TURBOPACK__default__export__ = PDFOperatorNames;
 //# sourceMappingURL=PDFOperatorNames.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFFlateStream.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pako$40$1$2e$0$2e$11$2f$node_modules$2f$pako$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pako@1.0.11/node_modules/pako/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$Cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cache$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/Cache.js [app-client] (ecmascript) <export default as Cache>");
;
;
;
;
;
;
var PDFFlateStream = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFFlateStream, _super);
    function PDFFlateStream(dict, encode) {
        var _this = _super.call(this, dict) || this;
        _this.computeContents = function() {
            var unencodedContents = _this.getUnencodedContents();
            return _this.encode ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pako$40$1$2e$0$2e$11$2f$node_modules$2f$pako$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].deflate(unencodedContents) : unencodedContents;
        };
        _this.encode = encode;
        if (encode) dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Filter'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('FlateDecode'));
        _this.contentsCache = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$Cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cache$3e$__["Cache"].populatedBy(_this.computeContents);
        return _this;
    }
    PDFFlateStream.prototype.getContents = function() {
        return this.contentsCache.access();
    };
    PDFFlateStream.prototype.getContentsSize = function() {
        return this.contentsCache.access().length;
    };
    PDFFlateStream.prototype.getUnencodedContents = function() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MethodNotImplementedError"](this.constructor.name, 'getUnencodedContents');
    };
    return PDFFlateStream;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFFlateStream;
 //# sourceMappingURL=PDFFlateStream.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFContentStream.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFFlateStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFFlateStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/CharCodes.js [app-client] (ecmascript)");
;
;
;
var PDFContentStream = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFContentStream, _super);
    function PDFContentStream(dict, operators, encode) {
        if (encode === void 0) {
            encode = true;
        }
        var _this = _super.call(this, dict, encode) || this;
        _this.operators = operators;
        return _this;
    }
    PDFContentStream.prototype.push = function() {
        var _a;
        var operators = [];
        for(var _i = 0; _i < arguments.length; _i++){
            operators[_i] = arguments[_i];
        }
        (_a = this.operators).push.apply(_a, operators);
    };
    PDFContentStream.prototype.clone = function(context) {
        var operators = new Array(this.operators.length);
        for(var idx = 0, len = this.operators.length; idx < len; idx++){
            operators[idx] = this.operators[idx].clone(context);
        }
        var _a = this, dict = _a.dict, encode = _a.encode;
        return PDFContentStream.of(dict.clone(context), operators, encode);
    };
    PDFContentStream.prototype.getContentsString = function() {
        var value = '';
        for(var idx = 0, len = this.operators.length; idx < len; idx++){
            value += this.operators[idx] + "\n";
        }
        return value;
    };
    PDFContentStream.prototype.getUnencodedContents = function() {
        var buffer = new Uint8Array(this.getUnencodedContentsSize());
        var offset = 0;
        for(var idx = 0, len = this.operators.length; idx < len; idx++){
            offset += this.operators[idx].copyBytesInto(buffer, offset);
            buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline;
        }
        return buffer;
    };
    PDFContentStream.prototype.getUnencodedContentsSize = function() {
        var size = 0;
        for(var idx = 0, len = this.operators.length; idx < len; idx++){
            size += this.operators[idx].sizeInBytes() + 1;
        }
        return size;
    };
    PDFContentStream.of = function(dict, operators, encode) {
        if (encode === void 0) {
            encode = true;
        }
        return new PDFContentStream(dict, operators, encode);
    };
    return PDFContentStream;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFFlateStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFContentStream;
 //# sourceMappingURL=PDFContentStream.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/PDFContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pako$40$1$2e$0$2e$11$2f$node_modules$2f$pako$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pako@1.0.11/node_modules/pako/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$document$2f$PDFHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/document/PDFHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFBool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFBool.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFDict.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNull$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNull.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRawStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRawStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/operators/PDFOperator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/operators/PDFOperatorNames.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFContentStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFContentStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/arrays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$rng$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/rng.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var byAscendingObjectNumber = function(_a, _b) {
    var a = _a[0];
    var b = _b[0];
    return a.objectNumber - b.objectNumber;
};
var PDFContext = function() {
    function PDFContext() {
        this.largestObjectNumber = 0;
        this.header = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$document$2f$PDFHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forVersion(1, 7);
        this.trailerInfo = {};
        this.indirectObjects = new Map();
        this.rng = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$rng$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleRNG"].withSeed(1);
    }
    PDFContext.prototype.assign = function(ref, object) {
        this.indirectObjects.set(ref, object);
        if (ref.objectNumber > this.largestObjectNumber) {
            this.largestObjectNumber = ref.objectNumber;
        }
    };
    PDFContext.prototype.nextRef = function() {
        this.largestObjectNumber += 1;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(this.largestObjectNumber);
    };
    PDFContext.prototype.register = function(object) {
        var ref = this.nextRef();
        this.assign(ref, object);
        return ref;
    };
    PDFContext.prototype.delete = function(ref) {
        return this.indirectObjects.delete(ref);
    };
    PDFContext.prototype.lookupMaybe = function(ref) {
        var types = [];
        for(var _i = 1; _i < arguments.length; _i++){
            types[_i - 1] = arguments[_i];
        }
        // TODO: `preservePDFNull` is for backwards compatibility. Should be
        // removed in next breaking API change.
        var preservePDFNull = types.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNull$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
        var result = ref instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] ? this.indirectObjects.get(ref) : ref;
        if (!result || result === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNull$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && !preservePDFNull) return undefined;
        for(var idx = 0, len = types.length; idx < len; idx++){
            var type = types[idx];
            if (type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNull$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
                if (result === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNull$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return result;
            } else {
                if (result instanceof type) return result;
            }
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnexpectedObjectTypeError"](types, result);
    };
    PDFContext.prototype.lookup = function(ref) {
        var types = [];
        for(var _i = 1; _i < arguments.length; _i++){
            types[_i - 1] = arguments[_i];
        }
        var result = ref instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] ? this.indirectObjects.get(ref) : ref;
        if (types.length === 0) return result;
        for(var idx = 0, len = types.length; idx < len; idx++){
            var type = types[idx];
            if (type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNull$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
                if (result === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNull$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return result;
            } else {
                if (result instanceof type) return result;
            }
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnexpectedObjectTypeError"](types, result);
    };
    PDFContext.prototype.getObjectRef = function(pdfObject) {
        var entries = Array.from(this.indirectObjects.entries());
        for(var idx = 0, len = entries.length; idx < len; idx++){
            var _a = entries[idx], ref = _a[0], object = _a[1];
            if (object === pdfObject) {
                return ref;
            }
        }
        return undefined;
    };
    PDFContext.prototype.enumerateIndirectObjects = function() {
        return Array.from(this.indirectObjects.entries()).sort(byAscendingObjectNumber);
    };
    PDFContext.prototype.obj = function(literal) {
        if (literal instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
            return literal;
        } else if (literal === null || literal === undefined) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNull$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
        } else if (typeof literal === 'string') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(literal);
        } else if (typeof literal === 'number') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(literal);
        } else if (typeof literal === 'boolean') {
            return literal ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFBool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].True : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFBool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].False;
        } else if (Array.isArray(literal)) {
            var array = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].withContext(this);
            for(var idx = 0, len = literal.length; idx < len; idx++){
                array.push(this.obj(literal[idx]));
            }
            return array;
        } else {
            var dict = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].withContext(this);
            var keys = Object.keys(literal);
            for(var idx = 0, len = keys.length; idx < len; idx++){
                var key = keys[idx];
                var value = literal[key];
                if (value !== undefined) dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(key), this.obj(value));
            }
            return dict;
        }
    };
    PDFContext.prototype.stream = function(contents, dict) {
        if (dict === void 0) {
            dict = {};
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRawStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(this.obj(dict), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedArrayFor"])(contents));
    };
    PDFContext.prototype.flateStream = function(contents, dict) {
        if (dict === void 0) {
            dict = {};
        }
        return this.stream(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pako$40$1$2e$0$2e$11$2f$node_modules$2f$pako$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].deflate((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedArrayFor"])(contents)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, dict), {
            Filter: 'FlateDecode'
        }));
    };
    PDFContext.prototype.contentStream = function(operators, dict) {
        if (dict === void 0) {
            dict = {};
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFContentStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(this.obj(dict), operators);
    };
    PDFContext.prototype.formXObject = function(operators, dict) {
        if (dict === void 0) {
            dict = {};
        }
        return this.contentStream(operators, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({
            BBox: this.obj([
                0,
                0,
                0,
                0
            ]),
            Matrix: this.obj([
                1,
                0,
                0,
                1,
                0,
                0
            ])
        }, dict), {
            Type: 'XObject',
            Subtype: 'Form'
        }));
    };
    /*
     * Reference to PDFContentStream that contains a single PDFOperator: `q`.
     * Used by [[PDFPageLeaf]] instances to ensure that when content streams are
     * added to a modified PDF, they start in the default, unchanged graphics
     * state.
     */ PDFContext.prototype.getPushGraphicsStateContentStream = function() {
        if (this.pushGraphicsStateContentStreamRef) {
            return this.pushGraphicsStateContentStreamRef;
        }
        var dict = this.obj({});
        var op = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PushGraphicsState);
        var stream = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFContentStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(dict, [
            op
        ]);
        this.pushGraphicsStateContentStreamRef = this.register(stream);
        return this.pushGraphicsStateContentStreamRef;
    };
    /*
     * Reference to PDFContentStream that contains a single PDFOperator: `Q`.
     * Used by [[PDFPageLeaf]] instances to ensure that when content streams are
     * added to a modified PDF, they start in the default, unchanged graphics
     * state.
     */ PDFContext.prototype.getPopGraphicsStateContentStream = function() {
        if (this.popGraphicsStateContentStreamRef) {
            return this.popGraphicsStateContentStreamRef;
        }
        var dict = this.obj({});
        var op = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PopGraphicsState);
        var stream = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFContentStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(dict, [
            op
        ]);
        this.popGraphicsStateContentStreamRef = this.register(stream);
        return this.popGraphicsStateContentStreamRef;
    };
    PDFContext.prototype.addRandomSuffix = function(prefix, suffixLength) {
        if (suffixLength === void 0) {
            suffixLength = 4;
        }
        return prefix + "-" + Math.floor(this.rng.nextInt() * Math.pow(10, suffixLength));
    };
    PDFContext.create = function() {
        return new PDFContext();
    };
    return PDFContext;
}();
const __TURBOPACK__default__export__ = PDFContext;
 //# sourceMappingURL=PDFContext.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFPageLeaf.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFDict.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFStream.js [app-client] (ecmascript)");
;
;
;
;
;
;
var PDFPageLeaf = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFPageLeaf, _super);
    function PDFPageLeaf(map, context, autoNormalizeCTM) {
        if (autoNormalizeCTM === void 0) {
            autoNormalizeCTM = true;
        }
        var _this = _super.call(this, map, context) || this;
        _this.normalized = false;
        _this.autoNormalizeCTM = autoNormalizeCTM;
        return _this;
    }
    PDFPageLeaf.prototype.clone = function(context) {
        var clone = PDFPageLeaf.fromMapWithContext(new Map(), context || this.context, this.autoNormalizeCTM);
        var entries = this.entries();
        for(var idx = 0, len = entries.length; idx < len; idx++){
            var _a = entries[idx], key = _a[0], value = _a[1];
            clone.set(key, value);
        }
        return clone;
    };
    PDFPageLeaf.prototype.Parent = function() {
        return this.lookupMaybe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Parent, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    };
    PDFPageLeaf.prototype.Contents = function() {
        return this.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Contents'));
    };
    PDFPageLeaf.prototype.Annots = function() {
        return this.lookupMaybe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Annots, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    };
    PDFPageLeaf.prototype.BleedBox = function() {
        return this.lookupMaybe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].BleedBox, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    };
    PDFPageLeaf.prototype.TrimBox = function() {
        return this.lookupMaybe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].TrimBox, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    };
    PDFPageLeaf.prototype.ArtBox = function() {
        return this.lookupMaybe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ArtBox, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    };
    PDFPageLeaf.prototype.Resources = function() {
        var dictOrRef = this.getInheritableAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Resources);
        return this.context.lookupMaybe(dictOrRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    };
    PDFPageLeaf.prototype.MediaBox = function() {
        var arrayOrRef = this.getInheritableAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].MediaBox);
        return this.context.lookup(arrayOrRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    };
    PDFPageLeaf.prototype.CropBox = function() {
        var arrayOrRef = this.getInheritableAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CropBox);
        return this.context.lookupMaybe(arrayOrRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    };
    PDFPageLeaf.prototype.Rotate = function() {
        var numberOrRef = this.getInheritableAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Rotate);
        return this.context.lookupMaybe(numberOrRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    };
    PDFPageLeaf.prototype.getInheritableAttribute = function(name) {
        var attribute;
        this.ascend(function(node) {
            if (!attribute) attribute = node.get(name);
        });
        return attribute;
    };
    PDFPageLeaf.prototype.setParent = function(parentRef) {
        this.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Parent, parentRef);
    };
    PDFPageLeaf.prototype.addContentStream = function(contentStreamRef) {
        var Contents = this.normalizedEntries().Contents || this.context.obj([]);
        this.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Contents, Contents);
        Contents.push(contentStreamRef);
    };
    PDFPageLeaf.prototype.wrapContentStreams = function(startStream, endStream) {
        var Contents = this.Contents();
        if (Contents instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
            Contents.insert(0, startStream);
            Contents.push(endStream);
            return true;
        }
        return false;
    };
    PDFPageLeaf.prototype.addAnnot = function(annotRef) {
        var Annots = this.normalizedEntries().Annots;
        Annots.push(annotRef);
    };
    PDFPageLeaf.prototype.removeAnnot = function(annotRef) {
        var Annots = this.normalizedEntries().Annots;
        var index = Annots.indexOf(annotRef);
        if (index !== undefined) {
            Annots.remove(index);
        }
    };
    PDFPageLeaf.prototype.setFontDictionary = function(name, fontDictRef) {
        var Font = this.normalizedEntries().Font;
        Font.set(name, fontDictRef);
    };
    PDFPageLeaf.prototype.newFontDictionaryKey = function(tag) {
        var Font = this.normalizedEntries().Font;
        return Font.uniqueKey(tag);
    };
    PDFPageLeaf.prototype.newFontDictionary = function(tag, fontDictRef) {
        var key = this.newFontDictionaryKey(tag);
        this.setFontDictionary(key, fontDictRef);
        return key;
    };
    PDFPageLeaf.prototype.setXObject = function(name, xObjectRef) {
        var XObject = this.normalizedEntries().XObject;
        XObject.set(name, xObjectRef);
    };
    PDFPageLeaf.prototype.newXObjectKey = function(tag) {
        var XObject = this.normalizedEntries().XObject;
        return XObject.uniqueKey(tag);
    };
    PDFPageLeaf.prototype.newXObject = function(tag, xObjectRef) {
        var key = this.newXObjectKey(tag);
        this.setXObject(key, xObjectRef);
        return key;
    };
    PDFPageLeaf.prototype.setExtGState = function(name, extGStateRef) {
        var ExtGState = this.normalizedEntries().ExtGState;
        ExtGState.set(name, extGStateRef);
    };
    PDFPageLeaf.prototype.newExtGStateKey = function(tag) {
        var ExtGState = this.normalizedEntries().ExtGState;
        return ExtGState.uniqueKey(tag);
    };
    PDFPageLeaf.prototype.newExtGState = function(tag, extGStateRef) {
        var key = this.newExtGStateKey(tag);
        this.setExtGState(key, extGStateRef);
        return key;
    };
    PDFPageLeaf.prototype.ascend = function(visitor) {
        visitor(this);
        var Parent = this.Parent();
        if (Parent) Parent.ascend(visitor);
    };
    PDFPageLeaf.prototype.normalize = function() {
        if (this.normalized) return;
        var context = this.context;
        var contentsRef = this.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Contents);
        var contents = this.context.lookup(contentsRef);
        if (contents instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
            this.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Contents, context.obj([
                contentsRef
            ]));
        }
        if (this.autoNormalizeCTM) {
            this.wrapContentStreams(this.context.getPushGraphicsStateContentStream(), this.context.getPopGraphicsStateContentStream());
        }
        // TODO: Clone `Resources` if it is inherited
        var dictOrRef = this.getInheritableAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Resources);
        var Resources = context.lookupMaybe(dictOrRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) || context.obj({});
        this.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Resources, Resources);
        // TODO: Clone `Font` if it is inherited
        var Font = Resources.lookupMaybe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Font, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) || context.obj({});
        Resources.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Font, Font);
        // TODO: Clone `XObject` if it is inherited
        var XObject = Resources.lookupMaybe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].XObject, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) || context.obj({});
        Resources.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].XObject, XObject);
        // TODO: Clone `ExtGState` if it is inherited
        var ExtGState = Resources.lookupMaybe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ExtGState, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) || context.obj({});
        Resources.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ExtGState, ExtGState);
        var Annots = this.Annots() || context.obj([]);
        this.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Annots, Annots);
        this.normalized = true;
    };
    PDFPageLeaf.prototype.normalizedEntries = function() {
        this.normalize();
        var Annots = this.Annots();
        var Resources = this.Resources();
        var Contents = this.Contents();
        return {
            Annots: Annots,
            Resources: Resources,
            Contents: Contents,
            Font: Resources.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Font, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
            XObject: Resources.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].XObject, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
            ExtGState: Resources.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ExtGState, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
        };
    };
    PDFPageLeaf.InheritableEntries = [
        'Resources',
        'MediaBox',
        'CropBox',
        'Rotate'
    ];
    PDFPageLeaf.withContextAndParent = function(context, parent) {
        var dict = new Map();
        dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Type, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Page);
        dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Parent, parent);
        dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Resources, context.obj({}));
        dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].MediaBox, context.obj([
            0,
            0,
            612,
            792
        ]));
        return new PDFPageLeaf(dict, context, false);
    };
    PDFPageLeaf.fromMapWithContext = function(map, context, autoNormalizeCTM) {
        if (autoNormalizeCTM === void 0) {
            autoNormalizeCTM = true;
        }
        return new PDFPageLeaf(map, context, autoNormalizeCTM);
    };
    return PDFPageLeaf;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFPageLeaf;
 //# sourceMappingURL=PDFPageLeaf.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/PDFObjectCopier.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFDict.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFPageLeaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFPageLeaf.js [app-client] (ecmascript)");
;
;
;
;
;
;
/**
 * PDFObjectCopier copies PDFObjects from a src context to a dest context.
 * The primary use case for this is to copy pages between PDFs.
 *
 * _Copying_ an object with a PDFObjectCopier is different from _cloning_ an
 * object with its [[PDFObject.clone]] method:
 *
 * ```
 *   const src: PDFContext = ...
 *   const dest: PDFContext = ...
 *   const originalObject: PDFObject = ...
 *   const copiedObject = PDFObjectCopier.for(src, dest).copy(originalObject);
 *   const clonedObject = originalObject.clone();
 * ```
 *
 * Copying an object is equivalent to cloning it and then copying over any other
 * objects that it references. Note that only dictionaries, arrays, and streams
 * (or structures build from them) can contain indirect references to other
 * objects. Copying a PDFObject that is not a dictionary, array, or stream is
 * supported, but is equivalent to cloning it.
 */ var PDFObjectCopier = function() {
    function PDFObjectCopier(src, dest) {
        var _this = this;
        this.traversedObjects = new Map();
        // prettier-ignore
        this.copy = function(object) {
            return object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFPageLeaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] ? _this.copyPDFPage(object) : object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] ? _this.copyPDFDict(object) : object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] ? _this.copyPDFArray(object) : object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] ? _this.copyPDFStream(object) : object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] ? _this.copyPDFIndirectObject(object) : object.clone();
        };
        this.copyPDFPage = function(originalPage) {
            var clonedPage = originalPage.clone();
            // Move any entries that the originalPage is inheriting from its parent
            // tree nodes directly into originalPage so they are preserved during
            // the copy.
            var InheritableEntries = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFPageLeaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].InheritableEntries;
            for(var idx = 0, len = InheritableEntries.length; idx < len; idx++){
                var key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(InheritableEntries[idx]);
                var value = clonedPage.getInheritableAttribute(key);
                if (!clonedPage.get(key) && value) clonedPage.set(key, value);
            }
            // Remove the parent reference to prevent the whole donor document's page
            // tree from being copied when we only need a single page.
            clonedPage.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Parent'));
            return _this.copyPDFDict(clonedPage);
        };
        this.copyPDFDict = function(originalDict) {
            if (_this.traversedObjects.has(originalDict)) {
                return _this.traversedObjects.get(originalDict);
            }
            var clonedDict = originalDict.clone(_this.dest);
            _this.traversedObjects.set(originalDict, clonedDict);
            var entries = originalDict.entries();
            for(var idx = 0, len = entries.length; idx < len; idx++){
                var _a = entries[idx], key = _a[0], value = _a[1];
                clonedDict.set(key, _this.copy(value));
            }
            return clonedDict;
        };
        this.copyPDFArray = function(originalArray) {
            if (_this.traversedObjects.has(originalArray)) {
                return _this.traversedObjects.get(originalArray);
            }
            var clonedArray = originalArray.clone(_this.dest);
            _this.traversedObjects.set(originalArray, clonedArray);
            for(var idx = 0, len = originalArray.size(); idx < len; idx++){
                var value = originalArray.get(idx);
                clonedArray.set(idx, _this.copy(value));
            }
            return clonedArray;
        };
        this.copyPDFStream = function(originalStream) {
            if (_this.traversedObjects.has(originalStream)) {
                return _this.traversedObjects.get(originalStream);
            }
            var clonedStream = originalStream.clone(_this.dest);
            _this.traversedObjects.set(originalStream, clonedStream);
            var entries = originalStream.dict.entries();
            for(var idx = 0, len = entries.length; idx < len; idx++){
                var _a = entries[idx], key = _a[0], value = _a[1];
                clonedStream.dict.set(key, _this.copy(value));
            }
            return clonedStream;
        };
        this.copyPDFIndirectObject = function(ref) {
            var alreadyMapped = _this.traversedObjects.has(ref);
            if (!alreadyMapped) {
                var newRef = _this.dest.nextRef();
                _this.traversedObjects.set(ref, newRef);
                var dereferencedValue = _this.src.lookup(ref);
                if (dereferencedValue) {
                    var cloned = _this.copy(dereferencedValue);
                    _this.dest.assign(newRef, cloned);
                }
            }
            return _this.traversedObjects.get(ref);
        };
        this.src = src;
        this.dest = dest;
    }
    PDFObjectCopier.for = function(src, dest) {
        return new PDFObjectCopier(src, dest);
    };
    return PDFObjectCopier;
}();
const __TURBOPACK__default__export__ = PDFObjectCopier;
 //# sourceMappingURL=PDFObjectCopier.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/document/PDFCrossRefSection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/CharCodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/strings.js [app-client] (ecmascript)");
;
;
;
/**
 * Entries should be added using the [[addEntry]] and [[addDeletedEntry]]
 * methods **in order of ascending object number**.
 */ var PDFCrossRefSection = function() {
    function PDFCrossRefSection(firstEntry) {
        this.subsections = firstEntry ? [
            [
                firstEntry
            ]
        ] : [];
        this.chunkIdx = 0;
        this.chunkLength = firstEntry ? 1 : 0;
    }
    PDFCrossRefSection.prototype.addEntry = function(ref, offset) {
        this.append({
            ref: ref,
            offset: offset,
            deleted: false
        });
    };
    PDFCrossRefSection.prototype.addDeletedEntry = function(ref, nextFreeObjectNumber) {
        this.append({
            ref: ref,
            offset: nextFreeObjectNumber,
            deleted: true
        });
    };
    PDFCrossRefSection.prototype.toString = function() {
        var section = "xref\n";
        for(var rangeIdx = 0, rangeLen = this.subsections.length; rangeIdx < rangeLen; rangeIdx++){
            var range = this.subsections[rangeIdx];
            section += range[0].ref.objectNumber + " " + range.length + "\n";
            for(var entryIdx = 0, entryLen = range.length; entryIdx < entryLen; entryIdx++){
                var entry = range[entryIdx];
                section += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padStart"])(String(entry.offset), 10, '0');
                section += ' ';
                section += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padStart"])(String(entry.ref.generationNumber), 5, '0');
                section += ' ';
                section += entry.deleted ? 'f' : 'n';
                section += ' \n';
            }
        }
        return section;
    };
    PDFCrossRefSection.prototype.sizeInBytes = function() {
        var size = 5;
        for(var idx = 0, len = this.subsections.length; idx < len; idx++){
            var subsection = this.subsections[idx];
            var subsectionLength = subsection.length;
            var firstEntry = subsection[0];
            size += 2;
            size += String(firstEntry.ref.objectNumber).length;
            size += String(subsectionLength).length;
            size += 20 * subsectionLength;
        }
        return size;
    };
    PDFCrossRefSection.prototype.copyBytesInto = function(buffer, offset) {
        var initialOffset = offset;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].x;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].r;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].e;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].f;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline;
        offset += this.copySubsectionsIntoBuffer(this.subsections, buffer, offset);
        return offset - initialOffset;
    };
    PDFCrossRefSection.prototype.copySubsectionsIntoBuffer = function(subsections, buffer, offset) {
        var initialOffset = offset;
        var length = subsections.length;
        for(var idx = 0; idx < length; idx++){
            var subsection = this.subsections[idx];
            var firstObjectNumber = String(subsection[0].ref.objectNumber);
            offset += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyStringIntoBuffer"])(firstObjectNumber, buffer, offset);
            buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Space;
            var rangeLength = String(subsection.length);
            offset += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyStringIntoBuffer"])(rangeLength, buffer, offset);
            buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline;
            offset += this.copyEntriesIntoBuffer(subsection, buffer, offset);
        }
        return offset - initialOffset;
    };
    PDFCrossRefSection.prototype.copyEntriesIntoBuffer = function(entries, buffer, offset) {
        var length = entries.length;
        for(var idx = 0; idx < length; idx++){
            var entry = entries[idx];
            var entryOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padStart"])(String(entry.offset), 10, '0');
            offset += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyStringIntoBuffer"])(entryOffset, buffer, offset);
            buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Space;
            var entryGen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padStart"])(String(entry.ref.generationNumber), 5, '0');
            offset += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyStringIntoBuffer"])(entryGen, buffer, offset);
            buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Space;
            buffer[offset++] = entry.deleted ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].f : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].n;
            buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Space;
            buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline;
        }
        return 20 * length;
    };
    PDFCrossRefSection.prototype.append = function(currEntry) {
        if (this.chunkLength === 0) {
            this.subsections.push([
                currEntry
            ]);
            this.chunkIdx = 0;
            this.chunkLength = 1;
            return;
        }
        var chunk = this.subsections[this.chunkIdx];
        var prevEntry = chunk[this.chunkLength - 1];
        if (currEntry.ref.objectNumber - prevEntry.ref.objectNumber > 1) {
            this.subsections.push([
                currEntry
            ]);
            this.chunkIdx += 1;
            this.chunkLength = 1;
        } else {
            chunk.push(currEntry);
            this.chunkLength += 1;
        }
    };
    PDFCrossRefSection.create = function() {
        return new PDFCrossRefSection({
            ref: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(0, 65535),
            offset: 0,
            deleted: true
        });
    };
    PDFCrossRefSection.createEmpty = function() {
        return new PDFCrossRefSection();
    };
    return PDFCrossRefSection;
}();
const __TURBOPACK__default__export__ = PDFCrossRefSection;
 //# sourceMappingURL=PDFCrossRefSection.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/document/PDFTrailer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/CharCodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/strings.js [app-client] (ecmascript)");
;
;
var PDFTrailer = function() {
    function PDFTrailer(lastXRefOffset) {
        this.lastXRefOffset = String(lastXRefOffset);
    }
    PDFTrailer.prototype.toString = function() {
        return "startxref\n" + this.lastXRefOffset + "\n%%EOF";
    };
    PDFTrailer.prototype.sizeInBytes = function() {
        return 16 + this.lastXRefOffset.length;
    };
    PDFTrailer.prototype.copyBytesInto = function(buffer, offset) {
        var initialOffset = offset;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].s;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].t;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].r;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].t;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].x;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].r;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].e;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].f;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline;
        offset += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyStringIntoBuffer"])(this.lastXRefOffset, buffer, offset);
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Percent;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Percent;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].E;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].O;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F;
        return offset - initialOffset;
    };
    PDFTrailer.forLastCrossRefSectionOffset = function(offset) {
        return new PDFTrailer(offset);
    };
    return PDFTrailer;
}();
const __TURBOPACK__default__export__ = PDFTrailer;
 //# sourceMappingURL=PDFTrailer.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/document/PDFTrailerDict.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/CharCodes.js [app-client] (ecmascript)");
;
var PDFTrailerDict = function() {
    function PDFTrailerDict(dict) {
        this.dict = dict;
    }
    PDFTrailerDict.prototype.toString = function() {
        return "trailer\n" + this.dict.toString();
    };
    PDFTrailerDict.prototype.sizeInBytes = function() {
        return 8 + this.dict.sizeInBytes();
    };
    PDFTrailerDict.prototype.copyBytesInto = function(buffer, offset) {
        var initialOffset = offset;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].t;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].r;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].i;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].l;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].e;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].r;
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline;
        offset += this.dict.copyBytesInto(buffer, offset);
        return offset - initialOffset;
    };
    PDFTrailerDict.of = function(dict) {
        return new PDFTrailerDict(dict);
    };
    return PDFTrailerDict;
}();
const __TURBOPACK__default__export__ = PDFTrailerDict;
 //# sourceMappingURL=PDFTrailerDict.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFObjectStream.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFFlateStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFFlateStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/CharCodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/strings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/arrays.js [app-client] (ecmascript)");
;
;
;
;
;
;
var PDFObjectStream = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFObjectStream, _super);
    function PDFObjectStream(context, objects, encode) {
        if (encode === void 0) {
            encode = true;
        }
        var _this = _super.call(this, context.obj({}), encode) || this;
        _this.objects = objects;
        _this.offsets = _this.computeObjectOffsets();
        _this.offsetsString = _this.computeOffsetsString();
        _this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Type'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('ObjStm'));
        _this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('N'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(_this.objects.length));
        _this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('First'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(_this.offsetsString.length));
        return _this;
    }
    PDFObjectStream.prototype.getObjectsCount = function() {
        return this.objects.length;
    };
    PDFObjectStream.prototype.clone = function(context) {
        return PDFObjectStream.withContextAndObjects(context || this.dict.context, this.objects.slice(), this.encode);
    };
    PDFObjectStream.prototype.getContentsString = function() {
        var value = this.offsetsString;
        for(var idx = 0, len = this.objects.length; idx < len; idx++){
            var _a = this.objects[idx], object = _a[1];
            value += object + "\n";
        }
        return value;
    };
    PDFObjectStream.prototype.getUnencodedContents = function() {
        var buffer = new Uint8Array(this.getUnencodedContentsSize());
        var offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyStringIntoBuffer"])(this.offsetsString, buffer, 0);
        for(var idx = 0, len = this.objects.length; idx < len; idx++){
            var _a = this.objects[idx], object = _a[1];
            offset += object.copyBytesInto(buffer, offset);
            buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline;
        }
        return buffer;
    };
    PDFObjectStream.prototype.getUnencodedContentsSize = function() {
        return this.offsetsString.length + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"])(this.offsets)[1] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"])(this.objects)[1].sizeInBytes() + 1;
    };
    PDFObjectStream.prototype.computeOffsetsString = function() {
        var offsetsString = '';
        for(var idx = 0, len = this.offsets.length; idx < len; idx++){
            var _a = this.offsets[idx], objectNumber = _a[0], offset = _a[1];
            offsetsString += objectNumber + " " + offset + " ";
        }
        return offsetsString;
    };
    PDFObjectStream.prototype.computeObjectOffsets = function() {
        var offset = 0;
        var offsets = new Array(this.objects.length);
        for(var idx = 0, len = this.objects.length; idx < len; idx++){
            var _a = this.objects[idx], ref = _a[0], object = _a[1];
            offsets[idx] = [
                ref.objectNumber,
                offset
            ];
            offset += object.sizeInBytes() + 1; // '\n'
        }
        return offsets;
    };
    PDFObjectStream.withContextAndObjects = function(context, objects, encode) {
        if (encode === void 0) {
            encode = true;
        }
        return new PDFObjectStream(context, objects, encode);
    };
    return PDFObjectStream;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFFlateStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFObjectStream;
 //# sourceMappingURL=PDFObjectStream.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/writers/PDFWriter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$document$2f$PDFCrossRefSection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/document/PDFCrossRefSection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$document$2f$PDFHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/document/PDFHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$document$2f$PDFTrailer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/document/PDFTrailer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$document$2f$PDFTrailerDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/document/PDFTrailerDict.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFObjectStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFObjectStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/CharCodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/strings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/async.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var PDFWriter = function() {
    function PDFWriter(context, objectsPerTick) {
        var _this = this;
        this.parsedObjects = 0;
        this.shouldWaitForTick = function(n) {
            _this.parsedObjects += n;
            return _this.parsedObjects % _this.objectsPerTick === 0;
        };
        this.context = context;
        this.objectsPerTick = objectsPerTick;
    }
    PDFWriter.prototype.serializeToBuffer = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var _a, size, header, indirectObjects, xref, trailerDict, trailer, offset, buffer, idx, len, _b, ref, object, objectNumber, generationNumber, n;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_c) {
                switch(_c.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.computeBufferSize()
                        ];
                    case 1:
                        _a = _c.sent(), size = _a.size, header = _a.header, indirectObjects = _a.indirectObjects, xref = _a.xref, trailerDict = _a.trailerDict, trailer = _a.trailer;
                        offset = 0;
                        buffer = new Uint8Array(size);
                        offset += header.copyBytesInto(buffer, offset);
                        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline;
                        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline;
                        idx = 0, len = indirectObjects.length;
                        _c.label = 2;
                    case 2:
                        if (!(idx < len)) return [
                            3 /*break*/ ,
                            5
                        ];
                        _b = indirectObjects[idx], ref = _b[0], object = _b[1];
                        objectNumber = String(ref.objectNumber);
                        offset += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyStringIntoBuffer"])(objectNumber, buffer, offset);
                        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Space;
                        generationNumber = String(ref.generationNumber);
                        offset += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyStringIntoBuffer"])(generationNumber, buffer, offset);
                        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Space;
                        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].o;
                        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].b;
                        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].j;
                        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline;
                        offset += object.copyBytesInto(buffer, offset);
                        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline;
                        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].e;
                        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].n;
                        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].d;
                        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].o;
                        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].b;
                        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].j;
                        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline;
                        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline;
                        n = object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFObjectStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] ? object.getObjectsCount() : 1;
                        if (!this.shouldWaitForTick(n)) return [
                            3 /*break*/ ,
                            4
                        ];
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waitForTick"])()
                        ];
                    case 3:
                        _c.sent();
                        _c.label = 4;
                    case 4:
                        idx++;
                        return [
                            3 /*break*/ ,
                            2
                        ];
                    case 5:
                        if (xref) {
                            offset += xref.copyBytesInto(buffer, offset);
                            buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline;
                        }
                        if (trailerDict) {
                            offset += trailerDict.copyBytesInto(buffer, offset);
                            buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline;
                            buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline;
                        }
                        offset += trailer.copyBytesInto(buffer, offset);
                        return [
                            2 /*return*/ ,
                            buffer
                        ];
                }
            });
        });
    };
    PDFWriter.prototype.computeIndirectObjectSize = function(_a) {
        var ref = _a[0], object = _a[1];
        var refSize = ref.sizeInBytes() + 3; // 'R' -> 'obj\n'
        var objectSize = object.sizeInBytes() + 9; // '\nendobj\n\n'
        return refSize + objectSize;
    };
    PDFWriter.prototype.createTrailerDict = function() {
        return this.context.obj({
            Size: this.context.largestObjectNumber + 1,
            Root: this.context.trailerInfo.Root,
            Encrypt: this.context.trailerInfo.Encrypt,
            Info: this.context.trailerInfo.Info,
            ID: this.context.trailerInfo.ID
        });
    };
    PDFWriter.prototype.computeBufferSize = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var header, size, xref, indirectObjects, idx, len, indirectObject, ref, xrefOffset, trailerDict, trailer;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        header = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$document$2f$PDFHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forVersion(1, 7);
                        size = header.sizeInBytes() + 2;
                        xref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$document$2f$PDFCrossRefSection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create();
                        indirectObjects = this.context.enumerateIndirectObjects();
                        idx = 0, len = indirectObjects.length;
                        _a.label = 1;
                    case 1:
                        if (!(idx < len)) return [
                            3 /*break*/ ,
                            4
                        ];
                        indirectObject = indirectObjects[idx];
                        ref = indirectObject[0];
                        xref.addEntry(ref, size);
                        size += this.computeIndirectObjectSize(indirectObject);
                        if (!this.shouldWaitForTick(1)) return [
                            3 /*break*/ ,
                            3
                        ];
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waitForTick"])()
                        ];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        idx++;
                        return [
                            3 /*break*/ ,
                            1
                        ];
                    case 4:
                        xrefOffset = size;
                        size += xref.sizeInBytes() + 1; // '\n'
                        trailerDict = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$document$2f$PDFTrailerDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(this.createTrailerDict());
                        size += trailerDict.sizeInBytes() + 2; // '\n\n'
                        trailer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$document$2f$PDFTrailer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forLastCrossRefSectionOffset(xrefOffset);
                        size += trailer.sizeInBytes();
                        return [
                            2 /*return*/ ,
                            {
                                size: size,
                                header: header,
                                indirectObjects: indirectObjects,
                                xref: xref,
                                trailerDict: trailerDict,
                                trailer: trailer
                            }
                        ];
                }
            });
        });
    };
    PDFWriter.forContext = function(context, objectsPerTick) {
        return new PDFWriter(context, objectsPerTick);
    };
    return PDFWriter;
}();
const __TURBOPACK__default__export__ = PDFWriter;
 //# sourceMappingURL=PDFWriter.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFInvalidObject.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFObject.js [app-client] (ecmascript)");
;
;
var PDFInvalidObject = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFInvalidObject, _super);
    function PDFInvalidObject(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    PDFInvalidObject.prototype.clone = function() {
        return PDFInvalidObject.of(this.data.slice());
    };
    PDFInvalidObject.prototype.toString = function() {
        return "PDFInvalidObject(" + this.data.length + " bytes)";
    };
    PDFInvalidObject.prototype.sizeInBytes = function() {
        return this.data.length;
    };
    PDFInvalidObject.prototype.copyBytesInto = function(buffer, offset) {
        var length = this.data.length;
        for(var idx = 0; idx < length; idx++){
            buffer[offset++] = this.data[idx];
        }
        return length;
    };
    PDFInvalidObject.of = function(data) {
        return new PDFInvalidObject(data);
    };
    return PDFInvalidObject;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFInvalidObject;
 //# sourceMappingURL=PDFInvalidObject.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFCrossRefStream.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EntryType",
    ()=>EntryType,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFFlateStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFFlateStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/numbers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$Cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cache$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/Cache.js [app-client] (ecmascript) <export default as Cache>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/arrays.js [app-client] (ecmascript)");
;
;
;
;
;
var EntryType;
(function(EntryType) {
    EntryType[EntryType["Deleted"] = 0] = "Deleted";
    EntryType[EntryType["Uncompressed"] = 1] = "Uncompressed";
    EntryType[EntryType["Compressed"] = 2] = "Compressed";
})(EntryType || (EntryType = {}));
/**
 * Entries should be added using the [[addDeletedEntry]],
 * [[addUncompressedEntry]], and [[addCompressedEntry]] methods
 * **in order of ascending object number**.
 */ var PDFCrossRefStream = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFCrossRefStream, _super);
    function PDFCrossRefStream(dict, entries, encode) {
        if (encode === void 0) {
            encode = true;
        }
        var _this = _super.call(this, dict, encode) || this;
        // Returns an array of integer pairs for each subsection of the cross ref
        // section, where each integer pair represents:
        //   firstObjectNumber(OfSection), length(OfSection)
        _this.computeIndex = function() {
            var subsections = [];
            var subsectionLength = 0;
            for(var idx = 0, len = _this.entries.length; idx < len; idx++){
                var currEntry = _this.entries[idx];
                var prevEntry = _this.entries[idx - 1];
                if (idx === 0) {
                    subsections.push(currEntry.ref.objectNumber);
                } else if (currEntry.ref.objectNumber - prevEntry.ref.objectNumber > 1) {
                    subsections.push(subsectionLength);
                    subsections.push(currEntry.ref.objectNumber);
                    subsectionLength = 0;
                }
                subsectionLength += 1;
            }
            subsections.push(subsectionLength);
            return subsections;
        };
        _this.computeEntryTuples = function() {
            var entryTuples = new Array(_this.entries.length);
            for(var idx = 0, len = _this.entries.length; idx < len; idx++){
                var entry = _this.entries[idx];
                if (entry.type === EntryType.Deleted) {
                    var type = entry.type, nextFreeObjectNumber = entry.nextFreeObjectNumber, ref = entry.ref;
                    entryTuples[idx] = [
                        type,
                        nextFreeObjectNumber,
                        ref.generationNumber
                    ];
                }
                if (entry.type === EntryType.Uncompressed) {
                    var type = entry.type, offset = entry.offset, ref = entry.ref;
                    entryTuples[idx] = [
                        type,
                        offset,
                        ref.generationNumber
                    ];
                }
                if (entry.type === EntryType.Compressed) {
                    var type = entry.type, objectStreamRef = entry.objectStreamRef, index = entry.index;
                    entryTuples[idx] = [
                        type,
                        objectStreamRef.objectNumber,
                        index
                    ];
                }
            }
            return entryTuples;
        };
        _this.computeMaxEntryByteWidths = function() {
            var entryTuples = _this.entryTuplesCache.access();
            var widths = [
                0,
                0,
                0
            ];
            for(var idx = 0, len = entryTuples.length; idx < len; idx++){
                var _a = entryTuples[idx], first = _a[0], second = _a[1], third = _a[2];
                var firstSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizeInBytes"])(first);
                var secondSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizeInBytes"])(second);
                var thirdSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizeInBytes"])(third);
                if (firstSize > widths[0]) widths[0] = firstSize;
                if (secondSize > widths[1]) widths[1] = secondSize;
                if (thirdSize > widths[2]) widths[2] = thirdSize;
            }
            return widths;
        };
        _this.entries = entries || [];
        _this.entryTuplesCache = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$Cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cache$3e$__["Cache"].populatedBy(_this.computeEntryTuples);
        _this.maxByteWidthsCache = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$Cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cache$3e$__["Cache"].populatedBy(_this.computeMaxEntryByteWidths);
        _this.indexCache = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$Cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cache$3e$__["Cache"].populatedBy(_this.computeIndex);
        dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Type'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('XRef'));
        return _this;
    }
    PDFCrossRefStream.prototype.addDeletedEntry = function(ref, nextFreeObjectNumber) {
        var type = EntryType.Deleted;
        this.entries.push({
            type: type,
            ref: ref,
            nextFreeObjectNumber: nextFreeObjectNumber
        });
        this.entryTuplesCache.invalidate();
        this.maxByteWidthsCache.invalidate();
        this.indexCache.invalidate();
        this.contentsCache.invalidate();
    };
    PDFCrossRefStream.prototype.addUncompressedEntry = function(ref, offset) {
        var type = EntryType.Uncompressed;
        this.entries.push({
            type: type,
            ref: ref,
            offset: offset
        });
        this.entryTuplesCache.invalidate();
        this.maxByteWidthsCache.invalidate();
        this.indexCache.invalidate();
        this.contentsCache.invalidate();
    };
    PDFCrossRefStream.prototype.addCompressedEntry = function(ref, objectStreamRef, index) {
        var type = EntryType.Compressed;
        this.entries.push({
            type: type,
            ref: ref,
            objectStreamRef: objectStreamRef,
            index: index
        });
        this.entryTuplesCache.invalidate();
        this.maxByteWidthsCache.invalidate();
        this.indexCache.invalidate();
        this.contentsCache.invalidate();
    };
    PDFCrossRefStream.prototype.clone = function(context) {
        var _a = this, dict = _a.dict, entries = _a.entries, encode = _a.encode;
        return PDFCrossRefStream.of(dict.clone(context), entries.slice(), encode);
    };
    PDFCrossRefStream.prototype.getContentsString = function() {
        var entryTuples = this.entryTuplesCache.access();
        var byteWidths = this.maxByteWidthsCache.access();
        var value = '';
        for(var entryIdx = 0, entriesLen = entryTuples.length; entryIdx < entriesLen; entryIdx++){
            var _a = entryTuples[entryIdx], first = _a[0], second = _a[1], third = _a[2];
            var firstBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseArray"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesFor"])(first));
            var secondBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseArray"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesFor"])(second));
            var thirdBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseArray"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesFor"])(third));
            for(var idx = byteWidths[0] - 1; idx >= 0; idx--){
                value += (firstBytes[idx] || 0).toString(2);
            }
            for(var idx = byteWidths[1] - 1; idx >= 0; idx--){
                value += (secondBytes[idx] || 0).toString(2);
            }
            for(var idx = byteWidths[2] - 1; idx >= 0; idx--){
                value += (thirdBytes[idx] || 0).toString(2);
            }
        }
        return value;
    };
    PDFCrossRefStream.prototype.getUnencodedContents = function() {
        var entryTuples = this.entryTuplesCache.access();
        var byteWidths = this.maxByteWidthsCache.access();
        var buffer = new Uint8Array(this.getUnencodedContentsSize());
        var offset = 0;
        for(var entryIdx = 0, entriesLen = entryTuples.length; entryIdx < entriesLen; entryIdx++){
            var _a = entryTuples[entryIdx], first = _a[0], second = _a[1], third = _a[2];
            var firstBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseArray"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesFor"])(first));
            var secondBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseArray"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesFor"])(second));
            var thirdBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseArray"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesFor"])(third));
            for(var idx = byteWidths[0] - 1; idx >= 0; idx--){
                buffer[offset++] = firstBytes[idx] || 0;
            }
            for(var idx = byteWidths[1] - 1; idx >= 0; idx--){
                buffer[offset++] = secondBytes[idx] || 0;
            }
            for(var idx = byteWidths[2] - 1; idx >= 0; idx--){
                buffer[offset++] = thirdBytes[idx] || 0;
            }
        }
        return buffer;
    };
    PDFCrossRefStream.prototype.getUnencodedContentsSize = function() {
        var byteWidths = this.maxByteWidthsCache.access();
        var entryWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])(byteWidths);
        return entryWidth * this.entries.length;
    };
    PDFCrossRefStream.prototype.updateDict = function() {
        _super.prototype.updateDict.call(this);
        var byteWidths = this.maxByteWidthsCache.access();
        var index = this.indexCache.access();
        var context = this.dict.context;
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('W'), context.obj(byteWidths));
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Index'), context.obj(index));
    };
    PDFCrossRefStream.create = function(dict, encode) {
        if (encode === void 0) {
            encode = true;
        }
        var stream = new PDFCrossRefStream(dict, [], encode);
        stream.addDeletedEntry(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(0, 65535), 0);
        return stream;
    };
    PDFCrossRefStream.of = function(dict, entries, encode) {
        if (encode === void 0) {
            encode = true;
        }
        return new PDFCrossRefStream(dict, entries, encode);
    };
    return PDFCrossRefStream;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFFlateStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFCrossRefStream;
 //# sourceMappingURL=PDFCrossRefStream.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/writers/PDFStreamWriter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$document$2f$PDFHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/document/PDFHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$document$2f$PDFTrailer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/document/PDFTrailer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFInvalidObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFInvalidObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFCrossRefStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFCrossRefStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFObjectStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFObjectStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$writers$2f$PDFWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/writers/PDFWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/arrays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/async.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
var PDFStreamWriter = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFStreamWriter, _super);
    function PDFStreamWriter(context, objectsPerTick, encodeStreams, objectsPerStream) {
        var _this = _super.call(this, context, objectsPerTick) || this;
        _this.encodeStreams = encodeStreams;
        _this.objectsPerStream = objectsPerStream;
        return _this;
    }
    PDFStreamWriter.prototype.computeBufferSize = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var objectNumber, header, size, xrefStream, uncompressedObjects, compressedObjects, objectStreamRefs, indirectObjects, idx, len, indirectObject, ref, object, shouldNotCompress, chunk, objectStreamRef, idx, len, chunk, ref, objectStream, xrefStreamRef, xrefOffset, trailer;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        objectNumber = this.context.largestObjectNumber + 1;
                        header = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$document$2f$PDFHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forVersion(1, 7);
                        size = header.sizeInBytes() + 2;
                        xrefStream = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFCrossRefStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create(this.createTrailerDict(), this.encodeStreams);
                        uncompressedObjects = [];
                        compressedObjects = [];
                        objectStreamRefs = [];
                        indirectObjects = this.context.enumerateIndirectObjects();
                        idx = 0, len = indirectObjects.length;
                        _a.label = 1;
                    case 1:
                        if (!(idx < len)) return [
                            3 /*break*/ ,
                            6
                        ];
                        indirectObject = indirectObjects[idx];
                        ref = indirectObject[0], object = indirectObject[1];
                        shouldNotCompress = ref === this.context.trailerInfo.Encrypt || object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] || object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFInvalidObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] || ref.generationNumber !== 0;
                        if (!shouldNotCompress) return [
                            3 /*break*/ ,
                            4
                        ];
                        uncompressedObjects.push(indirectObject);
                        xrefStream.addUncompressedEntry(ref, size);
                        size += this.computeIndirectObjectSize(indirectObject);
                        if (!this.shouldWaitForTick(1)) return [
                            3 /*break*/ ,
                            3
                        ];
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waitForTick"])()
                        ];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        return [
                            3 /*break*/ ,
                            5
                        ];
                    case 4:
                        chunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"])(compressedObjects);
                        objectStreamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"])(objectStreamRefs);
                        if (!chunk || chunk.length % this.objectsPerStream === 0) {
                            chunk = [];
                            compressedObjects.push(chunk);
                            objectStreamRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(objectNumber++);
                            objectStreamRefs.push(objectStreamRef);
                        }
                        xrefStream.addCompressedEntry(ref, objectStreamRef, chunk.length);
                        chunk.push(indirectObject);
                        _a.label = 5;
                    case 5:
                        idx++;
                        return [
                            3 /*break*/ ,
                            1
                        ];
                    case 6:
                        idx = 0, len = compressedObjects.length;
                        _a.label = 7;
                    case 7:
                        if (!(idx < len)) return [
                            3 /*break*/ ,
                            10
                        ];
                        chunk = compressedObjects[idx];
                        ref = objectStreamRefs[idx];
                        objectStream = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFObjectStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].withContextAndObjects(this.context, chunk, this.encodeStreams);
                        xrefStream.addUncompressedEntry(ref, size);
                        size += this.computeIndirectObjectSize([
                            ref,
                            objectStream
                        ]);
                        uncompressedObjects.push([
                            ref,
                            objectStream
                        ]);
                        if (!this.shouldWaitForTick(chunk.length)) return [
                            3 /*break*/ ,
                            9
                        ];
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waitForTick"])()
                        ];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9:
                        idx++;
                        return [
                            3 /*break*/ ,
                            7
                        ];
                    case 10:
                        xrefStreamRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(objectNumber++);
                        xrefStream.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Size'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(objectNumber));
                        xrefStream.addUncompressedEntry(xrefStreamRef, size);
                        xrefOffset = size;
                        size += this.computeIndirectObjectSize([
                            xrefStreamRef,
                            xrefStream
                        ]);
                        uncompressedObjects.push([
                            xrefStreamRef,
                            xrefStream
                        ]);
                        trailer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$document$2f$PDFTrailer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forLastCrossRefSectionOffset(xrefOffset);
                        size += trailer.sizeInBytes();
                        return [
                            2 /*return*/ ,
                            {
                                size: size,
                                header: header,
                                indirectObjects: uncompressedObjects,
                                trailer: trailer
                            }
                        ];
                }
            });
        });
    };
    PDFStreamWriter.forContext = function(context, objectsPerTick, encodeStreams, objectsPerStream) {
        if (encodeStreams === void 0) {
            encodeStreams = true;
        }
        if (objectsPerStream === void 0) {
            objectsPerStream = 50;
        }
        return new PDFStreamWriter(context, objectsPerTick, encodeStreams, objectsPerStream);
    };
    return PDFStreamWriter;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$writers$2f$PDFWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFStreamWriter;
 //# sourceMappingURL=PDFStreamWriter.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFHexString.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/CharCodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/strings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$unicode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/unicode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$pdfDocEncoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/pdfDocEncoding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
;
;
;
;
;
var PDFHexString = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFHexString, _super);
    function PDFHexString(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        return _this;
    }
    PDFHexString.prototype.asBytes = function() {
        // Append a zero if the number of digits is odd. See PDF spec 7.3.4.3
        var hex = this.value + (this.value.length % 2 === 1 ? '0' : '');
        var hexLength = hex.length;
        var bytes = new Uint8Array(hex.length / 2);
        var hexOffset = 0;
        var bytesOffset = 0;
        // Interpret each pair of hex digits as a single byte
        while(hexOffset < hexLength){
            var byte = parseInt(hex.substring(hexOffset, hexOffset + 2), 16);
            bytes[bytesOffset] = byte;
            hexOffset += 2;
            bytesOffset += 1;
        }
        return bytes;
    };
    PDFHexString.prototype.decodeText = function() {
        var bytes = this.asBytes();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$unicode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasUtf16BOM"])(bytes)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$unicode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utf16Decode"])(bytes);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$pdfDocEncoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pdfDocEncodingDecode"])(bytes);
    };
    PDFHexString.prototype.decodeDate = function() {
        var text = this.decodeText();
        var date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDate"])(text);
        if (!date) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidPDFDateStringError"](text);
        return date;
    };
    PDFHexString.prototype.asString = function() {
        return this.value;
    };
    PDFHexString.prototype.clone = function() {
        return PDFHexString.of(this.value);
    };
    PDFHexString.prototype.toString = function() {
        return "<" + this.value + ">";
    };
    PDFHexString.prototype.sizeInBytes = function() {
        return this.value.length + 2;
    };
    PDFHexString.prototype.copyBytesInto = function(buffer, offset) {
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LessThan;
        offset += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyStringIntoBuffer"])(this.value, buffer, offset);
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].GreaterThan;
        return this.value.length + 2;
    };
    PDFHexString.of = function(value) {
        return new PDFHexString(value);
    };
    PDFHexString.fromText = function(value) {
        var encoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$unicode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utf16Encode"])(value);
        var hex = '';
        for(var idx = 0, len = encoded.length; idx < len; idx++){
            hex += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHexStringOfMinLength"])(encoded[idx], 4);
        }
        return new PDFHexString(hex);
    };
    return PDFHexString;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFHexString;
 //# sourceMappingURL=PDFHexString.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/StandardFontEmbedder.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$pdf$2d$lib$2b$standard$2d$fonts$40$1$2e$0$2e$0$2f$node_modules$2f40$pdf$2d$lib$2f$standard$2d$fonts$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@pdf-lib+standard-fonts@1.0.0/node_modules/@pdf-lib/standard-fonts/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$pdf$2d$lib$2b$standard$2d$fonts$40$1$2e$0$2e$0$2f$node_modules$2f40$pdf$2d$lib$2f$standard$2d$fonts$2f$es$2f$Encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@pdf-lib+standard-fonts@1.0.0/node_modules/@pdf-lib/standard-fonts/es/Encoding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$pdf$2d$lib$2b$standard$2d$fonts$40$1$2e$0$2e$0$2f$node_modules$2f40$pdf$2d$lib$2f$standard$2d$fonts$2f$es$2f$Font$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@pdf-lib+standard-fonts@1.0.0/node_modules/@pdf-lib/standard-fonts/es/Font.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFHexString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/strings.js [app-client] (ecmascript)");
;
;
;
/**
 * A note of thanks to the developers of https://github.com/foliojs/pdfkit, as
 * this class borrows from:
 *   https://github.com/foliojs/pdfkit/blob/f91bdd61c164a72ea06be1a43dc0a412afc3925f/lib/font/afm.coffee
 */ var StandardFontEmbedder = function() {
    function StandardFontEmbedder(fontName, customName) {
        // prettier-ignore
        this.encoding = fontName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$pdf$2d$lib$2b$standard$2d$fonts$40$1$2e$0$2e$0$2f$node_modules$2f40$pdf$2d$lib$2f$standard$2d$fonts$2f$es$2f$Font$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontNames"].ZapfDingbats ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$pdf$2d$lib$2b$standard$2d$fonts$40$1$2e$0$2e$0$2f$node_modules$2f40$pdf$2d$lib$2f$standard$2d$fonts$2f$es$2f$Encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Encodings"].ZapfDingbats : fontName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$pdf$2d$lib$2b$standard$2d$fonts$40$1$2e$0$2e$0$2f$node_modules$2f40$pdf$2d$lib$2f$standard$2d$fonts$2f$es$2f$Font$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontNames"].Symbol ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$pdf$2d$lib$2b$standard$2d$fonts$40$1$2e$0$2e$0$2f$node_modules$2f40$pdf$2d$lib$2f$standard$2d$fonts$2f$es$2f$Encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Encodings"].Symbol : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$pdf$2d$lib$2b$standard$2d$fonts$40$1$2e$0$2e$0$2f$node_modules$2f40$pdf$2d$lib$2f$standard$2d$fonts$2f$es$2f$Encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Encodings"].WinAnsi;
        this.font = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$pdf$2d$lib$2b$standard$2d$fonts$40$1$2e$0$2e$0$2f$node_modules$2f40$pdf$2d$lib$2f$standard$2d$fonts$2f$es$2f$Font$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Font"].load(fontName);
        this.fontName = this.font.FontName;
        this.customName = customName;
    }
    /**
     * Encode the JavaScript string into this font. (JavaScript encodes strings in
     * Unicode, but standard fonts use either WinAnsi, ZapfDingbats, or Symbol
     * encodings)
     */ StandardFontEmbedder.prototype.encodeText = function(text) {
        var glyphs = this.encodeTextAsGlyphs(text);
        var hexCodes = new Array(glyphs.length);
        for(var idx = 0, len = glyphs.length; idx < len; idx++){
            hexCodes[idx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHexString"])(glyphs[idx].code);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(hexCodes.join(''));
    };
    StandardFontEmbedder.prototype.widthOfTextAtSize = function(text, size) {
        var glyphs = this.encodeTextAsGlyphs(text);
        var totalWidth = 0;
        for(var idx = 0, len = glyphs.length; idx < len; idx++){
            var left = glyphs[idx].name;
            var right = (glyphs[idx + 1] || {}).name;
            var kernAmount = this.font.getXAxisKerningForPair(left, right) || 0;
            totalWidth += this.widthOfGlyph(left) + kernAmount;
        }
        var scale = size / 1000;
        return totalWidth * scale;
    };
    StandardFontEmbedder.prototype.heightOfFontAtSize = function(size, options) {
        if (options === void 0) {
            options = {};
        }
        var _a = options.descender, descender = _a === void 0 ? true : _a;
        var _b = this.font, Ascender = _b.Ascender, Descender = _b.Descender, FontBBox = _b.FontBBox;
        var yTop = Ascender || FontBBox[3];
        var yBottom = Descender || FontBBox[1];
        var height = yTop - yBottom;
        if (!descender) height += Descender || 0;
        return height / 1000 * size;
    };
    StandardFontEmbedder.prototype.sizeOfFontAtHeight = function(height) {
        var _a = this.font, Ascender = _a.Ascender, Descender = _a.Descender, FontBBox = _a.FontBBox;
        var yTop = Ascender || FontBBox[3];
        var yBottom = Descender || FontBBox[1];
        return 1000 * height / (yTop - yBottom);
    };
    StandardFontEmbedder.prototype.embedIntoContext = function(context, ref) {
        var fontDict = context.obj({
            Type: 'Font',
            Subtype: 'Type1',
            BaseFont: this.customName || this.fontName,
            Encoding: this.encoding === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$pdf$2d$lib$2b$standard$2d$fonts$40$1$2e$0$2e$0$2f$node_modules$2f40$pdf$2d$lib$2f$standard$2d$fonts$2f$es$2f$Encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Encodings"].WinAnsi ? 'WinAnsiEncoding' : undefined
        });
        if (ref) {
            context.assign(ref, fontDict);
            return ref;
        } else {
            return context.register(fontDict);
        }
    };
    StandardFontEmbedder.prototype.widthOfGlyph = function(glyphName) {
        // Default to 250 if font doesn't specify a width
        return this.font.getWidthOfGlyph(glyphName) || 250;
    };
    StandardFontEmbedder.prototype.encodeTextAsGlyphs = function(text) {
        var codePoints = Array.from(text);
        var glyphs = new Array(codePoints.length);
        for(var idx = 0, len = codePoints.length; idx < len; idx++){
            var codePoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCodePoint"])(codePoints[idx]);
            glyphs[idx] = this.encoding.encodeUnicodeCodePoint(codePoint);
        }
        return glyphs;
    };
    StandardFontEmbedder.for = function(fontName, customName) {
        return new StandardFontEmbedder(fontName, customName);
    };
    return StandardFontEmbedder;
}();
const __TURBOPACK__default__export__ = StandardFontEmbedder;
 //# sourceMappingURL=StandardFontEmbedder.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/CMap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCmap",
    ()=>createCmap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/strings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$unicode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/unicode.js [app-client] (ecmascript)");
;
;
var createCmap = function(glyphs, glyphId) {
    var bfChars = new Array(glyphs.length);
    for(var idx = 0, len = glyphs.length; idx < len; idx++){
        var glyph = glyphs[idx];
        var id = cmapHexFormat(cmapHexString(glyphId(glyph)));
        var unicode = cmapHexFormat.apply(void 0, glyph.codePoints.map(cmapCodePointFormat));
        bfChars[idx] = [
            id,
            unicode
        ];
    }
    return fillCmapTemplate(bfChars);
};
/* =============================== Templates ================================ */ var fillCmapTemplate = function(bfChars) {
    return "/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange\n" + bfChars.length + " beginbfchar\n" + bfChars.map(function(_a) {
        var glyphId = _a[0], codePoint = _a[1];
        return glyphId + " " + codePoint;
    }).join('\n') + "\nendbfchar\nendcmap\nCMapName currentdict /CMap defineresource pop\nend\nend";
};
/* =============================== Utilities ================================ */ var cmapHexFormat = function() {
    var values = [];
    for(var _i = 0; _i < arguments.length; _i++){
        values[_i] = arguments[_i];
    }
    return "<" + values.join('') + ">";
};
var cmapHexString = function(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHexStringOfMinLength"])(value, 4);
};
var cmapCodePointFormat = function(codePoint) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$unicode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWithinBMP"])(codePoint)) return cmapHexString(codePoint);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$unicode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasSurrogates"])(codePoint)) {
        var hs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$unicode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["highSurrogate"])(codePoint);
        var ls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$unicode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lowSurrogate"])(codePoint);
        return "" + cmapHexString(hs) + cmapHexString(ls);
    }
    var hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHexString"])(codePoint);
    var msg = "0x" + hex + " is not a valid UTF-8 or UTF-16 codepoint.";
    throw new Error(msg);
}; //# sourceMappingURL=CMap.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/FontFlags.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// prettier-ignore
__turbopack_context__.s([
    "deriveFontFlags",
    ()=>deriveFontFlags
]);
var makeFontFlags = function(options) {
    var flags = 0;
    var flipBit = function(bit) {
        flags |= 1 << bit - 1;
    };
    if (options.fixedPitch) flipBit(1);
    if (options.serif) flipBit(2);
    if (options.symbolic) flipBit(3);
    if (options.script) flipBit(4);
    if (options.nonsymbolic) flipBit(6);
    if (options.italic) flipBit(7);
    if (options.allCap) flipBit(17);
    if (options.smallCap) flipBit(18);
    if (options.forceBold) flipBit(19);
    return flags;
};
var deriveFontFlags = function(font) {
    var familyClass = font['OS/2'] ? font['OS/2'].sFamilyClass : 0;
    var flags = makeFontFlags({
        fixedPitch: font.post.isFixedPitch,
        serif: 1 <= familyClass && familyClass <= 7,
        symbolic: true,
        script: familyClass === 10,
        italic: font.head.macStyle.italic
    });
    return flags;
}; //# sourceMappingURL=FontFlags.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFString.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/CharCodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/strings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$unicode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/unicode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$pdfDocEncoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/pdfDocEncoding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
;
;
;
;
;
var PDFString = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFString, _super);
    function PDFString(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        return _this;
    }
    PDFString.prototype.asBytes = function() {
        var bytes = [];
        var octal = '';
        var escaped = false;
        var pushByte = function(byte) {
            if (byte !== undefined) bytes.push(byte);
            escaped = false;
        };
        for(var idx = 0, len = this.value.length; idx < len; idx++){
            var char = this.value[idx];
            var byte = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])(char);
            var nextChar = this.value[idx + 1];
            if (!escaped) {
                if (byte === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].BackSlash) escaped = true;
                else pushByte(byte);
            } else {
                if (byte === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline) pushByte();
                else if (byte === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CarriageReturn) pushByte();
                else if (byte === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].n) pushByte(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline);
                else if (byte === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].r) pushByte(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CarriageReturn);
                else if (byte === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].t) pushByte(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Tab);
                else if (byte === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].b) pushByte(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Backspace);
                else if (byte === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].f) pushByte(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].FormFeed);
                else if (byte === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LeftParen) pushByte(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LeftParen);
                else if (byte === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].RightParen) pushByte(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].RightParen);
                else if (byte === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Backspace) pushByte(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].BackSlash);
                else if (byte >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Zero && byte <= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Seven) {
                    octal += char;
                    if (octal.length === 3 || !(nextChar >= '0' && nextChar <= '7')) {
                        pushByte(parseInt(octal, 8));
                        octal = '';
                    }
                } else {
                    pushByte(byte);
                }
            }
        }
        return new Uint8Array(bytes);
    };
    PDFString.prototype.decodeText = function() {
        var bytes = this.asBytes();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$unicode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasUtf16BOM"])(bytes)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$unicode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utf16Decode"])(bytes);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$pdfDocEncoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pdfDocEncodingDecode"])(bytes);
    };
    PDFString.prototype.decodeDate = function() {
        var text = this.decodeText();
        var date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDate"])(text);
        if (!date) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidPDFDateStringError"](text);
        return date;
    };
    PDFString.prototype.asString = function() {
        return this.value;
    };
    PDFString.prototype.clone = function() {
        return PDFString.of(this.value);
    };
    PDFString.prototype.toString = function() {
        return "(" + this.value + ")";
    };
    PDFString.prototype.sizeInBytes = function() {
        return this.value.length + 2;
    };
    PDFString.prototype.copyBytesInto = function(buffer, offset) {
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LeftParen;
        offset += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyStringIntoBuffer"])(this.value, buffer, offset);
        buffer[offset++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].RightParen;
        return this.value.length + 2;
    };
    // The PDF spec allows newlines and parens to appear directly within a literal
    // string. These character _may_ be escaped. But they do not _have_ to be. So
    // for simplicity, we will not bother escaping them.
    PDFString.of = function(value) {
        return new PDFString(value);
    };
    PDFString.fromDate = function(date) {
        var year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padStart"])(String(date.getUTCFullYear()), 4, '0');
        var month = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padStart"])(String(date.getUTCMonth() + 1), 2, '0');
        var day = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padStart"])(String(date.getUTCDate()), 2, '0');
        var hours = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padStart"])(String(date.getUTCHours()), 2, '0');
        var mins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padStart"])(String(date.getUTCMinutes()), 2, '0');
        var secs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padStart"])(String(date.getUTCSeconds()), 2, '0');
        return new PDFString("D:" + year + month + day + hours + mins + secs + "Z");
    };
    return PDFString;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFString;
 //# sourceMappingURL=PDFString.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/CustomFontEmbedder.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$CMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/CMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$FontFlags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/FontFlags.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFHexString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/arrays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$Cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cache$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/Cache.js [app-client] (ecmascript) <export default as Cache>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/strings.js [app-client] (ecmascript)");
;
;
;
;
;
;
/**
 * A note of thanks to the developers of https://github.com/foliojs/pdfkit, as
 * this class borrows from:
 *   https://github.com/devongovett/pdfkit/blob/e71edab0dd4657b5a767804ba86c94c58d01fbca/lib/image/jpeg.coffee
 */ var CustomFontEmbedder = function() {
    function CustomFontEmbedder(font, fontData, customName, fontFeatures) {
        var _this = this;
        this.allGlyphsInFontSortedById = function() {
            var glyphs = new Array(_this.font.characterSet.length);
            for(var idx = 0, len = glyphs.length; idx < len; idx++){
                var codePoint = _this.font.characterSet[idx];
                glyphs[idx] = _this.font.glyphForCodePoint(codePoint);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortedUniq"])(glyphs.sort(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["byAscendingId"]), function(g) {
                return g.id;
            });
        };
        this.font = font;
        this.scale = 1000 / this.font.unitsPerEm;
        this.fontData = fontData;
        this.fontName = this.font.postscriptName || 'Font';
        this.customName = customName;
        this.fontFeatures = fontFeatures;
        this.baseFontName = '';
        this.glyphCache = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$Cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cache$3e$__["Cache"].populatedBy(this.allGlyphsInFontSortedById);
    }
    CustomFontEmbedder.for = function(fontkit, fontData, customName, fontFeatures) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var font;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            fontkit.create(fontData)
                        ];
                    case 1:
                        font = _a.sent();
                        return [
                            2 /*return*/ ,
                            new CustomFontEmbedder(font, fontData, customName, fontFeatures)
                        ];
                }
            });
        });
    };
    /**
     * Encode the JavaScript string into this font. (JavaScript encodes strings in
     * Unicode, but embedded fonts use their own custom encodings)
     */ CustomFontEmbedder.prototype.encodeText = function(text) {
        var glyphs = this.font.layout(text, this.fontFeatures).glyphs;
        var hexCodes = new Array(glyphs.length);
        for(var idx = 0, len = glyphs.length; idx < len; idx++){
            hexCodes[idx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHexStringOfMinLength"])(glyphs[idx].id, 4);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(hexCodes.join(''));
    };
    // The advanceWidth takes into account kerning automatically, so we don't
    // have to do that manually like we do for the standard fonts.
    CustomFontEmbedder.prototype.widthOfTextAtSize = function(text, size) {
        var glyphs = this.font.layout(text, this.fontFeatures).glyphs;
        var totalWidth = 0;
        for(var idx = 0, len = glyphs.length; idx < len; idx++){
            totalWidth += glyphs[idx].advanceWidth * this.scale;
        }
        var scale = size / 1000;
        return totalWidth * scale;
    };
    CustomFontEmbedder.prototype.heightOfFontAtSize = function(size, options) {
        if (options === void 0) {
            options = {};
        }
        var _a = options.descender, descender = _a === void 0 ? true : _a;
        var _b = this.font, ascent = _b.ascent, descent = _b.descent, bbox = _b.bbox;
        var yTop = (ascent || bbox.maxY) * this.scale;
        var yBottom = (descent || bbox.minY) * this.scale;
        var height = yTop - yBottom;
        if (!descender) height -= Math.abs(descent) || 0;
        return height / 1000 * size;
    };
    CustomFontEmbedder.prototype.sizeOfFontAtHeight = function(height) {
        var _a = this.font, ascent = _a.ascent, descent = _a.descent, bbox = _a.bbox;
        var yTop = (ascent || bbox.maxY) * this.scale;
        var yBottom = (descent || bbox.minY) * this.scale;
        return 1000 * height / (yTop - yBottom);
    };
    CustomFontEmbedder.prototype.embedIntoContext = function(context, ref) {
        this.baseFontName = this.customName || context.addRandomSuffix(this.fontName);
        return this.embedFontDict(context, ref);
    };
    CustomFontEmbedder.prototype.embedFontDict = function(context, ref) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var cidFontDictRef, unicodeCMapRef, fontDict;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.embedCIDFontDict(context)
                        ];
                    case 1:
                        cidFontDictRef = _a.sent();
                        unicodeCMapRef = this.embedUnicodeCmap(context);
                        fontDict = context.obj({
                            Type: 'Font',
                            Subtype: 'Type0',
                            BaseFont: this.baseFontName,
                            Encoding: 'Identity-H',
                            DescendantFonts: [
                                cidFontDictRef
                            ],
                            ToUnicode: unicodeCMapRef
                        });
                        if (ref) {
                            context.assign(ref, fontDict);
                            return [
                                2 /*return*/ ,
                                ref
                            ];
                        } else {
                            return [
                                2 /*return*/ ,
                                context.register(fontDict)
                            ];
                        }
                        //TURBOPACK unreachable
                        ;
                }
            });
        });
    };
    CustomFontEmbedder.prototype.isCFF = function() {
        return this.font.cff;
    };
    CustomFontEmbedder.prototype.embedCIDFontDict = function(context) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var fontDescriptorRef, cidFontDict;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.embedFontDescriptor(context)
                        ];
                    case 1:
                        fontDescriptorRef = _a.sent();
                        cidFontDict = context.obj({
                            Type: 'Font',
                            Subtype: this.isCFF() ? 'CIDFontType0' : 'CIDFontType2',
                            CIDToGIDMap: 'Identity',
                            BaseFont: this.baseFontName,
                            CIDSystemInfo: {
                                Registry: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Adobe'),
                                Ordering: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Identity'),
                                Supplement: 0
                            },
                            FontDescriptor: fontDescriptorRef,
                            W: this.computeWidths()
                        });
                        return [
                            2 /*return*/ ,
                            context.register(cidFontDict)
                        ];
                }
            });
        });
    };
    CustomFontEmbedder.prototype.embedFontDescriptor = function(context) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var fontStreamRef, scale, _a, italicAngle, ascent, descent, capHeight, xHeight, _b, minX, minY, maxX, maxY, fontDescriptor;
            var _c;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_d) {
                switch(_d.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.embedFontStream(context)
                        ];
                    case 1:
                        fontStreamRef = _d.sent();
                        scale = this.scale;
                        _a = this.font, italicAngle = _a.italicAngle, ascent = _a.ascent, descent = _a.descent, capHeight = _a.capHeight, xHeight = _a.xHeight;
                        _b = this.font.bbox, minX = _b.minX, minY = _b.minY, maxX = _b.maxX, maxY = _b.maxY;
                        fontDescriptor = context.obj((_c = {
                            Type: 'FontDescriptor',
                            FontName: this.baseFontName,
                            Flags: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$FontFlags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deriveFontFlags"])(this.font),
                            FontBBox: [
                                minX * scale,
                                minY * scale,
                                maxX * scale,
                                maxY * scale
                            ],
                            ItalicAngle: italicAngle,
                            Ascent: ascent * scale,
                            Descent: descent * scale,
                            CapHeight: (capHeight || ascent) * scale,
                            XHeight: (xHeight || 0) * scale,
                            // Not sure how to compute/find this, nor is anybody else really:
                            // https://stackoverflow.com/questions/35485179/stemv-value-of-the-truetype-font
                            StemV: 0
                        }, _c[this.isCFF() ? 'FontFile3' : 'FontFile2'] = fontStreamRef, _c));
                        return [
                            2 /*return*/ ,
                            context.register(fontDescriptor)
                        ];
                }
            });
        });
    };
    CustomFontEmbedder.prototype.serializeFont = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                return [
                    2 /*return*/ ,
                    this.fontData
                ];
            });
        });
    };
    CustomFontEmbedder.prototype.embedFontStream = function(context) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var fontStream, _a, _b;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_c) {
                switch(_c.label){
                    case 0:
                        _b = (_a = context).flateStream;
                        return [
                            4 /*yield*/ ,
                            this.serializeFont()
                        ];
                    case 1:
                        fontStream = _b.apply(_a, [
                            _c.sent(),
                            {
                                Subtype: this.isCFF() ? 'CIDFontType0C' : undefined
                            }
                        ]);
                        return [
                            2 /*return*/ ,
                            context.register(fontStream)
                        ];
                }
            });
        });
    };
    CustomFontEmbedder.prototype.embedUnicodeCmap = function(context) {
        var cmap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$CMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCmap"])(this.glyphCache.access(), this.glyphId.bind(this));
        var cmapStream = context.flateStream(cmap);
        return context.register(cmapStream);
    };
    CustomFontEmbedder.prototype.glyphId = function(glyph) {
        return glyph ? glyph.id : -1;
    };
    CustomFontEmbedder.prototype.computeWidths = function() {
        var glyphs = this.glyphCache.access();
        var widths = [];
        var currSection = [];
        for(var idx = 0, len = glyphs.length; idx < len; idx++){
            var currGlyph = glyphs[idx];
            var prevGlyph = glyphs[idx - 1];
            var currGlyphId = this.glyphId(currGlyph);
            var prevGlyphId = this.glyphId(prevGlyph);
            if (idx === 0) {
                widths.push(currGlyphId);
            } else if (currGlyphId - prevGlyphId !== 1) {
                widths.push(currSection);
                widths.push(currGlyphId);
                currSection = [];
            }
            currSection.push(currGlyph.advanceWidth * this.scale);
        }
        widths.push(currSection);
        return widths;
    };
    return CustomFontEmbedder;
}();
const __TURBOPACK__default__export__ = CustomFontEmbedder;
 //# sourceMappingURL=CustomFontEmbedder.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/CustomFontSubsetEmbedder.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$CustomFontEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/CustomFontEmbedder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFHexString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$Cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cache$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/Cache.js [app-client] (ecmascript) <export default as Cache>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/arrays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/strings.js [app-client] (ecmascript)");
;
;
;
;
/**
 * A note of thanks to the developers of https://github.com/foliojs/pdfkit, as
 * this class borrows from:
 *   https://github.com/devongovett/pdfkit/blob/e71edab0dd4657b5a767804ba86c94c58d01fbca/lib/image/jpeg.coffee
 */ var CustomFontSubsetEmbedder = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(CustomFontSubsetEmbedder, _super);
    function CustomFontSubsetEmbedder(font, fontData, customFontName, fontFeatures) {
        var _this = _super.call(this, font, fontData, customFontName, fontFeatures) || this;
        _this.subset = _this.font.createSubset();
        _this.glyphs = [];
        _this.glyphCache = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$Cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cache$3e$__["Cache"].populatedBy(function() {
            return _this.glyphs;
        });
        _this.glyphIdMap = new Map();
        return _this;
    }
    CustomFontSubsetEmbedder.for = function(fontkit, fontData, customFontName, fontFeatures) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var font;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            fontkit.create(fontData)
                        ];
                    case 1:
                        font = _a.sent();
                        return [
                            2 /*return*/ ,
                            new CustomFontSubsetEmbedder(font, fontData, customFontName, fontFeatures)
                        ];
                }
            });
        });
    };
    CustomFontSubsetEmbedder.prototype.encodeText = function(text) {
        var glyphs = this.font.layout(text, this.fontFeatures).glyphs;
        var hexCodes = new Array(glyphs.length);
        for(var idx = 0, len = glyphs.length; idx < len; idx++){
            var glyph = glyphs[idx];
            var subsetGlyphId = this.subset.includeGlyph(glyph);
            this.glyphs[subsetGlyphId - 1] = glyph;
            this.glyphIdMap.set(glyph.id, subsetGlyphId);
            hexCodes[idx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHexStringOfMinLength"])(subsetGlyphId, 4);
        }
        this.glyphCache.invalidate();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(hexCodes.join(''));
    };
    CustomFontSubsetEmbedder.prototype.isCFF = function() {
        return this.subset.cff;
    };
    CustomFontSubsetEmbedder.prototype.glyphId = function(glyph) {
        return glyph ? this.glyphIdMap.get(glyph.id) : -1;
    };
    CustomFontSubsetEmbedder.prototype.serializeFont = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
            var parts = [];
            _this.subset.encodeStream().on('data', function(bytes) {
                return parts.push(bytes);
            }).on('end', function() {
                return resolve((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeUint8Arrays"])(parts));
            }).on('error', function(err) {
                return reject(err);
            });
        });
    };
    return CustomFontSubsetEmbedder;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$CustomFontEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = CustomFontSubsetEmbedder;
 //# sourceMappingURL=CustomFontSubsetEmbedder.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/FileEmbedder.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AFRelationship",
    ()=>AFRelationship,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFHexString.js [app-client] (ecmascript)");
;
;
;
var AFRelationship;
(function(AFRelationship) {
    AFRelationship["Source"] = "Source";
    AFRelationship["Data"] = "Data";
    AFRelationship["Alternative"] = "Alternative";
    AFRelationship["Supplement"] = "Supplement";
    AFRelationship["EncryptedPayload"] = "EncryptedPayload";
    AFRelationship["FormData"] = "EncryptedPayload";
    AFRelationship["Schema"] = "Schema";
    AFRelationship["Unspecified"] = "Unspecified";
})(AFRelationship || (AFRelationship = {}));
var FileEmbedder = function() {
    function FileEmbedder(fileData, fileName, options) {
        if (options === void 0) {
            options = {};
        }
        this.fileData = fileData;
        this.fileName = fileName;
        this.options = options;
    }
    FileEmbedder.for = function(bytes, fileName, options) {
        if (options === void 0) {
            options = {};
        }
        return new FileEmbedder(bytes, fileName, options);
    };
    FileEmbedder.prototype.embedIntoContext = function(context, ref) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var _a, mimeType, description, creationDate, modificationDate, afRelationship, embeddedFileStream, embeddedFileStreamRef, fileSpecDict;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
                _a = this.options, mimeType = _a.mimeType, description = _a.description, creationDate = _a.creationDate, modificationDate = _a.modificationDate, afRelationship = _a.afRelationship;
                embeddedFileStream = context.flateStream(this.fileData, {
                    Type: 'EmbeddedFile',
                    Subtype: mimeType !== null && mimeType !== void 0 ? mimeType : undefined,
                    Params: {
                        Size: this.fileData.length,
                        CreationDate: creationDate ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromDate(creationDate) : undefined,
                        ModDate: modificationDate ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromDate(modificationDate) : undefined
                    }
                });
                embeddedFileStreamRef = context.register(embeddedFileStream);
                fileSpecDict = context.obj({
                    Type: 'Filespec',
                    F: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(this.fileName),
                    UF: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromText(this.fileName),
                    EF: {
                        F: embeddedFileStreamRef
                    },
                    Desc: description ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromText(description) : undefined,
                    AFRelationship: afRelationship !== null && afRelationship !== void 0 ? afRelationship : undefined
                });
                if (ref) {
                    context.assign(ref, fileSpecDict);
                    return [
                        2 /*return*/ ,
                        ref
                    ];
                } else {
                    return [
                        2 /*return*/ ,
                        context.register(fileSpecDict)
                    ];
                }
                //TURBOPACK unreachable
                ;
            });
        });
    };
    return FileEmbedder;
}();
const __TURBOPACK__default__export__ = FileEmbedder;
 //# sourceMappingURL=FileEmbedder.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/JpegEmbedder.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
;
// prettier-ignore
var MARKERS = [
    0xffc0,
    0xffc1,
    0xffc2,
    0xffc3,
    0xffc5,
    0xffc6,
    0xffc7,
    0xffc8,
    0xffc9,
    0xffca,
    0xffcb,
    0xffcc,
    0xffcd,
    0xffce,
    0xffcf
];
var ColorSpace;
(function(ColorSpace) {
    ColorSpace["DeviceGray"] = "DeviceGray";
    ColorSpace["DeviceRGB"] = "DeviceRGB";
    ColorSpace["DeviceCMYK"] = "DeviceCMYK";
})(ColorSpace || (ColorSpace = {}));
var ChannelToColorSpace = {
    1: ColorSpace.DeviceGray,
    3: ColorSpace.DeviceRGB,
    4: ColorSpace.DeviceCMYK
};
/**
 * A note of thanks to the developers of https://github.com/foliojs/pdfkit, as
 * this class borrows from:
 *   https://github.com/foliojs/pdfkit/blob/a6af76467ce06bd6a2af4aa7271ccac9ff152a7d/lib/image/jpeg.js
 */ var JpegEmbedder = function() {
    function JpegEmbedder(imageData, bitsPerComponent, width, height, colorSpace) {
        this.imageData = imageData;
        this.bitsPerComponent = bitsPerComponent;
        this.width = width;
        this.height = height;
        this.colorSpace = colorSpace;
    }
    JpegEmbedder.for = function(imageData) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var dataView, soi, pos, marker, bitsPerComponent, height, width, channelByte, channelName, colorSpace;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                dataView = new DataView(imageData.buffer);
                soi = dataView.getUint16(0);
                if (soi !== 0xffd8) throw new Error('SOI not found in JPEG');
                pos = 2;
                while(pos < dataView.byteLength){
                    marker = dataView.getUint16(pos);
                    pos += 2;
                    if (MARKERS.includes(marker)) break;
                    pos += dataView.getUint16(pos);
                }
                if (!MARKERS.includes(marker)) throw new Error('Invalid JPEG');
                pos += 2;
                bitsPerComponent = dataView.getUint8(pos++);
                height = dataView.getUint16(pos);
                pos += 2;
                width = dataView.getUint16(pos);
                pos += 2;
                channelByte = dataView.getUint8(pos++);
                channelName = ChannelToColorSpace[channelByte];
                if (!channelName) throw new Error('Unknown JPEG channel.');
                colorSpace = channelName;
                return [
                    2 /*return*/ ,
                    new JpegEmbedder(imageData, bitsPerComponent, width, height, colorSpace)
                ];
            });
        });
    };
    JpegEmbedder.prototype.embedIntoContext = function(context, ref) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var xObject;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                xObject = context.stream(this.imageData, {
                    Type: 'XObject',
                    Subtype: 'Image',
                    BitsPerComponent: this.bitsPerComponent,
                    Width: this.width,
                    Height: this.height,
                    ColorSpace: this.colorSpace,
                    Filter: 'DCTDecode',
                    // CMYK JPEG streams in PDF are typically stored complemented,
                    // with 1 as 'off' and 0 as 'on' (PDF 32000-1:2008, 8.6.4.4).
                    //
                    // Standalone CMYK JPEG (usually exported by Photoshop) are
                    // stored inverse, with 0 as 'off' and 1 as 'on', like RGB.
                    //
                    // Applying a swap here as a hedge that most bytes passing
                    // through this method will benefit from it.
                    Decode: this.colorSpace === ColorSpace.DeviceCMYK ? [
                        1,
                        0,
                        1,
                        0,
                        1,
                        0,
                        1,
                        0
                    ] : undefined
                });
                if (ref) {
                    context.assign(ref, xObject);
                    return [
                        2 /*return*/ ,
                        ref
                    ];
                } else {
                    return [
                        2 /*return*/ ,
                        context.register(xObject)
                    ];
                }
                //TURBOPACK unreachable
                ;
            });
        });
    };
    return JpegEmbedder;
}();
const __TURBOPACK__default__export__ = JpegEmbedder;
 //# sourceMappingURL=JpegEmbedder.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/PngEmbedder.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$png$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/png.js [app-client] (ecmascript)");
;
;
/**
 * A note of thanks to the developers of https://github.com/foliojs/pdfkit, as
 * this class borrows from:
 *   https://github.com/devongovett/pdfkit/blob/e71edab0dd4657b5a767804ba86c94c58d01fbca/lib/image/png.coffee
 */ var PngEmbedder = function() {
    function PngEmbedder(png) {
        this.image = png;
        this.bitsPerComponent = png.bitsPerComponent;
        this.width = png.width;
        this.height = png.height;
        this.colorSpace = 'DeviceRGB';
    }
    PngEmbedder.for = function(imageData) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var png;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                png = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$png$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PNG"].load(imageData);
                return [
                    2 /*return*/ ,
                    new PngEmbedder(png)
                ];
            });
        });
    };
    PngEmbedder.prototype.embedIntoContext = function(context, ref) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var SMask, xObject;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                SMask = this.embedAlphaChannel(context);
                xObject = context.flateStream(this.image.rgbChannel, {
                    Type: 'XObject',
                    Subtype: 'Image',
                    BitsPerComponent: this.image.bitsPerComponent,
                    Width: this.image.width,
                    Height: this.image.height,
                    ColorSpace: this.colorSpace,
                    SMask: SMask
                });
                if (ref) {
                    context.assign(ref, xObject);
                    return [
                        2 /*return*/ ,
                        ref
                    ];
                } else {
                    return [
                        2 /*return*/ ,
                        context.register(xObject)
                    ];
                }
                //TURBOPACK unreachable
                ;
            });
        });
    };
    PngEmbedder.prototype.embedAlphaChannel = function(context) {
        if (!this.image.alphaChannel) return undefined;
        var xObject = context.flateStream(this.image.alphaChannel, {
            Type: 'XObject',
            Subtype: 'Image',
            Height: this.image.height,
            Width: this.image.width,
            BitsPerComponent: this.image.bitsPerComponent,
            ColorSpace: 'DeviceGray',
            Decode: [
                0,
                1
            ]
        });
        return context.register(xObject);
    };
    return PngEmbedder;
}();
const __TURBOPACK__default__export__ = PngEmbedder;
 //# sourceMappingURL=PngEmbedder.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/streams/Stream.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright 2012 Mozilla Foundation
 *
 * The Stream class contained in this file is a TypeScript port of the
 * JavaScript Stream class in Mozilla's pdf.js project, made available
 * under the Apache 2.0 open source license.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var Stream = function() {
    function Stream(buffer, start, length) {
        this.bytes = buffer;
        this.start = start || 0;
        this.pos = this.start;
        this.end = !!start && !!length ? start + length : this.bytes.length;
    }
    Object.defineProperty(Stream.prototype, "length", {
        get: function() {
            return this.end - this.start;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "isEmpty", {
        get: function() {
            return this.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    Stream.prototype.getByte = function() {
        if (this.pos >= this.end) {
            return -1;
        }
        return this.bytes[this.pos++];
    };
    Stream.prototype.getUint16 = function() {
        var b0 = this.getByte();
        var b1 = this.getByte();
        if (b0 === -1 || b1 === -1) {
            return -1;
        }
        return (b0 << 8) + b1;
    };
    Stream.prototype.getInt32 = function() {
        var b0 = this.getByte();
        var b1 = this.getByte();
        var b2 = this.getByte();
        var b3 = this.getByte();
        return (b0 << 24) + (b1 << 16) + (b2 << 8) + b3;
    };
    // Returns subarray of original buffer, should only be read.
    Stream.prototype.getBytes = function(length, forceClamped) {
        if (forceClamped === void 0) {
            forceClamped = false;
        }
        var bytes = this.bytes;
        var pos = this.pos;
        var strEnd = this.end;
        if (!length) {
            var subarray = bytes.subarray(pos, strEnd);
            // `this.bytes` is always a `Uint8Array` here.
            return forceClamped ? new Uint8ClampedArray(subarray) : subarray;
        } else {
            var end = pos + length;
            if (end > strEnd) {
                end = strEnd;
            }
            this.pos = end;
            var subarray = bytes.subarray(pos, end);
            // `this.bytes` is always a `Uint8Array` here.
            return forceClamped ? new Uint8ClampedArray(subarray) : subarray;
        }
    };
    Stream.prototype.peekByte = function() {
        var peekedByte = this.getByte();
        this.pos--;
        return peekedByte;
    };
    Stream.prototype.peekBytes = function(length, forceClamped) {
        if (forceClamped === void 0) {
            forceClamped = false;
        }
        var bytes = this.getBytes(length, forceClamped);
        this.pos -= bytes.length;
        return bytes;
    };
    Stream.prototype.skip = function(n) {
        if (!n) {
            n = 1;
        }
        this.pos += n;
    };
    Stream.prototype.reset = function() {
        this.pos = this.start;
    };
    Stream.prototype.moveStart = function() {
        this.start = this.pos;
    };
    Stream.prototype.makeSubStream = function(start, length) {
        return new Stream(this.bytes, start, length);
    };
    Stream.prototype.decode = function() {
        return this.bytes;
    };
    return Stream;
}();
const __TURBOPACK__default__export__ = Stream;
 //# sourceMappingURL=Stream.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/streams/DecodeStream.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$Stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/streams/Stream.js [app-client] (ecmascript)");
;
;
/*
 * Copyright 2012 Mozilla Foundation
 *
 * The DecodeStream class contained in this file is a TypeScript port of the
 * JavaScript DecodeStream class in Mozilla's pdf.js project, made available
 * under the Apache 2.0 open source license.
 */ // Lots of DecodeStreams are created whose buffers are never used.  For these
// we share a single empty buffer. This is (a) space-efficient and (b) avoids
// having special cases that would be required if we used |null| for an empty
// buffer.
var emptyBuffer = new Uint8Array(0);
/**
 * Super class for the decoding streams
 */ var DecodeStream = function() {
    function DecodeStream(maybeMinBufferLength) {
        this.pos = 0;
        this.bufferLength = 0;
        this.eof = false;
        this.buffer = emptyBuffer;
        this.minBufferLength = 512;
        if (maybeMinBufferLength) {
            // Compute the first power of two that is as big as maybeMinBufferLength.
            while(this.minBufferLength < maybeMinBufferLength){
                this.minBufferLength *= 2;
            }
        }
    }
    Object.defineProperty(DecodeStream.prototype, "isEmpty", {
        get: function() {
            while(!this.eof && this.bufferLength === 0){
                this.readBlock();
            }
            return this.bufferLength === 0;
        },
        enumerable: false,
        configurable: true
    });
    DecodeStream.prototype.getByte = function() {
        var pos = this.pos;
        while(this.bufferLength <= pos){
            if (this.eof) {
                return -1;
            }
            this.readBlock();
        }
        return this.buffer[this.pos++];
    };
    DecodeStream.prototype.getUint16 = function() {
        var b0 = this.getByte();
        var b1 = this.getByte();
        if (b0 === -1 || b1 === -1) {
            return -1;
        }
        return (b0 << 8) + b1;
    };
    DecodeStream.prototype.getInt32 = function() {
        var b0 = this.getByte();
        var b1 = this.getByte();
        var b2 = this.getByte();
        var b3 = this.getByte();
        return (b0 << 24) + (b1 << 16) + (b2 << 8) + b3;
    };
    DecodeStream.prototype.getBytes = function(length, forceClamped) {
        if (forceClamped === void 0) {
            forceClamped = false;
        }
        var end;
        var pos = this.pos;
        if (length) {
            this.ensureBuffer(pos + length);
            end = pos + length;
            while(!this.eof && this.bufferLength < end){
                this.readBlock();
            }
            var bufEnd = this.bufferLength;
            if (end > bufEnd) {
                end = bufEnd;
            }
        } else {
            while(!this.eof){
                this.readBlock();
            }
            end = this.bufferLength;
        }
        this.pos = end;
        var subarray = this.buffer.subarray(pos, end);
        // `this.buffer` is either a `Uint8Array` or `Uint8ClampedArray` here.
        return forceClamped && !(subarray instanceof Uint8ClampedArray) ? new Uint8ClampedArray(subarray) : subarray;
    };
    DecodeStream.prototype.peekByte = function() {
        var peekedByte = this.getByte();
        this.pos--;
        return peekedByte;
    };
    DecodeStream.prototype.peekBytes = function(length, forceClamped) {
        if (forceClamped === void 0) {
            forceClamped = false;
        }
        var bytes = this.getBytes(length, forceClamped);
        this.pos -= bytes.length;
        return bytes;
    };
    DecodeStream.prototype.skip = function(n) {
        if (!n) {
            n = 1;
        }
        this.pos += n;
    };
    DecodeStream.prototype.reset = function() {
        this.pos = 0;
    };
    DecodeStream.prototype.makeSubStream = function(start, length /* dict */ ) {
        var end = start + length;
        while(this.bufferLength <= end && !this.eof){
            this.readBlock();
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$Stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](this.buffer, start, length /* dict */ );
    };
    DecodeStream.prototype.decode = function() {
        while(!this.eof)this.readBlock();
        return this.buffer.subarray(0, this.bufferLength);
    };
    DecodeStream.prototype.readBlock = function() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MethodNotImplementedError"](this.constructor.name, 'readBlock');
    };
    DecodeStream.prototype.ensureBuffer = function(requested) {
        var buffer = this.buffer;
        if (requested <= buffer.byteLength) {
            return buffer;
        }
        var size = this.minBufferLength;
        while(size < requested){
            size *= 2;
        }
        var buffer2 = new Uint8Array(size);
        buffer2.set(buffer);
        return this.buffer = buffer2;
    };
    return DecodeStream;
}();
const __TURBOPACK__default__export__ = DecodeStream;
 //# sourceMappingURL=DecodeStream.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/streams/Ascii85Stream.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright 2012 Mozilla Foundation
 *
 * The Ascii85Stream class contained in this file is a TypeScript port of the
 * JavaScript Ascii85Stream class in Mozilla's pdf.js project, made available
 * under the Apache 2.0 open source license.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$DecodeStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/streams/DecodeStream.js [app-client] (ecmascript)");
;
;
var isSpace = function(ch) {
    return ch === 0x20 || ch === 0x09 || ch === 0x0d || ch === 0x0a;
};
var Ascii85Stream = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(Ascii85Stream, _super);
    function Ascii85Stream(stream, maybeLength) {
        var _this = _super.call(this, maybeLength) || this;
        _this.stream = stream;
        _this.input = new Uint8Array(5);
        // Most streams increase in size when decoded, but Ascii85 streams
        // typically shrink by ~20%.
        if (maybeLength) {
            maybeLength = 0.8 * maybeLength;
        }
        return _this;
    }
    Ascii85Stream.prototype.readBlock = function() {
        var TILDA_CHAR = 0x7e; // '~'
        var Z_LOWER_CHAR = 0x7a; // 'z'
        var EOF = -1;
        var stream = this.stream;
        var c = stream.getByte();
        while(isSpace(c)){
            c = stream.getByte();
        }
        if (c === EOF || c === TILDA_CHAR) {
            this.eof = true;
            return;
        }
        var bufferLength = this.bufferLength;
        var buffer;
        var i;
        // special code for z
        if (c === Z_LOWER_CHAR) {
            buffer = this.ensureBuffer(bufferLength + 4);
            for(i = 0; i < 4; ++i){
                buffer[bufferLength + i] = 0;
            }
            this.bufferLength += 4;
        } else {
            var input = this.input;
            input[0] = c;
            for(i = 1; i < 5; ++i){
                c = stream.getByte();
                while(isSpace(c)){
                    c = stream.getByte();
                }
                input[i] = c;
                if (c === EOF || c === TILDA_CHAR) {
                    break;
                }
            }
            buffer = this.ensureBuffer(bufferLength + i - 1);
            this.bufferLength += i - 1;
            // partial ending;
            if (i < 5) {
                for(; i < 5; ++i){
                    input[i] = 0x21 + 84;
                }
                this.eof = true;
            }
            var t = 0;
            for(i = 0; i < 5; ++i){
                t = t * 85 + (input[i] - 0x21);
            }
            for(i = 3; i >= 0; --i){
                buffer[bufferLength + i] = t & 0xff;
                t >>= 8;
            }
        }
    };
    return Ascii85Stream;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$DecodeStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = Ascii85Stream;
 //# sourceMappingURL=Ascii85Stream.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/streams/AsciiHexStream.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright 2012 Mozilla Foundation
 *
 * The AsciiHexStream class contained in this file is a TypeScript port of the
 * JavaScript AsciiHexStream class in Mozilla's pdf.js project, made available
 * under the Apache 2.0 open source license.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$DecodeStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/streams/DecodeStream.js [app-client] (ecmascript)");
;
;
var AsciiHexStream = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(AsciiHexStream, _super);
    function AsciiHexStream(stream, maybeLength) {
        var _this = _super.call(this, maybeLength) || this;
        _this.stream = stream;
        _this.firstDigit = -1;
        // Most streams increase in size when decoded, but AsciiHex streams shrink
        // by 50%.
        if (maybeLength) {
            maybeLength = 0.5 * maybeLength;
        }
        return _this;
    }
    AsciiHexStream.prototype.readBlock = function() {
        var UPSTREAM_BLOCK_SIZE = 8000;
        var bytes = this.stream.getBytes(UPSTREAM_BLOCK_SIZE);
        if (!bytes.length) {
            this.eof = true;
            return;
        }
        var maxDecodeLength = bytes.length + 1 >> 1;
        var buffer = this.ensureBuffer(this.bufferLength + maxDecodeLength);
        var bufferLength = this.bufferLength;
        var firstDigit = this.firstDigit;
        for(var i = 0, ii = bytes.length; i < ii; i++){
            var ch = bytes[i];
            var digit = void 0;
            if (ch >= 0x30 && ch <= 0x39) {
                // '0'-'9'
                digit = ch & 0x0f;
            } else if (ch >= 0x41 && ch <= 0x46 || ch >= 0x61 && ch <= 0x66) {
                // 'A'-'Z', 'a'-'z'
                digit = (ch & 0x0f) + 9;
            } else if (ch === 0x3e) {
                // '>'
                this.eof = true;
                break;
            } else {
                continue; // ignoring
            }
            if (firstDigit < 0) {
                firstDigit = digit;
            } else {
                buffer[bufferLength++] = firstDigit << 4 | digit;
                firstDigit = -1;
            }
        }
        if (firstDigit >= 0 && this.eof) {
            // incomplete byte
            buffer[bufferLength++] = firstDigit << 4;
            firstDigit = -1;
        }
        this.firstDigit = firstDigit;
        this.bufferLength = bufferLength;
    };
    return AsciiHexStream;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$DecodeStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = AsciiHexStream;
 //# sourceMappingURL=AsciiHexStream.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/streams/FlateStream.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright 1996-2003 Glyph & Cog, LLC
 *
 * The flate stream implementation contained in this file is a JavaScript port
 * of XPDF's implementation, made available under the Apache 2.0 open source
 * license.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
/*
 * Copyright 2012 Mozilla Foundation
 *
 * The FlateStream class contained in this file is a TypeScript port of the
 * JavaScript FlateStream class in Mozilla's pdf.js project, made available
 * under the Apache 2.0 open source license.
 */ /* tslint:disable  no-conditional-assignment */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$DecodeStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/streams/DecodeStream.js [app-client] (ecmascript)");
;
;
// prettier-ignore
var codeLenCodeMap = new Int32Array([
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
]);
// prettier-ignore
var lengthDecode = new Int32Array([
    0x00003,
    0x00004,
    0x00005,
    0x00006,
    0x00007,
    0x00008,
    0x00009,
    0x0000a,
    0x1000b,
    0x1000d,
    0x1000f,
    0x10011,
    0x20013,
    0x20017,
    0x2001b,
    0x2001f,
    0x30023,
    0x3002b,
    0x30033,
    0x3003b,
    0x40043,
    0x40053,
    0x40063,
    0x40073,
    0x50083,
    0x500a3,
    0x500c3,
    0x500e3,
    0x00102,
    0x00102,
    0x00102
]);
// prettier-ignore
var distDecode = new Int32Array([
    0x00001,
    0x00002,
    0x00003,
    0x00004,
    0x10005,
    0x10007,
    0x20009,
    0x2000d,
    0x30011,
    0x30019,
    0x40021,
    0x40031,
    0x50041,
    0x50061,
    0x60081,
    0x600c1,
    0x70101,
    0x70181,
    0x80201,
    0x80301,
    0x90401,
    0x90601,
    0xa0801,
    0xa0c01,
    0xb1001,
    0xb1801,
    0xc2001,
    0xc3001,
    0xd4001,
    0xd6001
]);
// prettier-ignore
var fixedLitCodeTab = [
    new Int32Array([
        0x70100,
        0x80050,
        0x80010,
        0x80118,
        0x70110,
        0x80070,
        0x80030,
        0x900c0,
        0x70108,
        0x80060,
        0x80020,
        0x900a0,
        0x80000,
        0x80080,
        0x80040,
        0x900e0,
        0x70104,
        0x80058,
        0x80018,
        0x90090,
        0x70114,
        0x80078,
        0x80038,
        0x900d0,
        0x7010c,
        0x80068,
        0x80028,
        0x900b0,
        0x80008,
        0x80088,
        0x80048,
        0x900f0,
        0x70102,
        0x80054,
        0x80014,
        0x8011c,
        0x70112,
        0x80074,
        0x80034,
        0x900c8,
        0x7010a,
        0x80064,
        0x80024,
        0x900a8,
        0x80004,
        0x80084,
        0x80044,
        0x900e8,
        0x70106,
        0x8005c,
        0x8001c,
        0x90098,
        0x70116,
        0x8007c,
        0x8003c,
        0x900d8,
        0x7010e,
        0x8006c,
        0x8002c,
        0x900b8,
        0x8000c,
        0x8008c,
        0x8004c,
        0x900f8,
        0x70101,
        0x80052,
        0x80012,
        0x8011a,
        0x70111,
        0x80072,
        0x80032,
        0x900c4,
        0x70109,
        0x80062,
        0x80022,
        0x900a4,
        0x80002,
        0x80082,
        0x80042,
        0x900e4,
        0x70105,
        0x8005a,
        0x8001a,
        0x90094,
        0x70115,
        0x8007a,
        0x8003a,
        0x900d4,
        0x7010d,
        0x8006a,
        0x8002a,
        0x900b4,
        0x8000a,
        0x8008a,
        0x8004a,
        0x900f4,
        0x70103,
        0x80056,
        0x80016,
        0x8011e,
        0x70113,
        0x80076,
        0x80036,
        0x900cc,
        0x7010b,
        0x80066,
        0x80026,
        0x900ac,
        0x80006,
        0x80086,
        0x80046,
        0x900ec,
        0x70107,
        0x8005e,
        0x8001e,
        0x9009c,
        0x70117,
        0x8007e,
        0x8003e,
        0x900dc,
        0x7010f,
        0x8006e,
        0x8002e,
        0x900bc,
        0x8000e,
        0x8008e,
        0x8004e,
        0x900fc,
        0x70100,
        0x80051,
        0x80011,
        0x80119,
        0x70110,
        0x80071,
        0x80031,
        0x900c2,
        0x70108,
        0x80061,
        0x80021,
        0x900a2,
        0x80001,
        0x80081,
        0x80041,
        0x900e2,
        0x70104,
        0x80059,
        0x80019,
        0x90092,
        0x70114,
        0x80079,
        0x80039,
        0x900d2,
        0x7010c,
        0x80069,
        0x80029,
        0x900b2,
        0x80009,
        0x80089,
        0x80049,
        0x900f2,
        0x70102,
        0x80055,
        0x80015,
        0x8011d,
        0x70112,
        0x80075,
        0x80035,
        0x900ca,
        0x7010a,
        0x80065,
        0x80025,
        0x900aa,
        0x80005,
        0x80085,
        0x80045,
        0x900ea,
        0x70106,
        0x8005d,
        0x8001d,
        0x9009a,
        0x70116,
        0x8007d,
        0x8003d,
        0x900da,
        0x7010e,
        0x8006d,
        0x8002d,
        0x900ba,
        0x8000d,
        0x8008d,
        0x8004d,
        0x900fa,
        0x70101,
        0x80053,
        0x80013,
        0x8011b,
        0x70111,
        0x80073,
        0x80033,
        0x900c6,
        0x70109,
        0x80063,
        0x80023,
        0x900a6,
        0x80003,
        0x80083,
        0x80043,
        0x900e6,
        0x70105,
        0x8005b,
        0x8001b,
        0x90096,
        0x70115,
        0x8007b,
        0x8003b,
        0x900d6,
        0x7010d,
        0x8006b,
        0x8002b,
        0x900b6,
        0x8000b,
        0x8008b,
        0x8004b,
        0x900f6,
        0x70103,
        0x80057,
        0x80017,
        0x8011f,
        0x70113,
        0x80077,
        0x80037,
        0x900ce,
        0x7010b,
        0x80067,
        0x80027,
        0x900ae,
        0x80007,
        0x80087,
        0x80047,
        0x900ee,
        0x70107,
        0x8005f,
        0x8001f,
        0x9009e,
        0x70117,
        0x8007f,
        0x8003f,
        0x900de,
        0x7010f,
        0x8006f,
        0x8002f,
        0x900be,
        0x8000f,
        0x8008f,
        0x8004f,
        0x900fe,
        0x70100,
        0x80050,
        0x80010,
        0x80118,
        0x70110,
        0x80070,
        0x80030,
        0x900c1,
        0x70108,
        0x80060,
        0x80020,
        0x900a1,
        0x80000,
        0x80080,
        0x80040,
        0x900e1,
        0x70104,
        0x80058,
        0x80018,
        0x90091,
        0x70114,
        0x80078,
        0x80038,
        0x900d1,
        0x7010c,
        0x80068,
        0x80028,
        0x900b1,
        0x80008,
        0x80088,
        0x80048,
        0x900f1,
        0x70102,
        0x80054,
        0x80014,
        0x8011c,
        0x70112,
        0x80074,
        0x80034,
        0x900c9,
        0x7010a,
        0x80064,
        0x80024,
        0x900a9,
        0x80004,
        0x80084,
        0x80044,
        0x900e9,
        0x70106,
        0x8005c,
        0x8001c,
        0x90099,
        0x70116,
        0x8007c,
        0x8003c,
        0x900d9,
        0x7010e,
        0x8006c,
        0x8002c,
        0x900b9,
        0x8000c,
        0x8008c,
        0x8004c,
        0x900f9,
        0x70101,
        0x80052,
        0x80012,
        0x8011a,
        0x70111,
        0x80072,
        0x80032,
        0x900c5,
        0x70109,
        0x80062,
        0x80022,
        0x900a5,
        0x80002,
        0x80082,
        0x80042,
        0x900e5,
        0x70105,
        0x8005a,
        0x8001a,
        0x90095,
        0x70115,
        0x8007a,
        0x8003a,
        0x900d5,
        0x7010d,
        0x8006a,
        0x8002a,
        0x900b5,
        0x8000a,
        0x8008a,
        0x8004a,
        0x900f5,
        0x70103,
        0x80056,
        0x80016,
        0x8011e,
        0x70113,
        0x80076,
        0x80036,
        0x900cd,
        0x7010b,
        0x80066,
        0x80026,
        0x900ad,
        0x80006,
        0x80086,
        0x80046,
        0x900ed,
        0x70107,
        0x8005e,
        0x8001e,
        0x9009d,
        0x70117,
        0x8007e,
        0x8003e,
        0x900dd,
        0x7010f,
        0x8006e,
        0x8002e,
        0x900bd,
        0x8000e,
        0x8008e,
        0x8004e,
        0x900fd,
        0x70100,
        0x80051,
        0x80011,
        0x80119,
        0x70110,
        0x80071,
        0x80031,
        0x900c3,
        0x70108,
        0x80061,
        0x80021,
        0x900a3,
        0x80001,
        0x80081,
        0x80041,
        0x900e3,
        0x70104,
        0x80059,
        0x80019,
        0x90093,
        0x70114,
        0x80079,
        0x80039,
        0x900d3,
        0x7010c,
        0x80069,
        0x80029,
        0x900b3,
        0x80009,
        0x80089,
        0x80049,
        0x900f3,
        0x70102,
        0x80055,
        0x80015,
        0x8011d,
        0x70112,
        0x80075,
        0x80035,
        0x900cb,
        0x7010a,
        0x80065,
        0x80025,
        0x900ab,
        0x80005,
        0x80085,
        0x80045,
        0x900eb,
        0x70106,
        0x8005d,
        0x8001d,
        0x9009b,
        0x70116,
        0x8007d,
        0x8003d,
        0x900db,
        0x7010e,
        0x8006d,
        0x8002d,
        0x900bb,
        0x8000d,
        0x8008d,
        0x8004d,
        0x900fb,
        0x70101,
        0x80053,
        0x80013,
        0x8011b,
        0x70111,
        0x80073,
        0x80033,
        0x900c7,
        0x70109,
        0x80063,
        0x80023,
        0x900a7,
        0x80003,
        0x80083,
        0x80043,
        0x900e7,
        0x70105,
        0x8005b,
        0x8001b,
        0x90097,
        0x70115,
        0x8007b,
        0x8003b,
        0x900d7,
        0x7010d,
        0x8006b,
        0x8002b,
        0x900b7,
        0x8000b,
        0x8008b,
        0x8004b,
        0x900f7,
        0x70103,
        0x80057,
        0x80017,
        0x8011f,
        0x70113,
        0x80077,
        0x80037,
        0x900cf,
        0x7010b,
        0x80067,
        0x80027,
        0x900af,
        0x80007,
        0x80087,
        0x80047,
        0x900ef,
        0x70107,
        0x8005f,
        0x8001f,
        0x9009f,
        0x70117,
        0x8007f,
        0x8003f,
        0x900df,
        0x7010f,
        0x8006f,
        0x8002f,
        0x900bf,
        0x8000f,
        0x8008f,
        0x8004f,
        0x900ff
    ]),
    9
];
// prettier-ignore
var fixedDistCodeTab = [
    new Int32Array([
        0x50000,
        0x50010,
        0x50008,
        0x50018,
        0x50004,
        0x50014,
        0x5000c,
        0x5001c,
        0x50002,
        0x50012,
        0x5000a,
        0x5001a,
        0x50006,
        0x50016,
        0x5000e,
        0x00000,
        0x50001,
        0x50011,
        0x50009,
        0x50019,
        0x50005,
        0x50015,
        0x5000d,
        0x5001d,
        0x50003,
        0x50013,
        0x5000b,
        0x5001b,
        0x50007,
        0x50017,
        0x5000f,
        0x00000
    ]),
    5
];
var FlateStream = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(FlateStream, _super);
    function FlateStream(stream, maybeLength) {
        var _this = _super.call(this, maybeLength) || this;
        _this.stream = stream;
        var cmf = stream.getByte();
        var flg = stream.getByte();
        if (cmf === -1 || flg === -1) {
            throw new Error("Invalid header in flate stream: " + cmf + ", " + flg);
        }
        if ((cmf & 0x0f) !== 0x08) {
            throw new Error("Unknown compression method in flate stream: " + cmf + ", " + flg);
        }
        if (((cmf << 8) + flg) % 31 !== 0) {
            throw new Error("Bad FCHECK in flate stream: " + cmf + ", " + flg);
        }
        if (flg & 0x20) {
            throw new Error("FDICT bit set in flate stream: " + cmf + ", " + flg);
        }
        _this.codeSize = 0;
        _this.codeBuf = 0;
        return _this;
    }
    FlateStream.prototype.readBlock = function() {
        var buffer;
        var len;
        var str = this.stream;
        // read block header
        var hdr = this.getBits(3);
        if (hdr & 1) {
            this.eof = true;
        }
        hdr >>= 1;
        if (hdr === 0) {
            // uncompressed block
            var b = void 0;
            if ((b = str.getByte()) === -1) {
                throw new Error('Bad block header in flate stream');
            }
            var blockLen = b;
            if ((b = str.getByte()) === -1) {
                throw new Error('Bad block header in flate stream');
            }
            blockLen |= b << 8;
            if ((b = str.getByte()) === -1) {
                throw new Error('Bad block header in flate stream');
            }
            var check = b;
            if ((b = str.getByte()) === -1) {
                throw new Error('Bad block header in flate stream');
            }
            check |= b << 8;
            if (check !== (~blockLen & 0xffff) && (blockLen !== 0 || check !== 0)) {
                // Ignoring error for bad "empty" block (see issue 1277)
                throw new Error('Bad uncompressed block length in flate stream');
            }
            this.codeBuf = 0;
            this.codeSize = 0;
            var bufferLength = this.bufferLength;
            buffer = this.ensureBuffer(bufferLength + blockLen);
            var end = bufferLength + blockLen;
            this.bufferLength = end;
            if (blockLen === 0) {
                if (str.peekByte() === -1) {
                    this.eof = true;
                }
            } else {
                for(var n = bufferLength; n < end; ++n){
                    if ((b = str.getByte()) === -1) {
                        this.eof = true;
                        break;
                    }
                    buffer[n] = b;
                }
            }
            return;
        }
        var litCodeTable;
        var distCodeTable;
        if (hdr === 1) {
            // compressed block, fixed codes
            litCodeTable = fixedLitCodeTab;
            distCodeTable = fixedDistCodeTab;
        } else if (hdr === 2) {
            // compressed block, dynamic codes
            var numLitCodes = this.getBits(5) + 257;
            var numDistCodes = this.getBits(5) + 1;
            var numCodeLenCodes = this.getBits(4) + 4;
            // build the code lengths code table
            var codeLenCodeLengths = new Uint8Array(codeLenCodeMap.length);
            var i = void 0;
            for(i = 0; i < numCodeLenCodes; ++i){
                codeLenCodeLengths[codeLenCodeMap[i]] = this.getBits(3);
            }
            var codeLenCodeTab = this.generateHuffmanTable(codeLenCodeLengths);
            // build the literal and distance code tables
            len = 0;
            i = 0;
            var codes = numLitCodes + numDistCodes;
            var codeLengths = new Uint8Array(codes);
            var bitsLength = void 0;
            var bitsOffset = void 0;
            var what = void 0;
            while(i < codes){
                var code = this.getCode(codeLenCodeTab);
                if (code === 16) {
                    bitsLength = 2;
                    bitsOffset = 3;
                    what = len;
                } else if (code === 17) {
                    bitsLength = 3;
                    bitsOffset = 3;
                    what = len = 0;
                } else if (code === 18) {
                    bitsLength = 7;
                    bitsOffset = 11;
                    what = len = 0;
                } else {
                    codeLengths[i++] = len = code;
                    continue;
                }
                var repeatLength = this.getBits(bitsLength) + bitsOffset;
                while(repeatLength-- > 0){
                    codeLengths[i++] = what;
                }
            }
            litCodeTable = this.generateHuffmanTable(codeLengths.subarray(0, numLitCodes));
            distCodeTable = this.generateHuffmanTable(codeLengths.subarray(numLitCodes, codes));
        } else {
            throw new Error('Unknown block type in flate stream');
        }
        buffer = this.buffer;
        var limit = buffer ? buffer.length : 0;
        var pos = this.bufferLength;
        while(true){
            var code1 = this.getCode(litCodeTable);
            if (code1 < 256) {
                if (pos + 1 >= limit) {
                    buffer = this.ensureBuffer(pos + 1);
                    limit = buffer.length;
                }
                buffer[pos++] = code1;
                continue;
            }
            if (code1 === 256) {
                this.bufferLength = pos;
                return;
            }
            code1 -= 257;
            code1 = lengthDecode[code1];
            var code2 = code1 >> 16;
            if (code2 > 0) {
                code2 = this.getBits(code2);
            }
            len = (code1 & 0xffff) + code2;
            code1 = this.getCode(distCodeTable);
            code1 = distDecode[code1];
            code2 = code1 >> 16;
            if (code2 > 0) {
                code2 = this.getBits(code2);
            }
            var dist = (code1 & 0xffff) + code2;
            if (pos + len >= limit) {
                buffer = this.ensureBuffer(pos + len);
                limit = buffer.length;
            }
            for(var k = 0; k < len; ++k, ++pos){
                buffer[pos] = buffer[pos - dist];
            }
        }
    };
    FlateStream.prototype.getBits = function(bits) {
        var str = this.stream;
        var codeSize = this.codeSize;
        var codeBuf = this.codeBuf;
        var b;
        while(codeSize < bits){
            if ((b = str.getByte()) === -1) {
                throw new Error('Bad encoding in flate stream');
            }
            codeBuf |= b << codeSize;
            codeSize += 8;
        }
        b = codeBuf & (1 << bits) - 1;
        this.codeBuf = codeBuf >> bits;
        this.codeSize = codeSize -= bits;
        return b;
    };
    FlateStream.prototype.getCode = function(table) {
        var str = this.stream;
        var codes = table[0];
        var maxLen = table[1];
        var codeSize = this.codeSize;
        var codeBuf = this.codeBuf;
        var b;
        while(codeSize < maxLen){
            if ((b = str.getByte()) === -1) {
                break;
            }
            codeBuf |= b << codeSize;
            codeSize += 8;
        }
        var code = codes[codeBuf & (1 << maxLen) - 1];
        if (typeof codes === 'number') {
            console.log('FLATE:', code);
        }
        var codeLen = code >> 16;
        var codeVal = code & 0xffff;
        if (codeLen < 1 || codeSize < codeLen) {
            throw new Error('Bad encoding in flate stream');
        }
        this.codeBuf = codeBuf >> codeLen;
        this.codeSize = codeSize - codeLen;
        return codeVal;
    };
    FlateStream.prototype.generateHuffmanTable = function(lengths) {
        var n = lengths.length;
        // find max code length
        var maxLen = 0;
        var i;
        for(i = 0; i < n; ++i){
            if (lengths[i] > maxLen) {
                maxLen = lengths[i];
            }
        }
        // build the table
        var size = 1 << maxLen;
        var codes = new Int32Array(size);
        for(var len = 1, code = 0, skip = 2; len <= maxLen; ++len, code <<= 1, skip <<= 1){
            for(var val = 0; val < n; ++val){
                if (lengths[val] === len) {
                    // bit-reverse the code
                    var code2 = 0;
                    var t = code;
                    for(i = 0; i < len; ++i){
                        code2 = code2 << 1 | t & 1;
                        t >>= 1;
                    }
                    // fill the table entries
                    for(i = code2; i < size; i += skip){
                        codes[i] = len << 16 | val;
                    }
                    ++code;
                }
            }
        }
        return [
            codes,
            maxLen
        ];
    };
    return FlateStream;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$DecodeStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = FlateStream;
 //# sourceMappingURL=FlateStream.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/streams/LZWStream.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright 2012 Mozilla Foundation
 *
 * The LZWStream class contained in this file is a TypeScript port of the
 * JavaScript LZWStream class in Mozilla's pdf.js project, made available
 * under the Apache 2.0 open source license.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$DecodeStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/streams/DecodeStream.js [app-client] (ecmascript)");
;
;
var LZWStream = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(LZWStream, _super);
    function LZWStream(stream, maybeLength, earlyChange) {
        var _this = _super.call(this, maybeLength) || this;
        _this.stream = stream;
        _this.cachedData = 0;
        _this.bitsCached = 0;
        var maxLzwDictionarySize = 4096;
        var lzwState = {
            earlyChange: earlyChange,
            codeLength: 9,
            nextCode: 258,
            dictionaryValues: new Uint8Array(maxLzwDictionarySize),
            dictionaryLengths: new Uint16Array(maxLzwDictionarySize),
            dictionaryPrevCodes: new Uint16Array(maxLzwDictionarySize),
            currentSequence: new Uint8Array(maxLzwDictionarySize),
            currentSequenceLength: 0
        };
        for(var i = 0; i < 256; ++i){
            lzwState.dictionaryValues[i] = i;
            lzwState.dictionaryLengths[i] = 1;
        }
        _this.lzwState = lzwState;
        return _this;
    }
    LZWStream.prototype.readBlock = function() {
        var blockSize = 512;
        var estimatedDecodedSize = blockSize * 2;
        var decodedSizeDelta = blockSize;
        var i;
        var j;
        var q;
        var lzwState = this.lzwState;
        if (!lzwState) {
            return; // eof was found
        }
        var earlyChange = lzwState.earlyChange;
        var nextCode = lzwState.nextCode;
        var dictionaryValues = lzwState.dictionaryValues;
        var dictionaryLengths = lzwState.dictionaryLengths;
        var dictionaryPrevCodes = lzwState.dictionaryPrevCodes;
        var codeLength = lzwState.codeLength;
        var prevCode = lzwState.prevCode;
        var currentSequence = lzwState.currentSequence;
        var currentSequenceLength = lzwState.currentSequenceLength;
        var decodedLength = 0;
        var currentBufferLength = this.bufferLength;
        var buffer = this.ensureBuffer(this.bufferLength + estimatedDecodedSize);
        for(i = 0; i < blockSize; i++){
            var code = this.readBits(codeLength);
            var hasPrev = currentSequenceLength > 0;
            if (!code || code < 256) {
                currentSequence[0] = code;
                currentSequenceLength = 1;
            } else if (code >= 258) {
                if (code < nextCode) {
                    currentSequenceLength = dictionaryLengths[code];
                    for(j = currentSequenceLength - 1, q = code; j >= 0; j--){
                        currentSequence[j] = dictionaryValues[q];
                        q = dictionaryPrevCodes[q];
                    }
                } else {
                    currentSequence[currentSequenceLength++] = currentSequence[0];
                }
            } else if (code === 256) {
                codeLength = 9;
                nextCode = 258;
                currentSequenceLength = 0;
                continue;
            } else {
                this.eof = true;
                delete this.lzwState;
                break;
            }
            if (hasPrev) {
                dictionaryPrevCodes[nextCode] = prevCode;
                dictionaryLengths[nextCode] = dictionaryLengths[prevCode] + 1;
                dictionaryValues[nextCode] = currentSequence[0];
                nextCode++;
                codeLength = nextCode + earlyChange & nextCode + earlyChange - 1 ? codeLength : Math.min(Math.log(nextCode + earlyChange) / 0.6931471805599453 + 1, 12) | 0;
            }
            prevCode = code;
            decodedLength += currentSequenceLength;
            if (estimatedDecodedSize < decodedLength) {
                do {
                    estimatedDecodedSize += decodedSizeDelta;
                }while (estimatedDecodedSize < decodedLength)
                buffer = this.ensureBuffer(this.bufferLength + estimatedDecodedSize);
            }
            for(j = 0; j < currentSequenceLength; j++){
                buffer[currentBufferLength++] = currentSequence[j];
            }
        }
        lzwState.nextCode = nextCode;
        lzwState.codeLength = codeLength;
        lzwState.prevCode = prevCode;
        lzwState.currentSequenceLength = currentSequenceLength;
        this.bufferLength = currentBufferLength;
    };
    LZWStream.prototype.readBits = function(n) {
        var bitsCached = this.bitsCached;
        var cachedData = this.cachedData;
        while(bitsCached < n){
            var c = this.stream.getByte();
            if (c === -1) {
                this.eof = true;
                return null;
            }
            cachedData = cachedData << 8 | c;
            bitsCached += 8;
        }
        this.bitsCached = bitsCached -= n;
        this.cachedData = cachedData;
        return cachedData >>> bitsCached & (1 << n) - 1;
    };
    return LZWStream;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$DecodeStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = LZWStream;
 //# sourceMappingURL=LZWStream.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/streams/RunLengthStream.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright 2012 Mozilla Foundation
 *
 * The RunLengthStream class contained in this file is a TypeScript port of the
 * JavaScript RunLengthStream class in Mozilla's pdf.js project, made available
 * under the Apache 2.0 open source license.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$DecodeStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/streams/DecodeStream.js [app-client] (ecmascript)");
;
;
var RunLengthStream = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(RunLengthStream, _super);
    function RunLengthStream(stream, maybeLength) {
        var _this = _super.call(this, maybeLength) || this;
        _this.stream = stream;
        return _this;
    }
    RunLengthStream.prototype.readBlock = function() {
        // The repeatHeader has following format. The first byte defines type of run
        // and amount of bytes to repeat/copy: n = 0 through 127 - copy next n bytes
        // (in addition to the second byte from the header), n = 129 through 255 -
        // duplicate the second byte from the header (257 - n) times, n = 128 - end.
        var repeatHeader = this.stream.getBytes(2);
        if (!repeatHeader || repeatHeader.length < 2 || repeatHeader[0] === 128) {
            this.eof = true;
            return;
        }
        var buffer;
        var bufferLength = this.bufferLength;
        var n = repeatHeader[0];
        if (n < 128) {
            // copy n bytes
            buffer = this.ensureBuffer(bufferLength + n + 1);
            buffer[bufferLength++] = repeatHeader[1];
            if (n > 0) {
                var source = this.stream.getBytes(n);
                buffer.set(source, bufferLength);
                bufferLength += n;
            }
        } else {
            n = 257 - n;
            var b = repeatHeader[1];
            buffer = this.ensureBuffer(bufferLength + n + 1);
            for(var i = 0; i < n; i++){
                buffer[bufferLength++] = b;
            }
        }
        this.bufferLength = bufferLength;
    };
    return RunLengthStream;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$DecodeStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = RunLengthStream;
 //# sourceMappingURL=RunLengthStream.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/streams/decode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodePDFRawStream",
    ()=>decodePDFRawStream
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFDict.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$Ascii85Stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/streams/Ascii85Stream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$AsciiHexStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/streams/AsciiHexStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$FlateStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/streams/FlateStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$LZWStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/streams/LZWStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$RunLengthStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/streams/RunLengthStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$Stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/streams/Stream.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
var decodeStream = function(stream, encoding, params) {
    if (encoding === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('FlateDecode')) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$FlateStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](stream);
    }
    if (encoding === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('LZWDecode')) {
        var earlyChange = 1;
        if (params instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
            var EarlyChange = params.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('EarlyChange'));
            if (EarlyChange instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
                earlyChange = EarlyChange.asNumber();
            }
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$LZWStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](stream, undefined, earlyChange);
    }
    if (encoding === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('ASCII85Decode')) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$Ascii85Stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](stream);
    }
    if (encoding === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('ASCIIHexDecode')) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$AsciiHexStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](stream);
    }
    if (encoding === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('RunLengthDecode')) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$RunLengthStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](stream);
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnsupportedEncodingError"](encoding.asString());
};
var decodePDFRawStream = function(_a) {
    var dict = _a.dict, contents = _a.contents;
    var stream = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$Stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](contents);
    var Filter = dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Filter'));
    var DecodeParms = dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('DecodeParms'));
    if (Filter instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
        stream = decodeStream(stream, Filter, DecodeParms);
    } else if (Filter instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
        for(var idx = 0, len = Filter.size(); idx < len; idx++){
            stream = decodeStream(stream, Filter.lookup(idx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]), DecodeParms && DecodeParms.lookupMaybe(idx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]));
        }
    } else if (!!Filter) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnexpectedObjectTypeError"]([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        ], Filter);
    }
    return stream;
}; //# sourceMappingURL=decode.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/PDFPageEmbedder.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRawStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRawStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$decode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/streams/decode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFContentStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFContentStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/CharCodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/arrays.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var fullPageBoundingBox = function(page) {
    var mediaBox = page.MediaBox();
    var width = mediaBox.lookup(2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).asNumber() - mediaBox.lookup(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).asNumber();
    var height = mediaBox.lookup(3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).asNumber() - mediaBox.lookup(1, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).asNumber();
    return {
        left: 0,
        bottom: 0,
        right: width,
        top: height
    };
};
// Returns the identity matrix, modified to position the content of the given
// bounding box at (0, 0).
var boundingBoxAdjustedMatrix = function(bb) {
    return [
        1,
        0,
        0,
        1,
        -bb.left,
        -bb.bottom
    ];
};
var PDFPageEmbedder = function() {
    function PDFPageEmbedder(page, boundingBox, transformationMatrix) {
        this.page = page;
        var bb = boundingBox !== null && boundingBox !== void 0 ? boundingBox : fullPageBoundingBox(page);
        this.width = bb.right - bb.left;
        this.height = bb.top - bb.bottom;
        this.boundingBox = bb;
        this.transformationMatrix = transformationMatrix !== null && transformationMatrix !== void 0 ? transformationMatrix : boundingBoxAdjustedMatrix(bb);
    }
    PDFPageEmbedder.for = function(page, boundingBox, transformationMatrix) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                return [
                    2 /*return*/ ,
                    new PDFPageEmbedder(page, boundingBox, transformationMatrix)
                ];
            });
        });
    };
    PDFPageEmbedder.prototype.embedIntoContext = function(context, ref) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var _a, Contents, Resources, decodedContents, _b, left, bottom, right, top, xObject;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_c) {
                _a = this.page.normalizedEntries(), Contents = _a.Contents, Resources = _a.Resources;
                if (!Contents) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MissingPageContentsEmbeddingError"]();
                decodedContents = this.decodeContents(Contents);
                _b = this.boundingBox, left = _b.left, bottom = _b.bottom, right = _b.right, top = _b.top;
                xObject = context.flateStream(decodedContents, {
                    Type: 'XObject',
                    Subtype: 'Form',
                    FormType: 1,
                    BBox: [
                        left,
                        bottom,
                        right,
                        top
                    ],
                    Matrix: this.transformationMatrix,
                    Resources: Resources
                });
                if (ref) {
                    context.assign(ref, xObject);
                    return [
                        2 /*return*/ ,
                        ref
                    ];
                } else {
                    return [
                        2 /*return*/ ,
                        context.register(xObject)
                    ];
                }
                //TURBOPACK unreachable
                ;
            });
        });
    };
    // `contents` is an array of streams which are merged to include them in the XObject.
    // This methods extracts each stream and joins them with a newline character.
    PDFPageEmbedder.prototype.decodeContents = function(contents) {
        var newline = Uint8Array.of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline);
        var decodedContents = [];
        for(var idx = 0, len = contents.size(); idx < len; idx++){
            var stream = contents.lookup(idx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
            var content = void 0;
            if (stream instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRawStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
                content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$decode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodePDFRawStream"])(stream).decode();
            } else if (stream instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFContentStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
                content = stream.getUnencodedContents();
            } else {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnrecognizedStreamTypeError"](stream);
            }
            decodedContents.push(content, newline);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeIntoTypedArray"].apply(void 0, decodedContents);
    };
    return PDFPageEmbedder;
}();
const __TURBOPACK__default__export__ = PDFPageEmbedder;
 //# sourceMappingURL=PDFPageEmbedder.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/interactive/ViewerPreferences.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Duplex",
    ()=>Duplex,
    "NonFullScreenPageMode",
    ()=>NonFullScreenPageMode,
    "PrintScaling",
    ()=>PrintScaling,
    "ReadingDirection",
    ()=>ReadingDirection,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFBool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFBool.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/validators.js [app-client] (ecmascript)");
;
;
;
;
;
var asEnum = function(rawValue, enumType) {
    if (rawValue === undefined) return undefined;
    return enumType[rawValue];
};
var NonFullScreenPageMode;
(function(NonFullScreenPageMode) {
    /**
     * After exiting FullScreen mode, neither the document outline nor thumbnail
     * images should be visible.
     */ NonFullScreenPageMode["UseNone"] = "UseNone";
    /** After exiting FullScreen mode, the document outline should be visible. */ NonFullScreenPageMode["UseOutlines"] = "UseOutlines";
    /** After exiting FullScreen mode, thumbnail images should be visible. */ NonFullScreenPageMode["UseThumbs"] = "UseThumbs";
    /**
     * After exiting FullScreen mode, the optional content group panel should be
     * visible.
     */ NonFullScreenPageMode["UseOC"] = "UseOC";
})(NonFullScreenPageMode || (NonFullScreenPageMode = {}));
var ReadingDirection;
(function(ReadingDirection) {
    /** The predominant reading order is Left to Right. */ ReadingDirection["L2R"] = "L2R";
    /**
     * The predominant reading order is Right to left (including vertical writing
     * systems, such as Chinese, Japanese and Korean).
     */ ReadingDirection["R2L"] = "R2L";
})(ReadingDirection || (ReadingDirection = {}));
var PrintScaling;
(function(PrintScaling) {
    /** No page scaling. */ PrintScaling["None"] = "None";
    /* Use the PDF reader's default print scaling. */ PrintScaling["AppDefault"] = "AppDefault";
})(PrintScaling || (PrintScaling = {}));
var Duplex;
(function(Duplex) {
    /** The PDF reader should print single-sided. */ Duplex["Simplex"] = "Simplex";
    /**
     * The PDF reader should print double sided and flip on the short edge of the
     * sheet.
     */ Duplex["DuplexFlipShortEdge"] = "DuplexFlipShortEdge";
    /**
     * The PDF reader should print double sided and flip on the long edge of the
     * sheet.
     */ Duplex["DuplexFlipLongEdge"] = "DuplexFlipLongEdge";
})(Duplex || (Duplex = {}));
var ViewerPreferences = function() {
    /** @ignore */ function ViewerPreferences(dict) {
        this.dict = dict;
    }
    ViewerPreferences.prototype.lookupBool = function(key) {
        var returnObj = this.dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(key));
        if (returnObj instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFBool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return returnObj;
        return undefined;
    };
    ViewerPreferences.prototype.lookupName = function(key) {
        var returnObj = this.dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(key));
        if (returnObj instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return returnObj;
        return undefined;
    };
    /** @ignore */ ViewerPreferences.prototype.HideToolbar = function() {
        return this.lookupBool('HideToolbar');
    };
    /** @ignore */ ViewerPreferences.prototype.HideMenubar = function() {
        return this.lookupBool('HideMenubar');
    };
    /** @ignore */ ViewerPreferences.prototype.HideWindowUI = function() {
        return this.lookupBool('HideWindowUI');
    };
    /** @ignore */ ViewerPreferences.prototype.FitWindow = function() {
        return this.lookupBool('FitWindow');
    };
    /** @ignore */ ViewerPreferences.prototype.CenterWindow = function() {
        return this.lookupBool('CenterWindow');
    };
    /** @ignore */ ViewerPreferences.prototype.DisplayDocTitle = function() {
        return this.lookupBool('DisplayDocTitle');
    };
    /** @ignore */ ViewerPreferences.prototype.NonFullScreenPageMode = function() {
        return this.lookupName('NonFullScreenPageMode');
    };
    /** @ignore */ ViewerPreferences.prototype.Direction = function() {
        return this.lookupName('Direction');
    };
    /** @ignore */ ViewerPreferences.prototype.PrintScaling = function() {
        return this.lookupName('PrintScaling');
    };
    /** @ignore */ ViewerPreferences.prototype.Duplex = function() {
        return this.lookupName('Duplex');
    };
    /** @ignore */ ViewerPreferences.prototype.PickTrayByPDFSize = function() {
        return this.lookupBool('PickTrayByPDFSize');
    };
    /** @ignore */ ViewerPreferences.prototype.PrintPageRange = function() {
        var PrintPageRange = this.dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('PrintPageRange'));
        if (PrintPageRange instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return PrintPageRange;
        return undefined;
    };
    /** @ignore */ ViewerPreferences.prototype.NumCopies = function() {
        var NumCopies = this.dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('NumCopies'));
        if (NumCopies instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return NumCopies;
        return undefined;
    };
    /**
     * Returns `true` if PDF readers should hide the toolbar menus when displaying
     * this document.
     * @returns Whether or not toolbars should be hidden.
     */ ViewerPreferences.prototype.getHideToolbar = function() {
        var _a, _b;
        return (_b = (_a = this.HideToolbar()) === null || _a === void 0 ? void 0 : _a.asBoolean()) !== null && _b !== void 0 ? _b : false;
    };
    /**
     * Returns `true` if PDF readers should hide the menu bar when displaying this
     * document.
     * @returns Whether or not the menu bar should be hidden.
     */ ViewerPreferences.prototype.getHideMenubar = function() {
        var _a, _b;
        return (_b = (_a = this.HideMenubar()) === null || _a === void 0 ? void 0 : _a.asBoolean()) !== null && _b !== void 0 ? _b : false;
    };
    /**
     * Returns `true` if PDF readers should hide the user interface elements in
     * the document's window (such as scroll bars and navigation controls),
     * leaving only the document's contents displayed.
     * @returns Whether or not user interface elements should be hidden.
     */ ViewerPreferences.prototype.getHideWindowUI = function() {
        var _a, _b;
        return (_b = (_a = this.HideWindowUI()) === null || _a === void 0 ? void 0 : _a.asBoolean()) !== null && _b !== void 0 ? _b : false;
    };
    /**
     * Returns `true` if PDF readers should resize the document's window to fit
     * the size of the first displayed page.
     * @returns Whether or not the window should be resized to fit.
     */ ViewerPreferences.prototype.getFitWindow = function() {
        var _a, _b;
        return (_b = (_a = this.FitWindow()) === null || _a === void 0 ? void 0 : _a.asBoolean()) !== null && _b !== void 0 ? _b : false;
    };
    /**
     * Returns `true` if PDF readers should position the document's window in the
     * center of the screen.
     * @returns Whether or not to center the document window.
     */ ViewerPreferences.prototype.getCenterWindow = function() {
        var _a, _b;
        return (_b = (_a = this.CenterWindow()) === null || _a === void 0 ? void 0 : _a.asBoolean()) !== null && _b !== void 0 ? _b : false;
    };
    /**
     * Returns `true` if the window's title bar should display the document
     * `Title`, taken from the document metadata (see [[PDFDocument.getTitle]]).
     * Returns `false` if the title bar should instead display the filename of the
     * PDF file.
     * @returns Whether to display the document title.
     */ ViewerPreferences.prototype.getDisplayDocTitle = function() {
        var _a, _b;
        return (_b = (_a = this.DisplayDocTitle()) === null || _a === void 0 ? void 0 : _a.asBoolean()) !== null && _b !== void 0 ? _b : false;
    };
    /**
     * Returns the page mode, which tells the PDF reader how to display the
     * document after exiting full-screen mode.
     * @returns The page mode after exiting full-screen mode.
     */ ViewerPreferences.prototype.getNonFullScreenPageMode = function() {
        var _a, _b;
        var mode = (_a = this.NonFullScreenPageMode()) === null || _a === void 0 ? void 0 : _a.decodeText();
        return (_b = asEnum(mode, NonFullScreenPageMode)) !== null && _b !== void 0 ? _b : NonFullScreenPageMode.UseNone;
    };
    /**
     * Returns the predominant reading order for text.
     * @returns The text reading order.
     */ ViewerPreferences.prototype.getReadingDirection = function() {
        var _a, _b;
        var direction = (_a = this.Direction()) === null || _a === void 0 ? void 0 : _a.decodeText();
        return (_b = asEnum(direction, ReadingDirection)) !== null && _b !== void 0 ? _b : ReadingDirection.L2R;
    };
    /**
     * Returns the page scaling option that the PDF reader should select when the
     * print dialog is displayed.
     * @returns The page scaling option.
     */ ViewerPreferences.prototype.getPrintScaling = function() {
        var _a, _b;
        var scaling = (_a = this.PrintScaling()) === null || _a === void 0 ? void 0 : _a.decodeText();
        return (_b = asEnum(scaling, PrintScaling)) !== null && _b !== void 0 ? _b : PrintScaling.AppDefault;
    };
    /**
     * Returns the paper handling option that should be used when printing the
     * file from the print dialog.
     * @returns The paper handling option.
     */ ViewerPreferences.prototype.getDuplex = function() {
        var _a;
        var duplex = (_a = this.Duplex()) === null || _a === void 0 ? void 0 : _a.decodeText();
        return asEnum(duplex, Duplex);
    };
    /**
     * Returns `true` if the PDF page size should be used to select the input
     * paper tray.
     * @returns Whether or not the PDF page size should be used to select the
     *          input paper tray.
     */ ViewerPreferences.prototype.getPickTrayByPDFSize = function() {
        var _a;
        return (_a = this.PickTrayByPDFSize()) === null || _a === void 0 ? void 0 : _a.asBoolean();
    };
    /**
     * Returns an array of page number ranges, which are the values used to
     * initialize the print dialog box when the file is printed. Each range
     * specifies the first (`start`) and last (`end`) pages in a sub-range of
     * pages to be printed. The first page of the PDF file is denoted by 0.
     * For example:
     * ```js
     * const viewerPrefs = pdfDoc.catalog.getOrCreateViewerPreferences()
     * const includesPage3 = viewerPrefs
     *   .getPrintRanges()
     *   .some(pr => pr.start =< 2 && pr.end >= 2)
     * if (includesPage3) console.log('printRange includes page 3')
     * ```
     * @returns An array of objects, each with the properties `start` and `end`,
     *          denoting page indices. If not, specified an empty array is
     *          returned.
     */ ViewerPreferences.prototype.getPrintPageRange = function() {
        var rng = this.PrintPageRange();
        if (!rng) return [];
        var pageRanges = [];
        for(var i = 0; i < rng.size(); i += 2){
            // Despite the spec clearly stating that "The first page of the PDF file
            // shall be donoted by 1", several test PDFs (spec 1.7) created in
            // Acrobat XI 11.0 and also read with Reader DC 2020.013 indicate this is
            // actually a 0 based index.
            var start = rng.lookup(i, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).asNumber();
            var end = rng.lookup(i + 1, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).asNumber();
            pageRanges.push({
                start: start,
                end: end
            });
        }
        return pageRanges;
    };
    /**
     * Returns the number of copies to be printed when the print dialog is opened
     * for this document.
     * @returns The default number of copies to be printed.
     */ ViewerPreferences.prototype.getNumCopies = function() {
        var _a, _b;
        return (_b = (_a = this.NumCopies()) === null || _a === void 0 ? void 0 : _a.asNumber()) !== null && _b !== void 0 ? _b : 1;
    };
    /**
     * Choose whether the PDF reader's toolbars should be hidden while the
     * document is active.
     * @param hideToolbar `true` if the toolbar should be hidden.
     */ ViewerPreferences.prototype.setHideToolbar = function(hideToolbar) {
        var HideToolbar = this.dict.context.obj(hideToolbar);
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('HideToolbar'), HideToolbar);
    };
    /**
     * Choose whether the PDF reader's menu bar should be hidden while the
     * document is active.
     * @param hideMenubar `true` if the menu bar should be hidden.
     */ ViewerPreferences.prototype.setHideMenubar = function(hideMenubar) {
        var HideMenubar = this.dict.context.obj(hideMenubar);
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('HideMenubar'), HideMenubar);
    };
    /**
     * Choose whether the PDF reader should hide user interface elements in the
     * document's window (such as scroll bars and navigation controls), leaving
     * only the document's contents displayed.
     * @param hideWindowUI `true` if the user interface elements should be hidden.
     */ ViewerPreferences.prototype.setHideWindowUI = function(hideWindowUI) {
        var HideWindowUI = this.dict.context.obj(hideWindowUI);
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('HideWindowUI'), HideWindowUI);
    };
    /**
     * Choose whether the PDF reader should resize the document's window to fit
     * the size of the first displayed page.
     * @param fitWindow `true` if the window should be resized.
     */ ViewerPreferences.prototype.setFitWindow = function(fitWindow) {
        var FitWindow = this.dict.context.obj(fitWindow);
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('FitWindow'), FitWindow);
    };
    /**
     * Choose whether the PDF reader should position the document's window in the
     * center of the screen.
     * @param centerWindow `true` if the window should be centered.
     */ ViewerPreferences.prototype.setCenterWindow = function(centerWindow) {
        var CenterWindow = this.dict.context.obj(centerWindow);
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('CenterWindow'), CenterWindow);
    };
    /**
     * Choose whether the window's title bar should display the document `Title`
     * taken from the document metadata (see [[PDFDocument.setTitle]]). If
     * `false`, the title bar should instead display the PDF filename.
     * @param displayTitle `true` if the document title should be displayed.
     */ ViewerPreferences.prototype.setDisplayDocTitle = function(displayTitle) {
        var DisplayDocTitle = this.dict.context.obj(displayTitle);
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('DisplayDocTitle'), DisplayDocTitle);
    };
    /**
     * Choose how the PDF reader should display the document upon exiting
     * full-screen mode. This entry is meaningful only if the value of the
     * `PageMode` entry in the document's [[PDFCatalog]] is `FullScreen`.
     *
     * For example:
     * ```js
     * import { PDFDocument, NonFullScreenPageMode, PDFName } from 'pdf-lib'
     *
     * const pdfDoc = await PDFDocument.create()
     *
     * // Set the PageMode
     * pdfDoc.catalog.set(PDFName.of('PageMode'),PDFName.of('FullScreen'))
     *
     * // Set what happens when full-screen is closed
     * const viewerPrefs = pdfDoc.catalog.getOrCreateViewerPreferences()
     * viewerPrefs.setNonFullScreenPageMode(NonFullScreenPageMode.UseOutlines)
     * ```
     *
     * @param nonFullScreenPageMode How the document should be displayed upon
     *                              exiting full screen mode.
     */ ViewerPreferences.prototype.setNonFullScreenPageMode = function(nonFullScreenPageMode) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsOneOf"])(nonFullScreenPageMode, 'nonFullScreenPageMode', NonFullScreenPageMode);
        var mode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(nonFullScreenPageMode);
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('NonFullScreenPageMode'), mode);
    };
    /**
     * Choose the predominant reading order for text.
     *
     * This entry has no direct effect on the document's contents or page
     * numbering, but may be used to determine the relative positioning of pages
     * when displayed side by side or printed n-up.
     *
     * For example:
     * ```js
     * import { PDFDocument, ReadingDirection } from 'pdf-lib'
     *
     * const pdfDoc = await PDFDocument.create()
     * const viewerPrefs = pdfDoc.catalog.getOrCreateViewerPreferences()
     * viewerPrefs.setReadingDirection(ReadingDirection.R2L)
     * ```
     *
     * @param readingDirection The reading order for text.
     */ ViewerPreferences.prototype.setReadingDirection = function(readingDirection) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsOneOf"])(readingDirection, 'readingDirection', ReadingDirection);
        var direction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(readingDirection);
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Direction'), direction);
    };
    /**
     * Choose the page scaling option that should be selected when a print dialog
     * is displayed for this document.
     *
     * For example:
     * ```js
     * import { PDFDocument, PrintScaling } from 'pdf-lib'
     *
     * const pdfDoc = await PDFDocument.create()
     * const viewerPrefs = pdfDoc.catalog.getOrCreateViewerPreferences()
     * viewerPrefs.setPrintScaling(PrintScaling.None)
     * ```
     *
     * @param printScaling The print scaling option.
     */ ViewerPreferences.prototype.setPrintScaling = function(printScaling) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsOneOf"])(printScaling, 'printScaling', PrintScaling);
        var scaling = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(printScaling);
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('PrintScaling'), scaling);
    };
    /**
     * Choose the paper handling option that should be selected by default in the
     * print dialog.
     *
     * For example:
     * ```js
     * import { PDFDocument, Duplex } from 'pdf-lib'
     *
     * const pdfDoc = await PDFDocument.create()
     * const viewerPrefs = pdfDoc.catalog.getOrCreateViewerPreferences()
     * viewerPrefs.setDuplex(Duplex.DuplexFlipShortEdge)
     * ```
     *
     * @param duplex The double or single sided printing option.
     */ ViewerPreferences.prototype.setDuplex = function(duplex) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsOneOf"])(duplex, 'duplex', Duplex);
        var dup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(duplex);
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Duplex'), dup);
    };
    /**
     * Choose whether the PDF document's page size should be used to select the
     * input paper tray when printing. This setting influences only the preset
     * values used to populate the print dialog presented by a PDF reader.
     *
     * If PickTrayByPDFSize is true, the check box in the print dialog associated
     * with input paper tray should be checked. This setting has no effect on
     * operating systems that do not provide the ability to pick the input tray
     * by size.
     *
     * @param pickTrayByPDFSize `true` if the document's page size should be used
     *                          to select the input paper tray.
     */ ViewerPreferences.prototype.setPickTrayByPDFSize = function(pickTrayByPDFSize) {
        var PickTrayByPDFSize = this.dict.context.obj(pickTrayByPDFSize);
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('PickTrayByPDFSize'), PickTrayByPDFSize);
    };
    /**
     * Choose the page numbers used to initialize the print dialog box when the
     * file is printed. The first page of the PDF file is denoted by 0.
     *
     * For example:
     * ```js
     * import { PDFDocument } from 'pdf-lib'
     *
     * const pdfDoc = await PDFDocument.create()
     * const viewerPrefs = pdfDoc.catalog.getOrCreateViewerPreferences()
     *
     * // We can set the default print range to only the first page
     * viewerPrefs.setPrintPageRange({ start: 0, end: 0 })
     *
     * // Or we can supply noncontiguous ranges (e.g. pages 1, 3, and 5-7)
     * viewerPrefs.setPrintPageRange([
     *   { start: 0, end: 0 },
     *   { start: 2, end: 2 },
     *   { start: 4, end: 6 },
     * ])
     * ```
     *
     * @param printPageRange An object or array of objects, each with the
     *                       properties `start` and `end`, denoting a range of
     *                       page indices.
     */ ViewerPreferences.prototype.setPrintPageRange = function(printPageRange) {
        if (!Array.isArray(printPageRange)) printPageRange = [
            printPageRange
        ];
        var flatRange = [];
        for(var idx = 0, len = printPageRange.length; idx < len; idx++){
            flatRange.push(printPageRange[idx].start);
            flatRange.push(printPageRange[idx].end);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEachIs"])(flatRange, 'printPageRange', [
            'number'
        ]);
        var pageRanges = this.dict.context.obj(flatRange);
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('PrintPageRange'), pageRanges);
    };
    /**
     * Choose the default number of copies to be printed when the print dialog is
     * opened for this file.
     * @param numCopies The default number of copies.
     */ ViewerPreferences.prototype.setNumCopies = function(numCopies) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRange"])(numCopies, 'numCopies', 1, Number.MAX_VALUE);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertInteger"])(numCopies, 'numCopies');
        var NumCopies = this.dict.context.obj(numCopies);
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('NumCopies'), NumCopies);
    };
    /** @ignore */ ViewerPreferences.fromDict = function(dict) {
        return new ViewerPreferences(dict);
    };
    /** @ignore */ ViewerPreferences.create = function(context) {
        var dict = context.obj({});
        return new ViewerPreferences(dict);
    };
    return ViewerPreferences;
}();
const __TURBOPACK__default__export__ = ViewerPreferences;
 //# sourceMappingURL=ViewerPreferences.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroField.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFDict.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFHexString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/strings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
// Examples:
//   `/Helv 12 Tf` -> ['Helv', '12']
//   `/HeBo 8.00 Tf` -> ['HeBo', '8.00']
//   `/HeBo Tf` -> ['HeBo', undefined]
var tfRegex = /\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+Tf/;
var PDFAcroField = function() {
    function PDFAcroField(dict, ref) {
        this.dict = dict;
        this.ref = ref;
    }
    PDFAcroField.prototype.T = function() {
        return this.dict.lookupMaybe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('T'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    };
    PDFAcroField.prototype.Ff = function() {
        var numberOrRef = this.getInheritableAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Ff'));
        return this.dict.context.lookupMaybe(numberOrRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    };
    PDFAcroField.prototype.V = function() {
        var valueOrRef = this.getInheritableAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('V'));
        return this.dict.context.lookup(valueOrRef);
    };
    PDFAcroField.prototype.Kids = function() {
        return this.dict.lookupMaybe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Kids'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    };
    // Parent(): PDFDict | undefined {
    //   return this.dict.lookupMaybe(PDFName.of('Parent'), PDFDict);
    // }
    PDFAcroField.prototype.DA = function() {
        var da = this.dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('DA'));
        if (da instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] || da instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return da;
        return undefined;
    };
    PDFAcroField.prototype.setKids = function(kids) {
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Kids'), this.dict.context.obj(kids));
    };
    PDFAcroField.prototype.getParent = function() {
        // const parent = this.Parent();
        // if (!parent) return undefined;
        // return new PDFAcroField(parent);
        var parentRef = this.dict.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Parent'));
        if (parentRef instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
            var parent_1 = this.dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Parent'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
            return new PDFAcroField(parent_1, parentRef);
        }
        return undefined;
    };
    PDFAcroField.prototype.setParent = function(parent) {
        if (!parent) this.dict.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Parent'));
        else this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Parent'), parent);
    };
    PDFAcroField.prototype.getFullyQualifiedName = function() {
        var parent = this.getParent();
        if (!parent) return this.getPartialName();
        return parent.getFullyQualifiedName() + "." + this.getPartialName();
    };
    PDFAcroField.prototype.getPartialName = function() {
        var _a;
        return (_a = this.T()) === null || _a === void 0 ? void 0 : _a.decodeText();
    };
    PDFAcroField.prototype.setPartialName = function(partialName) {
        if (!partialName) this.dict.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('T'));
        else this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('T'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromText(partialName));
    };
    PDFAcroField.prototype.setDefaultAppearance = function(appearance) {
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('DA'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(appearance));
    };
    PDFAcroField.prototype.getDefaultAppearance = function() {
        var DA = this.DA();
        if (DA instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
            return DA.decodeText();
        }
        return DA === null || DA === void 0 ? void 0 : DA.asString();
    };
    PDFAcroField.prototype.setFontSize = function(fontSize) {
        var _a;
        var name = (_a = this.getFullyQualifiedName()) !== null && _a !== void 0 ? _a : '';
        var da = this.getDefaultAppearance();
        if (!da) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MissingDAEntryError"](name);
        var daMatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findLastMatch"])(da, tfRegex);
        if (!daMatch.match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MissingTfOperatorError"](name);
        var daStart = da.slice(0, daMatch.pos - daMatch.match[0].length);
        var daEnd = daMatch.pos <= da.length ? da.slice(daMatch.pos) : '';
        var fontName = daMatch.match[1];
        var modifiedDa = daStart + " /" + fontName + " " + fontSize + " Tf " + daEnd;
        this.setDefaultAppearance(modifiedDa);
    };
    PDFAcroField.prototype.getFlags = function() {
        var _a, _b;
        return (_b = (_a = this.Ff()) === null || _a === void 0 ? void 0 : _a.asNumber()) !== null && _b !== void 0 ? _b : 0;
    };
    PDFAcroField.prototype.setFlags = function(flags) {
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Ff'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(flags));
    };
    PDFAcroField.prototype.hasFlag = function(flag) {
        var flags = this.getFlags();
        return (flags & flag) !== 0;
    };
    PDFAcroField.prototype.setFlag = function(flag) {
        var flags = this.getFlags();
        this.setFlags(flags | flag);
    };
    PDFAcroField.prototype.clearFlag = function(flag) {
        var flags = this.getFlags();
        this.setFlags(flags & ~flag);
    };
    PDFAcroField.prototype.setFlagTo = function(flag, enable) {
        if (enable) this.setFlag(flag);
        else this.clearFlag(flag);
    };
    PDFAcroField.prototype.getInheritableAttribute = function(name) {
        var attribute;
        this.ascend(function(node) {
            if (!attribute) attribute = node.dict.get(name);
        });
        return attribute;
    };
    PDFAcroField.prototype.ascend = function(visitor) {
        visitor(this);
        var parent = this.getParent();
        if (parent) parent.ascend(visitor);
    };
    return PDFAcroField;
}();
const __TURBOPACK__default__export__ = PDFAcroField;
 //# sourceMappingURL=PDFAcroField.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/annotation/BorderStyle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNumber.js [app-client] (ecmascript)");
;
;
// TODO: Also handle the `/S` and `/D` entries
var BorderStyle = function() {
    function BorderStyle(dict) {
        this.dict = dict;
    }
    BorderStyle.prototype.W = function() {
        var W = this.dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('W'));
        if (W instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return W;
        return undefined;
    };
    BorderStyle.prototype.getWidth = function() {
        var _a, _b;
        return (_b = (_a = this.W()) === null || _a === void 0 ? void 0 : _a.asNumber()) !== null && _b !== void 0 ? _b : 1;
    };
    BorderStyle.prototype.setWidth = function(width) {
        var W = this.dict.context.obj(width);
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('W'), W);
    };
    BorderStyle.fromDict = function(dict) {
        return new BorderStyle(dict);
    };
    return BorderStyle;
}();
const __TURBOPACK__default__export__ = BorderStyle;
 //# sourceMappingURL=BorderStyle.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/annotation/PDFAnnotation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFDict.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNumber.js [app-client] (ecmascript)");
;
;
;
;
;
;
var PDFAnnotation = function() {
    function PDFAnnotation(dict) {
        this.dict = dict;
    }
    // This is technically required by the PDF spec
    PDFAnnotation.prototype.Rect = function() {
        return this.dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Rect'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    };
    PDFAnnotation.prototype.AP = function() {
        return this.dict.lookupMaybe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('AP'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    };
    PDFAnnotation.prototype.F = function() {
        var numberOrRef = this.dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('F'));
        return this.dict.context.lookupMaybe(numberOrRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    };
    PDFAnnotation.prototype.getRectangle = function() {
        var _a;
        var Rect = this.Rect();
        return (_a = Rect === null || Rect === void 0 ? void 0 : Rect.asRectangle()) !== null && _a !== void 0 ? _a : {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
    };
    PDFAnnotation.prototype.setRectangle = function(rect) {
        var x = rect.x, y = rect.y, width = rect.width, height = rect.height;
        var Rect = this.dict.context.obj([
            x,
            y,
            x + width,
            y + height
        ]);
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Rect'), Rect);
    };
    PDFAnnotation.prototype.getAppearanceState = function() {
        var AS = this.dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('AS'));
        if (AS instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return AS;
        return undefined;
    };
    PDFAnnotation.prototype.setAppearanceState = function(state) {
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('AS'), state);
    };
    PDFAnnotation.prototype.setAppearances = function(appearances) {
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('AP'), appearances);
    };
    PDFAnnotation.prototype.ensureAP = function() {
        var AP = this.AP();
        if (!AP) {
            AP = this.dict.context.obj({});
            this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('AP'), AP);
        }
        return AP;
    };
    PDFAnnotation.prototype.getNormalAppearance = function() {
        var AP = this.ensureAP();
        var N = AP.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('N'));
        if (N instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] || N instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return N;
        throw new Error("Unexpected N type: " + (N === null || N === void 0 ? void 0 : N.constructor.name));
    };
    /** @param appearance A PDFDict or PDFStream (direct or ref) */ PDFAnnotation.prototype.setNormalAppearance = function(appearance) {
        var AP = this.ensureAP();
        AP.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('N'), appearance);
    };
    /** @param appearance A PDFDict or PDFStream (direct or ref) */ PDFAnnotation.prototype.setRolloverAppearance = function(appearance) {
        var AP = this.ensureAP();
        AP.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('R'), appearance);
    };
    /** @param appearance A PDFDict or PDFStream (direct or ref) */ PDFAnnotation.prototype.setDownAppearance = function(appearance) {
        var AP = this.ensureAP();
        AP.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('D'), appearance);
    };
    PDFAnnotation.prototype.removeRolloverAppearance = function() {
        var AP = this.AP();
        AP === null || AP === void 0 ? void 0 : AP.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('R'));
    };
    PDFAnnotation.prototype.removeDownAppearance = function() {
        var AP = this.AP();
        AP === null || AP === void 0 ? void 0 : AP.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('D'));
    };
    PDFAnnotation.prototype.getAppearances = function() {
        var AP = this.AP();
        if (!AP) return undefined;
        var N = AP.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('N'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
        var R = AP.lookupMaybe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('R'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
        var D = AP.lookupMaybe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('D'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
        return {
            normal: N,
            rollover: R,
            down: D
        };
    };
    PDFAnnotation.prototype.getFlags = function() {
        var _a, _b;
        return (_b = (_a = this.F()) === null || _a === void 0 ? void 0 : _a.asNumber()) !== null && _b !== void 0 ? _b : 0;
    };
    PDFAnnotation.prototype.setFlags = function(flags) {
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('F'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(flags));
    };
    PDFAnnotation.prototype.hasFlag = function(flag) {
        var flags = this.getFlags();
        return (flags & flag) !== 0;
    };
    PDFAnnotation.prototype.setFlag = function(flag) {
        var flags = this.getFlags();
        this.setFlags(flags | flag);
    };
    PDFAnnotation.prototype.clearFlag = function(flag) {
        var flags = this.getFlags();
        this.setFlags(flags & ~flag);
    };
    PDFAnnotation.prototype.setFlagTo = function(flag, enable) {
        if (enable) this.setFlag(flag);
        else this.clearFlag(flag);
    };
    PDFAnnotation.fromDict = function(dict) {
        return new PDFAnnotation(dict);
    };
    return PDFAnnotation;
}();
const __TURBOPACK__default__export__ = PDFAnnotation;
 //# sourceMappingURL=PDFAnnotation.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/annotation/AppearanceCharacteristics.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFHexString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFString.js [app-client] (ecmascript)");
;
;
;
;
;
var AppearanceCharacteristics = function() {
    function AppearanceCharacteristics(dict) {
        this.dict = dict;
    }
    AppearanceCharacteristics.prototype.R = function() {
        var R = this.dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('R'));
        if (R instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return R;
        return undefined;
    };
    AppearanceCharacteristics.prototype.BC = function() {
        var BC = this.dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('BC'));
        if (BC instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return BC;
        return undefined;
    };
    AppearanceCharacteristics.prototype.BG = function() {
        var BG = this.dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('BG'));
        if (BG instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return BG;
        return undefined;
    };
    AppearanceCharacteristics.prototype.CA = function() {
        var CA = this.dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('CA'));
        if (CA instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] || CA instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return CA;
        return undefined;
    };
    AppearanceCharacteristics.prototype.RC = function() {
        var RC = this.dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('RC'));
        if (RC instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] || RC instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return RC;
        return undefined;
    };
    AppearanceCharacteristics.prototype.AC = function() {
        var AC = this.dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('AC'));
        if (AC instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] || AC instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return AC;
        return undefined;
    };
    AppearanceCharacteristics.prototype.getRotation = function() {
        var _a;
        return (_a = this.R()) === null || _a === void 0 ? void 0 : _a.asNumber();
    };
    AppearanceCharacteristics.prototype.getBorderColor = function() {
        var BC = this.BC();
        if (!BC) return undefined;
        var components = [];
        for(var idx = 0, len = BC === null || BC === void 0 ? void 0 : BC.size(); idx < len; idx++){
            var component = BC.get(idx);
            if (component instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) components.push(component.asNumber());
        }
        return components;
    };
    AppearanceCharacteristics.prototype.getBackgroundColor = function() {
        var BG = this.BG();
        if (!BG) return undefined;
        var components = [];
        for(var idx = 0, len = BG === null || BG === void 0 ? void 0 : BG.size(); idx < len; idx++){
            var component = BG.get(idx);
            if (component instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) components.push(component.asNumber());
        }
        return components;
    };
    AppearanceCharacteristics.prototype.getCaptions = function() {
        var CA = this.CA();
        var RC = this.RC();
        var AC = this.AC();
        return {
            normal: CA === null || CA === void 0 ? void 0 : CA.decodeText(),
            rollover: RC === null || RC === void 0 ? void 0 : RC.decodeText(),
            down: AC === null || AC === void 0 ? void 0 : AC.decodeText()
        };
    };
    AppearanceCharacteristics.prototype.setRotation = function(rotation) {
        var R = this.dict.context.obj(rotation);
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('R'), R);
    };
    AppearanceCharacteristics.prototype.setBorderColor = function(color) {
        var BC = this.dict.context.obj(color);
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('BC'), BC);
    };
    AppearanceCharacteristics.prototype.setBackgroundColor = function(color) {
        var BG = this.dict.context.obj(color);
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('BG'), BG);
    };
    AppearanceCharacteristics.prototype.setCaptions = function(captions) {
        var CA = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromText(captions.normal);
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('CA'), CA);
        if (captions.rollover) {
            var RC = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromText(captions.rollover);
            this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('RC'), RC);
        } else {
            this.dict.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('RC'));
        }
        if (captions.down) {
            var AC = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromText(captions.down);
            this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('AC'), AC);
        } else {
            this.dict.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('AC'));
        }
    };
    AppearanceCharacteristics.fromDict = function(dict) {
        return new AppearanceCharacteristics(dict);
    };
    return AppearanceCharacteristics;
}();
const __TURBOPACK__default__export__ = AppearanceCharacteristics;
 //# sourceMappingURL=AppearanceCharacteristics.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/annotation/PDFWidgetAnnotation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFDict.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFHexString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$BorderStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/annotation/BorderStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$PDFAnnotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/annotation/PDFAnnotation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$AppearanceCharacteristics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/annotation/AppearanceCharacteristics.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var PDFWidgetAnnotation = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFWidgetAnnotation, _super);
    function PDFWidgetAnnotation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PDFWidgetAnnotation.prototype.MK = function() {
        var MK = this.dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('MK'));
        if (MK instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return MK;
        return undefined;
    };
    PDFWidgetAnnotation.prototype.BS = function() {
        var BS = this.dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('BS'));
        if (BS instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return BS;
        return undefined;
    };
    PDFWidgetAnnotation.prototype.DA = function() {
        var da = this.dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('DA'));
        if (da instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] || da instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return da;
        return undefined;
    };
    PDFWidgetAnnotation.prototype.P = function() {
        var P = this.dict.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('P'));
        if (P instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return P;
        return undefined;
    };
    PDFWidgetAnnotation.prototype.setP = function(page) {
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('P'), page);
    };
    PDFWidgetAnnotation.prototype.setDefaultAppearance = function(appearance) {
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('DA'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(appearance));
    };
    PDFWidgetAnnotation.prototype.getDefaultAppearance = function() {
        var DA = this.DA();
        if (DA instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
            return DA.decodeText();
        }
        return DA === null || DA === void 0 ? void 0 : DA.asString();
    };
    PDFWidgetAnnotation.prototype.getAppearanceCharacteristics = function() {
        var MK = this.MK();
        if (MK) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$AppearanceCharacteristics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromDict(MK);
        return undefined;
    };
    PDFWidgetAnnotation.prototype.getOrCreateAppearanceCharacteristics = function() {
        var MK = this.MK();
        if (MK) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$AppearanceCharacteristics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromDict(MK);
        var ac = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$AppearanceCharacteristics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromDict(this.dict.context.obj({}));
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('MK'), ac.dict);
        return ac;
    };
    PDFWidgetAnnotation.prototype.getBorderStyle = function() {
        var BS = this.BS();
        if (BS) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$BorderStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromDict(BS);
        return undefined;
    };
    PDFWidgetAnnotation.prototype.getOrCreateBorderStyle = function() {
        var BS = this.BS();
        if (BS) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$BorderStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromDict(BS);
        var bs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$BorderStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromDict(this.dict.context.obj({}));
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('BS'), bs.dict);
        return bs;
    };
    PDFWidgetAnnotation.prototype.getOnValue = function() {
        var _a;
        var normal = (_a = this.getAppearances()) === null || _a === void 0 ? void 0 : _a.normal;
        if (normal instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
            var keys = normal.keys();
            for(var idx = 0, len = keys.length; idx < len; idx++){
                var key = keys[idx];
                if (key !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Off')) return key;
            }
        }
        return undefined;
    };
    PDFWidgetAnnotation.fromDict = function(dict) {
        return new PDFWidgetAnnotation(dict);
    };
    PDFWidgetAnnotation.create = function(context, parent) {
        var dict = context.obj({
            Type: 'Annot',
            Subtype: 'Widget',
            Rect: [
                0,
                0,
                0,
                0
            ],
            Parent: parent
        });
        return new PDFWidgetAnnotation(dict);
    };
    return PDFWidgetAnnotation;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$PDFAnnotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFWidgetAnnotation;
 //# sourceMappingURL=PDFWidgetAnnotation.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroTerminal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFDict.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$PDFWidgetAnnotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/annotation/PDFWidgetAnnotation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
;
;
;
;
;
;
var PDFAcroTerminal = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFAcroTerminal, _super);
    function PDFAcroTerminal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PDFAcroTerminal.prototype.FT = function() {
        var nameOrRef = this.getInheritableAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('FT'));
        return this.dict.context.lookup(nameOrRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    };
    PDFAcroTerminal.prototype.getWidgets = function() {
        var kidDicts = this.Kids();
        // This field is itself a widget
        if (!kidDicts) return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$PDFWidgetAnnotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromDict(this.dict)
        ];
        // This field's kids are its widgets
        var widgets = new Array(kidDicts.size());
        for(var idx = 0, len = kidDicts.size(); idx < len; idx++){
            var dict = kidDicts.lookup(idx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
            widgets[idx] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$PDFWidgetAnnotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromDict(dict);
        }
        return widgets;
    };
    PDFAcroTerminal.prototype.addWidget = function(ref) {
        var Kids = this.normalizedEntries().Kids;
        Kids.push(ref);
    };
    PDFAcroTerminal.prototype.removeWidget = function(idx) {
        var kidDicts = this.Kids();
        if (!kidDicts) {
            // This field is itself a widget
            if (idx !== 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IndexOutOfBoundsError"](idx, 0, 0);
            this.setKids([]);
        } else {
            // This field's kids are its widgets
            if (idx < 0 || idx > kidDicts.size()) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IndexOutOfBoundsError"](idx, 0, kidDicts.size());
            }
            kidDicts.remove(idx);
        }
    };
    PDFAcroTerminal.prototype.normalizedEntries = function() {
        var Kids = this.Kids();
        // If this field is itself a widget (because it was only rendered once in
        // the document, so the field and widget properties were merged) then we
        // add itself to the `Kids` array. The alternative would be to try
        // splitting apart the widget properties and creating a separate object
        // for them.
        if (!Kids) {
            Kids = this.dict.context.obj([
                this.ref
            ]);
            this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Kids'), Kids);
        }
        return {
            Kids: Kids
        };
    };
    PDFAcroTerminal.fromDict = function(dict, ref) {
        return new PDFAcroTerminal(dict, ref);
    };
    return PDFAcroTerminal;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFAcroTerminal;
 //# sourceMappingURL=PDFAcroTerminal.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFHexString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroTerminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroTerminal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var PDFAcroButton = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFAcroButton, _super);
    function PDFAcroButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PDFAcroButton.prototype.Opt = function() {
        return this.dict.lookupMaybe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Opt'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    };
    PDFAcroButton.prototype.setOpt = function(opt) {
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Opt'), this.dict.context.obj(opt));
    };
    PDFAcroButton.prototype.getExportValues = function() {
        var opt = this.Opt();
        if (!opt) return undefined;
        if (opt instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] || opt instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
            return [
                opt
            ];
        }
        var values = [];
        for(var idx = 0, len = opt.size(); idx < len; idx++){
            var value = opt.lookup(idx);
            if (value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] || value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
                values.push(value);
            }
        }
        return values;
    };
    PDFAcroButton.prototype.removeExportValue = function(idx) {
        var opt = this.Opt();
        if (!opt) return;
        if (opt instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] || opt instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
            if (idx !== 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IndexOutOfBoundsError"](idx, 0, 0);
            this.setOpt([]);
        } else {
            if (idx < 0 || idx > opt.size()) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IndexOutOfBoundsError"](idx, 0, opt.size());
            }
            opt.remove(idx);
        }
    };
    // Enforce use use of /Opt even if it isn't strictly necessary
    PDFAcroButton.prototype.normalizeExportValues = function() {
        var _a, _b, _c, _d;
        var exportValues = (_a = this.getExportValues()) !== null && _a !== void 0 ? _a : [];
        var Opt = [];
        var widgets = this.getWidgets();
        for(var idx = 0, len = widgets.length; idx < len; idx++){
            var widget = widgets[idx];
            var exportVal = (_b = exportValues[idx]) !== null && _b !== void 0 ? _b : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromText((_d = (_c = widget.getOnValue()) === null || _c === void 0 ? void 0 : _c.decodeText()) !== null && _d !== void 0 ? _d : '');
            Opt.push(exportVal);
        }
        this.setOpt(Opt);
    };
    /**
     * Reuses existing opt if one exists with the same value (assuming
     * `useExistingIdx` is `true`). Returns index of existing (or new) opt.
     */ PDFAcroButton.prototype.addOpt = function(opt, useExistingOptIdx) {
        var _a;
        this.normalizeExportValues();
        var optText = opt.decodeText();
        var existingIdx;
        if (useExistingOptIdx) {
            var exportValues = (_a = this.getExportValues()) !== null && _a !== void 0 ? _a : [];
            for(var idx = 0, len = exportValues.length; idx < len; idx++){
                var exportVal = exportValues[idx];
                if (exportVal.decodeText() === optText) existingIdx = idx;
            }
        }
        var Opt = this.Opt();
        Opt.push(opt);
        return existingIdx !== null && existingIdx !== void 0 ? existingIdx : Opt.size() - 1;
    };
    PDFAcroButton.prototype.addWidgetWithOpt = function(widget, opt, useExistingOptIdx) {
        var optIdx = this.addOpt(opt, useExistingOptIdx);
        var apStateValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(String(optIdx));
        this.addWidget(widget);
        return apStateValue;
    };
    return PDFAcroButton;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroTerminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFAcroButton;
 //# sourceMappingURL=PDFAcroButton.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroCheckBox.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
;
;
;
;
var PDFAcroCheckBox = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFAcroCheckBox, _super);
    function PDFAcroCheckBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PDFAcroCheckBox.prototype.setValue = function(value) {
        var _a;
        var onValue = (_a = this.getOnValue()) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Yes');
        if (value !== onValue && value !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Off')) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAcroFieldValueError"]();
        }
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('V'), value);
        var widgets = this.getWidgets();
        for(var idx = 0, len = widgets.length; idx < len; idx++){
            var widget = widgets[idx];
            var state = widget.getOnValue() === value ? value : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Off');
            widget.setAppearanceState(state);
        }
    };
    PDFAcroCheckBox.prototype.getValue = function() {
        var v = this.V();
        if (v instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return v;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Off');
    };
    PDFAcroCheckBox.prototype.getOnValue = function() {
        var widget = this.getWidgets()[0];
        return widget === null || widget === void 0 ? void 0 : widget.getOnValue();
    };
    PDFAcroCheckBox.fromDict = function(dict, ref) {
        return new PDFAcroCheckBox(dict, ref);
    };
    PDFAcroCheckBox.create = function(context) {
        var dict = context.obj({
            FT: 'Btn',
            Kids: []
        });
        var ref = context.register(dict);
        return new PDFAcroCheckBox(dict, ref);
    };
    return PDFAcroCheckBox;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFAcroCheckBox;
 //# sourceMappingURL=PDFAcroCheckBox.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/flags.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AcroButtonFlags",
    ()=>AcroButtonFlags,
    "AcroChoiceFlags",
    ()=>AcroChoiceFlags,
    "AcroFieldFlags",
    ()=>AcroFieldFlags,
    "AcroTextFlags",
    ()=>AcroTextFlags
]);
var flag = function(bitIndex) {
    return 1 << bitIndex;
};
var AcroFieldFlags;
(function(AcroFieldFlags) {
    /**
     * If set, the user may not change the value of the field. Any associated
     * widget annotations will not interact with the user; that is, they will not
     * respond to mouse clicks or change their appearance in response to mouse
     * motions. This flag is useful for fields whose values are computed or
     * imported from a database.
     */ AcroFieldFlags[AcroFieldFlags["ReadOnly"] = flag(1 - 1)] = "ReadOnly";
    /**
     * If set, the field shall have a value at the time it is exported by a
     * submit-form action (see 12.7.5.2, "Submit-Form Action").
     */ AcroFieldFlags[AcroFieldFlags["Required"] = flag(2 - 1)] = "Required";
    /**
     * If set, the field shall not be exported by a submit-form action
     * (see 12.7.5.2, "Submit-Form Action").
     */ AcroFieldFlags[AcroFieldFlags["NoExport"] = flag(3 - 1)] = "NoExport";
})(AcroFieldFlags || (AcroFieldFlags = {}));
var AcroButtonFlags;
(function(AcroButtonFlags) {
    /**
     * (Radio buttons only) If set, exactly one radio button shall be selected at
     * all times; selecting the currently selected button has no effect. If clear,
     * clicking the selected button deselects it, leaving no button selected.
     */ AcroButtonFlags[AcroButtonFlags["NoToggleToOff"] = flag(15 - 1)] = "NoToggleToOff";
    /**
     * If set, the field is a set of radio buttons; if clear, the field is a check
     * box. This flag may be set only if the Pushbutton flag is clear.
     */ AcroButtonFlags[AcroButtonFlags["Radio"] = flag(16 - 1)] = "Radio";
    /**
     * If set, the field is a pushbutton that does not retain a permanent value.
     */ AcroButtonFlags[AcroButtonFlags["PushButton"] = flag(17 - 1)] = "PushButton";
    /**
     * If set, a group of radio buttons within a radio button field that use the
     * same value for the on state will turn on and off in unison; that is if one
     * is checked, they are all checked. If clear, the buttons are mutually
     * exclusive (the same behavior as HTML radio buttons).
     */ AcroButtonFlags[AcroButtonFlags["RadiosInUnison"] = flag(26 - 1)] = "RadiosInUnison";
})(AcroButtonFlags || (AcroButtonFlags = {}));
var AcroTextFlags;
(function(AcroTextFlags) {
    /**
     * If set, the field may contain multiple lines of text; if clear, the field's
     * text shall be restricted to a single line.
     */ AcroTextFlags[AcroTextFlags["Multiline"] = flag(13 - 1)] = "Multiline";
    /**
     * If set, the field is intended for entering a secure password that should
     * not be echoed visibly to the screen. Characters typed from the keyboard
     * shall instead be echoed in some unreadable form, such as asterisks or
     * bullet characters.
     * > NOTE   To protect password confidentiality, readers should never store
     * >        the value of the text field in the PDF file if this flag is set.
     */ AcroTextFlags[AcroTextFlags["Password"] = flag(14 - 1)] = "Password";
    /**
     * If set, the text entered in the field represents the pathname of a file
     * whose contents shall be submitted as the value of the field.
     */ AcroTextFlags[AcroTextFlags["FileSelect"] = flag(21 - 1)] = "FileSelect";
    /**
     * If set, text entered in the field shall not be spell-checked.
     */ AcroTextFlags[AcroTextFlags["DoNotSpellCheck"] = flag(23 - 1)] = "DoNotSpellCheck";
    /**
     * If set, the field shall not scroll (horizontally for single-line fields,
     * vertically for multiple-line fields) to accommodate more text than fits
     * within its annotation rectangle. Once the field is full, no further text
     * shall be accepted for interactive form filling; for non-interactive form
     * filling, the filler should take care not to add more character than will
     * visibly fit in the defined area.
     */ AcroTextFlags[AcroTextFlags["DoNotScroll"] = flag(24 - 1)] = "DoNotScroll";
    /**
     * May be set only if the MaxLen entry is present in the text field dictionary
     * (see Table 229) and if the Multiline, Password, and FileSelect flags are
     * clear. If set, the field shall be automatically divided into as many
     * equally spaced positions, or combs, as the value of MaxLen, and the text
     * is laid out into those combs.
     */ AcroTextFlags[AcroTextFlags["Comb"] = flag(25 - 1)] = "Comb";
    /**
     * If set, the value of this field shall be a rich text string
     * (see 12.7.3.4, "Rich Text Strings"). If the field has a value, the RV
     * entry of the field dictionary (Table 222) shall specify the rich text
     * string.
     */ AcroTextFlags[AcroTextFlags["RichText"] = flag(26 - 1)] = "RichText";
})(AcroTextFlags || (AcroTextFlags = {}));
var AcroChoiceFlags;
(function(AcroChoiceFlags) {
    /**
     * If set, the field is a combo box; if clear, the field is a list box.
     */ AcroChoiceFlags[AcroChoiceFlags["Combo"] = flag(18 - 1)] = "Combo";
    /**
     * If set, the combo box shall include an editable text box as well as a
     * drop-down list; if clear, it shall include only a drop-down list. This
     * flag shall be used only if the Combo flag is set.
     */ AcroChoiceFlags[AcroChoiceFlags["Edit"] = flag(19 - 1)] = "Edit";
    /**
     * If set, the field's option items shall be sorted alphabetically. This flag
     * is intended for use by writers, not by readers. Conforming readers shall
     * display the options in the order in which they occur in the Opt array
     * (see Table 231).
     */ AcroChoiceFlags[AcroChoiceFlags["Sort"] = flag(20 - 1)] = "Sort";
    /**
     * If set, more than one of the field's option items may be selected
     * simultaneously; if clear, at most one item shall be selected.
     */ AcroChoiceFlags[AcroChoiceFlags["MultiSelect"] = flag(22 - 1)] = "MultiSelect";
    /**
     * If set, text entered in the field shall not be spell-checked. This flag
     * shall not be used unless the Combo and Edit flags are both set.
     */ AcroChoiceFlags[AcroChoiceFlags["DoNotSpellCheck"] = flag(23 - 1)] = "DoNotSpellCheck";
    /**
     * If set, the new value shall be committed as soon as a selection is made
     * (commonly with the pointing device). In this case, supplying a value for
     * a field involves three actions: selecting the field for fill-in,
     * selecting a choice for the fill-in value, and leaving that field, which
     * finalizes or "commits" the data choice and triggers any actions associated
     * with the entry or changing of this data. If this flag is on, then
     * processing does not wait for leaving the field action to occur, but
     * immediately proceeds to the third step.
     *
     * This option enables applications to perform an action once a selection is
     * made, without requiring the user to exit the field. If clear, the new
     * value is not committed until the user exits the field.
     */ AcroChoiceFlags[AcroChoiceFlags["CommitOnSelChange"] = flag(27 - 1)] = "CommitOnSelChange";
})(AcroChoiceFlags || (AcroChoiceFlags = {})); //# sourceMappingURL=flags.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroChoice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroTerminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroTerminal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFHexString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/flags.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var PDFAcroChoice = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFAcroChoice, _super);
    function PDFAcroChoice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PDFAcroChoice.prototype.setValues = function(values) {
        if (this.hasFlag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].Combo) && !this.hasFlag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].Edit) && !this.valuesAreValid(values)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAcroFieldValueError"]();
        }
        if (values.length === 0) {
            this.dict.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('V'));
        }
        if (values.length === 1) {
            this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('V'), values[0]);
        }
        if (values.length > 1) {
            if (!this.hasFlag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].MultiSelect)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiSelectValueError"]();
            }
            this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('V'), this.dict.context.obj(values));
        }
        this.updateSelectedIndices(values);
    };
    PDFAcroChoice.prototype.valuesAreValid = function(values) {
        var options = this.getOptions();
        var _loop_1 = function(idx, len) {
            var val = values[idx].decodeText();
            if (!options.find(function(o) {
                return val === (o.display || o.value).decodeText();
            })) {
                return {
                    value: false
                };
            }
        };
        for(var idx = 0, len = values.length; idx < len; idx++){
            var state_1 = _loop_1(idx, len);
            if (typeof state_1 === "object") return state_1.value;
        }
        return true;
    };
    PDFAcroChoice.prototype.updateSelectedIndices = function(values) {
        if (values.length > 1) {
            var indices = new Array(values.length);
            var options = this.getOptions();
            var _loop_2 = function(idx, len) {
                var val = values[idx].decodeText();
                indices[idx] = options.findIndex(function(o) {
                    return val === (o.display || o.value).decodeText();
                });
            };
            for(var idx = 0, len = values.length; idx < len; idx++){
                _loop_2(idx, len);
            }
            this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('I'), this.dict.context.obj(indices.sort()));
        } else {
            this.dict.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('I'));
        }
    };
    PDFAcroChoice.prototype.getValues = function() {
        var v = this.V();
        if (v instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] || v instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return [
            v
        ];
        if (v instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
            var values = [];
            for(var idx = 0, len = v.size(); idx < len; idx++){
                var value = v.lookup(idx);
                if (value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] || value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
                    values.push(value);
                }
            }
            return values;
        }
        return [];
    };
    PDFAcroChoice.prototype.Opt = function() {
        return this.dict.lookupMaybe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Opt'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    };
    PDFAcroChoice.prototype.setOptions = function(options) {
        var newOpt = new Array(options.length);
        for(var idx = 0, len = options.length; idx < len; idx++){
            var _a = options[idx], value = _a.value, display = _a.display;
            newOpt[idx] = this.dict.context.obj([
                value,
                display || value
            ]);
        }
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Opt'), this.dict.context.obj(newOpt));
    };
    PDFAcroChoice.prototype.getOptions = function() {
        var Opt = this.Opt();
        // Not supposed to happen - Opt _should_ always be `PDFArray | undefined`
        if (Opt instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] || Opt instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
            return [
                {
                    value: Opt,
                    display: Opt
                }
            ];
        }
        if (Opt instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
            var res = [];
            for(var idx = 0, len = Opt.size(); idx < len; idx++){
                var item = Opt.lookup(idx);
                // If `item` is a string, use that as both the export and text value
                if (item instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] || item instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
                    res.push({
                        value: item,
                        display: item
                    });
                }
                // If `item` is an array of one, treat it the same as just a string,
                // if it's an array of two then `item[0]` is the export value and
                // `item[1]` is the text value
                if (item instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
                    if (item.size() > 0) {
                        var first = item.lookup(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
                        var second = item.lookupMaybe(1, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
                        res.push({
                            value: first,
                            display: second || first
                        });
                    }
                }
            }
            return res;
        }
        return [];
    };
    return PDFAcroChoice;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroTerminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFAcroChoice;
 //# sourceMappingURL=PDFAcroChoice.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroComboBox.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroChoice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroChoice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/flags.js [app-client] (ecmascript)");
;
;
;
var PDFAcroComboBox = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFAcroComboBox, _super);
    function PDFAcroComboBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PDFAcroComboBox.fromDict = function(dict, ref) {
        return new PDFAcroComboBox(dict, ref);
    };
    PDFAcroComboBox.create = function(context) {
        var dict = context.obj({
            FT: 'Ch',
            Ff: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].Combo,
            Kids: []
        });
        var ref = context.register(dict);
        return new PDFAcroComboBox(dict, ref);
    };
    return PDFAcroComboBox;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroChoice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFAcroComboBox;
 //# sourceMappingURL=PDFAcroComboBox.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroNonTerminal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroField.js [app-client] (ecmascript)");
;
;
;
var PDFAcroNonTerminal = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFAcroNonTerminal, _super);
    function PDFAcroNonTerminal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PDFAcroNonTerminal.prototype.addField = function(field) {
        var Kids = this.normalizedEntries().Kids;
        Kids === null || Kids === void 0 ? void 0 : Kids.push(field);
    };
    PDFAcroNonTerminal.prototype.normalizedEntries = function() {
        var Kids = this.Kids();
        if (!Kids) {
            Kids = this.dict.context.obj([]);
            this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Kids'), Kids);
        }
        return {
            Kids: Kids
        };
    };
    PDFAcroNonTerminal.fromDict = function(dict, ref) {
        return new PDFAcroNonTerminal(dict, ref);
    };
    PDFAcroNonTerminal.create = function(context) {
        var dict = context.obj({});
        var ref = context.register(dict);
        return new PDFAcroNonTerminal(dict, ref);
    };
    return PDFAcroNonTerminal;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFAcroNonTerminal;
 //# sourceMappingURL=PDFAcroNonTerminal.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroSignature.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroTerminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroTerminal.js [app-client] (ecmascript)");
;
;
var PDFAcroSignature = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFAcroSignature, _super);
    function PDFAcroSignature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PDFAcroSignature.fromDict = function(dict, ref) {
        return new PDFAcroSignature(dict, ref);
    };
    return PDFAcroSignature;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroTerminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFAcroSignature;
 //# sourceMappingURL=PDFAcroSignature.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroText.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFHexString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroTerminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroTerminal.js [app-client] (ecmascript)");
;
;
;
;
;
;
var PDFAcroText = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFAcroText, _super);
    function PDFAcroText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PDFAcroText.prototype.MaxLen = function() {
        var maxLen = this.dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('MaxLen'));
        if (maxLen instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return maxLen;
        return undefined;
    };
    PDFAcroText.prototype.Q = function() {
        var q = this.dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Q'));
        if (q instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return q;
        return undefined;
    };
    PDFAcroText.prototype.setMaxLength = function(maxLength) {
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('MaxLen'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(maxLength));
    };
    PDFAcroText.prototype.removeMaxLength = function() {
        this.dict.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('MaxLen'));
    };
    PDFAcroText.prototype.getMaxLength = function() {
        var _a;
        return (_a = this.MaxLen()) === null || _a === void 0 ? void 0 : _a.asNumber();
    };
    PDFAcroText.prototype.setQuadding = function(quadding) {
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Q'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(quadding));
    };
    PDFAcroText.prototype.getQuadding = function() {
        var _a;
        return (_a = this.Q()) === null || _a === void 0 ? void 0 : _a.asNumber();
    };
    PDFAcroText.prototype.setValue = function(value) {
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('V'), value);
    // const widgets = this.getWidgets();
    // for (let idx = 0, len = widgets.length; idx < len; idx++) {
    //   const widget = widgets[idx];
    //   const state = widget.getOnValue() === value ? value : PDFName.of('Off');
    //   widget.setAppearanceState(state);
    // }
    };
    PDFAcroText.prototype.removeValue = function() {
        this.dict.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('V'));
    };
    PDFAcroText.prototype.getValue = function() {
        var v = this.V();
        if (v instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] || v instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return v;
        return undefined;
    };
    PDFAcroText.fromDict = function(dict, ref) {
        return new PDFAcroText(dict, ref);
    };
    PDFAcroText.create = function(context) {
        var dict = context.obj({
            FT: 'Tx',
            Kids: []
        });
        var ref = context.register(dict);
        return new PDFAcroText(dict, ref);
    };
    return PDFAcroText;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroTerminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFAcroText;
 //# sourceMappingURL=PDFAcroText.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroPushButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/flags.js [app-client] (ecmascript)");
;
;
;
var PDFAcroPushButton = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFAcroPushButton, _super);
    function PDFAcroPushButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PDFAcroPushButton.fromDict = function(dict, ref) {
        return new PDFAcroPushButton(dict, ref);
    };
    PDFAcroPushButton.create = function(context) {
        var dict = context.obj({
            FT: 'Btn',
            Ff: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroButtonFlags"].PushButton,
            Kids: []
        });
        var ref = context.register(dict);
        return new PDFAcroPushButton(dict, ref);
    };
    return PDFAcroPushButton;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFAcroPushButton;
 //# sourceMappingURL=PDFAcroPushButton.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroRadioButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/flags.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
;
;
;
;
;
var PDFAcroRadioButton = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFAcroRadioButton, _super);
    function PDFAcroRadioButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PDFAcroRadioButton.prototype.setValue = function(value) {
        var onValues = this.getOnValues();
        if (!onValues.includes(value) && value !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Off')) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAcroFieldValueError"]();
        }
        this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('V'), value);
        var widgets = this.getWidgets();
        for(var idx = 0, len = widgets.length; idx < len; idx++){
            var widget = widgets[idx];
            var state = widget.getOnValue() === value ? value : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Off');
            widget.setAppearanceState(state);
        }
    };
    PDFAcroRadioButton.prototype.getValue = function() {
        var v = this.V();
        if (v instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return v;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Off');
    };
    PDFAcroRadioButton.prototype.getOnValues = function() {
        var widgets = this.getWidgets();
        var onValues = [];
        for(var idx = 0, len = widgets.length; idx < len; idx++){
            var onValue = widgets[idx].getOnValue();
            if (onValue) onValues.push(onValue);
        }
        return onValues;
    };
    PDFAcroRadioButton.fromDict = function(dict, ref) {
        return new PDFAcroRadioButton(dict, ref);
    };
    PDFAcroRadioButton.create = function(context) {
        var dict = context.obj({
            FT: 'Btn',
            Ff: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroButtonFlags"].Radio,
            Kids: []
        });
        var ref = context.register(dict);
        return new PDFAcroRadioButton(dict, ref);
    };
    return PDFAcroRadioButton;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFAcroRadioButton;
 //# sourceMappingURL=PDFAcroRadioButton.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroListBox.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroChoice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroChoice.js [app-client] (ecmascript)");
;
;
var PDFAcroListBox = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFAcroListBox, _super);
    function PDFAcroListBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PDFAcroListBox.fromDict = function(dict, ref) {
        return new PDFAcroListBox(dict, ref);
    };
    PDFAcroListBox.create = function(context) {
        var dict = context.obj({
            FT: 'Ch',
            Kids: []
        });
        var ref = context.register(dict);
        return new PDFAcroListBox(dict, ref);
    };
    return PDFAcroListBox;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroChoice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFAcroListBox;
 //# sourceMappingURL=PDFAcroListBox.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPDFAcroField",
    ()=>createPDFAcroField,
    "createPDFAcroFields",
    ()=>createPDFAcroFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFDict.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroTerminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroTerminal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroNonTerminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroNonTerminal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroSignature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroPushButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroPushButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroRadioButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroRadioButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroCheckBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroCheckBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroComboBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroComboBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroListBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroListBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/flags.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var createPDFAcroFields = function(kidDicts) {
    if (!kidDicts) return [];
    var kids = [];
    for(var idx = 0, len = kidDicts.size(); idx < len; idx++){
        var ref = kidDicts.get(idx);
        var dict = kidDicts.lookup(idx);
        // if (dict instanceof PDFDict) kids.push(PDFAcroField.fromDict(dict));
        if (ref instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && dict instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
            kids.push([
                createPDFAcroField(dict, ref),
                ref
            ]);
        }
    }
    return kids;
};
var createPDFAcroField = function(dict, ref) {
    var isNonTerminal = isNonTerminalAcroField(dict);
    if (isNonTerminal) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroNonTerminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromDict(dict, ref);
    return createPDFAcroTerminal(dict, ref);
};
// TODO: Maybe just check if the dict is *not* a widget? That might be better.
// According to the PDF spec:
//
//   > A field's children in the hierarchy may also include widget annotations
//   > that define its appearance on the page. A field that has children that
//   > are fields is called a non-terminal field. A field that does not have
//   > children that are fields is called a terminal field.
//
// The spec is not entirely clear about how to determine whether a given
// dictionary represents an acrofield or a widget annotation. So we will assume
// that a dictionary is an acrofield if it is a member of the `/Kids` array
// and it contains a `/T` entry (widgets do not have `/T` entries). This isn't
// a bullet proof solution, because the `/T` entry is technically defined as
// optional for acrofields by the PDF spec. But in practice all acrofields seem
// to have a `/T` entry defined.
var isNonTerminalAcroField = function(dict) {
    var kids = dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Kids'));
    if (kids instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
        for(var idx = 0, len = kids.size(); idx < len; idx++){
            var kid = kids.lookup(idx);
            var kidIsField = kid instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && kid.has(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('T'));
            if (kidIsField) return true;
        }
    }
    return false;
};
var createPDFAcroTerminal = function(dict, ref) {
    var ftNameOrRef = getInheritableAttribute(dict, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('FT'));
    var type = dict.context.lookup(ftNameOrRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    if (type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Btn')) return createPDFAcroButton(dict, ref);
    if (type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Ch')) return createPDFAcroChoice(dict, ref);
    if (type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Tx')) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromDict(dict, ref);
    if (type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Sig')) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromDict(dict, ref);
    // We should never reach this line. But there are a lot of weird PDFs out
    // there. So, just to be safe, we'll try to handle things gracefully instead
    // of throwing an error.
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroTerminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromDict(dict, ref);
};
var createPDFAcroButton = function(dict, ref) {
    var _a;
    var ffNumberOrRef = getInheritableAttribute(dict, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Ff'));
    var ffNumber = dict.context.lookupMaybe(ffNumberOrRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    var flags = (_a = ffNumber === null || ffNumber === void 0 ? void 0 : ffNumber.asNumber()) !== null && _a !== void 0 ? _a : 0;
    if (flagIsSet(flags, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroButtonFlags"].PushButton)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroPushButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromDict(dict, ref);
    } else if (flagIsSet(flags, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroButtonFlags"].Radio)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroRadioButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromDict(dict, ref);
    } else {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroCheckBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromDict(dict, ref);
    }
};
var createPDFAcroChoice = function(dict, ref) {
    var _a;
    var ffNumberOrRef = getInheritableAttribute(dict, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Ff'));
    var ffNumber = dict.context.lookupMaybe(ffNumberOrRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    var flags = (_a = ffNumber === null || ffNumber === void 0 ? void 0 : ffNumber.asNumber()) !== null && _a !== void 0 ? _a : 0;
    if (flagIsSet(flags, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].Combo)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroComboBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromDict(dict, ref);
    } else {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroListBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromDict(dict, ref);
    }
};
var flagIsSet = function(flags, flag) {
    return (flags & flag) !== 0;
};
var getInheritableAttribute = function(startNode, name) {
    var attribute;
    ascend(startNode, function(node) {
        if (!attribute) attribute = node.get(name);
    });
    return attribute;
};
var ascend = function(startNode, visitor) {
    visitor(startNode);
    var Parent = startNode.lookupMaybe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Parent'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    if (Parent) ascend(Parent, visitor);
}; //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroForm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFDict.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroNonTerminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroNonTerminal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/utils.js [app-client] (ecmascript)");
;
;
;
;
;
var PDFAcroForm = function() {
    function PDFAcroForm(dict) {
        this.dict = dict;
    }
    PDFAcroForm.prototype.Fields = function() {
        var fields = this.dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Fields'));
        if (fields instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return fields;
        return undefined;
    };
    PDFAcroForm.prototype.getFields = function() {
        var Fields = this.normalizedEntries().Fields;
        var fields = new Array(Fields.size());
        for(var idx = 0, len = Fields.size(); idx < len; idx++){
            var ref = Fields.get(idx);
            var dict = Fields.lookup(idx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
            fields[idx] = [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPDFAcroField"])(dict, ref),
                ref
            ];
        }
        return fields;
    };
    PDFAcroForm.prototype.getAllFields = function() {
        var allFields = [];
        var pushFields = function(fields) {
            if (!fields) return;
            for(var idx = 0, len = fields.length; idx < len; idx++){
                var field = fields[idx];
                allFields.push(field);
                var fieldModel = field[0];
                if (fieldModel instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroNonTerminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
                    pushFields((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPDFAcroFields"])(fieldModel.Kids()));
                }
            }
        };
        pushFields(this.getFields());
        return allFields;
    };
    PDFAcroForm.prototype.addField = function(field) {
        var Fields = this.normalizedEntries().Fields;
        Fields === null || Fields === void 0 ? void 0 : Fields.push(field);
    };
    PDFAcroForm.prototype.removeField = function(field) {
        var parent = field.getParent();
        var fields = parent === undefined ? this.normalizedEntries().Fields : parent.Kids();
        var index = fields === null || fields === void 0 ? void 0 : fields.indexOf(field.ref);
        if (fields === undefined || index === undefined) {
            throw new Error("Tried to remove inexistent field " + field.getFullyQualifiedName());
        }
        fields.remove(index);
        if (parent !== undefined && fields.size() === 0) {
            this.removeField(parent);
        }
    };
    PDFAcroForm.prototype.normalizedEntries = function() {
        var Fields = this.Fields();
        if (!Fields) {
            Fields = this.dict.context.obj([]);
            this.dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Fields'), Fields);
        }
        return {
            Fields: Fields
        };
    };
    PDFAcroForm.fromDict = function(dict) {
        return new PDFAcroForm(dict);
    };
    PDFAcroForm.create = function(context) {
        var dict = context.obj({
            Fields: []
        });
        return new PDFAcroForm(dict);
    };
    return PDFAcroForm;
}();
const __TURBOPACK__default__export__ = PDFAcroForm;
 //# sourceMappingURL=PDFAcroForm.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroCheckBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroCheckBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroChoice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroChoice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroComboBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroComboBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroListBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroListBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroNonTerminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroNonTerminal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroPushButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroPushButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroRadioButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroRadioButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroSignature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroTerminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroTerminal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/flags.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/utils.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroForm.js [app-client] (ecmascript) <export default as PDFAcroForm>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PDFAcroForm",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroForm.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFCatalog.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFDict.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFAcroForm$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroForm.js [app-client] (ecmascript) <export default as PDFAcroForm>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$interactive$2f$ViewerPreferences$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/interactive/ViewerPreferences.js [app-client] (ecmascript)");
;
;
;
;
;
var PDFCatalog = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFCatalog, _super);
    function PDFCatalog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PDFCatalog.prototype.Pages = function() {
        return this.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Pages'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    };
    PDFCatalog.prototype.AcroForm = function() {
        return this.lookupMaybe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('AcroForm'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    };
    PDFCatalog.prototype.getAcroForm = function() {
        var dict = this.AcroForm();
        if (!dict) return undefined;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFAcroForm$3e$__["PDFAcroForm"].fromDict(dict);
    };
    PDFCatalog.prototype.getOrCreateAcroForm = function() {
        var acroForm = this.getAcroForm();
        if (!acroForm) {
            acroForm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFAcroForm$3e$__["PDFAcroForm"].create(this.context);
            var acroFormRef = this.context.register(acroForm.dict);
            this.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('AcroForm'), acroFormRef);
        }
        return acroForm;
    };
    PDFCatalog.prototype.ViewerPreferences = function() {
        return this.lookupMaybe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('ViewerPreferences'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    };
    PDFCatalog.prototype.getViewerPreferences = function() {
        var dict = this.ViewerPreferences();
        if (!dict) return undefined;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$interactive$2f$ViewerPreferences$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromDict(dict);
    };
    PDFCatalog.prototype.getOrCreateViewerPreferences = function() {
        var viewerPrefs = this.getViewerPreferences();
        if (!viewerPrefs) {
            viewerPrefs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$interactive$2f$ViewerPreferences$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create(this.context);
            var viewerPrefsRef = this.context.register(viewerPrefs.dict);
            this.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('ViewerPreferences'), viewerPrefsRef);
        }
        return viewerPrefs;
    };
    /**
     * Inserts the given ref as a leaf node of this catalog's page tree at the
     * specified index (zero-based). Also increments the `Count` of each node in
     * the page tree hierarchy to accomodate the new page.
     *
     * Returns the ref of the PDFPageTree node into which `leafRef` was inserted.
     */ PDFCatalog.prototype.insertLeafNode = function(leafRef, index) {
        var pagesRef = this.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Pages'));
        var maybeParentRef = this.Pages().insertLeafNode(leafRef, index);
        return maybeParentRef || pagesRef;
    };
    PDFCatalog.prototype.removeLeafNode = function(index) {
        this.Pages().removeLeafNode(index);
    };
    PDFCatalog.withContextAndPages = function(context, pages) {
        var dict = new Map();
        dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Type'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Catalog'));
        dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Pages'), pages);
        return new PDFCatalog(dict, context);
    };
    PDFCatalog.fromMapWithContext = function(map, context) {
        return new PDFCatalog(map, context);
    };
    return PDFCatalog;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFCatalog;
 //# sourceMappingURL=PDFCatalog.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFPageTree.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFDict.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFPageLeaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFPageLeaf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var PDFPageTree = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFPageTree, _super);
    function PDFPageTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PDFPageTree.prototype.Parent = function() {
        return this.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Parent'));
    };
    PDFPageTree.prototype.Kids = function() {
        return this.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Kids'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    };
    PDFPageTree.prototype.Count = function() {
        return this.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Count'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    };
    PDFPageTree.prototype.pushTreeNode = function(treeRef) {
        var Kids = this.Kids();
        Kids.push(treeRef);
    };
    PDFPageTree.prototype.pushLeafNode = function(leafRef) {
        var Kids = this.Kids();
        this.insertLeafKid(Kids.size(), leafRef);
    };
    /**
     * Inserts the given ref as a leaf node of this page tree at the specified
     * index (zero-based). Also increments the `Count` of each page tree in the
     * hierarchy to accomodate the new page.
     *
     * Returns the ref of the PDFPageTree node into which `leafRef` was inserted,
     * or `undefined` if it was inserted into the root node (the PDFPageTree upon
     * which the method was first called).
     */ PDFPageTree.prototype.insertLeafNode = function(leafRef, targetIndex) {
        var Kids = this.Kids();
        var Count = this.Count().asNumber();
        if (targetIndex > Count) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidTargetIndexError"](targetIndex, Count);
        }
        var leafsRemainingUntilTarget = targetIndex;
        for(var idx = 0, len = Kids.size(); idx < len; idx++){
            if (leafsRemainingUntilTarget === 0) {
                // Insert page and return
                this.insertLeafKid(idx, leafRef);
                return undefined;
            }
            var kidRef = Kids.get(idx);
            var kid = this.context.lookup(kidRef);
            if (kid instanceof PDFPageTree) {
                if (kid.Count().asNumber() > leafsRemainingUntilTarget) {
                    // Dig in
                    return kid.insertLeafNode(leafRef, leafsRemainingUntilTarget) || kidRef;
                } else {
                    // Move on
                    leafsRemainingUntilTarget -= kid.Count().asNumber();
                }
            }
            if (kid instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFPageLeaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
                // Move on
                leafsRemainingUntilTarget -= 1;
            }
        }
        if (leafsRemainingUntilTarget === 0) {
            // Insert page at the end and return
            this.insertLeafKid(Kids.size(), leafRef);
            return undefined;
        }
        // Should never get here if `targetIndex` is valid
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CorruptPageTreeError"](targetIndex, 'insertLeafNode');
    };
    /**
     * Removes the leaf node at the specified index (zero-based) from this page
     * tree. Also decrements the `Count` of each page tree in the hierarchy to
     * account for the removed page.
     *
     * If `prune` is true, then intermediate tree nodes will be removed from the
     * tree if they contain 0 children after the leaf node is removed.
     */ PDFPageTree.prototype.removeLeafNode = function(targetIndex, prune) {
        if (prune === void 0) {
            prune = true;
        }
        var Kids = this.Kids();
        var Count = this.Count().asNumber();
        if (targetIndex >= Count) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidTargetIndexError"](targetIndex, Count);
        }
        var leafsRemainingUntilTarget = targetIndex;
        for(var idx = 0, len = Kids.size(); idx < len; idx++){
            var kidRef = Kids.get(idx);
            var kid = this.context.lookup(kidRef);
            if (kid instanceof PDFPageTree) {
                if (kid.Count().asNumber() > leafsRemainingUntilTarget) {
                    // Dig in
                    kid.removeLeafNode(leafsRemainingUntilTarget, prune);
                    if (prune && kid.Kids().size() === 0) Kids.remove(idx);
                    return;
                } else {
                    // Move on
                    leafsRemainingUntilTarget -= kid.Count().asNumber();
                }
            }
            if (kid instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFPageLeaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
                if (leafsRemainingUntilTarget === 0) {
                    // Remove page and return
                    this.removeKid(idx);
                    return;
                } else {
                    // Move on
                    leafsRemainingUntilTarget -= 1;
                }
            }
        }
        // Should never get here if `targetIndex` is valid
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CorruptPageTreeError"](targetIndex, 'removeLeafNode');
    };
    PDFPageTree.prototype.ascend = function(visitor) {
        visitor(this);
        var Parent = this.Parent();
        if (Parent) Parent.ascend(visitor);
    };
    /** Performs a Post-Order traversal of this page tree */ PDFPageTree.prototype.traverse = function(visitor) {
        var Kids = this.Kids();
        for(var idx = 0, len = Kids.size(); idx < len; idx++){
            var kidRef = Kids.get(idx);
            var kid = this.context.lookup(kidRef);
            if (kid instanceof PDFPageTree) kid.traverse(visitor);
            visitor(kid, kidRef);
        }
    };
    PDFPageTree.prototype.insertLeafKid = function(kidIdx, leafRef) {
        var Kids = this.Kids();
        this.ascend(function(node) {
            var newCount = node.Count().asNumber() + 1;
            node.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Count'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(newCount));
        });
        Kids.insert(kidIdx, leafRef);
    };
    PDFPageTree.prototype.removeKid = function(kidIdx) {
        var Kids = this.Kids();
        var kid = Kids.lookup(kidIdx);
        if (kid instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFPageLeaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
            this.ascend(function(node) {
                var newCount = node.Count().asNumber() - 1;
                node.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Count'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(newCount));
            });
        }
        Kids.remove(kidIdx);
    };
    PDFPageTree.withContext = function(context, parent) {
        var dict = new Map();
        dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Type'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Pages'));
        dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Kids'), context.obj([]));
        dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Count'), context.obj(0));
        if (parent) dict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Parent'), parent);
        return new PDFPageTree(dict, context);
    };
    PDFPageTree.fromMapWithContext = function(map, context) {
        return new PDFPageTree(map, context);
    };
    return PDFPageTree;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFPageTree;
 //# sourceMappingURL=PDFPageTree.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/Numeric.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IsDigit",
    ()=>IsDigit,
    "IsNumeric",
    ()=>IsNumeric,
    "IsNumericPrefix",
    ()=>IsNumericPrefix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/CharCodes.js [app-client] (ecmascript)");
;
var IsDigit = new Uint8Array(256);
IsDigit[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Zero] = 1;
IsDigit[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].One] = 1;
IsDigit[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Two] = 1;
IsDigit[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Three] = 1;
IsDigit[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Four] = 1;
IsDigit[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Five] = 1;
IsDigit[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Six] = 1;
IsDigit[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Seven] = 1;
IsDigit[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Eight] = 1;
IsDigit[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Nine] = 1;
var IsNumericPrefix = new Uint8Array(256);
IsNumericPrefix[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Period] = 1;
IsNumericPrefix[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Plus] = 1;
IsNumericPrefix[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Minus] = 1;
var IsNumeric = new Uint8Array(256);
for(var idx = 0, len = 256; idx < len; idx++){
    IsNumeric[idx] = IsDigit[idx] || IsNumericPrefix[idx] ? 1 : 0;
} //# sourceMappingURL=Numeric.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/parser/BaseParser.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/CharCodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Numeric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/Numeric.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Whitespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/Whitespace.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/strings.js [app-client] (ecmascript)");
;
;
;
;
;
var Newline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline, CarriageReturn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CarriageReturn;
// TODO: Throw error if eof is reached before finishing object parse...
var BaseParser = function() {
    function BaseParser(bytes, capNumbers) {
        if (capNumbers === void 0) {
            capNumbers = false;
        }
        this.bytes = bytes;
        this.capNumbers = capNumbers;
    }
    BaseParser.prototype.parseRawInt = function() {
        var value = '';
        while(!this.bytes.done()){
            var byte = this.bytes.peek();
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Numeric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IsDigit"][byte]) break;
            value += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charFromCode"])(this.bytes.next());
        }
        var numberValue = Number(value);
        if (!value || !isFinite(numberValue)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberParsingError"](this.bytes.position(), value);
        }
        return numberValue;
    };
    // TODO: Maybe handle exponential format?
    // TODO: Compare performance of string concatenation to charFromCode(...bytes)
    BaseParser.prototype.parseRawNumber = function() {
        var value = '';
        // Parse integer-part, the leading (+ | - | . | 0-9)
        while(!this.bytes.done()){
            var byte = this.bytes.peek();
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Numeric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IsNumeric"][byte]) break;
            value += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charFromCode"])(this.bytes.next());
            if (byte === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Period) break;
        }
        // Parse decimal-part, the trailing (0-9)
        while(!this.bytes.done()){
            var byte = this.bytes.peek();
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Numeric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IsDigit"][byte]) break;
            value += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charFromCode"])(this.bytes.next());
        }
        var numberValue = Number(value);
        if (!value || !isFinite(numberValue)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberParsingError"](this.bytes.position(), value);
        }
        if (numberValue > Number.MAX_SAFE_INTEGER) {
            if (this.capNumbers) {
                var msg = "Parsed number that is too large for some PDF readers: " + value + ", using Number.MAX_SAFE_INTEGER instead.";
                console.warn(msg);
                return Number.MAX_SAFE_INTEGER;
            } else {
                var msg = "Parsed number that is too large for some PDF readers: " + value + ", not capping.";
                console.warn(msg);
            }
        }
        return numberValue;
    };
    BaseParser.prototype.skipWhitespace = function() {
        while(!this.bytes.done() && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Whitespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IsWhitespace"][this.bytes.peek()]){
            this.bytes.next();
        }
    };
    BaseParser.prototype.skipLine = function() {
        while(!this.bytes.done()){
            var byte = this.bytes.peek();
            if (byte === Newline || byte === CarriageReturn) return;
            this.bytes.next();
        }
    };
    BaseParser.prototype.skipComment = function() {
        if (this.bytes.peek() !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Percent) return false;
        while(!this.bytes.done()){
            var byte = this.bytes.peek();
            if (byte === Newline || byte === CarriageReturn) return true;
            this.bytes.next();
        }
        return true;
    };
    BaseParser.prototype.skipWhitespaceAndComments = function() {
        this.skipWhitespace();
        while(this.skipComment())this.skipWhitespace();
    };
    BaseParser.prototype.matchKeyword = function(keyword) {
        var initialOffset = this.bytes.offset();
        for(var idx = 0, len = keyword.length; idx < len; idx++){
            if (this.bytes.done() || this.bytes.next() !== keyword[idx]) {
                this.bytes.moveTo(initialOffset);
                return false;
            }
        }
        return true;
    };
    return BaseParser;
}();
const __TURBOPACK__default__export__ = BaseParser;
 //# sourceMappingURL=BaseParser.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/parser/ByteStream.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$decode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/streams/decode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/CharCodes.js [app-client] (ecmascript)");
;
;
;
// TODO: See how line/col tracking affects performance
var ByteStream = function() {
    function ByteStream(bytes) {
        this.idx = 0;
        this.line = 0;
        this.column = 0;
        this.bytes = bytes;
        this.length = this.bytes.length;
    }
    ByteStream.prototype.moveTo = function(offset) {
        this.idx = offset;
    };
    ByteStream.prototype.next = function() {
        var byte = this.bytes[this.idx++];
        if (byte === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline) {
            this.line += 1;
            this.column = 0;
        } else {
            this.column += 1;
        }
        return byte;
    };
    ByteStream.prototype.assertNext = function(expected) {
        if (this.peek() !== expected) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextByteAssertionError"](this.position(), expected, this.peek());
        }
        return this.next();
    };
    ByteStream.prototype.peek = function() {
        return this.bytes[this.idx];
    };
    ByteStream.prototype.peekAhead = function(steps) {
        return this.bytes[this.idx + steps];
    };
    ByteStream.prototype.peekAt = function(offset) {
        return this.bytes[offset];
    };
    ByteStream.prototype.done = function() {
        return this.idx >= this.length;
    };
    ByteStream.prototype.offset = function() {
        return this.idx;
    };
    ByteStream.prototype.slice = function(start, end) {
        return this.bytes.slice(start, end);
    };
    ByteStream.prototype.position = function() {
        return {
            line: this.line,
            column: this.column,
            offset: this.idx
        };
    };
    ByteStream.of = function(bytes) {
        return new ByteStream(bytes);
    };
    ByteStream.fromPDFRawStream = function(rawStream) {
        return ByteStream.of((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$decode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodePDFRawStream"])(rawStream).decode());
    };
    return ByteStream;
}();
const __TURBOPACK__default__export__ = ByteStream;
 //# sourceMappingURL=ByteStream.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/Keywords.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Keywords",
    ()=>Keywords
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/CharCodes.js [app-client] (ecmascript)");
;
;
var Space = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Space, CarriageReturn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CarriageReturn, Newline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Newline;
var stream = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].s,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].t,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].r,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].e,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].m
];
var endstream = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].e,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].n,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].d,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].s,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].t,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].r,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].e,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].m
];
var Keywords = {
    header: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Percent,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].P,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].D,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Dash
    ],
    eof: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Percent,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Percent,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].E,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].O,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F
    ],
    obj: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].o,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].b,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].j
    ],
    endobj: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].e,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].n,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].d,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].o,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].b,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].j
    ],
    xref: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].x,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].r,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].e,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].f
    ],
    trailer: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].t,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].r,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].i,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].l,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].e,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].r
    ],
    startxref: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].s,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].t,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].r,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].t,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].x,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].r,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].e,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].f
    ],
    true: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].t,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].r,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].u,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].e
    ],
    false: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].f,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].l,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].s,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].e
    ],
    null: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].n,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].u,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].l,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].l
    ],
    stream: stream,
    streamEOF1: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])(stream, [
        Space,
        CarriageReturn,
        Newline
    ]),
    streamEOF2: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])(stream, [
        CarriageReturn,
        Newline
    ]),
    streamEOF3: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])(stream, [
        CarriageReturn
    ]),
    streamEOF4: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])(stream, [
        Newline
    ]),
    endstream: endstream,
    EOF1endstream: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])([
        CarriageReturn,
        Newline
    ], endstream),
    EOF2endstream: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])([
        CarriageReturn
    ], endstream),
    EOF3endstream: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])([
        Newline
    ], endstream)
}; //# sourceMappingURL=Keywords.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/parser/PDFObjectParser.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFBool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFBool.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFDict.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFHexString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNull$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNull.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRawStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRawStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$parser$2f$BaseParser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/parser/BaseParser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$parser$2f$ByteStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/parser/ByteStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFCatalog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFCatalog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFPageLeaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFPageLeaf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFPageTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFPageTree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/CharCodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Delimiters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/Delimiters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/Keywords.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Numeric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/Numeric.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Whitespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/Whitespace.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/strings.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// TODO: Throw error if eof is reached before finishing object parse...
var PDFObjectParser = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFObjectParser, _super);
    function PDFObjectParser(byteStream, context, capNumbers) {
        if (capNumbers === void 0) {
            capNumbers = false;
        }
        var _this = _super.call(this, byteStream, capNumbers) || this;
        _this.context = context;
        return _this;
    }
    // TODO: Is it possible to reduce duplicate parsing for ref lookaheads?
    PDFObjectParser.prototype.parseObject = function() {
        this.skipWhitespaceAndComments();
        if (this.matchKeyword(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"].true)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFBool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].True;
        if (this.matchKeyword(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"].false)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFBool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].False;
        if (this.matchKeyword(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"].null)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNull$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
        var byte = this.bytes.peek();
        if (byte === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LessThan && this.bytes.peekAhead(1) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LessThan) {
            return this.parseDictOrStream();
        }
        if (byte === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LessThan) return this.parseHexString();
        if (byte === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LeftParen) return this.parseString();
        if (byte === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ForwardSlash) return this.parseName();
        if (byte === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LeftSquareBracket) return this.parseArray();
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Numeric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IsNumeric"][byte]) return this.parseNumberOrRef();
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFObjectParsingError"](this.bytes.position(), byte);
    };
    PDFObjectParser.prototype.parseNumberOrRef = function() {
        var firstNum = this.parseRawNumber();
        this.skipWhitespaceAndComments();
        var lookaheadStart = this.bytes.offset();
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Numeric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IsDigit"][this.bytes.peek()]) {
            var secondNum = this.parseRawNumber();
            this.skipWhitespaceAndComments();
            if (this.bytes.peek() === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].R) {
                this.bytes.assertNext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].R);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(firstNum, secondNum);
            }
        }
        this.bytes.moveTo(lookaheadStart);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(firstNum);
    };
    // TODO: Maybe update PDFHexString.of() logic to remove whitespace and validate input?
    PDFObjectParser.prototype.parseHexString = function() {
        var value = '';
        this.bytes.assertNext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LessThan);
        while(!this.bytes.done() && this.bytes.peek() !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].GreaterThan){
            value += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charFromCode"])(this.bytes.next());
        }
        this.bytes.assertNext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].GreaterThan);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(value);
    };
    PDFObjectParser.prototype.parseString = function() {
        var nestingLvl = 0;
        var isEscaped = false;
        var value = '';
        while(!this.bytes.done()){
            var byte = this.bytes.next();
            value += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charFromCode"])(byte);
            // Check for unescaped parenthesis
            if (!isEscaped) {
                if (byte === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LeftParen) nestingLvl += 1;
                if (byte === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].RightParen) nestingLvl -= 1;
            }
            // Track whether current character is being escaped or not
            if (byte === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].BackSlash) {
                isEscaped = !isEscaped;
            } else if (isEscaped) {
                isEscaped = false;
            }
            // Once (if) the unescaped parenthesis balance out, return their contents
            if (nestingLvl === 0) {
                // Remove the outer parens so they aren't part of the contents
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(value.substring(1, value.length - 1));
            }
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnbalancedParenthesisError"](this.bytes.position());
    };
    // TODO: Compare performance of string concatenation to charFromCode(...bytes)
    // TODO: Maybe preallocate small Uint8Array if can use charFromCode?
    PDFObjectParser.prototype.parseName = function() {
        this.bytes.assertNext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ForwardSlash);
        var name = '';
        while(!this.bytes.done()){
            var byte = this.bytes.peek();
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Whitespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IsWhitespace"][byte] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Delimiters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IsDelimiter"][byte]) break;
            name += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charFromCode"])(byte);
            this.bytes.next();
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(name);
    };
    PDFObjectParser.prototype.parseArray = function() {
        this.bytes.assertNext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LeftSquareBracket);
        this.skipWhitespaceAndComments();
        var pdfArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].withContext(this.context);
        while(this.bytes.peek() !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].RightSquareBracket){
            var element = this.parseObject();
            pdfArray.push(element);
            this.skipWhitespaceAndComments();
        }
        this.bytes.assertNext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].RightSquareBracket);
        return pdfArray;
    };
    PDFObjectParser.prototype.parseDict = function() {
        this.bytes.assertNext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LessThan);
        this.bytes.assertNext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LessThan);
        this.skipWhitespaceAndComments();
        var dict = new Map();
        while(!this.bytes.done() && this.bytes.peek() !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].GreaterThan && this.bytes.peekAhead(1) !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].GreaterThan){
            var key = this.parseName();
            var value = this.parseObject();
            dict.set(key, value);
            this.skipWhitespaceAndComments();
        }
        this.skipWhitespaceAndComments();
        this.bytes.assertNext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].GreaterThan);
        this.bytes.assertNext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].GreaterThan);
        var Type = dict.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Type'));
        if (Type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Catalog')) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFCatalog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromMapWithContext(dict, this.context);
        } else if (Type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Pages')) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFPageTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromMapWithContext(dict, this.context);
        } else if (Type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Page')) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFPageLeaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromMapWithContext(dict, this.context);
        } else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromMapWithContext(dict, this.context);
        }
    };
    PDFObjectParser.prototype.parseDictOrStream = function() {
        var startPos = this.bytes.position();
        var dict = this.parseDict();
        this.skipWhitespaceAndComments();
        if (!this.matchKeyword(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"].streamEOF1) && !this.matchKeyword(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"].streamEOF2) && !this.matchKeyword(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"].streamEOF3) && !this.matchKeyword(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"].streamEOF4) && !this.matchKeyword(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"].stream)) {
            return dict;
        }
        var start = this.bytes.offset();
        var end;
        var Length = dict.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Length'));
        if (Length instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
            end = start + Length.asNumber();
            this.bytes.moveTo(end);
            this.skipWhitespaceAndComments();
            if (!this.matchKeyword(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"].endstream)) {
                this.bytes.moveTo(start);
                end = this.findEndOfStreamFallback(startPos);
            }
        } else {
            end = this.findEndOfStreamFallback(startPos);
        }
        var contents = this.bytes.slice(start, end);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRawStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(dict, contents);
    };
    PDFObjectParser.prototype.findEndOfStreamFallback = function(startPos) {
        // Move to end of stream, while handling nested streams
        var nestingLvl = 1;
        var end = this.bytes.offset();
        while(!this.bytes.done()){
            end = this.bytes.offset();
            if (this.matchKeyword(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"].stream)) {
                nestingLvl += 1;
            } else if (this.matchKeyword(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"].EOF1endstream) || this.matchKeyword(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"].EOF2endstream) || this.matchKeyword(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"].EOF3endstream) || this.matchKeyword(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"].endstream)) {
                nestingLvl -= 1;
            } else {
                this.bytes.next();
            }
            if (nestingLvl === 0) break;
        }
        if (nestingLvl !== 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFStreamParsingError"](startPos);
        return end;
    };
    PDFObjectParser.forBytes = function(bytes, context, capNumbers) {
        return new PDFObjectParser(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$parser$2f$ByteStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(bytes), context, capNumbers);
    };
    PDFObjectParser.forByteStream = function(byteStream, context, capNumbers) {
        if (capNumbers === void 0) {
            capNumbers = false;
        }
        return new PDFObjectParser(byteStream, context, capNumbers);
    };
    return PDFObjectParser;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$parser$2f$BaseParser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFObjectParser;
 //# sourceMappingURL=PDFObjectParser.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/parser/PDFObjectStreamParser.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$parser$2f$ByteStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/parser/ByteStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$parser$2f$PDFObjectParser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/parser/PDFObjectParser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/async.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var PDFObjectStreamParser = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFObjectStreamParser, _super);
    function PDFObjectStreamParser(rawStream, shouldWaitForTick) {
        var _this = _super.call(this, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$parser$2f$ByteStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromPDFRawStream(rawStream), rawStream.dict.context) || this;
        var dict = rawStream.dict;
        _this.alreadyParsed = false;
        _this.shouldWaitForTick = shouldWaitForTick || function() {
            return false;
        };
        _this.firstOffset = dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('First'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).asNumber();
        _this.objectCount = dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('N'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).asNumber();
        return _this;
    }
    PDFObjectStreamParser.prototype.parseIntoContext = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var offsetsAndObjectNumbers, idx, len, _a, objectNumber, offset, object, ref;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
                switch(_b.label){
                    case 0:
                        if (this.alreadyParsed) {
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReparseError"]('PDFObjectStreamParser', 'parseIntoContext');
                        }
                        this.alreadyParsed = true;
                        offsetsAndObjectNumbers = this.parseOffsetsAndObjectNumbers();
                        idx = 0, len = offsetsAndObjectNumbers.length;
                        _b.label = 1;
                    case 1:
                        if (!(idx < len)) return [
                            3 /*break*/ ,
                            4
                        ];
                        _a = offsetsAndObjectNumbers[idx], objectNumber = _a.objectNumber, offset = _a.offset;
                        this.bytes.moveTo(this.firstOffset + offset);
                        object = this.parseObject();
                        ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(objectNumber, 0);
                        this.context.assign(ref, object);
                        if (!this.shouldWaitForTick()) return [
                            3 /*break*/ ,
                            3
                        ];
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waitForTick"])()
                        ];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        idx++;
                        return [
                            3 /*break*/ ,
                            1
                        ];
                    case 4:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    PDFObjectStreamParser.prototype.parseOffsetsAndObjectNumbers = function() {
        var offsetsAndObjectNumbers = [];
        for(var idx = 0, len = this.objectCount; idx < len; idx++){
            this.skipWhitespaceAndComments();
            var objectNumber = this.parseRawInt();
            this.skipWhitespaceAndComments();
            var offset = this.parseRawInt();
            offsetsAndObjectNumbers.push({
                objectNumber: objectNumber,
                offset: offset
            });
        }
        return offsetsAndObjectNumbers;
    };
    PDFObjectStreamParser.forStream = function(rawStream, shouldWaitForTick) {
        return new PDFObjectStreamParser(rawStream, shouldWaitForTick);
    };
    return PDFObjectStreamParser;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$parser$2f$PDFObjectParser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFObjectStreamParser;
 //# sourceMappingURL=PDFObjectStreamParser.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/parser/PDFXRefStreamParser.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$parser$2f$ByteStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/parser/ByteStream.js [app-client] (ecmascript)");
;
;
;
;
;
;
var PDFXRefStreamParser = function() {
    function PDFXRefStreamParser(rawStream) {
        this.alreadyParsed = false;
        this.dict = rawStream.dict;
        this.bytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$parser$2f$ByteStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromPDFRawStream(rawStream);
        this.context = this.dict.context;
        var Size = this.dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Size'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
        var Index = this.dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Index'));
        if (Index instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
            this.subsections = [];
            for(var idx = 0, len = Index.size(); idx < len; idx += 2){
                var firstObjectNumber = Index.lookup(idx + 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).asNumber();
                var length_1 = Index.lookup(idx + 1, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).asNumber();
                this.subsections.push({
                    firstObjectNumber: firstObjectNumber,
                    length: length_1
                });
            }
        } else {
            this.subsections = [
                {
                    firstObjectNumber: 0,
                    length: Size.asNumber()
                }
            ];
        }
        var W = this.dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('W'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
        this.byteWidths = [
            -1,
            -1,
            -1
        ];
        for(var idx = 0, len = W.size(); idx < len; idx++){
            this.byteWidths[idx] = W.lookup(idx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).asNumber();
        }
    }
    PDFXRefStreamParser.prototype.parseIntoContext = function() {
        if (this.alreadyParsed) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReparseError"]('PDFXRefStreamParser', 'parseIntoContext');
        }
        this.alreadyParsed = true;
        this.context.trailerInfo = {
            Root: this.dict.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Root')),
            Encrypt: this.dict.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Encrypt')),
            Info: this.dict.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Info')),
            ID: this.dict.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('ID'))
        };
        var entries = this.parseEntries();
        // for (let idx = 0, len = entries.length; idx < len; idx++) {
        // const entry = entries[idx];
        // if (entry.deleted) this.context.delete(entry.ref);
        // }
        return entries;
    };
    PDFXRefStreamParser.prototype.parseEntries = function() {
        var entries = [];
        var _a = this.byteWidths, typeFieldWidth = _a[0], offsetFieldWidth = _a[1], genFieldWidth = _a[2];
        for(var subsectionIdx = 0, subsectionLen = this.subsections.length; subsectionIdx < subsectionLen; subsectionIdx++){
            var _b = this.subsections[subsectionIdx], firstObjectNumber = _b.firstObjectNumber, length_2 = _b.length;
            for(var objIdx = 0; objIdx < length_2; objIdx++){
                var type = 0;
                for(var idx = 0, len = typeFieldWidth; idx < len; idx++){
                    type = type << 8 | this.bytes.next();
                }
                var offset = 0;
                for(var idx = 0, len = offsetFieldWidth; idx < len; idx++){
                    offset = offset << 8 | this.bytes.next();
                }
                var generationNumber = 0;
                for(var idx = 0, len = genFieldWidth; idx < len; idx++){
                    generationNumber = generationNumber << 8 | this.bytes.next();
                }
                // When the `type` field is absent, it defaults to 1
                if (typeFieldWidth === 0) type = 1;
                var objectNumber = firstObjectNumber + objIdx;
                var entry = {
                    ref: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(objectNumber, generationNumber),
                    offset: offset,
                    deleted: type === 0,
                    inObjectStream: type === 2
                };
                entries.push(entry);
            }
        }
        return entries;
    };
    PDFXRefStreamParser.forStream = function(rawStream) {
        return new PDFXRefStreamParser(rawStream);
    };
    return PDFXRefStreamParser;
}();
const __TURBOPACK__default__export__ = PDFXRefStreamParser;
 //# sourceMappingURL=PDFXRefStreamParser.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/parser/PDFParser.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$document$2f$PDFCrossRefSection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/document/PDFCrossRefSection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$document$2f$PDFHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/document/PDFHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$document$2f$PDFTrailer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/document/PDFTrailer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFDict.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFInvalidObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFInvalidObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRawStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRawStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$parser$2f$ByteStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/parser/ByteStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$parser$2f$PDFObjectParser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/parser/PDFObjectParser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$parser$2f$PDFObjectStreamParser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/parser/PDFObjectStreamParser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$parser$2f$PDFXRefStreamParser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/parser/PDFXRefStreamParser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$PDFContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/PDFContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/CharCodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/Keywords.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Numeric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/Numeric.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/async.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var PDFParser = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFParser, _super);
    function PDFParser(pdfBytes, objectsPerTick, throwOnInvalidObject, capNumbers) {
        if (objectsPerTick === void 0) {
            objectsPerTick = Infinity;
        }
        if (throwOnInvalidObject === void 0) {
            throwOnInvalidObject = false;
        }
        if (capNumbers === void 0) {
            capNumbers = false;
        }
        var _this = _super.call(this, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$parser$2f$ByteStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(pdfBytes), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$PDFContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create(), capNumbers) || this;
        _this.alreadyParsed = false;
        _this.parsedObjects = 0;
        _this.shouldWaitForTick = function() {
            _this.parsedObjects += 1;
            return _this.parsedObjects % _this.objectsPerTick === 0;
        };
        _this.objectsPerTick = objectsPerTick;
        _this.throwOnInvalidObject = throwOnInvalidObject;
        return _this;
    }
    PDFParser.prototype.parseDocument = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var prevOffset, offset;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (this.alreadyParsed) {
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReparseError"]('PDFParser', 'parseDocument');
                        }
                        this.alreadyParsed = true;
                        this.context.header = this.parseHeader();
                        _a.label = 1;
                    case 1:
                        if (!!this.bytes.done()) return [
                            3 /*break*/ ,
                            3
                        ];
                        return [
                            4 /*yield*/ ,
                            this.parseDocumentSection()
                        ];
                    case 2:
                        _a.sent();
                        offset = this.bytes.offset();
                        if (offset === prevOffset) {
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StalledParserError"](this.bytes.position());
                        }
                        prevOffset = offset;
                        return [
                            3 /*break*/ ,
                            1
                        ];
                    case 3:
                        this.maybeRecoverRoot();
                        if (this.context.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(0))) {
                            console.warn('Removing parsed object: 0 0 R');
                            this.context.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(0));
                        }
                        return [
                            2 /*return*/ ,
                            this.context
                        ];
                }
            });
        });
    };
    PDFParser.prototype.maybeRecoverRoot = function() {
        var isValidCatalog = function(obj) {
            return obj instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && obj.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Type')) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Catalog');
        };
        var catalog = this.context.lookup(this.context.trailerInfo.Root);
        if (!isValidCatalog(catalog)) {
            var indirectObjects = this.context.enumerateIndirectObjects();
            for(var idx = 0, len = indirectObjects.length; idx < len; idx++){
                var _a = indirectObjects[idx], ref = _a[0], object = _a[1];
                if (isValidCatalog(object)) {
                    this.context.trailerInfo.Root = ref;
                }
            }
        }
    };
    PDFParser.prototype.parseHeader = function() {
        while(!this.bytes.done()){
            if (this.matchKeyword(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"].header)) {
                var major = this.parseRawInt();
                this.bytes.assertNext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Period);
                var minor = this.parseRawInt();
                var header = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$document$2f$PDFHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forVersion(major, minor);
                this.skipBinaryHeaderComment();
                return header;
            }
            this.bytes.next();
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MissingPDFHeaderError"](this.bytes.position());
    };
    PDFParser.prototype.parseIndirectObjectHeader = function() {
        this.skipWhitespaceAndComments();
        var objectNumber = this.parseRawInt();
        this.skipWhitespaceAndComments();
        var generationNumber = this.parseRawInt();
        this.skipWhitespaceAndComments();
        if (!this.matchKeyword(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"].obj)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MissingKeywordError"](this.bytes.position(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"].obj);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(objectNumber, generationNumber);
    };
    PDFParser.prototype.matchIndirectObjectHeader = function() {
        var initialOffset = this.bytes.offset();
        try {
            this.parseIndirectObjectHeader();
            return true;
        } catch (e) {
            this.bytes.moveTo(initialOffset);
            return false;
        }
    };
    PDFParser.prototype.parseIndirectObject = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var ref, object;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        ref = this.parseIndirectObjectHeader();
                        this.skipWhitespaceAndComments();
                        object = this.parseObject();
                        this.skipWhitespaceAndComments();
                        // if (!this.matchKeyword(Keywords.endobj)) {
                        // throw new MissingKeywordError(this.bytes.position(), Keywords.endobj);
                        // }
                        // TODO: Log a warning if this fails...
                        this.matchKeyword(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"].endobj);
                        if (!(object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRawStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && object.dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Type')) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('ObjStm'))) return [
                            3 /*break*/ ,
                            2
                        ];
                        return [
                            4 /*yield*/ ,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$parser$2f$PDFObjectStreamParser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forStream(object, this.shouldWaitForTick).parseIntoContext()
                        ];
                    case 1:
                        _a.sent();
                        return [
                            3 /*break*/ ,
                            3
                        ];
                    case 2:
                        if (object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRawStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && object.dict.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Type')) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('XRef')) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$parser$2f$PDFXRefStreamParser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forStream(object).parseIntoContext();
                        } else {
                            this.context.assign(ref, object);
                        }
                        _a.label = 3;
                    case 3:
                        return [
                            2 /*return*/ ,
                            ref
                        ];
                }
            });
        });
    };
    // TODO: Improve and clean this up
    PDFParser.prototype.tryToParseInvalidIndirectObject = function() {
        var startPos = this.bytes.position();
        var msg = "Trying to parse invalid object: " + JSON.stringify(startPos) + ")";
        if (this.throwOnInvalidObject) throw new Error(msg);
        console.warn(msg);
        var ref = this.parseIndirectObjectHeader();
        console.warn("Invalid object ref: " + ref);
        this.skipWhitespaceAndComments();
        var start = this.bytes.offset();
        var failed = true;
        while(!this.bytes.done()){
            if (this.matchKeyword(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"].endobj)) {
                failed = false;
            }
            if (!failed) break;
            this.bytes.next();
        }
        if (failed) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFInvalidObjectParsingError"](startPos);
        var end = this.bytes.offset() - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"].endobj.length;
        var object = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFInvalidObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(this.bytes.slice(start, end));
        this.context.assign(ref, object);
        return ref;
    };
    PDFParser.prototype.parseIndirectObjects = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var initialOffset, e_1;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        this.skipWhitespaceAndComments();
                        _a.label = 1;
                    case 1:
                        if (!(!this.bytes.done() && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Numeric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IsDigit"][this.bytes.peek()])) return [
                            3 /*break*/ ,
                            8
                        ];
                        initialOffset = this.bytes.offset();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([
                            2,
                            4,
                            ,
                            5
                        ]);
                        return [
                            4 /*yield*/ ,
                            this.parseIndirectObject()
                        ];
                    case 3:
                        _a.sent();
                        return [
                            3 /*break*/ ,
                            5
                        ];
                    case 4:
                        e_1 = _a.sent();
                        // TODO: Add tracing/logging mechanism to track when this happens!
                        this.bytes.moveTo(initialOffset);
                        this.tryToParseInvalidIndirectObject();
                        return [
                            3 /*break*/ ,
                            5
                        ];
                    case 5:
                        this.skipWhitespaceAndComments();
                        // TODO: Can this be done only when needed, to avoid harming performance?
                        this.skipJibberish();
                        if (!this.shouldWaitForTick()) return [
                            3 /*break*/ ,
                            7
                        ];
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waitForTick"])()
                        ];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        return [
                            3 /*break*/ ,
                            1
                        ];
                    case 8:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    PDFParser.prototype.maybeParseCrossRefSection = function() {
        this.skipWhitespaceAndComments();
        if (!this.matchKeyword(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"].xref)) return;
        this.skipWhitespaceAndComments();
        var objectNumber = -1;
        var xref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$document$2f$PDFCrossRefSection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createEmpty();
        while(!this.bytes.done() && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Numeric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IsDigit"][this.bytes.peek()]){
            var firstInt = this.parseRawInt();
            this.skipWhitespaceAndComments();
            var secondInt = this.parseRawInt();
            this.skipWhitespaceAndComments();
            var byte = this.bytes.peek();
            if (byte === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].n || byte === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].f) {
                var ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(objectNumber, secondInt);
                if (this.bytes.next() === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].n) {
                    xref.addEntry(ref, firstInt);
                } else {
                    // this.context.delete(ref);
                    xref.addDeletedEntry(ref, firstInt);
                }
                objectNumber += 1;
            } else {
                objectNumber = firstInt;
            }
            this.skipWhitespaceAndComments();
        }
        return xref;
    };
    PDFParser.prototype.maybeParseTrailerDict = function() {
        this.skipWhitespaceAndComments();
        if (!this.matchKeyword(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"].trailer)) return;
        this.skipWhitespaceAndComments();
        var dict = this.parseDict();
        var context = this.context;
        context.trailerInfo = {
            Root: dict.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Root')) || context.trailerInfo.Root,
            Encrypt: dict.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Encrypt')) || context.trailerInfo.Encrypt,
            Info: dict.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('Info')) || context.trailerInfo.Info,
            ID: dict.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of('ID')) || context.trailerInfo.ID
        };
    };
    PDFParser.prototype.maybeParseTrailer = function() {
        this.skipWhitespaceAndComments();
        if (!this.matchKeyword(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"].startxref)) return;
        this.skipWhitespaceAndComments();
        var offset = this.parseRawInt();
        this.skipWhitespace();
        this.matchKeyword(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"].eof);
        this.skipWhitespaceAndComments();
        this.matchKeyword(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"].eof);
        this.skipWhitespaceAndComments();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$document$2f$PDFTrailer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forLastCrossRefSectionOffset(offset);
    };
    PDFParser.prototype.parseDocumentSection = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.parseIndirectObjects()
                        ];
                    case 1:
                        _a.sent();
                        this.maybeParseCrossRefSection();
                        this.maybeParseTrailerDict();
                        this.maybeParseTrailer();
                        // TODO: Can this be done only when needed, to avoid harming performance?
                        this.skipJibberish();
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    /**
     * This operation is not necessary for valid PDF files. But some invalid PDFs
     * contain jibberish in between indirect objects. This method is designed to
     * skip past that jibberish, should it exist, until it reaches the next
     * indirect object header, an xref table section, or the file trailer.
     */ PDFParser.prototype.skipJibberish = function() {
        this.skipWhitespaceAndComments();
        while(!this.bytes.done()){
            var initialOffset = this.bytes.offset();
            var byte = this.bytes.peek();
            var isAlphaNumeric = byte >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Space && byte <= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Tilde;
            if (isAlphaNumeric) {
                if (this.matchKeyword(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"].xref) || this.matchKeyword(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"].trailer) || this.matchKeyword(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$Keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"].startxref) || this.matchIndirectObjectHeader()) {
                    this.bytes.moveTo(initialOffset);
                    break;
                }
            }
            this.bytes.next();
        }
    };
    /**
     * Skips the binary comment following a PDF header. The specification
     * defines this binary comment (section 7.5.2 File Header) as a sequence of 4
     * or more bytes that are 128 or greater, and which are preceded by a "%".
     *
     * This would imply that to strip out this binary comment, we could check for
     * a sequence of bytes starting with "%", and remove all subsequent bytes that
     * are 128 or greater. This works for many documents that properly comply with
     * the spec. But in the wild, there are PDFs that omit the leading "%", and
     * include bytes that are less than 128 (e.g. 0 or 1). So in order to parse
     * these headers correctly, we just throw out all bytes leading up to the
     * first indirect object header.
     */ PDFParser.prototype.skipBinaryHeaderComment = function() {
        this.skipWhitespaceAndComments();
        try {
            var initialOffset = this.bytes.offset();
            this.parseIndirectObjectHeader();
            this.bytes.moveTo(initialOffset);
        } catch (e) {
            this.bytes.next();
            this.skipWhitespaceAndComments();
        }
    };
    PDFParser.forBytesWithOptions = function(pdfBytes, objectsPerTick, throwOnInvalidObject, capNumbers) {
        return new PDFParser(pdfBytes, objectsPerTick, throwOnInvalidObject, capNumbers);
    };
    return PDFParser;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$parser$2f$PDFObjectParser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFParser;
 //# sourceMappingURL=PDFParser.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/annotation/flags.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnnotationFlags",
    ()=>AnnotationFlags
]);
var flag = function(bitIndex) {
    return 1 << bitIndex;
};
var AnnotationFlags;
(function(AnnotationFlags) {
    /**
     * If set, do not display the annotation if it does not belong to one of the
     * standard annotation types and no annotation handler is available. If clear,
     * display such an unknown annotation using an appearance stream specified by
     * its appearance dictionary, if any.
     */ AnnotationFlags[AnnotationFlags["Invisible"] = flag(1 - 1)] = "Invisible";
    /**
     * If set, do not display or print the annotation or allow it to interact with
     * the user, regardless of its annotation type or whether an annotation
     * handler is available.
     *
     * In cases where screen space is limited, the ability to hide and show
     * annotations selectively can be used in combination with appearance streams
     * to display auxiliary pop-up information similar in function to online help
     * systems.
     */ AnnotationFlags[AnnotationFlags["Hidden"] = flag(2 - 1)] = "Hidden";
    /**
     * If set, print the annotation when the page is printed. If clear, never
     * print the annotation, regardless of whether it is displayed on the screen.
     *
     * This can be useful for annotations representing interactive pushbuttons,
     * which would serve no meaningful purpose on the printed page.
     */ AnnotationFlags[AnnotationFlags["Print"] = flag(3 - 1)] = "Print";
    /**
     * If set, do not scale the annotation’s appearance to match the magnification
     * of the page. The location of the annotation on the page (defined by the
     * upper-left corner of its annotation rectangle) shall remain fixed,
     * regardless of the page magnification.
     */ AnnotationFlags[AnnotationFlags["NoZoom"] = flag(4 - 1)] = "NoZoom";
    /**
     * If set, do not rotate the annotation’s appearance to match the rotation of
     * the page. The upper-left corner of the annotation rectangle shall remain in
     * a fixed location on the page, regardless of the page rotation.
     */ AnnotationFlags[AnnotationFlags["NoRotate"] = flag(5 - 1)] = "NoRotate";
    /**
     * If set, do not display the annotation on the screen or allow it to interact
     * with the user. The annotation may be printed (depending on the setting of
     * the Print flag) but should be considered hidden for purposes of on-screen
     * display and user interaction.
     */ AnnotationFlags[AnnotationFlags["NoView"] = flag(6 - 1)] = "NoView";
    /**
     * If set, do not allow the annotation to interact with the user. The
     * annotation may be displayed or printed (depending on the settings of the
     * NoView and Print flags) but should not respond to mouse clicks or change
     * its appearance in response to mouse motions.
     *
     * This flag shall be ignored for widget annotations; its function is
     * subsumed by the ReadOnly flag of the associated form field.
     */ AnnotationFlags[AnnotationFlags["ReadOnly"] = flag(7 - 1)] = "ReadOnly";
    /**
     * If set, do not allow the annotation to be deleted or its properties
     * (including position and size) to be modified by the user. However, this
     * flag does not restrict changes to the annotation’s contents, such as the
     * value of a form field.
     */ AnnotationFlags[AnnotationFlags["Locked"] = flag(8 - 1)] = "Locked";
    /**
     * If set, invert the interpretation of the NoView flag for certain events.
     *
     * A typical use is to have an annotation that appears only when a mouse
     * cursor is held over it.
     */ AnnotationFlags[AnnotationFlags["ToggleNoView"] = flag(9 - 1)] = "ToggleNoView";
    /**
     * If set, do not allow the contents of the annotation to be modified by the
     * user. This flag does not restrict deletion of the annotation or changes to
     * other annotation properties, such as position and size.
     */ AnnotationFlags[AnnotationFlags["LockedContents"] = flag(10 - 1)] = "LockedContents";
})(AnnotationFlags || (AnnotationFlags = {})); //# sourceMappingURL=flags.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/annotation/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$PDFAnnotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/annotation/PDFAnnotation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$PDFWidgetAnnotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/annotation/PDFWidgetAnnotation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$AppearanceCharacteristics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/annotation/AppearanceCharacteristics.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/annotation/flags.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$syntax$2f$CharCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/syntax/CharCodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$PDFContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/PDFContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$PDFObjectCopier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/PDFObjectCopier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$writers$2f$PDFWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/writers/PDFWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$writers$2f$PDFStreamWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/writers/PDFStreamWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$document$2f$PDFHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/document/PDFHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$document$2f$PDFTrailer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/document/PDFTrailer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$document$2f$PDFTrailerDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/document/PDFTrailerDict.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$document$2f$PDFCrossRefSection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/document/PDFCrossRefSection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$StandardFontEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/StandardFontEmbedder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$CustomFontEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/CustomFontEmbedder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$CustomFontSubsetEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/CustomFontSubsetEmbedder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$FileEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/FileEmbedder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$JpegEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/JpegEmbedder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$PngEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/PngEmbedder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$PDFPageEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/PDFPageEmbedder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$interactive$2f$ViewerPreferences$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/interactive/ViewerPreferences.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFBool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFBool.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFHexString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNull$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNull.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFDict.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFInvalidObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFInvalidObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRawStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRawStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFCatalog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFCatalog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFContentStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFContentStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFCrossRefStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFCrossRefStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFObjectStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFObjectStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFPageTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFPageTree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFPageLeaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFPageLeaf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFFlateStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFFlateStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/operators/PDFOperator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/operators/PDFOperatorNames.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$parser$2f$PDFObjectParser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/parser/PDFObjectParser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$parser$2f$PDFObjectStreamParser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/parser/PDFObjectStreamParser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$parser$2f$PDFParser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/parser/PDFParser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$parser$2f$PDFXRefStreamParser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/parser/PDFXRefStreamParser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$streams$2f$decode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/streams/decode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/annotation/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/index.js [app-client] (ecmascript) <locals>"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript) <export default as PDFName>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PDFName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNumber.js [app-client] (ecmascript) <export default as PDFNumber>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PDFNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNumber.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/operators/PDFOperator.js [app-client] (ecmascript) <export default as PDFOperator>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PDFOperator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/operators/PDFOperator.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/operators/PDFOperatorNames.js [app-client] (ecmascript) <export default as PDFOperatorNames>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PDFOperatorNames",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/operators/PDFOperatorNames.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/PDFPageEmbedder.js [app-client] (ecmascript) <export default as PDFPageEmbedder>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PDFPageEmbedder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$PDFPageEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$PDFPageEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/PDFPageEmbedder.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRef.js [app-client] (ecmascript) <export default as PDFRef>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PDFRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRef.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/CustomFontEmbedder.js [app-client] (ecmascript) <export default as CustomFontEmbedder>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomFontEmbedder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$CustomFontEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$CustomFontEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/CustomFontEmbedder.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/StandardFontEmbedder.js [app-client] (ecmascript) <export default as StandardFontEmbedder>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StandardFontEmbedder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$StandardFontEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$StandardFontEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/StandardFontEmbedder.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/JpegEmbedder.js [app-client] (ecmascript) <export default as JpegEmbedder>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JpegEmbedder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$JpegEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$JpegEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/JpegEmbedder.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/PngEmbedder.js [app-client] (ecmascript) <export default as PngEmbedder>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PngEmbedder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$PngEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$PngEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/PngEmbedder.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/annotation/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnnotationFlags",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnnotationFlags"],
    "AppearanceCharacteristics",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$AppearanceCharacteristics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PDFAnnotation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$PDFAnnotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PDFWidgetAnnotation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$PDFWidgetAnnotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/annotation/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$PDFAnnotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/annotation/PDFAnnotation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$PDFWidgetAnnotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/annotation/PDFWidgetAnnotation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$AppearanceCharacteristics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/annotation/AppearanceCharacteristics.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/annotation/flags.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AcroButtonFlags",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroButtonFlags"],
    "AcroChoiceFlags",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"],
    "AcroFieldFlags",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroFieldFlags"],
    "AcroTextFlags",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroTextFlags"],
    "PDFAcroButton",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PDFAcroCheckBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroCheckBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PDFAcroChoice",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroChoice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PDFAcroComboBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroComboBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PDFAcroField",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PDFAcroForm",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PDFAcroListBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroListBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PDFAcroNonTerminal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroNonTerminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PDFAcroPushButton",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroPushButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PDFAcroRadioButton",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroRadioButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PDFAcroSignature",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PDFAcroTerminal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroTerminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PDFAcroText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "createPDFAcroField",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPDFAcroField"],
    "createPDFAcroFields",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPDFAcroFields"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroCheckBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroCheckBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroChoice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroChoice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroComboBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroComboBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroListBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroListBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroNonTerminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroNonTerminal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroPushButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroPushButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroRadioButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroRadioButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroSignature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroTerminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroTerminal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$PDFAcroText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/PDFAcroText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/flags.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/utils.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFDict.js [app-client] (ecmascript) <export default as PDFDict>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PDFDict",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFDict.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFHexString.js [app-client] (ecmascript) <export default as PDFHexString>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PDFHexString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFHexString.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFStream.js [app-client] (ecmascript) <export default as PDFStream>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PDFStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFStream.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/CustomFontSubsetEmbedder.js [app-client] (ecmascript) <export default as CustomFontSubsetEmbedder>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomFontSubsetEmbedder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$CustomFontSubsetEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$CustomFontSubsetEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/CustomFontSubsetEmbedder.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFCatalog.js [app-client] (ecmascript) <export default as PDFCatalog>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PDFCatalog",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFCatalog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFCatalog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFCatalog.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/PDFContext.js [app-client] (ecmascript) <export default as PDFContext>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PDFContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$PDFContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$PDFContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/PDFContext.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/PDFObjectCopier.js [app-client] (ecmascript) <export default as PDFObjectCopier>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PDFObjectCopier",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$PDFObjectCopier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$PDFObjectCopier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/PDFObjectCopier.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFPageLeaf.js [app-client] (ecmascript) <export default as PDFPageLeaf>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PDFPageLeaf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFPageLeaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFPageLeaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFPageLeaf.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFPageTree.js [app-client] (ecmascript) <export default as PDFPageTree>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PDFPageTree",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFPageTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFPageTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFPageTree.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/parser/PDFParser.js [app-client] (ecmascript) <export default as PDFParser>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PDFParser",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$parser$2f$PDFParser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$parser$2f$PDFParser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/parser/PDFParser.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/writers/PDFStreamWriter.js [app-client] (ecmascript) <export default as PDFStreamWriter>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PDFStreamWriter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$writers$2f$PDFStreamWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$writers$2f$PDFStreamWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/writers/PDFStreamWriter.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFString.js [app-client] (ecmascript) <export default as PDFString>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PDFString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFString.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/writers/PDFWriter.js [app-client] (ecmascript) <export default as PDFWriter>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PDFWriter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$writers$2f$PDFWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$writers$2f$PDFWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/writers/PDFWriter.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFArray.js [app-client] (ecmascript) <export default as PDFArray>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PDFArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFArray.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/JavaScriptEmbedder.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFHexString.js [app-client] (ecmascript)");
;
;
var JavaScriptEmbedder = function() {
    function JavaScriptEmbedder(script, scriptName) {
        this.script = script;
        this.scriptName = scriptName;
    }
    JavaScriptEmbedder.for = function(script, scriptName) {
        return new JavaScriptEmbedder(script, scriptName);
    };
    JavaScriptEmbedder.prototype.embedIntoContext = function(context, ref) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var jsActionDict;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                jsActionDict = context.obj({
                    Type: 'Action',
                    S: 'JavaScript',
                    JS: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromText(this.script)
                });
                if (ref) {
                    context.assign(ref, jsActionDict);
                    return [
                        2 /*return*/ ,
                        ref
                    ];
                } else {
                    return [
                        2 /*return*/ ,
                        context.register(jsActionDict)
                    ];
                }
                //TURBOPACK unreachable
                ;
            });
        });
    };
    return JavaScriptEmbedder;
}();
const __TURBOPACK__default__export__ = JavaScriptEmbedder;
 //# sourceMappingURL=JavaScriptEmbedder.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFContentStream.js [app-client] (ecmascript) <export default as PDFContentStream>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PDFContentStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFContentStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFContentStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFContentStream.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=6726b_pdf-lib_es_core_ca8b70bb._.js.map