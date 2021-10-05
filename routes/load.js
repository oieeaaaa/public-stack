/**
 * /load
 *
 * Called when a store owner or user click to load the app
 */

const express = require("express");
const path = require("path");

const router = express.Router();
const BigCommerce = require("node-bigcommerce");

const bigCommerce = new BigCommerce({
  clientId: process.env.client_id, // set in codesandbox server control panel
  secret: process.env.client_secret, // set in codesandbox server control panel
  responseType: "json",
  apiVersion: "v2"
});

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../dist/", "lead-form.html"));
});

module.exports = router;
