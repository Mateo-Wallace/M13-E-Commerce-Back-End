const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(400).json({
    "Message": "No information on this route. For available routes please check the README at the link below",
    "Link": "https://github.com/Mateo-Wallace/M13-E-Commerce-Back-End",
    "Author": "Mateo Wallace"
  });
});

module.exports = router;