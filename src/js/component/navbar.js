import React, {useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	const [respuesta, setRespuesta] = useState("");

	return (
		<nav className="navbar navbar-light ">
			<div className="h-100 ps-3">
				<Link to="/" onClick={() => actions.iniciarNumber()}>
					<img className="h-100 rounded-3" src="https://elordenmundial.com/wp-content/uploads/2024/01/quienes-son-realmente-reyes-magos.png"/>
				</Link>
			</div>
			{store.number > 1 && store.number < 9 && 
			<div className="input-group flex-nowrap w-50 m-2">
				<span className="input-group-text" id="addon-wrapping"><i className="fa-regular fa-pen-to-square"></i></span>
				<input type="text" className="form-control" value={respuesta} onChange={e => setRespuesta(e.target.value)} placeholder="Respuesta (minúscula y sin preposiciones)" aria-label="Respuesta" aria-describedby="addon-wrapping"/>
			</div>}
			<div className="d-flex justify-content-center gap-3 w-25 m-2">
				{store.number > 1 && store.number < 9 && store.pista < 2 &&
				<div className="w-50">
					<button className="btn btn-secondary" onClick={() => actions.sumarPista(store.pista)}>Dame {store.pista === 0 ? "una" : "otra"} pista</button>
				</div>}
				{store.number > 1 && 
				<div className="w-25">
					<Link to={"/prueba/"+store.number} onClick={() => actions.restarNumber(store.number)}>
						<button className="btn btn-primary w-100"><i className="fa-solid fa-arrow-left fa-xl"></i></button>
					</Link>
				</div>}
				{store.number < 12 && (store.checkpoint > store.number || respuesta === store.solucion) &&
				<div className="w-25">
					<Link to={"/prueba/"+store.number} onClick={() => actions.sumarNumber(store.number)}>
						<button className="btn btn-primary w-100" onClick={() => setRespuesta("")}><i className="fa-solid fa-arrow-right fa-xl"></i></button>
					</Link>
				</div>}
			</div>
		</nav>
	);
};
