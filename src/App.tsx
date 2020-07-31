import React from 'react';
import './App.less';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import HomePage from './pages/HomePage';
import UserSettingPage from './pages/UserSettingPage';
import { Tooltip } from 'antd';
import { UserOptionsContainer } from './store/container';

function App() {
    return (
        <div styleName="App">
            <UserOptionsContainer.Provider>
                <Router>
                    <div>
                        <div styleName="navigator">
                            <Tooltip title="首页" getPopupContainer={node => node}>
                                <NavLink to="/">
                                    <div styleName="home-icon" />
                                </NavLink>
                            </Tooltip>
                            <Tooltip title="设置" getPopupContainer={node => node}>
                                <NavLink to="/setting">
                                    <div styleName="setting-icon" />
                                </NavLink>
                            </Tooltip>
                        </div>

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
            </UserOptionsContainer.Provider>
        </div>
    );
}

export default App;
