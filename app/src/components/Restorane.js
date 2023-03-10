import Carousel from 'react-bootstrap/Carousel';

import CardGroup from 'react-bootstrap/CardGroup';


import MyCardRestorane from './MyCardRestorane';

function Restorane () {
  return (
    <div className="mx-8 p-6">
      <h1 className="mx-[140px] mb-4">Рестораны</h1>
      <Carousel interval={null} variant="dark" bsPrefix="pr-12  carousel">
        <Carousel.Item>
          <CardGroup bsPrefix="ml-[140px] card-group">
            <MyCardRestorane></MyCardRestorane>
            <MyCardRestorane></MyCardRestorane>
            <MyCardRestorane></MyCardRestorane>
            <MyCardRestorane></MyCardRestorane>    
          </CardGroup>
        </Carousel.Item>
        <Carousel.Item>
          <CardGroup bsPrefix="ml-[140px] card-group">
            <MyCardRestorane></MyCardRestorane>
            <MyCardRestorane></MyCardRestorane>
            <MyCardRestorane></MyCardRestorane>
            <MyCardRestorane></MyCardRestorane>    
          </CardGroup>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Restorane;