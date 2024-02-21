import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav>
        <h1>header</h1>
        <ul>
            <li>  
                <Link to="/">afficher</Link>
            </li>
            <li>
            <Link to="/ajouter">ajouter</Link>

            </li>
            <li>
            <Link to="/detailes">detailes</Link>

            </li>
        </ul>
    </nav>
  )
}
