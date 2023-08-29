import React from "react"
import background from "../../imgs/RedMarmosetLogo.png"
import "./home.css"

export default function Home() {
  return (
    <div className="app"
      //style={{
        //backgroundImage: `url(${background})`,
        //backgroundRepeat: "no-repeat",
        //width: "100%",
        //height: "100%",}}
        >
      <h1>Online attendece</h1>
      <div className="main">
        <div className="left">
          <h3>Overview</h3>
          <b>. This app consists of 4 modules.</b>
          <b>. The first one is login where in user can register and login with his credentials.</b>
          <b>. The second one is to for the students where in students come in and mark their attendence.</b>
          <b>. The third one is for the teachers where in they will overview all the students details.</b>
        </div>
        <div className="right">
          <h3>Note</h3>
          <b>. No proxies are entertainded, everything will be monitered</b>
          <b>. Students need to submit the proofs to their respective faculties for processing the ods</b>
          <b>. No relaxation for anyone upon attendence expect any medical condition or in a internship</b>
        </div>
      </div>
    </div >
  )
}