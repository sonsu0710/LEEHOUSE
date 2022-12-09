import styled from "styled-components";

const NavbarStyled = styled.div`
  width: 100%;
  height: 80px;
  
  display: flex;
  justify-content: space-between;
`

const NavbarItemBox = styled.div<{justifyContent: string}>`
  width: 40%;
  height: 50px;
  
  display: flex;
  justify-content: ${props => props.justifyContent};
  
  margin-top: 30px;
  margin-right: 5%;
`

const NavbarItem = styled.div`
  width: 10%;
  min-width: 80px;
  height: 50px;
  padding-left: 5%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  
  span {
    font-weight: bold;
    transform: rotate(0.03deg);
  }
  &:hover {
    cursor: pointer;
  }
`

export {NavbarStyled, NavbarItemBox, NavbarItem}