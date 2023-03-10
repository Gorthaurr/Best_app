import { React } from 'react';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Profile(props) {
    
  return (
    <div onClick={props.close} className="d-flex justify-end">
      <Modal 
        show={props.show} 
        onHide={props.show} 
        onClick={e => e.stopPropagation()}
      >
        <Modal.Header >
          <Modal.Title bsPrefix="mx-2">Антон</Modal.Title>
        </Modal.Header>
        <ListGroup  bsPrefix="border-0 mx-4 my-2">
          <ListGroup.Item>Мои данные</ListGroup.Item>
          <ListGroup.Item>Мои адреса</ListGroup.Item>
          <ListGroup.Item>Мои заказы</ListGroup.Item>
          <ListGroup.Item>Уведомления</ListGroup.Item>
          <ListGroup.Item>Выйти</ListGroup.Item>
        </ListGroup>
      </Modal>
    </div>
  );
}

export default Profile;