import Card from 'react-bootstrap/Card';

function MyCardMagazin(props) {
  return (
    <div style={{width: '235px', height: '135px', marginRight: '10px'}}>
      <Card text="primary" style={{ width: '100%', height: '100%'}}>
        <Card.Body className="d-flex flex-col items-center">
          <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/ru/archive/f/f2/20200305075647%21Perekrestok_supermarket_logo_2020.jpg" />
          <Card.Text>{'Время доставки: ' + props.delivery_time + ' мин'}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MyCardMagazin;