import React from 'react';
import useTShirt from '../../hooks/useTShirt';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
  const [tShirt, setTShirt] = useTShirt()
  return (
    <div className='home-container'>
      <div className="tShirt-container">
        {
          tShirt.map(tShirt => <TShirt
          key={tShirt._id}
          tShirt={tShirt}
          ></TShirt>)
        }
      </div>
      <div className="cart-container">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;