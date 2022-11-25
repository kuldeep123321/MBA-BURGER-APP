import React from 'react'
import me from "../../assets/11.jpg"
import { Link } from 'react-router-dom';
import {MdDashboard} from "react-icons/md";

const Profile = () => {
  return <section className='profile'>
    <main>
      <img src={me} alt="User"/>
      <h5>Kuldeep</h5>
      <div>
        <Link to="/admin/DashBoard"><MdDashboard/>Dashboard</Link>
      </div>
      <div>
        <Link to="/myorders">Orders</Link>
      </div>
    <button>LogOut</button>

    </main>

  </section>
}

export default Profile