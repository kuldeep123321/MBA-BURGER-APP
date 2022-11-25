import React from 'react'

const MenuCard = ({itemNum,burgerSrc,price,title,handler}) => {
  return <>
    <div className="Card">
        <div>item {itemNum}</div>
        <main>
            <img src={burgerSrc} alt={itemNum}/>
            <h5>${price}</h5>
            <p>{title}</p>
            <button onClick-key={()=> handler(itemNum)}>Buy Now</button>
        </main>
    </div>
  </>
}

export default MenuCard