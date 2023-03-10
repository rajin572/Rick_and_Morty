import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Card from "../../Shared/Card/Card";

const MeetTheCast = () => {
    const [charecter, setCharecter] = useState([])

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(data => {
            setCharecter(data.results)
        })
    },[])
    console.log(charecter);
  return (
    <div>
      <div>
        <h1>Meet The Cast</h1>
        <button>View All</button>
      </div>
      <div className=" w-[95%] mx-auto">
      <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={100}
      slidesPerView={5}
      navigation={true}
    >
                  {
                    charecter.map(c => <SwiperSlide key={c.id}><Card props={c}></Card></SwiperSlide>)
                }
      </Swiper>
      </div>
    </div>
  );
};

export default MeetTheCast;
