import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './style.css';
import left_img from './assets/img/left_pic2.png';
import frame from '../src/assets/img/Frame.png';
import tower from '../src/assets/img/tower.png';
import train from './assets/img/train.png';
import del from './assets/img/india.png';
import book from './assets/img/book.png';
import more from './assets/img/more.png';
import calander from './assets/img/calendar.png';
import headphone from './assets/img/headphones.png';
import edit from './assets/img/edit.png';
import volume from './assets/img/volume.png';
import notification from './assets/img/notification.png';
import dropdown from './assets/img/dropdown.png';
import profile from './assets/img/profile.png';


function Home() {
    return (
        <div className='main_div '>
            {/* ---------------main row----------------- */}
            <div className='container-fluid d-block'>
                <div className='row ' style={{ maxHeight: "100%" }}>
                    {/* ---------------col -1 ----------------- */}
                    <div className='col-2 bg-white'>
                        {/* --------------- left row 1 ----------------- */}
                        <section>
                            <div className='row  p-3 m-0'>
                                <div className='col-2 col-md-6 col-sm-12 text-start'><span className='text-info'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
                                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                                </svg></span></div>
                                <div className='col-10 col-md-6 col-sm-12  p-0 m-0'>
                                    <div className='row m-0 p-0'>
                                        <div className='col-6 col-md-6 col-sm-6 d-inlne-block m-0 p-0'>
                                            <span className=''><p className='fs-3 global-text text-end m-0 p-0'>SE</p></span>
                                        </div>
                                        <div className='col-6 col-md-6 col-sm-6 d-inlne-block m-0 p-0'>
                                            <div className='row m-0 p-0'>
                                                <p className='col-6 col-md-6 col-sm-6 doat d-inlne-block '>.</p>
                                                <p className='col-6 col-md-6 col-sm-6 d-inlne-block fs-3 text2t text-center m-0 p-0'>T</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ---------------left row2 ----------------- */}
                        <section className='pt-3'>
                            {/* --------------- overview ----------------- */}
                            <div className='row col-12 pt-4'>
                                <div className='col-6'>
                                    <span className='leftrow2 float-end text-info'><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                                        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                                    </svg></span>
                                </div>
                                <div className='col-6 '>
                                    <div className='row  col-12'>
                                        <p className='text-center text-info '>Overview </p>
                                    </div>

                                </div>
                            </div>
                            {/* --------------- course ----------------- */}
                            <div className='row col-12 pt-2 text-secondary'>
                                <div className='col-6'>
                                    <span className='leftrow2 float-end '><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-grid" viewBox="0 0 16 16">
                                        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
                                    </svg></span>
                                </div>
                                <div className='col-6'>
                                    <p className='text-center'>Course</p>
                                </div>
                            </div>
                            {/* --------------- resource ----------------- */}
                            <div className='row col-12 pt-2 text-secondary'>
                                <div className='col-6'>
                                    <span className='leftrow2 float-end '><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-folder" viewBox="0 0 16 16">
                                        <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z" />
                                    </svg></span>
                                </div>
                                <div className='col-6'>
                                    <p className='text-center'>Resource</p>
                                </div>
                            </div>

                            {/* --------------- message ----------------- */}
                            <div className='row col-12 pt-2 text-secondary'>
                                <div className='col-6'>
                                    <span className='leftrow2 float-end '><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                                        <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                                    </svg></span>
                                </div>
                                <div className='col-6'>
                                    <p className='text-center'>Message</p>
                                </div>
                            </div>

                            {/* --------------- settings ----------------- */}
                            <div className='row col-12 pt-2 text-secondary'>
                                <div className='col-6'>
                                    <span className='leftrow2 float-end '><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                                    </svg></span>
                                </div>
                                <div className='col-6'>
                                    <p className='text-center'>Settings</p>
                                </div>
                            </div>

                            {/* --------------- left_img ----------------- */}
                            <div className='col-12'>
                                <div className='row float-center mt-4'>
                                    <img src={left_img} alt='left_img' className=''></img>
                                </div>

                            </div>

                        </section>

                    </div>
                    {/* ---------------col -2 ----------------- */}

                    <div className='col-7 bg-white border-start border-4 border-end px-5'>
                        {/* --------------- col-2-header row ----------------- */}
                        <div className='container-fluid d-block'>
                            <div className='row'>
                                <div className='col-12 py-3 text-info'>
                                    <span ><h6 className='d-inline-block p-1'>Hello </h6><h6 className='d-inline-block fw-bold p-1'> BRUNO,</h6><h6 className='d-inline-block p-1'>Welcome back!</h6></span>
                                </div>
                            </div>
                            {/* --------------- main-col-2-row2_col-1 my courses----------------- */}
                            <div className='row'>
                                {/* <div className='col-12'> */}
                                {/* --------------- my courses col-1 title-1 ----------------- */}
                                <div className='col-6'>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <h3 className='fs-bold'>My Courses</h3>
                                        </div>
                                        <div className='col-6'>
                                            <p className='text-center my-2 text-info'>View All</p>
                                        </div>
                                    </div>
                                    {/* --------------- my courses col-1 row-1 ----------------- */}

                                    <div className='row'>
                                        <div className='col-12'>
                                            {/* --------------- my courses col-1 row-1 left French ------------------ */}
                                            <div className='row bg-info  h-auto p-2 w-100 text-white rounded-4 my-3' >
                                                <div className='col-6'>
                                                    <div className=''>
                                                        <h4>French</h4>
                                                        <p>40 lesson</p>
                                                        {/* --------------- my courses col-1 row-1 progress-1 ----------------- */}
                                                        <div class="course-completed-details">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="50"
                                                                height="50"
                                                                viewBox="0 0 52 52"
                                                                fill="none">
                                                                <circle
                                                                    cx="26"
                                                                    cy="26"
                                                                    r="24"
                                                                    stroke="#006ED3"
                                                                    stroke-opacity="0.4"
                                                                    stroke-width="4"
                                                                />
                                                                <path
                                                                    d="M50 26C50 30.7468 48.5924 35.3869 45.9553 39.3337C43.3181 43.2805 39.5698 46.3566 35.1844 48.1731C30.799 49.9896 25.9734 50.4649 21.3178 49.5388C16.6623 48.6128 12.3859 46.327 9.02944 42.9706C5.67298 39.6141 3.3872 35.3377 2.46115 30.6822C1.53511 26.0266 2.01039 21.201 3.82689 16.8156C5.64339 12.4302 8.71953 8.68188 12.6663 6.04473C16.6131 3.40758 21.2532 2 26 2"
                                                                    stroke="white"
                                                                    stroke-width="4"
                                                                    stroke-linecap="round"
                                                                />
                                                            </svg>
                                                            <span class="course-completed-no">70%</span>
                                                        </div>
                                                    </div>
                                                </div>


                                                {/* --------------- my courses col-1 row-1 right ------------------ */}
                                                <div className='col-6 '>
                                                    <img src={frame} alt='frame_img' className='float-end'></img>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* --------------- my courses col-1 row-2 Italian ----------------- */}

                                    <div className='row'>
                                        <div className='col-12 '>
                                            {/* --------------- my courses col-1 row-2 left ------------------ */}
                                            <div className='row h-auto p-2 w-100 text-white rounded-4 italian'>
                                                <div className='col-6 '>
                                                    <div className=''>
                                                        <h4>Italian</h4>
                                                        <p>10 lesson</p>
                                                        {/* --------------- my courses col-1 row-2 progress-1 ----------------- */}
                                                        <div class="course-completed-details">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="50"
                                                                height="50"
                                                                viewBox="0 0 52 52"
                                                                fill="none">
                                                                <circle
                                                                    cx="26"
                                                                    cy="26"
                                                                    r="24"
                                                                    stroke="#006ED3"
                                                                    stroke-opacity="0.4"
                                                                    stroke-width="4"
                                                                />
                                                                <path
                                                                    d="M2 26C2 22.8483 2.62078 19.7274 3.82689 16.8156C5.033 13.9038 6.80083 11.258 9.02943 9.02944C11.258 6.80083 13.9038 5.03301 16.8156 3.82689C19.7274 2.62078 22.8483 2 26 2"
                                                                    stroke="white"
                                                                    stroke-width="4"
                                                                    stroke-linecap="round"
                                                                />
                                                            </svg>
                                                            <span class="course-completed-no">29%</span>
                                                        </div>
                                                    </div>
                                                </div>


                                                {/* --------------- my courses col-1 row-1 right ------------------ */}
                                                <div className='col-6 '>
                                                    <img src={tower} alt='frame_img' className='float-end'></img>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>




                                {/* --------------- main-col-2-row2_col-2 my courses----------------- */}

                                <div className='col-6'>
                                    <div className='row my-2'>
                                        <div className='col-12 text-end'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search text-dark" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                            </svg> <span className='fs-6 text-secondary'>Search....</span>
                                        </div>
                                    </div>
                                    {/* --------------- my courses col-1 row-1 ----------------- */}

                                    <div className='row '>
                                        <div className='col-12 '>
                                            {/* --------------- my courses col-1 row-1 right portugese ------------------ */}
                                            <div className='row portugese  h-auto p-2 w-100 text-white rounded-4 my-3 mx-3' >
                                                <div className='col-6 '>
                                                    <div className=''>
                                                        <h4>Portugese</h4>
                                                        <p>30 lesson</p>
                                                        {/* --------------- my courses col-1 row-1 progress-1 ----------------- */}
                                                        <div class="course-completed-details">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="50"
                                                                height="50"
                                                                viewBox="0 0 52 52"
                                                                fill="none">
                                                                <circle
                                                                    cx="26"
                                                                    cy="26"
                                                                    r="24"
                                                                    stroke="#006ED3"
                                                                    stroke-opacity="0.4"
                                                                    stroke-width="4"
                                                                />
                                                                <path
                                                                    d="M26 50C22.8483 50 19.7274 49.3792 16.8156 48.1731C13.9038 46.967 11.258 45.1992 9.02944 42.9706C6.80083 40.742 5.033 38.0962 3.82689 35.1844C2.62078 32.2726 2 29.1517 2 26C2 22.8483 2.62078 19.7274 3.82689 16.8156C5.033 13.9038 6.80083 11.258 9.02944 9.02943C11.258 6.80083 13.9038 5.033 16.8156 3.82689C19.7274 2.62078 22.8483 2 26 2"
                                                                    stroke="white"
                                                                    stroke-width="4"
                                                                    stroke-linecap="round"
                                                                />
                                                            </svg>
                                                            <span class="course-completed-no">48%</span>
                                                        </div>
                                                    </div>
                                                </div>


                                                {/* --------------- my courses col-1 row-1 right ------------------ */}
                                                <div className='col-6 my-auto '>
                                                    <img src={train} alt='frame_img' className='float-end'></img>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* --------------- my courses col-1 row-2 Italian ----------------- */}

                                    <div className='row'>
                                        <div className='col-12 '>
                                            {/* --------------- my courses col-1 row-2 left ------------------ */}
                                            <div className='row h-auto p-2 w-100 text-white rounded-4 india mx-3'>
                                                <div className='col-6 '>
                                                    <div className=''>
                                                        <h4>India</h4>
                                                        <p>45 lesson</p>
                                                        {/* --------------- my courses col-1 row-2 progress-1 ----------------- */}
                                                        <div class="course-completed-details">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="50"
                                                                height="50"
                                                                viewBox="0 0 52 52"
                                                                fill="none">
                                                                <circle
                                                                    cx="26"
                                                                    cy="26"
                                                                    r="24"
                                                                    stroke="#006ED3"
                                                                    stroke-opacity="0.4"
                                                                    stroke-width="4"
                                                                />
                                                                <path
                                                                    d="M50 26C50 30.7468 48.5924 35.3869 45.9553 39.3337C43.3181 43.2805 39.5698 46.3566 35.1844 48.1731C30.799 49.9896 25.9734 50.4649 21.3178 49.5388C16.6623 48.6128 12.3859 46.327 9.02944 42.9706C5.67298 39.6141 3.3872 35.3377 2.46115 30.6822C1.53511 26.0266 2.01039 21.201 3.82689 16.8156C5.64339 12.4302 8.71953 8.68188 12.6663 6.04473C16.6131 3.40758 21.2532 2 26 2"
                                                                    stroke="white"
                                                                    stroke-width="4"
                                                                    stroke-linecap="round"
                                                                />
                                                            </svg>
                                                            <span class="course-completed-no">77%</span>
                                                        </div>
                                                    </div>
                                                </div>


                                                {/* --------------- my courses col-1 row-1 right ------------------ */}
                                                <div className='col-6 my-auto'>
                                                    <img src={del} alt='frame_img' className='float-end w-50'></img>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>



                            {/* --------------- planning ------------------ */}

                            <section className='mt-4 '>
                                <div className='row'>
                                    {/* --------------- planning col-1 row-1 left ------------------ */}

                                    <div className='col-6 '>
                                        {/* --------------- planning title ------------------ */}
                                        <div className='col-12'>
                                            <h3 className='d-inline-block fs-bold'>Planning</h3>
                                            <p className='d-inline-block float-end text-info my-2 me-5'>View All</p>
                                        </div>
                                        {/* --------------- planning col-1 row-1 left ------------------ */}
                                        <div className='row book-main rounded-4 py-2 mx-0 col-12 my-3'>

                                            <div className='col-2 my-auto'>
                                                <img src={book} alt='book' className='book rounded-2 p-2'></img>
                                            </div>
                                            <div className='col-8 my-auto text-center px-0'>
                                                <p className='m-0 p-0 fw-bold '>Reading - Beginner Topic 1</p>
                                                <p className='m-0 p-0 text-secondary'>6.00 AM-10.00 PM</p>
                                            </div>
                                            <div className='col-2 my-auto'>
                                                <img src={more} alt='more' className='float-end'></img>
                                            </div>

                                        </div>


                                        {/* --------------- planning col-1 row-2 left ------------------ */}

                                        <div className='row book-main rounded-4 py-2 mx-0 col-12 my-3'>

                                            <div className='col-2 my-auto'>
                                                <img src={headphone} alt='book' className='book rounded-2 p-2 headphone'></img>
                                            </div>
                                            <div className='col-8 my-auto text-center'>
                                                <p className='m-0 p-0 fw-bold '>Reading - Beginner Topic 1</p>
                                                <p className='m-0 p-0 text-secondary'>6.00 AM-10.00 PM</p>
                                            </div>
                                            <div className='col-2 my-auto'>
                                                <img src={more} alt='more' className='float-end'></img>
                                            </div>

                                        </div>

                                        {/* --------------- planning col-1 row-3 left ------------------ */}

                                        <div className='row book-main rounded-4 py-2 mx-0 col-12 my-3'>

                                            <div className='col-2 my-auto'>
                                                <img src={volume} alt='book' className='book rounded-2 p-2 volume'></img>
                                            </div>
                                            <div className='col-8 my-auto text-center'>
                                                <p className='m-0 p-0 fw-bold '>Reading - Beginner Topic 1</p>
                                                <p className='m-0 p-0 text-secondary'>6.00 AM-10.00 PM</p>
                                            </div>
                                            <div className='col-2 my-auto'>
                                                <img src={more} alt='more' className='float-end'></img>
                                            </div>

                                        </div>
                                        {/* --------------- planning col-1 row-4 left ------------------ */}

                                        <div className='row book-main rounded-4 py-2 mx-0 col-12 my-3'>

                                            <div className='col-2 my-auto'>
                                                <img src={edit} alt='book' className='book rounded-2 p-2 edit'></img>
                                            </div>
                                            <div className='col-8 my-auto text-center'>
                                                <p className='m-0 p-0 fw-bold '>Reading - Beginner Topic 1</p>
                                                <p className='m-0 p-0 text-secondary'>6.00 AM-10.00 PM</p>
                                            </div>
                                            <div className='col-2 my-auto'>
                                                <img src={more} alt='more' className='float-end'></img>
                                            </div>

                                        </div>

                                    </div>
                                    {/* --------------- planning col-2 row-1 right ------------------ */}
                                    <div className='col-6 mt-1 '>
                                        {/* --------------- date title ------------------ */}
                                        <div className='col-12 text-end px-3 py-1'>
                                            <img src={calander} alt='calander' className='mx-3'></img>
                                            <span className='  text-info my-2'>20 March 2024</span>
                                        </div>

                                        {/* --------------- planning col-2 row-1 right ------------------ */}
                                        <div className='px-4'>
                                            <div className='row book-main rounded-4 py-2 mx-0 col-12 my-3'>

                                                <div className='col-2 my-auto'>
                                                    <img src={edit} alt='book' className='book rounded-2 p-2 edit'></img>
                                                </div>
                                                <div className='col-8 my-auto text-center'>
                                                    <p className='m-0 p-0 fw-bold '>Reading - Beginner Topic 1</p>
                                                    <p className='m-0 p-0 text-secondary'>6.00 AM-10.00 PM</p>
                                                </div>
                                                <div className='col-2 my-auto'>
                                                    <img src={more} alt='more' className='float-end'></img>
                                                </div>

                                            </div>
                                            {/* --------------- planning col-2 row-2 right ------------------ */}

                                            <div className='row book-main rounded-4 py-2 mx-0 col-12 my-3'>

                                                <div className='col-2 my-auto'>
                                                    <img src={volume} alt='book' className='book rounded-2 p-2 volume'></img>
                                                </div>
                                                <div className='col-8 my-auto text-center'>
                                                    <p className='m-0 p-0 fw-bold '>Reading - Beginner Topic 1</p>
                                                    <p className='m-0 p-0 text-secondary'>6.00 AM-10.00 PM</p>
                                                </div>
                                                <div className='col-2 my-auto'>
                                                    <img src={more} alt='more' className='float-end'></img>
                                                </div>

                                            </div>
                                            {/* --------------- planning col-2 row-3 right ------------------ */}

                                            <div className='row book-main rounded-4 py-2 mx-0 col-12 my-3'>

                                                <div className='col-2 my-auto'>
                                                    <img src={headphone} alt='book' className='book rounded-2 p-2 headphone'></img>
                                                </div>
                                                <div className='col-8 my-auto text-center'>
                                                    <p className='m-0 p-0 fw-bold '>Reading - Beginner Topic 1</p>
                                                    <p className='m-0 p-0 text-secondary'>6.00 AM-10.00 PM</p>
                                                </div>
                                                <div className='col-2 my-auto'>
                                                    <img src={more} alt='more' className='float-end'></img>
                                                </div>

                                            </div>
                                            {/* --------------- planning col-2 row-4 right ------------------ */}

                                            <div className='row book-main rounded-4 py-2 mx-0 col-12 my-3 '>

                                                <div className='col-2 my-auto'>
                                                    <img src={book} alt='book' className='book rounded-2 p-2'></img>
                                                </div>
                                                <div className='col-8 my-auto text-center'>
                                                    <p className='m-0 p-0 fw-bold '>Reading - Beginner Topic 1</p>
                                                    <p className='m-0 p-0 text-secondary'>6.00 AM-10.00 PM</p>
                                                </div>
                                                <div className='col-2 my-auto'>
                                                    <img src={more} alt='more' className='float-end'></img>
                                                </div>

                                            </div>
                                        </div>





                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>

                    {/* ---------------col -3 main----------------- */}
                    <div className='col-3 py-3'>
                        <div className='container'>

                            {/* ---------------col -3 row 1 ----------------- */}
                            <div className='row '>
                                <div className='col-3 my-auto'>
                                    <img src={notification} alt='notification'></img>
                                </div>
                                <div className='col-9 dropdiv rounded-3 p-1'>
                                    <div className='row px-1'>
                                        <div className='col-2 my-auto'>
                                            <img src={profile} alt='profile'></img>
                                        </div>
                                        <div className='col-8 text-center '>
                                            <p className='p-0 m-0'>Brunno Farmadas</p>
                                            <p className='text-info p-0 m-0'>Basic Plan</p>
                                        </div>
                                        <div className='col-2 my-auto'>
                                            <img src={dropdown} alt='dropdown'></img>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* ---------------col -3 row 2 title ----------------- */}
                            <div className='row my-4'>
                                <div className='col-12 '>
                                    <h3 className='fs-bold'>Statistics</h3>
                                </div>
                            </div>
                            {/* ---------------col -3 row 3 cards row 1 ----------------- */}
                            <div className='row'>
                                <div className='col-6'>
                                    <div className='book rounded-4 p-3'>
                                        <p className='p-0 m-0 text-secondary'>Courses</p>
                                        <p className='p-0 m-0 text-secondary'>Completed</p>
                                        <h2 className='border-start fs-bold border-info text-primary ps-4 mt-2 border-3'>02</h2>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='book rounded-4 p-3'>
                                        <p className='p-0 m-0 text-secondary'>TotalPoints</p>
                                        <p className='p-0 m-0 text-secondary'>Gained</p>
                                        <h2 className='border-start fs-bold border-info text-primary ps-4 mt-2 border-3'>250</h2>
                                    </div>
                                </div>
                            </div>

                            {/* ---------------col -3 row 3 cards row 2 ----------------- */}
                            <div className='row mt-4'>
                                <div className='col-6'>
                                    <div className='book rounded-4 p-3'>
                                        <p className='p-0 m-0 text-secondary'>Courses</p>
                                        <p className='p-0 m-0 text-secondary'>In Progress</p>
                                        <h2 className='border-start fs-bold border-info text-primary ps-4 mt-2 border-3'>03</h2>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='book rounded-4 p-3'>
                                        <p className='p-0 m-0 text-secondary'>Tasks</p>
                                        <p className='p-0 m-0 text-secondary'>Finished</p>
                                        <h2 className='border-start fs-bold border-info text-primary ps-4 mt-2 border-3'>05</h2>
                                    </div>
                                </div>
                            </div>
                            
                            {/* ---------------col -3 row 4 chart title ----------------- */}
                            {/* <div className=''> */}
                            <div className='row  mt-4 container'>
                                <div className='col-6'>
                                 <h3 className='fs-bold'>Activity</h3>
                                </div>
                                <div className='text-secondary col-2 text-center my-2'>
                                    <p>Day</p>
                                </div>
                                <div className='text-info col-2 my-2 '>
                                    <p className=' text-center'>Week</p>
                                </div>
                                <div className='text-secondary col-2 my-2'>
                                    <p className='text-start'>Month</p>
                                </div>
                            </div>
                            {/* ---------------col -3 row 5 chart chart ----------------- */}
                            <div className='row mx-auto mt-5'>
                                
                                <div className='col-1 mx-2 '>
                                    <div className='chatcolorfead rounded-3 chatcolorfead1'></div>
                                    <p className='text-secondary text-center ' >Mon</p>
                                </div>
                                <div className='col-1 mx-2'>
                                    <div className='chatcolorfead rounded-3 chatcolorfead2'></div>
                                    <p className='text-secondary text-center '>Tues</p>
                                </div>
                                <div className='col-1 mx-2'>
                                    <div className='chatcolorfead rounded-3 chatcolorfead3'></div>
                                    <p className='text-secondary text-center '>Wed</p>
                                </div>
                                <div className='col-1 mx-2'>
                                    <div className=' rounded-3 chatcolorfead4 bg-info'></div>
                                    <p className='text-secondary text-center'>Thus</p>
                                </div>
                                <div className='col-1 mx-2'>
                                    <div className='chatcolorfead rounded-3 chatcolorfead5'></div>
                                    <p className='text-secondary text-center '>Fri</p>
                                </div>
                                <div className='col-1 mx-2'>
                                    <div className='chatcolorfead rounded-3 chatcolorfead6'></div>
                                    <p className='text-secondary text-center '>Sat</p>
                                </div>
                                <div className='col-1 mx-2'>
                                    <div className='chatcolorfead rounded-3 chatcolorfead7'></div>
                                    <p className='text-secondary text-center '>Sun</p>
                                </div>
                                
                            </div>
                            
                            {/* </div> */}

                        </div>
                    </div>






                </div>
            </div>
        </div>
    )
}
export default Home;