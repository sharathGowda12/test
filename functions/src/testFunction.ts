import * as functions from "firebase-functions";

// Dummy function.
exports.testFunction = functions.firestore
  .document("toChange/test")
  .onUpdate((snap) => {
    console.log("testFunction");
  });
