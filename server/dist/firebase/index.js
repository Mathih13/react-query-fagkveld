"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
firebase.initializeApp({
    apiKey: "AIzaSyAYFt9LxfPJAKdZV0M0L_dGuD-EP8pPVWY",
    authDomain: "dfind-fagkveld-react-query.firebaseapp.com",
    projectId: "dfind-fagkveld-react-query",
});
const db = firebase.firestore();
exports.default = db;
//# sourceMappingURL=index.js.map