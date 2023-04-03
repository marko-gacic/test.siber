var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var list1 = [1, 8, 15, 16, 35];
var list2 = [2, 7, 12, 63];
var list3 = [10, 13, 14, 42];
var iterator = GetNext(list1, list2, list3);
/* Creating an array of iterators. */
function GetNext(list1, list2, list3) {
    var seqNum, iterators, currentIterator, nextValue, currentValue;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                seqNum = 1;
                iterators = [list1[Symbol.iterator](), list2[Symbol.iterator](), list3[Symbol.iterator]()];
                _a.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 3];
                currentIterator = iterators[(seqNum - 1) % 3];
                nextValue = currentIterator.next();
                /* This is checking if the iterator is done. If it is done, it will reset the iterator to the beginning
            and increment the sequence number. */
                if (nextValue.done) {
                    iterators[(seqNum - 1) % 3] = list3[Symbol.iterator]();
                    seqNum++;
                    return [3 /*break*/, 1];
                }
                currentValue = nextValue.value;
                /* This is checking if the sequence number is even and the current value is even or if the sequence
            number is odd and the current value is odd. If it is, it will continue to the next iteration. */
                if ((seqNum % 2 === 0 && currentValue % 2 === 0) ||
                    (seqNum % 2 !== 0 && currentValue % 2 !== 0)) {
                    return [3 /*break*/, 1];
                }
                return [4 /*yield*/, currentValue];
            case 2:
                _a.sent();
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
/* This is printing the first 8 values of the iterator. */
for (var i = 0; i < 8; i++) {
    console.log(iterator.next().value);
}
console.log("Done");
console.log(iterator.next().value);
console.log(iterator.next().value);
