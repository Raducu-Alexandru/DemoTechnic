"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var redis_connection_1 = require("@raducualexandrumircea/redis-connection");
var obj = new redis_connection_1.RedisConnectionRelation(['localhost:6379'], 'rel', ':');
var var1 = {
    a: 'bere',
    b: 'test',
    d: 'test',
    c: [
        1,
        2,
        3,
        1,
        {
            d: 'c',
            e: [5, 6, 7],
        },
    ],
    f: [8, 9],
};
function test() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        return __generator(this, function (_s) {
            switch (_s.label) {
                case 0: return [4 /*yield*/, obj.createList('var1', 10, true)];
                case 1:
                    _s.sent();
                    return [4 /*yield*/, obj.set('var1', [], var1, 11, true)];
                case 2:
                    _s.sent();
                    _b = (_a = console).log;
                    return [4 /*yield*/, obj.get('var1', [])];
                case 3:
                    _b.apply(_a, [_s.sent()]);
                    return [4 /*yield*/, obj.set('var1', ['a'], ['bere1'])];
                case 4:
                    _s.sent();
                    _d = (_c = console).log;
                    return [4 /*yield*/, obj.redisObj.hgetall('var1')];
                case 5:
                    _d.apply(_c, [_s.sent()]);
                    //console.log(await obj.redisObj.lrange('rel:4e72e165-d443-42a9-be9c-48d3f57746ec', 0, 100));
                    return [4 /*yield*/, obj.set('var1', ['a', '0'], 'bere2')];
                case 6:
                    //console.log(await obj.redisObj.lrange('rel:4e72e165-d443-42a9-be9c-48d3f57746ec', 0, 100));
                    _s.sent();
                    _f = (_e = console).log;
                    return [4 /*yield*/, obj.redisObj.hgetall('var1')];
                case 7:
                    _f.apply(_e, [_s.sent()]);
                    return [4 /*yield*/, obj.set('var1', ['a'], ['ana are mere'])];
                case 8:
                    _s.sent();
                    _h = (_g = console).log;
                    return [4 /*yield*/, obj.redisObj.hgetall('var1')];
                case 9:
                    _h.apply(_g, [_s.sent()]);
                    return [4 /*yield*/, obj.delete('var1', ['a'])];
                case 10:
                    _s.sent();
                    _k = (_j = console).log;
                    return [4 /*yield*/, obj.redisObj.hgetall('var1')];
                case 11:
                    _k.apply(_j, [_s.sent()]);
                    return [4 /*yield*/, obj.deleteByValue('var1', [], 'test', true)];
                case 12:
                    _s.sent();
                    return [4 /*yield*/, obj.deleteByValue('var1', ['c'], 1, true)];
                case 13:
                    _s.sent();
                    //await obj.delete('var1', []);
                    //console.log(await obj.redisObj.hgetall('var1'));
                    return [4 /*yield*/, obj.push('var1', ['c'], { g: ['45', 56] })];
                case 14:
                    //await obj.delete('var1', []);
                    //console.log(await obj.redisObj.hgetall('var1'));
                    _s.sent();
                    _m = (_l = console).log;
                    return [4 /*yield*/, obj.get('var1', ['c'])];
                case 15:
                    _m.apply(_l, [_s.sent()]);
                    return [4 /*yield*/, obj.set('var1', ['c', 3], 54)];
                case 16:
                    _s.sent();
                    _p = (_o = console).log;
                    return [4 /*yield*/, obj.get('var1', [])];
                case 17:
                    _p.apply(_o, [_s.sent()]);
                    _r = (_q = console).log;
                    return [4 /*yield*/, obj.get('var1', ['c', 3])];
                case 18:
                    _r.apply(_q, [_s.sent()]);
                    return [2 /*return*/];
            }
        });
    });
}
function test1() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17;
        return __generator(this, function (_18) {
            switch (_18.label) {
                case 0: return [4 /*yield*/, obj.createHash('var2', 10)];
                case 1:
                    _18.sent();
                    _b = (_a = console).log;
                    _c = ['1'];
                    return [4 /*yield*/, obj.get('var2', [])];
                case 2:
                    _b.apply(_a, _c.concat([_18.sent()]));
                    return [4 /*yield*/, obj.set('var2', ['sessionId'], '575623fgdb25dvsd')];
                case 3:
                    _18.sent();
                    _e = (_d = console).log;
                    _f = ['2'];
                    return [4 /*yield*/, obj.get('var2', [])];
                case 4:
                    _e.apply(_d, _f.concat([_18.sent()]));
                    return [4 /*yield*/, obj.set('var2', ['socket'], {})];
                case 5:
                    _18.sent();
                    _h = (_g = console).log;
                    _j = ['3'];
                    return [4 /*yield*/, obj.get('var2', [])];
                case 6:
                    _h.apply(_g, _j.concat([_18.sent()]));
                    return [4 /*yield*/, obj.set('var2', ['socket', 'socketId'], 'fsg56gfdb')];
                case 7:
                    _18.sent();
                    _l = (_k = console).log;
                    _m = ['4'];
                    return [4 /*yield*/, obj.get('var2', [])];
                case 8:
                    _l.apply(_k, _m.concat([_18.sent()]));
                    return [4 /*yield*/, obj.set('var2', ['socket', 'rooms'], [])];
                case 9:
                    _18.sent();
                    _p = (_o = console).log;
                    _q = ['5'];
                    return [4 /*yield*/, obj.get('var2', [])];
                case 10:
                    _p.apply(_o, _q.concat([_18.sent()]));
                    return [4 /*yield*/, obj.push('var2', ['socket', 'rooms'], 'room1')];
                case 11:
                    _18.sent();
                    _s = (_r = console).log;
                    _t = ['6'];
                    return [4 /*yield*/, obj.get('var2', [])];
                case 12:
                    _s.apply(_r, _t.concat([_18.sent()]));
                    return [4 /*yield*/, obj.push('var2', ['socket', 'rooms'], 'room2')];
                case 13:
                    _18.sent();
                    _v = (_u = console).log;
                    _w = ['7'];
                    return [4 /*yield*/, obj.get('var2', [])];
                case 14:
                    _v.apply(_u, _w.concat([_18.sent()]));
                    _y = (_x = console).log;
                    _z = ['7'];
                    return [4 /*yield*/, obj.checkKey('var2', [])];
                case 15:
                    _y.apply(_x, _z.concat([_18.sent()]));
                    _1 = (_0 = console).log;
                    _2 = ['7'];
                    return [4 /*yield*/, obj.checkKey('var2', ['socket'])];
                case 16:
                    _1.apply(_0, _2.concat([_18.sent()]));
                    _4 = (_3 = console).log;
                    _5 = ['7'];
                    return [4 /*yield*/, obj.checkKey('var2', ['socket', 'rooms'])];
                case 17:
                    _4.apply(_3, _5.concat([_18.sent()]));
                    _7 = (_6 = console).log;
                    _8 = ['7'];
                    return [4 /*yield*/, obj.checkKey('var2', ['socket', 'rooms', 1])];
                case 18:
                    _7.apply(_6, _8.concat([_18.sent()]));
                    _10 = (_9 = console).log;
                    _11 = ['7'];
                    return [4 /*yield*/, obj.checkKey('var2', ['socket', 'rooms', 2])];
                case 19:
                    _10.apply(_9, _11.concat([_18.sent()]));
                    return [4 /*yield*/, obj.delete('var2', ['socket', 'rooms', 0])];
                case 20:
                    _18.sent();
                    _13 = (_12 = console).log;
                    _14 = ['8'];
                    return [4 /*yield*/, obj.get('var2', ['socket', 'rooms', 1])];
                case 21:
                    _13.apply(_12, _14.concat([_18.sent()]));
                    _16 = (_15 = console).log;
                    _17 = ['expired'];
                    return [4 /*yield*/, obj.checkIfVariableExpired('var2')];
                case 22:
                    _16.apply(_15, _17.concat([_18.sent()]));
                    return [2 /*return*/];
            }
        });
    });
}
function test2() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, arr, _0, _1, _2, _3, _4, _5, _6, _7, _8;
        return __generator(this, function (_9) {
            switch (_9.label) {
                case 0: return [4 /*yield*/, obj.createList('var3', 15)];
                case 1:
                    _9.sent();
                    _b = (_a = console).log;
                    _c = ['1'];
                    return [4 /*yield*/, obj.get('var3', [])];
                case 2:
                    _b.apply(_a, _c.concat([_9.sent()]));
                    return [4 /*yield*/, obj.push('var3', [], { a: 'b' })];
                case 3:
                    _9.sent();
                    _e = (_d = console).log;
                    _f = ['2'];
                    return [4 /*yield*/, obj.get('var3', [0])];
                case 4:
                    _e.apply(_d, _f.concat([_9.sent()]));
                    return [4 /*yield*/, obj.set('var3', [0, 'b'], 56)];
                case 5:
                    _9.sent();
                    _h = (_g = console).log;
                    _j = ['3'];
                    return [4 /*yield*/, obj.get('var3', [])];
                case 6:
                    _h.apply(_g, _j.concat([_9.sent()]));
                    _l = (_k = console).log;
                    _m = ['6'];
                    return [4 /*yield*/, obj.getLength('var3', [0])];
                case 7:
                    _l.apply(_k, _m.concat([_9.sent()]));
                    return [4 /*yield*/, obj.delete('var3', [0, 'b'])];
                case 8:
                    _9.sent();
                    _p = (_o = console).log;
                    _q = ['3'];
                    return [4 /*yield*/, obj.get('var3', [])];
                case 9:
                    _p.apply(_o, _q.concat([_9.sent()]));
                    return [4 /*yield*/, obj.set('var3', [0], 67)];
                case 10:
                    _9.sent();
                    _s = (_r = console).log;
                    _t = ['4'];
                    return [4 /*yield*/, obj.get('var3', [])];
                case 11:
                    _s.apply(_r, _t.concat([_9.sent()]));
                    return [4 /*yield*/, obj.push('var3', [], 69)];
                case 12:
                    _9.sent();
                    _v = (_u = console).log;
                    _w = ['5'];
                    return [4 /*yield*/, obj.get('var3', [])];
                case 13:
                    _v.apply(_u, _w.concat([_9.sent()]));
                    _y = (_x = console).log;
                    _z = ['6'];
                    return [4 /*yield*/, obj.getLength('var3', [])];
                case 14:
                    _y.apply(_x, _z.concat([_9.sent()]));
                    arr = ['69', 67];
                    return [4 /*yield*/, Promise.all(arr.map(function (val, index, arr) {
                            console.log(val);
                            return obj.deleteByValue('var3', [], val);
                        }))];
                case 15:
                    _9.sent();
                    _1 = (_0 = console).log;
                    _2 = ['6'];
                    return [4 /*yield*/, obj.get('var3', [])];
                case 16:
                    _1.apply(_0, _2.concat([_9.sent()]));
                    _4 = (_3 = console).log;
                    _5 = ['6'];
                    return [4 /*yield*/, obj.getLength('var3', [])];
                case 17:
                    _4.apply(_3, _5.concat([_9.sent()]));
                    _7 = (_6 = console).log;
                    _8 = ['expired'];
                    return [4 /*yield*/, obj.checkIfVariableExpired('var3')];
                case 18:
                    _7.apply(_6, _8.concat([_9.sent()]));
                    return [2 /*return*/];
            }
        });
    });
}
function test3() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            obj.redisObj.multi({ pipeline: false });
            obj.redisObj.set('test', 134);
            obj.redisObj.get('test');
            obj.redisObj.exec;
            return [2 /*return*/];
        });
    });
}
test();
test1();
test2();
//test3();
