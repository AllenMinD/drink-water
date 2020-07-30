import React from 'react';
import './App.less';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HomePage from './pages/HomePage';
import UserSettingPage from './pages/UserSettingPage';

function App() {
    return (
        <div styleName="App">
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/setting">Setting</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route exact path="/">
                            <HomePage/>
                        </Route>
                        <Route path="/setting">
                            <UserSettingPage/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
