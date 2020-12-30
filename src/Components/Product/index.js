const Product = () => {

  return (
    <div className="product">
      <h2 className="product__name">Product 1</h2>
      <div className="product__rating">1</div>
      <div className="product__price">
        <span className="product__price-currency">$</span>
        <span className="product__price-number"></span>
      </div>
      <div className="product__logo">
        <img alt="product 1"></img>
      </div>
      <div className="product__button-wrp">
        <button className="button">Add to cart</button>
      </div>
    </div>
  )
}

export default Product;