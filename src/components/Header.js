import { useSelector } from "react-redux"

const Header = () => {
  const result = useSelector(state => state.cartData)
  // console.log(result)
  return (
    <div className='header'>
        <div className='cart-div'>
            <span>{result.length}</span>
            <img src='/cart.png' alt='' />
        </div>
    </div>
  )
}

export default Header