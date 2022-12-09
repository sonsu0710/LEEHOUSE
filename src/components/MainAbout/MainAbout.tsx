
import {BannerImage, Container, Font} from "./MainAbout.styled";

function MainAbout() {
    return (
        <>
            <Container>
                <BannerImage/>
                <Font fontSize={"24px"}>빠른 상담 신청</Font>
                <Font fontSize={"18px"}>상담 신청시 미팅이 가능합니다</Font>
            </Container>
        </>
    )
}

export {MainAbout}