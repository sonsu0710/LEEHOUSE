import {Container, SubTitle, Title} from "./ReservationInfo.styled"
import {MapComponent} from "../Map/MapComponent";


function ReservationInfo() {
    return (
        <Container>
            <Title>Reservation Info</Title>
            <SubTitle>리하우스 인테리어 찾아오시는 길</SubTitle>
            <MapComponent/>
        </Container>

    )
}

export {ReservationInfo}


