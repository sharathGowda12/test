import * as functions from "firebase-functions";

// Dummy function.
exports.anotherFunction = functions.firestore
  .document("toChange/another")
  .onUpdate((snap) => {
    console.log("anotherFunction");
  });
