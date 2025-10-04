(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/base64.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * The `chars`, `lookup`, `encode`, and `decode` members of this file are
 * licensed under the following:
 *
 *     base64-arraybuffer
 *     https://github.com/niklasvh/base64-arraybuffer
 *
 *     Copyright (c) 2012 Niklas von Hertzen
 *     Licensed under the MIT license.
 *
 */ __turbopack_context__.s([
    "decodeFromBase64",
    ()=>decodeFromBase64,
    "decodeFromBase64DataUri",
    ()=>decodeFromBase64DataUri,
    "encodeToBase64",
    ()=>encodeToBase64
]);
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
var lookup = new Uint8Array(256);
for(var i = 0; i < chars.length; i++){
    lookup[chars.charCodeAt(i)] = i;
}
var encodeToBase64 = function(bytes) {
    var base64 = '';
    var len = bytes.length;
    for(var i = 0; i < len; i += 3){
        base64 += chars[bytes[i] >> 2];
        base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64 += chars[bytes[i + 2] & 63];
    }
    if (len % 3 === 2) {
        base64 = base64.substring(0, base64.length - 1) + '=';
    } else if (len % 3 === 1) {
        base64 = base64.substring(0, base64.length - 2) + '==';
    }
    return base64;
};
var decodeFromBase64 = function(base64) {
    var bufferLength = base64.length * 0.75;
    var len = base64.length;
    var i;
    var p = 0;
    var encoded1;
    var encoded2;
    var encoded3;
    var encoded4;
    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') {
            bufferLength--;
        }
    }
    var bytes = new Uint8Array(bufferLength);
    for(i = 0; i < len; i += 4){
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return bytes;
};
// This regex is designed to be as flexible as possible. It will parse certain
// invalid data URIs.
var DATA_URI_PREFIX_REGEX = /^(data)?:?([\w\/\+]+)?;?(charset=[\w-]+|base64)?.*,/i;
var decodeFromBase64DataUri = function(dataUri) {
    var trimmedUri = dataUri.trim();
    var prefix = trimmedUri.substring(0, 100);
    var res = prefix.match(DATA_URI_PREFIX_REGEX);
    // Assume it's not a data URI - just a plain base64 string
    if (!res) return decodeFromBase64(trimmedUri);
    // Remove the data URI prefix and parse the remainder as a base64 string
    var fullMatch = res[0];
    var data = trimmedUri.substring(fullMatch.length);
    return decodeFromBase64(data);
}; //# sourceMappingURL=base64.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/strings.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addRandomSuffix",
    ()=>addRandomSuffix,
    "breakTextIntoLines",
    ()=>breakTextIntoLines,
    "charAtIndex",
    ()=>charAtIndex,
    "charFromCode",
    ()=>charFromCode,
    "charFromHexCode",
    ()=>charFromHexCode,
    "charSplit",
    ()=>charSplit,
    "cleanText",
    ()=>cleanText,
    "copyStringIntoBuffer",
    ()=>copyStringIntoBuffer,
    "escapeRegExp",
    ()=>escapeRegExp,
    "escapedNewlineChars",
    ()=>escapedNewlineChars,
    "findLastMatch",
    ()=>findLastMatch,
    "isNewlineChar",
    ()=>isNewlineChar,
    "lineSplit",
    ()=>lineSplit,
    "mergeLines",
    ()=>mergeLines,
    "newlineChars",
    ()=>newlineChars,
    "padStart",
    ()=>padStart,
    "parseDate",
    ()=>parseDate,
    "toCharCode",
    ()=>toCharCode,
    "toCodePoint",
    ()=>toCodePoint,
    "toHexString",
    ()=>toHexString,
    "toHexStringOfMinLength",
    ()=>toHexStringOfMinLength
]);
var toCharCode = function(character) {
    return character.charCodeAt(0);
};
var toCodePoint = function(character) {
    return character.codePointAt(0);
};
var toHexStringOfMinLength = function(num, minLength) {
    return padStart(num.toString(16), minLength, '0').toUpperCase();
};
var toHexString = function(num) {
    return toHexStringOfMinLength(num, 2);
};
var charFromCode = function(code) {
    return String.fromCharCode(code);
};
var charFromHexCode = function(hex) {
    return charFromCode(parseInt(hex, 16));
};
var padStart = function(value, length, padChar) {
    var padding = '';
    for(var idx = 0, len = length - value.length; idx < len; idx++){
        padding += padChar;
    }
    return padding + value;
};
var copyStringIntoBuffer = function(str, buffer, offset) {
    var length = str.length;
    for(var idx = 0; idx < length; idx++){
        buffer[offset++] = str.charCodeAt(idx);
    }
    return length;
};
var addRandomSuffix = function(prefix, suffixLength) {
    if (suffixLength === void 0) {
        suffixLength = 4;
    }
    return prefix + "-" + Math.floor(Math.random() * Math.pow(10, suffixLength));
};
var escapeRegExp = function(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};
var cleanText = function(text) {
    return text.replace(/\t|\u0085|\u2028|\u2029/g, '    ').replace(/[\b\v]/g, '');
};
var escapedNewlineChars = [
    '\\n',
    '\\f',
    '\\r',
    '\\u000B'
];
var newlineChars = [
    '\n',
    '\f',
    '\r',
    '\u000B'
];
var isNewlineChar = function(text) {
    return /^[\n\f\r\u000B]$/.test(text);
};
var lineSplit = function(text) {
    return text.split(/[\n\f\r\u000B]/);
};
var mergeLines = function(text) {
    return text.replace(/[\n\f\r\u000B]/g, ' ');
};
var charAtIndex = function(text, index) {
    // Get the first code unit and code unit value
    var cuFirst = text.charCodeAt(index);
    var cuSecond;
    var nextIndex = index + 1;
    var length = 1;
    if (// Check if it's the start of a surrogate pair.
    cuFirst >= 0xd800 && cuFirst <= 0xdbff && // high surrogate
    text.length > nextIndex // there is a next code unit
    ) {
        cuSecond = text.charCodeAt(nextIndex);
        if (cuSecond >= 0xdc00 && cuSecond <= 0xdfff) length = 2; // low surrogate
    }
    return [
        text.slice(index, index + length),
        length
    ];
};
var charSplit = function(text) {
    var chars = [];
    for(var idx = 0, len = text.length; idx < len;){
        var _a = charAtIndex(text, idx), c = _a[0], cLen = _a[1];
        chars.push(c);
        idx += cLen;
    }
    return chars;
};
var buildWordBreakRegex = function(wordBreaks) {
    var newlineCharUnion = escapedNewlineChars.join('|');
    var escapedRules = [
        '$'
    ];
    for(var idx = 0, len = wordBreaks.length; idx < len; idx++){
        var wordBreak = wordBreaks[idx];
        if (isNewlineChar(wordBreak)) {
            throw new TypeError("`wordBreak` must not include " + newlineCharUnion);
        }
        escapedRules.push(wordBreak === '' ? '.' : escapeRegExp(wordBreak));
    }
    var breakRules = escapedRules.join('|');
    return new RegExp("(" + newlineCharUnion + ")|((.*?)(" + breakRules + "))", 'gm');
};
var breakTextIntoLines = function(text, wordBreaks, maxWidth, computeWidthOfText) {
    var regex = buildWordBreakRegex(wordBreaks);
    var words = cleanText(text).match(regex);
    var currLine = '';
    var currWidth = 0;
    var lines = [];
    var pushCurrLine = function() {
        if (currLine !== '') lines.push(currLine);
        currLine = '';
        currWidth = 0;
    };
    for(var idx = 0, len = words.length; idx < len; idx++){
        var word = words[idx];
        if (isNewlineChar(word)) {
            pushCurrLine();
        } else {
            var width = computeWidthOfText(word);
            if (currWidth + width > maxWidth) pushCurrLine();
            currLine += word;
            currWidth += width;
        }
    }
    pushCurrLine();
    return lines;
};
// See section "7.9.4 Dates" of the PDF specification
var dateRegex = /^D:(\d\d\d\d)(\d\d)?(\d\d)?(\d\d)?(\d\d)?(\d\d)?([+\-Z])?(\d\d)?'?(\d\d)?'?$/;
var parseDate = function(dateStr) {
    var match = dateStr.match(dateRegex);
    if (!match) return undefined;
    var year = match[1], _a = match[2], month = _a === void 0 ? '01' : _a, _b = match[3], day = _b === void 0 ? '01' : _b, _c = match[4], hours = _c === void 0 ? '00' : _c, _d = match[5], mins = _d === void 0 ? '00' : _d, _e = match[6], secs = _e === void 0 ? '00' : _e, _f = match[7], offsetSign = _f === void 0 ? 'Z' : _f, _g = match[8], offsetHours = _g === void 0 ? '00' : _g, _h = match[9], offsetMins = _h === void 0 ? '00' : _h;
    // http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15
    var tzOffset = offsetSign === 'Z' ? 'Z' : "" + offsetSign + offsetHours + ":" + offsetMins;
    var date = new Date(year + "-" + month + "-" + day + "T" + hours + ":" + mins + ":" + secs + tzOffset);
    return date;
};
var findLastMatch = function(value, regex) {
    var _a;
    var position = 0;
    var lastMatch;
    while(position < value.length){
        var match = value.substring(position).match(regex);
        if (!match) return {
            match: lastMatch,
            pos: position
        };
        lastMatch = match;
        position += ((_a = match.index) !== null && _a !== void 0 ? _a : 0) + match[0].length;
    }
    return {
        match: lastMatch,
        pos: position
    };
}; //# sourceMappingURL=strings.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/arrays.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrayAsString",
    ()=>arrayAsString,
    "byAscendingId",
    ()=>byAscendingId,
    "canBeConvertedToUint8Array",
    ()=>canBeConvertedToUint8Array,
    "last",
    ()=>last,
    "mergeIntoTypedArray",
    ()=>mergeIntoTypedArray,
    "mergeUint8Arrays",
    ()=>mergeUint8Arrays,
    "pluckIndices",
    ()=>pluckIndices,
    "range",
    ()=>range,
    "reverseArray",
    ()=>reverseArray,
    "sortedUniq",
    ()=>sortedUniq,
    "sum",
    ()=>sum,
    "toUint8Array",
    ()=>toUint8Array,
    "typedArrayFor",
    ()=>typedArrayFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$base64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/base64.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/strings.js [app-client] (ecmascript)");
