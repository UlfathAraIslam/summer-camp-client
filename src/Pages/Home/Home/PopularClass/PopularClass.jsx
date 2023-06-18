
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import useClasses from '../../../../hooks/useClasses';

const PopularClass = () => {
    const [classes] = useClasses();

    const filteredClasses =classes.filter(item => item.category === 'popular');
    const popularClasses = filteredClasses.sort((a, b) => b.number_of_students - a.number_of_students);

    return (
        <section>
            <SectionTitle
            
            heading={'Popular Classes'}
            subHeading={'based on the number of student'}
            />
            
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
        {
            popularClasses.map((classItem, _id) => (
                <SwiperSlide 
                key={_id}
                >
                    <h3 className=' uppercase bg-opacity-20 bg-success'>{classItem.className}</h3>
                    <img src={classItem.classImage} alt={classItem.className} />
                </SwiperSlide>
            ))
        }
      </Swiper>
        </section>
    );
};

export default PopularClass;