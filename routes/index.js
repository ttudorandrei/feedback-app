const { Router } = require("express");
const viewRoutes = require("./views");

const router = Router();

router.use("/", viewRoutes);

module.exports = router;