;
;
var last = function(array) {
    return array[array.length - 1];
};
var typedArrayFor = function(value) {
    if (value instanceof Uint8Array) return value;
    var length = value.length;
    var typedArray = new Uint8Array(length);
    for(var idx = 0; idx < length; idx++){
        typedArray[idx] = value.charCodeAt(idx);
    }
    return typedArray;
};
var mergeIntoTypedArray = function() {
    var arrays = [];
    for(var _i = 0; _i < arguments.length; _i++){
        arrays[_i] = arguments[_i];
    }
    var arrayCount = arrays.length;
    var typedArrays = [];
    for(var idx = 0; idx < arrayCount; idx++){
        var element = arrays[idx];
        typedArrays[idx] = element instanceof Uint8Array ? element : typedArrayFor(element);
    }
    var totalSize = 0;
    for(var idx = 0; idx < arrayCount; idx++){
        totalSize += arrays[idx].length;
    }
    var merged = new Uint8Array(totalSize);
    var offset = 0;
    for(var arrIdx = 0; arrIdx < arrayCount; arrIdx++){
        var arr = typedArrays[arrIdx];
        for(var byteIdx = 0, arrLen = arr.length; byteIdx < arrLen; byteIdx++){
            merged[offset++] = arr[byteIdx];
        }
    }
    return merged;
};
var mergeUint8Arrays = function(arrays) {
    var totalSize = 0;
    for(var idx = 0, len = arrays.length; idx < len; idx++){
        totalSize += arrays[idx].length;
    }
    var mergedBuffer = new Uint8Array(totalSize);
    var offset = 0;
    for(var idx = 0, len = arrays.length; idx < len; idx++){
        var array = arrays[idx];
        mergedBuffer.set(array, offset);
        offset += array.length;
    }
    return mergedBuffer;
};
var arrayAsString = function(array) {
    var str = '';
    for(var idx = 0, len = array.length; idx < len; idx++){
        str += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charFromCode"])(array[idx]);
    }
    return str;
};
var byAscendingId = function(a, b) {
    return a.id - b.id;
};
var sortedUniq = function(array, indexer) {
    var uniq = [];
    for(var idx = 0, len = array.length; idx < len; idx++){
        var curr = array[idx];
        var prev = array[idx - 1];
        if (idx === 0 || indexer(curr) !== indexer(prev)) {
            uniq.push(curr);
        }
    }
    return uniq;
};
var reverseArray = function(array) {
    var arrayLen = array.length;
    for(var idx = 0, len = Math.floor(arrayLen / 2); idx < len; idx++){
        var leftIdx = idx;
        var rightIdx = arrayLen - idx - 1;
        var temp = array[idx];
        array[leftIdx] = array[rightIdx];
        array[rightIdx] = temp;
    }
    return array;
};
var sum = function(array) {
    var total = 0;
    for(var idx = 0, len = array.length; idx < len; idx++){
        total += array[idx];
    }
    return total;
};
var range = function(start, end) {
    var arr = new Array(end - start);
    for(var idx = 0, len = arr.length; idx < len; idx++){
        arr[idx] = start + idx;
    }
    return arr;
};
var pluckIndices = function(arr, indices) {
    var plucked = new Array(indices.length);
    for(var idx = 0, len = indices.length; idx < len; idx++){
        plucked[idx] = arr[indices[idx]];
    }
    return plucked;
};
var canBeConvertedToUint8Array = function(input) {
    return input instanceof Uint8Array || input instanceof ArrayBuffer || typeof input === 'string';
};
var toUint8Array = function(input) {
    if (typeof input === 'string') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$base64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeFromBase64DataUri"])(input);
    } else if (input instanceof ArrayBuffer) {
        return new Uint8Array(input);
    } else if (input instanceof Uint8Array) {
        return input;
    } else {
        throw new TypeError('`input` must be one of `string | ArrayBuffer | Uint8Array`');
    }
}; //# sourceMappingURL=arrays.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/async.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns a Promise that resolves after at least one tick of the
 * Macro Task Queue occurs.
 */ __turbopack_context__.s([
    "waitForTick",
    ()=>waitForTick
]);
var waitForTick = function() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            return resolve();
        }, 0);
    });
}; //# sourceMappingURL=async.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/unicode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasSurrogates",
    ()=>hasSurrogates,
    "hasUtf16BOM",
    ()=>hasUtf16BOM,
    "highSurrogate",
    ()=>highSurrogate,
    "isWithinBMP",
    ()=>isWithinBMP,
    "lowSurrogate",
    ()=>lowSurrogate,
    "utf16Decode",
    ()=>utf16Decode,
    "utf16Encode",
    ()=>utf16Encode,
    "utf8Encode",
    ()=>utf8Encode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/strings.js [app-client] (ecmascript)");
