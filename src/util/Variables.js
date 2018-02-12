import {computed, observable} from 'mobx';

export class Variables {
    
    @observable loginName = '';

    @computed get loggedIn() {
        let token = sessionStorage.getItem('token');
        if (token && token !== undefined && this.loginName) {
            console.log('Loaded session token: ' + token + ', ' + new Date());
            return true;
        }
        console.log('Could not load session token', new Date());
        return false;
    }
    
}

export default new Variables();