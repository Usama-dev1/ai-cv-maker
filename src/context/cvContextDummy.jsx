import React, { createContext, useState} from "react";

export const cvContext = createContext();

export const CvProvider = ({ children }) => {
  const [cvData, setCvData] = useState({
    fullName: "John Doe",
    phone: "+1-234-567-8901",
    email: "johndoe@example.com",
    location: "New York, NY",
    designation: "Software Engineer",
    company: "Tech Innovators Inc.",
    joinDate: new Date("2020-05-15"),
    endDate: new Date("2023-09-01"),
    companyLocation: "San Francisco, CA",
    experience:
      "Developed innovative solutions for web applications using modern technologies. Led a team of developers in creating scalable software solutions.",
    education:
      "Bachelor of Science in Computer Science from University of California, Berkeley.",
    educationStartDate: new Date("2015-09-01"),
    educationEndDate: new Date("2019-06-15"),
    educationLocation: "Berkeley, CA",
    strengths:
      "Strong problem-solving skills, proficient in modern web development technologies, excellent communication skills.",
    awards: "Employee of the Year 2022 at Tech Innovators Inc.",
    achievements:
      "Successfully led a project that increased user engagement by 30%. Implemented a new system that reduced downtime by 15%. ",
    certification: "Certified AWS Solutions Architect",
    certificationDate: new Date("2021-11-20"),
  });


  return (
    <cvContext.Provider value={{ cvData, setCvData }}>
      {children}
    </cvContext.Provider>
  );
};


