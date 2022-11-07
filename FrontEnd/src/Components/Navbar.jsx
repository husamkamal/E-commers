import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {mobile} from '../Responsive'
const Container = styled.div`
  height: 60px;
  ${mobile({padding:'10px 0px' })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display:'none'})}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({width:'50px'})}
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize:'24px'})}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex:2 , justifyContent:'center'})}
`;

const MenuItem = styled.div`
  font-style: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize:'10px',marginLeft:"10px"})}
`;

const Navbar = () => {
  const { quantity }= useSelector(state=>state.cart)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{color:'gray', fontSize:'16px'}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>HUSAM.</Logo>
        </Center>
        <Right>
          <Link to='/register'>
          <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to='/Login'>
          <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to='/cart'>
          <MenuItem>
            <Badge overlap="rectangular" badgeContent={quantity} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
