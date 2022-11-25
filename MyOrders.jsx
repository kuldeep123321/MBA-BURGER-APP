import React from 'react'
import { Link } from 'react-router-dom';
import {AiOutlineEye} from "react-icons/ai"
export const Order = () => {
    const arr=[1,2,3,4];
  return <section className="tableClass">
    <main>
        <table>
            <thead>
                <tr>
                    <th>Order Id</th>
                    <th>Status</th>
                    <th>Item Qty</th>
                    <th>Amount</th>
                    <th>Payment Method</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
              {arr.map((i)=>(
                    <tr key={i}>
                    <td>1</td>
                    <td>Processing</td>
                    <td>20</td>
                    <td>$200</td>
                    <td>Online</td>
                    <td><Link to={`/order`}><AiOutlineEye/></Link></td>
                </tr>
                ))
              }
            </tbody>
        </table>
    </main>
  </section>
}
export default Order