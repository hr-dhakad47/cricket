import React from 'react';
import './App.css';
import {Routes,Route,Link, Outlet} from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home'
import CountryList from './Pages/CountryList';
import LiveScore from './Pages/LiveScore';
import Dashboard from './Pages/Dashboard';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="liveScore" element={<LiveScore />} />
        <Route path="countryList" element={<CountryList />} />
        <Route path="dashboard" element={<Dashboard />}>
          
          <Route path='task' element={
             <div>
                <div className="sidebar sidebar2">
                <Link className="active" to="/dashboard/task/task1">Task 1</Link>
                <Link to="/dashboard/task/task2">Task 2</Link>
                </div>
                <Outlet />
             </div>
          }>
            <Route path='task1' element={<div className="content">Task 1</div>}/>
            <Route path='task2' element={<div className="content">Task 2</div>}/>
          </Route>

          <Route path='news' element={
             <div>
                <div className="sidebar sidebar2">
                <Link className="active" to="/dashboard/news/news1">News1</Link>
                <Link to="/dashboard/news/news2">News2</Link>
                </div>
                <Outlet />
              </div>
          }>
            <Route path='news1' element={<div className='content'> News 1 </div>}/>
            <Route path='news2' element={<div className='content'> News 2 </div>}/>
          </Route>
          
          <Route path='portfolio' element={
            <div>
                <div className="sidebar sidebar2">
                <Link className="active" to="/dashboard/portfolio/portfolio1">Portfolio1</Link>
                <Link to="/dashboard/portfolio/portfolio2">Portfolio2</Link>
                </div>
                <Outlet />
            </div>
          }>
            <Route path='portfolio1' element={<div className='content'> Portfolio 1 </div>}/>
            <Route path='portfolio2' element={<div className='content'> Portfolio 2 </div>}/>
          </Route>

          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
