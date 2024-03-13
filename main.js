const express = require('express');
const app = express();
const port = 3000
const session = require('express-session');
const { sequelize, Product } = require('./models')
const migrationhelper = require('./migrationhelper')
const cors = require('cors')

const { check, validationResult } = require('express-validator');
const { validateCreateProduct } = require('./validators/userValidators.js');

app.use(express.json());
app.use(cors());


app.post('/api/products', validateCreateProduct ,            
async (req, res) => {
    const {productName, SupplierID, CategoryID, UnitType, UnitsInStock, Active, CountryCode} = req.body
    try {
        const product = await Product.create({productName:productName, SupplierID:SupplierID, CategoryID:CategoryID, UnitType:UnitType, UnitsInStock:UnitsInStock, Active:Active, CountryCode:CountryCode })
        return res.json(product)
      } catch (err) {
        console.log(err)
        return res.status(500).json(err)
      }
    console.log('hej')
    res.send(`Hello, ${req.body.productName}!`);
}); 

app.get('/api/products', async (req,res)=>{
    let result = {

        productName:"Potato",
        SupplierID: 123,
        CategoryID: 1,
        UnitType:"kilo",
        UnitsInStock: 60,
        Active:true,
        CountryCode:"SWE",
    }
     res.json(result)
});


app.listen(port, async () => {
    await migrationhelper.migrate()
    await sequelize.authenticate()
    console.log(`Example app listening2 on port ${port}`)})
