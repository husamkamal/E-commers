import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container =styled.div`
    height: 70vh;
    display: flex;
    background-color: #fcf5f5;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title =styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Description =styled.p`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({textAlign:'center'})}
`
const InputContainer =styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({width:'80%'})}
`
const Input =styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button =styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`

const NewsLetter = () => {
    return (
        <Container>
            <Title>NewsLetter</Title>
            <Description>
                Get timely updates from your favorite products.
            </Description>
            <InputContainer>
                <Input placeholder="your email" />
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    );
}

export default NewsLetter;
