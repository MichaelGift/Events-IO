const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event.controller');

router.post('/', eventController.createEvent);
router.get('/', eventController.getAllEvents);
router.get('/:id', eventController.getEvent);
router.delete('/:id', eventController.deleteEvent);
router.put('/:id', eventController.updateEvent);

module.exports = router;