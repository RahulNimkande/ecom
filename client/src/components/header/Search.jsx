import { Box, InputBase, List, ListItem, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
    background: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
`
const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
`
const SearchIconWrapper = styled(Box)`
    color: blue;
    padding: 5px;
    display: flex;
`

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px
`;


export default function Search() {

    const [text,setText] = useState('');

    const { products } = useSelector(state => state.getProducts);

    // console.log(products);
  
    const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(getProducts())
    },[dispatch]);

    const getText = (text) => {
        setText(text);
    }

  return (
    <SearchContainer>
        <InputSearchBase
            placeholder='Search for products, brands and more'
            onChange={(e) => getText(e.target.value)}
            value={text}
        />
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
        {
            text &&
            <ListWrapper>
                {
                    products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => ( 
                        <ListItem> 
                            <Link 
                             to={`/product/${product.id}`} 
                             style={{ textDecoration:'none', color: 'inherit'}}
                             onClick={() => setText('')}  
                      >
                        {product.title.longTitle}
                      </Link>
                        </ListItem>
                  ))
                }
            </ListWrapper>
        }
    </SearchContainer>
  )
}
