import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Context from '../context/Context'
import StarRating from '../components/StarRating'

// The individual Product page. Displays the product image and price on the left as well as an Add to cart button and a Buy Now button (which has no functionality, as there is no Checkout page currently). On the right, the product name, star rating and description are displayed. There are not unique descriptions for the products, however.
const Product = () => {

    // Gets the products list and the addToCart function from the context file.
    const { products, addToCart } = useContext(Context);

    // Gets the product number from the parameter in the page link.
    const { productNum } = useParams();
    // console.log('productNum:', productNum);
    // console.log('products:', products);

    // Gets the correct product based on the productNum.
    const product = products.find((product) => product.id === parseInt(productNum));

    /* If the product number is invalid, will show 'Product not found'. */
    if (!product) {
        // console.log('Product not found');
        return <div className='nothing'>Product not found!</div>;
    };

    // Handling using addToCart.
    const handleAddToCart = () => {
        addToCart(product);
    };

  return (
    <div className='mainContainer'>
        <div className='prodPrice'>
            <div className='prodPriceCard'><img src={product.img} alt={product.name} /></div>
            {/* Converting the price to a CAD dollar value. */}
            <p>{(product.price/100).toLocaleString('en-US', {
                style:"currency",
                currency:"CAD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })} per bar</p>
            {/* Button that adds one of the product to the cart. */}
            <button className='ppcButton yellow' onClick={handleAddToCart}>Add to cart</button>
            {/* Buy Now button has no functionality, as there was no time to add the Checkout page. Would ideally add the item to the cart and take you directly to the Checkout page. */}
            <button className='ppcButton orange'>Buy Now</button>
            
            

        </div>
        <div className='prodDesc'>
            <p className='pdt'>{product.name}</p>
            <StarRating rating={product.rating} />
            <p>{product.desc}</p>
        </div>
    </div>
  )
}

export default Product