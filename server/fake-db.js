const Product = require("./model/product");

class FakeDb {
  constructor() {
    this.products = [
      {
        coverImage: "phone-cover.jpg",
        name: "Phone XL",
        price: 799,
        description: "A large phone with one of the best screens",
        heading1: "PhoneXLのheading1です",
        heading2: "PhoneXLのheading2です",
        heading3: "PhoneXLのheading3です",
      },
      {
        coverImage: "phone-cover.jpg",
        name: "Phone Mini",
        price: 699,
        description: "A great phone with one of the best cameras",
        heading1: "PhoneMiniのheading1です",
        heading2: "PhoneMiniのheading2です",
        heading3: "PhoneMiniのheading3です",
      },
      {
        coverImage: "phone-cover.jpg",
        name: "Phone Standard",
        price: 299,
        description: "",
        heading1: "PhoneStandardのheading1です",
        heading2: "PhoneStandardのheading2です",
        heading3: "PhoneStandardのheading3です",
      },
      {
        coverImage: "phone-cover.jpg",
        name: "Phone Special",
        price: 999,
        description: "",
        heading1: "PhoneSpecialのheading1です",
        heading2: "PhoneSpecialのheading2です",
        heading3: "PhoneSpecialのheading3です",
      },
    ];
  }
  async initDb() {
    await this.cleanDb();
    this.pushProductsToDb();
  }
  async cleanDb() {
    await Product.deleteMany({});
  }
  pushProductsToDb() {
    this.products.forEach((product) => {
      const newProduct = new Product(product);
      newProduct.save();
    });
  }
  seeDb() {
    this.pushProductsToDb();
  }
}
module.exports = FakeDb;
