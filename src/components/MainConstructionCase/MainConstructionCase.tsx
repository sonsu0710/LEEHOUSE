import {
    Container,
    Item,
    ItemContainer,
    ItemContentBox,
    ItemImg, ItemPrice,
    ItemTitle, ItemTypes, SeeMoreBtn,
    Tab,
    TabMenu,
    Title
} from "./MainConstructionCase.styled";
import {useEffect, useState} from "react";
import axios from "axios";


interface Info {

    id: number;
    title: string;
    floorSpace: number;
    price: number;
    image: string;


    // itemData: {
    //     id: number,
    //     title: string,
    //     floorSpace: number,
    //     price: number,
    //     image: string
    // }[];
}

function MainConstructionCase() {

    const [items, setItems] = useState<Info[]>([]);
    useEffect(() => {
        axios
            .get('https://my-json-server.typicode.com/sonsu0710/LEEHOUSE_DB/db')
            .then((res) => {
                let data = res.data.itemData;
                console.log(data);
                setItems(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    console.log(items);

    return (
        <Container>
            <Title>인테리어 시공 사례</Title>
            <Tab>
                <TabMenu><span>10평대</span></TabMenu>
                <TabMenu><span>20평대</span></TabMenu>
                <TabMenu><span>30평대</span></TabMenu>
                <TabMenu><span>40평대</span></TabMenu>
            </Tab>
            <ItemContainer>
                {
                    items ? items.map((item, idx) => {
                        if (idx <= 8) {
                            return (
                                <Item key={item.id}>
                                    <ItemImg src={item.image}/>
                                    <ItemContentBox>
                                        <ItemTitle>{item.title} <span>{item.floorSpace}평</span></ItemTitle>
                                        <ItemTypes>욕실, 싱크대, 타일, 조명, 도배</ItemTypes>
                                        <ItemPrice>{item.price} <span>만원</span></ItemPrice>
                                    </ItemContentBox>
                                </Item>
                            )
                        }
                        else {
                            return null;
                        }
                    }) : null
                }
                <SeeMoreBtn>10평대 인테리어 더보기</SeeMoreBtn>
            </ItemContainer>
        </Container>
    )
}

export default MainConstructionCase