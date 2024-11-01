
import PropTypes from 'prop-types';

import { Badge, Container, Row } from "react-bootstrap";
import ItemComponent from "./ItemComponent";
import { useEffect, useState } from "react";

PartComponent.propTypes = {
    api: PropTypes.string,
    title: PropTypes.string 
  };

export default function PartComponent({api, title}) {

    const [item, setItem] = useState([])

    useEffect(() => {
        fetch(api)
        .then(data => data.json())
        .then((data)=>{
            const listdata = data.results.slice(0,8)
            setItem(listdata)
        })
    }, [])

    return (
        <>
            <Container>
                <h1>
                    <Badge bg='secondary'>{title}</Badge>
                </h1>

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