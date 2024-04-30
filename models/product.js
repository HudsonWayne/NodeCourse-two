module.exports = class Product{
    constructor(t){
        this.title = t;
    }
    save(){
        products.push(this);
        return this;
    }
    static fetchAll(){
        return this.products;
    }
}