import { Container, Row } from "react-bootstrap";
import ItemComponent from "./ItemComponent";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

GenreComponent.propTypes = {
    genre: PropTypes.number
  };


export default function GenreComponent ({genre}) {

    const [item, setItem] = useState([])

    useEffect(() => {
        fetch(import.meta.env.VITE_DOMAIN_API+ 'discover/movie?api_key=' + import.meta.env.VITE_DOMAIN_key + '&with_genres=' + genre)
        .then(data => data.json())
        .then((data)=>{
            const listdata = data.results.slice(0,8)
            setItem(listdata)
        })
    }, [genre])

    return (
        <>
            <Container>
                <Row>
                        {
                            item.map((value, key) => (
                                <ItemComponent value={value} key={key}></ItemComponent>
                            ))
                        }
                </Row>
            </Container>
            
        
        </>
    )
}