import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../until/AppContext';

ModalCustomComponent.propTypes = {
    show: PropTypes.bool
  };

export default function ModalCustomComponent({show}) {

  const {dataId, setModal} = useContext(Context)

  const [data, setData] = useState({})
  const [actor, setActor] = useState([])

  useEffect(() => {
    fetch(import.meta.env.VITE_DOMAIN_API+ 'movie/' + dataId + '?api_key=' + import.meta.env.VITE_DOMAIN_key + '&append_to_response=videos')
    .then(data => data.json())
    .then((data) => {
      setData(data)
    })

    fetch(import.meta.env.VITE_DOMAIN_API+ 'movie/' + dataId + '/casts?api_key=' + import.meta.env.VITE_DOMAIN_key)
    .then(data => data.json())
    .then((data) => {
      setActor(data.cast.slice(0,10))  
    })
  }, [])

  const handleCloseButton = () => {
    setModal(false)
  }
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onClick={handleCloseButton}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Detail movie
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{data.title}</h4>
        <p>{data.overview}</p>
        <ul>
          {
            actor.map((value, key) => (
              <li key={key}>{value.original_name} - {value.character}</li>
            ))
          }
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCloseButton}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
