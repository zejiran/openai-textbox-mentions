import './App.css';
import Header from './components/Header.js';
import UserGenerator from './components/UserGenerator';
import LastCreatedUsers from './components/LastCreatedUsers';
import MentionsTextBox from './components/MentionsTextBox';

function App() {
  return (
    <div className="app">
      <Header />
      <UserGenerator />
      <LastCreatedUsers />
      <MentionsTextBox />
    </div>
  );
}

export default App;
