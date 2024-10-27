import { useState } from "react"
import "../style/Actividades.css"

export const Actividades = () => {

    const [actividades, setActividades] = useState([])

    return (
        <div>
            <h1>Actividades</h1>
            <button onClick={async () => {
                const res = await fetch('http://localhost:3000/actividades')
                const data = await res.json()
                console.log("Actividades", data.actividades);
                setActividades(data.actividades)
            }}>Ver actividades</button>
            {actividades.length === 0 ? 
                                        <div>
                                            <h2>Vacio</h2>
                                        </div> 
                                    : 
                                        <div className="actividades">
                                            <h1>Actividades flowing</h1>
                                            {actividades.map(act => <div className="actividad" key={act.id}>
                                                                        <img src={act.img} alt="" />
                                                                        <div class="info">
                                                                            <h2>{act.clase}</h2>
                                                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet eius placeat alias, in qui tempore, maiores, accusamus minus quaerat nisi consequatur ipsam possimus dolor cumque.</p>
                                                                            <p>Precio: ${act.costo}</p>
                                                                            <p>Sedes: {act.sede}</p>
                                                                            
                                                                        </div>
                                                                    </div>)
                                            }
                                        </div>}
        </div>
    )
}