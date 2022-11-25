import React from 'react'
import {Country,State} from "country-state-city";
import ConfirmOrder from './ConfirmOrder';
import { Link } from 'react-router-dom';
const Shipping = () => {
  return <section className='shipping'>
  <main>
    <h1>Shipping Details</h1>
    <form>
        <div>
            <label>H.No</label>
            <input type="text" placeholder='Enter House No'/>
        </div>
        <div>
            <label>City</label>
            <input type="text" placeholder='Enter City'/>
        </div>
        <div>
            <label>Country</label>
            <select>
                <option value="">Country</option>{
                    Country && Country.getAllCountries().map(i=>(<option value={i.isoCode} key={i.isoCode}>{i.name}</option>))
                }
            </select>
        </div>
        <div>
            <label>State</label>
            <select>
                <option value="">State</option>{
                    State && State.getAllStates().map(i=>(<option value={i.isoCode}>{i.name}</option>))
                }
            </select>
        </div>

        <div>
            <label>Pin Code</label>
            <input type="text" placeholder='Enter PinCode'/>
        </div>
        <div>
            <label>Phone Number</label>
            <input type="text" placeholder='Enter Phone Number'/>
        </div>
        <Link to="/confirmorder">Confrim Order</Link>
    </form>
  </main>

  </section>
}

export default Shipping