;
var utf8Encode = function(input, byteOrderMark) {
    if (byteOrderMark === void 0) {
        byteOrderMark = true;
    }
    var encoded = [];
    if (byteOrderMark) encoded.push(0xef, 0xbb, 0xbf);
    for(var idx = 0, len = input.length; idx < len;){
        var codePoint = input.codePointAt(idx);
        // One byte encoding
        if (codePoint < 0x80) {
            var byte1 = codePoint & 0x7f;
            encoded.push(byte1);
            idx += 1;
        } else if (codePoint < 0x0800) {
            var byte1 = codePoint >> 6 & 0x1f | 0xc0;
            var byte2 = codePoint & 0x3f | 0x80;
            encoded.push(byte1, byte2);
            idx += 1;
        } else if (codePoint < 0x010000) {
            var byte1 = codePoint >> 12 & 0x0f | 0xe0;
            var byte2 = codePoint >> 6 & 0x3f | 0x80;
            var byte3 = codePoint & 0x3f | 0x80;
            encoded.push(byte1, byte2, byte3);
            idx += 1;
        } else if (codePoint < 0x110000) {
            var byte1 = codePoint >> 18 & 0x07 | 0xf0;
            var byte2 = codePoint >> 12 & 0x3f | 0x80;
            var byte3 = codePoint >> 6 & 0x3f | 0x80;
            var byte4 = codePoint >> 0 & 0x3f | 0x80;
            encoded.push(byte1, byte2, byte3, byte4);
            idx += 2;
        } else throw new Error("Invalid code point: 0x" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHexString"])(codePoint));
    }
    return new Uint8Array(encoded);
};
var utf16Encode = function(input, byteOrderMark) {
    if (byteOrderMark === void 0) {
        byteOrderMark = true;
    }
    var encoded = [];
    if (byteOrderMark) encoded.push(0xfeff);
    for(var idx = 0, len = input.length; idx < len;){
        var codePoint = input.codePointAt(idx);
        // Two byte encoding
        if (codePoint < 0x010000) {
            encoded.push(codePoint);
            idx += 1;
        } else if (codePoint < 0x110000) {
            encoded.push(highSurrogate(codePoint), lowSurrogate(codePoint));
            idx += 2;
        } else throw new Error("Invalid code point: 0x" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHexString"])(codePoint));
    }
    return new Uint16Array(encoded);
};
var isWithinBMP = function(codePoint) {
    return codePoint >= 0 && codePoint <= 0xffff;
};
var hasSurrogates = function(codePoint) {
    return codePoint >= 0x010000 && codePoint <= 0x10ffff;
};
var highSurrogate = function(codePoint) {
    return Math.floor((codePoint - 0x10000) / 0x400) + 0xd800;
};
var lowSurrogate = function(codePoint) {
    return (codePoint - 0x10000) % 0x400 + 0xdc00;
};
var ByteOrder;
(function(ByteOrder) {
    ByteOrder["BigEndian"] = "BigEndian";
    ByteOrder["LittleEndian"] = "LittleEndian";
})(ByteOrder || (ByteOrder = {}));
var REPLACEMENT = '�'.codePointAt(0);
var utf16Decode = function(input, byteOrderMark) {
    if (byteOrderMark === void 0) {
        byteOrderMark = true;
    }
    // Need at least 2 bytes of data in UTF-16 encodings
    if (input.length <= 1) return String.fromCodePoint(REPLACEMENT);
    var byteOrder = byteOrderMark ? readBOM(input) : ByteOrder.BigEndian;
    // Skip byte order mark if needed
    var idx = byteOrderMark ? 2 : 0;
    var codePoints = [];
    while(input.length - idx >= 2){
        var first = decodeValues(input[idx++], input[idx++], byteOrder);
        if (isHighSurrogate(first)) {
            if (input.length - idx < 2) {
                // Need at least 2 bytes left for the low surrogate that is required
                codePoints.push(REPLACEMENT);
            } else {
                var second = decodeValues(input[idx++], input[idx++], byteOrder);
                if (isLowSurrogate(second)) {
                    codePoints.push(first, second);
                } else {
                    // Low surrogates should always follow high surrogates
                    codePoints.push(REPLACEMENT);
                }
            }
        } else if (isLowSurrogate(first)) {
            // High surrogates should always come first since `decodeValues()`
            // accounts for the byte ordering
            idx += 2;
            codePoints.push(REPLACEMENT);
        } else {
            codePoints.push(first);
        }
    }
    // There shouldn't be extra byte(s) left over
    if (idx < input.length) codePoints.push(REPLACEMENT);
    return String.fromCodePoint.apply(String, codePoints);
};
/**
 * Returns `true` if the given `codePoint` is a high surrogate.
 * @param codePoint The code point to be evaluated.
 *
 * Reference: https://en.wikipedia.org/wiki/UTF-16#Description
 */ var isHighSurrogate = function(codePoint) {
    return codePoint >= 0xd800 && codePoint <= 0xdbff;
};
/**
 * Returns `true` if the given `codePoint` is a low surrogate.
 * @param codePoint The code point to be evaluated.
 *
 * Reference: https://en.wikipedia.org/wiki/UTF-16#Description
 */ var isLowSurrogate = function(codePoint) {
    return codePoint >= 0xdc00 && codePoint <= 0xdfff;
};
/**
 * Decodes the given utf-16 values first and second using the specified
 * byte order.
 * @param first The first byte of the encoding.
 * @param second The second byte of the encoding.
 * @param byteOrder The byte order of the encoding.
 * Reference: https://en.wikipedia.org/wiki/UTF-16#Examples
 */ var decodeValues = function(first, second, byteOrder) {
    // Append the binary representation of the preceding byte by shifting the
    // first one 8 to the left and than applying a bitwise or-operator to append
    // the second one.
    if (byteOrder === ByteOrder.LittleEndian) return second << 8 | first;
    if (byteOrder === ByteOrder.BigEndian) return first << 8 | second;
    throw new Error("Invalid byteOrder: " + byteOrder);
};
/**
 * Returns whether the given array contains a byte order mark for the
 * UTF-16BE or UTF-16LE encoding. If it has neither, BigEndian is assumed.
 *
 * Reference: https://en.wikipedia.org/wiki/Byte_order_mark#UTF-16
 *
 * @param bytes The byte array to be evaluated.
 */ // prettier-ignore
var readBOM = function(bytes) {
    return hasUtf16BigEndianBOM(bytes) ? ByteOrder.BigEndian : hasUtf16LittleEndianBOM(bytes) ? ByteOrder.LittleEndian : ByteOrder.BigEndian;
};
var hasUtf16BigEndianBOM = function(bytes) {
    return bytes[0] === 0xfe && bytes[1] === 0xff;
};
var hasUtf16LittleEndianBOM = function(bytes) {
    return bytes[0] === 0xff && bytes[1] === 0xfe;
};
var hasUtf16BOM = function(bytes) {
    return hasUtf16BigEndianBOM(bytes) || hasUtf16LittleEndianBOM(bytes);
}; //# sourceMappingURL=unicode.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/numbers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// tslint:disable radix
/**
 * Converts a number to its string representation in decimal. This function
 * differs from simply converting a number to a string with `.toString()`
 * because this function's output string will **not** contain exponential
 * notation.
 *
 * Credit: https://stackoverflow.com/a/46545519
 */ __turbopack_context__.s([
    "bytesFor",
    ()=>bytesFor,
    "numberToString",
    ()=>numberToString,
    "sizeInBytes",
    ()=>sizeInBytes
]);
var numberToString = function(num) {
    var numStr = String(num);
    if (Math.abs(num) < 1.0) {
        var e = parseInt(num.toString().split('e-')[1]);
        if (e) {
            var negative = num < 0;
            if (negative) num *= -1;
            num *= Math.pow(10, e - 1);
            numStr = '0.' + new Array(e).join('0') + num.toString().substring(2);
            if (negative) numStr = '-' + numStr;
        }
    } else {
        var e = parseInt(num.toString().split('+')[1]);
        if (e > 20) {
            e -= 20;
            num /= Math.pow(10, e);
            numStr = num.toString() + new Array(e + 1).join('0');
        }
    }
    return numStr;
};
var sizeInBytes = function(n) {
    return Math.ceil(n.toString(2).length / 8);
};
var bytesFor = function(n) {
    var bytes = new Uint8Array(sizeInBytes(n));
    for(var i = 1; i <= bytes.length; i++){
        bytes[i - 1] = n >> (bytes.length - i) * 8;
    }
    return bytes;
}; //# sourceMappingURL=numbers.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/errors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "error",
    ()=>error
]);
var error = function(msg) {
    throw new Error(msg);
}; //# sourceMappingURL=errors.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/objects.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StandardFontValues",
    ()=>StandardFontValues,
    "isStandardFont",
    ()=>isStandardFont,
    "rectanglesAreEqual",
    ()=>rectanglesAreEqual,
    "values",
    ()=>values
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$pdf$2d$lib$2b$standard$2d$fonts$40$1$2e$0$2e$0$2f$node_modules$2f40$pdf$2d$lib$2f$standard$2d$fonts$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@pdf-lib+standard-fonts@1.0.0/node_modules/@pdf-lib/standard-fonts/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$pdf$2d$lib$2b$standard$2d$fonts$40$1$2e$0$2e$0$2f$node_modules$2f40$pdf$2d$lib$2f$standard$2d$fonts$2f$es$2f$Font$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@pdf-lib+standard-fonts@1.0.0/node_modules/@pdf-lib/standard-fonts/es/Font.js [app-client] (ecmascript)");
;
var values = function(obj) {
    return Object.keys(obj).map(function(k) {
        return obj[k];
    });
};
var StandardFontValues = values(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$pdf$2d$lib$2b$standard$2d$fonts$40$1$2e$0$2e$0$2f$node_modules$2f40$pdf$2d$lib$2f$standard$2d$fonts$2f$es$2f$Font$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontNames"]);
var isStandardFont = function(input) {
    return StandardFontValues.includes(input);
};
var rectanglesAreEqual = function(a, b) {
    return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}; //# sourceMappingURL=objects.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/validators.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* tslint:disable:ban-types */ __turbopack_context__.s([
    "assertEachIs",
    ()=>assertEachIs,
    "assertInteger",
    ()=>assertInteger,
    "assertIs",
    ()=>assertIs,
    "assertIsOneOf",
    ()=>assertIsOneOf,
    "assertIsOneOfOrUndefined",
    ()=>assertIsOneOfOrUndefined,
    "assertIsSubset",
    ()=>assertIsSubset,
    "assertMultiple",
    ()=>assertMultiple,
    "assertOrUndefined",
    ()=>assertOrUndefined,
    "assertPositive",
    ()=>assertPositive,
    "assertRange",
    ()=>assertRange,
    "assertRangeOrUndefined",
    ()=>assertRangeOrUndefined,
    "backtick",
    ()=>backtick,
    "createTypeErrorMsg",
    ()=>createTypeErrorMsg,
    "createValueErrorMsg",
    ()=>createValueErrorMsg,
    "getType",
    ()=>getType,
    "isType",
    ()=>isType,
    "singleQuote",
    ()=>singleQuote
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/objects.js [app-client] (ecmascript)");
;
var backtick = function(val) {
    return "`" + val + "`";
};
var singleQuote = function(val) {
    return "'" + val + "'";
};
// prettier-ignore
var formatValue = function(value) {
    var type = typeof value;
    if (type === 'string') return singleQuote(value);
    else if (type === 'undefined') return backtick(value);
    else return value;
};
var createValueErrorMsg = function(value, valueName, values) {
    var allowedValues = new Array(values.length);
    for(var idx = 0, len = values.length; idx < len; idx++){
        var v = values[idx];
        allowedValues[idx] = formatValue(v);
    }
    var joinedValues = allowedValues.join(' or ');
    // prettier-ignore
    return backtick(valueName) + " must be one of " + joinedValues + ", but was actually " + formatValue(value);
};
var assertIsOneOf = function(value, valueName, allowedValues) {
    if (!Array.isArray(allowedValues)) {
        allowedValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["values"])(allowedValues);
    }
    for(var idx = 0, len = allowedValues.length; idx < len; idx++){
        if (value === allowedValues[idx]) return;
    }
    throw new TypeError(createValueErrorMsg(value, valueName, allowedValues));
};
var assertIsOneOfOrUndefined = function(value, valueName, allowedValues) {
    if (!Array.isArray(allowedValues)) {
        allowedValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["values"])(allowedValues);
    }
    assertIsOneOf(value, valueName, allowedValues.concat(undefined));
};
var assertIsSubset = function(values, valueName, allowedValues) {
    if (!Array.isArray(allowedValues)) {
        allowedValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["values"])(allowedValues);
    }
    for(var idx = 0, len = values.length; idx < len; idx++){
        assertIsOneOf(values[idx], valueName, allowedValues);
    }
};
var getType = function(val) {
    if (val === null) return 'null';
    if (val === undefined) return 'undefined';
    if (typeof val === 'string') return 'string';
    if (isNaN(val)) return 'NaN';
    if (typeof val === 'number') return 'number';
    if (typeof val === 'boolean') return 'boolean';
    if (typeof val === 'symbol') return 'symbol';
    if (typeof val === 'bigint') return 'bigint';
    if (val.constructor && val.constructor.name) return val.constructor.name;
    if (val.name) return val.name;
    if (val.constructor) return String(val.constructor);
    return String(val);
};
var isType = function(value, type) {
    if (type === 'null') return value === null;
    if (type === 'undefined') return value === undefined;
    if (type === 'string') return typeof value === 'string';
    if (type === 'number') return typeof value === 'number' && !isNaN(value);
    if (type === 'boolean') return typeof value === 'boolean';
    if (type === 'symbol') return typeof value === 'symbol';
    if (type === 'bigint') return typeof value === 'bigint';
    if (type === Date) return value instanceof Date;
    if (type === Array) return value instanceof Array;
    if (type === Uint8Array) return value instanceof Uint8Array;
    if (type === ArrayBuffer) return value instanceof ArrayBuffer;
    if (type === Function) return value instanceof Function;
    return value instanceof type[0];
};
var createTypeErrorMsg = function(value, valueName, types) {
    var allowedTypes = new Array(types.length);
    for(var idx = 0, len = types.length; idx < len; idx++){
        var type = types[idx];
        if (type === 'null') allowedTypes[idx] = backtick('null');
        if (type === 'undefined') allowedTypes[idx] = backtick('undefined');
        if (type === 'string') allowedTypes[idx] = backtick('string');
        else if (type === 'number') allowedTypes[idx] = backtick('number');
        else if (type === 'boolean') allowedTypes[idx] = backtick('boolean');
        else if (type === 'symbol') allowedTypes[idx] = backtick('symbol');
        else if (type === 'bigint') allowedTypes[idx] = backtick('bigint');
        else if (type === Array) allowedTypes[idx] = backtick('Array');
        else if (type === Uint8Array) allowedTypes[idx] = backtick('Uint8Array');
        else if (type === ArrayBuffer) allowedTypes[idx] = backtick('ArrayBuffer');
        else allowedTypes[idx] = backtick(type[1]);
    }
    var joinedTypes = allowedTypes.join(' or ');
    // prettier-ignore
    return backtick(valueName) + " must be of type " + joinedTypes + ", but was actually of type " + backtick(getType(value));
};
var assertIs = function(value, valueName, types) {
    for(var idx = 0, len = types.length; idx < len; idx++){
        if (isType(value, types[idx])) return;
    }
    throw new TypeError(createTypeErrorMsg(value, valueName, types));
};
var assertOrUndefined = function(value, valueName, types) {
    assertIs(value, valueName, types.concat('undefined'));
};
var assertEachIs = function(values, valueName, types) {
    for(var idx = 0, len = values.length; idx < len; idx++){
        assertIs(values[idx], valueName, types);
    }
};
var assertRange = function(value, valueName, min, max) {
    assertIs(value, valueName, [
        'number'
    ]);
    assertIs(min, 'min', [
        'number'
    ]);
    assertIs(max, 'max', [
        'number'
    ]);
    max = Math.max(min, max);
    if (value < min || value > max) {
        // prettier-ignore
        throw new Error(backtick(valueName) + " must be at least " + min + " and at most " + max + ", but was actually " + value);
    }
};
var assertRangeOrUndefined = function(value, valueName, min, max) {
    assertIs(value, valueName, [
        'number',
        'undefined'
    ]);
    if (typeof value === 'number') assertRange(value, valueName, min, max);
};
var assertMultiple = function(value, valueName, multiplier) {
    assertIs(value, valueName, [
        'number'
    ]);
    if (value % multiplier !== 0) {
        // prettier-ignore
        throw new Error(backtick(valueName) + " must be a multiple of " + multiplier + ", but was actually " + value);
    }
};
var assertInteger = function(value, valueName) {
    if (!Number.isInteger(value)) {
        throw new Error(backtick(valueName) + " must be an integer, but was actually " + value);
    }
};
var assertPositive = function(value, valueName) {
    if (![
        1,
        0
    ].includes(Math.sign(value))) {
        // prettier-ignore
        throw new Error(backtick(valueName) + " must be a positive number or 0, but was actually " + value);
    }
}; //# sourceMappingURL=validators.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/pdfDocEncoding.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pdfDocEncodingDecode",
    ()=>pdfDocEncodingDecode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/strings.js [app-client] (ecmascript)");
