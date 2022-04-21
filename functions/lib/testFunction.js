"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// test function
exports.testFunction = functions.firestore
    .document("toChange/test")
    .onUpdate((snap) => {
    console.log("testFunction");
});
//# sourceMappingURL=testFunction.js.map