import React, { useEffect, useState } from 'react'

const ProgressStep = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prev) => prev + 1)
    }
    const decrement = () => {
        setCount((prev) => prev - 1)
    }

useEffect(() => {
    console.log(count)
}, [count])

    const values = [1,2,3,4]

  return (
    <div style={{margin: '300px', background:"burlywood "}}>
        <div style={{display: 'flex', justifyContent: 'space-around', margin:'20px'}}>
            {values.map((ele,index) => {
                return(<div key={index} style={{display:'flex'}}>
                    <div style={{width: '30px', height: '30px', border: '2px solid', borderRadius: '50%',display: 'flex', justifyContent:'center', alignItems:'center', borderColor:index<=count ? 'green' : 'white'}}>{ele}</div>
                    <span style={{display:'flex', justifyContent:'center', alignItems:'center', color: index<count ? 'green' : 'white'}}>-------</span>
                </div>)
            })}
            <div style={{width: '30px', height: '30px', border: '2px solid', borderRadius: '50%',display: 'flex', justifyContent:'center', alignItems:'center', borderColor: count >= 4 ? 'green' : 'white'}}>5</div>
        </div>
       <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <button onClick={decrement}>Previous</button>
            <button onClick={increment}>Next</button>
        </div>
    </div>
  )
}

export default ProgressStep