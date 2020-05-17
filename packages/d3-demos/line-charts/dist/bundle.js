(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var d3 = __importStar(require("d3"));
function lineChars() {
    return __awaiter(this, void 0, void 0, function () {
        var width, height, margin, data, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    width = 640;
                    height = 480;
                    margin = { top: 20, right: 30, bottom: 30, left: 40 };
                    return [4 /*yield*/, d3.csv('http://127.0.0.1:8080/aapl.csv')];
                case 1:
                    data = _a.sent();
                    result = data.map(function (_a) {
                        var date = _a.date, close = _a.close;
                        return { date: date, value: close };
                        // {
                        //   y: '$ Close',
                        // }
                    });
                    console.log(result);
                    return [2 /*return*/];
            }
        });
    });
}
lineChars();

},{"d3":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxxQ0FBeUI7QUFFekIsU0FBZSxTQUFTOzs7Ozs7b0JBQ2xCLEtBQUssR0FBRyxHQUFHLENBQUM7b0JBQ1osTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFFYixNQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUM7b0JBRS9DLHFCQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsRUFBQTs7b0JBQXJELElBQUksR0FBRyxTQUE4QztvQkFFckQsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFlOzRCQUFiLElBQUksVUFBQSxFQUFFLEtBQUssV0FBQTt3QkFDbEMsT0FBTyxFQUFFLElBQUksTUFBQSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQzt3QkFDOUIsSUFBSTt3QkFDSixrQkFBa0I7d0JBQ2xCLElBQUk7b0JBQ04sQ0FBQyxDQUFDLENBQUM7b0JBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7Q0FlckI7QUFFRCxTQUFTLEVBQUUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcblxuYXN5bmMgZnVuY3Rpb24gbGluZUNoYXJzKCkge1xuICBsZXQgd2lkdGggPSA2NDA7XG4gIGxldCBoZWlnaHQgPSA0ODA7XG5cbiAgbGV0IG1hcmdpbiA9IHsgdG9wOiAyMCwgcmlnaHQ6IDMwLCBib3R0b206IDMwLCBsZWZ0OiA0MCB9O1xuXG4gIGxldCBkYXRhID0gYXdhaXQgZDMuY3N2KCdodHRwOi8vMTI3LjAuMC4xOjgwODAvYWFwbC5jc3YnKTtcblxuICBsZXQgcmVzdWx0ID0gZGF0YS5tYXAoKHsgZGF0ZSwgY2xvc2UgfSkgPT4ge1xuICAgIHJldHVybiB7IGRhdGUsIHZhbHVlOiBjbG9zZSB9O1xuICAgIC8vIHtcbiAgICAvLyAgIHk6ICckIENsb3NlJyxcbiAgICAvLyB9XG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbiAgLy8gY29uc3QgeUF4aXMgPSBmdW5jdGlvbiBfeUF4aXMoXG4gIC8vICAgZzogZDMuU2VsZWN0aW9uPFNWR1NWR0VsZW1lbnQsIHVuZGVmaW5lZCwgbnVsbCwgdW5kZWZpbmVkPixcbiAgLy8gKSB7XG4gIC8vICAgcmV0dXJuIGdcbiAgLy8gICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LDApYClcbiAgLy8gICAgIC5jYWxsKGQzLmF4aXNMZWZ0KCkpO1xuICAvLyB9O1xuXG4gIC8vIGNvbnN0IHhBeGlzID0gZnVuY3Rpb24gX3hBeGlzKGc6IFNlbGVjdGlvbikge307XG5cbiAgLy8gZDMuY3JlYXRlKCdzdmcnKVxuICAvLyAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAvLyAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpO1xufVxuXG5saW5lQ2hhcnMoKTtcbiJdfQ==
