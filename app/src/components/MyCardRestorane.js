import Card from 'react-bootstrap/Card';

function MyCardRestorane() {
  return (
    <div style={{width: '345px', height: '205px', marginRight: '30px', marginBottom: '100px'}}>
      <Card text="primary" style={{ width: '100%', height: '100%', marginBottom: '10px'}}>
        <Card.Body className="d-flex flex-col items-center">
          <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/ru/archive/f/f2/20200305075647%21Perekrestok_supermarket_logo_2020.jpg" />
        </Card.Body>
      </Card>
    </div>
  );
}

export default MyCardRestorane;