import Image from "next/image";
import teacher1 from "../../public/Images/teacher/teacher1.jpg"
import teacher2 from "../../public/Images/teacher/teacher2.jpg"
import teacher3 from "../../public/Images/teacher/teacher3.jpg"
import "./teachers.scss"
const Teacher = () => {
    return (
        <section className="teacher">
            <h6>Meet the teachers</h6>
            <h2>Experts in giving your children best start</h2>
            <section className="grid-teacher">
                <div className="item-teacher">
                    <Image src={teacher1} alt="teacher img" />
                    <h4>Name teacher</h4>
                    <span>
                        loram is the best text for test
                    </span>
                </div>
                <div className="item-teacher">
                    <Image src={teacher2} alt="teacher img" />
                    <h4>Name teacher</h4>
                    <span>
                        loram is the best text for test
                    </span>
                </div>
                <div className="item-teacher">
                    <Image src={teacher3} alt="teacher img" />
                    <h4>Name teacher</h4>
                    <span>
                        loram is the best text for test
                    </span>
                </div>
            </section>
        </section>
    );
};

export default Teacher;
