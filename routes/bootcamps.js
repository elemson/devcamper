var express = require("express");
var router = express.Router();
const bootCampController = require("../controllers/bootcamp");

router
  .route("/")
  .get(bootCampController.getBootcamps)
  .post(bootCampController.createBootcamp);

router
  .route("/:id")
  .get(bootCampController.getBootcamp)
  .put(bootCampController.updatetBootcamp)
  .delete(bootCampController.deletetBootcamp);

module.exports = router;
