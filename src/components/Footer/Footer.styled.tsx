import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 250px;
  
  display: flex;
  flex-direction: column;
  
  div {
    //display: inline-block;
    .borderRight {
      border-right: solid 1.5px #ddd;
      padding-left: 10px;
      padding-right: 10px;
    }
    .borderEnd {
      border-right: none;
      padding-left: 10px;
    }
    .bold {
      font-weight: bold;
    }
  }
  
  span {
    transform: rotate(0.03deg);
    font-size: 13px;
    color: #999999;
  }
  
  
`



export {Container}