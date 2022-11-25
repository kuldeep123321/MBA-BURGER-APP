import React from 'react'

const OrderDetails = () => {
  return<section className='orderDetails'>
    <main>
        <h1>Order Details</h1>
        <div>
            <h1>Shipping</h1>
            <p><b>Address</b></p>
        </div>
        <div>
            <h1>Contact</h1>
            <p><b>Name</b>{"Kuldeep"}</p>
            <p><b>Phone</b>{"100"}</p>
        </div>
        <div>
            <h1>Status</h1>
            <p><b>Order Status</b>{"Processiong"}</p>
            <p><b>Placed AT</b>{"23-15-12"}</p>
            <p><b>Delivered AT</b>{"25-15-12"}</p>
        </div>
        <div>
            <h1>Payment</h1>
            <p><b>Method</b>{"Online"}</p>
            <p><b>Payment Reference No</b>{"1234568"}</p>
            <p><b>Paid At</b>{"25-15-12"}</p>
        </div>
        <div>
            <h1>Amount</h1>
            <p><b>Items Total</b>${500}</p>
            <p><b>Shipping Charges</b>${200}</p>
            <p><b>Tax</b>${100}</p>
            <p><b>Total</b>${100+200+500}</p>
        </div>
        <article>
            <h1>Ordered Items</h1>
            <div>
                <h4>Cheese Burger</h4>
                <div>
                    <span>{12}</span> X <span>{232}</span>
                </div>
            </div>
            <div>
                <h4> Veg Cheese Burger</h4>
                <div>
                    <span>{10}</span> X <span>{500}</span>
                </div>
            </div>
            <div>
                <h4> Veg Cheese Burger With Fries</h4>
                <div>
                    <span>{100}</span> X <span>{50}</span>
                </div>
            </div>
            <div>
                <h4 style={{fontWeight:800,}}>Sub Total</h4>
                <div style={{fontWeight:800,}}>${200}</div>
            </div>
        </article>
    </main>
  </section>
}

export default OrderDetails