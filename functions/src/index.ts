import * as admin from "firebase-admin";

// import all the files for deployment
import * as testFunction from "./testFunction";
import * as anotherFunction from "./anotherFunction";

// Common initialization for Firebase
admin.initializeApp();

//Functions are deployed from here.
exports.test = testFunction;
exports.another = anotherFunction;
