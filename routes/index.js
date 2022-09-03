const { Router } = require("express");
const viewRoutes = require("./views");
const apiRoutes = require("./api");

const router = Router();

router.use("/api", apiRoutes);
router.use("/", viewRoutes);

module.exports = router;
