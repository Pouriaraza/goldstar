"use client"
import Link from 'next/link';
import Image from 'next/image';
import about from "../../public/Images/about.png"
import admission from "../../public/Images/admission.png"
import banner from "../../public/Images/banner.png"
import determine from "../../public/Images/determine.png"
import why from "../../public/Images/why.png"
import "./bootstrap.css";
import "./common.css";
import "./commonrres.css"
const Common = () => {

    return (
        <div className="common_style">

            <section className="about_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about_img-container">
                                <Image src={about} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about_detail-box">
                                <h3>
                                    About our School
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                </p>
                                <div className="">
                                    <a href="" className="call_to-btn btn_white-border">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- end about section --> */}

            {/* <!-- admission section --> */}
            <section className="admission_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="admission_detail-box">
                                <h3>
                                    Admission open
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                </p>
                                <div className="">
                                    <a href="" className="call_to-btn btn_white-border">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="admission_img-container">
                                <Image src={admission} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* <!-- end admission section -->

    <!-- why section --> */}
            <section className="why_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="why_img-container">
                                <Image src={why} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="why_detail-box">
                                <h3>
                                    Why learn on Fanadesh
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                </p>
                                <div className="">
                                    <a href="" className="call_to-btn btn_white-border">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* 

    <!-- end why section -->

    <!-- determine section --> */}
            <section className="determine_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="determine_detail-box">
                                <h3>
                                    Datermine the right for you
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                </p>
                                <div className="">
                                    <a href="" className="call_to-btn btn_white-border">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="determine_img-container">
                                <Image src={determine} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </div>

    );
};


export default Common;