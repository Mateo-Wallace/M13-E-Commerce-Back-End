const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

  // find all categories with associated products
router.get('/', async(req, res) => {
  try {
    const productData = await Category.findAll({
      include: [{ model: Product}]
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find specific category with associated products
router.get('/:id', async(req, res) => {
  try {
    const productData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if (!productData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
