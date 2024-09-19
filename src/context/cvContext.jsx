import React, { createContext, useEffect, useState } from "react";
import geminiApiCall from "./../util/geminiApiCall"
export const cvContext = createContext();

export const CvProvider = ({ children }) => {
const [cvData, setCvData] = useState({
    personal: [
      {
        fullname: "John Doe",
        phone: "123-456-7890",
        email: "john.doe@example.com",
        location: "New York, NY",
      },
    ],
    experience: [
      {
        designation: "Software Engineer",
        company: "Tech Solutions Inc.",
        joinDate: "2022-01-15",
        endDate: "2023-08-30",
        companyLocation: "New York, NY",
        experience:
          "Developed web applications using React and Node.js, managed databases, and collaborated with cross-functional teams.",
      },
      {
        designation: "Junior Developer",
        company: "Web Innovations Ltd.",
        joinDate: "2020-06-01",
        endDate: "2021-12-31",
        companyLocation: "San Francisco, CA",
        experience:
          "Assisted in front-end development with HTML, CSS, and JavaScript, and supported senior developers with bug fixes and feature enhancements.",
      },
    ],
    education: [
      {
        educationStartDate: "2016-09-01",
        educationEndDate: "2020-06-30",
        educationLocation: "University of California, Berkeley",
        educationDetails:
          "Bachelor of Science in Computer Science. Focused on software development, algorithms, and data structures.",
      },
      {
        educationStartDate: "2014-09-01",
        educationEndDate: "2016-06-30",
        educationLocation: "Community College of San Francisco",
        educationDetails:
          "Associate Degree in Information Technology. Covered fundamentals of programming, networking, and database management.",
      },
    ],
    strengths: [
      {
        personalStrengths:
          "Strong problem-solving skills, excellent communication abilities, and proficiency in multiple programming languages.",
      },
    ],
    awards: [
      {
        personalAwards:
          "Employee of the Month at Tech Solutions Inc. (June 2023).",
      },
      {
        personalAwards:
          "Best Project Award for innovative web application at Web Innovations Ltd. (December 2021).",
      },
    ],
    achievements: [
      {
        personalAchievements:
          "Successfully led the development of a high-traffic e-commerce site, resulting in a 20% increase in sales.",
      },
      {
        personalAchievements:
          "Implemented a new feature that reduced system downtime by 30% through optimized code and infrastructure improvements.",
      },
    ],
    certification: [
      {
        certificationStartDate: "2021-03-01",
        certificationEndDate: "2021-06-01",
        certificationInstitution: "Coursera",
        certificationDetails:
          "Certified in Full-Stack Web Development, including React, Node.js, and MongoDB.",
      },
      {
        certificationStartDate: "2022-09-01",
        certificationEndDate: "2023-01-01",
        certificationInstitution: "Udacity",
        certificationDetails:
          "Advanced Certification in Data Science, including machine learning and data analysis techniques.",
      },
    ],
  });       


  const { data, loading, error, enterPrompt } = geminiApiCall();
// ({
//   personal: [],
//   experience: [],
//   education:[],
//   strengths: [],
//   awards: [],
//   achievements: [],
//   certification: [],
// });

  return (
    <cvContext.Provider value={{ cvData, setCvData,data,loading,error,enterPrompt }}>
      {children}
    </cvContext.Provider>
  );
};
