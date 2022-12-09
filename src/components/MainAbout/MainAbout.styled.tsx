import styled from "styled-components";

const Container = styled.div`
  //margin: 100px 0;
  padding-bottom: 40px;
  width: 100%;
  height: 400px;
  //background-color: orange;

  display: flex;
  flex-direction: column;
  
  border-bottom: solid 1px #ddd;
`

const BannerImage = styled.img`
  width: 80%;
  height: 300px;
  background-color: beige;
  border-radius: 20px;
  
  margin: 20px auto;
`

interface CustomFont {
    fontSize?: string;
    color?: string;
}

const Font = styled.span<CustomFont>`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10px;
`

export {Container, BannerImage, Font}