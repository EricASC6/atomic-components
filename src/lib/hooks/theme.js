"use strict";
exports.__esModule = true;
exports.useTheme = void 0;
var react_1 = require("react");
var ThemeProvider_1 = require("../providers/ThemeProvider");
exports.useTheme = function () { return react_1.useContext(ThemeProvider_1.ThemeContext); };
