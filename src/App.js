import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Todos} from './components/Todos';

function App(){

  const onDelete = (todo) => {
    console.log("I am on delete")
  }

  let todos=[
    {
    sno:1,
    title: "Take Sam for a Walk",
    desc: "Kardiyo yaad se!"
  },
  {
    sno:2,
    title: "Have breakfast",
    desc: "Marzi h khana h to kha!"
  },
  {
    sno:3,
    title: "Grind DsAlgo",
    desc: "Job leni h to karna padega!"
  },
  ]

  return (
    <div className="App">
      <Header title='What To Do'/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;
