import React from "react"
import Loading from "./Loading"

function WaitingOverlay() {
  return (
    <div className="overlay">
      <div className="container">
          <Loading/>    
      </div>
    </div>
  )
}

export default WaitingOverlay