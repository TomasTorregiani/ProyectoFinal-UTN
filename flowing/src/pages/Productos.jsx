import { useEffect, useState } from "react"


export const Productos = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/productos')
        .then(res => res.json())
        .then(data => setProductos(data.productos))

    }, [])
    console.log(`productos`, productos);
    
    return (
        <div>
            {productos.map(producto => ( <div key={producto.id_producto}>
                                            <h2>Producto: {producto.producto}</h2>
                                            <p>Precio: ${producto.precio}</p>
                                            <p>Stock: {producto.stock}</p>
                                            <img src={producto.img} alt={producto.producto} />
                                        </div>
                                        
            ))}
        </div>
    )
}