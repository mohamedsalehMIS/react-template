import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { PortfolioSection, PortfolioTitle, PortfolioDesc, PortfolioItem, ItemOver, ItemTitle, ItemCont, ItemBtn, ItemImg, BtnShowMore } from './style';


const Portfolio = () => {

    const [Images, setImages] = useState([]);
    useEffect(() => {
        axios.get('js/data.json').then(res => { setImages(res.data.portfolio) })
    }, []);

    const portfolioImages = Images.map((ImgItem) => {
        return (
            <PortfolioItem key={ImgItem.id}>
                <ItemImg src={ImgItem.image} />
                <ItemOver>
                    <ItemTitle>saleh website</ItemTitle>
                    <ItemCont>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis</ItemCont>
                    <ItemBtn>show project</ItemBtn>
                </ItemOver>
            </PortfolioItem>
        )
    })
    return (
        <PortfolioSection>
            <div className="container">
                <PortfolioTitle>our <span className="main-color">works</span></PortfolioTitle>
                <PortfolioDesc>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</PortfolioDesc>
                <div className="box-item">
                    {/* images from data json file */}
                    {portfolioImages}
                    {/* <PortfolioItem>
                        <ItemImg src="images/portfolio/01.jpeg" />
                        <ItemOver>
                            <ItemTitle>saleh website</ItemTitle>
                            <ItemCont>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis</ItemCont>
                            <ItemBtn>show project</ItemBtn>
                        </ItemOver>
                    </PortfolioItem>
                    <PortfolioItem>
                        <ItemImg src="images/portfolio/02.jpg" />
                        <ItemOver>
                            <ItemTitle>saleh website</ItemTitle>
                            <ItemCont>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis</ItemCont>
                            <ItemBtn>show project</ItemBtn>
                        </ItemOver>
                    </PortfolioItem>
                    <PortfolioItem>
                        <ItemImg src="images/portfolio/03.jpg" />
                        <ItemOver>
                            <ItemTitle>saleh website</ItemTitle>
                            <ItemCont>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis</ItemCont>
                            <ItemBtn>show project</ItemBtn>
                        </ItemOver>
                    </PortfolioItem>
                    <PortfolioItem>
                        <ItemImg src="images/portfolio/04.jpg" />
                        <ItemOver>
                            <ItemTitle>saleh website</ItemTitle>
                            <ItemCont>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis</ItemCont>
                            <ItemBtn>show project</ItemBtn>
                        </ItemOver>
                    </PortfolioItem>
                    <PortfolioItem>
                        <ItemImg src="images/portfolio/05.jpg" />
                        <ItemOver>
                            <ItemTitle>saleh website</ItemTitle>
                            <ItemCont>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis</ItemCont>
                            <ItemBtn>show project</ItemBtn>
                        </ItemOver>
                    </PortfolioItem>
                    <PortfolioItem>
                        <ItemImg src="images/portfolio/06.jpg" />
                        <ItemOver>
                            <ItemTitle>saleh website</ItemTitle>
                            <ItemCont>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis</ItemCont>
                            <ItemBtn>show project</ItemBtn>
                        </ItemOver>
                    </PortfolioItem> */}
                </div>
                <BtnShowMore>Show more...</BtnShowMore>
            </div>
        </PortfolioSection>
    )
}

export default Portfolio;