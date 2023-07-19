import React from 'react'
import { Link } from 'react-router-dom';
const Menu = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/hello-world">Hello World</Link></li>
            <li><Link to="/hello-react">Hello React</Link></li>
            <li><Link to="/jsx1">Jsx1</Link></li>
            <li><Link to="/jsx2">Jsx2</Link></li>
            <li><Link to="/jsx3">Jsx3</Link></li>
            <li><Link to="/jsx4">Jsx4</Link></li>
            <li><Link to="/jsx5">Jsx5</Link></li>
        </ul>
    </nav>
  )
}

export default Menu