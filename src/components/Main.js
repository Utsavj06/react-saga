import { useDispatch } from 'react-redux';
import {  addToCart, emptyCart, removeFromCart } from '../redux/action';
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function Main() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.productData)  
  console.log(data)
  const [itemData, setItemData] = useState([])
  const product = {
    name: 'I Phone',
    type: 'mobile',
    price: 1000,
    color: 'red'
  }

  useEffect(()=>{
    setItemData(data)
  })
  
  return (
    <div className="App">
      <div>
        <button onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
      </div>
      <div>
        <button onClick={()=>dispatch(removeFromCart(product))}>Remove From Cart</button>
      </div>
      <div>
        <button onClick={()=>dispatch(emptyCart(product))}>Empty Cart</button>
      </div>
      <div>
        <button onClick={()=>dispatch(productList(product))}>Get List</button>
      </div>
      <div className='ProductContainer'>
        {itemData && itemData.map(item => {
          return <div key={item.id}>
            <div>{item.title}</div>
          </div>
        })}
      </div>
    </div>
  );
}

export default Main;
