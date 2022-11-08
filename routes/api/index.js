const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

router.use((req, res) => {
    res.status(400).json({
      "Message": "ERROR - Almost there! For available routes please check the README at the link below",
      "Link": "https://github.com/Mateo-Wallace/M13-E-Commerce-Back-End",
      "Author": "Mateo Wallace"
    });
  });

module.exports = router;
