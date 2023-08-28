import "./form.css"
import { NavLink } from "react-router-dom"


export default function Form() {
  return (
    <div className="login-container">
    <div className="login-box">
      <h2> Attendance from</h2>

      <input type="text" placeholder="Student Name"></input><br /><br></br>
      <input type="text" placeholder="Registration Number"></input><br /><br></br>
      <input type="text" placeholder="email"></input><br/><br></br>
      <input type="text" placeholder ="number" ></input><br /><br></br>
      <input type="text" placeholder="department"></input><br /><br></br>
      <label>
        Attendance Status:
        <select>
          <option value="present">Present</option>
          <option value="absent">Absent</option>
        </select>
      </label><br /><br></br>
      <button>Submit</button>
    </div>
  </div>
      
  )
}