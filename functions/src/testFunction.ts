import * as functions from "firebase-functions";

// test function
exports.testFunction = functions.firestore
  .document("toChange/test")
  .onUpdate((snap) => {
    console.log("testFunction");
  });
