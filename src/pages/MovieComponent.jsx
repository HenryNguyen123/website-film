import { Container, Form, Row } from "react-bootstrap";
import { useCallback, useContext, useEffect, useState } from "react";
import NavbarComponent from "../component/NavbarComponent";
import SliderComponent from "../component/SliderComponent";
import PartComponent from "../component/PartComponent";
import { listDataHomePage } from "../data.js";
import GenreComponent from "../component/GenreComponent.jsx";
import SearchComponent from "../component/SearchComponent.jsx";
import ModalCustomComponent from "../component/ModalCustomComponent.jsx";
import { Context } from "../../until/AppContext.jsx";

export default function MovieComponent() {
    const [idMovie, setIdMovie] = useState('')
    const [search, setSearch] = useState('')
    const [searchDebounce, setSearchDebounce] = useState('')
    const { modal, setModal } = useContext(Context)
    
    const handleGenreID = (id) => {
        if(id != 'home') {
            setIdMovie(id)
        } else {
            setIdMovie('')
        }

        setSearch('')
        setSearchDebounce('')
    }

    const handleOnchangeSearch = (e) => {
        setSearch(e.target.value)
    }

    const RenderMovie = useCallback(() => {
        if (idMovie == '' && searchDebounce == '') {
            return listDataHomePage.map((value, key) => (
                    <PartComponent api={value.api} title={value.title} key={key}></PartComponent>
                ))
        } else {
            if (searchDebounce != '') {
                return <SearchComponent keywords={searchDebounce}></SearchComponent>
            }
            return <GenreComponent genre={idMovie}></GenreComponent>
        }
    }, [idMovie, searchDebounce])

    useEffect(() => {
        const debounceId = setTimeout(() => {
            setSearchDebounce(search)
        }, 1000);

        return () => {
            clearTimeout(debounceId)
        }
    }, [search])

    return (
        <>
            <SliderComponent></SliderComponent>
            
            <NavbarComponent handleGenreID={handleGenreID}></NavbarComponent>

            <Container className="mp-3 mt-3">
                <Row>
                    <Form.Control
                        type="text"
                        id="search"
                        aria-describedby="passwordHelpBlock"
                        placeholder="vui lòng nhập vào ô tìm kiếm ...."
                        value={search}
                        onChange={handleOnchangeSearch}
                    />
                </Row>
            </Container>

            {/* {
                listDataHomePage.map((value, key) => (
                    <PartComponent api={value.api} title={value.title} key={key}></PartComponent>
                ))
            }


            <GenreComponent genre={idMovie}></GenreComponent> */}

            <RenderMovie></RenderMovie>

            { modal && <ModalCustomComponent show={modal}></ModalCustomComponent> }

        </>
    )
}