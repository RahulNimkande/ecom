import {useEffect} from 'react'

//components
import Navbar from './Navbar';
import Banner from './Banner';
import Slide from './Slide';

import { Box, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import MidSlide from './MidSlide';
import Midsection from './Midsection';

const Container = styled(Box)`
  padding: 10px;
  background: #f1f3f6;
`

const Home = () => {

  const { products } = useSelector(state => state.getProducts);

  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getProducts())
  },[dispatch]);


  return (
    <>
        <Navbar/> 
        <Container>
          <Banner/>
          <MidSlide products={products} title="Deal of the Day" timer={true}/>
          <Midsection/>
          <Slide products={products} title="Discounts for You" timer={false}/>
          <Slide products={products} title="Suggested Items" timer={false}/>
          <Slide products={products} title="Top Selection" timer={false}/>
          <Slide products={products} title="Recommended Items" timer={false}/>
          <Slide products={products} title="Trending Offers" timer={false}/>
          <Slide products={products} title="Season's top picks" timer={false}/>
          <Slide products={products} title="Top Deals on Accessories" timer={false}/>
        </Container>
    </>
  )
}

export default Home;
