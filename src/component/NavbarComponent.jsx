import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

NavbarComponent.propTypes = {
    handleGenreID: PropTypes.func
  };

export default function NavbarComponent({handleGenreID}) {

    const [genre, setGenre] = useState([])

    useEffect(() => {
        fetch(import.meta.env.VITE_DOMAIN_API+'genre/movie/list?api_key=' + import.meta.env.VITE_DOMAIN_key + '&language='+ import.meta.env.VITE_API_LANG)
        .then(data => data.json())
        .then((data) => {
            setGenre(data.genres.slice(0,14))
        })
    }, [])

    const handleOnclick = (id) => {
        handleGenreID(id)
    }

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#home" onClick={() => handleOnclick('home')}>Home</Navbar.Brand>
                <Nav className="me-auto">
                    {
                        genre.map((value, key) => (
                            <Nav.Link key={key} href="#" onClick={() => handleOnclick(value.id)}>{value.name}</Nav.Link>
                        ))
                    }
                </Nav>
                </Container>
            </Navbar>
           
        </>
    )
}