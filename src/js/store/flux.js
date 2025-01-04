const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			number:0,
			checkpoint:0,
			solucion: "",
			pista:0,
			pista1: "",
			pista2: "",
		},
		actions: {
			sumarNumber: (number) => {
				setStore({number: number+1})
				getStore().number > getStore().checkpoint && setStore({checkpoint: number+1})
				getActions().defineSolution(number)
				setStore({pista: 0})
			},
			sumarPista: (number) => {
				setStore({pista: number+1})
			},
			restarNumber: (number) => {
				setStore({number: number})
				getActions().defineSolution(number-1)
				setStore({pista: 0})
			},
			iniciarNumber: () => {
				setStore({number: 0})
				setStore({pista: 0})
			},
			defineSolution: (number) => {
				switch (number) {
					case 1:
						setStore({solucion: "100"})
						setStore({pista1: "PISTA 1 (uno): Busca el único número decimal escrito diferente",
							pista2: "PISTA 2: yo no entiendo como hablan los ordenadores, ¿y tú?"
						})
						break;
					case 2:
						setStore({solucion: "gafas"})
						setStore({pista1: "PISTA 1: En esta prueba hay cosas raras, si te centras en ello verás mejor",
							pista2: "PISTA 2: Parece que no lo estás viendo, dale media vuelta a la cabeza"
						})
						break;
					case 3:	
						setStore({solucion: "blanca paloma"})
						setStore({pista1: "PISTA 1: ¿Una quinta? Buscamos un animal y su color característico",
							pista2: "PISTA 2: ¿Otra? Buscamos el/la artista que representó al campeón de la liga de naciones de ese año"
						})
						break;
					case 4:
						setStore({solucion: "concierto sevilla"})
						setStore({pista1: "PISTA 1: Marca lo importante para saber qué buscamos: cifrar y ordenar",
							pista2: "PISTA 2: Es importante ver bien, que te guste la música y tener un color especial"
						})
						break;
					case 5:
						setStore({solucion: "30 mayo"})
						setStore({pista1: "PISTA 1: A veces hay que dar pasos dobles para superar obstáculos",
							pista2: "PISTA 2: La ventolera es una comparsa, estudia carnaval...."
						})
						break;
					case 6:
						setStore({solucion: "plaza españa"})
						setStore({pista1: "PISTA 1: La arquitectura está abajo y ¿qué está arriba?",
							pista2: "PISTA 2: Usa esos conocimientos de carnaval adquiridos"
						})
						break;
					case 7:
						setStore({solucion: "justin timberlake"})
						setStore({pista1: "PISTA 1: SÓLO EN algunos lugares se disfruta",
							pista2: "Pista 2: Para la imagen muy tradicional necesitarás un C2 en el idioma de la letra doble del abecedario"
						})
						break;
					default: 
						setStore({solucion: ""})

				}
			},
		}
	};
};

export default getState;
