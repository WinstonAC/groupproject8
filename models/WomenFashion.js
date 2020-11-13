const mongoose = require("../db/connections")
const Schema = mongoose.Schema

const WomenFashion = new Schema


    ({
        logo: String,
        brand_name: String,
        CEO: String,
        type: String,
        price_point: String,
        categories: [{
            tops: [{
                product_name1: String,
                image_url1: String,
                detail1: String,
                product_name2: String,
                image_url2: String,
                detail2: String,
                product_name3: String,
                image_url3: String,
                detail3: String,
                product_name4: String,
                image_url4: String,
                detail4: String,
                product_name5: String,
                image_url5: String,
                details5: String
            }],
            bottoms: [{
                product_name1: String,
                image_url1: String,
                detail1: String,
                product_name2: String,
                image_url2: String,
                detail2: String,
                product_name3: String,
                image_url3: String,
                detail3: String,
                product_name4: String,
                image_url4: String,
                detail4: String,
                product_name5: String,
                image_url5: String,
                details5: String
            }],
            shoes: [{
                product_name1: String,
                image_url1: String,
                detail1: String,
                product_name2: String,
                image_url2: String,
                detail2: String,
                product_name3: String,
                image_url3: String,
                detail3: String,
                product_name4: String,
                image_url4: String,
                detail4: String,
                product_name5: String,
                image_url5: String,
                details5: String
            }],
            accessories: [{
                product_name1: String,
                image_url1: String,
                detail1: String,
                product_name2: String,
                image_url2: String,
                detail2: String,
                product_name3: String,
                image_url3: String,
                detail3: String,
                product_name4: String,
                image_url4: String,
                detail4: String,
                product_name5: String,
                image_url5: String,
                details5: String
            }]
        }],
        link: String
    })

    module.exports = mongoose.model("WomenFashion", WomenFashion)