;
// Mapping from PDFDocEncoding to Unicode code point
var pdfDocEncodingToUnicode = new Uint16Array(256);
// Initialize the code points which are the same
for(var idx = 0; idx < 256; idx++){
    pdfDocEncodingToUnicode[idx] = idx;
}
// Set differences (see "Table D.2 – PDFDocEncoding Character Set" of the PDF spec)
pdfDocEncodingToUnicode[0x16] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u0017'); // SYNCRONOUS IDLE
pdfDocEncodingToUnicode[0x18] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u02D8'); // BREVE
pdfDocEncodingToUnicode[0x19] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u02C7'); // CARON
pdfDocEncodingToUnicode[0x1a] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u02C6'); // MODIFIER LETTER CIRCUMFLEX ACCENT
pdfDocEncodingToUnicode[0x1b] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u02D9'); // DOT ABOVE
pdfDocEncodingToUnicode[0x1c] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u02DD'); // DOUBLE ACUTE ACCENT
pdfDocEncodingToUnicode[0x1d] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u02DB'); // OGONEK
pdfDocEncodingToUnicode[0x1e] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u02DA'); // RING ABOVE
pdfDocEncodingToUnicode[0x1f] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u02DC'); // SMALL TILDE
pdfDocEncodingToUnicode[0x7f] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\uFFFD'); // REPLACEMENT CHARACTER (box with questionmark)
pdfDocEncodingToUnicode[0x80] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u2022'); // BULLET
pdfDocEncodingToUnicode[0x81] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u2020'); // DAGGER
pdfDocEncodingToUnicode[0x82] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u2021'); // DOUBLE DAGGER
pdfDocEncodingToUnicode[0x83] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u2026'); // HORIZONTAL ELLIPSIS
pdfDocEncodingToUnicode[0x84] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u2014'); // EM DASH
pdfDocEncodingToUnicode[0x85] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u2013'); // EN DASH
pdfDocEncodingToUnicode[0x86] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u0192'); // LATIN SMALL LETTER SCRIPT F
pdfDocEncodingToUnicode[0x87] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u2044'); // FRACTION SLASH (solidus)
pdfDocEncodingToUnicode[0x88] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u2039'); // SINGLE LEFT-POINTING ANGLE QUOTATION MARK
pdfDocEncodingToUnicode[0x89] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u203A'); // SINGLE RIGHT-POINTING ANGLE QUOTATION MARK
pdfDocEncodingToUnicode[0x8a] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u2212'); // MINUS SIGN
pdfDocEncodingToUnicode[0x8b] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u2030'); // PER MILLE SIGN
pdfDocEncodingToUnicode[0x8c] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u201E'); // DOUBLE LOW-9 QUOTATION MARK (quotedblbase)
pdfDocEncodingToUnicode[0x8d] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u201C'); // LEFT DOUBLE QUOTATION MARK (quotedblleft)
pdfDocEncodingToUnicode[0x8e] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u201D'); // RIGHT DOUBLE QUOTATION MARK (quotedblright)
pdfDocEncodingToUnicode[0x8f] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u2018'); // LEFT SINGLE QUOTATION MARK (quoteleft)
pdfDocEncodingToUnicode[0x90] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u2019'); // RIGHT SINGLE QUOTATION MARK (quoteright)
pdfDocEncodingToUnicode[0x91] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u201A'); // SINGLE LOW-9 QUOTATION MARK (quotesinglbase)
pdfDocEncodingToUnicode[0x92] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u2122'); // TRADE MARK SIGN
pdfDocEncodingToUnicode[0x93] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\uFB01'); // LATIN SMALL LIGATURE FI
pdfDocEncodingToUnicode[0x94] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\uFB02'); // LATIN SMALL LIGATURE FL
pdfDocEncodingToUnicode[0x95] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u0141'); // LATIN CAPITAL LETTER L WITH STROKE
pdfDocEncodingToUnicode[0x96] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u0152'); // LATIN CAPITAL LIGATURE OE
pdfDocEncodingToUnicode[0x97] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u0160'); // LATIN CAPITAL LETTER S WITH CARON
pdfDocEncodingToUnicode[0x98] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u0178'); // LATIN CAPITAL LETTER Y WITH DIAERESIS
pdfDocEncodingToUnicode[0x99] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u017D'); // LATIN CAPITAL LETTER Z WITH CARON
pdfDocEncodingToUnicode[0x9a] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u0131'); // LATIN SMALL LETTER DOTLESS I
pdfDocEncodingToUnicode[0x9b] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u0142'); // LATIN SMALL LETTER L WITH STROKE
pdfDocEncodingToUnicode[0x9c] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u0153'); // LATIN SMALL LIGATURE OE
pdfDocEncodingToUnicode[0x9d] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u0161'); // LATIN SMALL LETTER S WITH CARON
pdfDocEncodingToUnicode[0x9e] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u017E'); // LATIN SMALL LETTER Z WITH CARON
pdfDocEncodingToUnicode[0x9f] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\uFFFD'); // REPLACEMENT CHARACTER (box with questionmark)
pdfDocEncodingToUnicode[0xa0] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\u20AC'); // EURO SIGN
pdfDocEncodingToUnicode[0xad] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCharCode"])('\uFFFD'); // REPLACEMENT CHARACTER (box with questionmark)
var pdfDocEncodingDecode = function(bytes) {
    var codePoints = new Array(bytes.length);
    for(var idx = 0, len = bytes.length; idx < len; idx++){
        codePoints[idx] = pdfDocEncodingToUnicode[bytes[idx]];
    }
    return String.fromCodePoint.apply(String, codePoints);
}; //# sourceMappingURL=pdfDocEncoding.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/Cache.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var Cache = function() {
    function Cache(populate) {
        this.populate = populate;
        this.value = undefined;
    }
    Cache.prototype.getValue = function() {
        return this.value;
    };
    Cache.prototype.access = function() {
        if (!this.value) this.value = this.populate();
        return this.value;
    };
    Cache.prototype.invalidate = function() {
        this.value = undefined;
    };
    Cache.populatedBy = function(populate) {
        return new Cache(populate);
    };
    return Cache;
}();
const __TURBOPACK__default__export__ = Cache;
 //# sourceMappingURL=Cache.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/arrays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/strings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$unicode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/unicode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/numbers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$base64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/base64.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/objects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/validators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$pdfDocEncoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/pdfDocEncoding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$Cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/Cache.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
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
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/Cache.js [app-client] (ecmascript) <export default as Cache>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cache",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$Cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$Cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/Cache.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/rng.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Generates a pseudo random number. Although it is not cryptographically secure
 * and uniformly distributed, it is not a concern for the intended use-case,
 * which is to generate distinct numbers.
 *
 * Credit: https://stackoverflow.com/a/19303725/10254049
 */ __turbopack_context__.s([
    "SimpleRNG",
    ()=>SimpleRNG
]);
var SimpleRNG = function() {
    function SimpleRNG(seed) {
        this.seed = seed;
    }
    SimpleRNG.prototype.nextInt = function() {
        var x = Math.sin(this.seed++) * 10000;
        return x - Math.floor(x);
    };
    SimpleRNG.withSeed = function(seed) {
        return new SimpleRNG(seed);
    };
    return SimpleRNG;
}();
;
 //# sourceMappingURL=rng.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/png.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PNG",
    ()=>PNG,
    "PngType",
    ()=>PngType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$pdf$2d$lib$2b$upng$40$1$2e$0$2e$1$2f$node_modules$2f40$pdf$2d$lib$2f$upng$2f$UPNG$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@pdf-lib+upng@1.0.1/node_modules/@pdf-lib/upng/UPNG.js [app-client] (ecmascript)");
