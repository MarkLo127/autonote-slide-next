(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/objects.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "asNumber",
    ()=>asNumber,
    "asPDFName",
    ()=>asPDFName,
    "asPDFNumber",
    ()=>asPDFNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript) <export default as PDFName>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFNumber$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFNumber.js [app-client] (ecmascript) <export default as PDFNumber>");
;
var asPDFName = function(name) {
    return name instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"] ? name : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of(name);
};
var asPDFNumber = function(num) {
    return num instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFNumber$3e$__["PDFNumber"] ? num : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFNumber$3e$__["PDFNumber"].of(num);
};
var asNumber = function(num) {
    return num instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFNumber$3e$__["PDFNumber"] ? num.asNumber() : num;
}; //# sourceMappingURL=objects.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/rotations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RotationTypes",
    ()=>RotationTypes,
    "adjustDimsForRotation",
    ()=>adjustDimsForRotation,
    "degrees",
    ()=>degrees,
    "degreesToRadians",
    ()=>degreesToRadians,
    "radians",
    ()=>radians,
    "radiansToDegrees",
    ()=>radiansToDegrees,
    "reduceRotation",
    ()=>reduceRotation,
    "rotateRectangle",
    ()=>rotateRectangle,
    "toDegrees",
    ()=>toDegrees,
    "toRadians",
    ()=>toRadians
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/validators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/errors.js [app-client] (ecmascript)");
;
var RotationTypes;
(function(RotationTypes) {
    RotationTypes["Degrees"] = "degrees";
    RotationTypes["Radians"] = "radians";
})(RotationTypes || (RotationTypes = {}));
var radians = function(radianAngle) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(radianAngle, 'radianAngle', [
        'number'
    ]);
    return {
        type: RotationTypes.Radians,
        angle: radianAngle
    };
};
var degrees = function(degreeAngle) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(degreeAngle, 'degreeAngle', [
        'number'
    ]);
    return {
        type: RotationTypes.Degrees,
        angle: degreeAngle
    };
};
var Radians = RotationTypes.Radians, Degrees = RotationTypes.Degrees;
var degreesToRadians = function(degree) {
    return degree * Math.PI / 180;
};
var radiansToDegrees = function(radian) {
    return radian * 180 / Math.PI;
};
var toRadians = function(rotation) {
    return rotation.type === Radians ? rotation.angle : rotation.type === Degrees ? degreesToRadians(rotation.angle) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["error"])("Invalid rotation: " + JSON.stringify(rotation));
};
var toDegrees = function(rotation) {
    return rotation.type === Radians ? radiansToDegrees(rotation.angle) : rotation.type === Degrees ? rotation.angle : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["error"])("Invalid rotation: " + JSON.stringify(rotation));
};
var reduceRotation = function(degreeAngle) {
    if (degreeAngle === void 0) {
        degreeAngle = 0;
    }
    var quadrants = degreeAngle / 90 % 4;
    if (quadrants === 0) return 0;
    if (quadrants === 1) return 90;
    if (quadrants === 2) return 180;
    if (quadrants === 3) return 270;
    return 0; // `degreeAngle` is not a multiple of 90
};
var adjustDimsForRotation = function(dims, degreeAngle) {
    if (degreeAngle === void 0) {
        degreeAngle = 0;
    }
    var rotation = reduceRotation(degreeAngle);
    return rotation === 90 || rotation === 270 ? {
        width: dims.height,
        height: dims.width
    } : {
        width: dims.width,
        height: dims.height
    };
};
var rotateRectangle = function(rectangle, borderWidth, degreeAngle) {
    if (borderWidth === void 0) {
        borderWidth = 0;
    }
    if (degreeAngle === void 0) {
        degreeAngle = 0;
    }
    var x = rectangle.x, y = rectangle.y, w = rectangle.width, h = rectangle.height;
    var r = reduceRotation(degreeAngle);
    var b = borderWidth / 2;
    // prettier-ignore
    if (r === 0) return {
        x: x - b,
        y: y - b,
        width: w,
        height: h
    };
    else if (r === 90) return {
        x: x - h + b,
        y: y - b,
        width: h,
        height: w
    };
    else if (r === 180) return {
        x: x - w + b,
        y: y - h + b,
        width: w,
        height: h
    };
    else if (r === 270) return {
        x: x - b,
        y: y - w + b,
        width: h,
        height: w
    };
    else return {
        x: x - b,
        y: y - b,
        width: w,
        height: h
    };
}; //# sourceMappingURL=rotations.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/operators.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LineCapStyle",
    ()=>LineCapStyle,
    "LineJoinStyle",
    ()=>LineJoinStyle,
    "TextRenderingMode",
    ()=>TextRenderingMode,
    "appendBezierCurve",
    ()=>appendBezierCurve,
    "appendQuadraticCurve",
    ()=>appendQuadraticCurve,
    "beginMarkedContent",
    ()=>beginMarkedContent,
    "beginText",
    ()=>beginText,
    "clip",
    ()=>clip,
    "clipEvenOdd",
    ()=>clipEvenOdd,
    "closePath",
    ()=>closePath,
    "concatTransformationMatrix",
    ()=>concatTransformationMatrix,
    "drawObject",
    ()=>drawObject,
    "endMarkedContent",
    ()=>endMarkedContent,
    "endPath",
    ()=>endPath,
    "endText",
    ()=>endText,
    "fill",
    ()=>fill,
    "fillAndStroke",
    ()=>fillAndStroke,
    "lineTo",
    ()=>lineTo,
    "moveText",
    ()=>moveText,
    "moveTo",
    ()=>moveTo,
    "nextLine",
    ()=>nextLine,
    "popGraphicsState",
    ()=>popGraphicsState,
    "pushGraphicsState",
    ()=>pushGraphicsState,
    "rectangle",
    ()=>rectangle,
    "restoreDashPattern",
    ()=>restoreDashPattern,
    "rotateAndSkewTextDegreesAndTranslate",
    ()=>rotateAndSkewTextDegreesAndTranslate,
    "rotateAndSkewTextRadiansAndTranslate",
    ()=>rotateAndSkewTextRadiansAndTranslate,
    "rotateDegrees",
    ()=>rotateDegrees,
    "rotateRadians",
    ()=>rotateRadians,
    "scale",
    ()=>scale,
    "setCharacterSpacing",
    ()=>setCharacterSpacing,
    "setCharacterSqueeze",
    ()=>setCharacterSqueeze,
    "setDashPattern",
    ()=>setDashPattern,
    "setFillingCmykColor",
    ()=>setFillingCmykColor,
    "setFillingGrayscaleColor",
    ()=>setFillingGrayscaleColor,
    "setFillingRgbColor",
    ()=>setFillingRgbColor,
    "setFontAndSize",
    ()=>setFontAndSize,
    "setGraphicsState",
    ()=>setGraphicsState,
    "setLineCap",
    ()=>setLineCap,
    "setLineHeight",
    ()=>setLineHeight,
    "setLineJoin",
    ()=>setLineJoin,
    "setLineWidth",
    ()=>setLineWidth,
    "setStrokingCmykColor",
    ()=>setStrokingCmykColor,
    "setStrokingGrayscaleColor",
    ()=>setStrokingGrayscaleColor,
    "setStrokingRgbColor",
    ()=>setStrokingRgbColor,
    "setTextMatrix",
    ()=>setTextMatrix,
    "setTextRenderingMode",
    ()=>setTextRenderingMode,
    "setTextRise",
    ()=>setTextRise,
    "setWordSpacing",
    ()=>setWordSpacing,
    "showText",
    ()=>showText,
    "skewDegrees",
    ()=>skewDegrees,
    "skewRadians",
    ()=>skewRadians,
    "square",
    ()=>square,
    "stroke",
    ()=>stroke,
    "translate",
    ()=>translate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/objects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/rotations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/operators/PDFOperator.js [app-client] (ecmascript) <export default as PDFOperator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/operators/PDFOperatorNames.js [app-client] (ecmascript) <export default as PDFOperatorNames>");
;
;
;
var clip = function() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].ClipNonZero);
};
var clipEvenOdd = function() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].ClipEvenOdd);
};
/* ==================== Graphics State Operators ==================== */ var cos = Math.cos, sin = Math.sin, tan = Math.tan;
var concatTransformationMatrix = function(a, b, c, d, e, f) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].ConcatTransformationMatrix, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(a),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(b),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(c),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(d),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(e),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(f)
    ]);
};
var translate = function(xPos, yPos) {
    return concatTransformationMatrix(1, 0, 0, 1, xPos, yPos);
};
var scale = function(xPos, yPos) {
    return concatTransformationMatrix(xPos, 0, 0, yPos, 0, 0);
};
var rotateRadians = function(angle) {
    return concatTransformationMatrix(cos((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(angle)), sin((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(angle)), -sin((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(angle)), cos((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(angle)), 0, 0);
};
var rotateDegrees = function(angle) {
    return rotateRadians((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degreesToRadians"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(angle)));
};
var skewRadians = function(xSkewAngle, ySkewAngle) {
    return concatTransformationMatrix(1, tan((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(xSkewAngle)), tan((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(ySkewAngle)), 1, 0, 0);
};
var skewDegrees = function(xSkewAngle, ySkewAngle) {
    return skewRadians((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degreesToRadians"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(xSkewAngle)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degreesToRadians"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(ySkewAngle)));
};
var setDashPattern = function(dashArray, dashPhase) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].SetLineDashPattern, [
        "[" + dashArray.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"]).join(' ') + "]",
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(dashPhase)
    ]);
};
var restoreDashPattern = function() {
    return setDashPattern([], 0);
};
var LineCapStyle;
(function(LineCapStyle) {
    LineCapStyle[LineCapStyle["Butt"] = 0] = "Butt";
    LineCapStyle[LineCapStyle["Round"] = 1] = "Round";
    LineCapStyle[LineCapStyle["Projecting"] = 2] = "Projecting";
})(LineCapStyle || (LineCapStyle = {}));
var setLineCap = function(style) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].SetLineCapStyle, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(style)
    ]);
};
var LineJoinStyle;
(function(LineJoinStyle) {
    LineJoinStyle[LineJoinStyle["Miter"] = 0] = "Miter";
    LineJoinStyle[LineJoinStyle["Round"] = 1] = "Round";
    LineJoinStyle[LineJoinStyle["Bevel"] = 2] = "Bevel";
})(LineJoinStyle || (LineJoinStyle = {}));
var setLineJoin = function(style) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].SetLineJoinStyle, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(style)
    ]);
};
var setGraphicsState = function(state) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].SetGraphicsStateParams, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFName"])(state)
    ]);
};
var pushGraphicsState = function() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].PushGraphicsState);
};
var popGraphicsState = function() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].PopGraphicsState);
};
var setLineWidth = function(width) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].SetLineWidth, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(width)
    ]);
};
var appendBezierCurve = function(x1, y1, x2, y2, x3, y3) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].AppendBezierCurve, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(x1),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(y1),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(x2),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(y2),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(x3),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(y3)
    ]);
};
var appendQuadraticCurve = function(x1, y1, x2, y2) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].CurveToReplicateInitialPoint, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(x1),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(y1),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(x2),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(y2)
    ]);
};
var closePath = function() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].ClosePath);
};
var moveTo = function(xPos, yPos) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].MoveTo, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(xPos),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(yPos)
    ]);
};
var lineTo = function(xPos, yPos) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].LineTo, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(xPos),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(yPos)
    ]);
};
var rectangle = function(xPos, yPos, width, height) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].AppendRectangle, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(xPos),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(yPos),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(width),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(height)
    ]);
};
var square = function(xPos, yPos, size) {
    return rectangle(xPos, yPos, size, size);
};
var stroke = function() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].StrokePath);
};
var fill = function() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].FillNonZero);
};
var fillAndStroke = function() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].FillNonZeroAndStroke);
};
var endPath = function() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].EndPath);
};
var nextLine = function() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].NextLine);
};
var moveText = function(x, y) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].MoveText, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(x),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(y)
    ]);
};
var showText = function(text) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].ShowText, [
        text
    ]);
};
var beginText = function() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].BeginText);
};
var endText = function() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].EndText);
};
var setFontAndSize = function(name, size) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].SetFontAndSize, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFName"])(name),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(size)
    ]);
};
var setCharacterSpacing = function(spacing) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].SetCharacterSpacing, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(spacing)
    ]);
};
var setWordSpacing = function(spacing) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].SetWordSpacing, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(spacing)
    ]);
};
var setCharacterSqueeze = function(squeeze) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].SetTextHorizontalScaling, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(squeeze)
    ]);
};
var setLineHeight = function(lineHeight) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].SetTextLineHeight, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(lineHeight)
    ]);
};
var setTextRise = function(rise) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].SetTextRise, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(rise)
    ]);
};
var TextRenderingMode;
(function(TextRenderingMode) {
    TextRenderingMode[TextRenderingMode["Fill"] = 0] = "Fill";
    TextRenderingMode[TextRenderingMode["Outline"] = 1] = "Outline";
    TextRenderingMode[TextRenderingMode["FillAndOutline"] = 2] = "FillAndOutline";
    TextRenderingMode[TextRenderingMode["Invisible"] = 3] = "Invisible";
    TextRenderingMode[TextRenderingMode["FillAndClip"] = 4] = "FillAndClip";
    TextRenderingMode[TextRenderingMode["OutlineAndClip"] = 5] = "OutlineAndClip";
    TextRenderingMode[TextRenderingMode["FillAndOutlineAndClip"] = 6] = "FillAndOutlineAndClip";
    TextRenderingMode[TextRenderingMode["Clip"] = 7] = "Clip";
})(TextRenderingMode || (TextRenderingMode = {}));
var setTextRenderingMode = function(mode) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].SetTextRenderingMode, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(mode)
    ]);
};
var setTextMatrix = function(a, b, c, d, e, f) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].SetTextMatrix, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(a),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(b),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(c),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(d),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(e),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(f)
    ]);
};
var rotateAndSkewTextRadiansAndTranslate = function(rotationAngle, xSkewAngle, ySkewAngle, x, y) {
    return setTextMatrix(cos((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(rotationAngle)), sin((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(rotationAngle)) + tan((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(xSkewAngle)), -sin((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(rotationAngle)) + tan((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(ySkewAngle)), cos((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(rotationAngle)), x, y);
};
var rotateAndSkewTextDegreesAndTranslate = function(rotationAngle, xSkewAngle, ySkewAngle, x, y) {
    return rotateAndSkewTextRadiansAndTranslate((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degreesToRadians"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(rotationAngle)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degreesToRadians"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(xSkewAngle)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degreesToRadians"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(ySkewAngle)), x, y);
};
var drawObject = function(name) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].DrawObject, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFName"])(name)
    ]);
};
var setFillingGrayscaleColor = function(gray) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].NonStrokingColorGray, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(gray)
    ]);
};
var setStrokingGrayscaleColor = function(gray) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].StrokingColorGray, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(gray)
    ]);
};
var setFillingRgbColor = function(red, green, blue) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].NonStrokingColorRgb, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(red),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(green),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(blue)
    ]);
};
var setStrokingRgbColor = function(red, green, blue) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].StrokingColorRgb, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(red),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(green),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(blue)
    ]);
};
var setFillingCmykColor = function(cyan, magenta, yellow, key) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].NonStrokingColorCmyk, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(cyan),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(magenta),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(yellow),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(key)
    ]);
};
var setStrokingCmykColor = function(cyan, magenta, yellow, key) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].StrokingColorCmyk, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(cyan),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(magenta),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(yellow),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"])(key)
    ]);
};
var beginMarkedContent = function(tag) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].BeginMarkedContent, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFName"])(tag)
    ]);
};
var endMarkedContent = function() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"].of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperatorNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperatorNames$3e$__["PDFOperatorNames"].EndMarkedContent);
}; //# sourceMappingURL=operators.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/colors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColorTypes",
    ()=>ColorTypes,
    "cmyk",
    ()=>cmyk,
    "colorToComponents",
    ()=>colorToComponents,
    "componentsToColor",
    ()=>componentsToColor,
    "grayscale",
    ()=>grayscale,
    "rgb",
    ()=>rgb,
    "setFillingColor",
    ()=>setFillingColor,
    "setStrokingColor",
    ()=>setStrokingColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/operators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/validators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/errors.js [app-client] (ecmascript)");
;
;
var ColorTypes;
(function(ColorTypes) {
    ColorTypes["Grayscale"] = "Grayscale";
    ColorTypes["RGB"] = "RGB";
    ColorTypes["CMYK"] = "CMYK";
})(ColorTypes || (ColorTypes = {}));
var grayscale = function(gray) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRange"])(gray, 'gray', 0.0, 1.0);
    return {
        type: ColorTypes.Grayscale,
        gray: gray
    };
};
var rgb = function(red, green, blue) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRange"])(red, 'red', 0, 1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRange"])(green, 'green', 0, 1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRange"])(blue, 'blue', 0, 1);
    return {
        type: ColorTypes.RGB,
        red: red,
        green: green,
        blue: blue
    };
};
var cmyk = function(cyan, magenta, yellow, key) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRange"])(cyan, 'cyan', 0, 1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRange"])(magenta, 'magenta', 0, 1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRange"])(yellow, 'yellow', 0, 1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRange"])(key, 'key', 0, 1);
    return {
        type: ColorTypes.CMYK,
        cyan: cyan,
        magenta: magenta,
        yellow: yellow,
        key: key
    };
};
var Grayscale = ColorTypes.Grayscale, RGB = ColorTypes.RGB, CMYK = ColorTypes.CMYK;
var setFillingColor = function(color) {
    return color.type === Grayscale ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFillingGrayscaleColor"])(color.gray) : color.type === RGB ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFillingRgbColor"])(color.red, color.green, color.blue) : color.type === CMYK ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFillingCmykColor"])(color.cyan, color.magenta, color.yellow, color.key) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["error"])("Invalid color: " + JSON.stringify(color));
};
var setStrokingColor = function(color) {
    return color.type === Grayscale ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStrokingGrayscaleColor"])(color.gray) : color.type === RGB ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStrokingRgbColor"])(color.red, color.green, color.blue) : color.type === CMYK ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStrokingCmykColor"])(color.cyan, color.magenta, color.yellow, color.key) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["error"])("Invalid color: " + JSON.stringify(color));
};
var componentsToColor = function(comps, scale) {
    if (scale === void 0) {
        scale = 1;
    }
    return (comps === null || comps === void 0 ? void 0 : comps.length) === 1 ? grayscale(comps[0] * scale) : (comps === null || comps === void 0 ? void 0 : comps.length) === 3 ? rgb(comps[0] * scale, comps[1] * scale, comps[2] * scale) : (comps === null || comps === void 0 ? void 0 : comps.length) === 4 ? cmyk(comps[0] * scale, comps[1] * scale, comps[2] * scale, comps[3] * scale) : undefined;
};
var colorToComponents = function(color) {
    return color.type === Grayscale ? [
        color.gray
    ] : color.type === RGB ? [
        color.red,
        color.green,
        color.blue
    ] : color.type === CMYK ? [
        color.cyan,
        color.magenta,
        color.yellow,
        color.key
    ] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["error"])("Invalid color: " + JSON.stringify(color));
}; //# sourceMappingURL=colors.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/svgPath.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Originated from pdfkit Copyright (c) 2014 Devon Govett
// https://github.com/foliojs/pdfkit/blob/1e62e6ffe24b378eb890df507a47610f4c4a7b24/lib/path.js
// MIT LICENSE
// Updated for pdf-lib & TypeScript by Jeremy Messenger
__turbopack_context__.s([
    "svgPathToOperators",
    ()=>svgPathToOperators
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/operators.js [app-client] (ecmascript)");
;
var cx = 0;
var cy = 0;
var px = 0;
var py = 0;
var sx = 0;
var sy = 0;
var parameters = new Map([
    [
        'A',
        7
    ],
    [
        'a',
        7
    ],
    [
        'C',
        6
    ],
    [
        'c',
        6
    ],
    [
        'H',
        1
    ],
    [
        'h',
        1
    ],
    [
        'L',
        2
    ],
    [
        'l',
        2
    ],
    [
        'M',
        2
    ],
    [
        'm',
        2
    ],
    [
        'Q',
        4
    ],
    [
        'q',
        4
    ],
    [
        'S',
        4
    ],
    [
        's',
        4
    ],
    [
        'T',
        2
    ],
    [
        't',
        2
    ],
    [
        'V',
        1
    ],
    [
        'v',
        1
    ],
    [
        'Z',
        0
    ],
    [
        'z',
        0
    ]
]);
var parse = function(path) {
    var cmd;
    var ret = [];
    var args = [];
    var curArg = '';
    var foundDecimal = false;
    var params = 0;
    for(var _i = 0, path_1 = path; _i < path_1.length; _i++){
        var c = path_1[_i];
        if (parameters.has(c)) {
            params = parameters.get(c);
            if (cmd) {
                // save existing command
                if (curArg.length > 0) {
                    args[args.length] = +curArg;
                }
                ret[ret.length] = {
                    cmd: cmd,
                    args: args
                };
                args = [];
                curArg = '';
                foundDecimal = false;
            }
            cmd = c;
        } else if ([
            ' ',
            ','
        ].includes(c) || c === '-' && curArg.length > 0 && curArg[curArg.length - 1] !== 'e' || c === '.' && foundDecimal) {
            if (curArg.length === 0) {
                continue;
            }
            if (args.length === params) {
                // handle reused commands
                ret[ret.length] = {
                    cmd: cmd,
                    args: args
                };
                args = [
                    +curArg
                ];
                // handle assumed commands
                if (cmd === 'M') {
                    cmd = 'L';
                }
                if (cmd === 'm') {
                    cmd = 'l';
                }
            } else {
                args[args.length] = +curArg;
            }
            foundDecimal = c === '.';
            // fix for negative numbers or repeated decimals with no delimeter between commands
            curArg = [
                '-',
                '.'
            ].includes(c) ? c : '';
        } else {
            curArg += c;
            if (c === '.') {
                foundDecimal = true;
            }
        }
    }
    // add the last command
    if (curArg.length > 0) {
        if (args.length === params) {
            // handle reused commands
            ret[ret.length] = {
                cmd: cmd,
                args: args
            };
            args = [
                +curArg
            ];
            // handle assumed commands
            if (cmd === 'M') {
                cmd = 'L';
            }
            if (cmd === 'm') {
                cmd = 'l';
            }
        } else {
            args[args.length] = +curArg;
        }
    }
    ret[ret.length] = {
        cmd: cmd,
        args: args
    };
    return ret;
};
var apply = function(commands) {
    // current point, control point, and subpath starting point
    cx = cy = px = py = sx = sy = 0;
    // run the commands
    var cmds = [];
    for(var i = 0; i < commands.length; i++){
        var c = commands[i];
        if (c.cmd && typeof runners[c.cmd] === 'function') {
            var cmd = runners[c.cmd](c.args);
            if (Array.isArray(cmd)) {
                cmds = cmds.concat(cmd);
            } else {
                cmds.push(cmd);
            }
        }
    }
    return cmds;
};
var runners = {
    M: function(a) {
        cx = a[0];
        cy = a[1];
        px = py = null;
        sx = cx;
        sy = cy;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moveTo"])(cx, cy);
    },
    m: function(a) {
        cx += a[0];
        cy += a[1];
        px = py = null;
        sx = cx;
        sy = cy;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moveTo"])(cx, cy);
    },
    C: function(a) {
        cx = a[4];
        cy = a[5];
        px = a[2];
        py = a[3];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendBezierCurve"])(a[0], a[1], a[2], a[3], a[4], a[5]);
    },
    c: function(a) {
        var cmd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendBezierCurve"])(a[0] + cx, a[1] + cy, a[2] + cx, a[3] + cy, a[4] + cx, a[5] + cy);
        px = cx + a[2];
        py = cy + a[3];
        cx += a[4];
        cy += a[5];
        return cmd;
    },
    S: function(a) {
        if (px === null || py === null) {
            px = cx;
            py = cy;
        }
        var cmd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendBezierCurve"])(cx - (px - cx), cy - (py - cy), a[0], a[1], a[2], a[3]);
        px = a[0];
        py = a[1];
        cx = a[2];
        cy = a[3];
        return cmd;
    },
    s: function(a) {
        if (px === null || py === null) {
            px = cx;
            py = cy;
        }
        var cmd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendBezierCurve"])(cx - (px - cx), cy - (py - cy), cx + a[0], cy + a[1], cx + a[2], cy + a[3]);
        px = cx + a[0];
        py = cy + a[1];
        cx += a[2];
        cy += a[3];
        return cmd;
    },
    Q: function(a) {
        px = a[0];
        py = a[1];
        cx = a[2];
        cy = a[3];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendQuadraticCurve"])(a[0], a[1], cx, cy);
    },
    q: function(a) {
        var cmd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendQuadraticCurve"])(a[0] + cx, a[1] + cy, a[2] + cx, a[3] + cy);
        px = cx + a[0];
        py = cy + a[1];
        cx += a[2];
        cy += a[3];
        return cmd;
    },
    T: function(a) {
        if (px === null || py === null) {
            px = cx;
            py = cy;
        } else {
            px = cx - (px - cx);
            py = cy - (py - cy);
        }
        var cmd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendQuadraticCurve"])(px, py, a[0], a[1]);
        px = cx - (px - cx);
        py = cy - (py - cy);
        cx = a[0];
        cy = a[1];
        return cmd;
    },
    t: function(a) {
        if (px === null || py === null) {
            px = cx;
            py = cy;
        } else {
            px = cx - (px - cx);
            py = cy - (py - cy);
        }
        var cmd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendQuadraticCurve"])(px, py, cx + a[0], cy + a[1]);
        cx += a[0];
        cy += a[1];
        return cmd;
    },
    A: function(a) {
        var cmds = solveArc(cx, cy, a);
        cx = a[5];
        cy = a[6];
        return cmds;
    },
    a: function(a) {
        a[5] += cx;
        a[6] += cy;
        var cmds = solveArc(cx, cy, a);
        cx = a[5];
        cy = a[6];
        return cmds;
    },
    L: function(a) {
        cx = a[0];
        cy = a[1];
        px = py = null;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineTo"])(cx, cy);
    },
    l: function(a) {
        cx += a[0];
        cy += a[1];
        px = py = null;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineTo"])(cx, cy);
    },
    H: function(a) {
        cx = a[0];
        px = py = null;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineTo"])(cx, cy);
    },
    h: function(a) {
        cx += a[0];
        px = py = null;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineTo"])(cx, cy);
    },
    V: function(a) {
        cy = a[0];
        px = py = null;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineTo"])(cx, cy);
    },
    v: function(a) {
        cy += a[0];
        px = py = null;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineTo"])(cx, cy);
    },
    Z: function() {
        var cmd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closePath"])();
        cx = sx;
        cy = sy;
        return cmd;
    },
    z: function() {
        var cmd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closePath"])();
        cx = sx;
        cy = sy;
        return cmd;
    }
};
var solveArc = function(x, y, coords) {
    var rx = coords[0], ry = coords[1], rot = coords[2], large = coords[3], sweep = coords[4], ex = coords[5], ey = coords[6];
    var segs = arcToSegments(ex, ey, rx, ry, large, sweep, rot, x, y);
    var cmds = [];
    for(var _i = 0, segs_1 = segs; _i < segs_1.length; _i++){
        var seg = segs_1[_i];
        var bez = segmentToBezier.apply(void 0, seg);
        cmds.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendBezierCurve"].apply(void 0, bez));
    }
    return cmds;
};
// from Inkscape svgtopdf, thanks!
var arcToSegments = function(x, y, rx, ry, large, sweep, rotateX, ox, oy) {
    var th = rotateX * (Math.PI / 180);
    var sinTh = Math.sin(th);
    var cosTh = Math.cos(th);
    rx = Math.abs(rx);
    ry = Math.abs(ry);
    px = cosTh * (ox - x) * 0.5 + sinTh * (oy - y) * 0.5;
    py = cosTh * (oy - y) * 0.5 - sinTh * (ox - x) * 0.5;
    var pl = px * px / (rx * rx) + py * py / (ry * ry);
    if (pl > 1) {
        pl = Math.sqrt(pl);
        rx *= pl;
        ry *= pl;
    }
    var a00 = cosTh / rx;
    var a01 = sinTh / rx;
    var a10 = -sinTh / ry;
    var a11 = cosTh / ry;
    var x0 = a00 * ox + a01 * oy;
    var y0 = a10 * ox + a11 * oy;
    var x1 = a00 * x + a01 * y;
    var y1 = a10 * x + a11 * y;
    var d = (x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0);
    var sfactorSq = 1 / d - 0.25;
    if (sfactorSq < 0) {
        sfactorSq = 0;
    }
    var sfactor = Math.sqrt(sfactorSq);
    if (sweep === large) {
        sfactor = -sfactor;
    }
    var xc = 0.5 * (x0 + x1) - sfactor * (y1 - y0);
    var yc = 0.5 * (y0 + y1) + sfactor * (x1 - x0);
    var th0 = Math.atan2(y0 - yc, x0 - xc);
    var th1 = Math.atan2(y1 - yc, x1 - xc);
    var thArc = th1 - th0;
    if (thArc < 0 && sweep === 1) {
        thArc += 2 * Math.PI;
    } else if (thArc > 0 && sweep === 0) {
        thArc -= 2 * Math.PI;
    }
    var segments = Math.ceil(Math.abs(thArc / (Math.PI * 0.5 + 0.001)));
    var result = [];
    for(var i = 0; i < segments; i++){
        var th2 = th0 + i * thArc / segments;
        var th3 = th0 + (i + 1) * thArc / segments;
        result[i] = [
            xc,
            yc,
            th2,
            th3,
            rx,
            ry,
            sinTh,
            cosTh
        ];
    }
    return result;
};
var segmentToBezier = function(cx1, cy1, th0, th1, rx, ry, sinTh, cosTh) {
    var a00 = cosTh * rx;
    var a01 = -sinTh * ry;
    var a10 = sinTh * rx;
    var a11 = cosTh * ry;
    var thHalf = 0.5 * (th1 - th0);
    var t = 8 / 3 * Math.sin(thHalf * 0.5) * Math.sin(thHalf * 0.5) / Math.sin(thHalf);
    var x1 = cx1 + Math.cos(th0) - t * Math.sin(th0);
    var y1 = cy1 + Math.sin(th0) + t * Math.cos(th0);
    var x3 = cx1 + Math.cos(th1);
    var y3 = cy1 + Math.sin(th1);
    var x2 = x3 + t * Math.sin(th1);
    var y2 = y3 - t * Math.cos(th1);
    var result = [
        a00 * x1 + a01 * y1,
        a10 * x1 + a11 * y1,
        a00 * x2 + a01 * y2,
        a10 * x2 + a11 * y2,
        a00 * x3 + a01 * y3,
        a10 * x3 + a11 * y3
    ];
    return result;
};
var svgPathToOperators = function(path) {
    return apply(parse(path));
}; //# sourceMappingURL=svgPath.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/operations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "drawButton",
    ()=>drawButton,
    "drawCheckBox",
    ()=>drawCheckBox,
    "drawCheckMark",
    ()=>drawCheckMark,
    "drawEllipse",
    ()=>drawEllipse,
    "drawEllipsePath",
    ()=>drawEllipsePath,
    "drawImage",
    ()=>drawImage,
    "drawLine",
    ()=>drawLine,
    "drawLinesOfText",
    ()=>drawLinesOfText,
    "drawOptionList",
    ()=>drawOptionList,
    "drawPage",
    ()=>drawPage,
    "drawRadioButton",
    ()=>drawRadioButton,
    "drawRectangle",
    ()=>drawRectangle,
    "drawSvgPath",
    ()=>drawSvgPath,
    "drawText",
    ()=>drawText,
    "drawTextField",
    ()=>drawTextField,
    "drawTextLines",
    ()=>drawTextLines,
    "rotateInPlace",
    ()=>rotateInPlace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/operators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/rotations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$svgPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/svgPath.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/objects.js [app-client] (ecmascript)");
;
;
;
;
;
;
var drawText = function(line, options) {
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushGraphicsState"])(),
        options.graphicsState && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setGraphicsState"])(options.graphicsState),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["beginText"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFillingColor"])(options.color),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFontAndSize"])(options.font, options.size),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateAndSkewTextRadiansAndTranslate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRadians"])(options.rotate), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRadians"])(options.xSkew), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRadians"])(options.ySkew), options.x, options.y),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showText"])(line),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endText"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popGraphicsState"])()
    ].filter(Boolean);
};
var drawLinesOfText = function(lines, options) {
    var operators = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushGraphicsState"])(),
        options.graphicsState && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setGraphicsState"])(options.graphicsState),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["beginText"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFillingColor"])(options.color),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFontAndSize"])(options.font, options.size),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLineHeight"])(options.lineHeight),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateAndSkewTextRadiansAndTranslate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRadians"])(options.rotate), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRadians"])(options.xSkew), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRadians"])(options.ySkew), options.x, options.y)
    ].filter(Boolean);
    for(var idx = 0, len = lines.length; idx < len; idx++){
        operators.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showText"])(lines[idx]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextLine"])());
    }
    operators.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endText"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popGraphicsState"])());
    return operators;
};
var drawImage = function(name, options) {
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushGraphicsState"])(),
        options.graphicsState && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setGraphicsState"])(options.graphicsState),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translate"])(options.x, options.y),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateRadians"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRadians"])(options.rotate)),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(options.width, options.height),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skewRadians"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRadians"])(options.xSkew), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRadians"])(options.ySkew)),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawObject"])(name),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popGraphicsState"])()
    ].filter(Boolean);
};
var drawPage = function(name, options) {
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushGraphicsState"])(),
        options.graphicsState && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setGraphicsState"])(options.graphicsState),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translate"])(options.x, options.y),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateRadians"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRadians"])(options.rotate)),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(options.xScale, options.yScale),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skewRadians"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRadians"])(options.xSkew), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRadians"])(options.ySkew)),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawObject"])(name),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popGraphicsState"])()
    ].filter(Boolean);
};
var drawLine = function(options) {
    var _a, _b;
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushGraphicsState"])(),
        options.graphicsState && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setGraphicsState"])(options.graphicsState),
        options.color && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStrokingColor"])(options.color),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLineWidth"])(options.thickness),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDashPattern"])((_a = options.dashArray) !== null && _a !== void 0 ? _a : [], (_b = options.dashPhase) !== null && _b !== void 0 ? _b : 0),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moveTo"])(options.start.x, options.start.y),
        options.lineCap && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLineCap"])(options.lineCap),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moveTo"])(options.start.x, options.start.y),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineTo"])(options.end.x, options.end.y),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stroke"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popGraphicsState"])()
    ].filter(Boolean);
};
var drawRectangle = function(options) {
    var _a, _b;
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushGraphicsState"])(),
        options.graphicsState && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setGraphicsState"])(options.graphicsState),
        options.color && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFillingColor"])(options.color),
        options.borderColor && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStrokingColor"])(options.borderColor),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLineWidth"])(options.borderWidth),
        options.borderLineCap && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLineCap"])(options.borderLineCap),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDashPattern"])((_a = options.borderDashArray) !== null && _a !== void 0 ? _a : [], (_b = options.borderDashPhase) !== null && _b !== void 0 ? _b : 0),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translate"])(options.x, options.y),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateRadians"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRadians"])(options.rotate)),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skewRadians"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRadians"])(options.xSkew), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRadians"])(options.ySkew)),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moveTo"])(0, 0),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineTo"])(0, options.height),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineTo"])(options.width, options.height),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineTo"])(options.width, 0),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closePath"])(),
        // prettier-ignore
        options.color && options.borderWidth ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fillAndStroke"])() : options.color ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"])() : options.borderColor ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stroke"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closePath"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popGraphicsState"])()
    ].filter(Boolean);
};
var KAPPA = 4.0 * ((Math.sqrt(2) - 1.0) / 3.0);
var drawEllipsePath = function(config) {
    var x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(config.x);
    var y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(config.y);
    var xScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(config.xScale);
    var yScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(config.yScale);
    x -= xScale;
    y -= yScale;
    var ox = xScale * KAPPA;
    var oy = yScale * KAPPA;
    var xe = x + xScale * 2;
    var ye = y + yScale * 2;
    var xm = x + xScale;
    var ym = y + yScale;
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushGraphicsState"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moveTo"])(x, ym),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendBezierCurve"])(x, ym - oy, xm - ox, y, xm, y),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendBezierCurve"])(xm + ox, y, xe, ym - oy, xe, ym),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendBezierCurve"])(xe, ym + oy, xm + ox, ye, xm, ye),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendBezierCurve"])(xm - ox, ye, x, ym + oy, x, ym),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popGraphicsState"])()
    ];
};
var drawEllipseCurves = function(config) {
    var centerX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(config.x);
    var centerY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(config.y);
    var xScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(config.xScale);
    var yScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(config.yScale);
    var x = -xScale;
    var y = -yScale;
    var ox = xScale * KAPPA;
    var oy = yScale * KAPPA;
    var xe = x + xScale * 2;
    var ye = y + yScale * 2;
    var xm = x + xScale;
    var ym = y + yScale;
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translate"])(centerX, centerY),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateRadians"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRadians"])(config.rotate)),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moveTo"])(x, ym),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendBezierCurve"])(x, ym - oy, xm - ox, y, xm, y),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendBezierCurve"])(xm + ox, y, xe, ym - oy, xe, ym),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendBezierCurve"])(xe, ym + oy, xm + ox, ye, xm, ye),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendBezierCurve"])(xm - ox, ye, x, ym + oy, x, ym)
    ];
};
var drawEllipse = function(options) {
    var _a, _b, _c;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushGraphicsState"])(),
        options.graphicsState && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setGraphicsState"])(options.graphicsState),
        options.color && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFillingColor"])(options.color),
        options.borderColor && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStrokingColor"])(options.borderColor),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLineWidth"])(options.borderWidth),
        options.borderLineCap && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLineCap"])(options.borderLineCap),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDashPattern"])((_a = options.borderDashArray) !== null && _a !== void 0 ? _a : [], (_b = options.borderDashPhase) !== null && _b !== void 0 ? _b : 0)
    ], options.rotate === undefined ? drawEllipsePath({
        x: options.x,
        y: options.y,
        xScale: options.xScale,
        yScale: options.yScale
    }) : drawEllipseCurves({
        x: options.x,
        y: options.y,
        xScale: options.xScale,
        yScale: options.yScale,
        rotate: (_c = options.rotate) !== null && _c !== void 0 ? _c : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0)
    }), [
        // prettier-ignore
        options.color && options.borderWidth ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fillAndStroke"])() : options.color ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"])() : options.borderColor ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stroke"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closePath"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popGraphicsState"])()
    ]).filter(Boolean);
};
var drawSvgPath = function(path, options) {
    var _a, _b, _c;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushGraphicsState"])(),
        options.graphicsState && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setGraphicsState"])(options.graphicsState),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translate"])(options.x, options.y),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateRadians"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRadians"])((_a = options.rotate) !== null && _a !== void 0 ? _a : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0))),
        // SVG path Y axis is opposite pdf-lib's
        options.scale ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(options.scale, -options.scale) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(1, -1),
        options.color && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFillingColor"])(options.color),
        options.borderColor && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStrokingColor"])(options.borderColor),
        options.borderWidth && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLineWidth"])(options.borderWidth),
        options.borderLineCap && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLineCap"])(options.borderLineCap),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDashPattern"])((_b = options.borderDashArray) !== null && _b !== void 0 ? _b : [], (_c = options.borderDashPhase) !== null && _c !== void 0 ? _c : 0)
    ], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$svgPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["svgPathToOperators"])(path), [
        // prettier-ignore
        options.color && options.borderWidth ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fillAndStroke"])() : options.color ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"])() : options.borderColor ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stroke"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closePath"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popGraphicsState"])()
    ]).filter(Boolean);
};
var drawCheckMark = function(options) {
    var size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(options.size);
    /*********************** Define Check Mark Points ***************************/ // A check mark is defined by three points in some coordinate space. Here, we
    // define these points in a unit coordinate system, where the range of the x
    // and y axis are both [-1, 1].
    //
    // Note that we do not hard code `p1y` in case we wish to change the
    // size/shape of the check mark in the future. We want the check mark to
    // always form a right angle. This means that the dot product between (p1-p2)
    // and (p3-p2) should be zero:
    //
    //   (p1x-p2x) * (p3x-p2x) + (p1y-p2y) * (p3y-p2y) = 0
    //
    // We can now rejigger this equation to solve for `p1y`:
    //
    //   (p1y-p2y) * (p3y-p2y) = -((p1x-p2x) * (p3x-p2x))
    //   (p1y-p2y) = -((p1x-p2x) * (p3x-p2x)) / (p3y-p2y)
    //   p1y = -((p1x-p2x) * (p3x-p2x)) / (p3y-p2y) + p2y
    //
    // Thanks to my friend Joel Walker (https://github.com/JWalker1995) for
    // devising the above equation and unit coordinate system approach!
    // (x, y) coords of the check mark's bottommost point
    var p2x = -1 + 0.75;
    var p2y = -1 + 0.51;
    // (x, y) coords of the check mark's topmost point
    var p3y = 1 - 0.525;
    var p3x = 1 - 0.31;
    // (x, y) coords of the check mark's center (vertically) point
    var p1x = -1 + 0.325;
    var p1y = -((p1x - p2x) * (p3x - p2x)) / (p3y - p2y) + p2y;
    /****************************************************************************/ return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushGraphicsState"])(),
        options.color && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStrokingColor"])(options.color),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLineWidth"])(options.thickness),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translate"])(options.x, options.y),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moveTo"])(p1x * size, p1y * size),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineTo"])(p2x * size, p2y * size),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineTo"])(p3x * size, p3y * size),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stroke"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popGraphicsState"])()
    ].filter(Boolean);
};
var rotateInPlace = function(options) {
    return options.rotation === 0 ? [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translate"])(0, 0),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateDegrees"])(0)
    ] : options.rotation === 90 ? [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translate"])(options.width, 0),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateDegrees"])(90)
    ] : options.rotation === 180 ? [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translate"])(options.width, options.height),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateDegrees"])(180)
    ] : options.rotation === 270 ? [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translate"])(0, options.height),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateDegrees"])(270)
    ] : [];
}; // Invalid rotation - noop
var drawCheckBox = function(options) {
    var outline = drawRectangle({
        x: options.x,
        y: options.y,
        width: options.width,
        height: options.height,
        borderWidth: options.borderWidth,
        color: options.color,
        borderColor: options.borderColor,
        rotate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
        xSkew: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
        ySkew: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0)
    });
    if (!options.filled) return outline;
    var width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(options.width);
    var height = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(options.height);
    var checkMarkSize = Math.min(width, height) / 2;
    var checkMark = drawCheckMark({
        x: width / 2,
        y: height / 2,
        size: checkMarkSize,
        thickness: options.thickness,
        color: options.markColor
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushGraphicsState"])()
    ], outline, checkMark, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popGraphicsState"])()
    ]);
};
var drawRadioButton = function(options) {
    var width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(options.width);
    var height = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(options.height);
    var outlineScale = Math.min(width, height) / 2;
    var outline = drawEllipse({
        x: options.x,
        y: options.y,
        xScale: outlineScale,
        yScale: outlineScale,
        color: options.color,
        borderColor: options.borderColor,
        borderWidth: options.borderWidth
    });
    if (!options.filled) return outline;
    var dot = drawEllipse({
        x: options.x,
        y: options.y,
        xScale: outlineScale * 0.45,
        yScale: outlineScale * 0.45,
        color: options.dotColor,
        borderColor: undefined,
        borderWidth: 0
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushGraphicsState"])()
    ], outline, dot, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popGraphicsState"])()
    ]);
};
var drawButton = function(options) {
    var x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(options.x);
    var y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(options.y);
    var width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(options.width);
    var height = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(options.height);
    var background = drawRectangle({
        x: x,
        y: y,
        width: width,
        height: height,
        borderWidth: options.borderWidth,
        color: options.color,
        borderColor: options.borderColor,
        rotate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
        xSkew: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
        ySkew: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0)
    });
    var lines = drawTextLines(options.textLines, {
        color: options.textColor,
        font: options.font,
        size: options.fontSize,
        rotate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
        xSkew: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
        ySkew: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0)
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushGraphicsState"])()
    ], background, lines, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popGraphicsState"])()
    ]);
};
var drawTextLines = function(lines, options) {
    var operators = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["beginText"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFillingColor"])(options.color),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFontAndSize"])(options.font, options.size)
    ];
    for(var idx = 0, len = lines.length; idx < len; idx++){
        var _a = lines[idx], encoded = _a.encoded, x = _a.x, y = _a.y;
        operators.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateAndSkewTextRadiansAndTranslate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRadians"])(options.rotate), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRadians"])(options.xSkew), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRadians"])(options.ySkew), x, y), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showText"])(encoded));
    }
    operators.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endText"])());
    return operators;
};
var drawTextField = function(options) {
    var x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(options.x);
    var y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(options.y);
    var width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(options.width);
    var height = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(options.height);
    var borderWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(options.borderWidth);
    var padding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(options.padding);
    var clipX = x + borderWidth / 2 + padding;
    var clipY = y + borderWidth / 2 + padding;
    var clipWidth = width - (borderWidth / 2 + padding) * 2;
    var clipHeight = height - (borderWidth / 2 + padding) * 2;
    var clippingArea = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moveTo"])(clipX, clipY),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineTo"])(clipX, clipY + clipHeight),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineTo"])(clipX + clipWidth, clipY + clipHeight),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineTo"])(clipX + clipWidth, clipY),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closePath"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clip"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endPath"])()
    ];
    var background = drawRectangle({
        x: x,
        y: y,
        width: width,
        height: height,
        borderWidth: options.borderWidth,
        color: options.color,
        borderColor: options.borderColor,
        rotate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
        xSkew: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
        ySkew: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0)
    });
    var lines = drawTextLines(options.textLines, {
        color: options.textColor,
        font: options.font,
        size: options.fontSize,
        rotate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
        xSkew: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
        ySkew: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0)
    });
    var markedContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["beginMarkedContent"])('Tx'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushGraphicsState"])()
    ], lines, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popGraphicsState"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endMarkedContent"])()
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushGraphicsState"])()
    ], background, clippingArea, markedContent, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popGraphicsState"])()
    ]);
};
var drawOptionList = function(options) {
    var x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(options.x);
    var y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(options.y);
    var width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(options.width);
    var height = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(options.height);
    var lineHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(options.lineHeight);
    var borderWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(options.borderWidth);
    var padding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"])(options.padding);
    var clipX = x + borderWidth / 2 + padding;
    var clipY = y + borderWidth / 2 + padding;
    var clipWidth = width - (borderWidth / 2 + padding) * 2;
    var clipHeight = height - (borderWidth / 2 + padding) * 2;
    var clippingArea = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moveTo"])(clipX, clipY),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineTo"])(clipX, clipY + clipHeight),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineTo"])(clipX + clipWidth, clipY + clipHeight),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineTo"])(clipX + clipWidth, clipY),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closePath"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clip"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endPath"])()
    ];
    var background = drawRectangle({
        x: x,
        y: y,
        width: width,
        height: height,
        borderWidth: options.borderWidth,
        color: options.color,
        borderColor: options.borderColor,
        rotate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
        xSkew: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
        ySkew: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0)
    });
    var highlights = [];
    for(var idx = 0, len = options.selectedLines.length; idx < len; idx++){
        var line = options.textLines[options.selectedLines[idx]];
        highlights.push.apply(highlights, drawRectangle({
            x: line.x - padding,
            y: line.y - (lineHeight - line.height) / 2,
            width: width - borderWidth,
            height: line.height + (lineHeight - line.height) / 2,
            borderWidth: 0,
            color: options.selectedColor,
            borderColor: undefined,
            rotate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
            xSkew: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
            ySkew: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0)
        }));
    }
    var lines = drawTextLines(options.textLines, {
        color: options.textColor,
        font: options.font,
        size: options.fontSize,
        rotate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
        xSkew: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
        ySkew: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0)
    });
    var markedContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["beginMarkedContent"])('Tx'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushGraphicsState"])()
    ], lines, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popGraphicsState"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endMarkedContent"])()
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushGraphicsState"])()
    ], background, highlights, clippingArea, markedContent, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popGraphicsState"])()
    ]);
}; //# sourceMappingURL=operations.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/errors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// tslint:disable: max-classes-per-file
__turbopack_context__.s([
    "CombedTextLayoutError",
    ()=>CombedTextLayoutError,
    "EncryptedPDFError",
    ()=>EncryptedPDFError,
    "ExceededMaxLengthError",
    ()=>ExceededMaxLengthError,
    "FieldAlreadyExistsError",
    ()=>FieldAlreadyExistsError,
    "FieldExistsAsNonTerminalError",
    ()=>FieldExistsAsNonTerminalError,
    "FontkitNotRegisteredError",
    ()=>FontkitNotRegisteredError,
    "ForeignPageError",
    ()=>ForeignPageError,
    "InvalidFieldNamePartError",
    ()=>InvalidFieldNamePartError,
    "InvalidMaxLengthError",
    ()=>InvalidMaxLengthError,
    "MissingOnValueCheckError",
    ()=>MissingOnValueCheckError,
    "NoSuchFieldError",
    ()=>NoSuchFieldError,
    "RemovePageFromEmptyDocumentError",
    ()=>RemovePageFromEmptyDocumentError,
    "RichTextFieldReadError",
    ()=>RichTextFieldReadError,
    "UnexpectedFieldTypeError",
    ()=>UnexpectedFieldTypeError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
;
// TODO: Include link to documentation with example
var EncryptedPDFError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(EncryptedPDFError, _super);
    function EncryptedPDFError() {
        var _this = this;
        var msg = 'Input document to `PDFDocument.load` is encrypted. You can use `PDFDocument.load(..., { ignoreEncryption: true })` if you wish to load the document anyways.';
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return EncryptedPDFError;
}(Error);
;
// TODO: Include link to documentation with example
var FontkitNotRegisteredError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(FontkitNotRegisteredError, _super);
    function FontkitNotRegisteredError() {
        var _this = this;
        var msg = 'Input to `PDFDocument.embedFont` was a custom font, but no `fontkit` instance was found. You must register a `fontkit` instance with `PDFDocument.registerFontkit(...)` before embedding custom fonts.';
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return FontkitNotRegisteredError;
}(Error);
;
// TODO: Include link to documentation with example
var ForeignPageError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(ForeignPageError, _super);
    function ForeignPageError() {
        var _this = this;
        var msg = 'A `page` passed to `PDFDocument.addPage` or `PDFDocument.insertPage` was from a different (foreign) PDF document. If you want to copy pages from one PDFDocument to another, you must use `PDFDocument.copyPages(...)` to copy the pages before adding or inserting them.';
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return ForeignPageError;
}(Error);
;
// TODO: Include link to documentation with example
var RemovePageFromEmptyDocumentError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(RemovePageFromEmptyDocumentError, _super);
    function RemovePageFromEmptyDocumentError() {
        var _this = this;
        var msg = 'PDFDocument has no pages so `PDFDocument.removePage` cannot be called';
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return RemovePageFromEmptyDocumentError;
}(Error);
;
var NoSuchFieldError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(NoSuchFieldError, _super);
    function NoSuchFieldError(name) {
        var _this = this;
        var msg = "PDFDocument has no form field with the name \"" + name + "\"";
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return NoSuchFieldError;
}(Error);
;
var UnexpectedFieldTypeError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(UnexpectedFieldTypeError, _super);
    function UnexpectedFieldTypeError(name, expected, actual) {
        var _a, _b;
        var _this = this;
        var expectedType = expected === null || expected === void 0 ? void 0 : expected.name;
        var actualType = (_b = (_a = actual === null || actual === void 0 ? void 0 : actual.constructor) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : actual;
        var msg = "Expected field \"" + name + "\" to be of type " + expectedType + ", " + ("but it is actually of type " + actualType);
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return UnexpectedFieldTypeError;
}(Error);
;
var MissingOnValueCheckError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(MissingOnValueCheckError, _super);
    function MissingOnValueCheckError(onValue) {
        var _this = this;
        var msg = "Failed to select check box due to missing onValue: \"" + onValue + "\"";
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return MissingOnValueCheckError;
}(Error);
;
var FieldAlreadyExistsError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(FieldAlreadyExistsError, _super);
    function FieldAlreadyExistsError(name) {
        var _this = this;
        var msg = "A field already exists with the specified name: \"" + name + "\"";
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return FieldAlreadyExistsError;
}(Error);
;
var InvalidFieldNamePartError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(InvalidFieldNamePartError, _super);
    function InvalidFieldNamePartError(namePart) {
        var _this = this;
        var msg = "Field name contains invalid component: \"" + namePart + "\"";
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return InvalidFieldNamePartError;
}(Error);
;
var FieldExistsAsNonTerminalError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(FieldExistsAsNonTerminalError, _super);
    function FieldExistsAsNonTerminalError(name) {
        var _this = this;
        var msg = "A non-terminal field already exists with the specified name: \"" + name + "\"";
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return FieldExistsAsNonTerminalError;
}(Error);
;
var RichTextFieldReadError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(RichTextFieldReadError, _super);
    function RichTextFieldReadError(fieldName) {
        var _this = this;
        var msg = "Reading rich text fields is not supported: Attempted to read rich text field: " + fieldName;
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return RichTextFieldReadError;
}(Error);
;
var CombedTextLayoutError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(CombedTextLayoutError, _super);
    function CombedTextLayoutError(lineLength, cellCount) {
        var _this = this;
        var msg = "Failed to layout combed text as lineLength=" + lineLength + " is greater than cellCount=" + cellCount;
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return CombedTextLayoutError;
}(Error);
;
var ExceededMaxLengthError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(ExceededMaxLengthError, _super);
    function ExceededMaxLengthError(textLength, maxLength, name) {
        var _this = this;
        var msg = "Attempted to set text with length=" + textLength + " for TextField with maxLength=" + maxLength + " and name=" + name;
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return ExceededMaxLengthError;
}(Error);
;
var InvalidMaxLengthError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(InvalidMaxLengthError, _super);
    function InvalidMaxLengthError(textLength, maxLength, name) {
        var _this = this;
        var msg = "Attempted to set maxLength=" + maxLength + ", which is less than " + textLength + ", the length of this field's current value (name=" + name + ")";
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return InvalidMaxLengthError;
}(Error);
;
 //# sourceMappingURL=errors.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/text/alignment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextAlignment",
    ()=>TextAlignment
]);
var TextAlignment;
(function(TextAlignment) {
    TextAlignment[TextAlignment["Left"] = 0] = "Left";
    TextAlignment[TextAlignment["Center"] = 1] = "Center";
    TextAlignment[TextAlignment["Right"] = 2] = "Right";
})(TextAlignment || (TextAlignment = {})); //# sourceMappingURL=alignment.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/text/layout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "layoutCombedText",
    ()=>layoutCombedText,
    "layoutMultilineText",
    ()=>layoutMultilineText,
    "layoutSinglelineText",
    ()=>layoutSinglelineText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/text/alignment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/strings.js [app-client] (ecmascript)");
;
;
;
var MIN_FONT_SIZE = 4;
var MAX_FONT_SIZE = 500;
var computeFontSize = function(lines, font, bounds, multiline) {
    if (multiline === void 0) {
        multiline = false;
    }
    var fontSize = MIN_FONT_SIZE;
    while(fontSize < MAX_FONT_SIZE){
        var linesUsed = 0;
        for(var lineIdx = 0, lineLen = lines.length; lineIdx < lineLen; lineIdx++){
            linesUsed += 1;
            var line = lines[lineIdx];
            var words = line.split(' ');
            // Layout the words using the current `fontSize`, line wrapping
            // whenever we reach the end of the current line.
            var spaceInLineRemaining = bounds.width;
            for(var idx = 0, len = words.length; idx < len; idx++){
                var isLastWord = idx === len - 1;
                var word = isLastWord ? words[idx] : words[idx] + ' ';
                var widthOfWord = font.widthOfTextAtSize(word, fontSize);
                spaceInLineRemaining -= widthOfWord;
                if (spaceInLineRemaining <= 0) {
                    linesUsed += 1;
                    spaceInLineRemaining = bounds.width - widthOfWord;
                }
            }
        }
        // Return if we exceeded the allowed width
        if (!multiline && linesUsed > lines.length) return fontSize - 1;
        var height = font.heightAtSize(fontSize);
        var lineHeight = height + height * 0.2;
        var totalHeight = lineHeight * linesUsed;
        // Return if we exceeded the allowed height
        if (totalHeight > Math.abs(bounds.height)) return fontSize - 1;
        fontSize += 1;
    }
    return fontSize;
};
var computeCombedFontSize = function(line, font, bounds, cellCount) {
    var cellWidth = bounds.width / cellCount;
    var cellHeight = bounds.height;
    var fontSize = MIN_FONT_SIZE;
    var chars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charSplit"])(line);
    while(fontSize < MAX_FONT_SIZE){
        for(var idx = 0, len = chars.length; idx < len; idx++){
            var c = chars[idx];
            var tooLong = font.widthOfTextAtSize(c, fontSize) > cellWidth * 0.75;
            if (tooLong) return fontSize - 1;
        }
        var height = font.heightAtSize(fontSize, {
            descender: false
        });
        if (height > cellHeight) return fontSize - 1;
        fontSize += 1;
    }
    return fontSize;
};
var lastIndexOfWhitespace = function(line) {
    for(var idx = line.length; idx > 0; idx--){
        if (/\s/.test(line[idx])) return idx;
    }
    return undefined;
};
var splitOutLines = function(input, maxWidth, font, fontSize) {
    var _a;
    var lastWhitespaceIdx = input.length;
    while(lastWhitespaceIdx > 0){
        var line = input.substring(0, lastWhitespaceIdx);
        var encoded = font.encodeText(line);
        var width = font.widthOfTextAtSize(line, fontSize);
        if (width < maxWidth) {
            var remainder = input.substring(lastWhitespaceIdx) || undefined;
            return {
                line: line,
                encoded: encoded,
                width: width,
                remainder: remainder
            };
        }
        lastWhitespaceIdx = (_a = lastIndexOfWhitespace(line)) !== null && _a !== void 0 ? _a : 0;
    }
    // We were unable to split the input enough to get a chunk that would fit
    // within the specified `maxWidth` so we'll just return everything
    return {
        line: input,
        encoded: font.encodeText(input),
        width: font.widthOfTextAtSize(input, fontSize),
        remainder: undefined
    };
};
var layoutMultilineText = function(text, _a) {
    var alignment = _a.alignment, fontSize = _a.fontSize, font = _a.font, bounds = _a.bounds;
    var lines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineSplit"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanText"])(text));
    if (fontSize === undefined || fontSize === 0) {
        fontSize = computeFontSize(lines, font, bounds, true);
    }
    var height = font.heightAtSize(fontSize);
    var lineHeight = height + height * 0.2;
    var textLines = [];
    var minX = bounds.x;
    var minY = bounds.y;
    var maxX = bounds.x + bounds.width;
    var maxY = bounds.y + bounds.height;
    var y = bounds.y + bounds.height;
    for(var idx = 0, len = lines.length; idx < len; idx++){
        var prevRemainder = lines[idx];
        while(prevRemainder !== undefined){
            var _b = splitOutLines(prevRemainder, bounds.width, font, fontSize), line = _b.line, encoded = _b.encoded, width = _b.width, remainder = _b.remainder;
            // prettier-ignore
            var x = alignment === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextAlignment"].Left ? bounds.x : alignment === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextAlignment"].Center ? bounds.x + bounds.width / 2 - width / 2 : alignment === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextAlignment"].Right ? bounds.x + bounds.width - width : bounds.x;
            y -= lineHeight;
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x + width > maxX) maxX = x + width;
            if (y + height > maxY) maxY = y + height;
            textLines.push({
                text: line,
                encoded: encoded,
                width: width,
                height: height,
                x: x,
                y: y
            });
            // Only trim lines that we had to split ourselves. So we won't trim lines
            // that the user provided themselves with whitespace.
            prevRemainder = remainder === null || remainder === void 0 ? void 0 : remainder.trim();
        }
    }
    return {
        fontSize: fontSize,
        lineHeight: lineHeight,
        lines: textLines,
        bounds: {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY
        }
    };
};
var layoutCombedText = function(text, _a) {
    var fontSize = _a.fontSize, font = _a.font, bounds = _a.bounds, cellCount = _a.cellCount;
    var line = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeLines"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanText"])(text));
    if (line.length > cellCount) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CombedTextLayoutError"](line.length, cellCount);
    }
    if (fontSize === undefined || fontSize === 0) {
        fontSize = computeCombedFontSize(line, font, bounds, cellCount);
    }
    var cellWidth = bounds.width / cellCount;
    var height = font.heightAtSize(fontSize, {
        descender: false
    });
    var y = bounds.y + (bounds.height / 2 - height / 2);
    var cells = [];
    var minX = bounds.x;
    var minY = bounds.y;
    var maxX = bounds.x + bounds.width;
    var maxY = bounds.y + bounds.height;
    var cellOffset = 0;
    var charOffset = 0;
    while(cellOffset < cellCount){
        var _b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charAtIndex"])(line, charOffset), char = _b[0], charLength = _b[1];
        var encoded = font.encodeText(char);
        var width = font.widthOfTextAtSize(char, fontSize);
        var cellCenter = bounds.x + (cellWidth * cellOffset + cellWidth / 2);
        var x = cellCenter - width / 2;
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x + width > maxX) maxX = x + width;
        if (y + height > maxY) maxY = y + height;
        cells.push({
            text: line,
            encoded: encoded,
            width: width,
            height: height,
            x: x,
            y: y
        });
        cellOffset += 1;
        charOffset += charLength;
    }
    return {
        fontSize: fontSize,
        cells: cells,
        bounds: {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY
        }
    };
};
var layoutSinglelineText = function(text, _a) {
    var alignment = _a.alignment, fontSize = _a.fontSize, font = _a.font, bounds = _a.bounds;
    var line = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeLines"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanText"])(text));
    if (fontSize === undefined || fontSize === 0) {
        fontSize = computeFontSize([
            line
        ], font, bounds);
    }
    var encoded = font.encodeText(line);
    var width = font.widthOfTextAtSize(line, fontSize);
    var height = font.heightAtSize(fontSize, {
        descender: false
    });
    // prettier-ignore
    var x = alignment === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextAlignment"].Left ? bounds.x : alignment === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextAlignment"].Center ? bounds.x + bounds.width / 2 - width / 2 : alignment === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextAlignment"].Right ? bounds.x + bounds.width - width : bounds.x;
    var y = bounds.y + (bounds.height / 2 - height / 2);
    return {
        fontSize: fontSize,
        line: {
            text: line,
            encoded: encoded,
            width: width,
            height: height,
            x: x,
            y: y
        },
        bounds: {
            x: x,
            y: y,
            width: width,
            height: height
        }
    };
}; //# sourceMappingURL=layout.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/appearances.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultButtonAppearanceProvider",
    ()=>defaultButtonAppearanceProvider,
    "defaultCheckBoxAppearanceProvider",
    ()=>defaultCheckBoxAppearanceProvider,
    "defaultDropdownAppearanceProvider",
    ()=>defaultDropdownAppearanceProvider,
    "defaultOptionListAppearanceProvider",
    ()=>defaultOptionListAppearanceProvider,
    "defaultRadioGroupAppearanceProvider",
    ()=>defaultRadioGroupAppearanceProvider,
    "defaultTextFieldAppearanceProvider",
    ()=>defaultTextFieldAppearanceProvider,
    "normalizeAppearance",
    ()=>normalizeAppearance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/operations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/rotations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/text/layout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/text/alignment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/operators.js [app-client] (ecmascript)");
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
var normalizeAppearance = function(appearance) {
    if ('normal' in appearance) return appearance;
    return {
        normal: appearance
    };
};
// Examples:
//   `/Helv 12 Tf` -> ['/Helv 12 Tf', 'Helv', '12']
//   `/HeBo 8.00 Tf` -> ['/HeBo 8 Tf', 'HeBo', '8.00']
var tfRegex = /\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]+(\d*\.\d+|\d+)[\0\t\n\f\r\ ]+Tf/;
var getDefaultFontSize = function(field) {
    var _a, _b;
    var da = (_a = field.getDefaultAppearance()) !== null && _a !== void 0 ? _a : '';
    var daMatch = (_b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findLastMatch"])(da, tfRegex).match) !== null && _b !== void 0 ? _b : [];
    var defaultFontSize = Number(daMatch[2]);
    return isFinite(defaultFontSize) ? defaultFontSize : undefined;
};
// Examples:
//   `0.3 g` -> ['0.3', 'g']
//   `0.3 1 .3 rg` -> ['0.3', '1', '.3', 'rg']
//   `0.3 1 .3 0 k` -> ['0.3', '1', '.3', '0', 'k']
var colorRegex = /(\d*\.\d+|\d+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+(g|rg|k)/;
var getDefaultColor = function(field) {
    var _a;
    var da = (_a = field.getDefaultAppearance()) !== null && _a !== void 0 ? _a : '';
    var daMatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findLastMatch"])(da, colorRegex).match;
    var _b = daMatch !== null && daMatch !== void 0 ? daMatch : [], c1 = _b[1], c2 = _b[2], c3 = _b[3], c4 = _b[4], colorSpace = _b[5];
    if (colorSpace === 'g' && c1) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["grayscale"])(Number(c1));
    }
    if (colorSpace === 'rg' && c1 && c2 && c3) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(Number(c1), Number(c2), Number(c3));
    }
    if (colorSpace === 'k' && c1 && c2 && c3 && c4) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmyk"])(Number(c1), Number(c2), Number(c3), Number(c4));
    }
    return undefined;
};
var updateDefaultAppearance = function(field, color, font, fontSize) {
    var _a;
    if (fontSize === void 0) {
        fontSize = 0;
    }
    var da = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFillingColor"])(color).toString(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFontAndSize"])((_a = font === null || font === void 0 ? void 0 : font.name) !== null && _a !== void 0 ? _a : 'dummy__noop', fontSize).toString()
    ].join('\n');
    field.setDefaultAppearance(da);
};
var defaultCheckBoxAppearanceProvider = function(checkBox, widget) {
    var _a, _b, _c;
    // The `/DA` entry can be at the widget or field level - so we handle both
    var widgetColor = getDefaultColor(widget);
    var fieldColor = getDefaultColor(checkBox.acroField);
    var rectangle = widget.getRectangle();
    var ap = widget.getAppearanceCharacteristics();
    var bs = widget.getBorderStyle();
    var borderWidth = (_a = bs === null || bs === void 0 ? void 0 : bs.getWidth()) !== null && _a !== void 0 ? _a : 0;
    var rotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduceRotation"])(ap === null || ap === void 0 ? void 0 : ap.getRotation());
    var _d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adjustDimsForRotation"])(rectangle, rotation), width = _d.width, height = _d.height;
    var rotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateInPlace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, rectangle), {
        rotation: rotation
    }));
    var black = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0, 0, 0);
    var borderColor = (_b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["componentsToColor"])(ap === null || ap === void 0 ? void 0 : ap.getBorderColor())) !== null && _b !== void 0 ? _b : black;
    var normalBackgroundColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["componentsToColor"])(ap === null || ap === void 0 ? void 0 : ap.getBackgroundColor());
    var downBackgroundColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["componentsToColor"])(ap === null || ap === void 0 ? void 0 : ap.getBackgroundColor(), 0.8);
    // Update color
    var textColor = (_c = widgetColor !== null && widgetColor !== void 0 ? widgetColor : fieldColor) !== null && _c !== void 0 ? _c : black;
    if (widgetColor) {
        updateDefaultAppearance(widget, textColor);
    } else {
        updateDefaultAppearance(checkBox.acroField, textColor);
    }
    var options = {
        x: 0 + borderWidth / 2,
        y: 0 + borderWidth / 2,
        width: width - borderWidth,
        height: height - borderWidth,
        thickness: 1.5,
        borderWidth: borderWidth,
        borderColor: borderColor,
        markColor: textColor
    };
    return {
        normal: {
            on: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])(rotate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawCheckBox"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, options), {
                color: normalBackgroundColor,
                filled: true
            }))),
            off: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])(rotate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawCheckBox"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, options), {
                color: normalBackgroundColor,
                filled: false
            })))
        },
        down: {
            on: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])(rotate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawCheckBox"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, options), {
                color: downBackgroundColor,
                filled: true
            }))),
            off: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])(rotate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawCheckBox"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, options), {
                color: downBackgroundColor,
                filled: false
            })))
        }
    };
};
var defaultRadioGroupAppearanceProvider = function(radioGroup, widget) {
    var _a, _b, _c;
    // The `/DA` entry can be at the widget or field level - so we handle both
    var widgetColor = getDefaultColor(widget);
    var fieldColor = getDefaultColor(radioGroup.acroField);
    var rectangle = widget.getRectangle();
    var ap = widget.getAppearanceCharacteristics();
    var bs = widget.getBorderStyle();
    var borderWidth = (_a = bs === null || bs === void 0 ? void 0 : bs.getWidth()) !== null && _a !== void 0 ? _a : 0;
    var rotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduceRotation"])(ap === null || ap === void 0 ? void 0 : ap.getRotation());
    var _d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adjustDimsForRotation"])(rectangle, rotation), width = _d.width, height = _d.height;
    var rotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateInPlace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, rectangle), {
        rotation: rotation
    }));
    var black = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0, 0, 0);
    var borderColor = (_b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["componentsToColor"])(ap === null || ap === void 0 ? void 0 : ap.getBorderColor())) !== null && _b !== void 0 ? _b : black;
    var normalBackgroundColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["componentsToColor"])(ap === null || ap === void 0 ? void 0 : ap.getBackgroundColor());
    var downBackgroundColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["componentsToColor"])(ap === null || ap === void 0 ? void 0 : ap.getBackgroundColor(), 0.8);
    // Update color
    var textColor = (_c = widgetColor !== null && widgetColor !== void 0 ? widgetColor : fieldColor) !== null && _c !== void 0 ? _c : black;
    if (widgetColor) {
        updateDefaultAppearance(widget, textColor);
    } else {
        updateDefaultAppearance(radioGroup.acroField, textColor);
    }
    var options = {
        x: width / 2,
        y: height / 2,
        width: width - borderWidth,
        height: height - borderWidth,
        borderWidth: borderWidth,
        borderColor: borderColor,
        dotColor: textColor
    };
    return {
        normal: {
            on: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])(rotate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawRadioButton"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, options), {
                color: normalBackgroundColor,
                filled: true
            }))),
            off: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])(rotate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawRadioButton"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, options), {
                color: normalBackgroundColor,
                filled: false
            })))
        },
        down: {
            on: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])(rotate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawRadioButton"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, options), {
                color: downBackgroundColor,
                filled: true
            }))),
            off: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])(rotate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawRadioButton"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, options), {
                color: downBackgroundColor,
                filled: false
            })))
        }
    };
};
var defaultButtonAppearanceProvider = function(button, widget, font) {
    var _a, _b, _c, _d, _e;
    // The `/DA` entry can be at the widget or field level - so we handle both
    var widgetColor = getDefaultColor(widget);
    var fieldColor = getDefaultColor(button.acroField);
    var widgetFontSize = getDefaultFontSize(widget);
    var fieldFontSize = getDefaultFontSize(button.acroField);
    var rectangle = widget.getRectangle();
    var ap = widget.getAppearanceCharacteristics();
    var bs = widget.getBorderStyle();
    var captions = ap === null || ap === void 0 ? void 0 : ap.getCaptions();
    var normalText = (_a = captions === null || captions === void 0 ? void 0 : captions.normal) !== null && _a !== void 0 ? _a : '';
    var downText = (_c = (_b = captions === null || captions === void 0 ? void 0 : captions.down) !== null && _b !== void 0 ? _b : normalText) !== null && _c !== void 0 ? _c : '';
    var borderWidth = (_d = bs === null || bs === void 0 ? void 0 : bs.getWidth()) !== null && _d !== void 0 ? _d : 0;
    var rotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduceRotation"])(ap === null || ap === void 0 ? void 0 : ap.getRotation());
    var _f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adjustDimsForRotation"])(rectangle, rotation), width = _f.width, height = _f.height;
    var rotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateInPlace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, rectangle), {
        rotation: rotation
    }));
    var black = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0, 0, 0);
    var borderColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["componentsToColor"])(ap === null || ap === void 0 ? void 0 : ap.getBorderColor());
    var normalBackgroundColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["componentsToColor"])(ap === null || ap === void 0 ? void 0 : ap.getBackgroundColor());
    var downBackgroundColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["componentsToColor"])(ap === null || ap === void 0 ? void 0 : ap.getBackgroundColor(), 0.8);
    var bounds = {
        x: borderWidth,
        y: borderWidth,
        width: width - borderWidth * 2,
        height: height - borderWidth * 2
    };
    var normalLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layoutSinglelineText"])(normalText, {
        alignment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextAlignment"].Center,
        fontSize: widgetFontSize !== null && widgetFontSize !== void 0 ? widgetFontSize : fieldFontSize,
        font: font,
        bounds: bounds
    });
    var downLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layoutSinglelineText"])(downText, {
        alignment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextAlignment"].Center,
        fontSize: widgetFontSize !== null && widgetFontSize !== void 0 ? widgetFontSize : fieldFontSize,
        font: font,
        bounds: bounds
    });
    // Update font size and color
    var fontSize = Math.min(normalLayout.fontSize, downLayout.fontSize);
    var textColor = (_e = widgetColor !== null && widgetColor !== void 0 ? widgetColor : fieldColor) !== null && _e !== void 0 ? _e : black;
    if (widgetColor || widgetFontSize !== undefined) {
        updateDefaultAppearance(widget, textColor, font, fontSize);
    } else {
        updateDefaultAppearance(button.acroField, textColor, font, fontSize);
    }
    var options = {
        x: 0 + borderWidth / 2,
        y: 0 + borderWidth / 2,
        width: width - borderWidth,
        height: height - borderWidth,
        borderWidth: borderWidth,
        borderColor: borderColor,
        textColor: textColor,
        font: font.name,
        fontSize: fontSize
    };
    return {
        normal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])(rotate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawButton"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, options), {
            color: normalBackgroundColor,
            textLines: [
                normalLayout.line
            ]
        }))),
        down: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])(rotate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawButton"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, options), {
            color: downBackgroundColor,
            textLines: [
                downLayout.line
            ]
        })))
    };
};
var defaultTextFieldAppearanceProvider = function(textField, widget, font) {
    var _a, _b, _c, _d;
    // The `/DA` entry can be at the widget or field level - so we handle both
    var widgetColor = getDefaultColor(widget);
    var fieldColor = getDefaultColor(textField.acroField);
    var widgetFontSize = getDefaultFontSize(widget);
    var fieldFontSize = getDefaultFontSize(textField.acroField);
    var rectangle = widget.getRectangle();
    var ap = widget.getAppearanceCharacteristics();
    var bs = widget.getBorderStyle();
    var text = (_a = textField.getText()) !== null && _a !== void 0 ? _a : '';
    var borderWidth = (_b = bs === null || bs === void 0 ? void 0 : bs.getWidth()) !== null && _b !== void 0 ? _b : 0;
    var rotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduceRotation"])(ap === null || ap === void 0 ? void 0 : ap.getRotation());
    var _e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adjustDimsForRotation"])(rectangle, rotation), width = _e.width, height = _e.height;
    var rotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateInPlace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, rectangle), {
        rotation: rotation
    }));
    var black = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0, 0, 0);
    var borderColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["componentsToColor"])(ap === null || ap === void 0 ? void 0 : ap.getBorderColor());
    var normalBackgroundColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["componentsToColor"])(ap === null || ap === void 0 ? void 0 : ap.getBackgroundColor());
    var textLines;
    var fontSize;
    var padding = textField.isCombed() ? 0 : 1;
    var bounds = {
        x: borderWidth + padding,
        y: borderWidth + padding,
        width: width - (borderWidth + padding) * 2,
        height: height - (borderWidth + padding) * 2
    };
    if (textField.isMultiline()) {
        var layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layoutMultilineText"])(text, {
            alignment: textField.getAlignment(),
            fontSize: widgetFontSize !== null && widgetFontSize !== void 0 ? widgetFontSize : fieldFontSize,
            font: font,
            bounds: bounds
        });
        textLines = layout.lines;
        fontSize = layout.fontSize;
    } else if (textField.isCombed()) {
        var layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layoutCombedText"])(text, {
            fontSize: widgetFontSize !== null && widgetFontSize !== void 0 ? widgetFontSize : fieldFontSize,
            font: font,
            bounds: bounds,
            cellCount: (_c = textField.getMaxLength()) !== null && _c !== void 0 ? _c : 0
        });
        textLines = layout.cells;
        fontSize = layout.fontSize;
    } else {
        var layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layoutSinglelineText"])(text, {
            alignment: textField.getAlignment(),
            fontSize: widgetFontSize !== null && widgetFontSize !== void 0 ? widgetFontSize : fieldFontSize,
            font: font,
            bounds: bounds
        });
        textLines = [
            layout.line
        ];
        fontSize = layout.fontSize;
    }
    // Update font size and color
    var textColor = (_d = widgetColor !== null && widgetColor !== void 0 ? widgetColor : fieldColor) !== null && _d !== void 0 ? _d : black;
    if (widgetColor || widgetFontSize !== undefined) {
        updateDefaultAppearance(widget, textColor, font, fontSize);
    } else {
        updateDefaultAppearance(textField.acroField, textColor, font, fontSize);
    }
    var options = {
        x: 0 + borderWidth / 2,
        y: 0 + borderWidth / 2,
        width: width - borderWidth,
        height: height - borderWidth,
        borderWidth: borderWidth !== null && borderWidth !== void 0 ? borderWidth : 0,
        borderColor: borderColor,
        textColor: textColor,
        font: font.name,
        fontSize: fontSize,
        color: normalBackgroundColor,
        textLines: textLines,
        padding: padding
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])(rotate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawTextField"])(options));
};
var defaultDropdownAppearanceProvider = function(dropdown, widget, font) {
    var _a, _b, _c;
    // The `/DA` entry can be at the widget or field level - so we handle both
    var widgetColor = getDefaultColor(widget);
    var fieldColor = getDefaultColor(dropdown.acroField);
    var widgetFontSize = getDefaultFontSize(widget);
    var fieldFontSize = getDefaultFontSize(dropdown.acroField);
    var rectangle = widget.getRectangle();
    var ap = widget.getAppearanceCharacteristics();
    var bs = widget.getBorderStyle();
    var text = (_a = dropdown.getSelected()[0]) !== null && _a !== void 0 ? _a : '';
    var borderWidth = (_b = bs === null || bs === void 0 ? void 0 : bs.getWidth()) !== null && _b !== void 0 ? _b : 0;
    var rotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduceRotation"])(ap === null || ap === void 0 ? void 0 : ap.getRotation());
    var _d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adjustDimsForRotation"])(rectangle, rotation), width = _d.width, height = _d.height;
    var rotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateInPlace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, rectangle), {
        rotation: rotation
    }));
    var black = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0, 0, 0);
    var borderColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["componentsToColor"])(ap === null || ap === void 0 ? void 0 : ap.getBorderColor());
    var normalBackgroundColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["componentsToColor"])(ap === null || ap === void 0 ? void 0 : ap.getBackgroundColor());
    var padding = 1;
    var bounds = {
        x: borderWidth + padding,
        y: borderWidth + padding,
        width: width - (borderWidth + padding) * 2,
        height: height - (borderWidth + padding) * 2
    };
    var _e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layoutSinglelineText"])(text, {
        alignment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextAlignment"].Left,
        fontSize: widgetFontSize !== null && widgetFontSize !== void 0 ? widgetFontSize : fieldFontSize,
        font: font,
        bounds: bounds
    }), line = _e.line, fontSize = _e.fontSize;
    // Update font size and color
    var textColor = (_c = widgetColor !== null && widgetColor !== void 0 ? widgetColor : fieldColor) !== null && _c !== void 0 ? _c : black;
    if (widgetColor || widgetFontSize !== undefined) {
        updateDefaultAppearance(widget, textColor, font, fontSize);
    } else {
        updateDefaultAppearance(dropdown.acroField, textColor, font, fontSize);
    }
    var options = {
        x: 0 + borderWidth / 2,
        y: 0 + borderWidth / 2,
        width: width - borderWidth,
        height: height - borderWidth,
        borderWidth: borderWidth !== null && borderWidth !== void 0 ? borderWidth : 0,
        borderColor: borderColor,
        textColor: textColor,
        font: font.name,
        fontSize: fontSize,
        color: normalBackgroundColor,
        textLines: [
            line
        ],
        padding: padding
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])(rotate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawTextField"])(options));
};
var defaultOptionListAppearanceProvider = function(optionList, widget, font) {
    var _a, _b;
    // The `/DA` entry can be at the widget or field level - so we handle both
    var widgetColor = getDefaultColor(widget);
    var fieldColor = getDefaultColor(optionList.acroField);
    var widgetFontSize = getDefaultFontSize(widget);
    var fieldFontSize = getDefaultFontSize(optionList.acroField);
    var rectangle = widget.getRectangle();
    var ap = widget.getAppearanceCharacteristics();
    var bs = widget.getBorderStyle();
    var borderWidth = (_a = bs === null || bs === void 0 ? void 0 : bs.getWidth()) !== null && _a !== void 0 ? _a : 0;
    var rotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduceRotation"])(ap === null || ap === void 0 ? void 0 : ap.getRotation());
    var _c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adjustDimsForRotation"])(rectangle, rotation), width = _c.width, height = _c.height;
    var rotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateInPlace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, rectangle), {
        rotation: rotation
    }));
    var black = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0, 0, 0);
    var borderColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["componentsToColor"])(ap === null || ap === void 0 ? void 0 : ap.getBorderColor());
    var normalBackgroundColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["componentsToColor"])(ap === null || ap === void 0 ? void 0 : ap.getBackgroundColor());
    var options = optionList.getOptions();
    var selected = optionList.getSelected();
    if (optionList.isSorted()) options.sort();
    var text = '';
    for(var idx = 0, len = options.length; idx < len; idx++){
        text += options[idx];
        if (idx < len - 1) text += '\n';
    }
    var padding = 1;
    var bounds = {
        x: borderWidth + padding,
        y: borderWidth + padding,
        width: width - (borderWidth + padding) * 2,
        height: height - (borderWidth + padding) * 2
    };
    var _d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layoutMultilineText"])(text, {
        alignment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextAlignment"].Left,
        fontSize: widgetFontSize !== null && widgetFontSize !== void 0 ? widgetFontSize : fieldFontSize,
        font: font,
        bounds: bounds
    }), lines = _d.lines, fontSize = _d.fontSize, lineHeight = _d.lineHeight;
    var selectedLines = [];
    for(var idx = 0, len = lines.length; idx < len; idx++){
        var line = lines[idx];
        if (selected.includes(line.text)) selectedLines.push(idx);
    }
    var blue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(153 / 255, 193 / 255, 218 / 255);
    // Update font size and color
    var textColor = (_b = widgetColor !== null && widgetColor !== void 0 ? widgetColor : fieldColor) !== null && _b !== void 0 ? _b : black;
    if (widgetColor || widgetFontSize !== undefined) {
        updateDefaultAppearance(widget, textColor, font, fontSize);
    } else {
        updateDefaultAppearance(optionList.acroField, textColor, font, fontSize);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])(rotate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawOptionList"])({
        x: 0 + borderWidth / 2,
        y: 0 + borderWidth / 2,
        width: width - borderWidth,
        height: height - borderWidth,
        borderWidth: borderWidth !== null && borderWidth !== void 0 ? borderWidth : 0,
        borderColor: borderColor,
        textColor: textColor,
        font: font.name,
        fontSize: fontSize,
        color: normalBackgroundColor,
        textLines: lines,
        lineHeight: lineHeight,
        selectedColor: blue,
        selectedLines: selectedLines,
        padding: padding
    }));
}; //# sourceMappingURL=appearances.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFEmbeddedPage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFDocument.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$PDFPageEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFPageEmbedder$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/PDFPageEmbedder.js [app-client] (ecmascript) <export default as PDFPageEmbedder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFRef$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRef.js [app-client] (ecmascript) <export default as PDFRef>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/validators.js [app-client] (ecmascript)");
;
;
;
;
/**
 * Represents a PDF page that has been embedded in a [[PDFDocument]].
 */ var PDFEmbeddedPage = function() {
    function PDFEmbeddedPage(ref, doc, embedder) {
        this.alreadyEmbedded = false;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(ref, 'ref', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFRef$3e$__["PDFRef"],
                'PDFRef'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(doc, 'doc', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                'PDFDocument'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(embedder, 'embedder', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$PDFPageEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFPageEmbedder$3e$__["PDFPageEmbedder"],
                'PDFPageEmbedder'
            ]
        ]);
        this.ref = ref;
        this.doc = doc;
        this.width = embedder.width;
        this.height = embedder.height;
        this.embedder = embedder;
    }
    /**
     * Compute the width and height of this page after being scaled by the
     * given `factor`. For example:
     * ```js
     * embeddedPage.width  // => 500
     * embeddedPage.height // => 250
     *
     * const scaled = embeddedPage.scale(0.5)
     * scaled.width  // => 250
     * scaled.height // => 125
     * ```
     * This operation is often useful before drawing a page with
     * [[PDFPage.drawPage]] to compute the `width` and `height` options.
     * @param factor The factor by which this page should be scaled.
     * @returns The width and height of the page after being scaled.
     */ PDFEmbeddedPage.prototype.scale = function(factor) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(factor, 'factor', [
            'number'
        ]);
        return {
            width: this.width * factor,
            height: this.height * factor
        };
    };
    /**
     * Get the width and height of this page. For example:
     * ```js
     * const { width, height } = embeddedPage.size()
     * ```
     * @returns The width and height of the page.
     */ PDFEmbeddedPage.prototype.size = function() {
        return this.scale(1);
    };
    /**
     * > **NOTE:** You probably don't need to call this method directly. The
     * > [[PDFDocument.save]] and [[PDFDocument.saveAsBase64]] methods will
     * > automatically ensure all embeddable pages get embedded.
     *
     * Embed this embeddable page in its document.
     *
     * @returns Resolves when the embedding is complete.
     */ PDFEmbeddedPage.prototype.embed = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!!this.alreadyEmbedded) return [
                            3 /*break*/ ,
                            2
                        ];
                        return [
                            4 /*yield*/ ,
                            this.embedder.embedIntoContext(this.doc.context, this.ref)
                        ];
                    case 1:
                        _a.sent();
                        this.alreadyEmbedded = true;
                        _a.label = 2;
                    case 2:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    /**
     * > **NOTE:** You probably don't want to call this method directly. Instead,
     * > consider using the [[PDFDocument.embedPdf]] and
     * > [[PDFDocument.embedPage]] methods, which will create instances of
     * > [[PDFEmbeddedPage]] for you.
     *
     * Create an instance of [[PDFEmbeddedPage]] from an existing ref and embedder
     *
     * @param ref The unique reference for this embedded page.
     * @param doc The document to which the embedded page will belong.
     * @param embedder The embedder that will be used to embed the page.
     */ PDFEmbeddedPage.of = function(ref, doc, embedder) {
        return new PDFEmbeddedPage(ref, doc, embedder);
    };
    return PDFEmbeddedPage;
}();
const __TURBOPACK__default__export__ = PDFEmbeddedPage;
 //# sourceMappingURL=PDFEmbeddedPage.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFFont.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFDocument.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$CustomFontEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CustomFontEmbedder$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/CustomFontEmbedder.js [app-client] (ecmascript) <export default as CustomFontEmbedder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFRef$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRef.js [app-client] (ecmascript) <export default as PDFRef>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$StandardFontEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StandardFontEmbedder$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/StandardFontEmbedder.js [app-client] (ecmascript) <export default as StandardFontEmbedder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/validators.js [app-client] (ecmascript)");
;
;
;
;
/**
 * Represents a font that has been embedded in a [[PDFDocument]].
 */ var PDFFont = function() {
    function PDFFont(ref, doc, embedder) {
        this.modified = true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(ref, 'ref', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFRef$3e$__["PDFRef"],
                'PDFRef'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(doc, 'doc', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                'PDFDocument'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(embedder, 'embedder', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$CustomFontEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CustomFontEmbedder$3e$__["CustomFontEmbedder"],
                'CustomFontEmbedder'
            ],
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$StandardFontEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StandardFontEmbedder$3e$__["StandardFontEmbedder"],
                'StandardFontEmbedder'
            ]
        ]);
        this.ref = ref;
        this.doc = doc;
        this.name = embedder.fontName;
        this.embedder = embedder;
    }
    /**
     * > **NOTE:** You probably don't need to call this method directly. The
     * > [[PDFPage.drawText]] method will automatically encode the text it is
     * > given.
     *
     * Encodes a string of text in this font.
     *
     * @param text The text to be encoded.
     * @returns The encoded text as a hex string.
     */ PDFFont.prototype.encodeText = function(text) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(text, 'text', [
            'string'
        ]);
        this.modified = true;
        return this.embedder.encodeText(text);
    };
    /**
     * Measure the width of a string of text drawn in this font at a given size.
     * For example:
     * ```js
     * const width = font.widthOfTextAtSize('Foo Bar Qux Baz', 36)
     * ```
     * @param text The string of text to be measured.
     * @param size The font size to be used for this measurement.
     * @returns The width of the string of text when drawn in this font at the
     *          given size.
     */ PDFFont.prototype.widthOfTextAtSize = function(text, size) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(text, 'text', [
            'string'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(size, 'size', [
            'number'
        ]);
        return this.embedder.widthOfTextAtSize(text, size);
    };
    /**
     * Measure the height of this font at a given size. For example:
     * ```js
     * const height = font.heightAtSize(24)
     * ```
     *
     * The `options.descender` value controls whether or not the font's
     * descender is included in the height calculation.
     *
     * @param size The font size to be used for this measurement.
     * @param options The options to be used when computing this measurement.
     * @returns The height of this font at the given size.
     */ PDFFont.prototype.heightAtSize = function(size, options) {
        var _a;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(size, 'size', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options === null || options === void 0 ? void 0 : options.descender, 'options.descender', [
            'boolean'
        ]);
        return this.embedder.heightOfFontAtSize(size, {
            descender: (_a = options === null || options === void 0 ? void 0 : options.descender) !== null && _a !== void 0 ? _a : true
        });
    };
    /**
     * Compute the font size at which this font is a given height. For example:
     * ```js
     * const fontSize = font.sizeAtHeight(12)
     * ```
     * @param height The height to be used for this calculation.
     * @returns The font size at which this font is the given height.
     */ PDFFont.prototype.sizeAtHeight = function(height) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(height, 'height', [
            'number'
        ]);
        return this.embedder.sizeOfFontAtHeight(height);
    };
    /**
     * Get the set of unicode code points that can be represented by this font.
     * @returns The set of unicode code points supported by this font.
     */ PDFFont.prototype.getCharacterSet = function() {
        if (this.embedder instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$StandardFontEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StandardFontEmbedder$3e$__["StandardFontEmbedder"]) {
            return this.embedder.encoding.supportedCodePoints;
        } else {
            return this.embedder.font.characterSet;
        }
    };
    /**
     * > **NOTE:** You probably don't need to call this method directly. The
     * > [[PDFDocument.save]] and [[PDFDocument.saveAsBase64]] methods will
     * > automatically ensure all fonts get embedded.
     *
     * Embed this font in its document.
     *
     * @returns Resolves when the embedding is complete.
     */ PDFFont.prototype.embed = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.modified) return [
                            3 /*break*/ ,
                            2
                        ];
                        return [
                            4 /*yield*/ ,
                            this.embedder.embedIntoContext(this.doc.context, this.ref)
                        ];
                    case 1:
                        _a.sent();
                        this.modified = false;
                        _a.label = 2;
                    case 2:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    /**
     * > **NOTE:** You probably don't want to call this method directly. Instead,
     * > consider using the [[PDFDocument.embedFont]] and
     * > [[PDFDocument.embedStandardFont]] methods, which will create instances
     * > of [[PDFFont]] for you.
     *
     * Create an instance of [[PDFFont]] from an existing ref and embedder
     *
     * @param ref The unique reference for this font.
     * @param doc The document to which the font will belong.
     * @param embedder The embedder that will be used to embed the font.
     */ PDFFont.of = function(ref, doc, embedder) {
        return new PDFFont(ref, doc, embedder);
    };
    return PDFFont;
}();
const __TURBOPACK__default__export__ = PDFFont;
 //# sourceMappingURL=PDFFont.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFImage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFDocument.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$JpegEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__JpegEmbedder$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/JpegEmbedder.js [app-client] (ecmascript) <export default as JpegEmbedder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFRef$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRef.js [app-client] (ecmascript) <export default as PDFRef>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$PngEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PngEmbedder$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/PngEmbedder.js [app-client] (ecmascript) <export default as PngEmbedder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/validators.js [app-client] (ecmascript)");
;
;
;
;
/**
 * Represents an image that has been embedded in a [[PDFDocument]].
 */ var PDFImage = function() {
    function PDFImage(ref, doc, embedder) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(ref, 'ref', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFRef$3e$__["PDFRef"],
                'PDFRef'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(doc, 'doc', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                'PDFDocument'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(embedder, 'embedder', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$JpegEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__JpegEmbedder$3e$__["JpegEmbedder"],
                'JpegEmbedder'
            ],
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$PngEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PngEmbedder$3e$__["PngEmbedder"],
                'PngEmbedder'
            ]
        ]);
        this.ref = ref;
        this.doc = doc;
        this.width = embedder.width;
        this.height = embedder.height;
        this.embedder = embedder;
    }
    /**
     * Compute the width and height of this image after being scaled by the
     * given `factor`. For example:
     * ```js
     * image.width  // => 500
     * image.height // => 250
     *
     * const scaled = image.scale(0.5)
     * scaled.width  // => 250
     * scaled.height // => 125
     * ```
     * This operation is often useful before drawing an image with
     * [[PDFPage.drawImage]] to compute the `width` and `height` options.
     * @param factor The factor by which this image should be scaled.
     * @returns The width and height of the image after being scaled.
     */ PDFImage.prototype.scale = function(factor) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(factor, 'factor', [
            'number'
        ]);
        return {
            width: this.width * factor,
            height: this.height * factor
        };
    };
    /**
     * Get the width and height of this image after scaling it as large as
     * possible while maintaining its aspect ratio and not exceeding the
     * specified `width` and `height`. For example:
     * ```
     * image.width  // => 500
     * image.height // => 250
     *
     * const scaled = image.scaleToFit(750, 1000)
     * scaled.width  // => 750
     * scaled.height // => 375
     * ```
     * The `width` and `height` parameters can also be thought of as the width
     * and height of a box that the scaled image must fit within.
     * @param width The bounding box's width.
     * @param height The bounding box's height.
     * @returns The width and height of the image after being scaled.
     */ PDFImage.prototype.scaleToFit = function(width, height) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(width, 'width', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(height, 'height', [
            'number'
        ]);
        var imgWidthScale = width / this.width;
        var imgHeightScale = height / this.height;
        var scale = Math.min(imgWidthScale, imgHeightScale);
        return this.scale(scale);
    };
    /**
     * Get the width and height of this image. For example:
     * ```js
     * const { width, height } = image.size()
     * ```
     * @returns The width and height of the image.
     */ PDFImage.prototype.size = function() {
        return this.scale(1);
    };
    /**
     * > **NOTE:** You probably don't need to call this method directly. The
     * > [[PDFDocument.save]] and [[PDFDocument.saveAsBase64]] methods will
     * > automatically ensure all images get embedded.
     *
     * Embed this image in its document.
     *
     * @returns Resolves when the embedding is complete.
     */ PDFImage.prototype.embed = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var _a, doc, ref;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
                switch(_b.label){
                    case 0:
                        if (!this.embedder) return [
                            2 /*return*/ 
                        ];
                        // The image should only be embedded once. If there's a pending embed
                        // operation then wait on it. Otherwise we need to start the embed.
                        if (!this.embedTask) {
                            _a = this, doc = _a.doc, ref = _a.ref;
                            this.embedTask = this.embedder.embedIntoContext(doc.context, ref);
                        }
                        return [
                            4 /*yield*/ ,
                            this.embedTask
                        ];
                    case 1:
                        _b.sent();
                        // We clear `this.embedder` so that the indirectly referenced image data
                        // can be garbage collected, thus avoiding a memory leak.
                        // See https://github.com/Hopding/pdf-lib/pull/1032/files.
                        this.embedder = undefined;
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    /**
     * > **NOTE:** You probably don't want to call this method directly. Instead,
     * > consider using the [[PDFDocument.embedPng]] and [[PDFDocument.embedJpg]]
     * > methods, which will create instances of [[PDFImage]] for you.
     *
     * Create an instance of [[PDFImage]] from an existing ref and embedder
     *
     * @param ref The unique reference for this image.
     * @param doc The document to which the image will belong.
     * @param embedder The embedder that will be used to embed the image.
     */ PDFImage.of = function(ref, doc, embedder) {
        return new PDFImage(ref, doc, embedder);
    };
    return PDFImage;
}();
const __TURBOPACK__default__export__ = PDFImage;
 //# sourceMappingURL=PDFImage.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/image/alignment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageAlignment",
    ()=>ImageAlignment
]);
var ImageAlignment;
(function(ImageAlignment) {
    ImageAlignment[ImageAlignment["Left"] = 0] = "Left";
    ImageAlignment[ImageAlignment["Center"] = 1] = "Center";
    ImageAlignment[ImageAlignment["Right"] = 2] = "Right";
})(ImageAlignment || (ImageAlignment = {})); //# sourceMappingURL=alignment.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/image/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$image$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/image/alignment.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFField.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertFieldAppearanceOptions",
    ()=>assertFieldAppearanceOptions,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFDocument.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/rotations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFRef$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRef.js [app-client] (ecmascript) <export default as PDFRef>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/annotation/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript) <export default as PDFName>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/flags.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/annotation/flags.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/validators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$image$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/image/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$image$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/image/alignment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/operations.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var assertFieldAppearanceOptions = function(options) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options === null || options === void 0 ? void 0 : options.x, 'options.x', [
        'number'
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options === null || options === void 0 ? void 0 : options.y, 'options.y', [
        'number'
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options === null || options === void 0 ? void 0 : options.width, 'options.width', [
        'number'
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options === null || options === void 0 ? void 0 : options.height, 'options.height', [
        'number'
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options === null || options === void 0 ? void 0 : options.textColor, 'options.textColor', [
        [
            Object,
            'Color'
        ]
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options === null || options === void 0 ? void 0 : options.backgroundColor, 'options.backgroundColor', [
        [
            Object,
            'Color'
        ]
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options === null || options === void 0 ? void 0 : options.borderColor, 'options.borderColor', [
        [
            Object,
            'Color'
        ]
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options === null || options === void 0 ? void 0 : options.borderWidth, 'options.borderWidth', [
        'number'
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options === null || options === void 0 ? void 0 : options.rotate, 'options.rotate', [
        [
            Object,
            'Rotation'
        ]
    ]);
};
/**
 * Represents a field of a [[PDFForm]].
 *
 * This class is effectively abstract. All fields in a [[PDFForm]] will
 * actually be an instance of a subclass of this class.
 *
 * Note that each field in a PDF is represented by a single field object.
 * However, a given field object may be rendered at multiple locations within
 * the document (across one or more pages). The rendering of a field is
 * controlled by its widgets. Each widget causes its field to be displayed at a
 * particular location in the document.
 *
 * Most of the time each field in a PDF has only a single widget, and thus is
 * only rendered once. However, if a field is rendered multiple times, it will
 * have multiple widgets - one for each location it is rendered.
 *
 * This abstraction of field objects and widgets is defined in the PDF
 * specification and dictates how PDF files store fields and where they are
 * to be rendered.
 */ var PDFField = function() {
    function PDFField(acroField, ref, doc) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(acroField, 'acroField', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFAcroTerminal"],
                'PDFAcroTerminal'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(ref, 'ref', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFRef$3e$__["PDFRef"],
                'PDFRef'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(doc, 'doc', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                'PDFDocument'
            ]
        ]);
        this.acroField = acroField;
        this.ref = ref;
        this.doc = doc;
    }
    /**
     * Get the fully qualified name of this field. For example:
     * ```js
     * const fields = form.getFields()
     * fields.forEach(field => {
     *   const name = field.getName()
     *   console.log('Field name:', name)
     * })
     * ```
     * Note that PDF fields are structured as a tree. Each field is the
     * descendent of a series of ancestor nodes all the way up to the form node,
     * which is always the root of the tree. Each node in the tree (except for
     * the form node) has a partial name. Partial names can be composed of any
     * unicode characters except a period (`.`). The fully qualified name of a
     * field is composed of the partial names of all its ancestors joined
     * with periods. This means that splitting the fully qualified name on
     * periods and taking the last element of the resulting array will give you
     * the partial name of a specific field.
     * @returns The fully qualified name of this field.
     */ PDFField.prototype.getName = function() {
        var _a;
        return (_a = this.acroField.getFullyQualifiedName()) !== null && _a !== void 0 ? _a : '';
    };
    /**
     * Returns `true` if this field is read only. This means that PDF readers
     * will not allow users to interact with the field or change its value. See
     * [[PDFField.enableReadOnly]] and [[PDFField.disableReadOnly]].
     * For example:
     * ```js
     * const field = form.getField('some.field')
     * if (field.isReadOnly()) console.log('Read only is enabled')
     * ```
     * @returns Whether or not this is a read only field.
     */ PDFField.prototype.isReadOnly = function() {
        return this.acroField.hasFlag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroFieldFlags"].ReadOnly);
    };
    /**
     * Prevent PDF readers from allowing users to interact with this field or
     * change its value. The field will not respond to mouse or keyboard input.
     * For example:
     * ```js
     * const field = form.getField('some.field')
     * field.enableReadOnly()
     * ```
     * Useful for fields whose values are computed, imported from a database, or
     * prefilled by software before being displayed to the user.
     */ PDFField.prototype.enableReadOnly = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroFieldFlags"].ReadOnly, true);
    };
    /**
     * Allow users to interact with this field and change its value in PDF
     * readers via mouse and keyboard input. For example:
     * ```js
     * const field = form.getField('some.field')
     * field.disableReadOnly()
     * ```
     */ PDFField.prototype.disableReadOnly = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroFieldFlags"].ReadOnly, false);
    };
    /**
     * Returns `true` if this field must have a value when the form is submitted.
     * See [[PDFField.enableRequired]] and [[PDFField.disableRequired]].
     * For example:
     * ```js
     * const field = form.getField('some.field')
     * if (field.isRequired()) console.log('Field is required')
     * ```
     * @returns Whether or not this field is required.
     */ PDFField.prototype.isRequired = function() {
        return this.acroField.hasFlag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroFieldFlags"].Required);
    };
    /**
     * Require this field to have a value when the form is submitted.
     * For example:
     * ```js
     * const field = form.getField('some.field')
     * field.enableRequired()
     * ```
     */ PDFField.prototype.enableRequired = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroFieldFlags"].Required, true);
    };
    /**
     * Do not require this field to have a value when the form is submitted.
     * For example:
     * ```js
     * const field = form.getField('some.field')
     * field.disableRequired()
     * ```
     */ PDFField.prototype.disableRequired = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroFieldFlags"].Required, false);
    };
    /**
     * Returns `true` if this field's value should be exported when the form is
     * submitted. See [[PDFField.enableExporting]] and
     * [[PDFField.disableExporting]].
     * For example:
     * ```js
     * const field = form.getField('some.field')
     * if (field.isExported()) console.log('Exporting is enabled')
     * ```
     * @returns Whether or not this field's value should be exported.
     */ PDFField.prototype.isExported = function() {
        return !this.acroField.hasFlag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroFieldFlags"].NoExport);
    };
    /**
     * Indicate that this field's value should be exported when the form is
     * submitted in a PDF reader. For example:
     * ```js
     * const field = form.getField('some.field')
     * field.enableExporting()
     * ```
     */ PDFField.prototype.enableExporting = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroFieldFlags"].NoExport, false);
    };
    /**
     * Indicate that this field's value should **not** be exported when the form
     * is submitted in a PDF reader. For example:
     * ```js
     * const field = form.getField('some.field')
     * field.disableExporting()
     * ```
     */ PDFField.prototype.disableExporting = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroFieldFlags"].NoExport, true);
    };
    /** @ignore */ PDFField.prototype.needsAppearancesUpdate = function() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MethodNotImplementedError"](this.constructor.name, 'needsAppearancesUpdate');
    };
    /** @ignore */ PDFField.prototype.defaultUpdateAppearances = function(_font) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MethodNotImplementedError"](this.constructor.name, 'defaultUpdateAppearances');
    };
    PDFField.prototype.markAsDirty = function() {
        this.doc.getForm().markFieldAsDirty(this.ref);
    };
    PDFField.prototype.markAsClean = function() {
        this.doc.getForm().markFieldAsClean(this.ref);
    };
    PDFField.prototype.isDirty = function() {
        return this.doc.getForm().fieldIsDirty(this.ref);
    };
    PDFField.prototype.createWidget = function(options) {
        var _a;
        var textColor = options.textColor;
        var backgroundColor = options.backgroundColor;
        var borderColor = options.borderColor;
        var borderWidth = options.borderWidth;
        var degreesAngle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDegrees"])(options.rotate);
        var caption = options.caption;
        var x = options.x;
        var y = options.y;
        var width = options.width + borderWidth;
        var height = options.height + borderWidth;
        var hidden = Boolean(options.hidden);
        var pageRef = options.page;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertMultiple"])(degreesAngle, 'degreesAngle', 90);
        // Create a widget for this field
        var widget = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFWidgetAnnotation"].create(this.doc.context, this.ref);
        // Set widget properties
        var rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateRectangle"])({
            x: x,
            y: y,
            width: width,
            height: height
        }, borderWidth, degreesAngle);
        widget.setRectangle(rect);
        if (pageRef) widget.setP(pageRef);
        var ac = widget.getOrCreateAppearanceCharacteristics();
        if (backgroundColor) {
            ac.setBackgroundColor((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorToComponents"])(backgroundColor));
        }
        ac.setRotation(degreesAngle);
        if (caption) ac.setCaptions({
            normal: caption
        });
        if (borderColor) ac.setBorderColor((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorToComponents"])(borderColor));
        var bs = widget.getOrCreateBorderStyle();
        if (borderWidth !== undefined) bs.setWidth(borderWidth);
        widget.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnnotationFlags"].Print, true);
        widget.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnnotationFlags"].Hidden, hidden);
        widget.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$annotation$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnnotationFlags"].Invisible, false);
        // Set acrofield properties
        if (textColor) {
            var da = (_a = this.acroField.getDefaultAppearance()) !== null && _a !== void 0 ? _a : '';
            var newDa = da + '\n' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFillingColor"])(textColor).toString();
            this.acroField.setDefaultAppearance(newDa);
        }
        return widget;
    };
    PDFField.prototype.updateWidgetAppearanceWithFont = function(widget, font, _a) {
        var normal = _a.normal, rollover = _a.rollover, down = _a.down;
        this.updateWidgetAppearances(widget, {
            normal: this.createAppearanceStream(widget, normal, font),
            rollover: rollover && this.createAppearanceStream(widget, rollover, font),
            down: down && this.createAppearanceStream(widget, down, font)
        });
    };
    PDFField.prototype.updateOnOffWidgetAppearance = function(widget, onValue, _a) {
        var normal = _a.normal, rollover = _a.rollover, down = _a.down;
        this.updateWidgetAppearances(widget, {
            normal: this.createAppearanceDict(widget, normal, onValue),
            rollover: rollover && this.createAppearanceDict(widget, rollover, onValue),
            down: down && this.createAppearanceDict(widget, down, onValue)
        });
    };
    PDFField.prototype.updateWidgetAppearances = function(widget, _a) {
        var normal = _a.normal, rollover = _a.rollover, down = _a.down;
        widget.setNormalAppearance(normal);
        if (rollover) {
            widget.setRolloverAppearance(rollover);
        } else {
            widget.removeRolloverAppearance();
        }
        if (down) {
            widget.setDownAppearance(down);
        } else {
            widget.removeDownAppearance();
        }
    };
    // // TODO: Do we need to do this...?
    // private foo(font: PDFFont, dict: PDFDict) {
    //   if (!dict.lookup(PDFName.of('DR'))) {
    //     dict.set(PDFName.of('DR'), dict.context.obj({}));
    //   }
    //   const DR = dict.lookup(PDFName.of('DR'), PDFDict);
    //   if (!DR.lookup(PDFName.of('Font'))) {
    //     DR.set(PDFName.of('Font'), dict.context.obj({}));
    //   }
    //   const Font = DR.lookup(PDFName.of('Font'), PDFDict);
    //   Font.set(PDFName.of(font.name), font.ref);
    // }
    PDFField.prototype.createAppearanceStream = function(widget, appearance, font) {
        var _a;
        var context = this.acroField.dict.context;
        var _b = widget.getRectangle(), width = _b.width, height = _b.height;
        // TODO: Do we need to do this...?
        // if (font) {
        //   this.foo(font, widget.dict);
        //   this.foo(font, this.doc.getForm().acroForm.dict);
        // }
        // END TODO
        var Resources = font && {
            Font: (_a = {}, _a[font.name] = font.ref, _a)
        };
        var stream = context.formXObject(appearance, {
            Resources: Resources,
            BBox: context.obj([
                0,
                0,
                width,
                height
            ]),
            Matrix: context.obj([
                1,
                0,
                0,
                1,
                0,
                0
            ])
        });
        var streamRef = context.register(stream);
        return streamRef;
    };
    /**
     * Create a FormXObject of the supplied image and add it to context.
     * The FormXObject size is calculated based on the widget (including
     * the alignment).
     * @param widget The widget that should display the image.
     * @param alignment The alignment of the image.
     * @param image The image that should be displayed.
     * @returns The ref for the FormXObject that was added to the context.
     */ PDFField.prototype.createImageAppearanceStream = function(widget, image, alignment) {
        // NOTE: This implementation doesn't handle image borders.
        // NOTE: Acrobat seems to resize the image (maybe even skewing its aspect
        //       ratio) to fit perfectly within the widget's rectangle. This method
        //       does not currently do that. Should there be an option for that?
        var _a;
        var _b;
        var context = this.acroField.dict.context;
        var rectangle = widget.getRectangle();
        var ap = widget.getAppearanceCharacteristics();
        var bs = widget.getBorderStyle();
        var borderWidth = (_b = bs === null || bs === void 0 ? void 0 : bs.getWidth()) !== null && _b !== void 0 ? _b : 0;
        var rotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduceRotation"])(ap === null || ap === void 0 ? void 0 : ap.getRotation());
        var rotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateInPlace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, rectangle), {
            rotation: rotation
        }));
        var adj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adjustDimsForRotation"])(rectangle, rotation);
        var imageDims = image.scaleToFit(adj.width - borderWidth * 2, adj.height - borderWidth * 2);
        // Support borders on images and maybe other properties
        var options = {
            x: borderWidth,
            y: borderWidth,
            width: imageDims.width,
            height: imageDims.height,
            //
            rotate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
            xSkew: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
            ySkew: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0)
        };
        if (alignment === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$image$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageAlignment"].Center) {
            options.x += (adj.width - borderWidth * 2) / 2 - imageDims.width / 2;
            options.y += (adj.height - borderWidth * 2) / 2 - imageDims.height / 2;
        } else if (alignment === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$image$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageAlignment"].Right) {
            options.x = adj.width - borderWidth - imageDims.width;
            options.y = adj.height - borderWidth - imageDims.height;
        }
        var imageName = this.doc.context.addRandomSuffix('Image', 10);
        var appearance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])(rotate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawImage"])(imageName, options));
        ////////////
        var Resources = {
            XObject: (_a = {}, _a[imageName] = image.ref, _a)
        };
        var stream = context.formXObject(appearance, {
            Resources: Resources,
            BBox: context.obj([
                0,
                0,
                rectangle.width,
                rectangle.height
            ]),
            Matrix: context.obj([
                1,
                0,
                0,
                1,
                0,
                0
            ])
        });
        return context.register(stream);
    };
    PDFField.prototype.createAppearanceDict = function(widget, appearance, onValue) {
        var context = this.acroField.dict.context;
        var onStreamRef = this.createAppearanceStream(widget, appearance.on);
        var offStreamRef = this.createAppearanceStream(widget, appearance.off);
        var appearanceDict = context.obj({});
        appearanceDict.set(onValue, onStreamRef);
        appearanceDict.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Off'), offStreamRef);
        return appearanceDict;
    };
    return PDFField;
}();
const __TURBOPACK__default__export__ = PDFField;
 //# sourceMappingURL=PDFField.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFCheckBox.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFPage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$appearances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/appearances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/rotations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript) <export default as PDFName>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDict$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFDict.js [app-client] (ecmascript) <export default as PDFDict>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/validators.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
/**
 * Represents a check box field of a [[PDFForm]].
 *
 * [[PDFCheckBox]] fields are interactive boxes that users can click with their
 * mouse. This type of [[PDFField]] has two states: `on` and `off`. The purpose
 * of a check box is to enable users to select from one or more options, where
 * each option is represented by a single check box. Check boxes are typically
 * square in shape and display a check mark when they are in the `on` state.
 */ var PDFCheckBox = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFCheckBox, _super);
    function PDFCheckBox(acroCheckBox, ref, doc) {
        var _this = _super.call(this, acroCheckBox, ref, doc) || this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(acroCheckBox, 'acroCheckBox', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFAcroCheckBox"],
                'PDFAcroCheckBox'
            ]
        ]);
        _this.acroField = acroCheckBox;
        return _this;
    }
    /**
     * Mark this check box. This operation is analogous to a human user clicking
     * a check box to fill it in a PDF reader. This method will update the
     * underlying state of the check box field to indicate it has been selected.
     * PDF libraries and readers will be able to extract this value from the
     * saved document and determine that it was selected.
     *
     * For example:
     * ```js
     * const checkBox = form.getCheckBox('some.checkBox.field')
     * checkBox.check()
     * ```
     *
     * This method will mark this check box as dirty, causing its appearance
     * streams to be updated when either [[PDFDocument.save]] or
     * [[PDFForm.updateFieldAppearances]] is called. The updated appearance
     * streams will display a check mark inside the widgets of this check box
     * field.
     */ PDFCheckBox.prototype.check = function() {
        var _a;
        var onValue = (_a = this.acroField.getOnValue()) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Yes');
        this.markAsDirty();
        this.acroField.setValue(onValue);
    };
    /**
     * Clears this check box. This operation is analogous to a human user clicking
     * a check box to unmark it in a PDF reader. This method will update the
     * underlying state of the check box field to indicate it has been deselected.
     * PDF libraries and readers will be able to extract this value from the
     * saved document and determine that it was not selected.
     *
     * For example:
     * ```js
     * const checkBox = form.getCheckBox('some.checkBox.field')
     * checkBox.uncheck()
     * ```
     *
     * This method will mark this check box as dirty. See [[PDFCheckBox.check]]
     * for more details about what this means.
     */ PDFCheckBox.prototype.uncheck = function() {
        this.markAsDirty();
        this.acroField.setValue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Off'));
    };
    /**
     * Returns `true` if this check box is selected (either by a human user via
     * a PDF reader, or else programmatically via software). For example:
     * ```js
     * const checkBox = form.getCheckBox('some.checkBox.field')
     * if (checkBox.isChecked()) console.log('check box is selected')
     * ```
     * @returns Whether or not this check box is selected.
     */ PDFCheckBox.prototype.isChecked = function() {
        var onValue = this.acroField.getOnValue();
        return !!onValue && onValue === this.acroField.getValue();
    };
    /**
     * Show this check box on the specified page. For example:
     * ```js
     * const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
     * const page = pdfDoc.addPage()
     *
     * const form = pdfDoc.getForm()
     * const checkBox = form.createCheckBox('some.checkBox.field')
     *
     * checkBox.addToPage(page, {
     *   x: 50,
     *   y: 75,
     *   width: 25,
     *   height: 25,
     *   textColor: rgb(1, 0, 0),
     *   backgroundColor: rgb(0, 1, 0),
     *   borderColor: rgb(0, 0, 1),
     *   borderWidth: 2,
     *   rotate: degrees(90),
     * })
     * ```
     * This will create a new widget for this check box field.
     * @param page The page to which this check box widget should be added.
     * @param options The options to be used when adding this check box widget.
     */ PDFCheckBox.prototype.addToPage = function(page, options) {
        var _a, _b, _c, _d, _e, _f;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(page, 'page', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                'PDFPage'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFieldAppearanceOptions"])(options);
        if (!options) options = {};
        if (!('textColor' in options)) options.textColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0, 0, 0);
        if (!('backgroundColor' in options)) options.backgroundColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(1, 1, 1);
        if (!('borderColor' in options)) options.borderColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0, 0, 0);
        if (!('borderWidth' in options)) options.borderWidth = 1;
        // Create a widget for this check box
        var widget = this.createWidget({
            x: (_a = options.x) !== null && _a !== void 0 ? _a : 0,
            y: (_b = options.y) !== null && _b !== void 0 ? _b : 0,
            width: (_c = options.width) !== null && _c !== void 0 ? _c : 50,
            height: (_d = options.height) !== null && _d !== void 0 ? _d : 50,
            textColor: options.textColor,
            backgroundColor: options.backgroundColor,
            borderColor: options.borderColor,
            borderWidth: (_e = options.borderWidth) !== null && _e !== void 0 ? _e : 0,
            rotate: (_f = options.rotate) !== null && _f !== void 0 ? _f : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
            hidden: options.hidden,
            page: page.ref
        });
        var widgetRef = this.doc.context.register(widget.dict);
        // Add widget to this field
        this.acroField.addWidget(widgetRef);
        // Set appearance streams for widget
        widget.setAppearanceState(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Off'));
        this.updateWidgetAppearance(widget, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Yes'));
        // Add widget to the given page
        page.node.addAnnot(widgetRef);
    };
    /**
     * Returns `true` if any of this check box's widgets do not have an
     * appearance stream for its current state. For example:
     * ```js
     * const checkBox = form.getCheckBox('some.checkBox.field')
     * if (checkBox.needsAppearancesUpdate()) console.log('Needs update')
     * ```
     * @returns Whether or not this check box needs an appearance update.
     */ PDFCheckBox.prototype.needsAppearancesUpdate = function() {
        var _a;
        var widgets = this.acroField.getWidgets();
        for(var idx = 0, len = widgets.length; idx < len; idx++){
            var widget = widgets[idx];
            var state = widget.getAppearanceState();
            var normal = (_a = widget.getAppearances()) === null || _a === void 0 ? void 0 : _a.normal;
            if (!(normal instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDict$3e$__["PDFDict"])) return true;
            if (state && !normal.has(state)) return true;
        }
        return false;
    };
    /**
     * Update the appearance streams for each of this check box's widgets using
     * the default appearance provider for check boxes. For example:
     * ```js
     * const checkBox = form.getCheckBox('some.checkBox.field')
     * checkBox.defaultUpdateAppearances()
     * ```
     */ PDFCheckBox.prototype.defaultUpdateAppearances = function() {
        this.updateAppearances();
    };
    /**
     * Update the appearance streams for each of this check box's widgets using
     * the given appearance provider. If no `provider` is passed, the default
     * appearance provider for check boxs will be used. For example:
     * ```js
     * const checkBox = form.getCheckBox('some.checkBox.field')
     * checkBox.updateAppearances((field, widget) => {
     *   ...
     *   return {
     *     normal: { on: drawCheckBox(...), off: drawCheckBox(...) },
     *     down: { on: drawCheckBox(...), off: drawCheckBox(...) },
     *   }
     * })
     * ```
     * @param provider Optionally, the appearance provider to be used for
     *                 generating the contents of the appearance streams.
     */ PDFCheckBox.prototype.updateAppearances = function(provider) {
        var _a;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(provider, 'provider', [
            Function
        ]);
        var widgets = this.acroField.getWidgets();
        for(var idx = 0, len = widgets.length; idx < len; idx++){
            var widget = widgets[idx];
            var onValue = (_a = widget.getOnValue()) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Yes');
            if (!onValue) continue;
            this.updateWidgetAppearance(widget, onValue, provider);
        }
        this.markAsClean();
    };
    PDFCheckBox.prototype.updateWidgetAppearance = function(widget, onValue, provider) {
        var apProvider = provider !== null && provider !== void 0 ? provider : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$appearances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultCheckBoxAppearanceProvider"];
        var appearances = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$appearances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeAppearance"])(apProvider(this, widget));
        this.updateOnOffWidgetAppearance(widget, onValue, appearances);
    };
    /**
     * > **NOTE:** You probably don't want to call this method directly. Instead,
     * > consider using the [[PDFForm.getCheckBox]] method, which will create an
     * > instance of [[PDFCheckBox]] for you.
     *
     * Create an instance of [[PDFCheckBox]] from an existing acroCheckBox and ref
     *
     * @param acroCheckBox The underlying `PDFAcroCheckBox` for this check box.
     * @param ref The unique reference for this check box.
     * @param doc The document to which this check box will belong.
     */ PDFCheckBox.of = function(acroCheckBox, ref, doc) {
        return new PDFCheckBox(acroCheckBox, ref, doc);
    };
    return PDFCheckBox;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFCheckBox;
 //# sourceMappingURL=PDFCheckBox.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFDropdown.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFPage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFFont$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFFont.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$appearances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/appearances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/rotations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFHexString$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFHexString.js [app-client] (ecmascript) <export default as PDFHexString>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFStream$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFStream.js [app-client] (ecmascript) <export default as PDFStream>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/flags.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/validators.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
/**
 * Represents a dropdown field of a [[PDFForm]].
 *
 * [[PDFDropdown]] fields are interactive text boxes that display a single
 * element (the currently selected value). The purpose of a dropdown is to
 * enable users to select a single option from a set of possible options. Users
 * can click on a dropdown to view the full list of options it provides.
 * Clicking on an option in the list will cause it to be selected and displayed
 * in the dropdown's text box. Some dropdowns allow users to enter text
 * directly into the box from their keyboard, rather than only being allowed to
 * choose an option from the list (see [[PDFDropdown.isEditable]]).
 */ var PDFDropdown = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFDropdown, _super);
    function PDFDropdown(acroComboBox, ref, doc) {
        var _this = _super.call(this, acroComboBox, ref, doc) || this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(acroComboBox, 'acroComboBox', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFAcroComboBox"],
                'PDFAcroComboBox'
            ]
        ]);
        _this.acroField = acroComboBox;
        return _this;
    }
    /**
     * Get the list of available options for this dropdown. These options will be
     * displayed to users who click on this dropdown in a PDF reader.
     * For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * const options = dropdown.getOptions()
     * console.log('Dropdown options:', options)
     * ```
     * @returns The options for this dropdown.
     */ PDFDropdown.prototype.getOptions = function() {
        var rawOptions = this.acroField.getOptions();
        var options = new Array(rawOptions.length);
        for(var idx = 0, len = options.length; idx < len; idx++){
            var _a = rawOptions[idx], display = _a.display, value = _a.value;
            options[idx] = (display !== null && display !== void 0 ? display : value).decodeText();
        }
        return options;
    };
    /**
     * Get the selected options for this dropdown. These are the values that were
     * selected by a human user via a PDF reader, or programatically via
     * software.
     * For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * const selections = dropdown.getSelected()
     * console.log('Dropdown selections:', selections)
     * ```
     * > **NOTE:** Note that PDF readers only display one selected option when
     * > rendering dropdowns. However, the PDF specification does allow for
     * > multiple values to be selected in a dropdown. As such, the `pdf-lib`
     * > API supports this. However, in most cases the array returned by this
     * > method will contain only a single element (or no elements).
     * @returns The selected options in this dropdown.
     */ PDFDropdown.prototype.getSelected = function() {
        var values = this.acroField.getValues();
        var selected = new Array(values.length);
        for(var idx = 0, len = values.length; idx < len; idx++){
            selected[idx] = values[idx].decodeText();
        }
        return selected;
    };
    /**
     * Set the list of options that are available for this dropdown. These are
     * the values that will be available for users to select when they view this
     * dropdown in a PDF reader. Note that preexisting options for this dropdown
     * will be removed. Only the values passed as `options` will be available to
     * select.
     * For example:
     * ```js
     * const dropdown = form.getDropdown('planets.dropdown')
     * dropdown.setOptions(['Earth', 'Mars', 'Pluto', 'Venus'])
     * ```
     * @param options The options that should be available in this dropdown.
     */ PDFDropdown.prototype.setOptions = function(options) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(options, 'options', [
            Array
        ]);
        var optionObjects = new Array(options.length);
        for(var idx = 0, len = options.length; idx < len; idx++){
            optionObjects[idx] = {
                value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFHexString$3e$__["PDFHexString"].fromText(options[idx])
            };
        }
        this.acroField.setOptions(optionObjects);
    };
    /**
     * Add to the list of options that are available for this dropdown. Users
     * will be able to select these values in a PDF reader. In addition to the
     * values passed as `options`, any preexisting options for this dropdown will
     * still be available for users to select.
     * For example:
     * ```js
     * const dropdown = form.getDropdown('rockets.dropdown')
     * dropdown.addOptions(['Saturn IV', 'Falcon Heavy'])
     * ```
     * @param options New options that should be available in this dropdown.
     */ PDFDropdown.prototype.addOptions = function(options) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(options, 'options', [
            'string',
            Array
        ]);
        var optionsArr = Array.isArray(options) ? options : [
            options
        ];
        var existingOptions = this.acroField.getOptions();
        var newOptions = new Array(optionsArr.length);
        for(var idx = 0, len = optionsArr.length; idx < len; idx++){
            newOptions[idx] = {
                value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFHexString$3e$__["PDFHexString"].fromText(optionsArr[idx])
            };
        }
        this.acroField.setOptions(existingOptions.concat(newOptions));
    };
    /**
     * Select one or more values for this dropdown. This operation is analogous
     * to a human user opening the dropdown in a PDF reader and clicking on a
     * value to select it. This method will update the underlying state of the
     * dropdown to indicate which values have been selected. PDF libraries and
     * readers will be able to extract these values from the saved document and
     * determine which values were selected.
     *
     * For example:
     * ```js
     * const dropdown = form.getDropdown('best.superhero.dropdown')
     * dropdown.select('One Punch Man')
     * ```
     *
     * This method will mark this dropdown as dirty, causing its appearance
     * streams to be updated when either [[PDFDocument.save]] or
     * [[PDFForm.updateFieldAppearances]] is called. The updated streams will
     * display the selected option inside the widgets of this dropdown.
     *
     * **IMPORTANT:** The default font used to update appearance streams is
     * [[StandardFonts.Helvetica]]. Note that this is a WinAnsi font. This means
     * that encoding errors will be thrown if the selected option for this field
     * contains characters outside the WinAnsi character set (the latin alphabet).
     *
     * Embedding a custom font and passing it to
     * [[PDFForm.updateFieldAppearances]] or [[PDFDropdown.updateAppearances]]
     * allows you to generate appearance streams with characters outside the
     * latin alphabet (assuming the custom font supports them).
     *
     * Selecting an option that does not exist in this dropdown's option list
     * (see [[PDFDropdown.getOptions]]) will enable editing on this dropdown
     * (see [[PDFDropdown.enableEditing]]).
     *
     * > **NOTE:** PDF readers only display one selected option when rendering
     * > dropdowns. However, the PDF specification does allow for multiple values
     * > to be selected in a dropdown. As such, the `pdf-lib` API supports this.
     * > However, it is not recommended to select more than one value with this
     * > method, as only one will be visible. [[PDFOptionList]] fields are better
     * > suited for displaying multiple selected values.
     *
     * @param options The options to be selected.
     * @param merge Whether or not existing selections should be preserved.
     */ PDFDropdown.prototype.select = function(options, merge) {
        if (merge === void 0) {
            merge = false;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(options, 'options', [
            'string',
            Array
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(merge, 'merge', [
            'boolean'
        ]);
        var optionsArr = Array.isArray(options) ? options : [
            options
        ];
        var validOptions = this.getOptions();
        var hasCustomOption = optionsArr.find(function(option) {
            return !validOptions.includes(option);
        });
        if (hasCustomOption) this.enableEditing();
        this.markAsDirty();
        if (optionsArr.length > 1 || optionsArr.length === 1 && merge) {
            this.enableMultiselect();
        }
        var values = new Array(optionsArr.length);
        for(var idx = 0, len = optionsArr.length; idx < len; idx++){
            values[idx] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFHexString$3e$__["PDFHexString"].fromText(optionsArr[idx]);
        }
        if (merge) {
            var existingValues = this.acroField.getValues();
            this.acroField.setValues(existingValues.concat(values));
        } else {
            this.acroField.setValues(values);
        }
    };
    /**
     * Clear all selected values for this dropdown. This operation is equivalent
     * to selecting an empty list. This method will update the underlying state
     * of the dropdown to indicate that no values have been selected.
     * For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * dropdown.clear()
     * ```
     * This method will mark this text field as dirty. See [[PDFDropdown.select]]
     * for more details about what this means.
     */ PDFDropdown.prototype.clear = function() {
        this.markAsDirty();
        this.acroField.setValues([]);
    };
    /**
     * Set the font size for this field. Larger font sizes will result in larger
     * text being displayed when PDF readers render this dropdown. Font sizes may
     * be integer or floating point numbers. Supplying a negative font size will
     * cause this method to throw an error.
     *
     * For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * dropdown.setFontSize(4)
     * dropdown.setFontSize(15.7)
     * ```
     *
     * > This method depends upon the existence of a default appearance
     * > (`/DA`) string. If this field does not have a default appearance string,
     * > or that string does not contain a font size (via the `Tf` operator),
     * > then this method will throw an error.
     *
     * @param fontSize The font size to be used when rendering text in this field.
     */ PDFDropdown.prototype.setFontSize = function(fontSize) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertPositive"])(fontSize, 'fontSize');
        this.acroField.setFontSize(fontSize);
        this.markAsDirty();
    };
    /**
     * Returns `true` if users are allowed to edit the selected value of this
     * dropdown directly and are not constrained by the list of available
     * options. See [[PDFDropdown.enableEditing]] and
     * [[PDFDropdown.disableEditing]]. For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * if (dropdown.isEditable()) console.log('Editing is enabled')
     * ```
     * @returns Whether or not this dropdown is editable.
     */ PDFDropdown.prototype.isEditable = function() {
        return this.acroField.hasFlag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].Edit);
    };
    /**
     * Allow users to edit the selected value of this dropdown in PDF readers
     * with their keyboard. This means that the selected value of this dropdown
     * will not be constrained by the list of available options. However, if this
     * dropdown has any available options, users will still be allowed to select
     * from that list.
     * For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * dropdown.enableEditing()
     * ```
     */ PDFDropdown.prototype.enableEditing = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].Edit, true);
    };
    /**
     * Do not allow users to edit the selected value of this dropdown in PDF
     * readers with their keyboard. This will constrain the selected value of
     * this dropdown to the list of available options. Users will only be able
     * to select an option from that list.
     * For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * dropdown.disableEditing()
     * ```
     */ PDFDropdown.prototype.disableEditing = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].Edit, false);
    };
    /**
     * Returns `true` if the option list of this dropdown is always displayed
     * in alphabetical order, irrespective of the order in which the options
     * were added to the dropdown. See [[PDFDropdown.enableSorting]] and
     * [[PDFDropdown.disableSorting]]. For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * if (dropdown.isSorted()) console.log('Sorting is enabled')
     * ```
     * @returns Whether or not this dropdown's options are sorted.
     */ PDFDropdown.prototype.isSorted = function() {
        return this.acroField.hasFlag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].Sort);
    };
    /**
     * Always display the option list of this dropdown in alphabetical order,
     * irrespective of the order in which the options were added to this dropdown.
     * For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * dropdown.enableSorting()
     * ```
     */ PDFDropdown.prototype.enableSorting = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].Sort, true);
    };
    /**
     * Do not always display the option list of this dropdown in alphabetical
     * order. Instead, display the options in whichever order they were added
     * to the list. For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * dropdown.disableSorting()
     * ```
     */ PDFDropdown.prototype.disableSorting = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].Sort, false);
    };
    /**
     * Returns `true` if multiple options can be selected from this dropdown's
     * option list. See [[PDFDropdown.enableMultiselect]] and
     * [[PDFDropdown.disableMultiselect]]. For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * if (dropdown.isMultiselect()) console.log('Multiselect is enabled')
     * ```
     * @returns Whether or not multiple options can be selected.
     */ PDFDropdown.prototype.isMultiselect = function() {
        return this.acroField.hasFlag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].MultiSelect);
    };
    /**
     * Allow users to select more than one option from this dropdown's option
     * list. For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * dropdown.enableMultiselect()
     * ```
     */ PDFDropdown.prototype.enableMultiselect = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].MultiSelect, true);
    };
    /**
     * Do not allow users to select more than one option from this dropdown's
     * option list. For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * dropdown.disableMultiselect()
     * ```
     */ PDFDropdown.prototype.disableMultiselect = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].MultiSelect, false);
    };
    /**
     * Returns `true` if the selected option should be spell checked by PDF
     * readers. Spell checking will only be performed if this dropdown allows
     * editing (see [[PDFDropdown.isEditable]]). See
     * [[PDFDropdown.enableSpellChecking]] and
     * [[PDFDropdown.disableSpellChecking]]. For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * if (dropdown.isSpellChecked()) console.log('Spell checking is enabled')
     * ```
     * @returns Whether or not this dropdown can be spell checked.
     */ PDFDropdown.prototype.isSpellChecked = function() {
        return !this.acroField.hasFlag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].DoNotSpellCheck);
    };
    /**
     * Allow PDF readers to spell check the selected option of this dropdown.
     * For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * dropdown.enableSpellChecking()
     * ```
     */ PDFDropdown.prototype.enableSpellChecking = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].DoNotSpellCheck, false);
    };
    /**
     * Do not allow PDF readers to spell check the selected option of this
     * dropdown. For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * dropdown.disableSpellChecking()
     * ```
     */ PDFDropdown.prototype.disableSpellChecking = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].DoNotSpellCheck, true);
    };
    /**
     * Returns `true` if the option selected by a user is stored, or "committed",
     * when the user clicks the option. The alternative is that the user's
     * selection is stored when the user leaves this dropdown field (by clicking
     * outside of it - on another field, for example). See
     * [[PDFDropdown.enableSelectOnClick]] and
     * [[PDFDropdown.disableSelectOnClick]]. For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * if (dropdown.isSelectOnClick()) console.log('Select on click is enabled')
     * ```
     * @returns Whether or not options are selected immediately after they are
     *          clicked.
     */ PDFDropdown.prototype.isSelectOnClick = function() {
        return this.acroField.hasFlag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].CommitOnSelChange);
    };
    /**
     * Store the option selected by a user immediately after the user clicks the
     * option. Do not wait for the user to leave this dropdown field (by clicking
     * outside of it - on another field, for example). For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * dropdown.enableSelectOnClick()
     * ```
     */ PDFDropdown.prototype.enableSelectOnClick = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].CommitOnSelChange, true);
    };
    /**
     * Wait to store the option selected by a user until they leave this dropdown
     * field (by clicking outside of it - on another field, for example).
     * For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * dropdown.disableSelectOnClick()
     * ```
     */ PDFDropdown.prototype.disableSelectOnClick = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].CommitOnSelChange, false);
    };
    /**
     * Show this dropdown on the specified page. For example:
     * ```js
     * const ubuntuFont = await pdfDoc.embedFont(ubuntuFontBytes)
     * const page = pdfDoc.addPage()
     *
     * const form = pdfDoc.getForm()
     * const dropdown = form.createDropdown('best.gundam')
     * dropdown.setOptions(['Exia', 'Dynames'])
     * dropdown.select('Exia')
     *
     * dropdown.addToPage(page, {
     *   x: 50,
     *   y: 75,
     *   width: 200,
     *   height: 100,
     *   textColor: rgb(1, 0, 0),
     *   backgroundColor: rgb(0, 1, 0),
     *   borderColor: rgb(0, 0, 1),
     *   borderWidth: 2,
     *   rotate: degrees(90),
     *   font: ubuntuFont,
     * })
     * ```
     * This will create a new widget for this dropdown field.
     * @param page The page to which this dropdown widget should be added.
     * @param options The options to be used when adding this dropdown widget.
     */ PDFDropdown.prototype.addToPage = function(page, options) {
        var _a, _b, _c, _d, _e, _f, _g;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(page, 'page', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                'PDFPage'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFieldAppearanceOptions"])(options);
        if (!options) options = {};
        if (!('textColor' in options)) options.textColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0, 0, 0);
        if (!('backgroundColor' in options)) options.backgroundColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(1, 1, 1);
        if (!('borderColor' in options)) options.borderColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0, 0, 0);
        if (!('borderWidth' in options)) options.borderWidth = 1;
        // Create a widget for this dropdown
        var widget = this.createWidget({
            x: (_a = options.x) !== null && _a !== void 0 ? _a : 0,
            y: (_b = options.y) !== null && _b !== void 0 ? _b : 0,
            width: (_c = options.width) !== null && _c !== void 0 ? _c : 200,
            height: (_d = options.height) !== null && _d !== void 0 ? _d : 50,
            textColor: options.textColor,
            backgroundColor: options.backgroundColor,
            borderColor: options.borderColor,
            borderWidth: (_e = options.borderWidth) !== null && _e !== void 0 ? _e : 0,
            rotate: (_f = options.rotate) !== null && _f !== void 0 ? _f : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
            hidden: options.hidden,
            page: page.ref
        });
        var widgetRef = this.doc.context.register(widget.dict);
        // Add widget to this field
        this.acroField.addWidget(widgetRef);
        // Set appearance streams for widget
        var font = (_g = options.font) !== null && _g !== void 0 ? _g : this.doc.getForm().getDefaultFont();
        this.updateWidgetAppearance(widget, font);
        // Add widget to the given page
        page.node.addAnnot(widgetRef);
    };
    /**
     * Returns `true` if this dropdown has been marked as dirty, or if any of
     * this dropdown's widgets do not have an appearance stream. For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * if (dropdown.needsAppearancesUpdate()) console.log('Needs update')
     * ```
     * @returns Whether or not this dropdown needs an appearance update.
     */ PDFDropdown.prototype.needsAppearancesUpdate = function() {
        var _a;
        if (this.isDirty()) return true;
        var widgets = this.acroField.getWidgets();
        for(var idx = 0, len = widgets.length; idx < len; idx++){
            var widget = widgets[idx];
            var hasAppearances = ((_a = widget.getAppearances()) === null || _a === void 0 ? void 0 : _a.normal) instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFStream$3e$__["PDFStream"];
            if (!hasAppearances) return true;
        }
        return false;
    };
    /**
     * Update the appearance streams for each of this dropdown's widgets using
     * the default appearance provider for dropdowns. For example:
     * ```js
     * const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
     * const dropdown = form.getDropdown('some.dropdown.field')
     * dropdown.defaultUpdateAppearances(helvetica)
     * ```
     * @param font The font to be used for creating the appearance streams.
     */ PDFDropdown.prototype.defaultUpdateAppearances = function(font) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(font, 'font', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFFont$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                'PDFFont'
            ]
        ]);
        this.updateAppearances(font);
    };
    /**
     * Update the appearance streams for each of this dropdown's widgets using
     * the given appearance provider. If no `provider` is passed, the default
     * appearance provider for dropdowns will be used. For example:
     * ```js
     * const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
     * const dropdown = form.getDropdown('some.dropdown.field')
     * dropdown.updateAppearances(helvetica, (field, widget, font) => {
     *   ...
     *   return drawTextField(...)
     * })
     * ```
     * @param font The font to be used for creating the appearance streams.
     * @param provider Optionally, the appearance provider to be used for
     *                 generating the contents of the appearance streams.
     */ PDFDropdown.prototype.updateAppearances = function(font, provider) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(font, 'font', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFFont$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                'PDFFont'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(provider, 'provider', [
            Function
        ]);
        var widgets = this.acroField.getWidgets();
        for(var idx = 0, len = widgets.length; idx < len; idx++){
            var widget = widgets[idx];
            this.updateWidgetAppearance(widget, font, provider);
        }
        this.markAsClean();
    };
    // getOption(index: number): string {}
    // getSelectedIndices(): number[] {}
    // removeOptions(option: string | string[]) {}
    // removeIndices(option: number[]) {}
    // deselect(options: string | string[]) {}
    // deselectIndices(optionIndices: number[]) {}
    PDFDropdown.prototype.updateWidgetAppearance = function(widget, font, provider) {
        var apProvider = provider !== null && provider !== void 0 ? provider : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$appearances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultDropdownAppearanceProvider"];
        var appearances = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$appearances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeAppearance"])(apProvider(this, widget, font));
        this.updateWidgetAppearanceWithFont(widget, font, appearances);
    };
    /**
     * > **NOTE:** You probably don't want to call this method directly. Instead,
     * > consider using the [[PDFForm.getDropdown]] method, which will create an
     * > instance of [[PDFDropdown]] for you.
     *
     * Create an instance of [[PDFDropdown]] from an existing acroComboBox and ref
     *
     * @param acroComboBox The underlying `PDFAcroComboBox` for this dropdown.
     * @param ref The unique reference for this dropdown.
     * @param doc The document to which this dropdown will belong.
     */ PDFDropdown.of = function(acroComboBox, ref, doc) {
        return new PDFDropdown(acroComboBox, ref, doc);
    };
    return PDFDropdown;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFDropdown;
 //# sourceMappingURL=PDFDropdown.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFOptionList.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFPage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFFont$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFFont.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$appearances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/appearances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/rotations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFHexString$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFHexString.js [app-client] (ecmascript) <export default as PDFHexString>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFStream$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFStream.js [app-client] (ecmascript) <export default as PDFStream>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/flags.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/validators.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
/**
 * Represents an option list field of a [[PDFForm]].
 *
 * [[PDFOptionList]] fields are interactive lists of options. The purpose of an
 * option list is to enable users to select one or more options from a set of
 * possible options. Users are able to see the full set of options without
 * first having to click on the field (though scrolling may be necessary).
 * Clicking an option in the list will cause it to be selected and displayed
 * with a highlighted background. Some option lists allow users to select
 * more than one option (see [[PDFOptionList.isMultiselect]]).
 */ var PDFOptionList = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFOptionList, _super);
    function PDFOptionList(acroListBox, ref, doc) {
        var _this = _super.call(this, acroListBox, ref, doc) || this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(acroListBox, 'acroListBox', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFAcroListBox"],
                'PDFAcroListBox'
            ]
        ]);
        _this.acroField = acroListBox;
        return _this;
    }
    /**
     * Get the list of available options for this option list. These options will
     * be displayed to users who view this option list in a PDF reader.
     * For example:
     * ```js
     * const optionList = form.getOptionList('some.optionList.field')
     * const options = optionList.getOptions()
     * console.log('Option List options:', options)
     * ```
     * @returns The options for this option list.
     */ PDFOptionList.prototype.getOptions = function() {
        var rawOptions = this.acroField.getOptions();
        var options = new Array(rawOptions.length);
        for(var idx = 0, len = options.length; idx < len; idx++){
            var _a = rawOptions[idx], display = _a.display, value = _a.value;
            options[idx] = (display !== null && display !== void 0 ? display : value).decodeText();
        }
        return options;
    };
    /**
     * Get the selected options for this option list. These are the values that
     * were selected by a human user via a PDF reader, or programatically via
     * software.
     * For example:
     * ```js
     * const optionList = form.getOptionList('some.optionList.field')
     * const selections = optionList.getSelected()
     * console.log('Option List selections:', selections)
     * ```
     * @returns The selected options for this option list.
     */ PDFOptionList.prototype.getSelected = function() {
        var values = this.acroField.getValues();
        var selected = new Array(values.length);
        for(var idx = 0, len = values.length; idx < len; idx++){
            selected[idx] = values[idx].decodeText();
        }
        return selected;
    };
    /**
     * Set the list of options that are available for this option list. These are
     * the values that will be available for users to select when they view this
     * option list in a PDF reader. Note that preexisting options for this
     * option list will be removed. Only the values passed as `options` will be
     * available to select.
     *
     * For example:
     * ```js
     * const optionList = form.getOptionList('planets.optionList')
     * optionList.setOptions(['Earth', 'Mars', 'Pluto', 'Venus'])
     * ```
     *
     * This method will mark this option list as dirty, causing its appearance
     * streams to be updated when either [[PDFDocument.save]] or
     * [[PDFForm.updateFieldAppearances]] is called. The updated streams will
     * display the options this field contains inside the widgets of this text
     * field (with selected options highlighted).
     *
     * **IMPORTANT:** The default font used to update appearance streams is
     * [[StandardFonts.Helvetica]]. Note that this is a WinAnsi font. This means
     * that encoding errors will be thrown if this field contains any options
     * with characters outside the WinAnsi character set (the latin alphabet).
     *
     * Embedding a custom font and passing it to
     * [[PDFForm.updateFieldAppearances]] or [[PDFOptionList.updateAppearances]]
     * allows you to generate appearance streams with characters outside the
     * latin alphabet (assuming the custom font supports them).
     *
     * @param options The options that should be available in this option list.
     */ PDFOptionList.prototype.setOptions = function(options) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(options, 'options', [
            Array
        ]);
        this.markAsDirty();
        var optionObjects = new Array(options.length);
        for(var idx = 0, len = options.length; idx < len; idx++){
            optionObjects[idx] = {
                value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFHexString$3e$__["PDFHexString"].fromText(options[idx])
            };
        }
        this.acroField.setOptions(optionObjects);
    };
    /**
     * Add to the list of options that are available for this option list. Users
     * will be able to select these values in a PDF reader. In addition to the
     * values passed as `options`, any preexisting options for this option list
     * will still be available for users to select.
     * For example:
     * ```js
     * const optionList = form.getOptionList('rockets.optionList')
     * optionList.addOptions(['Saturn IV', 'Falcon Heavy'])
     * ```
     * This method will mark this option list as dirty. See
     * [[PDFOptionList.setOptions]] for more details about what this means.
     * @param options New options that should be available in this option list.
     */ PDFOptionList.prototype.addOptions = function(options) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(options, 'options', [
            'string',
            Array
        ]);
        this.markAsDirty();
        var optionsArr = Array.isArray(options) ? options : [
            options
        ];
        var existingOptions = this.acroField.getOptions();
        var newOptions = new Array(optionsArr.length);
        for(var idx = 0, len = optionsArr.length; idx < len; idx++){
            newOptions[idx] = {
                value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFHexString$3e$__["PDFHexString"].fromText(optionsArr[idx])
            };
        }
        this.acroField.setOptions(existingOptions.concat(newOptions));
    };
    /**
     * Select one or more values for this option list. This operation is analogous
     * to a human user opening the option list in a PDF reader and clicking on one
     * or more values to select them. This method will update the underlying state
     * of the option list to indicate which values have been selected. PDF
     * libraries and readers will be able to extract these values from the saved
     * document and determine which values were selected.
     * For example:
     * ```js
     * const optionList = form.getOptionList('best.superheroes.optionList')
     * optionList.select(['One Punch Man', 'Iron Man'])
     * ```
     * This method will mark this option list as dirty. See
     * [[PDFOptionList.setOptions]] for more details about what this means.
     * @param options The options to be selected.
     * @param merge Whether or not existing selections should be preserved.
     */ PDFOptionList.prototype.select = function(options, merge) {
        if (merge === void 0) {
            merge = false;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(options, 'options', [
            'string',
            Array
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(merge, 'merge', [
            'boolean'
        ]);
        var optionsArr = Array.isArray(options) ? options : [
            options
        ];
        var validOptions = this.getOptions();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsSubset"])(optionsArr, 'option', validOptions);
        this.markAsDirty();
        if (optionsArr.length > 1 || optionsArr.length === 1 && merge) {
            this.enableMultiselect();
        }
        var values = new Array(optionsArr.length);
        for(var idx = 0, len = optionsArr.length; idx < len; idx++){
            values[idx] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFHexString$3e$__["PDFHexString"].fromText(optionsArr[idx]);
        }
        if (merge) {
            var existingValues = this.acroField.getValues();
            this.acroField.setValues(existingValues.concat(values));
        } else {
            this.acroField.setValues(values);
        }
    };
    /**
     * Clear all selected values for this option list. This operation is
     * equivalent to selecting an empty list. This method will update the
     * underlying state of the option list to indicate that no values have been
     * selected.
     * For example:
     * ```js
     * const optionList = form.getOptionList('some.optionList.field')
     * optionList.clear()
     * ```
     * This method will mark this option list as dirty. See
     * [[PDFOptionList.setOptions]] for more details about what this means.
     */ PDFOptionList.prototype.clear = function() {
        this.markAsDirty();
        this.acroField.setValues([]);
    };
    /**
     * Set the font size for the text in this field. There needs to be a
     * default appearance string (DA) set with a font value specified
     * for this to work. For example:
     * ```js
     * const optionList = form.getOptionList('some.optionList.field')
     * optionList.setFontSize(4);
     * ```
     * @param fontSize The font size to set the font to.
     */ /**
     * Set the font size for this field. Larger font sizes will result in larger
     * text being displayed when PDF readers render this option list. Font sizes
     * may be integer or floating point numbers. Supplying a negative font size
     * will cause this method to throw an error.
     *
     * For example:
     * ```js
     * const optionList = form.getOptionList('some.optionList.field')
     * optionList.setFontSize(4)
     * optionList.setFontSize(15.7)
     * ```
     *
     * > This method depends upon the existence of a default appearance
     * > (`/DA`) string. If this field does not have a default appearance string,
     * > or that string does not contain a font size (via the `Tf` operator),
     * > then this method will throw an error.
     *
     * @param fontSize The font size to be used when rendering text in this field.
     */ PDFOptionList.prototype.setFontSize = function(fontSize) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertPositive"])(fontSize, 'fontSize');
        this.acroField.setFontSize(fontSize);
        this.markAsDirty();
    };
    /**
     * Returns `true` if the options of this option list are always displayed
     * in alphabetical order, irrespective of the order in which the options
     * were added to the option list. See [[PDFOptionList.enableSorting]] and
     * [[PDFOptionList.disableSorting]]. For example:
     * ```js
     * const optionList = form.getOptionList('some.optionList.field')
     * if (optionList.isSorted()) console.log('Sorting is enabled')
     * ```
     * @returns Whether or not this option list is sorted.
     */ PDFOptionList.prototype.isSorted = function() {
        return this.acroField.hasFlag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].Sort);
    };
    /**
     * Always display the options of this option list in alphabetical order,
     * irrespective of the order in which the options were added to this option
     * list.
     * For example:
     * ```js
     * const optionList = form.getOptionList('some.optionList.field')
     * optionList.enableSorting()
     * ```
     */ PDFOptionList.prototype.enableSorting = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].Sort, true);
    };
    /**
     * Do not always display the options of this option list in alphabetical
     * order. Instead, display the options in whichever order they were added
     * to this option list. For example:
     * ```js
     * const optionList = form.getOptionList('some.optionList.field')
     * optionList.disableSorting()
     * ```
     */ PDFOptionList.prototype.disableSorting = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].Sort, false);
    };
    /**
     * Returns `true` if multiple options can be selected from this option list.
     * See [[PDFOptionList.enableMultiselect]] and
     * [[PDFOptionList.disableMultiselect]]. For example:
     * ```js
     * const optionList = form.getOptionList('some.optionList.field')
     * if (optionList.isMultiselect()) console.log('Multiselect is enabled')
     * ```
     * @returns Whether or not multiple options can be selected.
     */ PDFOptionList.prototype.isMultiselect = function() {
        return this.acroField.hasFlag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].MultiSelect);
    };
    /**
     * Allow users to select more than one option from this option list.
     * For example:
     * ```js
     * const optionList = form.getOptionList('some.optionList.field')
     * optionList.enableMultiselect()
     * ```
     */ PDFOptionList.prototype.enableMultiselect = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].MultiSelect, true);
    };
    /**
     * Do not allow users to select more than one option from this option list.
     * For example:
     * ```js
     * const optionList = form.getOptionList('some.optionList.field')
     * optionList.disableMultiselect()
     * ```
     */ PDFOptionList.prototype.disableMultiselect = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].MultiSelect, false);
    };
    /**
     * Returns `true` if the option selected by a user is stored, or "committed",
     * when the user clicks the option. The alternative is that the user's
     * selection is stored when the user leaves this option list field (by
     * clicking outside of it - on another field, for example). See
     * [[PDFOptionList.enableSelectOnClick]] and
     * [[PDFOptionList.disableSelectOnClick]]. For example:
     * ```js
     * const optionList = form.getOptionList('some.optionList.field')
     * if (optionList.isSelectOnClick()) console.log('Select on click is enabled')
     * ```
     * @returns Whether or not options are selected immediately after they are
     *          clicked.
     */ PDFOptionList.prototype.isSelectOnClick = function() {
        return this.acroField.hasFlag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].CommitOnSelChange);
    };
    /**
     * Store the option selected by a user immediately after the user clicks the
     * option. Do not wait for the user to leave this option list field (by
     * clicking outside of it - on another field, for example). For example:
     * ```js
     * const optionList = form.getOptionList('some.optionList.field')
     * optionList.enableSelectOnClick()
     * ```
     */ PDFOptionList.prototype.enableSelectOnClick = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].CommitOnSelChange, true);
    };
    /**
     * Wait to store the option selected by a user until they leave this option
     * list field (by clicking outside of it - on another field, for example).
     * For example:
     * ```js
     * const optionList = form.getOptionList('some.optionList.field')
     * optionList.disableSelectOnClick()
     * ```
     */ PDFOptionList.prototype.disableSelectOnClick = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroChoiceFlags"].CommitOnSelChange, false);
    };
    /**
     * Show this option list on the specified page. For example:
     * ```js
     * const ubuntuFont = await pdfDoc.embedFont(ubuntuFontBytes)
     * const page = pdfDoc.addPage()
     *
     * const form = pdfDoc.getForm()
     * const optionList = form.createOptionList('best.gundams')
     * optionList.setOptions(['Exia', 'Dynames', 'Kyrios', 'Virtue'])
     * optionList.select(['Exia', 'Virtue'])
     *
     * optionList.addToPage(page, {
     *   x: 50,
     *   y: 75,
     *   width: 200,
     *   height: 100,
     *   textColor: rgb(1, 0, 0),
     *   backgroundColor: rgb(0, 1, 0),
     *   borderColor: rgb(0, 0, 1),
     *   borderWidth: 2,
     *   rotate: degrees(90),
     *   font: ubuntuFont,
     * })
     * ```
     * This will create a new widget for this option list field.
     * @param page The page to which this option list widget should be added.
     * @param options The options to be used when adding this option list widget.
     */ PDFOptionList.prototype.addToPage = function(page, options) {
        var _a, _b, _c, _d, _e, _f, _g;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(page, 'page', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                'PDFPage'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFieldAppearanceOptions"])(options);
        if (!options) options = {};
        if (!('textColor' in options)) options.textColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0, 0, 0);
        if (!('backgroundColor' in options)) options.backgroundColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(1, 1, 1);
        if (!('borderColor' in options)) options.borderColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0, 0, 0);
        if (!('borderWidth' in options)) options.borderWidth = 1;
        // Create a widget for this option list
        var widget = this.createWidget({
            x: (_a = options.x) !== null && _a !== void 0 ? _a : 0,
            y: (_b = options.y) !== null && _b !== void 0 ? _b : 0,
            width: (_c = options.width) !== null && _c !== void 0 ? _c : 200,
            height: (_d = options.height) !== null && _d !== void 0 ? _d : 100,
            textColor: options.textColor,
            backgroundColor: options.backgroundColor,
            borderColor: options.borderColor,
            borderWidth: (_e = options.borderWidth) !== null && _e !== void 0 ? _e : 0,
            rotate: (_f = options.rotate) !== null && _f !== void 0 ? _f : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
            hidden: options.hidden,
            page: page.ref
        });
        var widgetRef = this.doc.context.register(widget.dict);
        // Add widget to this field
        this.acroField.addWidget(widgetRef);
        // Set appearance streams for widget
        var font = (_g = options.font) !== null && _g !== void 0 ? _g : this.doc.getForm().getDefaultFont();
        this.updateWidgetAppearance(widget, font);
        // Add widget to the given page
        page.node.addAnnot(widgetRef);
    };
    /**
     * Returns `true` if this option list has been marked as dirty, or if any of
     * this option list's widgets do not have an appearance stream. For example:
     * ```js
     * const optionList = form.getOptionList('some.optionList.field')
     * if (optionList.needsAppearancesUpdate()) console.log('Needs update')
     * ```
     * @returns Whether or not this option list needs an appearance update.
     */ PDFOptionList.prototype.needsAppearancesUpdate = function() {
        var _a;
        if (this.isDirty()) return true;
        var widgets = this.acroField.getWidgets();
        for(var idx = 0, len = widgets.length; idx < len; idx++){
            var widget = widgets[idx];
            var hasAppearances = ((_a = widget.getAppearances()) === null || _a === void 0 ? void 0 : _a.normal) instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFStream$3e$__["PDFStream"];
            if (!hasAppearances) return true;
        }
        return false;
    };
    /**
     * Update the appearance streams for each of this option list's widgets using
     * the default appearance provider for option lists. For example:
     * ```js
     * const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
     * const optionList = form.getOptionList('some.optionList.field')
     * optionList.defaultUpdateAppearances(helvetica)
     * ```
     * @param font The font to be used for creating the appearance streams.
     */ PDFOptionList.prototype.defaultUpdateAppearances = function(font) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(font, 'font', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFFont$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                'PDFFont'
            ]
        ]);
        this.updateAppearances(font);
    };
    /**
     * Update the appearance streams for each of this option list's widgets using
     * the given appearance provider. If no `provider` is passed, the default
     * appearance provider for option lists will be used. For example:
     * ```js
     * const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
     * const optionList = form.getOptionList('some.optionList.field')
     * optionList.updateAppearances(helvetica, (field, widget, font) => {
     *   ...
     *   return drawOptionList(...)
     * })
     * ```
     * @param font The font to be used for creating the appearance streams.
     * @param provider Optionally, the appearance provider to be used for
     *                 generating the contents of the appearance streams.
     */ PDFOptionList.prototype.updateAppearances = function(font, provider) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(font, 'font', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFFont$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                'PDFFont'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(provider, 'provider', [
            Function
        ]);
        var widgets = this.acroField.getWidgets();
        for(var idx = 0, len = widgets.length; idx < len; idx++){
            var widget = widgets[idx];
            this.updateWidgetAppearance(widget, font, provider);
        }
        this.markAsClean();
    };
    // getOption(index: number): string {}
    // getSelectedIndices(): number[] {}
    // removeOptions(option: string | string[]) {}
    // removeIndices(option: number[]) {}
    // deselect(options: string | string[]) {}
    // deselectIndices(optionIndices: number[]) {}
    PDFOptionList.prototype.updateWidgetAppearance = function(widget, font, provider) {
        var apProvider = provider !== null && provider !== void 0 ? provider : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$appearances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultOptionListAppearanceProvider"];
        var appearances = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$appearances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeAppearance"])(apProvider(this, widget, font));
        this.updateWidgetAppearanceWithFont(widget, font, appearances);
    };
    /**
     * > **NOTE:** You probably don't want to call this method directly. Instead,
     * > consider using the [[PDFForm.getOptionList]] method, which will create
     * > an instance of [[PDFOptionList]] for you.
     *
     * Create an instance of [[PDFOptionList]] from an existing acroListBox and
     * ref
     *
     * @param acroComboBox The underlying `PDFAcroListBox` for this option list.
     * @param ref The unique reference for this option list.
     * @param doc The document to which this option list will belong.
     */ PDFOptionList.of = function(acroListBox, ref, doc) {
        return new PDFOptionList(acroListBox, ref, doc);
    };
    return PDFOptionList;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFOptionList;
 //# sourceMappingURL=PDFOptionList.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFRadioGroup.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFPage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$appearances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/appearances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/rotations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript) <export default as PDFName>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFHexString$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFHexString.js [app-client] (ecmascript) <export default as PDFHexString>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDict$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFDict.js [app-client] (ecmascript) <export default as PDFDict>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/flags.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/validators.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
/**
 * Represents a radio group field of a [[PDFForm]].
 *
 * [[PDFRadioGroup]] fields are collections of radio buttons. The purpose of a
 * radio group is to enable users to select one option from a set of mutually
 * exclusive choices. Each choice in a radio group is represented by a radio
 * button. Radio buttons each have two states: `on` and `off`. At most one
 * radio button in a group may be in the `on` state at any time. Users can
 * click on a radio button to select it (and thereby automatically deselect any
 * other radio button that might have already been selected). Some radio
 * groups allow users to toggle a selected radio button `off` by clicking on
 * it (see [[PDFRadioGroup.isOffToggleable]]).
 *
 * Note that some radio groups allow multiple radio buttons to be in the `on`
 * state at the same type **if** they represent the same underlying value (see
 * [[PDFRadioGroup.isMutuallyExclusive]]).
 */ var PDFRadioGroup = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFRadioGroup, _super);
    function PDFRadioGroup(acroRadioButton, ref, doc) {
        var _this = _super.call(this, acroRadioButton, ref, doc) || this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(acroRadioButton, 'acroRadioButton', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFAcroRadioButton"],
                'PDFAcroRadioButton'
            ]
        ]);
        _this.acroField = acroRadioButton;
        return _this;
    }
    /**
     * Get the list of available options for this radio group. Each option is
     * represented by a radio button. These radio buttons are displayed at
     * various locations in the document, potentially on different pages (though
     * typically they are stacked horizontally or vertically on the same page).
     * For example:
     * ```js
     * const radioGroup = form.getRadioGroup('some.radioGroup.field')
     * const options = radioGroup.getOptions()
     * console.log('Radio Group options:', options)
     * ```
     * @returns The options for this radio group.
     */ PDFRadioGroup.prototype.getOptions = function() {
        var exportValues = this.acroField.getExportValues();
        if (exportValues) {
            var exportOptions = new Array(exportValues.length);
            for(var idx = 0, len = exportValues.length; idx < len; idx++){
                exportOptions[idx] = exportValues[idx].decodeText();
            }
            return exportOptions;
        }
        var onValues = this.acroField.getOnValues();
        var onOptions = new Array(onValues.length);
        for(var idx = 0, len = onOptions.length; idx < len; idx++){
            onOptions[idx] = onValues[idx].decodeText();
        }
        return onOptions;
    };
    /**
     * Get the selected option for this radio group. The selected option is
     * represented by the radio button in this group that is turned on. At most
     * one radio button in a group can be selected. If no buttons in this group
     * are selected, `undefined` is returned.
     * For example:
     * ```js
     * const radioGroup = form.getRadioGroup('some.radioGroup.field')
     * const selected = radioGroup.getSelected()
     * console.log('Selected radio button:', selected)
     * ```
     * @returns The selected option for this radio group.
     */ PDFRadioGroup.prototype.getSelected = function() {
        var value = this.acroField.getValue();
        if (value === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Off')) return undefined;
        var exportValues = this.acroField.getExportValues();
        if (exportValues) {
            var onValues = this.acroField.getOnValues();
            for(var idx = 0, len = onValues.length; idx < len; idx++){
                if (onValues[idx] === value) return exportValues[idx].decodeText();
            }
        }
        return value.decodeText();
    };
    // // TODO: Figure out why this seems to crash Acrobat. Maybe it's because we
    // //       aren't removing the widget reference from the page's Annots?
    // removeOption(option: string) {
    //   assertIs(option, 'option', ['string']);
    //   // TODO: Assert is valid `option`!
    //   const onValues = this.acroField.getOnValues();
    //   const exportValues = this.acroField.getExportValues();
    //   if (exportValues) {
    //     for (let idx = 0, len = exportValues.length; idx < len; idx++) {
    //       if (exportValues[idx].decodeText() === option) {
    //         this.acroField.removeWidget(idx);
    //         this.acroField.removeExportValue(idx);
    //       }
    //     }
    //   } else {
    //     for (let idx = 0, len = onValues.length; idx < len; idx++) {
    //       const value = onValues[idx];
    //       if (value.decodeText() === option) {
    //         this.acroField.removeWidget(idx);
    //         this.acroField.removeExportValue(idx);
    //       }
    //     }
    //   }
    // }
    /**
     * Select an option for this radio group. This operation is analogous to a
     * human user clicking one of the radio buttons in this group via a PDF
     * reader to toggle it on. This method will update the underlying state of
     * the radio group to indicate which option has been selected. PDF libraries
     * and readers will be able to extract this value from the saved document and
     * determine which option was selected.
     *
     * For example:
     * ```js
     * const radioGroup = form.getRadioGroup('best.superhero.radioGroup')
     * radioGroup.select('One Punch Man')
     * ```
     *
     * This method will mark this radio group as dirty, causing its appearance
     * streams to be updated when either [[PDFDocument.save]] or
     * [[PDFForm.updateFieldAppearances]] is called. The updated appearance
     * streams will display a dot inside the widget of this check box field
     * that represents the selected option.
     *
     * @param option The option to be selected.
     */ PDFRadioGroup.prototype.select = function(option) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(option, 'option', [
            'string'
        ]);
        var validOptions = this.getOptions();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsOneOf"])(option, 'option', validOptions);
        this.markAsDirty();
        var onValues = this.acroField.getOnValues();
        var exportValues = this.acroField.getExportValues();
        if (exportValues) {
            for(var idx = 0, len = exportValues.length; idx < len; idx++){
                if (exportValues[idx].decodeText() === option) {
                    this.acroField.setValue(onValues[idx]);
                }
            }
        } else {
            for(var idx = 0, len = onValues.length; idx < len; idx++){
                var value = onValues[idx];
                if (value.decodeText() === option) this.acroField.setValue(value);
            }
        }
    };
    /**
     * Clear any selected option for this dropdown. This will result in all
     * radio buttons in this group being toggled off. This method will update
     * the underlying state of the dropdown to indicate that no radio buttons
     * have been selected.
     * For example:
     * ```js
     * const radioGroup = form.getRadioGroup('some.radioGroup.field')
     * radioGroup.clear()
     * ```
     * This method will mark this radio group as dirty. See
     * [[PDFRadioGroup.select]] for more details about what this means.
     */ PDFRadioGroup.prototype.clear = function() {
        this.markAsDirty();
        this.acroField.setValue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Off'));
    };
    /**
     * Returns `true` if users can click on radio buttons in this group to toggle
     * them off. The alternative is that once a user clicks on a radio button
     * to select it, the only way to deselect it is by selecting on another radio
     * button in the group. See [[PDFRadioGroup.enableOffToggling]] and
     * [[PDFRadioGroup.disableOffToggling]]. For example:
     * ```js
     * const radioGroup = form.getRadioGroup('some.radioGroup.field')
     * if (radioGroup.isOffToggleable()) console.log('Off toggling is enabled')
     * ```
     */ PDFRadioGroup.prototype.isOffToggleable = function() {
        return !this.acroField.hasFlag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroButtonFlags"].NoToggleToOff);
    };
    /**
     * Allow users to click on selected radio buttons in this group to toggle
     * them off. For example:
     * ```js
     * const radioGroup = form.getRadioGroup('some.radioGroup.field')
     * radioGroup.enableOffToggling()
     * ```
     * > **NOTE:** This feature is documented in the PDF specification
     * > (Table 226). However, most PDF readers do not respect this option and
     * > prevent users from toggling radio buttons off even when it is enabled.
     * > At the time of this writing (9/6/2020) Mac's Preview software did
     * > respect the option. Adobe Acrobat, Foxit Reader, and Google Chrome did
     * > not.
     */ PDFRadioGroup.prototype.enableOffToggling = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroButtonFlags"].NoToggleToOff, false);
    };
    /**
     * Prevent users from clicking on selected radio buttons in this group to
     * toggle them off. Clicking on a selected radio button will have no effect.
     * The only way to deselect a selected radio button is to click on a
     * different radio button in the group. For example:
     * ```js
     * const radioGroup = form.getRadioGroup('some.radioGroup.field')
     * radioGroup.disableOffToggling()
     * ```
     */ PDFRadioGroup.prototype.disableOffToggling = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroButtonFlags"].NoToggleToOff, true);
    };
    /**
     * Returns `true` if the radio buttons in this group are mutually exclusive.
     * This means that when the user selects a radio button, only that specific
     * button will be turned on. Even if other radio buttons in the group
     * represent the same value, they will not be enabled. The alternative to
     * this is that clicking a radio button will select that button along with
     * any other radio buttons in the group that share the same value. See
     * [[PDFRadioGroup.enableMutualExclusion]] and
     * [[PDFRadioGroup.disableMutualExclusion]].
     * For example:
     * ```js
     * const radioGroup = form.getRadioGroup('some.radioGroup.field')
     * if (radioGroup.isMutuallyExclusive()) console.log('Mutual exclusion is enabled')
     * ```
     */ PDFRadioGroup.prototype.isMutuallyExclusive = function() {
        return !this.acroField.hasFlag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroButtonFlags"].RadiosInUnison);
    };
    /**
     * When the user clicks a radio button in this group it will be selected. In
     * addition, any other radio buttons in this group that share the same
     * underlying value will also be selected. For example:
     * ```js
     * const radioGroup = form.getRadioGroup('some.radioGroup.field')
     * radioGroup.enableMutualExclusion()
     * ```
     * Note that this option must be enabled prior to adding options to the
     * radio group. It does not currently apply retroactively to existing
     * radio buttons in the group.
     */ PDFRadioGroup.prototype.enableMutualExclusion = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroButtonFlags"].RadiosInUnison, false);
    };
    /**
     * When the user clicks a radio button in this group only it will be selected.
     * No other radio buttons in the group will be selected, even if they share
     * the same underlying value. For example:
     * ```js
     * const radioGroup = form.getRadioGroup('some.radioGroup.field')
     * radioGroup.disableMutualExclusion()
     * ```
     * Note that this option must be disabled prior to adding options to the
     * radio group. It does not currently apply retroactively to existing
     * radio buttons in the group.
     */ PDFRadioGroup.prototype.disableMutualExclusion = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroButtonFlags"].RadiosInUnison, true);
    };
    /**
     * Add a new radio button to this group on the specified page. For example:
     * ```js
     * const page = pdfDoc.addPage()
     *
     * const form = pdfDoc.getForm()
     * const radioGroup = form.createRadioGroup('best.gundam')
     *
     * const options = {
     *   x: 50,
     *   width: 25,
     *   height: 25,
     *   textColor: rgb(1, 0, 0),
     *   backgroundColor: rgb(0, 1, 0),
     *   borderColor: rgb(0, 0, 1),
     *   borderWidth: 2,
     *   rotate: degrees(90),
     * }
     *
     * radioGroup.addOptionToPage('Exia', page, { ...options, y: 50 })
     * radioGroup.addOptionToPage('Dynames', page, { ...options, y: 110 })
     * ```
     * This will create a new radio button widget for this radio group field.
     * @param option The option that the radio button widget represents.
     * @param page The page to which the radio button widget should be added.
     * @param options The options to be used when adding the radio button widget.
     */ PDFRadioGroup.prototype.addOptionToPage = function(option, page, options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(option, 'option', [
            'string'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(page, 'page', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                'PDFPage'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFieldAppearanceOptions"])(options);
        // Create a widget for this radio button
        var widget = this.createWidget({
            x: (_a = options === null || options === void 0 ? void 0 : options.x) !== null && _a !== void 0 ? _a : 0,
            y: (_b = options === null || options === void 0 ? void 0 : options.y) !== null && _b !== void 0 ? _b : 0,
            width: (_c = options === null || options === void 0 ? void 0 : options.width) !== null && _c !== void 0 ? _c : 50,
            height: (_d = options === null || options === void 0 ? void 0 : options.height) !== null && _d !== void 0 ? _d : 50,
            textColor: (_e = options === null || options === void 0 ? void 0 : options.textColor) !== null && _e !== void 0 ? _e : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0, 0, 0),
            backgroundColor: (_f = options === null || options === void 0 ? void 0 : options.backgroundColor) !== null && _f !== void 0 ? _f : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(1, 1, 1),
            borderColor: (_g = options === null || options === void 0 ? void 0 : options.borderColor) !== null && _g !== void 0 ? _g : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0, 0, 0),
            borderWidth: (_h = options === null || options === void 0 ? void 0 : options.borderWidth) !== null && _h !== void 0 ? _h : 1,
            rotate: (_j = options === null || options === void 0 ? void 0 : options.rotate) !== null && _j !== void 0 ? _j : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
            hidden: options === null || options === void 0 ? void 0 : options.hidden,
            page: page.ref
        });
        var widgetRef = this.doc.context.register(widget.dict);
        // Add widget to this field
        var apStateValue = this.acroField.addWidgetWithOpt(widgetRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFHexString$3e$__["PDFHexString"].fromText(option), !this.isMutuallyExclusive());
        // Set appearance streams for widget
        widget.setAppearanceState(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Off'));
        this.updateWidgetAppearance(widget, apStateValue);
        // Add widget to the given page
        page.node.addAnnot(widgetRef);
    };
    /**
     * Returns `true` if any of this group's radio button widgets do not have an
     * appearance stream for their current state. For example:
     * ```js
     * const radioGroup = form.getRadioGroup('some.radioGroup.field')
     * if (radioGroup.needsAppearancesUpdate()) console.log('Needs update')
     * ```
     * @returns Whether or not this radio group needs an appearance update.
     */ PDFRadioGroup.prototype.needsAppearancesUpdate = function() {
        var _a;
        var widgets = this.acroField.getWidgets();
        for(var idx = 0, len = widgets.length; idx < len; idx++){
            var widget = widgets[idx];
            var state = widget.getAppearanceState();
            var normal = (_a = widget.getAppearances()) === null || _a === void 0 ? void 0 : _a.normal;
            if (!(normal instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDict$3e$__["PDFDict"])) return true;
            if (state && !normal.has(state)) return true;
        }
        return false;
    };
    /**
     * Update the appearance streams for each of this group's radio button widgets
     * using the default appearance provider for radio groups. For example:
     * ```js
     * const radioGroup = form.getRadioGroup('some.radioGroup.field')
     * radioGroup.defaultUpdateAppearances()
     * ```
     */ PDFRadioGroup.prototype.defaultUpdateAppearances = function() {
        this.updateAppearances();
    };
    // rg.updateAppearances((field: any, widget: any) => {
    //   assert(field === rg);
    //   assert(widget instanceof PDFWidgetAnnotation);
    //   return { on: [...rectangle, ...circle], off: [...rectangle, ...circle] };
    // });
    /**
     * Update the appearance streams for each of this group's radio button widgets
     * using the given appearance provider. If no `provider` is passed, the
     * default appearance provider for radio groups will be used. For example:
     * ```js
     * const radioGroup = form.getRadioGroup('some.radioGroup.field')
     * radioGroup.updateAppearances((field, widget) => {
     *   ...
     *   return {
     *     normal: { on: drawRadioButton(...), off: drawRadioButton(...) },
     *     down: { on: drawRadioButton(...), off: drawRadioButton(...) },
     *   }
     * })
     * ```
     * @param provider Optionally, the appearance provider to be used for
     *                 generating the contents of the appearance streams.
     */ PDFRadioGroup.prototype.updateAppearances = function(provider) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(provider, 'provider', [
            Function
        ]);
        var widgets = this.acroField.getWidgets();
        for(var idx = 0, len = widgets.length; idx < len; idx++){
            var widget = widgets[idx];
            var onValue = widget.getOnValue();
            if (!onValue) continue;
            this.updateWidgetAppearance(widget, onValue, provider);
        }
    };
    PDFRadioGroup.prototype.updateWidgetAppearance = function(widget, onValue, provider) {
        var apProvider = provider !== null && provider !== void 0 ? provider : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$appearances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultRadioGroupAppearanceProvider"];
        var appearances = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$appearances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeAppearance"])(apProvider(this, widget));
        this.updateOnOffWidgetAppearance(widget, onValue, appearances);
    };
    /**
     * > **NOTE:** You probably don't want to call this method directly. Instead,
     * > consider using the [[PDFForm.getOptionList]] method, which will create an
     * > instance of [[PDFOptionList]] for you.
     *
     * Create an instance of [[PDFOptionList]] from an existing acroRadioButton
     * and ref
     *
     * @param acroRadioButton The underlying `PDFAcroRadioButton` for this
     *                        radio group.
     * @param ref The unique reference for this radio group.
     * @param doc The document to which this radio group will belong.
     */ PDFRadioGroup.of = function(acroRadioButton, ref, doc) {
        return new PDFRadioGroup(acroRadioButton, ref, doc);
    };
    return PDFRadioGroup;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFRadioGroup;
 //# sourceMappingURL=PDFRadioGroup.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFSignature.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/validators.js [app-client] (ecmascript)");
;
;
;
;
/**
 * Represents a signature field of a [[PDFForm]].
 *
 * [[PDFSignature]] fields are digital signatures. `pdf-lib` does not
 * currently provide any specialized APIs for creating digital signatures or
 * reading the contents of existing digital signatures.
 */ var PDFSignature = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFSignature, _super);
    function PDFSignature(acroSignature, ref, doc) {
        var _this = _super.call(this, acroSignature, ref, doc) || this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(acroSignature, 'acroSignature', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFAcroSignature"],
                'PDFAcroSignature'
            ]
        ]);
        _this.acroField = acroSignature;
        return _this;
    }
    PDFSignature.prototype.needsAppearancesUpdate = function() {
        return false;
    };
    /**
     * > **NOTE:** You probably don't want to call this method directly. Instead,
     * > consider using the [[PDFForm.getSignature]] method, which will create an
     * > instance of [[PDFSignature]] for you.
     *
     * Create an instance of [[PDFSignature]] from an existing acroSignature and
     * ref
     *
     * @param acroSignature The underlying `PDFAcroSignature` for this signature.
     * @param ref The unique reference for this signature.
     * @param doc The document to which this signature will belong.
     */ PDFSignature.of = function(acroSignature, ref, doc) {
        return new PDFSignature(acroSignature, ref, doc);
    };
    return PDFSignature;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFSignature;
 //# sourceMappingURL=PDFSignature.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFTextField.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFPage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFFont$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFFont.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$appearances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/appearances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/rotations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$image$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/image/alignment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/text/alignment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFHexString$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFHexString.js [app-client] (ecmascript) <export default as PDFHexString>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFStream$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFStream.js [app-client] (ecmascript) <export default as PDFStream>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/flags.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/validators.js [app-client] (ecmascript)");
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
/**
 * Represents a text field of a [[PDFForm]].
 *
 * [[PDFTextField]] fields are boxes that display text entered by the user. The
 * purpose of a text field is to enable users to enter text or view text values
 * in the document prefilled by software. Users can click on a text field and
 * input text via their keyboard. Some text fields allow multiple lines of text
 * to be entered (see [[PDFTextField.isMultiline]]).
 */ var PDFTextField = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFTextField, _super);
    function PDFTextField(acroText, ref, doc) {
        var _this = _super.call(this, acroText, ref, doc) || this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(acroText, 'acroText', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFAcroText"],
                'PDFAcroText'
            ]
        ]);
        _this.acroField = acroText;
        return _this;
    }
    /**
     * Get the text that this field contains. This text is visible to users who
     * view this field in a PDF reader.
     *
     * For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * const text = textField.getText()
     * console.log('Text field contents:', text)
     * ```
     *
     * Note that if this text field contains no underlying value, `undefined`
     * will be returned. Text fields may also contain an underlying value that
     * is simply an empty string (`''`). This detail is largely irrelevant for
     * most applications. In general, you'll want to treat both cases the same
     * way and simply consider the text field to be empty. In either case, the
     * text field will appear empty to users when viewed in a PDF reader.
     *
     * An error will be thrown if this is a rich text field. `pdf-lib` does not
     * support reading rich text fields. Nor do most PDF readers and writers.
     * Rich text fields are based on XFA (XML Forms Architecture). Relatively few
     * PDFs use rich text fields or XFA. Unlike PDF itself, XFA is not an ISO
     * standard. XFA has been deprecated in PDF 2.0:
     * * https://en.wikipedia.org/wiki/XFA
     * * http://blog.pdfshareforms.com/pdf-2-0-release-bid-farewell-xfa-forms/
     *
     * @returns The text contained in this text field.
     */ PDFTextField.prototype.getText = function() {
        var value = this.acroField.getValue();
        if (!value && this.isRichFormatted()) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RichTextFieldReadError"](this.getName());
        }
        return value === null || value === void 0 ? void 0 : value.decodeText();
    };
    /**
     * Set the text for this field. This operation is analogous to a human user
     * clicking on the text field in a PDF reader and typing in text via their
     * keyboard. This method will update the underlying state of the text field
     * to indicate what text has been set. PDF libraries and readers will be able
     * to extract these values from the saved document and determine what text
     * was set.
     *
     * For example:
     * ```js
     * const textField = form.getTextField('best.superhero.text.field')
     * textField.setText('One Punch Man')
     * ```
     *
     * This method will mark this text field as dirty, causing its appearance
     * streams to be updated when either [[PDFDocument.save]] or
     * [[PDFForm.updateFieldAppearances]] is called. The updated streams will
     * display the text this field contains inside the widgets of this text
     * field.
     *
     * **IMPORTANT:** The default font used to update appearance streams is
     * [[StandardFonts.Helvetica]]. Note that this is a WinAnsi font. This means
     * that encoding errors will be thrown if this field contains text outside
     * the WinAnsi character set (the latin alphabet).
     *
     * Embedding a custom font and passing it to
     * [[PDFForm.updateFieldAppearances]] or [[PDFTextField.updateAppearances]]
     * allows you to generate appearance streams with characters outside the
     * latin alphabet (assuming the custom font supports them).
     *
     * If this is a rich text field, it will be converted to a standard text
     * field in order to set the text. `pdf-lib` does not support writing rich
     * text strings. Nor do most PDF readers and writers. See
     * [[PDFTextField.getText]] for more information about rich text fields and
     * their deprecation in PDF 2.0.
     *
     * @param text The text this field should contain.
     */ PDFTextField.prototype.setText = function(text) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(text, 'text', [
            'string'
        ]);
        var maxLength = this.getMaxLength();
        if (maxLength !== undefined && text && text.length > maxLength) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExceededMaxLengthError"](text.length, maxLength, this.getName());
        }
        this.markAsDirty();
        this.disableRichFormatting();
        if (text) {
            this.acroField.setValue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFHexString$3e$__["PDFHexString"].fromText(text));
        } else {
            this.acroField.removeValue();
        }
    };
    /**
     * Get the alignment for this text field. This value represents the
     * justification of the text when it is displayed to the user in PDF readers.
     * There are three possible alignments: left, center, and right. For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * const alignment = textField.getAlignment()
     * if (alignment === TextAlignment.Left) console.log('Text is left justified')
     * if (alignment === TextAlignment.Center) console.log('Text is centered')
     * if (alignment === TextAlignment.Right) console.log('Text is right justified')
     * ```
     * @returns The alignment of this text field.
     */ PDFTextField.prototype.getAlignment = function() {
        var quadding = this.acroField.getQuadding();
        // prettier-ignore
        return quadding === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextAlignment"].Left : quadding === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextAlignment"].Center : quadding === 2 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextAlignment"].Right : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextAlignment"].Left;
    };
    /**
     * Set the alignment for this text field. This will determine the
     * justification of the text when it is displayed to the user in PDF readers.
     * There are three possible alignments: left, center, and right. For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     *
     * // Text will be left justified when displayed
     * textField.setAlignment(TextAlignment.Left)
     *
     * // Text will be centered when displayed
     * textField.setAlignment(TextAlignment.Center)
     *
     * // Text will be right justified when displayed
     * textField.setAlignment(TextAlignment.Right)
     * ```
     * This method will mark this text field as dirty. See
     * [[PDFTextField.setText]] for more details about what this means.
     * @param alignment The alignment for this text field.
     */ PDFTextField.prototype.setAlignment = function(alignment) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsOneOf"])(alignment, 'alignment', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextAlignment"]);
        this.markAsDirty();
        this.acroField.setQuadding(alignment);
    };
    /**
     * Get the maximum length of this field. This value represents the maximum
     * number of characters that can be typed into this field by the user. If
     * this field does not have a maximum length, `undefined` is returned.
     * For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * const maxLength = textField.getMaxLength()
     * if (maxLength === undefined) console.log('No max length')
     * else console.log(`Max length is ${maxLength}`)
     * ```
     * @returns The maximum number of characters allowed in this field, or
     *          `undefined` if no limit exists.
     */ PDFTextField.prototype.getMaxLength = function() {
        return this.acroField.getMaxLength();
    };
    /**
     * Set the maximum length of this field. This limits the number of characters
     * that can be typed into this field by the user. This also limits the length
     * of the string that can be passed to [[PDFTextField.setText]]. This limit
     * can be removed by passing `undefined` as `maxLength`. For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     *
     * // Allow between 0 and 5 characters to be entered
     * textField.setMaxLength(5)
     *
     * // Allow any number of characters to be entered
     * textField.setMaxLength(undefined)
     * ```
     * This method will mark this text field as dirty. See
     * [[PDFTextField.setText]] for more details about what this means.
     * @param maxLength The maximum number of characters allowed in this field, or
     *                  `undefined` to remove the limit.
     */ PDFTextField.prototype.setMaxLength = function(maxLength) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRangeOrUndefined"])(maxLength, 'maxLength', 0, Number.MAX_SAFE_INTEGER);
        this.markAsDirty();
        if (maxLength === undefined) {
            this.acroField.removeMaxLength();
        } else {
            var text = this.getText();
            if (text && text.length > maxLength) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidMaxLengthError"](text.length, maxLength, this.getName());
            }
            this.acroField.setMaxLength(maxLength);
        }
    };
    /**
     * Remove the maximum length for this text field. This allows any number of
     * characters to be typed into this field by the user. For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * textField.removeMaxLength()
     * ```
     * Calling this method is equivalent to passing `undefined` to
     * [[PDFTextField.setMaxLength]].
     */ PDFTextField.prototype.removeMaxLength = function() {
        this.markAsDirty();
        this.acroField.removeMaxLength();
    };
    /**
     * Display an image inside the bounds of this text field's widgets. For example:
     * ```js
     * const pngImage = await pdfDoc.embedPng(...)
     * const textField = form.getTextField('some.text.field')
     * textField.setImage(pngImage)
     * ```
     * This will update the appearances streams for each of this text field's widgets.
     * @param image The image that should be displayed.
     */ PDFTextField.prototype.setImage = function(image) {
        var fieldAlignment = this.getAlignment();
        // prettier-ignore
        var alignment = fieldAlignment === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextAlignment"].Center ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$image$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageAlignment"].Center : fieldAlignment === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextAlignment"].Right ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$image$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageAlignment"].Right : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$image$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageAlignment"].Left;
        var widgets = this.acroField.getWidgets();
        for(var idx = 0, len = widgets.length; idx < len; idx++){
            var widget = widgets[idx];
            var streamRef = this.createImageAppearanceStream(widget, image, alignment);
            this.updateWidgetAppearances(widget, {
                normal: streamRef
            });
        }
        this.markAsClean();
    };
    /**
     * Set the font size for this field. Larger font sizes will result in larger
     * text being displayed when PDF readers render this text field. Font sizes
     * may be integer or floating point numbers. Supplying a negative font size
     * will cause this method to throw an error.
     *
     * For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * textField.setFontSize(4)
     * textField.setFontSize(15.7)
     * ```
     *
     * > This method depends upon the existence of a default appearance
     * > (`/DA`) string. If this field does not have a default appearance string,
     * > or that string does not contain a font size (via the `Tf` operator),
     * > then this method will throw an error.
     *
     * @param fontSize The font size to be used when rendering text in this field.
     */ PDFTextField.prototype.setFontSize = function(fontSize) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertPositive"])(fontSize, 'fontSize');
        this.acroField.setFontSize(fontSize);
        this.markAsDirty();
    };
    /**
     * Returns `true` if each line of text is shown on a new line when this
     * field is displayed in a PDF reader. The alternative is that all lines of
     * text are merged onto a single line when displayed. See
     * [[PDFTextField.enableMultiline]] and [[PDFTextField.disableMultiline]].
     * For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * if (textField.isMultiline()) console.log('Multiline is enabled')
     * ```
     * @returns Whether or not this is a multiline text field.
     */ PDFTextField.prototype.isMultiline = function() {
        return this.acroField.hasFlag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroTextFlags"].Multiline);
    };
    /**
     * Display each line of text on a new line when this field is displayed in a
     * PDF reader. For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * textField.enableMultiline()
     * ```
     * This method will mark this text field as dirty. See
     * [[PDFTextField.setText]] for more details about what this means.
     */ PDFTextField.prototype.enableMultiline = function() {
        this.markAsDirty();
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroTextFlags"].Multiline, true);
    };
    /**
     * Display each line of text on the same line when this field is displayed
     * in a PDF reader. For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * textField.disableMultiline()
     * ```
     * This method will mark this text field as dirty. See
     * [[PDFTextField.setText]] for more details about what this means.
     */ PDFTextField.prototype.disableMultiline = function() {
        this.markAsDirty();
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroTextFlags"].Multiline, false);
    };
    /**
     * Returns `true` if this is a password text field. This means that the field
     * is intended for storing a secure password. See
     * [[PDFTextField.enablePassword]] and [[PDFTextField.disablePassword]].
     * For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * if (textField.isPassword()) console.log('Password is enabled')
     * ```
     * @returns Whether or not this is a password text field.
     */ PDFTextField.prototype.isPassword = function() {
        return this.acroField.hasFlag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroTextFlags"].Password);
    };
    /**
     * Indicate that this text field is intended for storing a secure password.
     * For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * textField.enablePassword()
     * ```
     * Values entered into password text fields should not be displayed on the
     * screen by PDF readers. Most PDF readers will display the value as
     * asterisks or bullets. PDF readers should never store values entered by the
     * user into password text fields. Similarly, applications should not
     * write data to a password text field.
     *
     * **Please note that this method does not cause entered values to be
     * encrypted or secured in any way! It simply sets a flag that PDF software
     * and readers can access to determine the _purpose_ of this field.**
     */ PDFTextField.prototype.enablePassword = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroTextFlags"].Password, true);
    };
    /**
     * Indicate that this text field is **not** intended for storing a secure
     * password. For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * textField.disablePassword()
     * ```
     */ PDFTextField.prototype.disablePassword = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroTextFlags"].Password, false);
    };
    /**
     * Returns `true` if the contents of this text field represent a file path.
     * See [[PDFTextField.enableFileSelection]] and
     * [[PDFTextField.disableFileSelection]]. For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * if (textField.isFileSelector()) console.log('Is a file selector')
     * ```
     * @returns Whether or not this field should contain file paths.
     */ PDFTextField.prototype.isFileSelector = function() {
        return this.acroField.hasFlag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroTextFlags"].FileSelect);
    };
    /**
     * Indicate that this text field is intended to store a file path. The
     * contents of the file stored at that path should be submitted as the value
     * of the field. For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * textField.enableFileSelection()
     * ```
     */ PDFTextField.prototype.enableFileSelection = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroTextFlags"].FileSelect, true);
    };
    /**
     * Indicate that this text field is **not** intended to store a file path.
     * For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * textField.disableFileSelection()
     * ```
     */ PDFTextField.prototype.disableFileSelection = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroTextFlags"].FileSelect, false);
    };
    /**
     * Returns `true` if the text entered in this field should be spell checked
     * by PDF readers. See [[PDFTextField.enableSpellChecking]] and
     * [[PDFTextField.disableSpellChecking]]. For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * if (textField.isSpellChecked()) console.log('Spell checking is enabled')
     * ```
     * @returns Whether or not this field should be spell checked.
     */ PDFTextField.prototype.isSpellChecked = function() {
        return !this.acroField.hasFlag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroTextFlags"].DoNotSpellCheck);
    };
    /**
     * Allow PDF readers to spell check the text entered in this field.
     * For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * textField.enableSpellChecking()
     * ```
     */ PDFTextField.prototype.enableSpellChecking = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroTextFlags"].DoNotSpellCheck, false);
    };
    /**
     * Do not allow PDF readers to spell check the text entered in this field.
     * For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * textField.disableSpellChecking()
     * ```
     */ PDFTextField.prototype.disableSpellChecking = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroTextFlags"].DoNotSpellCheck, true);
    };
    /**
     * Returns `true` if PDF readers should allow the user to scroll the text
     * field when its contents do not fit within the field's view bounds. See
     * [[PDFTextField.enableScrolling]] and [[PDFTextField.disableScrolling]].
     * For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * if (textField.isScrollable()) console.log('Scrolling is enabled')
     * ```
     * @returns Whether or not the field is scrollable in PDF readers.
     */ PDFTextField.prototype.isScrollable = function() {
        return !this.acroField.hasFlag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroTextFlags"].DoNotScroll);
    };
    /**
     * Allow PDF readers to present a scroll bar to the user when the contents
     * of this text field do not fit within its view bounds. For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * textField.enableScrolling()
     * ```
     * A horizontal scroll bar should be shown for singleline fields. A vertical
     * scroll bar should be shown for multiline fields.
     */ PDFTextField.prototype.enableScrolling = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroTextFlags"].DoNotScroll, false);
    };
    /**
     * Do not allow PDF readers to present a scroll bar to the user when the
     * contents of this text field do not fit within its view bounds. For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * textField.disableScrolling()
     * ```
     */ PDFTextField.prototype.disableScrolling = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroTextFlags"].DoNotScroll, true);
    };
    /**
     * Returns `true` if this is a combed text field. This means that the field
     * is split into `n` equal size cells with one character in each (where `n`
     * is equal to the max length of the text field). The result is that all
     * characters in this field are displayed an equal distance apart from one
     * another. See [[PDFTextField.enableCombing]] and
     * [[PDFTextField.disableCombing]]. For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * if (textField.isCombed()) console.log('Combing is enabled')
     * ```
     * Note that in order for a text field to be combed, the following must be
     * true (in addition to enabling combing):
     * * It must not be a multiline field (see [[PDFTextField.isMultiline]])
     * * It must not be a password field (see [[PDFTextField.isPassword]])
     * * It must not be a file selector field (see [[PDFTextField.isFileSelector]])
     * * It must have a max length defined (see [[PDFTextField.setMaxLength]])
     * @returns Whether or not this field is combed.
     */ PDFTextField.prototype.isCombed = function() {
        return this.acroField.hasFlag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroTextFlags"].Comb) && !this.isMultiline() && !this.isPassword() && !this.isFileSelector() && this.getMaxLength() !== undefined;
    };
    /**
     * Split this field into `n` equal size cells with one character in each
     * (where `n` is equal to the max length of the text field). This will cause
     * all characters in the field to be displayed an equal distance apart from
     * one another. For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * textField.enableCombing()
     * ```
     *
     * In addition to calling this method, text fields must have a max length
     * defined in order to be combed (see [[PDFTextField.setMaxLength]]).
     *
     * This method will also call the following three methods internally:
     * * [[PDFTextField.disableMultiline]]
     * * [[PDFTextField.disablePassword]]
     * * [[PDFTextField.disableFileSelection]]
     *
     * This method will mark this text field as dirty. See
     * [[PDFTextField.setText]] for more details about what this means.
     */ PDFTextField.prototype.enableCombing = function() {
        if (this.getMaxLength() === undefined) {
            var msg = "PDFTextFields must have a max length in order to be combed";
            console.warn(msg);
        }
        this.markAsDirty();
        this.disableMultiline();
        this.disablePassword();
        this.disableFileSelection();
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroTextFlags"].Comb, true);
    };
    /**
     * Turn off combing for this text field. For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * textField.disableCombing()
     * ```
     * See [[PDFTextField.isCombed]] and [[PDFTextField.enableCombing]] for more
     * information about what combing is.
     *
     * This method will mark this text field as dirty. See
     * [[PDFTextField.setText]] for more details about what this means.
     */ PDFTextField.prototype.disableCombing = function() {
        this.markAsDirty();
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroTextFlags"].Comb, false);
    };
    /**
     * Returns `true` if this text field contains rich text. See
     * [[PDFTextField.enableRichFormatting]] and
     * [[PDFTextField.disableRichFormatting]]. For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * if (textField.isRichFormatted()) console.log('Rich formatting enabled')
     * ```
     * @returns Whether or not this field contains rich text.
     */ PDFTextField.prototype.isRichFormatted = function() {
        return this.acroField.hasFlag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroTextFlags"].RichText);
    };
    /**
     * Indicate that this field contains XFA data - or rich text. For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * textField.enableRichFormatting()
     * ```
     * Note that `pdf-lib` does not support reading or writing rich text fields.
     * Nor do most PDF readers and writers. Rich text fields are based on XFA
     * (XML Forms Architecture). Relatively few PDFs use rich text fields or XFA.
     * Unlike PDF itself, XFA is not an ISO standard. XFA has been deprecated in
     * PDF 2.0:
     * * https://en.wikipedia.org/wiki/XFA
     * * http://blog.pdfshareforms.com/pdf-2-0-release-bid-farewell-xfa-forms/
     */ PDFTextField.prototype.enableRichFormatting = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroTextFlags"].RichText, true);
    };
    /**
     * Indicate that this is a standard text field that does not XFA data (rich
     * text). For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * textField.disableRichFormatting()
     * ```
     */ PDFTextField.prototype.disableRichFormatting = function() {
        this.acroField.setFlagTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AcroTextFlags"].RichText, false);
    };
    /**
     * Show this text field on the specified page. For example:
     * ```js
     * const ubuntuFont = await pdfDoc.embedFont(ubuntuFontBytes)
     * const page = pdfDoc.addPage()
     *
     * const form = pdfDoc.getForm()
     * const textField = form.createTextField('best.gundam')
     * textField.setText('Exia')
     *
     * textField.addToPage(page, {
     *   x: 50,
     *   y: 75,
     *   width: 200,
     *   height: 100,
     *   textColor: rgb(1, 0, 0),
     *   backgroundColor: rgb(0, 1, 0),
     *   borderColor: rgb(0, 0, 1),
     *   borderWidth: 2,
     *   rotate: degrees(90),
     *   font: ubuntuFont,
     * })
     * ```
     * This will create a new widget for this text field.
     * @param page The page to which this text field widget should be added.
     * @param options The options to be used when adding this text field widget.
     */ PDFTextField.prototype.addToPage = function(page, options) {
        var _a, _b, _c, _d, _e, _f, _g;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(page, 'page', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                'PDFPage'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFieldAppearanceOptions"])(options);
        if (!options) options = {};
        if (!('textColor' in options)) options.textColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0, 0, 0);
        if (!('backgroundColor' in options)) options.backgroundColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(1, 1, 1);
        if (!('borderColor' in options)) options.borderColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0, 0, 0);
        if (!('borderWidth' in options)) options.borderWidth = 1;
        // Create a widget for this text field
        var widget = this.createWidget({
            x: (_a = options.x) !== null && _a !== void 0 ? _a : 0,
            y: (_b = options.y) !== null && _b !== void 0 ? _b : 0,
            width: (_c = options.width) !== null && _c !== void 0 ? _c : 200,
            height: (_d = options.height) !== null && _d !== void 0 ? _d : 50,
            textColor: options.textColor,
            backgroundColor: options.backgroundColor,
            borderColor: options.borderColor,
            borderWidth: (_e = options.borderWidth) !== null && _e !== void 0 ? _e : 0,
            rotate: (_f = options.rotate) !== null && _f !== void 0 ? _f : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
            hidden: options.hidden,
            page: page.ref
        });
        var widgetRef = this.doc.context.register(widget.dict);
        // Add widget to this field
        this.acroField.addWidget(widgetRef);
        // Set appearance streams for widget
        var font = (_g = options.font) !== null && _g !== void 0 ? _g : this.doc.getForm().getDefaultFont();
        this.updateWidgetAppearance(widget, font);
        // Add widget to the given page
        page.node.addAnnot(widgetRef);
    };
    /**
     * Returns `true` if this text field has been marked as dirty, or if any of
     * this text field's widgets do not have an appearance stream. For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * if (textField.needsAppearancesUpdate()) console.log('Needs update')
     * ```
     * @returns Whether or not this text field needs an appearance update.
     */ PDFTextField.prototype.needsAppearancesUpdate = function() {
        var _a;
        if (this.isDirty()) return true;
        var widgets = this.acroField.getWidgets();
        for(var idx = 0, len = widgets.length; idx < len; idx++){
            var widget = widgets[idx];
            var hasAppearances = ((_a = widget.getAppearances()) === null || _a === void 0 ? void 0 : _a.normal) instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFStream$3e$__["PDFStream"];
            if (!hasAppearances) return true;
        }
        return false;
    };
    /**
     * Update the appearance streams for each of this text field's widgets using
     * the default appearance provider for text fields. For example:
     * ```js
     * const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
     * const textField = form.getTextField('some.text.field')
     * textField.defaultUpdateAppearances(helvetica)
     * ```
     * @param font The font to be used for creating the appearance streams.
     */ PDFTextField.prototype.defaultUpdateAppearances = function(font) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(font, 'font', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFFont$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                'PDFFont'
            ]
        ]);
        this.updateAppearances(font);
    };
    /**
     * Update the appearance streams for each of this text field's widgets using
     * the given appearance provider. If no `provider` is passed, the default
     * appearance provider for text fields will be used. For example:
     * ```js
     * const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
     * const textField = form.getTextField('some.text.field')
     * textField.updateAppearances(helvetica, (field, widget, font) => {
     *   ...
     *   return drawTextField(...)
     * })
     * ```
     * @param font The font to be used for creating the appearance streams.
     * @param provider Optionally, the appearance provider to be used for
     *                 generating the contents of the appearance streams.
     */ PDFTextField.prototype.updateAppearances = function(font, provider) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(font, 'font', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFFont$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                'PDFFont'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(provider, 'provider', [
            Function
        ]);
        var widgets = this.acroField.getWidgets();
        for(var idx = 0, len = widgets.length; idx < len; idx++){
            var widget = widgets[idx];
            this.updateWidgetAppearance(widget, font, provider);
        }
        this.markAsClean();
    };
    PDFTextField.prototype.updateWidgetAppearance = function(widget, font, provider) {
        var apProvider = provider !== null && provider !== void 0 ? provider : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$appearances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultTextFieldAppearanceProvider"];
        var appearances = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$appearances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeAppearance"])(apProvider(this, widget, font));
        this.updateWidgetAppearanceWithFont(widget, font, appearances);
    };
    /**
     * > **NOTE:** You probably don't want to call this method directly. Instead,
     * > consider using the [[PDFForm.getTextField]] method, which will create an
     * > instance of [[PDFTextField]] for you.
     *
     * Create an instance of [[PDFTextField]] from an existing acroText and ref
     *
     * @param acroText The underlying `PDFAcroText` for this text field.
     * @param ref The unique reference for this text field.
     * @param doc The document to which this text field will belong.
     */ PDFTextField.of = function(acroText, ref, doc) {
        return new PDFTextField(acroText, ref, doc);
    };
    return PDFTextField;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFTextField;
 //# sourceMappingURL=PDFTextField.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/StandardFonts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StandardFonts",
    ()=>StandardFonts
]);
var StandardFonts;
(function(StandardFonts) {
    StandardFonts["Courier"] = "Courier";
    StandardFonts["CourierBold"] = "Courier-Bold";
    StandardFonts["CourierOblique"] = "Courier-Oblique";
    StandardFonts["CourierBoldOblique"] = "Courier-BoldOblique";
    StandardFonts["Helvetica"] = "Helvetica";
    StandardFonts["HelveticaBold"] = "Helvetica-Bold";
    StandardFonts["HelveticaOblique"] = "Helvetica-Oblique";
    StandardFonts["HelveticaBoldOblique"] = "Helvetica-BoldOblique";
    StandardFonts["TimesRoman"] = "Times-Roman";
    StandardFonts["TimesRomanBold"] = "Times-Bold";
    StandardFonts["TimesRomanItalic"] = "Times-Italic";
    StandardFonts["TimesRomanBoldItalic"] = "Times-BoldItalic";
    StandardFonts["Symbol"] = "Symbol";
    StandardFonts["ZapfDingbats"] = "ZapfDingbats";
})(StandardFonts || (StandardFonts = {})); //# sourceMappingURL=StandardFonts.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFForm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFDocument.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFCheckBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFCheckBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFDropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFOptionList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFOptionList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFRadioGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFRadioGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFSignature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFTextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFTextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFFont$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFFont.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$StandardFonts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/StandardFonts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/operations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/operators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDict$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFDict.js [app-client] (ecmascript) <export default as PDFDict>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFRef$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRef.js [app-client] (ecmascript) <export default as PDFRef>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript) <export default as PDFName>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/validators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$Cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cache$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/Cache.js [app-client] (ecmascript) <export default as Cache>");
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
/**
 * Represents the interactive form of a [[PDFDocument]].
 *
 * Interactive forms (sometimes called _AcroForms_) are collections of fields
 * designed to gather information from a user. A PDF document may contains any
 * number of fields that appear on various pages, all of which make up a single,
 * global interactive form spanning the entire document. This means that
 * instances of [[PDFDocument]] shall contain at most one [[PDFForm]].
 *
 * The fields of an interactive form are represented by [[PDFField]] instances.
 */ var PDFForm = function() {
    function PDFForm(acroForm, doc) {
        var _this = this;
        this.embedDefaultFont = function() {
            return _this.doc.embedStandardFont(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$StandardFonts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardFonts"].Helvetica);
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(acroForm, 'acroForm', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFAcroForm"],
                'PDFAcroForm'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(doc, 'doc', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                'PDFDocument'
            ]
        ]);
        this.acroForm = acroForm;
        this.doc = doc;
        this.dirtyFields = new Set();
        this.defaultFontCache = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$Cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cache$3e$__["Cache"].populatedBy(this.embedDefaultFont);
    }
    /**
     * Returns `true` if this [[PDFForm]] has XFA data. Most PDFs with form
     * fields do not use XFA as it is not widely supported by PDF readers.
     *
     * > `pdf-lib` does not support creation, modification, or reading of XFA
     * > fields.
     *
     * For example:
     * ```js
     * const form = pdfDoc.getForm()
     * if (form.hasXFA()) console.log('PDF has XFA data')
     * ```
     * @returns Whether or not this form has XFA data.
     */ PDFForm.prototype.hasXFA = function() {
        return this.acroForm.dict.has(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('XFA'));
    };
    /**
     * Disconnect the XFA data from this [[PDFForm]] (if any exists). This will
     * force readers to fallback to standard fields if the [[PDFDocument]]
     * contains any. For example:
     *
     * For example:
     * ```js
     * const form = pdfDoc.getForm()
     * form.deleteXFA()
     * ```
     */ PDFForm.prototype.deleteXFA = function() {
        this.acroForm.dict.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('XFA'));
    };
    /**
     * Get all fields contained in this [[PDFForm]]. For example:
     * ```js
     * const form = pdfDoc.getForm()
     * const fields = form.getFields()
     * fields.forEach(field => {
     *   const type = field.constructor.name
     *   const name = field.getName()
     *   console.log(`${type}: ${name}`)
     * })
     * ```
     * @returns An array of all fields in this form.
     */ PDFForm.prototype.getFields = function() {
        var allFields = this.acroForm.getAllFields();
        var fields = [];
        for(var idx = 0, len = allFields.length; idx < len; idx++){
            var _a = allFields[idx], acroField = _a[0], ref = _a[1];
            var field = convertToPDFField(acroField, ref, this.doc);
            if (field) fields.push(field);
        }
        return fields;
    };
    /**
     * Get the field in this [[PDFForm]] with the given name. For example:
     * ```js
     * const form = pdfDoc.getForm()
     * const field = form.getFieldMaybe('Page1.Foo.Bar[0]')
     * if (field) console.log('Field exists!')
     * ```
     * @param name A fully qualified field name.
     * @returns The field with the specified name, if one exists.
     */ PDFForm.prototype.getFieldMaybe = function(name) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(name, 'name', [
            'string'
        ]);
        var fields = this.getFields();
        for(var idx = 0, len = fields.length; idx < len; idx++){
            var field = fields[idx];
            if (field.getName() === name) return field;
        }
        return undefined;
    };
    /**
     * Get the field in this [[PDFForm]] with the given name. For example:
     * ```js
     * const form = pdfDoc.getForm()
     * const field = form.getField('Page1.Foo.Bar[0]')
     * ```
     * If no field exists with the provided name, an error will be thrown.
     * @param name A fully qualified field name.
     * @returns The field with the specified name.
     */ PDFForm.prototype.getField = function(name) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(name, 'name', [
            'string'
        ]);
        var field = this.getFieldMaybe(name);
        if (field) return field;
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoSuchFieldError"](name);
    };
    /**
     * Get the button field in this [[PDFForm]] with the given name. For example:
     * ```js
     * const form = pdfDoc.getForm()
     * const button = form.getButton('Page1.Foo.Button[0]')
     * ```
     * An error will be thrown if no field exists with the provided name, or if
     * the field exists but is not a button.
     * @param name A fully qualified button name.
     * @returns The button with the specified name.
     */ PDFForm.prototype.getButton = function(name) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(name, 'name', [
            'string'
        ]);
        var field = this.getField(name);
        if (field instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return field;
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnexpectedFieldTypeError"](name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], field);
    };
    /**
     * Get the check box field in this [[PDFForm]] with the given name.
     * For example:
     * ```js
     * const form = pdfDoc.getForm()
     * const checkBox = form.getCheckBox('Page1.Foo.CheckBox[0]')
     * checkBox.check()
     * ```
     * An error will be thrown if no field exists with the provided name, or if
     * the field exists but is not a check box.
     * @param name A fully qualified check box name.
     * @returns The check box with the specified name.
     */ PDFForm.prototype.getCheckBox = function(name) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(name, 'name', [
            'string'
        ]);
        var field = this.getField(name);
        if (field instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFCheckBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return field;
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnexpectedFieldTypeError"](name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFCheckBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], field);
    };
    /**
     * Get the dropdown field in this [[PDFForm]] with the given name.
     * For example:
     * ```js
     * const form = pdfDoc.getForm()
     * const dropdown = form.getDropdown('Page1.Foo.Dropdown[0]')
     * const options = dropdown.getOptions()
     * dropdown.select(options[0])
     * ```
     * An error will be thrown if no field exists with the provided name, or if
     * the field exists but is not a dropdown.
     * @param name A fully qualified dropdown name.
     * @returns The dropdown with the specified name.
     */ PDFForm.prototype.getDropdown = function(name) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(name, 'name', [
            'string'
        ]);
        var field = this.getField(name);
        if (field instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return field;
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnexpectedFieldTypeError"](name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], field);
    };
    /**
     * Get the option list field in this [[PDFForm]] with the given name.
     * For example:
     * ```js
     * const form = pdfDoc.getForm()
     * const optionList = form.getOptionList('Page1.Foo.OptionList[0]')
     * const options = optionList.getOptions()
     * optionList.select(options[0])
     * ```
     * An error will be thrown if no field exists with the provided name, or if
     * the field exists but is not an option list.
     * @param name A fully qualified option list name.
     * @returns The option list with the specified name.
     */ PDFForm.prototype.getOptionList = function(name) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(name, 'name', [
            'string'
        ]);
        var field = this.getField(name);
        if (field instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFOptionList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return field;
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnexpectedFieldTypeError"](name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFOptionList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], field);
    };
    /**
     * Get the radio group field in this [[PDFForm]] with the given name.
     * For example:
     * ```js
     * const form = pdfDoc.getForm()
     * const radioGroup = form.getRadioGroup('Page1.Foo.RadioGroup[0]')
     * const options = radioGroup.getOptions()
     * radioGroup.select(options[0])
     * ```
     * An error will be thrown if no field exists with the provided name, or if
     * the field exists but is not a radio group.
     * @param name A fully qualified radio group name.
     * @returns The radio group with the specified name.
     */ PDFForm.prototype.getRadioGroup = function(name) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(name, 'name', [
            'string'
        ]);
        var field = this.getField(name);
        if (field instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFRadioGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return field;
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnexpectedFieldTypeError"](name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFRadioGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], field);
    };
    /**
     * Get the signature field in this [[PDFForm]] with the given name.
     * For example:
     * ```js
     * const form = pdfDoc.getForm()
     * const signature = form.getSignature('Page1.Foo.Signature[0]')
     * ```
     * An error will be thrown if no field exists with the provided name, or if
     * the field exists but is not a signature.
     * @param name A fully qualified signature name.
     * @returns The signature with the specified name.
     */ PDFForm.prototype.getSignature = function(name) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(name, 'name', [
            'string'
        ]);
        var field = this.getField(name);
        if (field instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return field;
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnexpectedFieldTypeError"](name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], field);
    };
    /**
     * Get the text field in this [[PDFForm]] with the given name.
     * For example:
     * ```js
     * const form = pdfDoc.getForm()
     * const textField = form.getTextField('Page1.Foo.TextField[0]')
     * textField.setText('Are you designed to act or to be acted upon?')
     * ```
     * An error will be thrown if no field exists with the provided name, or if
     * the field exists but is not a text field.
     * @param name A fully qualified text field name.
     * @returns The text field with the specified name.
     */ PDFForm.prototype.getTextField = function(name) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(name, 'name', [
            'string'
        ]);
        var field = this.getField(name);
        if (field instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFTextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return field;
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnexpectedFieldTypeError"](name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFTextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], field);
    };
    /**
     * Create a new button field in this [[PDFForm]] with the given name.
     * For example:
     * ```js
     * const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
     * const page = pdfDoc.addPage()
     *
     * const form = pdfDoc.getForm()
     * const button = form.createButton('cool.new.button')
     *
     * button.addToPage('Do Stuff', font, page)
     * ```
     * An error will be thrown if a field already exists with the provided name.
     * @param name The fully qualified name for the new button.
     * @returns The new button field.
     */ PDFForm.prototype.createButton = function(name) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(name, 'name', [
            'string'
        ]);
        var nameParts = splitFieldName(name);
        var parent = this.findOrCreateNonTerminals(nameParts.nonTerminal);
        var button = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFAcroPushButton"].create(this.doc.context);
        button.setPartialName(nameParts.terminal);
        addFieldToParent(parent, [
            button,
            button.ref
        ], nameParts.terminal);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(button, button.ref, this.doc);
    };
    /**
     * Create a new check box field in this [[PDFForm]] with the given name.
     * For example:
     * ```js
     * const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
     * const page = pdfDoc.addPage()
     *
     * const form = pdfDoc.getForm()
     * const checkBox = form.createCheckBox('cool.new.checkBox')
     *
     * checkBox.addToPage(page)
     * ```
     * An error will be thrown if a field already exists with the provided name.
     * @param name The fully qualified name for the new check box.
     * @returns The new check box field.
     */ PDFForm.prototype.createCheckBox = function(name) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(name, 'name', [
            'string'
        ]);
        var nameParts = splitFieldName(name);
        var parent = this.findOrCreateNonTerminals(nameParts.nonTerminal);
        var checkBox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFAcroCheckBox"].create(this.doc.context);
        checkBox.setPartialName(nameParts.terminal);
        addFieldToParent(parent, [
            checkBox,
            checkBox.ref
        ], nameParts.terminal);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFCheckBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(checkBox, checkBox.ref, this.doc);
    };
    /**
     * Create a new dropdown field in this [[PDFForm]] with the given name.
     * For example:
     * ```js
     * const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
     * const page = pdfDoc.addPage()
     *
     * const form = pdfDoc.getForm()
     * const dropdown = form.createDropdown('cool.new.dropdown')
     *
     * dropdown.addToPage(font, page)
     * ```
     * An error will be thrown if a field already exists with the provided name.
     * @param name The fully qualified name for the new dropdown.
     * @returns The new dropdown field.
     */ PDFForm.prototype.createDropdown = function(name) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(name, 'name', [
            'string'
        ]);
        var nameParts = splitFieldName(name);
        var parent = this.findOrCreateNonTerminals(nameParts.nonTerminal);
        var comboBox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFAcroComboBox"].create(this.doc.context);
        comboBox.setPartialName(nameParts.terminal);
        addFieldToParent(parent, [
            comboBox,
            comboBox.ref
        ], nameParts.terminal);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(comboBox, comboBox.ref, this.doc);
    };
    /**
     * Create a new option list field in this [[PDFForm]] with the given name.
     * For example:
     * ```js
     * const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
     * const page = pdfDoc.addPage()
     *
     * const form = pdfDoc.getForm()
     * const optionList = form.createOptionList('cool.new.optionList')
     *
     * optionList.addToPage(font, page)
     * ```
     * An error will be thrown if a field already exists with the provided name.
     * @param name The fully qualified name for the new option list.
     * @returns The new option list field.
     */ PDFForm.prototype.createOptionList = function(name) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(name, 'name', [
            'string'
        ]);
        var nameParts = splitFieldName(name);
        var parent = this.findOrCreateNonTerminals(nameParts.nonTerminal);
        var listBox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFAcroListBox"].create(this.doc.context);
        listBox.setPartialName(nameParts.terminal);
        addFieldToParent(parent, [
            listBox,
            listBox.ref
        ], nameParts.terminal);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFOptionList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(listBox, listBox.ref, this.doc);
    };
    /**
     * Create a new radio group field in this [[PDFForm]] with the given name.
     * For example:
     * ```js
     * const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
     * const page = pdfDoc.addPage()
     *
     * const form = pdfDoc.getForm()
     * const radioGroup = form.createRadioGroup('cool.new.radioGroup')
     *
     * radioGroup.addOptionToPage('is-dog', page, { y: 0 })
     * radioGroup.addOptionToPage('is-cat', page, { y: 75 })
     * ```
     * An error will be thrown if a field already exists with the provided name.
     * @param name The fully qualified name for the new radio group.
     * @returns The new radio group field.
     */ PDFForm.prototype.createRadioGroup = function(name) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(name, 'name', [
            'string'
        ]);
        var nameParts = splitFieldName(name);
        var parent = this.findOrCreateNonTerminals(nameParts.nonTerminal);
        var radioButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFAcroRadioButton"].create(this.doc.context);
        radioButton.setPartialName(nameParts.terminal);
        addFieldToParent(parent, [
            radioButton,
            radioButton.ref
        ], nameParts.terminal);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFRadioGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(radioButton, radioButton.ref, this.doc);
    };
    /**
     * Create a new text field in this [[PDFForm]] with the given name.
     * For example:
     * ```js
     * const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
     * const page = pdfDoc.addPage()
     *
     * const form = pdfDoc.getForm()
     * const textField = form.createTextField('cool.new.textField')
     *
     * textField.addToPage(font, page)
     * ```
     * An error will be thrown if a field already exists with the provided name.
     * @param name The fully qualified name for the new radio group.
     * @returns The new radio group field.
     */ PDFForm.prototype.createTextField = function(name) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(name, 'name', [
            'string'
        ]);
        var nameParts = splitFieldName(name);
        var parent = this.findOrCreateNonTerminals(nameParts.nonTerminal);
        var text = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFAcroText"].create(this.doc.context);
        text.setPartialName(nameParts.terminal);
        addFieldToParent(parent, [
            text,
            text.ref
        ], nameParts.terminal);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFTextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(text, text.ref, this.doc);
    };
    /**
     * Flatten all fields in this [[PDFForm]].
     *
     * Flattening a form field will take the current appearance for each of that
     * field's widgets and make them part of their page's content stream. All form
     * fields and annotations associated are then removed. Note that once a form
     * has been flattened its fields can no longer be accessed or edited.
     *
     * This operation is often used after filling form fields to ensure a
     * consistent appearance across different PDF readers and/or printers.
     * Another common use case is to copy a template document with form fields
     * into another document. In this scenario you would load the template
     * document, fill its fields, flatten it, and then copy its pages into the
     * recipient document - the filled fields will be copied over.
     *
     * For example:
     * ```js
     * const form = pdfDoc.getForm();
     * form.flatten();
     * ```
     */ PDFForm.prototype.flatten = function(options) {
        if (options === void 0) {
            options = {
                updateFieldAppearances: true
            };
        }
        if (options.updateFieldAppearances) {
            this.updateFieldAppearances();
        }
        var fields = this.getFields();
        for(var i = 0, lenFields = fields.length; i < lenFields; i++){
            var field = fields[i];
            var widgets = field.acroField.getWidgets();
            for(var j = 0, lenWidgets = widgets.length; j < lenWidgets; j++){
                var widget = widgets[j];
                var page = this.findWidgetPage(widget);
                var widgetRef = this.findWidgetAppearanceRef(field, widget);
                var xObjectKey = page.node.newXObject('FlatWidget', widgetRef);
                var rectangle = widget.getRectangle();
                var operators = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushGraphicsState"])(),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translate"])(rectangle.x, rectangle.y)
                ], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateInPlace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, rectangle), {
                    rotation: 0
                })), [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawObject"])(xObjectKey),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popGraphicsState"])()
                ]).filter(Boolean);
                page.pushOperators.apply(page, operators);
            }
            this.removeField(field);
        }
    };
    /**
     * Remove a field from this [[PDFForm]].
     *
     * For example:
     * ```js
     * const form = pdfDoc.getForm();
     * const ageField = form.getFields().find(x => x.getName() === 'Age');
     * form.removeField(ageField);
     * ```
     */ PDFForm.prototype.removeField = function(field) {
        var widgets = field.acroField.getWidgets();
        var pages = new Set();
        for(var i = 0, len = widgets.length; i < len; i++){
            var widget = widgets[i];
            var widgetRef = this.findWidgetAppearanceRef(field, widget);
            var page = this.findWidgetPage(widget);
            pages.add(page);
            page.node.removeAnnot(widgetRef);
        }
        pages.forEach(function(page) {
            return page.node.removeAnnot(field.ref);
        });
        this.acroForm.removeField(field.acroField);
        var fieldKids = field.acroField.normalizedEntries().Kids;
        var kidsCount = fieldKids.size();
        for(var childIndex = 0; childIndex < kidsCount; childIndex++){
            var child = fieldKids.get(childIndex);
            if (child instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFRef$3e$__["PDFRef"]) {
                this.doc.context.delete(child);
            }
        }
        this.doc.context.delete(field.ref);
    };
    /**
     * Update the appearance streams for all widgets of all fields in this
     * [[PDFForm]]. Appearance streams will only be created for a widget if it
     * does not have any existing appearance streams, or the field's value has
     * changed (e.g. by calling [[PDFTextField.setText]] or
     * [[PDFDropdown.select]]).
     *
     * For example:
     * ```js
     * const courier = await pdfDoc.embedFont(StandardFonts.Courier)
     * const form = pdfDoc.getForm()
     * form.updateFieldAppearances(courier)
     * ```
     *
     * **IMPORTANT:** The default value for the `font` parameter is
     * [[StandardFonts.Helvetica]]. Note that this is a WinAnsi font. This means
     * that encoding errors will be thrown if any fields contain text with
     * characters outside the WinAnsi character set (the latin alphabet).
     *
     * Embedding a custom font and passing that as the `font`
     * parameter allows you to generate appearance streams with non WinAnsi
     * characters (assuming your custom font supports them).
     *
     * > **NOTE:** The [[PDFDocument.save]] method will call this method to
     * > update appearances automatically if a form was accessed via the
     * > [[PDFDocument.getForm]] method prior to saving.
     *
     * @param font Optionally, the font to use when creating new appearances.
     */ PDFForm.prototype.updateFieldAppearances = function(font) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(font, 'font', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFFont$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                'PDFFont'
            ]
        ]);
        font = font !== null && font !== void 0 ? font : this.getDefaultFont();
        var fields = this.getFields();
        for(var idx = 0, len = fields.length; idx < len; idx++){
            var field = fields[idx];
            if (field.needsAppearancesUpdate()) {
                field.defaultUpdateAppearances(font);
            }
        }
    };
    /**
     * Mark a field as dirty. This will cause its appearance streams to be
     * updated by [[PDFForm.updateFieldAppearances]].
     * ```js
     * const form = pdfDoc.getForm()
     * const field = form.getField('foo.bar')
     * form.markFieldAsDirty(field.ref)
     * ```
     * @param fieldRef The reference to the field that should be marked.
     */ PDFForm.prototype.markFieldAsDirty = function(fieldRef) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(fieldRef, 'fieldRef', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFRef$3e$__["PDFRef"],
                'PDFRef'
            ]
        ]);
        this.dirtyFields.add(fieldRef);
    };
    /**
     * Mark a field as dirty. This will cause its appearance streams to not be
     * updated by [[PDFForm.updateFieldAppearances]].
     * ```js
     * const form = pdfDoc.getForm()
     * const field = form.getField('foo.bar')
     * form.markFieldAsClean(field.ref)
     * ```
     * @param fieldRef The reference to the field that should be marked.
     */ PDFForm.prototype.markFieldAsClean = function(fieldRef) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(fieldRef, 'fieldRef', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFRef$3e$__["PDFRef"],
                'PDFRef'
            ]
        ]);
        this.dirtyFields.delete(fieldRef);
    };
    /**
     * Returns `true` is the specified field has been marked as dirty.
     * ```js
     * const form = pdfDoc.getForm()
     * const field = form.getField('foo.bar')
     * if (form.fieldIsDirty(field.ref)) console.log('Field is dirty')
     * ```
     * @param fieldRef The reference to the field that should be checked.
     * @returns Whether or not the specified field is dirty.
     */ PDFForm.prototype.fieldIsDirty = function(fieldRef) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(fieldRef, 'fieldRef', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFRef$3e$__["PDFRef"],
                'PDFRef'
            ]
        ]);
        return this.dirtyFields.has(fieldRef);
    };
    PDFForm.prototype.getDefaultFont = function() {
        return this.defaultFontCache.access();
    };
    PDFForm.prototype.findWidgetPage = function(widget) {
        var pageRef = widget.P();
        var page = this.doc.getPages().find(function(x) {
            return x.ref === pageRef;
        });
        if (page === undefined) {
            var widgetRef = this.doc.context.getObjectRef(widget.dict);
            if (widgetRef === undefined) {
                throw new Error('Could not find PDFRef for PDFObject');
            }
            page = this.doc.findPageForAnnotationRef(widgetRef);
            if (page === undefined) {
                throw new Error("Could not find page for PDFRef " + widgetRef);
            }
        }
        return page;
    };
    PDFForm.prototype.findWidgetAppearanceRef = function(field, widget) {
        var _a;
        var refOrDict = widget.getNormalAppearance();
        if (refOrDict instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDict$3e$__["PDFDict"] && (field instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFCheckBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] || field instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFRadioGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])) {
            var value = field.acroField.getValue();
            var ref = (_a = refOrDict.get(value)) !== null && _a !== void 0 ? _a : refOrDict.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Off'));
            if (ref instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFRef$3e$__["PDFRef"]) {
                refOrDict = ref;
            }
        }
        if (!(refOrDict instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFRef$3e$__["PDFRef"])) {
            var name_1 = field.getName();
            throw new Error("Failed to extract appearance ref for: " + name_1);
        }
        return refOrDict;
    };
    PDFForm.prototype.findOrCreateNonTerminals = function(partialNames) {
        var nonTerminal = [
            this.acroForm
        ];
        for(var idx = 0, len = partialNames.length; idx < len; idx++){
            var namePart = partialNames[idx];
            if (!namePart) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidFieldNamePartError"](namePart);
            var parent_1 = nonTerminal[0], parentRef = nonTerminal[1];
            var res = this.findNonTerminal(namePart, parent_1);
            if (res) {
                nonTerminal = res;
            } else {
                var node = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFAcroNonTerminal"].create(this.doc.context);
                node.setPartialName(namePart);
                node.setParent(parentRef);
                var nodeRef = this.doc.context.register(node.dict);
                parent_1.addField(nodeRef);
                nonTerminal = [
                    node,
                    nodeRef
                ];
            }
        }
        return nonTerminal;
    };
    PDFForm.prototype.findNonTerminal = function(partialName, parent) {
        var fields = parent instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFAcroForm"] ? this.acroForm.getFields() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPDFAcroFields"])(parent.Kids());
        for(var idx = 0, len = fields.length; idx < len; idx++){
            var _a = fields[idx], field = _a[0], ref = _a[1];
            if (field.getPartialName() === partialName) {
                if (field instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFAcroNonTerminal"]) return [
                    field,
                    ref
                ];
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldAlreadyExistsError"](partialName);
            }
        }
        return undefined;
    };
    /**
     * > **NOTE:** You probably don't want to call this method directly. Instead,
     * > consider using the [[PDFDocument.getForm]] method, which will create an
     * > instance of [[PDFForm]] for you.
     *
     * Create an instance of [[PDFForm]] from an existing acroForm and embedder
     *
     * @param acroForm The underlying `PDFAcroForm` for this form.
     * @param doc The document to which the form will belong.
     */ PDFForm.of = function(acroForm, doc) {
        return new PDFForm(acroForm, doc);
    };
    return PDFForm;
}();
const __TURBOPACK__default__export__ = PDFForm;
var convertToPDFField = function(field, ref, doc) {
    if (field instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFAcroPushButton"]) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(field, ref, doc);
    if (field instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFAcroCheckBox"]) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFCheckBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(field, ref, doc);
    if (field instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFAcroComboBox"]) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(field, ref, doc);
    if (field instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFAcroListBox"]) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFOptionList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(field, ref, doc);
    if (field instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFAcroText"]) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFTextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(field, ref, doc);
    if (field instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFAcroRadioButton"]) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFRadioGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(field, ref, doc);
    }
    if (field instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFAcroSignature"]) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(field, ref, doc);
    }
    return undefined;
};
var splitFieldName = function(fullyQualifiedName) {
    if (fullyQualifiedName.length === 0) {
        throw new Error('PDF field names must not be empty strings');
    }
    var parts = fullyQualifiedName.split('.');
    for(var idx = 0, len = parts.length; idx < len; idx++){
        if (parts[idx] === '') {
            throw new Error("Periods in PDF field names must be separated by at least one character: \"" + fullyQualifiedName + "\"");
        }
    }
    if (parts.length === 1) return {
        nonTerminal: [],
        terminal: parts[0]
    };
    return {
        nonTerminal: parts.slice(0, parts.length - 1),
        terminal: parts[parts.length - 1]
    };
};
var addFieldToParent = function(_a, _b, partialName) {
    var parent = _a[0], parentRef = _a[1];
    var field = _b[0], fieldRef = _b[1];
    var entries = parent.normalizedEntries();
    var fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPDFAcroFields"])('Kids' in entries ? entries.Kids : entries.Fields);
    for(var idx = 0, len = fields.length; idx < len; idx++){
        if (fields[idx][0].getPartialName() === partialName) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldAlreadyExistsError"](partialName);
        }
    }
    parent.addField(fieldRef);
    field.setParent(parentRef);
}; //# sourceMappingURL=PDFForm.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/sizes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageSizes",
    ()=>PageSizes
]);
var PageSizes = {
    '4A0': [
        4767.87,
        6740.79
    ],
    '2A0': [
        3370.39,
        4767.87
    ],
    A0: [
        2383.94,
        3370.39
    ],
    A1: [
        1683.78,
        2383.94
    ],
    A2: [
        1190.55,
        1683.78
    ],
    A3: [
        841.89,
        1190.55
    ],
    A4: [
        595.28,
        841.89
    ],
    A5: [
        419.53,
        595.28
    ],
    A6: [
        297.64,
        419.53
    ],
    A7: [
        209.76,
        297.64
    ],
    A8: [
        147.4,
        209.76
    ],
    A9: [
        104.88,
        147.4
    ],
    A10: [
        73.7,
        104.88
    ],
    B0: [
        2834.65,
        4008.19
    ],
    B1: [
        2004.09,
        2834.65
    ],
    B2: [
        1417.32,
        2004.09
    ],
    B3: [
        1000.63,
        1417.32
    ],
    B4: [
        708.66,
        1000.63
    ],
    B5: [
        498.9,
        708.66
    ],
    B6: [
        354.33,
        498.9
    ],
    B7: [
        249.45,
        354.33
    ],
    B8: [
        175.75,
        249.45
    ],
    B9: [
        124.72,
        175.75
    ],
    B10: [
        87.87,
        124.72
    ],
    C0: [
        2599.37,
        3676.54
    ],
    C1: [
        1836.85,
        2599.37
    ],
    C2: [
        1298.27,
        1836.85
    ],
    C3: [
        918.43,
        1298.27
    ],
    C4: [
        649.13,
        918.43
    ],
    C5: [
        459.21,
        649.13
    ],
    C6: [
        323.15,
        459.21
    ],
    C7: [
        229.61,
        323.15
    ],
    C8: [
        161.57,
        229.61
    ],
    C9: [
        113.39,
        161.57
    ],
    C10: [
        79.37,
        113.39
    ],
    RA0: [
        2437.8,
        3458.27
    ],
    RA1: [
        1729.13,
        2437.8
    ],
    RA2: [
        1218.9,
        1729.13
    ],
    RA3: [
        864.57,
        1218.9
    ],
    RA4: [
        609.45,
        864.57
    ],
    SRA0: [
        2551.18,
        3628.35
    ],
    SRA1: [
        1814.17,
        2551.18
    ],
    SRA2: [
        1275.59,
        1814.17
    ],
    SRA3: [
        907.09,
        1275.59
    ],
    SRA4: [
        637.8,
        907.09
    ],
    Executive: [
        521.86,
        756.0
    ],
    Folio: [
        612.0,
        936.0
    ],
    Legal: [
        612.0,
        1008.0
    ],
    Letter: [
        612.0,
        792.0
    ],
    Tabloid: [
        792.0,
        1224.0
    ]
}; //# sourceMappingURL=sizes.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFDocumentOptions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParseSpeeds",
    ()=>ParseSpeeds
]);
var ParseSpeeds;
(function(ParseSpeeds) {
    ParseSpeeds[ParseSpeeds["Fastest"] = Infinity] = "Fastest";
    ParseSpeeds[ParseSpeeds["Fast"] = 1500] = "Fast";
    ParseSpeeds[ParseSpeeds["Medium"] = 500] = "Medium";
    ParseSpeeds[ParseSpeeds["Slow"] = 100] = "Slow";
})(ParseSpeeds || (ParseSpeeds = {})); //# sourceMappingURL=PDFDocumentOptions.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFEmbeddedFile.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript) <export default as PDFName>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFArray$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFArray.js [app-client] (ecmascript) <export default as PDFArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDict$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFDict.js [app-client] (ecmascript) <export default as PDFDict>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFHexString$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFHexString.js [app-client] (ecmascript) <export default as PDFHexString>");
;
;
/**
 * Represents a file that has been embedded in a [[PDFDocument]].
 */ var PDFEmbeddedFile = function() {
    function PDFEmbeddedFile(ref, doc, embedder) {
        this.alreadyEmbedded = false;
        this.ref = ref;
        this.doc = doc;
        this.embedder = embedder;
    }
    /**
     * > **NOTE:** You probably don't need to call this method directly. The
     * > [[PDFDocument.save]] and [[PDFDocument.saveAsBase64]] methods will
     * > automatically ensure all embeddable files get embedded.
     *
     * Embed this embeddable file in its document.
     *
     * @returns Resolves when the embedding is complete.
     */ PDFEmbeddedFile.prototype.embed = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var ref, Names, EmbeddedFiles, EFNames, AF;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!!this.alreadyEmbedded) return [
                            3 /*break*/ ,
                            2
                        ];
                        return [
                            4 /*yield*/ ,
                            this.embedder.embedIntoContext(this.doc.context, this.ref)
                        ];
                    case 1:
                        ref = _a.sent();
                        if (!this.doc.catalog.has(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Names'))) {
                            this.doc.catalog.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Names'), this.doc.context.obj({}));
                        }
                        Names = this.doc.catalog.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Names'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDict$3e$__["PDFDict"]);
                        if (!Names.has(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('EmbeddedFiles'))) {
                            Names.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('EmbeddedFiles'), this.doc.context.obj({}));
                        }
                        EmbeddedFiles = Names.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('EmbeddedFiles'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDict$3e$__["PDFDict"]);
                        if (!EmbeddedFiles.has(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Names'))) {
                            EmbeddedFiles.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Names'), this.doc.context.obj([]));
                        }
                        EFNames = EmbeddedFiles.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Names'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFArray$3e$__["PDFArray"]);
                        EFNames.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFHexString$3e$__["PDFHexString"].fromText(this.embedder.fileName));
                        EFNames.push(ref);
                        /**
                         * The AF-Tag is needed to achieve PDF-A3 compliance for embedded files
                         *
                         * The following document outlines the uses cases of the associated files (AF) tag.
                         * See:
                         * https://www.pdfa.org/wp-content/uploads/2018/10/PDF20_AN002-AF.pdf
                         */ if (!this.doc.catalog.has(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('AF'))) {
                            this.doc.catalog.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('AF'), this.doc.context.obj([]));
                        }
                        AF = this.doc.catalog.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('AF'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFArray$3e$__["PDFArray"]);
                        AF.push(ref);
                        this.alreadyEmbedded = true;
                        _a.label = 2;
                    case 2:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    /**
     * > **NOTE:** You probably don't want to call this method directly. Instead,
     * > consider using the [[PDFDocument.attach]] method, which will create
     * instances of [[PDFEmbeddedFile]] for you.
     *
     * Create an instance of [[PDFEmbeddedFile]] from an existing ref and embedder
     *
     * @param ref The unique reference for this file.
     * @param doc The document to which the file will belong.
     * @param embedder The embedder that will be used to embed the file.
     */ PDFEmbeddedFile.of = function(ref, doc, embedder) {
        return new PDFEmbeddedFile(ref, doc, embedder);
    };
    return PDFEmbeddedFile;
}();
const __TURBOPACK__default__export__ = PDFEmbeddedFile;
 //# sourceMappingURL=PDFEmbeddedFile.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFJavaScript.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript) <export default as PDFName>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFArray$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFArray.js [app-client] (ecmascript) <export default as PDFArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDict$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFDict.js [app-client] (ecmascript) <export default as PDFDict>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFHexString$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFHexString.js [app-client] (ecmascript) <export default as PDFHexString>");
;
;
/**
 * Represents JavaScript that has been embedded in a [[PDFDocument]].
 */ var PDFJavaScript = function() {
    function PDFJavaScript(ref, doc, embedder) {
        this.alreadyEmbedded = false;
        this.ref = ref;
        this.doc = doc;
        this.embedder = embedder;
    }
    /**
     * > **NOTE:** You probably don't need to call this method directly. The
     * > [[PDFDocument.save]] and [[PDFDocument.saveAsBase64]] methods will
     * > automatically ensure all JavaScripts get embedded.
     *
     * Embed this JavaScript in its document.
     *
     * @returns Resolves when the embedding is complete.
     */ PDFJavaScript.prototype.embed = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var _a, catalog, context, ref, Names, Javascript, JSNames;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
                switch(_b.label){
                    case 0:
                        if (!!this.alreadyEmbedded) return [
                            3 /*break*/ ,
                            2
                        ];
                        _a = this.doc, catalog = _a.catalog, context = _a.context;
                        return [
                            4 /*yield*/ ,
                            this.embedder.embedIntoContext(this.doc.context, this.ref)
                        ];
                    case 1:
                        ref = _b.sent();
                        if (!catalog.has(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Names'))) {
                            catalog.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Names'), context.obj({}));
                        }
                        Names = catalog.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Names'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDict$3e$__["PDFDict"]);
                        if (!Names.has(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('JavaScript'))) {
                            Names.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('JavaScript'), context.obj({}));
                        }
                        Javascript = Names.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('JavaScript'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDict$3e$__["PDFDict"]);
                        if (!Javascript.has(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Names'))) {
                            Javascript.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Names'), context.obj([]));
                        }
                        JSNames = Javascript.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Names'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFArray$3e$__["PDFArray"]);
                        JSNames.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFHexString$3e$__["PDFHexString"].fromText(this.embedder.scriptName));
                        JSNames.push(ref);
                        this.alreadyEmbedded = true;
                        _b.label = 2;
                    case 2:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    /**
     * > **NOTE:** You probably don't want to call this method directly. Instead,
     * > consider using the [[PDFDocument.addJavaScript]] method, which will
     * create instances of [[PDFJavaScript]] for you.
     *
     * Create an instance of [[PDFJavaScript]] from an existing ref and script
     *
     * @param ref The unique reference for this script.
     * @param doc The document to which the script will belong.
     * @param embedder The embedder that will be used to embed the script.
     */ PDFJavaScript.of = function(ref, doc, embedder) {
        return new PDFJavaScript(ref, doc, embedder);
    };
    return PDFJavaScript;
}();
const __TURBOPACK__default__export__ = PDFJavaScript;
 //# sourceMappingURL=PDFJavaScript.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFDocument.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFEmbeddedPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFEmbeddedPage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFFont$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFFont.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFImage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFPage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$sizes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/sizes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$CustomFontEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CustomFontEmbedder$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/CustomFontEmbedder.js [app-client] (ecmascript) <export default as CustomFontEmbedder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$CustomFontSubsetEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CustomFontSubsetEmbedder$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/CustomFontSubsetEmbedder.js [app-client] (ecmascript) <export default as CustomFontSubsetEmbedder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$JpegEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__JpegEmbedder$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/JpegEmbedder.js [app-client] (ecmascript) <export default as JpegEmbedder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFCatalog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFCatalog$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFCatalog.js [app-client] (ecmascript) <export default as PDFCatalog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$PDFContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFContext$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/PDFContext.js [app-client] (ecmascript) <export default as PDFContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDict$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFDict.js [app-client] (ecmascript) <export default as PDFDict>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFHexString$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFHexString.js [app-client] (ecmascript) <export default as PDFHexString>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript) <export default as PDFName>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$PDFObjectCopier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFObjectCopier$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/PDFObjectCopier.js [app-client] (ecmascript) <export default as PDFObjectCopier>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$PDFPageEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFPageEmbedder$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/PDFPageEmbedder.js [app-client] (ecmascript) <export default as PDFPageEmbedder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFPageLeaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFPageLeaf$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFPageLeaf.js [app-client] (ecmascript) <export default as PDFPageLeaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFPageTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFPageTree$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFPageTree.js [app-client] (ecmascript) <export default as PDFPageTree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$parser$2f$PDFParser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFParser$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/parser/PDFParser.js [app-client] (ecmascript) <export default as PDFParser>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$writers$2f$PDFStreamWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFStreamWriter$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/writers/PDFStreamWriter.js [app-client] (ecmascript) <export default as PDFStreamWriter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFString$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFString.js [app-client] (ecmascript) <export default as PDFString>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$writers$2f$PDFWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFWriter$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/writers/PDFWriter.js [app-client] (ecmascript) <export default as PDFWriter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$PngEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PngEmbedder$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/PngEmbedder.js [app-client] (ecmascript) <export default as PngEmbedder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$StandardFontEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StandardFontEmbedder$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/StandardFontEmbedder.js [app-client] (ecmascript) <export default as StandardFontEmbedder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocumentOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFDocumentOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/validators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$Cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cache$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/Cache.js [app-client] (ecmascript) <export default as Cache>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/arrays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$base64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/base64.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/objects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$FileEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/FileEmbedder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFEmbeddedFile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFEmbeddedFile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFJavaScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFJavaScript.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$JavaScriptEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/embedders/JavaScriptEmbedder.js [app-client] (ecmascript)");
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
/**
 * Represents a PDF document.
 */ var PDFDocument = function() {
    function PDFDocument(context, ignoreEncryption, updateMetadata) {
        var _this = this;
        /** The default word breaks used in PDFPage.drawText */ this.defaultWordBreaks = [
            ' '
        ];
        this.computePages = function() {
            var pages = [];
            _this.catalog.Pages().traverse(function(node, ref) {
                if (node instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFPageLeaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFPageLeaf$3e$__["PDFPageLeaf"]) {
                    var page = _this.pageMap.get(node);
                    if (!page) {
                        page = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(node, ref, _this);
                        _this.pageMap.set(node, page);
                    }
                    pages.push(page);
                }
            });
            return pages;
        };
        this.getOrCreateForm = function() {
            var acroForm = _this.catalog.getOrCreateAcroForm();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(acroForm, _this);
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(context, 'context', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$PDFContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFContext$3e$__["PDFContext"],
                'PDFContext'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(ignoreEncryption, 'ignoreEncryption', [
            'boolean'
        ]);
        this.context = context;
        this.catalog = context.lookup(context.trailerInfo.Root);
        this.isEncrypted = !!context.lookup(context.trailerInfo.Encrypt);
        this.pageCache = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$Cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cache$3e$__["Cache"].populatedBy(this.computePages);
        this.pageMap = new Map();
        this.formCache = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$Cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cache$3e$__["Cache"].populatedBy(this.getOrCreateForm);
        this.fonts = [];
        this.images = [];
        this.embeddedPages = [];
        this.embeddedFiles = [];
        this.javaScripts = [];
        if (!ignoreEncryption && this.isEncrypted) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncryptedPDFError"]();
        if (updateMetadata) this.updateInfoDict();
    }
    /**
     * Load an existing [[PDFDocument]]. The input data can be provided in
     * multiple formats:
     *
     * | Type          | Contents                                               |
     * | ------------- | ------------------------------------------------------ |
     * | `string`      | A base64 encoded string (or data URI) containing a PDF |
     * | `Uint8Array`  | The raw bytes of a PDF                                 |
     * | `ArrayBuffer` | The raw bytes of a PDF                                 |
     *
     * For example:
     * ```js
     * import { PDFDocument } from 'pdf-lib'
     *
     * // pdf=string
     * const base64 =
     *  'JVBERi0xLjcKJYGBgYEKCjUgMCBvYmoKPDwKL0ZpbHRlciAvRmxhdGVEZWNvZGUKL0xlbm' +
     *  'd0aCAxMDQKPj4Kc3RyZWFtCniccwrhMlAAwaJ0Ln2P1Jyy1JLM5ERdc0MjCwUjE4WQNC4Q' +
     *  '6cNlCFZkqGCqYGSqEJLLZWNuYGZiZmbkYuZsZmlmZGRgZmluDCQNzc3NTM2NzdzMXMxMjQ' +
     *  'ztFEKyuEK0uFxDuAAOERdVCmVuZHN0cmVhbQplbmRvYmoKCjYgMCBvYmoKPDwKL0ZpbHRl' +
     *  'ciAvRmxhdGVEZWNvZGUKL1R5cGUgL09ialN0bQovTiA0Ci9GaXJzdCAyMAovTGVuZ3RoID' +
     *  'IxNQo+PgpzdHJlYW0KeJxVj9GqwjAMhu/zFHkBzTo3nCCCiiKIHPEICuJF3cKoSCu2E8/b' +
     *  '20wPIr1p8v9/8kVhgilmGfawX2CGaVrgcAi0/bsy0lrX7IGWpvJ4iJYEN3gEmrrGBlQwGs' +
     *  'HHO9VBX1wNrxAqMX87RBD5xpJuddqwd82tjAHxzV1U5LPgy52DKXWnr1Lheg+j/c/pzGVr' +
     *  'iqV0VlwZPXGPCJjElw/ybkwUmeoWgxesDXGhHJC/D/iikp1Av80ptKU0FdBEe25pPihAM1' +
     *  'u6ytgaaWfs2Hrz35CJT1+EWmAKZW5kc3RyZWFtCmVuZG9iagoKNyAwIG9iago8PAovU2l6' +
     *  'ZSA4Ci9Sb290IDIgMCBSCi9GaWx0ZXIgL0ZsYXRlRGVjb2RlCi9UeXBlIC9YUmVmCi9MZW' +
     *  '5ndGggMzgKL1cgWyAxIDIgMiBdCi9JbmRleCBbIDAgOCBdCj4+CnN0cmVhbQp4nBXEwREA' +
     *  'EBAEsCwz3vrvRmOOyyOoGhZdutHN2MT55fIAVocD+AplbmRzdHJlYW0KZW5kb2JqCgpzdG' +
     *  'FydHhyZWYKNTEwCiUlRU9G'
     *
     * const dataUri = 'data:application/pdf;base64,' + base64
     *
     * const pdfDoc1 = await PDFDocument.load(base64)
     * const pdfDoc2 = await PDFDocument.load(dataUri)
     *
     * // pdf=Uint8Array
     * import fs from 'fs'
     * const uint8Array = fs.readFileSync('with_update_sections.pdf')
     * const pdfDoc3 = await PDFDocument.load(uint8Array)
     *
     * // pdf=ArrayBuffer
     * const url = 'https://pdf-lib.js.org/assets/with_update_sections.pdf'
     * const arrayBuffer = await fetch(url).then(res => res.arrayBuffer())
     * const pdfDoc4 = await PDFDocument.load(arrayBuffer)
     *
     * ```
     *
     * @param pdf The input data containing a PDF document.
     * @param options The options to be used when loading the document.
     * @returns Resolves with a document loaded from the input.
     */ PDFDocument.load = function(pdf, options) {
        if (options === void 0) {
            options = {};
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var _a, ignoreEncryption, _b, parseSpeed, _c, throwOnInvalidObject, _d, updateMetadata, _e, capNumbers, bytes, context;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_f) {
                switch(_f.label){
                    case 0:
                        _a = options.ignoreEncryption, ignoreEncryption = _a === void 0 ? false : _a, _b = options.parseSpeed, parseSpeed = _b === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocumentOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseSpeeds"].Slow : _b, _c = options.throwOnInvalidObject, throwOnInvalidObject = _c === void 0 ? false : _c, _d = options.updateMetadata, updateMetadata = _d === void 0 ? true : _d, _e = options.capNumbers, capNumbers = _e === void 0 ? false : _e;
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(pdf, 'pdf', [
                            'string',
                            Uint8Array,
                            ArrayBuffer
                        ]);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(ignoreEncryption, 'ignoreEncryption', [
                            'boolean'
                        ]);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(parseSpeed, 'parseSpeed', [
                            'number'
                        ]);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(throwOnInvalidObject, 'throwOnInvalidObject', [
                            'boolean'
                        ]);
                        bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(pdf);
                        return [
                            4 /*yield*/ ,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$parser$2f$PDFParser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFParser$3e$__["PDFParser"].forBytesWithOptions(bytes, parseSpeed, throwOnInvalidObject, capNumbers).parseDocument()
                        ];
                    case 1:
                        context = _f.sent();
                        return [
                            2 /*return*/ ,
                            new PDFDocument(context, ignoreEncryption, updateMetadata)
                        ];
                }
            });
        });
    };
    /**
     * Create a new [[PDFDocument]].
     * @returns Resolves with the newly created document.
     */ PDFDocument.create = function(options) {
        if (options === void 0) {
            options = {};
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var _a, updateMetadata, context, pageTree, pageTreeRef, catalog;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
                _a = options.updateMetadata, updateMetadata = _a === void 0 ? true : _a;
                context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$PDFContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFContext$3e$__["PDFContext"].create();
                pageTree = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFPageTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFPageTree$3e$__["PDFPageTree"].withContext(context);
                pageTreeRef = context.register(pageTree);
                catalog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFCatalog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFCatalog$3e$__["PDFCatalog"].withContextAndPages(context, pageTreeRef);
                context.trailerInfo.Root = context.register(catalog);
                return [
                    2 /*return*/ ,
                    new PDFDocument(context, false, updateMetadata)
                ];
            });
        });
    };
    /**
     * Register a fontkit instance. This must be done before custom fonts can
     * be embedded. See [here](https://github.com/Hopding/pdf-lib/tree/master#fontkit-installation)
     * for instructions on how to install and register a fontkit instance.
     *
     * > You do **not** need to call this method to embed standard fonts.
     *
     * For example:
     * ```js
     * import { PDFDocument } from 'pdf-lib'
     * import fontkit from '@pdf-lib/fontkit'
     *
     * const pdfDoc = await PDFDocument.create()
     * pdfDoc.registerFontkit(fontkit)
     * ```
     *
     * @param fontkit The fontkit instance to be registered.
     */ PDFDocument.prototype.registerFontkit = function(fontkit) {
        this.fontkit = fontkit;
    };
    /**
     * Get the [[PDFForm]] containing all interactive fields for this document.
     * For example:
     * ```js
     * const form = pdfDoc.getForm()
     * const fields = form.getFields()
     * fields.forEach(field => {
     *   const type = field.constructor.name
     *   const name = field.getName()
     *   console.log(`${type}: ${name}`)
     * })
     * ```
     * @returns The form for this document.
     */ PDFDocument.prototype.getForm = function() {
        var form = this.formCache.access();
        if (form.hasXFA()) {
            console.warn('Removing XFA form data as pdf-lib does not support reading or writing XFA');
            form.deleteXFA();
        }
        return form;
    };
    /**
     * Get this document's title metadata. The title appears in the
     * "Document Properties" section of most PDF readers. For example:
     * ```js
     * const title = pdfDoc.getTitle()
     * ```
     * @returns A string containing the title of this document, if it has one.
     */ PDFDocument.prototype.getTitle = function() {
        var title = this.getInfoDict().lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].Title);
        if (!title) return undefined;
        assertIsLiteralOrHexString(title);
        return title.decodeText();
    };
    /**
     * Get this document's author metadata. The author appears in the
     * "Document Properties" section of most PDF readers. For example:
     * ```js
     * const author = pdfDoc.getAuthor()
     * ```
     * @returns A string containing the author of this document, if it has one.
     */ PDFDocument.prototype.getAuthor = function() {
        var author = this.getInfoDict().lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].Author);
        if (!author) return undefined;
        assertIsLiteralOrHexString(author);
        return author.decodeText();
    };
    /**
     * Get this document's subject metadata. The subject appears in the
     * "Document Properties" section of most PDF readers. For example:
     * ```js
     * const subject = pdfDoc.getSubject()
     * ```
     * @returns A string containing the subject of this document, if it has one.
     */ PDFDocument.prototype.getSubject = function() {
        var subject = this.getInfoDict().lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].Subject);
        if (!subject) return undefined;
        assertIsLiteralOrHexString(subject);
        return subject.decodeText();
    };
    /**
     * Get this document's keywords metadata. The keywords appear in the
     * "Document Properties" section of most PDF readers. For example:
     * ```js
     * const keywords = pdfDoc.getKeywords()
     * ```
     * @returns A string containing the keywords of this document, if it has any.
     */ PDFDocument.prototype.getKeywords = function() {
        var keywords = this.getInfoDict().lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].Keywords);
        if (!keywords) return undefined;
        assertIsLiteralOrHexString(keywords);
        return keywords.decodeText();
    };
    /**
     * Get this document's creator metadata. The creator appears in the
     * "Document Properties" section of most PDF readers. For example:
     * ```js
     * const creator = pdfDoc.getCreator()
     * ```
     * @returns A string containing the creator of this document, if it has one.
     */ PDFDocument.prototype.getCreator = function() {
        var creator = this.getInfoDict().lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].Creator);
        if (!creator) return undefined;
        assertIsLiteralOrHexString(creator);
        return creator.decodeText();
    };
    /**
     * Get this document's producer metadata. The producer appears in the
     * "Document Properties" section of most PDF readers. For example:
     * ```js
     * const producer = pdfDoc.getProducer()
     * ```
     * @returns A string containing the producer of this document, if it has one.
     */ PDFDocument.prototype.getProducer = function() {
        var producer = this.getInfoDict().lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].Producer);
        if (!producer) return undefined;
        assertIsLiteralOrHexString(producer);
        return producer.decodeText();
    };
    /**
     * Get this document's creation date metadata. The creation date appears in
     * the "Document Properties" section of most PDF readers. For example:
     * ```js
     * const creationDate = pdfDoc.getCreationDate()
     * ```
     * @returns A Date containing the creation date of this document,
     *          if it has one.
     */ PDFDocument.prototype.getCreationDate = function() {
        var creationDate = this.getInfoDict().lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].CreationDate);
        if (!creationDate) return undefined;
        assertIsLiteralOrHexString(creationDate);
        return creationDate.decodeDate();
    };
    /**
     * Get this document's modification date metadata. The modification date
     * appears in the "Document Properties" section of most PDF readers.
     * For example:
     * ```js
     * const modification = pdfDoc.getModificationDate()
     * ```
     * @returns A Date containing the modification date of this document,
     *          if it has one.
     */ PDFDocument.prototype.getModificationDate = function() {
        var modificationDate = this.getInfoDict().lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].ModDate);
        if (!modificationDate) return undefined;
        assertIsLiteralOrHexString(modificationDate);
        return modificationDate.decodeDate();
    };
    /**
     * Set this document's title metadata. The title will appear in the
     * "Document Properties" section of most PDF readers. For example:
     * ```js
     * pdfDoc.setTitle('🥚 The Life of an Egg 🍳')
     * ```
     *
     * To display the title in the window's title bar, set the
     * `showInWindowTitleBar` option to `true` (works for _most_ PDF readers).
     * For example:
     * ```js
     * pdfDoc.setTitle('🥚 The Life of an Egg 🍳', { showInWindowTitleBar: true })
     * ```
     *
     * @param title The title of this document.
     * @param options The options to be used when setting the title.
     */ PDFDocument.prototype.setTitle = function(title, options) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(title, 'title', [
            'string'
        ]);
        var key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Title');
        this.getInfoDict().set(key, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFHexString$3e$__["PDFHexString"].fromText(title));
        // Indicate that readers should display the title rather than the filename
        if (options === null || options === void 0 ? void 0 : options.showInWindowTitleBar) {
            var prefs = this.catalog.getOrCreateViewerPreferences();
            prefs.setDisplayDocTitle(true);
        }
    };
    /**
     * Set this document's author metadata. The author will appear in the
     * "Document Properties" section of most PDF readers. For example:
     * ```js
     * pdfDoc.setAuthor('Humpty Dumpty')
     * ```
     * @param author The author of this document.
     */ PDFDocument.prototype.setAuthor = function(author) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(author, 'author', [
            'string'
        ]);
        var key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Author');
        this.getInfoDict().set(key, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFHexString$3e$__["PDFHexString"].fromText(author));
    };
    /**
     * Set this document's subject metadata. The subject will appear in the
     * "Document Properties" section of most PDF readers. For example:
     * ```js
     * pdfDoc.setSubject('📘 An Epic Tale of Woe 📖')
     * ```
     * @param subject The subject of this document.
     */ PDFDocument.prototype.setSubject = function(subject) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(subject, 'author', [
            'string'
        ]);
        var key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Subject');
        this.getInfoDict().set(key, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFHexString$3e$__["PDFHexString"].fromText(subject));
    };
    /**
     * Set this document's keyword metadata. These keywords will appear in the
     * "Document Properties" section of most PDF readers. For example:
     * ```js
     * pdfDoc.setKeywords(['eggs', 'wall', 'fall', 'king', 'horses', 'men'])
     * ```
     * @param keywords An array of keywords associated with this document.
     */ PDFDocument.prototype.setKeywords = function(keywords) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(keywords, 'keywords', [
            Array
        ]);
        var key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Keywords');
        this.getInfoDict().set(key, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFHexString$3e$__["PDFHexString"].fromText(keywords.join(' ')));
    };
    /**
     * Set this document's creator metadata. The creator will appear in the
     * "Document Properties" section of most PDF readers. For example:
     * ```js
     * pdfDoc.setCreator('PDF App 9000 🤖')
     * ```
     * @param creator The creator of this document.
     */ PDFDocument.prototype.setCreator = function(creator) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(creator, 'creator', [
            'string'
        ]);
        var key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Creator');
        this.getInfoDict().set(key, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFHexString$3e$__["PDFHexString"].fromText(creator));
    };
    /**
     * Set this document's producer metadata. The producer will appear in the
     * "Document Properties" section of most PDF readers. For example:
     * ```js
     * pdfDoc.setProducer('PDF App 9000 🤖')
     * ```
     * @param producer The producer of this document.
     */ PDFDocument.prototype.setProducer = function(producer) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(producer, 'creator', [
            'string'
        ]);
        var key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Producer');
        this.getInfoDict().set(key, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFHexString$3e$__["PDFHexString"].fromText(producer));
    };
    /**
     * Set this document's language metadata. The language will appear in the
     * "Document Properties" section of some PDF readers. For example:
     * ```js
     * pdfDoc.setLanguage('en-us')
     * ```
     *
     * @param language An RFC 3066 _Language-Tag_ denoting the language of this
     *                 document, or an empty string if the language is unknown.
     */ PDFDocument.prototype.setLanguage = function(language) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(language, 'language', [
            'string'
        ]);
        var key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Lang');
        this.catalog.set(key, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFString$3e$__["PDFString"].of(language));
    };
    /**
     * Set this document's creation date metadata. The creation date will appear
     * in the "Document Properties" section of most PDF readers. For example:
     * ```js
     * pdfDoc.setCreationDate(new Date())
     * ```
     * @param creationDate The date this document was created.
     */ PDFDocument.prototype.setCreationDate = function(creationDate) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(creationDate, 'creationDate', [
            [
                Date,
                'Date'
            ]
        ]);
        var key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('CreationDate');
        this.getInfoDict().set(key, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFString$3e$__["PDFString"].fromDate(creationDate));
    };
    /**
     * Set this document's modification date metadata. The modification date will
     * appear in the "Document Properties" section of most PDF readers. For
     * example:
     * ```js
     * pdfDoc.setModificationDate(new Date())
     * ```
     * @param modificationDate The date this document was last modified.
     */ PDFDocument.prototype.setModificationDate = function(modificationDate) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(modificationDate, 'modificationDate', [
            [
                Date,
                'Date'
            ]
        ]);
        var key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('ModDate');
        this.getInfoDict().set(key, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFString$3e$__["PDFString"].fromDate(modificationDate));
    };
    /**
     * Get the number of pages contained in this document. For example:
     * ```js
     * const totalPages = pdfDoc.getPageCount()
     * ```
     * @returns The number of pages in this document.
     */ PDFDocument.prototype.getPageCount = function() {
        if (this.pageCount === undefined) this.pageCount = this.getPages().length;
        return this.pageCount;
    };
    /**
     * Get an array of all the pages contained in this document. The pages are
     * stored in the array in the same order that they are rendered in the
     * document. For example:
     * ```js
     * const pages = pdfDoc.getPages()
     * pages[0]   // The first page of the document
     * pages[2]   // The third page of the document
     * pages[197] // The 198th page of the document
     * ```
     * @returns An array of all the pages contained in this document.
     */ PDFDocument.prototype.getPages = function() {
        return this.pageCache.access();
    };
    /**
     * Get the page rendered at a particular `index` of the document. For example:
     * ```js
     * pdfDoc.getPage(0)   // The first page of the document
     * pdfDoc.getPage(2)   // The third page of the document
     * pdfDoc.getPage(197) // The 198th page of the document
     * ```
     * @returns The [[PDFPage]] rendered at the given `index` of the document.
     */ PDFDocument.prototype.getPage = function(index) {
        var pages = this.getPages();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRange"])(index, 'index', 0, pages.length - 1);
        return pages[index];
    };
    /**
     * Get an array of indices for all the pages contained in this document. The
     * array will contain a range of integers from
     * `0..pdfDoc.getPageCount() - 1`. For example:
     * ```js
     * const pdfDoc = await PDFDocument.create()
     * pdfDoc.addPage()
     * pdfDoc.addPage()
     * pdfDoc.addPage()
     *
     * const indices = pdfDoc.getPageIndices()
     * indices // => [0, 1, 2]
     * ```
     * @returns An array of indices for all pages contained in this document.
     */ PDFDocument.prototype.getPageIndices = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"])(0, this.getPageCount());
    };
    /**
     * Remove the page at a given index from this document. For example:
     * ```js
     * pdfDoc.removePage(0)   // Remove the first page of the document
     * pdfDoc.removePage(2)   // Remove the third page of the document
     * pdfDoc.removePage(197) // Remove the 198th page of the document
     * ```
     * Once a page has been removed, it will no longer be rendered at that index
     * in the document.
     * @param index The index of the page to be removed.
     */ PDFDocument.prototype.removePage = function(index) {
        var pageCount = this.getPageCount();
        if (this.pageCount === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemovePageFromEmptyDocumentError"]();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRange"])(index, 'index', 0, pageCount - 1);
        this.catalog.removeLeafNode(index);
        this.pageCount = pageCount - 1;
    };
    /**
     * Add a page to the end of this document. This method accepts three
     * different value types for the `page` parameter:
     *
     * | Type               | Behavior                                                                            |
     * | ------------------ | ----------------------------------------------------------------------------------- |
     * | `undefined`        | Create a new page and add it to the end of this document                            |
     * | `[number, number]` | Create a new page with the given dimensions and add it to the end of this document  |
     * | `PDFPage`          | Add the existing page to the end of this document                                   |
     *
     * For example:
     * ```js
     * // page=undefined
     * const newPage = pdfDoc.addPage()
     *
     * // page=[number, number]
     * import { PageSizes } from 'pdf-lib'
     * const newPage1 = pdfDoc.addPage(PageSizes.A7)
     * const newPage2 = pdfDoc.addPage(PageSizes.Letter)
     * const newPage3 = pdfDoc.addPage([500, 750])
     *
     * // page=PDFPage
     * const pdfDoc1 = await PDFDocument.create()
     * const pdfDoc2 = await PDFDocument.load(...)
     * const [existingPage] = await pdfDoc1.copyPages(pdfDoc2, [0])
     * pdfDoc1.addPage(existingPage)
     * ```
     *
     * @param page Optionally, the desired dimensions or existing page.
     * @returns The newly created (or existing) page.
     */ PDFDocument.prototype.addPage = function(page) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(page, 'page', [
            'undefined',
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                'PDFPage'
            ],
            Array
        ]);
        return this.insertPage(this.getPageCount(), page);
    };
    /**
     * Insert a page at a given index within this document. This method accepts
     * three different value types for the `page` parameter:
     *
     * | Type               | Behavior                                                                       |
     * | ------------------ | ------------------------------------------------------------------------------ |
     * | `undefined`        | Create a new page and insert it into this document                             |
     * | `[number, number]` | Create a new page with the given dimensions and insert it into this document   |
     * | `PDFPage`          | Insert the existing page into this document                                    |
     *
     * For example:
     * ```js
     * // page=undefined
     * const newPage = pdfDoc.insertPage(2)
     *
     * // page=[number, number]
     * import { PageSizes } from 'pdf-lib'
     * const newPage1 = pdfDoc.insertPage(2, PageSizes.A7)
     * const newPage2 = pdfDoc.insertPage(0, PageSizes.Letter)
     * const newPage3 = pdfDoc.insertPage(198, [500, 750])
     *
     * // page=PDFPage
     * const pdfDoc1 = await PDFDocument.create()
     * const pdfDoc2 = await PDFDocument.load(...)
     * const [existingPage] = await pdfDoc1.copyPages(pdfDoc2, [0])
     * pdfDoc1.insertPage(0, existingPage)
     * ```
     *
     * @param index The index at which the page should be inserted (zero-based).
     * @param page Optionally, the desired dimensions or existing page.
     * @returns The newly created (or existing) page.
     */ PDFDocument.prototype.insertPage = function(index, page) {
        var pageCount = this.getPageCount();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRange"])(index, 'index', 0, pageCount);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(page, 'page', [
            'undefined',
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                'PDFPage'
            ],
            Array
        ]);
        if (!page || Array.isArray(page)) {
            var dims = Array.isArray(page) ? page : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$sizes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageSizes"].A4;
            page = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create(this);
            page.setSize.apply(page, dims);
        } else if (page.doc !== this) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ForeignPageError"]();
        }
        var parentRef = this.catalog.insertLeafNode(page.ref, index);
        page.node.setParent(parentRef);
        this.pageMap.set(page.node, page);
        this.pageCache.invalidate();
        this.pageCount = pageCount + 1;
        return page;
    };
    /**
     * Copy pages from a source document into this document. Allows pages to be
     * copied between different [[PDFDocument]] instances. For example:
     * ```js
     * const pdfDoc = await PDFDocument.create()
     * const srcDoc = await PDFDocument.load(...)
     *
     * const copiedPages = await pdfDoc.copyPages(srcDoc, [0, 3, 89])
     * const [firstPage, fourthPage, ninetiethPage] = copiedPages;
     *
     * pdfDoc.addPage(fourthPage)
     * pdfDoc.insertPage(0, ninetiethPage)
     * pdfDoc.addPage(firstPage)
     * ```
     * @param srcDoc The document from which pages should be copied.
     * @param indices The indices of the pages that should be copied.
     * @returns Resolves with an array of pages copied into this document.
     */ PDFDocument.prototype.copyPages = function(srcDoc, indices) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var copier, srcPages, copiedPages, idx, len, srcPage, copiedPage, ref;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(srcDoc, 'srcDoc', [
                            [
                                PDFDocument,
                                'PDFDocument'
                            ]
                        ]);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(indices, 'indices', [
                            Array
                        ]);
                        return [
                            4 /*yield*/ ,
                            srcDoc.flush()
                        ];
                    case 1:
                        _a.sent();
                        copier = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$PDFObjectCopier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFObjectCopier$3e$__["PDFObjectCopier"].for(srcDoc.context, this.context);
                        srcPages = srcDoc.getPages();
                        copiedPages = new Array(indices.length);
                        for(idx = 0, len = indices.length; idx < len; idx++){
                            srcPage = srcPages[indices[idx]];
                            copiedPage = copier.copy(srcPage.node);
                            ref = this.context.register(copiedPage);
                            copiedPages[idx] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(copiedPage, ref, this);
                        }
                        return [
                            2 /*return*/ ,
                            copiedPages
                        ];
                }
            });
        });
    };
    /**
     * Get a copy of this document.
     *
     * For example:
     * ```js
     * const srcDoc = await PDFDocument.load(...)
     * const pdfDoc = await srcDoc.copy()
     * ```
     *
     * > **NOTE:**  This method won't copy all information over to the new
     * > document (acroforms, outlines, etc...).
     *
     * @returns Resolves with a copy this document.
     */ PDFDocument.prototype.copy = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var pdfCopy, contentPages, idx, len;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            PDFDocument.create()
                        ];
                    case 1:
                        pdfCopy = _a.sent();
                        return [
                            4 /*yield*/ ,
                            pdfCopy.copyPages(this, this.getPageIndices())
                        ];
                    case 2:
                        contentPages = _a.sent();
                        for(idx = 0, len = contentPages.length; idx < len; idx++){
                            pdfCopy.addPage(contentPages[idx]);
                        }
                        if (this.getAuthor() !== undefined) {
                            pdfCopy.setAuthor(this.getAuthor());
                        }
                        if (this.getCreationDate() !== undefined) {
                            pdfCopy.setCreationDate(this.getCreationDate());
                        }
                        if (this.getCreator() !== undefined) {
                            pdfCopy.setCreator(this.getCreator());
                        }
                        if (this.getModificationDate() !== undefined) {
                            pdfCopy.setModificationDate(this.getModificationDate());
                        }
                        if (this.getProducer() !== undefined) {
                            pdfCopy.setProducer(this.getProducer());
                        }
                        if (this.getSubject() !== undefined) {
                            pdfCopy.setSubject(this.getSubject());
                        }
                        if (this.getTitle() !== undefined) {
                            pdfCopy.setTitle(this.getTitle());
                        }
                        pdfCopy.defaultWordBreaks = this.defaultWordBreaks;
                        return [
                            2 /*return*/ ,
                            pdfCopy
                        ];
                }
            });
        });
    };
    /**
     * Add JavaScript to this document. The supplied `script` is executed when the
     * document is opened. The `script` can be used to perform some operation
     * when the document is opened (e.g. logging to the console), or it can be
     * used to define a function that can be referenced later in a JavaScript
     * action. For example:
     * ```js
     * // Show "Hello World!" in the console when the PDF is opened
     * pdfDoc.addJavaScript(
     *   'main',
     *   'console.show(); console.println("Hello World!");'
     * );
     *
     * // Define a function named "foo" that can be called in JavaScript Actions
     * pdfDoc.addJavaScript(
     *   'foo',
     *   'function foo() { return "foo"; }'
     * );
     * ```
     * See the [JavaScript for Acrobat API Reference](https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/js_api_reference.pdf)
     * for details.
     * @param name The name of the script. Must be unique per document.
     * @param script The JavaScript to execute.
     */ PDFDocument.prototype.addJavaScript = function(name, script) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(name, 'name', [
            'string'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(script, 'script', [
            'string'
        ]);
        var embedder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$JavaScriptEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].for(script, name);
        var ref = this.context.nextRef();
        var javaScript = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFJavaScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(ref, this, embedder);
        this.javaScripts.push(javaScript);
    };
    /**
     * Add an attachment to this document. Attachments are visible in the
     * "Attachments" panel of Adobe Acrobat and some other PDF readers. Any
     * type of file can be added as an attachment. This includes, but is not
     * limited to, `.png`, `.jpg`, `.pdf`, `.csv`, `.docx`, and `.xlsx` files.
     *
     * The input data can be provided in multiple formats:
     *
     * | Type          | Contents                                                       |
     * | ------------- | -------------------------------------------------------------- |
     * | `string`      | A base64 encoded string (or data URI) containing an attachment |
     * | `Uint8Array`  | The raw bytes of an attachment                                 |
     * | `ArrayBuffer` | The raw bytes of an attachment                                 |
     *
     * For example:
     * ```js
     * // attachment=string
     * await pdfDoc.attach('/9j/4AAQSkZJRgABAQAAAQABAAD/2wBD...', 'cat_riding_unicorn.jpg', {
     *   mimeType: 'image/jpeg',
     *   description: 'Cool cat riding a unicorn! 🦄🐈🕶️',
     *   creationDate: new Date('2019/12/01'),
     *   modificationDate: new Date('2020/04/19'),
     * })
     * await pdfDoc.attach('data:image/jpeg;base64,/9j/4AAQ...', 'cat_riding_unicorn.jpg', {
     *   mimeType: 'image/jpeg',
     *   description: 'Cool cat riding a unicorn! 🦄🐈🕶️',
     *   creationDate: new Date('2019/12/01'),
     *   modificationDate: new Date('2020/04/19'),
     * })
     *
     * // attachment=Uint8Array
     * import fs from 'fs'
     * const uint8Array = fs.readFileSync('cat_riding_unicorn.jpg')
     * await pdfDoc.attach(uint8Array, 'cat_riding_unicorn.jpg', {
     *   mimeType: 'image/jpeg',
     *   description: 'Cool cat riding a unicorn! 🦄🐈🕶️',
     *   creationDate: new Date('2019/12/01'),
     *   modificationDate: new Date('2020/04/19'),
     * })
     *
     * // attachment=ArrayBuffer
     * const url = 'https://pdf-lib.js.org/assets/cat_riding_unicorn.jpg'
     * const arrayBuffer = await fetch(url).then(res => res.arrayBuffer())
     * await pdfDoc.attach(arrayBuffer, 'cat_riding_unicorn.jpg', {
     *   mimeType: 'image/jpeg',
     *   description: 'Cool cat riding a unicorn! 🦄🐈🕶️',
     *   creationDate: new Date('2019/12/01'),
     *   modificationDate: new Date('2020/04/19'),
     * })
     * ```
     *
     * @param attachment The input data containing the file to be attached.
     * @param name The name of the file to be attached.
     * @returns Resolves when the attachment is complete.
     */ PDFDocument.prototype.attach = function(attachment, name, options) {
        if (options === void 0) {
            options = {};
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var bytes, embedder, ref, embeddedFile;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(attachment, 'attachment', [
                    'string',
                    Uint8Array,
                    ArrayBuffer
                ]);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(name, 'name', [
                    'string'
                ]);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.mimeType, 'mimeType', [
                    'string'
                ]);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.description, 'description', [
                    'string'
                ]);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.creationDate, 'options.creationDate', [
                    Date
                ]);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.modificationDate, 'options.modificationDate', [
                    Date
                ]);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsOneOfOrUndefined"])(options.afRelationship, 'options.afRelationship', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$FileEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AFRelationship"]);
                bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(attachment);
                embedder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$FileEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].for(bytes, name, options);
                ref = this.context.nextRef();
                embeddedFile = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFEmbeddedFile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(ref, this, embedder);
                this.embeddedFiles.push(embeddedFile);
                return [
                    2 /*return*/ 
                ];
            });
        });
    };
    /**
     * Embed a font into this document. The input data can be provided in multiple
     * formats:
     *
     * | Type            | Contents                                                |
     * | --------------- | ------------------------------------------------------- |
     * | `StandardFonts` | One of the standard 14 fonts                            |
     * | `string`        | A base64 encoded string (or data URI) containing a font |
     * | `Uint8Array`    | The raw bytes of a font                                 |
     * | `ArrayBuffer`   | The raw bytes of a font                                 |
     *
     * For example:
     * ```js
     * // font=StandardFonts
     * import { StandardFonts } from 'pdf-lib'
     * const font1 = await pdfDoc.embedFont(StandardFonts.Helvetica)
     *
     * // font=string
     * const font2 = await pdfDoc.embedFont('AAEAAAAVAQAABABQRFNJRx/upe...')
     * const font3 = await pdfDoc.embedFont('data:font/opentype;base64,AAEAAA...')
     *
     * // font=Uint8Array
     * import fs from 'fs'
     * const font4 = await pdfDoc.embedFont(fs.readFileSync('Ubuntu-R.ttf'))
     *
     * // font=ArrayBuffer
     * const url = 'https://pdf-lib.js.org/assets/ubuntu/Ubuntu-R.ttf'
     * const ubuntuBytes = await fetch(url).then(res => res.arrayBuffer())
     * const font5 = await pdfDoc.embedFont(ubuntuBytes)
     * ```
     * See also: [[registerFontkit]]
     * @param font The input data for a font.
     * @param options The options to be used when embedding the font.
     * @returns Resolves with the embedded font.
     */ PDFDocument.prototype.embedFont = function(font, options) {
        if (options === void 0) {
            options = {};
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var _a, subset, customName, features, embedder, bytes, fontkit, _b, ref, pdfFont;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_c) {
                switch(_c.label){
                    case 0:
                        _a = options.subset, subset = _a === void 0 ? false : _a, customName = options.customName, features = options.features;
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(font, 'font', [
                            'string',
                            Uint8Array,
                            ArrayBuffer
                        ]);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(subset, 'subset', [
                            'boolean'
                        ]);
                        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStandardFont"])(font)) return [
                            3 /*break*/ ,
                            1
                        ];
                        embedder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$StandardFontEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StandardFontEmbedder$3e$__["StandardFontEmbedder"].for(font, customName);
                        return [
                            3 /*break*/ ,
                            7
                        ];
                    case 1:
                        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canBeConvertedToUint8Array"])(font)) return [
                            3 /*break*/ ,
                            6
                        ];
                        bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(font);
                        fontkit = this.assertFontkit();
                        if (!subset) return [
                            3 /*break*/ ,
                            3
                        ];
                        return [
                            4 /*yield*/ ,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$CustomFontSubsetEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CustomFontSubsetEmbedder$3e$__["CustomFontSubsetEmbedder"].for(fontkit, bytes, customName, features)
                        ];
                    case 2:
                        _b = _c.sent();
                        return [
                            3 /*break*/ ,
                            5
                        ];
                    case 3:
                        return [
                            4 /*yield*/ ,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$CustomFontEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CustomFontEmbedder$3e$__["CustomFontEmbedder"].for(fontkit, bytes, customName, features)
                        ];
                    case 4:
                        _b = _c.sent();
                        _c.label = 5;
                    case 5:
                        embedder = _b;
                        return [
                            3 /*break*/ ,
                            7
                        ];
                    case 6:
                        throw new TypeError('`font` must be one of `StandardFonts | string | Uint8Array | ArrayBuffer`');
                    case 7:
                        ref = this.context.nextRef();
                        pdfFont = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFFont$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(ref, this, embedder);
                        this.fonts.push(pdfFont);
                        return [
                            2 /*return*/ ,
                            pdfFont
                        ];
                }
            });
        });
    };
    /**
     * Embed a standard font into this document.
     * For example:
     * ```js
     * import { StandardFonts } from 'pdf-lib'
     * const helveticaFont = pdfDoc.embedFont(StandardFonts.Helvetica)
     * ```
     * @param font The standard font to be embedded.
     * @param customName The name to be used when embedding the font.
     * @returns The embedded font.
     */ PDFDocument.prototype.embedStandardFont = function(font, customName) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(font, 'font', [
            'string'
        ]);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStandardFont"])(font)) {
            throw new TypeError('`font` must be one of type `StandardFonts`');
        }
        var embedder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$StandardFontEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StandardFontEmbedder$3e$__["StandardFontEmbedder"].for(font, customName);
        var ref = this.context.nextRef();
        var pdfFont = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFFont$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(ref, this, embedder);
        this.fonts.push(pdfFont);
        return pdfFont;
    };
    /**
     * Embed a JPEG image into this document. The input data can be provided in
     * multiple formats:
     *
     * | Type          | Contents                                                      |
     * | ------------- | ------------------------------------------------------------- |
     * | `string`      | A base64 encoded string (or data URI) containing a JPEG image |
     * | `Uint8Array`  | The raw bytes of a JPEG image                                 |
     * | `ArrayBuffer` | The raw bytes of a JPEG image                                 |
     *
     * For example:
     * ```js
     * // jpg=string
     * const image1 = await pdfDoc.embedJpg('/9j/4AAQSkZJRgABAQAAAQABAAD/2wBD...')
     * const image2 = await pdfDoc.embedJpg('data:image/jpeg;base64,/9j/4AAQ...')
     *
     * // jpg=Uint8Array
     * import fs from 'fs'
     * const uint8Array = fs.readFileSync('cat_riding_unicorn.jpg')
     * const image3 = await pdfDoc.embedJpg(uint8Array)
     *
     * // jpg=ArrayBuffer
     * const url = 'https://pdf-lib.js.org/assets/cat_riding_unicorn.jpg'
     * const arrayBuffer = await fetch(url).then(res => res.arrayBuffer())
     * const image4 = await pdfDoc.embedJpg(arrayBuffer)
     * ```
     *
     * @param jpg The input data for a JPEG image.
     * @returns Resolves with the embedded image.
     */ PDFDocument.prototype.embedJpg = function(jpg) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var bytes, embedder, ref, pdfImage;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(jpg, 'jpg', [
                            'string',
                            Uint8Array,
                            ArrayBuffer
                        ]);
                        bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(jpg);
                        return [
                            4 /*yield*/ ,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$JpegEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__JpegEmbedder$3e$__["JpegEmbedder"].for(bytes)
                        ];
                    case 1:
                        embedder = _a.sent();
                        ref = this.context.nextRef();
                        pdfImage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(ref, this, embedder);
                        this.images.push(pdfImage);
                        return [
                            2 /*return*/ ,
                            pdfImage
                        ];
                }
            });
        });
    };
    /**
     * Embed a PNG image into this document. The input data can be provided in
     * multiple formats:
     *
     * | Type          | Contents                                                     |
     * | ------------- | ------------------------------------------------------------ |
     * | `string`      | A base64 encoded string (or data URI) containing a PNG image |
     * | `Uint8Array`  | The raw bytes of a PNG image                                 |
     * | `ArrayBuffer` | The raw bytes of a PNG image                                 |
     *
     * For example:
     * ```js
     * // png=string
     * const image1 = await pdfDoc.embedPng('iVBORw0KGgoAAAANSUhEUgAAAlgAAAF3...')
     * const image2 = await pdfDoc.embedPng('data:image/png;base64,iVBORw0KGg...')
     *
     * // png=Uint8Array
     * import fs from 'fs'
     * const uint8Array = fs.readFileSync('small_mario.png')
     * const image3 = await pdfDoc.embedPng(uint8Array)
     *
     * // png=ArrayBuffer
     * const url = 'https://pdf-lib.js.org/assets/small_mario.png'
     * const arrayBuffer = await fetch(url).then(res => res.arrayBuffer())
     * const image4 = await pdfDoc.embedPng(arrayBuffer)
     * ```
     *
     * @param png The input data for a PNG image.
     * @returns Resolves with the embedded image.
     */ PDFDocument.prototype.embedPng = function(png) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var bytes, embedder, ref, pdfImage;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(png, 'png', [
                            'string',
                            Uint8Array,
                            ArrayBuffer
                        ]);
                        bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(png);
                        return [
                            4 /*yield*/ ,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$PngEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PngEmbedder$3e$__["PngEmbedder"].for(bytes)
                        ];
                    case 1:
                        embedder = _a.sent();
                        ref = this.context.nextRef();
                        pdfImage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(ref, this, embedder);
                        this.images.push(pdfImage);
                        return [
                            2 /*return*/ ,
                            pdfImage
                        ];
                }
            });
        });
    };
    /**
     * Embed one or more PDF pages into this document.
     *
     * For example:
     * ```js
     * const pdfDoc = await PDFDocument.create()
     *
     * const sourcePdfUrl = 'https://pdf-lib.js.org/assets/with_large_page_count.pdf'
     * const sourcePdf = await fetch(sourcePdfUrl).then((res) => res.arrayBuffer())
     *
     * // Embed page 74 of `sourcePdf` into `pdfDoc`
     * const [embeddedPage] = await pdfDoc.embedPdf(sourcePdf, [73])
     * ```
     *
     * See [[PDFDocument.load]] for examples of the allowed input data formats.
     *
     * @param pdf The input data containing a PDF document.
     * @param indices The indices of the pages that should be embedded.
     * @returns Resolves with an array of the embedded pages.
     */ PDFDocument.prototype.embedPdf = function(pdf, indices) {
        if (indices === void 0) {
            indices = [
                0
            ];
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var srcDoc, _a, srcPages;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
                switch(_b.label){
                    case 0:
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(pdf, 'pdf', [
                            'string',
                            Uint8Array,
                            ArrayBuffer,
                            [
                                PDFDocument,
                                'PDFDocument'
                            ]
                        ]);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(indices, 'indices', [
                            Array
                        ]);
                        if (!(pdf instanceof PDFDocument)) return [
                            3 /*break*/ ,
                            1
                        ];
                        _a = pdf;
                        return [
                            3 /*break*/ ,
                            3
                        ];
                    case 1:
                        return [
                            4 /*yield*/ ,
                            PDFDocument.load(pdf)
                        ];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3:
                        srcDoc = _a;
                        srcPages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluckIndices"])(srcDoc.getPages(), indices);
                        return [
                            2 /*return*/ ,
                            this.embedPages(srcPages)
                        ];
                }
            });
        });
    };
    /**
     * Embed a single PDF page into this document.
     *
     * For example:
     * ```js
     * const pdfDoc = await PDFDocument.create()
     *
     * const sourcePdfUrl = 'https://pdf-lib.js.org/assets/with_large_page_count.pdf'
     * const sourceBuffer = await fetch(sourcePdfUrl).then((res) => res.arrayBuffer())
     * const sourcePdfDoc = await PDFDocument.load(sourceBuffer)
     * const sourcePdfPage = sourcePdfDoc.getPages()[73]
     *
     * const embeddedPage = await pdfDoc.embedPage(
     *   sourcePdfPage,
     *
     *   // Clip a section of the source page so that we only embed part of it
     *   { left: 100, right: 450, bottom: 330, top: 570 },
     *
     *   // Translate all drawings of the embedded page by (10, 200) units
     *   [1, 0, 0, 1, 10, 200],
     * )
     * ```
     *
     * @param page The page to be embedded.
     * @param boundingBox
     * Optionally, an area of the source page that should be embedded
     * (defaults to entire page).
     * @param transformationMatrix
     * Optionally, a transformation matrix that is always applied to the embedded
     * page anywhere it is drawn.
     * @returns Resolves with the embedded pdf page.
     */ PDFDocument.prototype.embedPage = function(page, boundingBox, transformationMatrix) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var embeddedPage;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(page, 'page', [
                            [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                'PDFPage'
                            ]
                        ]);
                        return [
                            4 /*yield*/ ,
                            this.embedPages([
                                page
                            ], [
                                boundingBox
                            ], [
                                transformationMatrix
                            ])
                        ];
                    case 1:
                        embeddedPage = _a.sent()[0];
                        return [
                            2 /*return*/ ,
                            embeddedPage
                        ];
                }
            });
        });
    };
    /**
     * Embed one or more PDF pages into this document.
     *
     * For example:
     * ```js
     * const pdfDoc = await PDFDocument.create()
     *
     * const sourcePdfUrl = 'https://pdf-lib.js.org/assets/with_large_page_count.pdf'
     * const sourceBuffer = await fetch(sourcePdfUrl).then((res) => res.arrayBuffer())
     * const sourcePdfDoc = await PDFDocument.load(sourceBuffer)
     *
     * const page1 = sourcePdfDoc.getPages()[0]
     * const page2 = sourcePdfDoc.getPages()[52]
     * const page3 = sourcePdfDoc.getPages()[73]
     *
     * const embeddedPages = await pdfDoc.embedPages([page1, page2, page3])
     * ```
     *
     * @param page
     * The pages to be embedded (they must all share the same context).
     * @param boundingBoxes
     * Optionally, an array of clipping boundaries - one for each page
     * (defaults to entirety of each page).
     * @param transformationMatrices
     * Optionally, an array of transformation matrices - one for each page
     * (each page's transformation will apply anywhere it is drawn).
     * @returns Resolves with an array of the embedded pdf pages.
     */ PDFDocument.prototype.embedPages = function(pages, boundingBoxes, transformationMatrices) {
        if (boundingBoxes === void 0) {
            boundingBoxes = [];
        }
        if (transformationMatrices === void 0) {
            transformationMatrices = [];
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var idx, len, currPage, nextPage, context, maybeCopyPage, embeddedPages, idx, len, page, box, matrix, embedder, ref;
            var _a;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
                switch(_b.label){
                    case 0:
                        if (pages.length === 0) return [
                            2 /*return*/ ,
                            []
                        ];
                        // Assert all pages have the same context
                        for(idx = 0, len = pages.length - 1; idx < len; idx++){
                            currPage = pages[idx];
                            nextPage = pages[idx + 1];
                            if (currPage.node.context !== nextPage.node.context) {
                                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageEmbeddingMismatchedContextError"]();
                            }
                        }
                        context = pages[0].node.context;
                        maybeCopyPage = context === this.context ? function(p) {
                            return p;
                        } : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$PDFObjectCopier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFObjectCopier$3e$__["PDFObjectCopier"].for(context, this.context).copy;
                        embeddedPages = new Array(pages.length);
                        idx = 0, len = pages.length;
                        _b.label = 1;
                    case 1:
                        if (!(idx < len)) return [
                            3 /*break*/ ,
                            4
                        ];
                        page = maybeCopyPage(pages[idx].node);
                        box = boundingBoxes[idx];
                        matrix = transformationMatrices[idx];
                        return [
                            4 /*yield*/ ,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$embedders$2f$PDFPageEmbedder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFPageEmbedder$3e$__["PDFPageEmbedder"].for(page, box, matrix)
                        ];
                    case 2:
                        embedder = _b.sent();
                        ref = this.context.nextRef();
                        embeddedPages[idx] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFEmbeddedPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].of(ref, this, embedder);
                        _b.label = 3;
                    case 3:
                        idx++;
                        return [
                            3 /*break*/ ,
                            1
                        ];
                    case 4:
                        (_a = this.embeddedPages).push.apply(_a, embeddedPages);
                        return [
                            2 /*return*/ ,
                            embeddedPages
                        ];
                }
            });
        });
    };
    /**
     * > **NOTE:** You shouldn't need to call this method directly. The [[save]]
     * > and [[saveAsBase64]] methods will automatically ensure that all embedded
     * > assets are flushed before serializing the document.
     *
     * Flush all embedded fonts, PDF pages, and images to this document's
     * [[context]].
     *
     * @returns Resolves when the flush is complete.
     */ PDFDocument.prototype.flush = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.embedAll(this.fonts)
                        ];
                    case 1:
                        _a.sent();
                        return [
                            4 /*yield*/ ,
                            this.embedAll(this.images)
                        ];
                    case 2:
                        _a.sent();
                        return [
                            4 /*yield*/ ,
                            this.embedAll(this.embeddedPages)
                        ];
                    case 3:
                        _a.sent();
                        return [
                            4 /*yield*/ ,
                            this.embedAll(this.embeddedFiles)
                        ];
                    case 4:
                        _a.sent();
                        return [
                            4 /*yield*/ ,
                            this.embedAll(this.javaScripts)
                        ];
                    case 5:
                        _a.sent();
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    /**
     * Serialize this document to an array of bytes making up a PDF file.
     * For example:
     * ```js
     * const pdfBytes = await pdfDoc.save()
     * ```
     *
     * There are a number of things you can do with the serialized document,
     * depending on the JavaScript environment you're running in:
     * * Write it to a file in Node or React Native
     * * Download it as a Blob in the browser
     * * Render it in an `iframe`
     *
     * @param options The options to be used when saving the document.
     * @returns Resolves with the bytes of the serialized document.
     */ PDFDocument.prototype.save = function(options) {
        if (options === void 0) {
            options = {};
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var _a, useObjectStreams, _b, addDefaultPage, _c, objectsPerTick, _d, updateFieldAppearances, form, Writer;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_e) {
                switch(_e.label){
                    case 0:
                        _a = options.useObjectStreams, useObjectStreams = _a === void 0 ? true : _a, _b = options.addDefaultPage, addDefaultPage = _b === void 0 ? true : _b, _c = options.objectsPerTick, objectsPerTick = _c === void 0 ? 50 : _c, _d = options.updateFieldAppearances, updateFieldAppearances = _d === void 0 ? true : _d;
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(useObjectStreams, 'useObjectStreams', [
                            'boolean'
                        ]);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(addDefaultPage, 'addDefaultPage', [
                            'boolean'
                        ]);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(objectsPerTick, 'objectsPerTick', [
                            'number'
                        ]);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(updateFieldAppearances, 'updateFieldAppearances', [
                            'boolean'
                        ]);
                        if (addDefaultPage && this.getPageCount() === 0) this.addPage();
                        if (updateFieldAppearances) {
                            form = this.formCache.getValue();
                            if (form) form.updateFieldAppearances();
                        }
                        return [
                            4 /*yield*/ ,
                            this.flush()
                        ];
                    case 1:
                        _e.sent();
                        Writer = useObjectStreams ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$writers$2f$PDFStreamWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFStreamWriter$3e$__["PDFStreamWriter"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$writers$2f$PDFWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFWriter$3e$__["PDFWriter"];
                        return [
                            2 /*return*/ ,
                            Writer.forContext(this.context, objectsPerTick).serializeToBuffer()
                        ];
                }
            });
        });
    };
    /**
     * Serialize this document to a base64 encoded string or data URI making up a
     * PDF file. For example:
     * ```js
     * const base64String = await pdfDoc.saveAsBase64()
     * base64String // => 'JVBERi0xLjcKJYGBgYEKC...'
     *
     * const base64DataUri = await pdfDoc.saveAsBase64({ dataUri: true })
     * base64DataUri // => 'data:application/pdf;base64,JVBERi0xLjcKJYGBgYEKC...'
     * ```
     *
     * @param options The options to be used when saving the document.
     * @returns Resolves with a base64 encoded string or data URI of the
     *          serialized document.
     */ PDFDocument.prototype.saveAsBase64 = function(options) {
        if (options === void 0) {
            options = {};
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var _a, dataUri, otherOptions, bytes, base64;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
                switch(_b.label){
                    case 0:
                        _a = options.dataUri, dataUri = _a === void 0 ? false : _a, otherOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__rest"])(options, [
                            "dataUri"
                        ]);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(dataUri, 'dataUri', [
                            'boolean'
                        ]);
                        return [
                            4 /*yield*/ ,
                            this.save(otherOptions)
                        ];
                    case 1:
                        bytes = _b.sent();
                        base64 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$base64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeToBase64"])(bytes);
                        return [
                            2 /*return*/ ,
                            dataUri ? "data:application/pdf;base64," + base64 : base64
                        ];
                }
            });
        });
    };
    PDFDocument.prototype.findPageForAnnotationRef = function(ref) {
        var pages = this.getPages();
        for(var idx = 0, len = pages.length; idx < len; idx++){
            var page = pages[idx];
            var annotations = page.node.Annots();
            if ((annotations === null || annotations === void 0 ? void 0 : annotations.indexOf(ref)) !== undefined) {
                return page;
            }
        }
        return undefined;
    };
    PDFDocument.prototype.embedAll = function(embeddables) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var idx, len;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        idx = 0, len = embeddables.length;
                        _a.label = 1;
                    case 1:
                        if (!(idx < len)) return [
                            3 /*break*/ ,
                            4
                        ];
                        return [
                            4 /*yield*/ ,
                            embeddables[idx].embed()
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
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    PDFDocument.prototype.updateInfoDict = function() {
        var pdfLib = "pdf-lib (https://github.com/Hopding/pdf-lib)";
        var now = new Date();
        var info = this.getInfoDict();
        this.setProducer(pdfLib);
        this.setModificationDate(now);
        if (!info.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Creator'))) this.setCreator(pdfLib);
        if (!info.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('CreationDate'))) this.setCreationDate(now);
    };
    PDFDocument.prototype.getInfoDict = function() {
        var existingInfo = this.context.lookup(this.context.trailerInfo.Info);
        if (existingInfo instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDict$3e$__["PDFDict"]) return existingInfo;
        var newInfo = this.context.obj({});
        this.context.trailerInfo.Info = this.context.register(newInfo);
        return newInfo;
    };
    PDFDocument.prototype.assertFontkit = function() {
        if (!this.fontkit) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontkitNotRegisteredError"]();
        return this.fontkit;
    };
    return PDFDocument;
}();
const __TURBOPACK__default__export__ = PDFDocument;
/* tslint:disable-next-line only-arrow-functions */ function assertIsLiteralOrHexString(pdfObject) {
    if (!(pdfObject instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFHexString$3e$__["PDFHexString"]) && !(pdfObject instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFString$3e$__["PDFString"])) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnexpectedObjectTypeError"]([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFHexString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFHexString$3e$__["PDFHexString"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFString$3e$__["PDFString"]
        ], pdfObject);
    }
} //# sourceMappingURL=PDFDocument.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFPageOptions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlendMode",
    ()=>BlendMode
]);
var BlendMode;
(function(BlendMode) {
    BlendMode["Normal"] = "Normal";
    BlendMode["Multiply"] = "Multiply";
    BlendMode["Screen"] = "Screen";
    BlendMode["Overlay"] = "Overlay";
    BlendMode["Darken"] = "Darken";
    BlendMode["Lighten"] = "Lighten";
    BlendMode["ColorDodge"] = "ColorDodge";
    BlendMode["ColorBurn"] = "ColorBurn";
    BlendMode["HardLight"] = "HardLight";
    BlendMode["SoftLight"] = "SoftLight";
    BlendMode["Difference"] = "Difference";
    BlendMode["Exclusion"] = "Exclusion";
})(BlendMode || (BlendMode = {})); //# sourceMappingURL=PDFPageOptions.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFPage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/operations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/operators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFDocument.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFEmbeddedPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFEmbeddedPage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFFont$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFFont.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFImage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPageOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFPageOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/rotations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$StandardFonts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/StandardFonts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFContentStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFContentStream$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFContentStream.js [app-client] (ecmascript) <export default as PDFContentStream>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFName.js [app-client] (ecmascript) <export default as PDFName>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/operators/PDFOperator.js [app-client] (ecmascript) <export default as PDFOperator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFPageLeaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFPageLeaf$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/structures/PDFPageLeaf.js [app-client] (ecmascript) <export default as PDFPageLeaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFRef$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFRef.js [app-client] (ecmascript) <export default as PDFRef>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDict$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFDict.js [app-client] (ecmascript) <export default as PDFDict>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFArray$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFArray.js [app-client] (ecmascript) <export default as PDFArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/validators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/strings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/objects.js [app-client] (ecmascript)");
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
/**
 * Represents a single page of a [[PDFDocument]].
 */ var PDFPage = function() {
    function PDFPage(leafNode, ref, doc) {
        this.fontSize = 24;
        this.fontColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0, 0, 0);
        this.lineHeight = 24;
        this.x = 0;
        this.y = 0;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(leafNode, 'leafNode', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFPageLeaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFPageLeaf$3e$__["PDFPageLeaf"],
                'PDFPageLeaf'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(ref, 'ref', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFRef$3e$__["PDFRef"],
                'PDFRef'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(doc, 'doc', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                'PDFDocument'
            ]
        ]);
        this.node = leafNode;
        this.ref = ref;
        this.doc = doc;
    }
    /**
     * Rotate this page by a multiple of 90 degrees. For example:
     * ```js
     * import { degrees } from 'pdf-lib'
     *
     * page.setRotation(degrees(-90))
     * page.setRotation(degrees(0))
     * page.setRotation(degrees(90))
     * page.setRotation(degrees(180))
     * page.setRotation(degrees(270))
     * ```
     * @param angle The angle to rotate this page.
     */ PDFPage.prototype.setRotation = function(angle) {
        var degreesAngle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDegrees"])(angle);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertMultiple"])(degreesAngle, 'degreesAngle', 90);
        this.node.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('Rotate'), this.doc.context.obj(degreesAngle));
    };
    /**
     * Get this page's rotation angle in degrees. For example:
     * ```js
     * const rotationAngle = page.getRotation().angle;
     * ```
     * @returns The rotation angle of the page in degrees (always a multiple of
     *          90 degrees).
     */ PDFPage.prototype.getRotation = function() {
        var Rotate = this.node.Rotate();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(Rotate ? Rotate.asNumber() : 0);
    };
    /**
     * Resize this page by increasing or decreasing its width and height. For
     * example:
     * ```js
     * page.setSize(250, 500)
     * page.setSize(page.getWidth() + 50, page.getHeight() + 100)
     * page.setSize(page.getWidth() - 50, page.getHeight() - 100)
     * ```
     *
     * Note that the PDF specification does not allow for pages to have explicit
     * widths and heights. Instead it defines the "size" of a page in terms of
     * five rectangles: the MediaBox, CropBox, BleedBox, TrimBox, and ArtBox. As a
     * result, this method cannot directly change the width and height of a page.
     * Instead, it works by adjusting these five boxes.
     *
     * This method performs the following steps:
     *   1. Set width & height of MediaBox.
     *   2. Set width & height of CropBox, if it has same dimensions as MediaBox.
     *   3. Set width & height of BleedBox, if it has same dimensions as MediaBox.
     *   4. Set width & height of TrimBox, if it has same dimensions as MediaBox.
     *   5. Set width & height of ArtBox, if it has same dimensions as MediaBox.
     *
     * This approach works well for most PDF documents as all PDF pages must
     * have a MediaBox, but relatively few have a CropBox, BleedBox, TrimBox, or
     * ArtBox. And when they do have these additional boxes, they often have the
     * same dimensions as the MediaBox. However, if you find this method does not
     * work for your document, consider setting the boxes directly:
     *   * [[PDFPage.setMediaBox]]
     *   * [[PDFPage.setCropBox]]
     *   * [[PDFPage.setBleedBox]]
     *   * [[PDFPage.setTrimBox]]
     *   * [[PDFPage.setArtBox]]
     *
     * @param width The new width of the page.
     * @param height The new height of the page.
     */ PDFPage.prototype.setSize = function(width, height) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(width, 'width', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(height, 'height', [
            'number'
        ]);
        var mediaBox = this.getMediaBox();
        this.setMediaBox(mediaBox.x, mediaBox.y, width, height);
        var cropBox = this.getCropBox();
        var bleedBox = this.getBleedBox();
        var trimBox = this.getTrimBox();
        var artBox = this.getArtBox();
        var hasCropBox = this.node.CropBox();
        var hasBleedBox = this.node.BleedBox();
        var hasTrimBox = this.node.TrimBox();
        var hasArtBox = this.node.ArtBox();
        if (hasCropBox && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectanglesAreEqual"])(cropBox, mediaBox)) {
            this.setCropBox(mediaBox.x, mediaBox.y, width, height);
        }
        if (hasBleedBox && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectanglesAreEqual"])(bleedBox, mediaBox)) {
            this.setBleedBox(mediaBox.x, mediaBox.y, width, height);
        }
        if (hasTrimBox && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectanglesAreEqual"])(trimBox, mediaBox)) {
            this.setTrimBox(mediaBox.x, mediaBox.y, width, height);
        }
        if (hasArtBox && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectanglesAreEqual"])(artBox, mediaBox)) {
            this.setArtBox(mediaBox.x, mediaBox.y, width, height);
        }
    };
    /**
     * Resize this page by increasing or decreasing its width. For example:
     * ```js
     * page.setWidth(250)
     * page.setWidth(page.getWidth() + 50)
     * page.setWidth(page.getWidth() - 50)
     * ```
     *
     * This method uses [[PDFPage.setSize]] to set the page's width.
     *
     * @param width The new width of the page.
     */ PDFPage.prototype.setWidth = function(width) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(width, 'width', [
            'number'
        ]);
        this.setSize(width, this.getSize().height);
    };
    /**
     * Resize this page by increasing or decreasing its height. For example:
     * ```js
     * page.setHeight(500)
     * page.setHeight(page.getWidth() + 100)
     * page.setHeight(page.getWidth() - 100)
     * ```
     *
     * This method uses [[PDFPage.setSize]] to set the page's height.
     *
     * @param height The new height of the page.
     */ PDFPage.prototype.setHeight = function(height) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(height, 'height', [
            'number'
        ]);
        this.setSize(this.getSize().width, height);
    };
    /**
     * Set the MediaBox of this page. For example:
     * ```js
     * const mediaBox = page.getMediaBox()
     *
     * page.setMediaBox(0, 0, 250, 500)
     * page.setMediaBox(mediaBox.x, mediaBox.y, 50, 100)
     * page.setMediaBox(15, 5, mediaBox.width - 50, mediaBox.height - 100)
     * ```
     *
     * See [[PDFPage.getMediaBox]] for details about what the MediaBox represents.
     *
     * @param x The x coordinate of the lower left corner of the new MediaBox.
     * @param y The y coordinate of the lower left corner of the new MediaBox.
     * @param width The width of the new MediaBox.
     * @param height The height of the new MediaBox.
     */ PDFPage.prototype.setMediaBox = function(x, y, width, height) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(x, 'x', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(y, 'y', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(width, 'width', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(height, 'height', [
            'number'
        ]);
        var mediaBox = this.doc.context.obj([
            x,
            y,
            x + width,
            y + height
        ]);
        this.node.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].MediaBox, mediaBox);
    };
    /**
     * Set the CropBox of this page. For example:
     * ```js
     * const cropBox = page.getCropBox()
     *
     * page.setCropBox(0, 0, 250, 500)
     * page.setCropBox(cropBox.x, cropBox.y, 50, 100)
     * page.setCropBox(15, 5, cropBox.width - 50, cropBox.height - 100)
     * ```
     *
     * See [[PDFPage.getCropBox]] for details about what the CropBox represents.
     *
     * @param x The x coordinate of the lower left corner of the new CropBox.
     * @param y The y coordinate of the lower left corner of the new CropBox.
     * @param width The width of the new CropBox.
     * @param height The height of the new CropBox.
     */ PDFPage.prototype.setCropBox = function(x, y, width, height) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(x, 'x', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(y, 'y', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(width, 'width', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(height, 'height', [
            'number'
        ]);
        var cropBox = this.doc.context.obj([
            x,
            y,
            x + width,
            y + height
        ]);
        this.node.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].CropBox, cropBox);
    };
    /**
     * Set the BleedBox of this page. For example:
     * ```js
     * const bleedBox = page.getBleedBox()
     *
     * page.setBleedBox(0, 0, 250, 500)
     * page.setBleedBox(bleedBox.x, bleedBox.y, 50, 100)
     * page.setBleedBox(15, 5, bleedBox.width - 50, bleedBox.height - 100)
     * ```
     *
     * See [[PDFPage.getBleedBox]] for details about what the BleedBox represents.
     *
     * @param x The x coordinate of the lower left corner of the new BleedBox.
     * @param y The y coordinate of the lower left corner of the new BleedBox.
     * @param width The width of the new BleedBox.
     * @param height The height of the new BleedBox.
     */ PDFPage.prototype.setBleedBox = function(x, y, width, height) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(x, 'x', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(y, 'y', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(width, 'width', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(height, 'height', [
            'number'
        ]);
        var bleedBox = this.doc.context.obj([
            x,
            y,
            x + width,
            y + height
        ]);
        this.node.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].BleedBox, bleedBox);
    };
    /**
     * Set the TrimBox of this page. For example:
     * ```js
     * const trimBox = page.getTrimBox()
     *
     * page.setTrimBox(0, 0, 250, 500)
     * page.setTrimBox(trimBox.x, trimBox.y, 50, 100)
     * page.setTrimBox(15, 5, trimBox.width - 50, trimBox.height - 100)
     * ```
     *
     * See [[PDFPage.getTrimBox]] for details about what the TrimBox represents.
     *
     * @param x The x coordinate of the lower left corner of the new TrimBox.
     * @param y The y coordinate of the lower left corner of the new TrimBox.
     * @param width The width of the new TrimBox.
     * @param height The height of the new TrimBox.
     */ PDFPage.prototype.setTrimBox = function(x, y, width, height) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(x, 'x', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(y, 'y', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(width, 'width', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(height, 'height', [
            'number'
        ]);
        var trimBox = this.doc.context.obj([
            x,
            y,
            x + width,
            y + height
        ]);
        this.node.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].TrimBox, trimBox);
    };
    /**
     * Set the ArtBox of this page. For example:
     * ```js
     * const artBox = page.getArtBox()
     *
     * page.setArtBox(0, 0, 250, 500)
     * page.setArtBox(artBox.x, artBox.y, 50, 100)
     * page.setArtBox(15, 5, artBox.width - 50, artBox.height - 100)
     * ```
     *
     * See [[PDFPage.getArtBox]] for details about what the ArtBox represents.
     *
     * @param x The x coordinate of the lower left corner of the new ArtBox.
     * @param y The y coordinate of the lower left corner of the new ArtBox.
     * @param width The width of the new ArtBox.
     * @param height The height of the new ArtBox.
     */ PDFPage.prototype.setArtBox = function(x, y, width, height) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(x, 'x', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(y, 'y', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(width, 'width', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(height, 'height', [
            'number'
        ]);
        var artBox = this.doc.context.obj([
            x,
            y,
            x + width,
            y + height
        ]);
        this.node.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].ArtBox, artBox);
    };
    /**
     * Get this page's width and height. For example:
     * ```js
     * const { width, height } = page.getSize()
     * ```
     *
     * This method uses [[PDFPage.getMediaBox]] to obtain the page's
     * width and height.
     *
     * @returns The width and height of the page.
     */ PDFPage.prototype.getSize = function() {
        var _a = this.getMediaBox(), width = _a.width, height = _a.height;
        return {
            width: width,
            height: height
        };
    };
    /**
     * Get this page's width. For example:
     * ```js
     * const width = page.getWidth()
     * ```
     *
     * This method uses [[PDFPage.getSize]] to obtain the page's size.
     *
     * @returns The width of the page.
     */ PDFPage.prototype.getWidth = function() {
        return this.getSize().width;
    };
    /**
     * Get this page's height. For example:
     * ```js
     * const height = page.getHeight()
     * ```
     *
     * This method uses [[PDFPage.getSize]] to obtain the page's size.
     *
     * @returns The height of the page.
     */ PDFPage.prototype.getHeight = function() {
        return this.getSize().height;
    };
    /**
     * Get the rectangle defining this page's MediaBox. For example:
     * ```js
     * const { x, y, width, height } = page.getMediaBox()
     * ```
     *
     * The MediaBox of a page defines the boundaries of the physical medium on
     * which the page is to be displayed/printed. It may include extended area
     * surrounding the page content for bleed marks, printing marks, etc...
     * It may also include areas close to the edges of the medium that cannot be
     * marked because of physical limitations of the output device. Content
     * falling outside this boundary may safely be discarded without affecting
     * the meaning of the PDF file.
     *
     * @returns An object defining the lower left corner of the MediaBox and its
     *          width & height.
     */ PDFPage.prototype.getMediaBox = function() {
        var mediaBox = this.node.MediaBox();
        return mediaBox.asRectangle();
    };
    /**
     * Get the rectangle defining this page's CropBox. For example:
     * ```js
     * const { x, y, width, height } = page.getCropBox()
     * ```
     *
     * The CropBox of a page defines the region to which the contents of the page
     * shall be clipped when displayed or printed. Unlike the other boxes, the
     * CropBox does not necessarily represent the physical page geometry. It
     * merely imposes clipping on the page contents.
     *
     * The CropBox's default value is the page's MediaBox.
     *
     * @returns An object defining the lower left corner of the CropBox and its
     *          width & height.
     */ PDFPage.prototype.getCropBox = function() {
        var _a;
        var cropBox = this.node.CropBox();
        return (_a = cropBox === null || cropBox === void 0 ? void 0 : cropBox.asRectangle()) !== null && _a !== void 0 ? _a : this.getMediaBox();
    };
    /**
     * Get the rectangle defining this page's BleedBox. For example:
     * ```js
     * const { x, y, width, height } = page.getBleedBox()
     * ```
     *
     * The BleedBox of a page defines the region to which the contents of the
     * page shall be clipped when output in a production environment. This may
     * include any extra bleed area needed to accommodate the physical
     * limitations of cutting, folding, and trimming equipment. The actual
     * printed page may include printing marks that fall outside the BleedBox.
     *
     * The BleedBox's default value is the page's CropBox.
     *
     * @returns An object defining the lower left corner of the BleedBox and its
     *          width & height.
     */ PDFPage.prototype.getBleedBox = function() {
        var _a;
        var bleedBox = this.node.BleedBox();
        return (_a = bleedBox === null || bleedBox === void 0 ? void 0 : bleedBox.asRectangle()) !== null && _a !== void 0 ? _a : this.getCropBox();
    };
    /**
     * Get the rectangle defining this page's TrimBox. For example:
     * ```js
     * const { x, y, width, height } = page.getTrimBox()
     * ```
     *
     * The TrimBox of a page defines the intended dimensions of the finished
     * page after trimming. It may be smaller than the MediaBox to allow for
     * production-related content, such as printing instructions, cut marks, or
     * color bars.
     *
     * The TrimBox's default value is the page's CropBox.
     *
     * @returns An object defining the lower left corner of the TrimBox and its
     *          width & height.
     */ PDFPage.prototype.getTrimBox = function() {
        var _a;
        var trimBox = this.node.TrimBox();
        return (_a = trimBox === null || trimBox === void 0 ? void 0 : trimBox.asRectangle()) !== null && _a !== void 0 ? _a : this.getCropBox();
    };
    /**
     * Get the rectangle defining this page's ArtBox. For example:
     * ```js
     * const { x, y, width, height } = page.getArtBox()
     * ```
     *
     * The ArtBox of a page defines the extent of the page's meaningful content
     * (including potential white space).
     *
     * The ArtBox's default value is the page's CropBox.
     *
     * @returns An object defining the lower left corner of the ArtBox and its
     *          width & height.
     */ PDFPage.prototype.getArtBox = function() {
        var _a;
        var artBox = this.node.ArtBox();
        return (_a = artBox === null || artBox === void 0 ? void 0 : artBox.asRectangle()) !== null && _a !== void 0 ? _a : this.getCropBox();
    };
    /**
     * Translate this page's content to a new location on the page. This operation
     * is often useful after resizing the page with [[setSize]]. For example:
     * ```js
     * // Add 50 units of whitespace to the top and right of the page
     * page.setSize(page.getWidth() + 50, page.getHeight() + 50)
     *
     * // Move the page's content from the lower-left corner of the page
     * // to the top-right corner.
     * page.translateContent(50, 50)
     *
     * // Now there are 50 units of whitespace to the left and bottom of the page
     * ```
     * See also: [[resetPosition]]
     * @param x The new position on the x-axis for this page's content.
     * @param y The new position on the y-axis for this page's content.
     */ PDFPage.prototype.translateContent = function(x, y) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(x, 'x', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(y, 'y', [
            'number'
        ]);
        this.node.normalize();
        this.getContentStream();
        var start = this.createContentStream((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushGraphicsState"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translate"])(x, y));
        var startRef = this.doc.context.register(start);
        var end = this.createContentStream((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popGraphicsState"])());
        var endRef = this.doc.context.register(end);
        this.node.wrapContentStreams(startRef, endRef);
    };
    /**
     * Scale the size, content, and annotations of a page.
     *
     * For example:
     * ```js
     * page.scale(0.5, 0.5);
     * ```
     *
     * @param x The factor by which the width for the page should be scaled
     *          (e.g. `0.5` is 50%).
     * @param y The factor by which the height for the page should be scaled
     *          (e.g. `2.0` is 200%).
     */ PDFPage.prototype.scale = function(x, y) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(x, 'x', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(y, 'y', [
            'number'
        ]);
        this.setSize(this.getWidth() * x, this.getHeight() * y);
        this.scaleContent(x, y);
        this.scaleAnnotations(x, y);
    };
    /**
     * Scale the content of a page. This is useful after resizing an existing
     * page. This scales only the content, not the annotations.
     *
     * For example:
     * ```js
     * // Bisect the size of the page
     * page.setSize(page.getWidth() / 2, page.getHeight() / 2);
     *
     * // Scale the content of the page down by 50% in x and y
     * page.scaleContent(0.5, 0.5);
     * ```
     * See also: [[scaleAnnotations]]
     * @param x The factor by which the x-axis for the content should be scaled
     *          (e.g. `0.5` is 50%).
     * @param y The factor by which the y-axis for the content should be scaled
     *          (e.g. `2.0` is 200%).
     */ PDFPage.prototype.scaleContent = function(x, y) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(x, 'x', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(y, 'y', [
            'number'
        ]);
        this.node.normalize();
        this.getContentStream();
        var start = this.createContentStream((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushGraphicsState"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(x, y));
        var startRef = this.doc.context.register(start);
        var end = this.createContentStream((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popGraphicsState"])());
        var endRef = this.doc.context.register(end);
        this.node.wrapContentStreams(startRef, endRef);
    };
    /**
     * Scale the annotations of a page. This is useful if you want to scale a
     * page with comments or other annotations.
     * ```js
     * // Scale the content of the page down by 50% in x and y
     * page.scaleContent(0.5, 0.5);
     *
     * // Scale the content of the page down by 50% in x and y
     * page.scaleAnnotations(0.5, 0.5);
     * ```
     * See also: [[scaleContent]]
     * @param x The factor by which the x-axis for the annotations should be
     *          scaled (e.g. `0.5` is 50%).
     * @param y The factor by which the y-axis for the annotations should be
     *          scaled (e.g. `2.0` is 200%).
     */ PDFPage.prototype.scaleAnnotations = function(x, y) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(x, 'x', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(y, 'y', [
            'number'
        ]);
        var annots = this.node.Annots();
        if (!annots) return;
        for(var idx = 0; idx < annots.size(); idx++){
            var annot = annots.lookup(idx);
            if (annot instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFDict$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDict$3e$__["PDFDict"]) this.scaleAnnot(annot, x, y);
        }
    };
    /**
     * Reset the x and y coordinates of this page to `(0, 0)`. This operation is
     * often useful after calling [[translateContent]]. For example:
     * ```js
     * // Shift the page's contents up and to the right by 50 units
     * page.translateContent(50, 50)
     *
     * // This text will shifted - it will be drawn at (50, 50)
     * page.drawText('I am shifted')
     *
     * // Move back to (0, 0)
     * page.resetPosition()
     *
     * // This text will not be shifted - it will be drawn at (0, 0)
     * page.drawText('I am not shifted')
     * ```
     */ PDFPage.prototype.resetPosition = function() {
        this.getContentStream(false);
        this.x = 0;
        this.y = 0;
    };
    /**
     * Choose a default font for this page. The default font will be used whenever
     * text is drawn on this page and no font is specified. For example:
     * ```js
     * import { StandardFonts } from 'pdf-lib'
     *
     * const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
     * const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
     * const courierFont = await pdfDoc.embedFont(StandardFonts.Courier)
     *
     * const page = pdfDoc.addPage()
     *
     * page.setFont(helveticaFont)
     * page.drawText('I will be drawn in Helvetica')
     *
     * page.setFont(timesRomanFont)
     * page.drawText('I will be drawn in Courier', { font: courierFont })
     * ```
     * @param font The default font to be used when drawing text on this page.
     */ PDFPage.prototype.setFont = function(font) {
        // TODO: Reuse image Font name if we've already added this image to Resources.Fonts
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(font, 'font', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFFont$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                'PDFFont'
            ]
        ]);
        this.font = font;
        this.fontKey = this.node.newFontDictionary(this.font.name, this.font.ref);
    };
    /**
     * Choose a default font size for this page. The default font size will be
     * used whenever text is drawn on this page and no font size is specified.
     * For example:
     * ```js
     * page.setFontSize(12)
     * page.drawText('I will be drawn in size 12')
     *
     * page.setFontSize(36)
     * page.drawText('I will be drawn in size 24', { fontSize: 24 })
     * ```
     * @param fontSize The default font size to be used when drawing text on this
     *                 page.
     */ PDFPage.prototype.setFontSize = function(fontSize) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(fontSize, 'fontSize', [
            'number'
        ]);
        this.fontSize = fontSize;
    };
    /**
     * Choose a default font color for this page. The default font color will be
     * used whenever text is drawn on this page and no font color is specified.
     * For example:
     * ```js
     * import { rgb, cmyk, grayscale } from 'pdf-lib'
     *
     * page.setFontColor(rgb(0.97, 0.02, 0.97))
     * page.drawText('I will be drawn in pink')
     *
     * page.setFontColor(cmyk(0.4, 0.7, 0.39, 0.15))
     * page.drawText('I will be drawn in gray', { color: grayscale(0.5) })
     * ```
     * @param fontColor The default font color to be used when drawing text on
     *                  this page.
     */ PDFPage.prototype.setFontColor = function(fontColor) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(fontColor, 'fontColor', [
            [
                Object,
                'Color'
            ]
        ]);
        this.fontColor = fontColor;
    };
    /**
     * Choose a default line height for this page. The default line height will be
     * used whenever text is drawn on this page and no line height is specified.
     * For example:
     * ```js
     * page.setLineHeight(12);
     * page.drawText('These lines will be vertically \n separated by 12 units')
     *
     * page.setLineHeight(36);
     * page.drawText('These lines will be vertically \n separated by 24 units', {
     *   lineHeight: 24
     * })
     * ```
     * @param lineHeight The default line height to be used when drawing text on
     *                   this page.
     */ PDFPage.prototype.setLineHeight = function(lineHeight) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(lineHeight, 'lineHeight', [
            'number'
        ]);
        this.lineHeight = lineHeight;
    };
    /**
     * Get the default position of this page. For example:
     * ```js
     * const { x, y } = page.getPosition()
     * ```
     * @returns The default position of the page.
     */ PDFPage.prototype.getPosition = function() {
        return {
            x: this.x,
            y: this.y
        };
    };
    /**
     * Get the default x coordinate of this page. For example:
     * ```js
     * const x = page.getX()
     * ```
     * @returns The default x coordinate of the page.
     */ PDFPage.prototype.getX = function() {
        return this.x;
    };
    /**
     * Get the default y coordinate of this page. For example:
     * ```js
     * const y = page.getY()
     * ```
     * @returns The default y coordinate of the page.
     */ PDFPage.prototype.getY = function() {
        return this.y;
    };
    /**
     * Change the default position of this page. For example:
     * ```js
     * page.moveTo(0, 0)
     * page.drawText('I will be drawn at the origin')
     *
     * page.moveTo(0, 25)
     * page.drawText('I will be drawn 25 units up')
     *
     * page.moveTo(25, 25)
     * page.drawText('I will be drawn 25 units up and 25 units to the right')
     * ```
     * @param x The new default position on the x-axis for this page.
     * @param y The new default position on the y-axis for this page.
     */ PDFPage.prototype.moveTo = function(x, y) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(x, 'x', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(y, 'y', [
            'number'
        ]);
        this.x = x;
        this.y = y;
    };
    /**
     * Change the default position of this page to be further down the y-axis.
     * For example:
     * ```js
     * page.moveTo(50, 50)
     * page.drawText('I will be drawn at (50, 50)')
     *
     * page.moveDown(10)
     * page.drawText('I will be drawn at (50, 40)')
     * ```
     * @param yDecrease The amount by which the page's default position along the
     *                  y-axis should be decreased.
     */ PDFPage.prototype.moveDown = function(yDecrease) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(yDecrease, 'yDecrease', [
            'number'
        ]);
        this.y -= yDecrease;
    };
    /**
     * Change the default position of this page to be further up the y-axis.
     * For example:
     * ```js
     * page.moveTo(50, 50)
     * page.drawText('I will be drawn at (50, 50)')
     *
     * page.moveUp(10)
     * page.drawText('I will be drawn at (50, 60)')
     * ```
     * @param yIncrease The amount by which the page's default position along the
     *                  y-axis should be increased.
     */ PDFPage.prototype.moveUp = function(yIncrease) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(yIncrease, 'yIncrease', [
            'number'
        ]);
        this.y += yIncrease;
    };
    /**
     * Change the default position of this page to be further left on the x-axis.
     * For example:
     * ```js
     * page.moveTo(50, 50)
     * page.drawText('I will be drawn at (50, 50)')
     *
     * page.moveLeft(10)
     * page.drawText('I will be drawn at (40, 50)')
     * ```
     * @param xDecrease The amount by which the page's default position along the
     *                  x-axis should be decreased.
     */ PDFPage.prototype.moveLeft = function(xDecrease) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(xDecrease, 'xDecrease', [
            'number'
        ]);
        this.x -= xDecrease;
    };
    /**
     * Change the default position of this page to be further right on the y-axis.
     * For example:
     * ```js
     * page.moveTo(50, 50)
     * page.drawText('I will be drawn at (50, 50)')
     *
     * page.moveRight(10)
     * page.drawText('I will be drawn at (60, 50)')
     * ```
     * @param xIncrease The amount by which the page's default position along the
     *                  x-axis should be increased.
     */ PDFPage.prototype.moveRight = function(xIncrease) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(xIncrease, 'xIncrease', [
            'number'
        ]);
        this.x += xIncrease;
    };
    /**
     * Push one or more operators to the end of this page's current content
     * stream. For example:
     * ```js
     * import {
     *   pushGraphicsState,
     *   moveTo,
     *   lineTo,
     *   closePath,
     *   setFillingColor,
     *   rgb,
     *   fill,
     *   popGraphicsState,
     * } from 'pdf-lib'
     *
     * // Draw a green triangle in the lower-left corner of the page
     * page.pushOperators(
     *   pushGraphicsState(),
     *   moveTo(0, 0),
     *   lineTo(100, 0),
     *   lineTo(50, 100),
     *   closePath(),
     *   setFillingColor(rgb(0.0, 1.0, 0.0)),
     *   fill(),
     *   popGraphicsState(),
     * )
     * ```
     * @param operator The operators to be pushed.
     */ PDFPage.prototype.pushOperators = function() {
        var operator = [];
        for(var _i = 0; _i < arguments.length; _i++){
            operator[_i] = arguments[_i];
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEachIs"])(operator, 'operator', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$operators$2f$PDFOperator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFOperator$3e$__["PDFOperator"],
                'PDFOperator'
            ]
        ]);
        var contentStream = this.getContentStream();
        contentStream.push.apply(contentStream, operator);
    };
    /**
     * Draw one or more lines of text on this page. For example:
     * ```js
     * import { StandardFonts, rgb } from 'pdf-lib'
     *
     * const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
     * const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
     *
     * const page = pdfDoc.addPage()
     *
     * page.setFont(helveticaFont)
     *
     * page.moveTo(5, 200)
     * page.drawText('The Life of an Egg', { size: 36 })
     *
     * page.moveDown(36)
     * page.drawText('An Epic Tale of Woe', { size: 30 })
     *
     * page.drawText(
     *   `Humpty Dumpty sat on a wall \n` +
     *   `Humpty Dumpty had a great fall; \n` +
     *   `All the king's horses and all the king's men \n` +
     *   `Couldn't put Humpty together again. \n`,
     *   {
     *     x: 25,
     *     y: 100,
     *     font: timesRomanFont,
     *     size: 24,
     *     color: rgb(1, 0, 0),
     *     lineHeight: 24,
     *     opacity: 0.75,
     *   },
     * )
     * ```
     * @param text The text to be drawn.
     * @param options The options to be used when drawing the text.
     */ PDFPage.prototype.drawText = function(text, options) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (options === void 0) {
            options = {};
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(text, 'text', [
            'string'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.color, 'options.color', [
            [
                Object,
                'Color'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRangeOrUndefined"])(options.opacity, 'opacity.opacity', 0, 1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.font, 'options.font', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFFont$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                'PDFFont'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.size, 'options.size', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.rotate, 'options.rotate', [
            [
                Object,
                'Rotation'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.xSkew, 'options.xSkew', [
            [
                Object,
                'Rotation'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.ySkew, 'options.ySkew', [
            [
                Object,
                'Rotation'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.x, 'options.x', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.y, 'options.y', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.lineHeight, 'options.lineHeight', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.maxWidth, 'options.maxWidth', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.wordBreaks, 'options.wordBreaks', [
            Array
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsOneOfOrUndefined"])(options.blendMode, 'options.blendMode', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPageOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlendMode"]);
        var _h = this.setOrEmbedFont(options.font), oldFont = _h.oldFont, newFont = _h.newFont, newFontKey = _h.newFontKey;
        var fontSize = options.size || this.fontSize;
        var wordBreaks = options.wordBreaks || this.doc.defaultWordBreaks;
        var textWidth = function(t) {
            return newFont.widthOfTextAtSize(t, fontSize);
        };
        var lines = options.maxWidth === undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineSplit"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanText"])(text)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["breakTextIntoLines"])(text, wordBreaks, options.maxWidth, textWidth);
        var encodedLines = new Array(lines.length);
        for(var idx = 0, len = lines.length; idx < len; idx++){
            encodedLines[idx] = newFont.encodeText(lines[idx]);
        }
        var graphicsStateKey = this.maybeEmbedGraphicsState({
            opacity: options.opacity,
            blendMode: options.blendMode
        });
        var contentStream = this.getContentStream();
        contentStream.push.apply(contentStream, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawLinesOfText"])(encodedLines, {
            color: (_a = options.color) !== null && _a !== void 0 ? _a : this.fontColor,
            font: newFontKey,
            size: fontSize,
            rotate: (_b = options.rotate) !== null && _b !== void 0 ? _b : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
            xSkew: (_c = options.xSkew) !== null && _c !== void 0 ? _c : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
            ySkew: (_d = options.ySkew) !== null && _d !== void 0 ? _d : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
            x: (_e = options.x) !== null && _e !== void 0 ? _e : this.x,
            y: (_f = options.y) !== null && _f !== void 0 ? _f : this.y,
            lineHeight: (_g = options.lineHeight) !== null && _g !== void 0 ? _g : this.lineHeight,
            graphicsState: graphicsStateKey
        }));
        if (options.font) {
            if (oldFont) this.setFont(oldFont);
            else this.resetFont();
        }
    };
    /**
     * Draw an image on this page. For example:
     * ```js
     * import { degrees } from 'pdf-lib'
     *
     * const jpgUrl = 'https://pdf-lib.js.org/assets/cat_riding_unicorn.jpg'
     * const jpgImageBytes = await fetch(jpgUrl).then((res) => res.arrayBuffer())
     *
     * const jpgImage = await pdfDoc.embedJpg(jpgImageBytes)
     * const jpgDims = jpgImage.scale(0.5)
     *
     * const page = pdfDoc.addPage()
     *
     * page.drawImage(jpgImage, {
     *   x: 25,
     *   y: 25,
     *   width: jpgDims.width,
     *   height: jpgDims.height,
     *   rotate: degrees(30),
     *   opacity: 0.75,
     * })
     * ```
     * @param image The image to be drawn.
     * @param options The options to be used when drawing the image.
     */ PDFPage.prototype.drawImage = function(image, options) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (options === void 0) {
            options = {};
        }
        // TODO: Reuse image XObject name if we've already added this image to Resources.XObjects
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(image, 'image', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                'PDFImage'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.x, 'options.x', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.y, 'options.y', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.width, 'options.width', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.height, 'options.height', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.rotate, 'options.rotate', [
            [
                Object,
                'Rotation'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.xSkew, 'options.xSkew', [
            [
                Object,
                'Rotation'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.ySkew, 'options.ySkew', [
            [
                Object,
                'Rotation'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRangeOrUndefined"])(options.opacity, 'opacity.opacity', 0, 1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsOneOfOrUndefined"])(options.blendMode, 'options.blendMode', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPageOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlendMode"]);
        var xObjectKey = this.node.newXObject('Image', image.ref);
        var graphicsStateKey = this.maybeEmbedGraphicsState({
            opacity: options.opacity,
            blendMode: options.blendMode
        });
        var contentStream = this.getContentStream();
        contentStream.push.apply(contentStream, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawImage"])(xObjectKey, {
            x: (_a = options.x) !== null && _a !== void 0 ? _a : this.x,
            y: (_b = options.y) !== null && _b !== void 0 ? _b : this.y,
            width: (_c = options.width) !== null && _c !== void 0 ? _c : image.size().width,
            height: (_d = options.height) !== null && _d !== void 0 ? _d : image.size().height,
            rotate: (_e = options.rotate) !== null && _e !== void 0 ? _e : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
            xSkew: (_f = options.xSkew) !== null && _f !== void 0 ? _f : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
            ySkew: (_g = options.ySkew) !== null && _g !== void 0 ? _g : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
            graphicsState: graphicsStateKey
        }));
    };
    /**
     * Draw an embedded PDF page on this page. For example:
     * ```js
     * import { degrees } from 'pdf-lib'
     *
     * const pdfDoc = await PDFDocument.create()
     * const page = pdfDoc.addPage()
     *
     * const sourcePdfUrl = 'https://pdf-lib.js.org/assets/with_large_page_count.pdf'
     * const sourcePdf = await fetch(sourcePdfUrl).then((res) => res.arrayBuffer())
     *
     * // Embed page 74 from the PDF
     * const [embeddedPage] = await pdfDoc.embedPdf(sourcePdf, 73)
     *
     * page.drawPage(embeddedPage, {
     *   x: 250,
     *   y: 200,
     *   xScale: 0.5,
     *   yScale: 0.5,
     *   rotate: degrees(30),
     *   opacity: 0.75,
     * })
     * ```
     *
     * The `options` argument accepts both `width`/`height` and `xScale`/`yScale`
     * as options. Since each of these options defines the size of the drawn page,
     * if both options are given, `width` and `height` take precedence and the
     * corresponding scale variants are ignored.
     *
     * @param embeddedPage The embedded page to be drawn.
     * @param options The options to be used when drawing the embedded page.
     */ PDFPage.prototype.drawPage = function(embeddedPage, options) {
        var _a, _b, _c, _d, _e;
        if (options === void 0) {
            options = {};
        }
        // TODO: Reuse embeddedPage XObject name if we've already added this embeddedPage to Resources.XObjects
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(embeddedPage, 'embeddedPage', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFEmbeddedPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                'PDFEmbeddedPage'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.x, 'options.x', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.y, 'options.y', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.xScale, 'options.xScale', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.yScale, 'options.yScale', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.width, 'options.width', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.height, 'options.height', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.rotate, 'options.rotate', [
            [
                Object,
                'Rotation'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.xSkew, 'options.xSkew', [
            [
                Object,
                'Rotation'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.ySkew, 'options.ySkew', [
            [
                Object,
                'Rotation'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRangeOrUndefined"])(options.opacity, 'opacity.opacity', 0, 1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsOneOfOrUndefined"])(options.blendMode, 'options.blendMode', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPageOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlendMode"]);
        var xObjectKey = this.node.newXObject('EmbeddedPdfPage', embeddedPage.ref);
        var graphicsStateKey = this.maybeEmbedGraphicsState({
            opacity: options.opacity,
            blendMode: options.blendMode
        });
        // prettier-ignore
        var xScale = options.width !== undefined ? options.width / embeddedPage.width : options.xScale !== undefined ? options.xScale : 1;
        // prettier-ignore
        var yScale = options.height !== undefined ? options.height / embeddedPage.height : options.yScale !== undefined ? options.yScale : 1;
        var contentStream = this.getContentStream();
        contentStream.push.apply(contentStream, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawPage"])(xObjectKey, {
            x: (_a = options.x) !== null && _a !== void 0 ? _a : this.x,
            y: (_b = options.y) !== null && _b !== void 0 ? _b : this.y,
            xScale: xScale,
            yScale: yScale,
            rotate: (_c = options.rotate) !== null && _c !== void 0 ? _c : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
            xSkew: (_d = options.xSkew) !== null && _d !== void 0 ? _d : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
            ySkew: (_e = options.ySkew) !== null && _e !== void 0 ? _e : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
            graphicsState: graphicsStateKey
        }));
    };
    /**
     * Draw an SVG path on this page. For example:
     * ```js
     * import { rgb } from 'pdf-lib'
     *
     * const svgPath = 'M 0,20 L 100,160 Q 130,200 150,120 C 190,-40 200,200 300,150 L 400,90'
     *
     * // Draw path as black line
     * page.drawSvgPath(svgPath, { x: 25, y: 75 })
     *
     * // Change border style and opacity
     * page.drawSvgPath(svgPath, {
     *   x: 25,
     *   y: 275,
     *   borderColor: rgb(0.5, 0.5, 0.5),
     *   borderWidth: 2,
     *   borderOpacity: 0.75,
     * })
     *
     * // Set fill color and opacity
     * page.drawSvgPath(svgPath, {
     *   x: 25,
     *   y: 475,
     *   color: rgb(1.0, 0, 0),
     *   opacity: 0.75,
     * })
     *
     * // Draw 50% of original size
     * page.drawSvgPath(svgPath, {
     *   x: 25,
     *   y: 675,
     *   scale: 0.5,
     * })
     * ```
     * @param path The SVG path to be drawn.
     * @param options The options to be used when drawing the SVG path.
     */ PDFPage.prototype.drawSvgPath = function(path, options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        if (options === void 0) {
            options = {};
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(path, 'path', [
            'string'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.x, 'options.x', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.y, 'options.y', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.scale, 'options.scale', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.rotate, 'options.rotate', [
            [
                Object,
                'Rotation'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.borderWidth, 'options.borderWidth', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.color, 'options.color', [
            [
                Object,
                'Color'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRangeOrUndefined"])(options.opacity, 'opacity.opacity', 0, 1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.borderColor, 'options.borderColor', [
            [
                Object,
                'Color'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.borderDashArray, 'options.borderDashArray', [
            Array
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.borderDashPhase, 'options.borderDashPhase', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsOneOfOrUndefined"])(options.borderLineCap, 'options.borderLineCap', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineCapStyle"]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRangeOrUndefined"])(options.borderOpacity, 'options.borderOpacity', 0, 1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsOneOfOrUndefined"])(options.blendMode, 'options.blendMode', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPageOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlendMode"]);
        var graphicsStateKey = this.maybeEmbedGraphicsState({
            opacity: options.opacity,
            borderOpacity: options.borderOpacity,
            blendMode: options.blendMode
        });
        if (!('color' in options) && !('borderColor' in options)) {
            options.borderColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0, 0, 0);
        }
        var contentStream = this.getContentStream();
        contentStream.push.apply(contentStream, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawSvgPath"])(path, {
            x: (_a = options.x) !== null && _a !== void 0 ? _a : this.x,
            y: (_b = options.y) !== null && _b !== void 0 ? _b : this.y,
            scale: options.scale,
            rotate: (_c = options.rotate) !== null && _c !== void 0 ? _c : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
            color: (_d = options.color) !== null && _d !== void 0 ? _d : undefined,
            borderColor: (_e = options.borderColor) !== null && _e !== void 0 ? _e : undefined,
            borderWidth: (_f = options.borderWidth) !== null && _f !== void 0 ? _f : 0,
            borderDashArray: (_g = options.borderDashArray) !== null && _g !== void 0 ? _g : undefined,
            borderDashPhase: (_h = options.borderDashPhase) !== null && _h !== void 0 ? _h : undefined,
            borderLineCap: (_j = options.borderLineCap) !== null && _j !== void 0 ? _j : undefined,
            graphicsState: graphicsStateKey
        }));
    };
    /**
     * Draw a line on this page. For example:
     * ```js
     * import { rgb } from 'pdf-lib'
     *
     * page.drawLine({
     *   start: { x: 25, y: 75 },
     *   end: { x: 125, y: 175 },
     *   thickness: 2,
     *   color: rgb(0.75, 0.2, 0.2),
     *   opacity: 0.75,
     * })
     * ```
     * @param options The options to be used when drawing the line.
     */ PDFPage.prototype.drawLine = function(options) {
        var _a, _b, _c, _d, _e;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(options.start, 'options.start', [
            [
                Object,
                '{ x: number, y: number }'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(options.end, 'options.end', [
            [
                Object,
                '{ x: number, y: number }'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(options.start.x, 'options.start.x', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(options.start.y, 'options.start.y', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(options.end.x, 'options.end.x', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(options.end.y, 'options.end.y', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.thickness, 'options.thickness', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.color, 'options.color', [
            [
                Object,
                'Color'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.dashArray, 'options.dashArray', [
            Array
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.dashPhase, 'options.dashPhase', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsOneOfOrUndefined"])(options.lineCap, 'options.lineCap', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineCapStyle"]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRangeOrUndefined"])(options.opacity, 'opacity.opacity', 0, 1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsOneOfOrUndefined"])(options.blendMode, 'options.blendMode', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPageOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlendMode"]);
        var graphicsStateKey = this.maybeEmbedGraphicsState({
            borderOpacity: options.opacity,
            blendMode: options.blendMode
        });
        if (!('color' in options)) {
            options.color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0, 0, 0);
        }
        var contentStream = this.getContentStream();
        contentStream.push.apply(contentStream, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawLine"])({
            start: options.start,
            end: options.end,
            thickness: (_a = options.thickness) !== null && _a !== void 0 ? _a : 1,
            color: (_b = options.color) !== null && _b !== void 0 ? _b : undefined,
            dashArray: (_c = options.dashArray) !== null && _c !== void 0 ? _c : undefined,
            dashPhase: (_d = options.dashPhase) !== null && _d !== void 0 ? _d : undefined,
            lineCap: (_e = options.lineCap) !== null && _e !== void 0 ? _e : undefined,
            graphicsState: graphicsStateKey
        }));
    };
    /**
     * Draw a rectangle on this page. For example:
     * ```js
     * import { degrees, grayscale, rgb } from 'pdf-lib'
     *
     * page.drawRectangle({
     *   x: 25,
     *   y: 75,
     *   width: 250,
     *   height: 75,
     *   rotate: degrees(-15),
     *   borderWidth: 5,
     *   borderColor: grayscale(0.5),
     *   color: rgb(0.75, 0.2, 0.2),
     *   opacity: 0.5,
     *   borderOpacity: 0.75,
     * })
     * ```
     * @param options The options to be used when drawing the rectangle.
     */ PDFPage.prototype.drawRectangle = function(options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        if (options === void 0) {
            options = {};
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.x, 'options.x', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.y, 'options.y', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.width, 'options.width', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.height, 'options.height', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.rotate, 'options.rotate', [
            [
                Object,
                'Rotation'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.xSkew, 'options.xSkew', [
            [
                Object,
                'Rotation'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.ySkew, 'options.ySkew', [
            [
                Object,
                'Rotation'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.borderWidth, 'options.borderWidth', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.color, 'options.color', [
            [
                Object,
                'Color'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRangeOrUndefined"])(options.opacity, 'opacity.opacity', 0, 1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.borderColor, 'options.borderColor', [
            [
                Object,
                'Color'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.borderDashArray, 'options.borderDashArray', [
            Array
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.borderDashPhase, 'options.borderDashPhase', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsOneOfOrUndefined"])(options.borderLineCap, 'options.borderLineCap', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineCapStyle"]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRangeOrUndefined"])(options.borderOpacity, 'options.borderOpacity', 0, 1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsOneOfOrUndefined"])(options.blendMode, 'options.blendMode', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPageOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlendMode"]);
        var graphicsStateKey = this.maybeEmbedGraphicsState({
            opacity: options.opacity,
            borderOpacity: options.borderOpacity,
            blendMode: options.blendMode
        });
        if (!('color' in options) && !('borderColor' in options)) {
            options.color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0, 0, 0);
        }
        var contentStream = this.getContentStream();
        contentStream.push.apply(contentStream, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawRectangle"])({
            x: (_a = options.x) !== null && _a !== void 0 ? _a : this.x,
            y: (_b = options.y) !== null && _b !== void 0 ? _b : this.y,
            width: (_c = options.width) !== null && _c !== void 0 ? _c : 150,
            height: (_d = options.height) !== null && _d !== void 0 ? _d : 100,
            rotate: (_e = options.rotate) !== null && _e !== void 0 ? _e : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
            xSkew: (_f = options.xSkew) !== null && _f !== void 0 ? _f : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
            ySkew: (_g = options.ySkew) !== null && _g !== void 0 ? _g : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
            borderWidth: (_h = options.borderWidth) !== null && _h !== void 0 ? _h : 0,
            color: (_j = options.color) !== null && _j !== void 0 ? _j : undefined,
            borderColor: (_k = options.borderColor) !== null && _k !== void 0 ? _k : undefined,
            borderDashArray: (_l = options.borderDashArray) !== null && _l !== void 0 ? _l : undefined,
            borderDashPhase: (_m = options.borderDashPhase) !== null && _m !== void 0 ? _m : undefined,
            graphicsState: graphicsStateKey,
            borderLineCap: (_o = options.borderLineCap) !== null && _o !== void 0 ? _o : undefined
        }));
    };
    /**
     * Draw a square on this page. For example:
     * ```js
     * import { degrees, grayscale, rgb } from 'pdf-lib'
     *
     * page.drawSquare({
     *   x: 25,
     *   y: 75,
     *   size: 100,
     *   rotate: degrees(-15),
     *   borderWidth: 5,
     *   borderColor: grayscale(0.5),
     *   color: rgb(0.75, 0.2, 0.2),
     *   opacity: 0.5,
     *   borderOpacity: 0.75,
     * })
     * ```
     * @param options The options to be used when drawing the square.
     */ PDFPage.prototype.drawSquare = function(options) {
        if (options === void 0) {
            options = {};
        }
        var size = options.size;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(size, 'size', [
            'number'
        ]);
        this.drawRectangle((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, options), {
            width: size,
            height: size
        }));
    };
    /**
     * Draw an ellipse on this page. For example:
     * ```js
     * import { grayscale, rgb } from 'pdf-lib'
     *
     * page.drawEllipse({
     *   x: 200,
     *   y: 75,
     *   xScale: 100,
     *   yScale: 50,
     *   borderWidth: 5,
     *   borderColor: grayscale(0.5),
     *   color: rgb(0.75, 0.2, 0.2),
     *   opacity: 0.5,
     *   borderOpacity: 0.75,
     * })
     * ```
     * @param options The options to be used when drawing the ellipse.
     */ PDFPage.prototype.drawEllipse = function(options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        if (options === void 0) {
            options = {};
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.x, 'options.x', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.y, 'options.y', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.xScale, 'options.xScale', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.yScale, 'options.yScale', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.rotate, 'options.rotate', [
            [
                Object,
                'Rotation'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.color, 'options.color', [
            [
                Object,
                'Color'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRangeOrUndefined"])(options.opacity, 'opacity.opacity', 0, 1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.borderColor, 'options.borderColor', [
            [
                Object,
                'Color'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRangeOrUndefined"])(options.borderOpacity, 'options.borderOpacity', 0, 1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.borderWidth, 'options.borderWidth', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.borderDashArray, 'options.borderDashArray', [
            Array
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(options.borderDashPhase, 'options.borderDashPhase', [
            'number'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsOneOfOrUndefined"])(options.borderLineCap, 'options.borderLineCap', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineCapStyle"]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsOneOfOrUndefined"])(options.blendMode, 'options.blendMode', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPageOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlendMode"]);
        var graphicsStateKey = this.maybeEmbedGraphicsState({
            opacity: options.opacity,
            borderOpacity: options.borderOpacity,
            blendMode: options.blendMode
        });
        if (!('color' in options) && !('borderColor' in options)) {
            options.color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0, 0, 0);
        }
        var contentStream = this.getContentStream();
        contentStream.push.apply(contentStream, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawEllipse"])({
            x: (_a = options.x) !== null && _a !== void 0 ? _a : this.x,
            y: (_b = options.y) !== null && _b !== void 0 ? _b : this.y,
            xScale: (_c = options.xScale) !== null && _c !== void 0 ? _c : 100,
            yScale: (_d = options.yScale) !== null && _d !== void 0 ? _d : 100,
            rotate: (_e = options.rotate) !== null && _e !== void 0 ? _e : undefined,
            color: (_f = options.color) !== null && _f !== void 0 ? _f : undefined,
            borderColor: (_g = options.borderColor) !== null && _g !== void 0 ? _g : undefined,
            borderWidth: (_h = options.borderWidth) !== null && _h !== void 0 ? _h : 0,
            borderDashArray: (_j = options.borderDashArray) !== null && _j !== void 0 ? _j : undefined,
            borderDashPhase: (_k = options.borderDashPhase) !== null && _k !== void 0 ? _k : undefined,
            borderLineCap: (_l = options.borderLineCap) !== null && _l !== void 0 ? _l : undefined,
            graphicsState: graphicsStateKey
        }));
    };
    /**
     * Draw a circle on this page. For example:
     * ```js
     * import { grayscale, rgb } from 'pdf-lib'
     *
     * page.drawCircle({
     *   x: 200,
     *   y: 150,
     *   size: 100,
     *   borderWidth: 5,
     *   borderColor: grayscale(0.5),
     *   color: rgb(0.75, 0.2, 0.2),
     *   opacity: 0.5,
     *   borderOpacity: 0.75,
     * })
     * ```
     * @param options The options to be used when drawing the ellipse.
     */ PDFPage.prototype.drawCircle = function(options) {
        if (options === void 0) {
            options = {};
        }
        var _a = options.size, size = _a === void 0 ? 100 : _a;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(size, 'size', [
            'number'
        ]);
        this.drawEllipse((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, options), {
            xScale: size,
            yScale: size
        }));
    };
    PDFPage.prototype.setOrEmbedFont = function(font) {
        var oldFont = this.font;
        var oldFontKey = this.fontKey;
        if (font) this.setFont(font);
        else this.getFont();
        var newFont = this.font;
        var newFontKey = this.fontKey;
        return {
            oldFont: oldFont,
            oldFontKey: oldFontKey,
            newFont: newFont,
            newFontKey: newFontKey
        };
    };
    PDFPage.prototype.getFont = function() {
        if (!this.font || !this.fontKey) {
            var font = this.doc.embedStandardFont(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$StandardFonts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardFonts"].Helvetica);
            this.setFont(font);
        }
        return [
            this.font,
            this.fontKey
        ];
    };
    PDFPage.prototype.resetFont = function() {
        this.font = undefined;
        this.fontKey = undefined;
    };
    PDFPage.prototype.getContentStream = function(useExisting) {
        if (useExisting === void 0) {
            useExisting = true;
        }
        if (useExisting && this.contentStream) return this.contentStream;
        this.contentStream = this.createContentStream();
        this.contentStreamRef = this.doc.context.register(this.contentStream);
        this.node.addContentStream(this.contentStreamRef);
        return this.contentStream;
    };
    PDFPage.prototype.createContentStream = function() {
        var operators = [];
        for(var _i = 0; _i < arguments.length; _i++){
            operators[_i] = arguments[_i];
        }
        var dict = this.doc.context.obj({});
        var contentStream = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFContentStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFContentStream$3e$__["PDFContentStream"].of(dict, operators);
        return contentStream;
    };
    PDFPage.prototype.maybeEmbedGraphicsState = function(options) {
        var opacity = options.opacity, borderOpacity = options.borderOpacity, blendMode = options.blendMode;
        if (opacity === undefined && borderOpacity === undefined && blendMode === undefined) {
            return undefined;
        }
        var graphicsState = this.doc.context.obj({
            Type: 'ExtGState',
            ca: opacity,
            CA: borderOpacity,
            BM: blendMode
        });
        var key = this.node.newExtGState('GS', graphicsState);
        return key;
    };
    PDFPage.prototype.scaleAnnot = function(annot, x, y) {
        var selectors = [
            'RD',
            'CL',
            'Vertices',
            'QuadPoints',
            'L',
            'Rect'
        ];
        for(var idx = 0, len = selectors.length; idx < len; idx++){
            var list = annot.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of(selectors[idx]));
            if (list instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFArray$3e$__["PDFArray"]) list.scalePDFNumbers(x, y);
        }
        var inkLists = annot.lookup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFName$3e$__["PDFName"].of('InkList'));
        if (inkLists instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFArray$3e$__["PDFArray"]) {
            for(var idx = 0, len = inkLists.size(); idx < len; idx++){
                var arr = inkLists.lookup(idx);
                if (arr instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFArray$3e$__["PDFArray"]) arr.scalePDFNumbers(x, y);
            }
        }
    };
    /**
     * > **NOTE:** You probably don't want to call this method directly. Instead,
     * > consider using the [[PDFDocument.addPage]] and [[PDFDocument.insertPage]]
     * > methods, which can create instances of [[PDFPage]] for you.
     *
     * Create an instance of [[PDFPage]] from an existing leaf node.
     *
     * @param leafNode The leaf node to be wrapped.
     * @param ref The unique reference for the page.
     * @param doc The document to which the page will belong.
     */ PDFPage.of = function(leafNode, ref, doc) {
        return new PDFPage(leafNode, ref, doc);
    };
    /**
     * > **NOTE:** You probably don't want to call this method directly. Instead,
     * > consider using the [[PDFDocument.addPage]] and [[PDFDocument.insertPage]]
     * > methods, which can create instances of [[PDFPage]] for you.
     *
     * Create an instance of [[PDFPage]].
     *
     * @param doc The document to which the page will belong.
     */ PDFPage.create = function(doc) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(doc, 'doc', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                'PDFDocument'
            ]
        ]);
        var dummyRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFRef$3e$__["PDFRef"].of(-1);
        var pageLeaf = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$structures$2f$PDFPageLeaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFPageLeaf$3e$__["PDFPageLeaf"].withContextAndParent(doc.context, dummyRef);
        var pageRef = doc.context.register(pageLeaf);
        return new PDFPage(pageLeaf, pageRef, doc);
    };
    return PDFPage;
}();
const __TURBOPACK__default__export__ = PDFPage;
 //# sourceMappingURL=PDFPage.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFPage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFFont$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFFont.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$image$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/image/alignment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$appearances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/appearances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/rotations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFStream$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/objects/PDFStream.js [app-client] (ecmascript) <export default as PDFStream>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/acroform/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/validators.js [app-client] (ecmascript)");
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
/**
 * Represents a button field of a [[PDFForm]].
 *
 * [[PDFButton]] fields are interactive controls that users can click with their
 * mouse. This type of [[PDFField]] is not stateful. The purpose of a button
 * is to perform an action when the user clicks on it, such as opening a print
 * modal or resetting the form. Buttons are typically rectangular in shape and
 * have a text label describing the action that they perform when clicked.
 */ var PDFButton = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$1$2e$14$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PDFButton, _super);
    function PDFButton(acroPushButton, ref, doc) {
        var _this = _super.call(this, acroPushButton, ref, doc) || this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(acroPushButton, 'acroButton', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$acroform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFAcroPushButton"],
                'PDFAcroPushButton'
            ]
        ]);
        _this.acroField = acroPushButton;
        return _this;
    }
    /**
     * Display an image inside the bounds of this button's widgets. For example:
     * ```js
     * const pngImage = await pdfDoc.embedPng(...)
     * const button = form.getButton('some.button.field')
     * button.setImage(pngImage, ImageAlignment.Center)
     * ```
     * This will update the appearances streams for each of this button's widgets.
     * @param image The image that should be displayed.
     * @param alignment The alignment of the image.
     */ PDFButton.prototype.setImage = function(image, alignment) {
        if (alignment === void 0) {
            alignment = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$image$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageAlignment"].Center;
        }
        var widgets = this.acroField.getWidgets();
        for(var idx = 0, len = widgets.length; idx < len; idx++){
            var widget = widgets[idx];
            var streamRef = this.createImageAppearanceStream(widget, image, alignment);
            this.updateWidgetAppearances(widget, {
                normal: streamRef
            });
        }
        this.markAsClean();
    };
    /**
     * Set the font size for this field. Larger font sizes will result in larger
     * text being displayed when PDF readers render this button. Font sizes may
     * be integer or floating point numbers. Supplying a negative font size will
     * cause this method to throw an error.
     *
     * For example:
     * ```js
     * const button = form.getButton('some.button.field')
     * button.setFontSize(4)
     * button.setFontSize(15.7)
     * ```
     *
     * > This method depends upon the existence of a default appearance
     * > (`/DA`) string. If this field does not have a default appearance string,
     * > or that string does not contain a font size (via the `Tf` operator),
     * > then this method will throw an error.
     *
     * @param fontSize The font size to be used when rendering text in this field.
     */ PDFButton.prototype.setFontSize = function(fontSize) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertPositive"])(fontSize, 'fontSize');
        this.acroField.setFontSize(fontSize);
        this.markAsDirty();
    };
    /**
     * Show this button on the specified page with the given text. For example:
     * ```js
     * const ubuntuFont = await pdfDoc.embedFont(ubuntuFontBytes)
     * const page = pdfDoc.addPage()
     *
     * const form = pdfDoc.getForm()
     * const button = form.createButton('some.button.field')
     *
     * button.addToPage('Do Stuff', page, {
     *   x: 50,
     *   y: 75,
     *   width: 200,
     *   height: 100,
     *   textColor: rgb(1, 0, 0),
     *   backgroundColor: rgb(0, 1, 0),
     *   borderColor: rgb(0, 0, 1),
     *   borderWidth: 2,
     *   rotate: degrees(90),
     *   font: ubuntuFont,
     * })
     * ```
     * This will create a new widget for this button field.
     * @param text The text to be displayed for this button widget.
     * @param page The page to which this button widget should be added.
     * @param options The options to be used when adding this button widget.
     */ PDFButton.prototype.addToPage = function(// TODO: This needs to be optional, e.g. for image buttons
    text, page, options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(text, 'text', [
            'string'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(page, 'page', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                'PDFPage'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFieldAppearanceOptions"])(options);
        // Create a widget for this button
        var widget = this.createWidget({
            x: ((_a = options === null || options === void 0 ? void 0 : options.x) !== null && _a !== void 0 ? _a : 0) - ((_b = options === null || options === void 0 ? void 0 : options.borderWidth) !== null && _b !== void 0 ? _b : 0) / 2,
            y: ((_c = options === null || options === void 0 ? void 0 : options.y) !== null && _c !== void 0 ? _c : 0) - ((_d = options === null || options === void 0 ? void 0 : options.borderWidth) !== null && _d !== void 0 ? _d : 0) / 2,
            width: (_e = options === null || options === void 0 ? void 0 : options.width) !== null && _e !== void 0 ? _e : 100,
            height: (_f = options === null || options === void 0 ? void 0 : options.height) !== null && _f !== void 0 ? _f : 50,
            textColor: (_g = options === null || options === void 0 ? void 0 : options.textColor) !== null && _g !== void 0 ? _g : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0, 0, 0),
            backgroundColor: (_h = options === null || options === void 0 ? void 0 : options.backgroundColor) !== null && _h !== void 0 ? _h : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0.75, 0.75, 0.75),
            borderColor: options === null || options === void 0 ? void 0 : options.borderColor,
            borderWidth: (_j = options === null || options === void 0 ? void 0 : options.borderWidth) !== null && _j !== void 0 ? _j : 0,
            rotate: (_k = options === null || options === void 0 ? void 0 : options.rotate) !== null && _k !== void 0 ? _k : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(0),
            caption: text,
            hidden: options === null || options === void 0 ? void 0 : options.hidden,
            page: page.ref
        });
        var widgetRef = this.doc.context.register(widget.dict);
        // Add widget to this field
        this.acroField.addWidget(widgetRef);
        // Set appearance streams for widget
        var font = (_l = options === null || options === void 0 ? void 0 : options.font) !== null && _l !== void 0 ? _l : this.doc.getForm().getDefaultFont();
        this.updateWidgetAppearance(widget, font);
        // Add widget to the given page
        page.node.addAnnot(widgetRef);
    };
    /**
     * Returns `true` if this button has been marked as dirty, or if any of this
     * button's widgets do not have an appearance stream. For example:
     * ```js
     * const button = form.getButton('some.button.field')
     * if (button.needsAppearancesUpdate()) console.log('Needs update')
     * ```
     * @returns Whether or not this button needs an appearance update.
     */ PDFButton.prototype.needsAppearancesUpdate = function() {
        var _a;
        if (this.isDirty()) return true;
        var widgets = this.acroField.getWidgets();
        for(var idx = 0, len = widgets.length; idx < len; idx++){
            var widget = widgets[idx];
            var hasAppearances = ((_a = widget.getAppearances()) === null || _a === void 0 ? void 0 : _a.normal) instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$objects$2f$PDFStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFStream$3e$__["PDFStream"];
            if (!hasAppearances) return true;
        }
        return false;
    };
    /**
     * Update the appearance streams for each of this button's widgets using
     * the default appearance provider for buttons. For example:
     * ```js
     * const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
     * const button = form.getButton('some.button.field')
     * button.defaultUpdateAppearances(helvetica)
     * ```
     * @param font The font to be used for creating the appearance streams.
     */ PDFButton.prototype.defaultUpdateAppearances = function(font) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(font, 'font', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFFont$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                'PDFFont'
            ]
        ]);
        this.updateAppearances(font);
    };
    /**
     * Update the appearance streams for each of this button's widgets using
     * the given appearance provider. If no `provider` is passed, the default
     * appearance provider for buttons will be used. For example:
     * ```js
     * const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
     * const button = form.getButton('some.button.field')
     * button.updateAppearances(helvetica, (field, widget, font) => {
     *   ...
     *   return {
     *     normal: drawButton(...),
     *     down: drawButton(...),
     *   }
     * })
     * ```
     * @param font The font to be used for creating the appearance streams.
     * @param provider Optionally, the appearance provider to be used for
     *                 generating the contents of the appearance streams.
     */ PDFButton.prototype.updateAppearances = function(font, provider) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIs"])(font, 'font', [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFFont$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                'PDFFont'
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertOrUndefined"])(provider, 'provider', [
            Function
        ]);
        var widgets = this.acroField.getWidgets();
        for(var idx = 0, len = widgets.length; idx < len; idx++){
            var widget = widgets[idx];
            this.updateWidgetAppearance(widget, font, provider);
        }
    };
    PDFButton.prototype.updateWidgetAppearance = function(widget, font, provider) {
        var apProvider = provider !== null && provider !== void 0 ? provider : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$appearances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultButtonAppearanceProvider"];
        var appearances = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$appearances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeAppearance"])(apProvider(this, widget, font));
        this.updateWidgetAppearanceWithFont(widget, font, appearances);
    };
    /**
     * > **NOTE:** You probably don't want to call this method directly. Instead,
     * > consider using the [[PDFForm.getButton]] method, which will create an
     * > instance of [[PDFButton]] for you.
     *
     * Create an instance of [[PDFButton]] from an existing acroPushButton and ref
     *
     * @param acroPushButton The underlying `PDFAcroPushButton` for this button.
     * @param ref The unique reference for this button.
     * @param doc The document to which this button will belong.
     */ PDFButton.of = function(acroPushButton, ref, doc) {
        return new PDFButton(acroPushButton, ref, doc);
    };
    return PDFButton;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PDFButton;
 //# sourceMappingURL=PDFButton.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$appearances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/appearances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFCheckBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFCheckBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFDropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFOptionList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFOptionList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFRadioGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFRadioGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFSignature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFTextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFTextField.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
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
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/text/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/text/alignment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/text/layout.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/text/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$image$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/image/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/objects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/operations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/operators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/rotations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$sizes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/sizes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPageOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFPageOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocumentOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFDocumentOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$StandardFonts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/StandardFonts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFDocument.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFFont$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFFont.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFImage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFPage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFEmbeddedPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFEmbeddedPage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFJavaScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFJavaScript.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
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
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PDFButton",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PDFCheckBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFCheckBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PDFDropdown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PDFField",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PDFForm",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PDFOptionList",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFOptionList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PDFRadioGroup",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFRadioGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PDFSignature",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PDFTextField",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFTextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "defaultButtonAppearanceProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$appearances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultButtonAppearanceProvider"],
    "defaultCheckBoxAppearanceProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$appearances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultCheckBoxAppearanceProvider"],
    "defaultDropdownAppearanceProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$appearances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultDropdownAppearanceProvider"],
    "defaultOptionListAppearanceProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$appearances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultOptionListAppearanceProvider"],
    "defaultRadioGroupAppearanceProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$appearances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultRadioGroupAppearanceProvider"],
    "defaultTextFieldAppearanceProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$appearances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultTextFieldAppearanceProvider"],
    "normalizeAppearance",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$appearances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeAppearance"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$appearances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/appearances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFCheckBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFCheckBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFDropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFOptionList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFOptionList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFRadioGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFRadioGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFSignature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$PDFTextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/PDFTextField.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/text/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextAlignment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextAlignment"],
    "layoutCombedText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layoutCombedText"],
    "layoutMultilineText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layoutMultilineText"],
    "layoutSinglelineText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layoutSinglelineText"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/text/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/text/alignment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/text/layout.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/image/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageAlignment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$image$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageAlignment"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$image$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/image/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$image$2f$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/image/alignment.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlendMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPageOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlendMode"],
    "ColorTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorTypes"],
    "CombedTextLayoutError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CombedTextLayoutError"],
    "EncryptedPDFError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncryptedPDFError"],
    "ExceededMaxLengthError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExceededMaxLengthError"],
    "FieldAlreadyExistsError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldAlreadyExistsError"],
    "FieldExistsAsNonTerminalError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldExistsAsNonTerminalError"],
    "FontkitNotRegisteredError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontkitNotRegisteredError"],
    "ForeignPageError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ForeignPageError"],
    "ImageAlignment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$image$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageAlignment"],
    "InvalidFieldNamePartError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidFieldNamePartError"],
    "InvalidMaxLengthError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidMaxLengthError"],
    "LineCapStyle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineCapStyle"],
    "LineJoinStyle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineJoinStyle"],
    "MissingOnValueCheckError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MissingOnValueCheckError"],
    "NoSuchFieldError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoSuchFieldError"],
    "PDFButton",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFButton"],
    "PDFCheckBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFCheckBox"],
    "PDFDocument",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PDFDropdown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFDropdown"],
    "PDFEmbeddedPage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFEmbeddedPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PDFField",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFField"],
    "PDFFont",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFFont$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PDFForm",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFForm"],
    "PDFImage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PDFJavaScript",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFJavaScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PDFOptionList",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFOptionList"],
    "PDFPage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PDFRadioGroup",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFRadioGroup"],
    "PDFSignature",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFSignature"],
    "PDFTextField",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFTextField"],
    "PageSizes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$sizes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageSizes"],
    "ParseSpeeds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocumentOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseSpeeds"],
    "RemovePageFromEmptyDocumentError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemovePageFromEmptyDocumentError"],
    "RichTextFieldReadError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RichTextFieldReadError"],
    "RotationTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RotationTypes"],
    "StandardFonts",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$StandardFonts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardFonts"],
    "TextAlignment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextAlignment"],
    "TextRenderingMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextRenderingMode"],
    "UnexpectedFieldTypeError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnexpectedFieldTypeError"],
    "adjustDimsForRotation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adjustDimsForRotation"],
    "appendBezierCurve",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendBezierCurve"],
    "appendQuadraticCurve",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendQuadraticCurve"],
    "asNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asNumber"],
    "asPDFName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFName"],
    "asPDFNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPDFNumber"],
    "beginMarkedContent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["beginMarkedContent"],
    "beginText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["beginText"],
    "clip",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clip"],
    "clipEvenOdd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipEvenOdd"],
    "closePath",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closePath"],
    "cmyk",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmyk"],
    "colorToComponents",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorToComponents"],
    "componentsToColor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["componentsToColor"],
    "concatTransformationMatrix",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatTransformationMatrix"],
    "defaultButtonAppearanceProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultButtonAppearanceProvider"],
    "defaultCheckBoxAppearanceProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultCheckBoxAppearanceProvider"],
    "defaultDropdownAppearanceProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultDropdownAppearanceProvider"],
    "defaultOptionListAppearanceProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultOptionListAppearanceProvider"],
    "defaultRadioGroupAppearanceProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultRadioGroupAppearanceProvider"],
    "defaultTextFieldAppearanceProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultTextFieldAppearanceProvider"],
    "degrees",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"],
    "degreesToRadians",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degreesToRadians"],
    "drawButton",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawButton"],
    "drawCheckBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawCheckBox"],
    "drawCheckMark",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawCheckMark"],
    "drawEllipse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawEllipse"],
    "drawEllipsePath",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawEllipsePath"],
    "drawImage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawImage"],
    "drawLine",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawLine"],
    "drawLinesOfText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawLinesOfText"],
    "drawObject",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawObject"],
    "drawOptionList",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawOptionList"],
    "drawPage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawPage"],
    "drawRadioButton",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawRadioButton"],
    "drawRectangle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawRectangle"],
    "drawSvgPath",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawSvgPath"],
    "drawText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawText"],
    "drawTextField",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawTextField"],
    "drawTextLines",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawTextLines"],
    "endMarkedContent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endMarkedContent"],
    "endPath",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endPath"],
    "endText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endText"],
    "fill",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"],
    "fillAndStroke",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fillAndStroke"],
    "grayscale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["grayscale"],
    "layoutCombedText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layoutCombedText"],
    "layoutMultilineText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layoutMultilineText"],
    "layoutSinglelineText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layoutSinglelineText"],
    "lineTo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineTo"],
    "moveText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moveText"],
    "moveTo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moveTo"],
    "nextLine",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextLine"],
    "normalizeAppearance",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeAppearance"],
    "popGraphicsState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popGraphicsState"],
    "pushGraphicsState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushGraphicsState"],
    "radians",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radians"],
    "radiansToDegrees",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radiansToDegrees"],
    "rectangle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectangle"],
    "reduceRotation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduceRotation"],
    "restoreDashPattern",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["restoreDashPattern"],
    "rgb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"],
    "rotateAndSkewTextDegreesAndTranslate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateAndSkewTextDegreesAndTranslate"],
    "rotateAndSkewTextRadiansAndTranslate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateAndSkewTextRadiansAndTranslate"],
    "rotateDegrees",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateDegrees"],
    "rotateInPlace",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateInPlace"],
    "rotateRadians",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateRadians"],
    "rotateRectangle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateRectangle"],
    "scale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"],
    "setCharacterSpacing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCharacterSpacing"],
    "setCharacterSqueeze",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCharacterSqueeze"],
    "setDashPattern",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDashPattern"],
    "setFillingCmykColor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFillingCmykColor"],
    "setFillingColor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFillingColor"],
    "setFillingGrayscaleColor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFillingGrayscaleColor"],
    "setFillingRgbColor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFillingRgbColor"],
    "setFontAndSize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFontAndSize"],
    "setGraphicsState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setGraphicsState"],
    "setLineCap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLineCap"],
    "setLineHeight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLineHeight"],
    "setLineJoin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLineJoin"],
    "setLineWidth",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLineWidth"],
    "setStrokingCmykColor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStrokingCmykColor"],
    "setStrokingColor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStrokingColor"],
    "setStrokingGrayscaleColor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStrokingGrayscaleColor"],
    "setStrokingRgbColor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStrokingRgbColor"],
    "setTextMatrix",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTextMatrix"],
    "setTextRenderingMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTextRenderingMode"],
    "setTextRise",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTextRise"],
    "setWordSpacing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setWordSpacing"],
    "showText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showText"],
    "skewDegrees",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skewDegrees"],
    "skewRadians",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skewRadians"],
    "square",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["square"],
    "stroke",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stroke"],
    "toDegrees",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDegrees"],
    "toRadians",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRadians"],
    "translate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translate"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/form/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/text/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$image$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/image/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/objects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/operations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$operators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/operators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/rotations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$sizes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/sizes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPageOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFPageOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocumentOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFDocumentOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$StandardFonts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/StandardFonts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFDocument.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFFont$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFFont.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFImage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFPage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFEmbeddedPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFEmbeddedPage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFJavaScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/PDFJavaScript.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=6726b_pdf-lib_es_api_84d04656._.js.map