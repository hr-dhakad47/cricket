import React from 'react'

function Cards(props) {
  return (
    <>
      <div className="main">
        <p className="head">{props.name} <span className="right day"> Date: {props.date} </span></p><br/>
        <div className="scoreBox">
          {
            props.teamInfo.map((info,index,arr)=>{
              return( 
                  <div className='img' key={index}>
                     <img className="flag" src={arr[index].img} alt=""/>&emsp;<span>{arr[index].name}</span><br/><br/>
                  </div>
              )
            })
          }
          {
            props.score.map((score,index,arr)=>{
              return(
                <div className="scoreCard" key={index}>
                <p className="overs">{arr[index].inning}</p>
                <p className="score">{arr[index].r}/{arr[index].w}</p>
                <p className="overs">{arr[index].o}</p>
                </div>
              )
            })
          }
        </div>
        <center>
            <p className="target">Location: {props.vanue}</p>
            <p className="res">{props.status}</p>
            <p className="match">{props.matchType}</p>
        </center>
      </div>
    </>
  )
}

export default Cards