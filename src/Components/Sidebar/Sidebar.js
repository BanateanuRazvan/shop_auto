import React from 'react';


const Sidebar =  () => {
	return(
		<div className='ba b--dotted bw2'>

		<h1>Categorie </h1>
		<h2>Electrica & Electronica Auto </h2>
		<h2>Faruri/stopuri/lumini </h2>
		<h2>Frane </h2>
		<h2>Interioar auto </h2>
		<h2>Piese motor </h2>
		<h2>Transmisie </h2>

		<label for="cars"><h1>Marca</h1></label>

		<select name="cars" id="cars">
		  <option >Alege...</option>
		  <option value="Alfa Romeo">Alfa Romeo</option>
		  <option value="Audi">Audi</option>
		  <option value="BMW">BMW</option>
		  <option value="Citroen">Citroen</option>
		  <option value="Fiat">Fiat</option>
		  <option value="Ford">Ford</option>
		  <option value="Hyundai">Hyundai</option>
		  <option value="Iveco">Iveco</option>
		  <option value="Jaguar">Jaguar</option>
		  <option value="Jeep">Jeep</option>
		  <option value="Lancia">Lancia</option>
		  <option value="Land Rover">Land Rover</option>
		  <option value="Lexus">Lexus</option>
		  <option value="Mazda">Mazda</option>
		  <option value="Mercedes">Mercedes</option>
		  <option value="Mini">Mini</option>
		  <option value="Mitsubishi">Mitsubishi</option>
		  <option value="Nissan">Nissan</option>
		  <option value="Opel">Opel</option>
		  <option value="Peugeot">Peugeot</option>
		  <option value="Porsche">Porsche</option>
		  <option value="Renault">Renault</option>
		  <option value="Seat">Seat</option>
		  <option value="Skoda">Skoda</option>
		  <option value="Smart">Smart</option>
		  <option value="Suzuki">Suzuki</option>
		  <option value="Volkswagen">Volkswagen</option>
		  


		</select>
		
		</div>
		);
}


export default Sidebar;