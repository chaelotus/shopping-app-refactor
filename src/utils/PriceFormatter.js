export const PriceFormatter = (price) =>{
    console.log(price)
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
}