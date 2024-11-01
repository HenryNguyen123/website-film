import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ItemComponent from "./ItemComponent";
import PropTypes from 'prop-types';

SearchComponent.propTypes = {
    keywords: PropTypes.string
  };


export default function SearchComponent ({keywords}) {

    const [item, setItem] = useState([])

    useEffect(() => {
        fetch(import.meta.env.VITE_DOMAIN_API+ 'search/movie?api_key=' + import.meta.env.VITE_DOMAIN_key + '&include_adult=false&language=' + import.meta.env.VITE_API_LANG + '&page=1&query=' + keywords)
        .then(data => data.json())
        .then((data)=>{
            const listdata = data.results.slice(0,8)
            setItem(listdata)
        })
    }, [keywords])

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