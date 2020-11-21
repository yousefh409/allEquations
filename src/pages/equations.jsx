import React from "react"
import Equation from "../components/equation.jsx"
import { Router } from "@reach/router"

const Equations = () => (
      <Router>
        <Equation path="/equations/:category/:subcategory/:id" />
      </Router>
  )
  
export default Equations