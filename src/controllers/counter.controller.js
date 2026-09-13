import Counter from "../models/Counter.js";
export const generateProductCode = async()=>{
    const result = await Counter.findByIdAndUpdate(
        {
            _id:"product_code",
        },
        {$inc:{sequence_value:1}},
        {new:true,upsert:true}
    )
    const productCode = String(result.sequence_value).padStart(6,"0")
    return productCode
}