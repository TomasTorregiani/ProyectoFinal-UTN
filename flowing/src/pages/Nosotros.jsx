import { useEffect, useState } from "react"

export const Nosotros = () => {

    const [profes,setProfes] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data => setProfes(data.users))
    }, [])

    return ( 
        <>
            <h1>Profes </h1>      

                {profes && profes.map(profe => (
                    <div key={profe.id}>
                        <h2>{profe.Nombre} {profe.Apellido}</h2>
                        <h3>{profe.Mail}</h3>
                        <img src={profe.img} alt={profe.Nombre} width="250px"/>
                    </div>))} 
        </>
    )

}

