const { log } = require('console');
const fs = require('fs');
const path = require('path');

const products = [];

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json'
    );
    fs.readFile(p, (err, fileContent) => {
       
        console.log(fileContent);
        
    }

)

        
    }

    static fetchAll() {
        return products;
    }
}