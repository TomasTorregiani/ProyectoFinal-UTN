import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <div style={{display:"flex", alignItems:"center"}}>
            <ul  style={{width:"500px", display:"flex",justifyContent:"space-between", listStyleType:"none"}}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/actividades">Actividades</Link></li>
                <li><Link to="/productos">Productos</Link></li>
            </ul>
        </div>
    )
}