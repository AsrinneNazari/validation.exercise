const {check, validationResult} = require('express-validator');

const validateCreateProduct = [
    check('productName')
      .trim()
      .isLength({max: 40})
      .withMessage('Invalid product name!')
      .not()
      .isEmpty()
      .withMessage('No product name :('),

  check('SupplierID')
      .trim()
      .isInt(),

  check('CategoryID')
      .trim()
      .isInt()
      .withMessage('Invalid Category ID!')
      .not()
      .isEmpty()
      .withMessage('Empty  Category ID'),   

  check('UnitType')
      .trim()
      .isLength({max: 10})
      .isIn(["kilo", "styck","antal"])
      .not()
      .isEmpty()
      .withMessage('Empty unit type!'),

  check('UnitsInStock')
      .trim()
      .isInt()
      .withMessage('Wrong lenght of unit!')
      .not()
      .isEmpty()
      .withMessage('Empty here'),

  check('Active')
      .trim()
      .isBoolean()
      .withMessage('You have to fill in something!')
      .not()
      .isEmpty()
      .withMessage('Empty here..'), 

  check('CountryCode')
      .trim()
      .isISO31661Alpha3(),    
  
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(422).json({errors: errors.array()});
      next();
    },
  ];

module.exports = {
    validateCreateProduct
}