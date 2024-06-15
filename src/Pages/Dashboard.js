import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function Dashboard() {
  return (
    <>
      <div className="sidebar">
        <Link className="active" to="/dashboard/task">Task</Link>
        <Link to="/dashboard/news">News</Link>
        <Link to="/dashboard/portfolio">Portfolio</Link>
      </div>
      <Outlet />
        

    </>
  )
}

export default Dashboard