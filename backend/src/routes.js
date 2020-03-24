const Express = require('express');
const router = Express.Router();

// Controllers
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

// Rotass
router.post("/session", SessionController.create);

router.get("/ongs", OngController.list);
router.post("/ongs", OngController.create);
router.delete("/ongs/:id", OngController.delete);

router.get("/incidents", IncidentController.list);
router.post("/incidents", IncidentController.create);
router.delete("/incidents/:id", IncidentController.delete);

router.get("/profile", ProfileController.list);


module.exports = router;