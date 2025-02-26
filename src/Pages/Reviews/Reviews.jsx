
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import reviewer from "../../../public/me.jpg"

const Reviews = () => {
    return (
        <div className='pt-16 lg:pt-20'>
        <div>
            <div className=' mb-20 '>
                <div className='flex justify-center'>
                    <p className="text-[rgb(116,155,63)] p-2 text-center  w-28 bg-lime-100  ">Testimonial</p>

                </div>

                <div>
                    <h1 className='text-center font-bold text-3xl  lg:text-5xl mt-5'>What Our Customers Say</h1>
                    <p className=' text-justify mr-2 ml-2 mt-5'>This app is praised for its user-friendly interface, allowing donors to schedule and manage appointments easily. Users appreciate features like RapidPass, which streamlines the donation process, and the ability to track where their blood is utilized. One user noted, 'Great for scheduling. Great for Rapid Pass. Enjoy seeing where the blood goes</p>
                </div>

            </div>
            <div>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='lg:flex justify-center items-center pb-10'>
                            <div className='w-full lg:w-1/2'>
                                <img className='mx-auto w-3/4 rounded-full ' src={reviewer} alt="" />
                            </div>
                            <div className='w-full lg:w-1/2'>
                                <p className='text-justify ml-2 mr-2 mt-5 lg:mt-0 '>With a high rating of 4.9 out of 5 from over 22,000 reviews, this app simplifies the donation process in Australia. Users find it convenient for booking appointments and appreciate the friendly interactions with staff. A reviewer shared, 'Cheers for the app! It makes donating blood heaps easier—absolute game changer!'</p>
                                <p className='mt-6 '><b>Sadman Shakib-</b>user</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='lg:flex justify-center items-center pb-10'>
                            <div className='w-full lg:w-1/2'>
                                <img className='mx-auto w-3/4 rounded-full' src={reviewer} alt="" />
                            </div>
                            <div className='w-full lg:w-1/2'>
                                <p>This app addresses the urgent need for blood donations by connecting donors with recipients. Users value its role in simplifying the process of finding blood donors during emergencies. One user mentioned, 'I've faced situations with friends in need of immediate blood donations... This app simplifies...</p>
                                <p className='mt-6 '><b>Sadman Shakib-</b>user</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='lg:flex justify-center items-center pb-10'>
                            <div className='w-full lg:w-1/2'>
                                <img className='mx-auto w-3/4 rounded-full' src={reviewer} alt="" />
                            </div>
                            <div className='w-full lg:w-1/2'>
                                <p>Available on the Amazon Appstore, this app has received mixed reviews. While some users find it excellent, others have faced challenges. A reviewer stated, 'Excellent in all fronts,' while another mentioned, 'I don't recommend this app.</p>
                                <p className='mt-6 '><b>Sadman Shakib-</b>user</p>
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
        </div>
    </div>
    );
};

export default Reviews;