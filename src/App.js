import React from 'react';
import Variables from './util/Variables';
import {observer} from 'mobx-react';

@observer
export default class App extends React.Component {

    componentWillMount() {
        sessionStorage.removeItem('token');
    }

    componentDidMount() {
        //Simulate fetch request
        setTimeout(() => {
            console.log('Simulating fetch from another server. ', new Date());
            sessionStorage.setItem('token', '123'); //Session storage first, because Variables.loginName should trigger observable
            Variables.loginName = 'Steve';
            console.log('Finished setting values: ' + sessionStorage.getItem('token') + ' and ' + Variables.loginName);
        }, 3000);
    }

    render() {

        console.log('Rerendering App: ', new Date());

        let message = Variables.loggedIn ?
            <div>Hello {Variables.loginName}</div>
            :
            <div>You are not logged in.</div>

        return (
            <div>
                {message}
            </div>
        );
    }

}