import {NavbarItem, NavbarItemBox, NavbarStyled} from "./Navbar.styled";

function Navbar() {
    return (
        <>
            <NavbarStyled>
                <NavbarItemBox justifyContent={'flex-start'}>
                    <NavbarItem><span>Logo</span></NavbarItem>
                </NavbarItemBox>
                <NavbarItemBox justifyContent={'flex-end'}>
                    <NavbarItem><span>업체소개</span></NavbarItem>
                    <NavbarItem><span>포트폴리오</span></NavbarItem>
                    <NavbarItem><span>견적문의</span></NavbarItem>
                </NavbarItemBox>
            </NavbarStyled>
        </>
    )
}

export {Navbar}