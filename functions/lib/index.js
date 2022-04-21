"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
// import all the files for deployment
const testFunction = require("./testFunction");
const anotherFunction = require("./anotherFunction");
// Common initialization for Firebase
admin.initializeApp();
//Functions are deployed from here.
exports.test = testFunction;
exports.another = anotherFunction;
//# sourceMappingURL=index.js.map