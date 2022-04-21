import * as functions from "firebase-functions";

// Another test function.
exports.anotherFunction = functions.firestore
  .document("toChange/another")
  .onUpdate((snap) => {
    console.log("anotherFunction");
  });
