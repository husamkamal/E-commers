import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  display: flex;
  ${mobile({flexDirection:'column'})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`

`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.h1`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display:'none'})}
`;
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor:'#fff8f8'})}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    `
const Payment = styled.img`
     width: 50%;
`
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>HUSAM.</Logo>
        <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
          corporis repellat eum doloribus accusantium quis. Dolorum quisquam ab
          odit, quam nihil porro pariatur doloribus quasi deserunt inventore ,
          facere quo maxime.
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
            <ListItem></ListItem>
        </List>
      </Center>
      <Right>
            <Title>contact</Title>
            <ContactItem>
               <Room  style={{marginRight:'10px'}} /> Palestine Gaza Rafah 
            </ContactItem>
            <ContactItem>
               <Phone style={{marginRight:'10px'}} /> +972599504801
            </ContactItem>
            <ContactItem>
               <MailOutline style={{marginRight:'10px'}} /> husamkmal94@gmail.com
            </ContactItem>
            <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/> 
      </Right>
    </Container>
  );
};

export default Footer;
