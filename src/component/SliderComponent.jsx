import Carousel from 'react-bootstrap/Carousel';
import { sliderData } from '../data.js';

export default function SliderComponent() {

    
    return (
        <>
            <Carousel data-bs-theme="dark">
            {
                sliderData.map((value, key) => (
                    <Carousel.Item key={key}>
                        <img
                        className="d-block w-100 slider-background"
                        src={value.img}
                        alt={value.title}
                        />
                        <Carousel.Caption>
                        <h5>{value.title}</h5>
                        <p>{value.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }

            </Carousel>
        
        </>
    )
}