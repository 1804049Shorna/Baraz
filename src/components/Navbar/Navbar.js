import React from 'react'
import './Navbar.css'
import navdata from '../../Data/Navbar'

const Navbar = () => {
    console.log(navdata)
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">

      <a className="navbar-brand" href="/">Navbar</a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>


      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto text-center">
          
          {/* <li className="nav-item">
            <a className="nav-link" href="/">Sell More on App</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Sell on Baraz</a>
          </li>
          <li classNameName="nav-item">
            <a className="nav-link" href="/">Customer Care</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Track Order</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Sign Up/ Log in</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Baraz Affiliate Program</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Language </a>
          </li> */}

{
                           navdata.map(data =>
                                <li key={data.id} className="nav-item">
                                    <a className="nav-link" href="/">{data.item}</a>
                                </li>
                            )}

        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar