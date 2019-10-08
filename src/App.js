import React from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './components/Carousel';

function App() {

  var items = [{name:"name1",
                description:"description1",
                img:"https://tipsparatuviaje.com/wp-content/uploads/2016/09/8.-Lago-de-Cam%C3%A9cuaro-Michoac%C3%A1n.jpg"},
                {name:"name2",
                description:"description2",
                img:"https://mott.pe/noticias/wp-content/uploads/2019/03/los-50-paisajes-maravillosos-del-mundo-para-tomar-fotos.jpg"},
                {name:"name3",
                description:"description3",
                img:"https://s3-us-west-1.amazonaws.com/tipsparatuviaje/wp-content/uploads/2016/09/2.-Riviera-Maya-Quintana-Roo.jpg"},
                {name:"name4",
                description:"description4",
                img:"https://tipsparatuviaje.com/wp-content/uploads/2016/09/4.-Huasteca-Potosina-San-Luis-Potos%C3%AD.jpg"},
                {name:"name5",
                description:"description5",
                img:"https://tipsparatuviaje.com/wp-content/uploads/2016/09/6.-Xel-H%C3%A1-Quintana-Roo.jpg"},
                {name:"name6",
                description:"description6",
                img:"https://tipsparatuviaje.com/wp-content/uploads/2016/09/7.-Cascadas-de-Agua-Azul-Chiapas.jpg"},
                {name:"name7",
                description:"description7",
                img:"https://tipsparatuviaje.com/wp-content/uploads/2016/09/9.-Playas-de-Los-Cabos-Baja-California-Sur.jpg"},
                {name:"name8",
                description:"description8",
                img:"https://tipsparatuviaje.com/wp-content/uploads/2016/09/10.-Cuatroci%C3%A9negas-Coahuila.jpg"},
                {name:"name9",
                description:"description9",
                img:"https://tipsparatuviaje.com/wp-content/uploads/2016/09/11.-Selva-Lacandona-Chiapas.jpg"},
                {name:"name10",
                description:"description10",
                img:"https://tipsparatuviaje.com/wp-content/uploads/2016/09/13.-Mar-de-Cort%C3%A9s-Sonora-Baja-California-y-Baja-California-Sur.jpg"}
                ];


  return (

   <Carousel items={items} active={0} />
  );
}

export default App;
