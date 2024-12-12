import { BrowserRouter as Router } from 'react-router-dom';
import GuildMembersManagement from './components/guildMemberManagement/GuildMembersManagement';
import AppHeader from './components/general/appHeader/AppHeader';
import './App.css';
import AppFooter from './components/general/appFooter/AppFooter';

function App() {
  return (
    <Router>
      <div>
        <AppHeader />
        <div className="main-container">
          <GuildMembersManagement />
        </div>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
