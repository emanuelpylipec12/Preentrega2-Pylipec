import { useState, useContext } from 'react'
import {db} from "../../Services/Config"
import {collection,addDoc} from "firebase/firestore"
import { CartContext } from '../Context/CartContext'




const Checkout = () => {
    const {carrito, vaciarCarrito, precioTotal} = useContext(CartContext);
    const[nombre, setNombre] = useState("");
    const[apellido, setApellido ] = useState("");
    const[telefono, setTelefono, ] = useState("");
    const[email, setEmail ] = useState("");
    const[emailConfirmacion, setEmailConfirmacion ] = useState("");
    const[error, setError ] = useState("");
    const[ordenId, setOrdenId ] = useState("");

    const manejadorFormulario = (event) => {
        event.preventDefault();
      
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
          setError("Por favor complete todos los campos");
          return;
        }
      
        if (email !== emailConfirmacion) {
          setError("Los campos del email no coinciden");
          return;
        }
      
        const orden = {
          items: carrito.map((prod) => ({
            id: prod.id,
            nombre: prod.titulo,
            cantidad: prod.cantidad,
          })),
          total: carrito.reduce(
            (precioTotal, prod) => precioTotal + prod.precio * prod.cantidad,
            0
          ),
          nombre,
          apellido,
          telefono,
          email,
          fecha: new Date(),
        };
      
        addDoc(collection(db, "ordenes"), orden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            vaciarCarrito();
          })
          .catch((error) => {
            console.error("Error al crear la orden", error);
            setError("Se produjo un error al crear la orden");
          });
      };
    return(


    <div>
        <h2>Checkout</h2>
        <form onSubmit={ manejadorFormulario } className="formulario">
            {carrito.map(prod => (
                <div key={prod.id}>
                    <p>
                        {prod.titulo} x {prod.cantidad}
                    </p>
                    <p> Precio $: {prod.precio} </p>
                    <hr />
                </div>
            ))}
            <p>Total Compra: ${precioTotal()} </p>
            <hr />

                <div className="form-group">
                    <label htmlFor=""> Nombre </label>
                    <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                </div>
                
                <div className="form-group">
                    <label htmlFor=""> Apellido </label>
                    <input type="text" value={apellido} onChange={(e)=>setApellido(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor=""> Telefono </label>
                    <input type="text" value={telefono} onChange={(e)=>setTelefono(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor=""> Email </label>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Email Confirmación </label>
                    <input type="email" value={emailConfirmacion} onChange={(e)=> setEmailConfirmacion(e.target.value)} />
                </div>

                {error && <p style={{color:"red"}}> {error} </p>}
                <button className="miBtn" type="submit"> Finalizar Compra </button>
        </form>
        {
            ordenId && (
                <strong className="ordenId">¡Gracias por tu compra! Tu número de Orden es {ordenId} </strong>
            )
        }
    </div>
  )
}

export default Checkout