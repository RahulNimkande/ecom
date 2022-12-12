import React from 'react'
import { AppBar,Box,Drawer,IconButton,List,ListItem,styled,Toolbar, Typography } from '@mui/material'
import Search from './Search';
import CustomButtons from './CustomButtons';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import { useState } from 'react';


const StyledHeader = styled(AppBar)`
background: #2874f0;
height: 55px;
    `
    const Components = styled(Link)`
        margin-left: 12%;
        line-height: 0;
        text-decoration: none;
        color: inherit; 
    `;
    
    const SubHeading= styled(Typography)`
    font-size: 10px;
    font-style: italic;
    `
    //styled for img tag (html element non react component)
    const PlusImage= styled('img')({
        width: 10,
        height: 10,
        marginLeft: 4
    })

    const CustomButtonWrap = styled(Box)(({ theme }) => ({
        margin: '0 5% 0 auto',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }));
    
    const MenuButton = styled(IconButton)(({ theme }) => ({
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'block'
        }
    }));
    
export default function Header() {
    
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButtons />
                </ListItem>
            </List>
        </Box>
    );
  
    return (
    <StyledHeader>
        <Toolbar style={{minHeight: 55 }}>
            <MenuButton color='inherit' onClick={handleOpen}>
                <Menu/>
            </MenuButton>
            <Drawer open={open} onClose={handleClose}>
                {list()}
            </Drawer>
            <Components to='/'>
                <img src={logoURL} alt="logo" style={{ width: 75 }} />
                <Box style={{ display: 'flex' }}>
                    <SubHeading>Explore 
                        <Typography component="span" style={{color: '#FFE500', fontSize: '10px'}}> Plus</Typography>
                    </SubHeading>
                    <PlusImage src={subURL} alt="sub-logo" />
                </Box>
            </Components>
            <Search/>
            <CustomButtonWrap>
                <CustomButtons/>
            </CustomButtonWrap>
        </Toolbar>
    </StyledHeader>

    )
}
