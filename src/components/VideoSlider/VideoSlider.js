import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './VideoSlider.css';
import FirstWriter from '../../images/SIMONE BILES.jpg';
import SecondtWriter from '../../images/MASSIMO BOTTURA.jpg';
import ThirdWriter from '../../images/WOLFGANG PUCK.jpg';
import Details from '../Details/Details';

const items= [
  {
    id: 1,
    src: FirstWriter,
    altText: 'Slide 1',
    caption: 'SIMONE BILES',
    writerName: "SIMONE BILES",
    Spcialization: "TEACHES GYMNASTICS FUNDAMENTALS",
    hint: "Online courses taught by the world's greatest minds .. learn from SIMONE BILES and all 60+ other insturctors ",
    price: "700$"
  },
  {
    id: 2,
    src: SecondtWriter,
    altText: 'Slide 2',
    caption: 'MASSIMO BOTTURA',
    writerName: "MASSIMO BOTTURA",
    Spcialization: "TEACHES MODERN ITALIAN COOKING",
    hint: "Online courses taught by the world's greatest minds .. learn from MASSIMO BOTTURA and all 60+ other insturctors",
    price: "500$"
  },
  {
    id: 3,
    src: ThirdWriter,
    altText: 'Slide 3',
    caption: 'WOLFGANG PUCK',
    writerName: "WOLFGANG PUCK",
    Spcialization: "TEACHES COOKING TECHNIQUES III: SEAFOOD, SOUS VIDE, AND DESSERTS",
    hint: "Online courses taught by the world's greatest minds .. learn from WOLFGANG PUCK and all 60+ other insturctors",
    price: "600$"
  }
];


const VideoSlider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    console.log("next");

  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
    console.log("previous")
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        id={item.id}
      >
        <Link to={"/videoDetails/"+item.id}  >
        <img className="Author" src={item.src} alt={item.altText} />
        </Link>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption}
          imageId={item.id} />
      </CarouselItem>
    );
  });
  

  return (
    <div>
      <Details dataLists={items} id={activeIndex}></Details>

      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}
        />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      </div>

  );
}

export default VideoSlider;
