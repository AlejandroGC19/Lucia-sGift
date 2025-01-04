import React, {useContext} from "react";
import { Context } from "../store/appContext";
import diapo from "../../img/diapositiva1.jpg"
import diapo1 from "../../img/diapositiva2.jpg"
import diapo2 from "../../img/diapositiva3.jpg"
import diapo3 from "../../img/diapositiva4.jpg"
import diapo4 from "../../img/diapositiva5.jpg"
import diapo5 from "../../img/diapositiva6.jpg"
import diapo6 from "../../img/diapositiva7.jpg"
import diapo7 from "../../img/diapositiva8.jpg"
import diapo8 from "../../img/diapositiva9.jpg"
import diapo9 from "../../img/diapositiva10.jpg"
import diapo10 from "../../img/diapositiva11.jpg"
import diapo11 from "../../img/diapositiva12.jpg"

export const Single = props => {
	const { store} = useContext(Context);

	return (
		<div className="prueba text-center d-flex justify-content-center align-items-center">
			{/* <img className="h-100" src={diapo} alt={"/diapositiva" + store.number + ".jpg"}></img> */}
			<img className="h-100" src={"/diapositiva" + store.number + ".jpg"} alt={"/diapositiva" + store.number + ".jpg"}></img>
			{store.pista !== 0 &&
			<div className="d-flex flex-column p-4">
				<h3 className="h-100 text-white p-2 py-3">{store.pista1}</h3>
				{store.number === 8 && 
				<div className="pista-imagenes d-flex pb-4">
					<img className="w-50" src="https://i.pinimg.com/originals/db/f6/1e/dbf61e1ce27d56089cf671d5d3f36717.jpg"/>
					<img className="w-50" src="https://www.italia.it/content/dam/tdh/es/interests/abruzzo/lago-di-scanno/media/20210331103222-20-lago-di-scanno-cesidio-silla.jpg"/>
				</div>
				}
				{store.pista > 1 && 
				<h3 className="h-100 text-white p-2 py-3">{store.pista2}</h3>}
			</div>}
		</div>
	);
};
