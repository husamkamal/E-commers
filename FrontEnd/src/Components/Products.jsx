import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Product from "./Product";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filter, sorts }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
  
    useEffect(() => {
      const getProducts = async () => {
        try {
          const res = await axios.get(
            cat
              ? `http://localhost:4000/api/v1/product?category=${cat}`
              : "http://localhost:4000/api/v1/product"
          );
          setProducts(res.data);
        } catch (err) {}
      };
      getProducts();
    }, [cat]);
    useEffect(() => {
      cat &&
        setFilteredProducts(
          products.filter((item) =>
            Object.entries(filter).every(([key, value]) =>
              item[key].includes(value)
            )
          )
        );
    }, [products, cat, filter]);
    useEffect(() => {
      if (sorts === "newest") {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.createdAt - b.createdAt)
        );
      } else if (sorts === "asc") {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.price - b.price)
        );
      } else {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => b.price - a.price)
        );
      }
    }, [sorts]);

    return (
      <Container>
           {cat?filteredProducts.map((item) =>   <Product key={item._id} item={item}  />)
           :products.map((item) =>   <Product key={item._id} item={item} />)}
          
      </Container>
    );
  };
  

export default Products;
