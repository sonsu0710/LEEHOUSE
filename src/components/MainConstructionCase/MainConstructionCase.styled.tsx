import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  border-bottom: solid 1px #ddd;
  margin-bottom: 50px;
`

const Title = styled.h1`
  margin-top: 100px;
  margin-bottom: 45px;
  display: flex;
  justify-content: center;
`

const Tab = styled.div`
  border-bottom: solid 1px #ddd;

  display: flex;
  justify-content: center;
`

const TabMenu = styled.div`
  span {
    margin: 0 20px; 
    transform: rotate(0.03deg);
  }
  padding-bottom: 15px;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    color: #3085ED;
    font-weight: bold;
  }
`

const ItemContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Item = styled.div`
  margin-bottom: 50px;
  width: 30%;
  height: 47vh;
  border-radius: 20px;
  border: 1px solid inherit;
  overflow: hidden;

  box-shadow: 10px 10px 13px -3px rgba(0,0,0,0.41);
  -webkit-box-shadow: 10px 10px 13px -3px rgba(0,0,0,0.41);
  -moz-box-shadow: 10px 10px 13px -3px rgba(0,0,0,0.41);
`

const ItemImg = styled.img`
  width: 100%;
  height: 60%;
  background-position: center;
  border-radius: 20px;

  transition: 0.2s all linear;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`

const ItemContentBox = styled.div`
  margin-top: 5px;
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
`

const ItemTitle = styled.h3`
  margin: 0 0 5px;
  span {
    font-size: 16px;
    color: #999999;
  }
`

const ItemTypes = styled.span`
  border-bottom: solid 1px #ddd;
  font-size: 12px;
  display: block;
  padding-bottom: 5px;
`

const ItemPrice = styled.h1`
  margin: 0;
  span {
    font-size: 12px;
  }
`

const SeeMoreBtn = styled.button`
  width: 25%;
  height: 50px;
  
  font-size: 18px;
  
  border: solid 1px #ddd;
  border-radius: 8px;
  background: #ffffff;
  rotate: 0.03deg;
  
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;

  cursor: pointer;
`

export {Container, Title, Tab, TabMenu, ItemContainer, Item, ItemImg, ItemContentBox, ItemTitle, ItemTypes, ItemPrice, SeeMoreBtn}