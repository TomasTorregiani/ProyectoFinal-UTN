import { NavBar } from "./NavBar"

export const Header = () => {

    return (
        <div style={{display:"flex", justifyContent:"space-between", backgroundColor:"lightblue"}}>
            <img id="imgLogo" src="img/logos/logo2.jpg" width="150" alt="Flowing Logo"></img>
            <NavBar/>
        </div>
    )
}