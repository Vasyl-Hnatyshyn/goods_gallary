import React from 'react';



class Product extends React.Component {

    render() {
 const {good,removeProduct,pinToTop,}=this.props
        return (


           <div className="card"  key={good.id}   >
                 <p className="product-titel"> {good.name}</p>
                 <img src={good.img} alt={good.name}/>
                 <p className="product-details">{good.details} </p>
                 <p className="price">  {good.price + " $"}</p>
                 <button className="remove-product" onClick={()=>{removeProduct(good)} }>Х</button>
                 <button className="to-top" onClick={()=>{pinToTop(good.id)} }>top</button>
              </div>
        )
    }
}
export default Product;