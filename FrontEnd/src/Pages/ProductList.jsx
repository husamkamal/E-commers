import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NewsLetter from "../Components/NewsLetter";
import Products from "../Components/Products";
import { mobile } from "../Responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({width:'0px 20px', display:'flex',flexDirection:'column'})}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({marginRight:'0px '})}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({margin:'10px 0px '})}
`;
const Option = styled.option``;
const ProductList = () => {
  const { pathname } = useLocation()
  const cat = pathname.split("/")[2];
  const [filter, setFilter] = useState({})
  const [sorts, setSorts] = useState('newest') 
  const handlerFilter = (e) => {
    const value = e.target.value
    setFilter(prevState => {
      return{
        ...prevState,
        [e.target.name] : value

      }
    })
  } 
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select name="color" onChange={handlerFilter}>
            <Option  disabled >
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yallow</Option>
            <Option>green</Option>
            <Option>gray</Option>
          </Select>
          <Select name="size"  onChange={handlerFilter}>
            <Option disabled >
              Size
            </Option>
            <Option>xs</Option>
            <Option>s</Option>
            <Option>m</Option>
            <Option>l</Option>
            <Option>xl</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select onChange={e=>setSorts(e.target.value)}>
            <Option value='newest' >Newest</Option>
            <Option value='asc'>Price (asc)</Option>
            <Option value='desc'>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filter={filter} sorts={sorts} />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
