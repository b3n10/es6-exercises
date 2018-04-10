"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var data1 = "Ben,Football,2018,29";

var _data1$split = data1.split(","),
    _data1$split2 = _slicedToArray(_data1$split, 4),
    name = _data1$split2[0],
    sports = _data1$split2[1],
    year = _data1$split2[2],
    age = _data1$split2[3];

console.log(name, sports, year, age);

var data2 = "Mama, Papa, Tita, Ethan, Me";

var _data2$split = data2.split(","),
    _data2$split2 = _toArray(_data2$split),
    mom = _data2$split2[0],
    dad = _data2$split2[1],
    others = _data2$split2.slice(2);

console.log(mom, dad, others);