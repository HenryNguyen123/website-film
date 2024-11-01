import { Button, Card, Col } from "react-bootstrap";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { Context } from "../../until/AppContext";

ItemComponent.propTypes = {
    value: PropTypes.object
  };

export default function ItemComponent({value}) {

    const { dataId, setDataId, modle, setModal, history, setHistory} = useContext(Context)

    const ImgItem = () => {
        const link = value.poster_path == null ? 'https://cdn.browshot.com/static/images/not-found.png' : 'http://image.tmdb.org/t/p/original' + value.poster_path
        return <Card.Img variant="top" src={link} />
    }

    const handleOnclick = () => {
        setModal(true)
        setDataId(value.id)

        if (!history.includes(value)) {
            setHistory((data) => [...data, value])
        }
    }

    return (
        <>
            <Col sm={3} className="mb-3">
                    <Card style={{ width: '18rem' }}>
                        <ImgItem></ImgItem>
                        <Card.Body>
                            <Card.Title>{value.original_title}</Card.Title>
                            <Card.Text>{value.release_date}</Card.Text>
                            <Button variant="primary" onClick={handleOnclick}>Xem chi tiết</Button>
                        </Card.Body>
                    </Card>
                </Col>
        </>

    )
}