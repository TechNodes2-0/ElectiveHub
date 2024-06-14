/** @format */

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Syllbus from "./Components/Syllbus/Syllbus";
import SujectInfo from "./Components/SyllbusInfo/SyllbusInfo";
import ProtectedRoutes from "./Pages/ProtectedRoutes";
import PrivateRoutes from "./Pages/PrivateRoutes";
import ErrorBoundary from "./Pages/ErrorBoundary";
import Homepage from "./Pages/HomePage";
import StudentHome from "./Pages/StudentHome";
import StudentForm from "./Components/Student/StudentForm";
import EditStudent from "./Components/Student/EditStudent";
import SubjectNavbar from "./Components/SubjectNavbar";
import SubjectHome from "./Pages/SubjectHome";
import EditSubject from "./Components/Subject/EditSubject";
import SubjectForm from "./Components/Subject/SubjectForm";
import StudentSubject from "./Components/Student/StudentSubject";
import EditStudentSubject from "./Components/Student/EditStudentSubject";
import StudentsForSubject from "./Components/Subject/StudentsForSubject";
import AdminRoutes from "./Pages/AdminRoutes";
import LearningPath from "./Pages/LearningPath";
import AlanAIComponent from "./alan";
import Error from "./Components/Error";
import Charts from "./Components/Charts";
import Dashboard from "./Components/Dashboard";
import StudentVideo from "./Pages/StudentVideo";
import Disscussion from "./Components/Disscussion/Disscussion";
import SubDisscussion from "./Components/Disscussion/SubDisscussion";
import LocomotiveScroll from 'locomotive-scroll';

// this is temporary imports
import StudentNavbar from "./Components/StudentNavbar";
import Admin from "./Pages/AdminPage/Admin";
import Contact from "./Components/Contact";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Licensing from "./Pages/Licensing";

function App() {
  // const token = cookies.get("TOKEN");
  
const locomotiveScroll = new LocomotiveScroll();
  
    const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return(
    !loading && (
    <>
      <AlanAIComponent />
      {/* <h1>{import.meta.env.VITE_API_URL}</h1> */}
      <Routes>
        <Route path="/" element={<Homepage />}></Route>

        <Route element={<PrivateRoutes />}>
          <Route element={<AdminRoutes />}>
            <Route
              path="Home"
              element={
                <>
                  <Navbar />
                  <Home />
                </>
              }
            ></Route>

            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/add-subject" element={<SubjectForm />}></Route>
            <Route path="/editsubject/:id" element={<EditSubject />}></Route>
            <Route
              path="/edit-student-subject/:studentId/:electiveSubjectId"
              element={<EditStudentSubject />}
            ></Route>
            <Route
              path="/add-subject-to-student/:id"
              element={<StudentSubject />}
            ></Route>
            <Route
              path="/add-student-to-subject/:id"
              element={<StudentsForSubject />}
            ></Route>
          </Route>
          <Route path="Student" element={<StudentHome />}></Route>
        </Route>

        <Route
          path="/Login"
          element={
            <>
              <Navbar />
              <Login />
            </>
          }
        ></Route>
        <Route
          path="/Signup"
          element={
            <>
              <Navbar /> <Signup />
            </>
          }
        ></Route>

        {/* Enter routes from here Yash Suthar */}

        <Route
          path="/LearningPath"
          element={
            <>
              <StudentNavbar /> <LearningPath />
            </>
          }
        />

        {/* This is end1 */}
        <Route path="/add-student" element={<StudentForm />}></Route>
        <Route path="/edit/:id" element={<EditStudent />}></Route>
        <Route path="/Subject" element={<SubjectHome />}></Route>
        <Route path="/Syllbus" element={<Syllbus />}></Route>
        <Route path="/Disscussion" element={<Disscussion />}></Route>
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
        <Route path="/licensing" element={<Licensing/>}/>
        <Route path="/SubDisscussion" element={<SubDisscussion />}></Route>
        <Route path="/Chart" element={<Charts />}></Route>

        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route
          path="/subject-video"
          element={
            <>
              <StudentNavbar />
              <StudentVideo />
            </>
          }
        />
        <Route path="/Syllbus/:id" element={<SujectInfo />}></Route>
        <Route path="/SujectInfo" element={<SujectInfo />}></Route>
        <Route path="/Error" element={<Error />}></Route>

        {/* Redirect to the Error route for any unmatched routes */}
        <Route path="*" element={<Navigate to="/Error" />} />
      </Routes>
      <Footer />
  
    </>
    )
  );
}

export default App;
