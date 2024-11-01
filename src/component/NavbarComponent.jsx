import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ModalMovieSeenComponent from './ModalMovieSeenComponent';


NavbarComponent.propTypes = {
    handleGenreID: PropTypes.func
  };

export default function NavbarComponent({handleGenreID}) {

    const [genre, setGenre] = useState([])
    const [lgShow, setLgShow] = useState(false)

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

                    <Button variant='primary' onClick={() => setLgShow(true)}>
                        Movie seen
                    </Button>
                </Nav>
                </Container>
            </Navbar>

            <ModalMovieSeenComponent lgShow={lgShow} setLgShow={setLgShow}></ModalMovieSeenComponent>
           
        </>
    )
}