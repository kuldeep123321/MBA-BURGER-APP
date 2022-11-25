import React from 'react';
import { Link } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import {Chart as ChartJS,Tooltip,ArcElement,Legend} from "chart.js";
ChartJS.register(Tooltip,ArcElement,Legend)
const Box=({title,value})=>(
    <div><h3>{title}{value}</h3><p>{title}</p></div>
)
const DashBoard = () => {
  const data={
   labels:["Preparing","shipped","Deliverd"],
   datasets:[{
    label:"# Of Orders",
    data:[2,3,4],
    backgroungColor:["rgba(159,63,176,0.1)","rgba(78,63,176,0.1)","rgba(159,0,60,0.1)"],
    borderColor:["rgb(159,63,176)","rgb(78,63,176)","rgb(159,0,60)"],
    borderWidth:1,
   }]
  }
  return<section className='dashboard'>
  <main>
    <article>
       <Box title="Users" value={213}/>
       <Box title="Orders" value={23}/>
       <Box title="Income" value={21}/>
    </article>
    <section>
        <div>
            <Link to="/order">View Order</Link>
            <Link to="/admin/users"> View Users</Link>
        </div>
        <aside>
           {/* <Doughnut data={data}/> */}
        </aside>
    </section>
  </main>

  </section>
}

export default DashBoard