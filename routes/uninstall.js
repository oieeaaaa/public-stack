/**
 * /uninstall
 *
 * called when the store owner clicks to uninstall the app.
 */

const express = require("express"),
  router = express.Router(),
  BigCommerce = require("node-bigcommerce");

const bigCommerce = new BigCommerce({
  secret: process.env.client_secret, // set in server control panel
  responseType: "json"
});

router.get("/", (req, next) => {
  try {
    const data = bigCommerce.verify(req.query["signed_payload"]);
    if (typeof data.user !== "undefined") {
      // ... code to remove user / store from app db ...
      console.log("User Removed At: " + data.timestamp);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
