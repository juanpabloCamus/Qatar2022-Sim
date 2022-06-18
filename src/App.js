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
    </div>
  );
}

export default App;
