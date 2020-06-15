import React,{Component} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Title from './Components/Title/Title';
import CardList from './Components/CardList/CardList';
import Sidebar from './Components/Sidebar/Sidebar';
import './App.css';
import 'tachyons';

class App extends Component {

  render(){
  return (
   <div className='ba b--dotted bw2'>
   <Navbar />
   <Title />
   <div className='flex'>
     <Sidebar />
   <CardList />
 
   </div>
  
   </div>
  );
}

}

export default App;