;
var getImageType = function(ctype) {
    if (ctype === 0) return PngType.Greyscale;
    if (ctype === 2) return PngType.Truecolour;
    if (ctype === 3) return PngType.IndexedColour;
    if (ctype === 4) return PngType.GreyscaleWithAlpha;
    if (ctype === 6) return PngType.TruecolourWithAlpha;
    throw new Error("Unknown color type: " + ctype);
};
var splitAlphaChannel = function(rgbaChannel) {
    var pixelCount = Math.floor(rgbaChannel.length / 4);
    var rgbChannel = new Uint8Array(pixelCount * 3);
    var alphaChannel = new Uint8Array(pixelCount * 1);
    var rgbaOffset = 0;
    var rgbOffset = 0;
    var alphaOffset = 0;
    while(rgbaOffset < rgbaChannel.length){
        rgbChannel[rgbOffset++] = rgbaChannel[rgbaOffset++];
        rgbChannel[rgbOffset++] = rgbaChannel[rgbaOffset++];
        rgbChannel[rgbOffset++] = rgbaChannel[rgbaOffset++];
        alphaChannel[alphaOffset++] = rgbaChannel[rgbaOffset++];
    }
    return {
        rgbChannel: rgbChannel,
        alphaChannel: alphaChannel
    };
};
var PngType;
(function(PngType) {
    PngType["Greyscale"] = "Greyscale";
    PngType["Truecolour"] = "Truecolour";
    PngType["IndexedColour"] = "IndexedColour";
    PngType["GreyscaleWithAlpha"] = "GreyscaleWithAlpha";
    PngType["TruecolourWithAlpha"] = "TruecolourWithAlpha";
})(PngType || (PngType = {}));
var PNG = function() {
    function PNG(pngData) {
        var upng = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$pdf$2d$lib$2b$upng$40$1$2e$0$2e$1$2f$node_modules$2f40$pdf$2d$lib$2f$upng$2f$UPNG$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].decode(pngData);
        var frames = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$pdf$2d$lib$2b$upng$40$1$2e$0$2e$1$2f$node_modules$2f40$pdf$2d$lib$2f$upng$2f$UPNG$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toRGBA8(upng);
        if (frames.length > 1) throw new Error("Animated PNGs are not supported");
        var frame = new Uint8Array(frames[0]);
        var _a = splitAlphaChannel(frame), rgbChannel = _a.rgbChannel, alphaChannel = _a.alphaChannel;
        this.rgbChannel = rgbChannel;
        var hasAlphaValues = alphaChannel.some(function(a) {
            return a < 255;
        });
        if (hasAlphaValues) this.alphaChannel = alphaChannel;
        this.type = getImageType(upng.ctype);
        this.width = upng.width;
        this.height = upng.height;
        this.bitsPerComponent = 8;
    }
    PNG.load = function(pngData) {
        return new PNG(pngData);
    };
    return PNG;
}();
;
 //# sourceMappingURL=png.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/types/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

//# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/api/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/core/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pdf$2d$lib$40$1$2e$17$2e$1$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/utils/index.js [app-client] (ecmascript) <locals>"); //# sourceMappingURL=index.js.map
;
;
;
;
}),
]);

//# sourceMappingURL=6726b_pdf-lib_es_6246d002._.js.map