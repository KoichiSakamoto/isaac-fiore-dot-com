import React, { Component } from 'react'

export default function NavigationBar(props) {
  return (
    <nav className="nav-bar">
      <div className="nav-section" onClick={() => props.changeDisplay("")}> About </div>
      <div className="nav-section" onClick={() => props.changeDisplay("resume")}> Resume </div>
      <div className="nav-section" onClick={() => props.changeDisplay("projects")}> Projects </div>
    </nav>
  )
}
