import React, {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import BookCard from '../books/BookCard';

// import required modules
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

const Recommended=() => {
  const {data: books = []}=useFetchAllBooksQuery();

  return (
    <div className='py-16'>

    <h2 className="text-3x1 font-semibold mb-6">Recommended For You</h2>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true} 
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180:{
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        {
          books.length > 0 && books.map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard book={book} />
            </SwiperSlide>
          ))
        }

      </Swiper>
    </div>
  )
}

export default Recommended;