"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// Another test function.
exports.anotherFunction = functions.firestore
    .document("toChange/another")
    .onUpdate((snap) => {
    console.log("anotherFunction");
});
//# sourceMappingURL=anotherFunction.js.map