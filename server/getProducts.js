const products = require('../products.json');

const getProducts = (req, res) => {
    const {price} = req.query

    if (price) {
        const filteredProduct = products.filter(element => 
        element.price >= +price)
        res.status(200).send(filteredProduct)
    }
    else {
        res.status(200).send(products)
    }
    res.status(200).send(products)
};

module.exports = getProducts;