import React from 'react';

const Banner = () => (
    <div>
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://img.freepik.com/free-photo/brainstorm-meeting_1098-15871.jpg?w=826&t=st=1666886454~exp=1666887054~hmac=e4d5ffd2e633ea7b7c7af2aeba918b15a6d222720c5cf1962eb73564f7a8291b"
                    className="w-full"
                    alt=""
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="https://img.freepik.com/free-photo/learning-education-ideas-insight-intelligence-study-concept_53876-120116.jpg?w=826&t=st=1666887366~exp=1666887966~hmac=d991ab1e97c8c9405384ad4476e028fee1fd28cdd5af531adb0f3e298afe8604"
                    className="w-full"
                    alt=""
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://img.freepik.com/free-photo/man-african-ethnicity-using-conference-webcam-communication_482257-5579.jpg?w=826&t=st=1666887389~exp=1666887989~hmac=390bd9c69532b278bd7a49e7e5ca79a42ee5c547d5b5d57099f2b920b1c4deb7"
                    className="w-full"
                    alt=""
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide4" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src="https://img.freepik.com/free-photo/discussing-video-course_1098-13061.jpg?w=826&t=st=1666887484~exp=1666888084~hmac=889314fd42009550e67b33ed33abf0d6f57e0f8e0cea1cc5ef84680faea38f7f"
                    className="w-full"
                    alt=""
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default Banner;
