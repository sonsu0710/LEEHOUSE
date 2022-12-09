import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  
  margin: 20px auto;
  padding-bottom: 50px;
  border-bottom: solid 1px #ddd;
`

const Title = styled.h1`
  margin: 20px auto 0;
  font-weight: bold;
`

const SubTitle = styled.h3`
  margin: 20px auto 40px;
  font-weight: normal;
`


export {Container, Title, SubTitle}