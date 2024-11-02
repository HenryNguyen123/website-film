import { Badge, ListGroup, Modal } from "react-bootstrap";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { Context } from "../../until/AppContext";
import { Trash } from "react-bootstrap-icons";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


ModalMovieSeenComponent.propTypes = {
    lgShow: PropTypes.bool,
    setLgShow: PropTypes.func
  };

export default function ModalMovieSeenComponent({lgShow, setLgShow}) {

    const {history, setHistory} = useContext(Context)


    const handleDeleteMovie = (idmovie) =>{

        if (idmovie > -1) {
            setHistory((current) => current.filter((v, k) => k!=idmovie))
            toast('Delete movie film successfully')
        }
    }

    return(
        <>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Large Modal
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup as="ol" numbered>
                        {
                            history.length > 0 ?
                                history.map((vaule, key) => (
                                    <ListGroup.Item key={key} as="li" className="d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">{vaule.title}</div>
                                            <p>{vaule.overview}</p>
                                            <p>Ngày khởi chiếu: {vaule.release_date}</p>
                                        </div>
                                        <Badge bg="danger" style={{cursor : 'pointer'}} onClick={() => handleDeleteMovie(key) }>
                                            <Trash></Trash>
                                        </Badge>
                                    </ListGroup.Item>
                                ))
                                
                            : 'bạn chưa xem bất kỳ bộ phi nào!'
                        }

                    </ListGroup>
                </Modal.Body>
            </Modal>

            <ToastContainer></ToastContainer>
        </>
    )
}