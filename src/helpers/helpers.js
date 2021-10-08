export const SubPrice =(item) => {
    return item.count * item.product.price
}

export const TotalPrice =(products) => {
    let totalPrice = 0
    products.forEach(item => {
        totalPrice += item.subPrice
    });
    return totalPrice;
}