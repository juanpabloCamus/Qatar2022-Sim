import './App.css';
import GroupsContainer from './components/Groups/GroupsContainer';
import Navbar from './components/Navbar/Navbar';
import StagesContainer from './components/Stages/StagesContainer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <GroupsContainer/>
      <StagesContainer/>
      <label className='by'>By <a href='https://www.linkedin.com/in/juan-pablo-camus-developer/' target='_BLANK'>Juan Pablo Camus</a></label>
    </div>
  );
}

export default App;
