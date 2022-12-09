import { Container } from "./Footer.styled"


function Footer() {
    return(
        <Container>
            <div>
                <span className={"borderRight"}>월 - 금: 09:00 - 18:00 (주말/공휴일 제외)</span>
                <span className={"borderRight"}>팩스 : 051-000-0000</span>
                <span className={"borderRight"}>고객문의 : example.gmail.com</span>
                <span className={"borderEnd"}>제휴문의: example.gmail.com</span>
            </div>
            <div>
                <span className={"borderRight"}>리하우스 대표 : 이선희</span>
                <span className={"borderRight"}>주소 : 부산 금정구 중앙대로 1667번길 10 리하우스</span>
                <span className={"borderEnd"}>사업자등록번호 : 000-00-00000</span>
            </div>
            <div>
                <span className={"borderRight"}>연락처 : 010-0000-0000</span>
                <span className={"borderEnd"}>이메일 : exampleEmail@gmail.com</span>
            </div>
            <div>
                <span className={"borderRight"}>Copyright <span className={"bold"}>LeehouseInterior.</span> All rights reserved</span>
                <span className={"borderEnd"}>Designed by <span className={"bold"}>sonsu0710</span></span>
            </div>

        </Container>
    )
}

export {Footer}