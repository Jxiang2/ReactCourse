import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { useTheme } from '../hooks/useTheme'
import './Navbar.css'

export default function Navbar() {

    const {color} = useTheme()
    console.log(color);

    return (
        <div className='navbar' style={{background: color}}>
            <nav>
                <Link className="logo" to={"/"}><h1>Cooking Ninja</h1></Link>
                <SearchBar/>
                <Link to={"/create"}>Create Recipie</Link>
            </nav>
            
        </div>
    )
}
