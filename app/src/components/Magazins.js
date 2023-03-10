import Carousel from 'react-bootstrap/Carousel';

import CardGroup from 'react-bootstrap/CardGroup';

import MyCardMagazin from './MyCardMagazin';

function Magazins () {
  return (
    <div className="mx-2 p-6 mt-[50px]"  >
      <h1 className="mx-[180px] mb-4">Магазины</h1>
      <Carousel  interval={null} variant="dark" bsPrefix="pb-10 pl-12 pr-16 carousel">
        <Carousel.Item bsPrefix="mx-20 carousel-item">
          <CardGroup >
            <MyCardMagazin delivery_time={'30'}></MyCardMagazin>
            <MyCardMagazin delivery_time={'30'}></MyCardMagazin>
            <MyCardMagazin delivery_time={'30'}></MyCardMagazin>
            <MyCardMagazin delivery_time={'30'}></MyCardMagazin>
            <MyCardMagazin delivery_time={'30'}></MyCardMagazin>
            <MyCardMagazin delivery_time={'30'}></MyCardMagazin>          
          </CardGroup>
        </Carousel.Item>
        <Carousel.Item bsPrefix="mx-20 carousel-item">
          <CardGroup >
            <MyCardMagazin delivery_time={'30'}></MyCardMagazin>
            <MyCardMagazin delivery_time={'30'}></MyCardMagazin>
            <MyCardMagazin delivery_time={'30'}></MyCardMagazin>
            <MyCardMagazin delivery_time={'30'}></MyCardMagazin>
            <MyCardMagazin delivery_time={'30'}></MyCardMagazin>
            <MyCardMagazin delivery_time={'30'}></MyCardMagazin>
          </CardGroup>
        </Carousel.Item>
        <Carousel.Item bsPrefix="mx-20 carousel-item">
          <CardGroup >
            <MyCardMagazin delivery_time={'30'}></MyCardMagazin>
            <MyCardMagazin delivery_time={'30'}></MyCardMagazin>
            <MyCardMagazin delivery_time={'30'}></MyCardMagazin>
            <MyCardMagazin delivery_time={'30'}></MyCardMagazin>
            <MyCardMagazin delivery_time={'30'}></MyCardMagazin>
            <MyCardMagazin delivery_time={'30'}></MyCardMagazin>
          </CardGroup>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Magazins;