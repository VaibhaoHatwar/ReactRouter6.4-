import React from "react"
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut assumenda
        voluptates temporibus ut molestias omnis ratione laborum? In, libero
        quis quasi magnam laudantium vitae doloribus odit.
      </p>

      <p>
        Go to the <Link to="/">Homepage</Link>
      </p>
    </div>
  )
}
