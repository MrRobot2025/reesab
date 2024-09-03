import "../styles/about.css";
import Image from "next/image";
import school1 from "../../public/image.png";
import school2 from "../../public/kv.png";
export default function About() {
    //test
    return (
        <div className="about">
            <h1 className="name">Rishabh Singh</h1>
            <div className="line"></div>
            <div className="section">
                <h1>Education</h1>
                <div className="school">
                    <div className="school-container">
                        <Image className="sch-logo" src={school2} alt="MNNIT Allahabad logo" />
                        <div className="sch-details">
                            <h2>Motilal Nehru National Institute of Technology</h2>
                            <p>Bachelor&apos;s of Technology | Chemical Engineering</p>
                            <span>2020-2024</span>
                        </div>
                    </div>
                    <div className="school-container">
                        <Image className="sch-logo" src={school2} alt="MNNIT Allahabad logo" />
                        <div className="sch-details">
                            <h2>Kendriya Vidayalaya COD Chheoki Naini</h2>
                            <p>Intermediate | Physics | Chemistry | Math | Computer Science</p>
                            <span>2017-2019</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="section">
                <h1>Skills</h1>
                <p><b>Programming Languages:</b> C, C++, Java, Python, JavaScript, HTML.</p>
                <p><b>Framework/library:</b> ReactJs, NextJs, SprintBoot, ExpressJs.</p>
            </div>
            <div className="line"></div>
            <div className="section">
                <h1>Experience</h1>
                <div className="employee">
                    <div className="school-container">
                        <Image className="sch-logo" src={school2} alt="MNNIT Allahabad logo" />
                        <div className="sch-details">
                            <h2>Software Engineer</h2>
                            <p>Full Time | Bengaluru</p>
                            <span>June 2024 - present</span>
                        </div>
                    </div>
                    <div className="work">
                        <p><b>- Programming Languages:</b> C, C++, Java, Python, JavaScript, HTML.</p>
                        <p><b>- Framework/library:</b> ReactJs, NextJs, SprintBoot, ExpressJs.</p>
                    </div>
                </div>
                <div className="employee">
                    <div className="school-container">
                        <Image className="sch-logo" src={school2} alt="MNNIT Allahabad logo" />
                        <div className="sch-details">
                            <h2>Software Engineer</h2>
                            <p>Intern | Bengaluru</p>
                            <span>April 2024 - June 2024 </span>
                        </div>
                    </div>
                    <div className="work">
                        <p><b>- Programming Languages:</b> C, C++, Java, Python, JavaScript, HTML.</p>
                        <p><b>- Framework/library:</b> ReactJs, NextJs, SprintBoot, ExpressJs.</p>
                    </div>
                </div>
                

            </div>
            <div className="line"></div>
        </div>
    );
}