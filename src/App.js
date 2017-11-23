import React, {Component} from 'react';
import HelloWorld from './0.HelloWorld';
import Greetings from './1.Greetings';
import ClockApp from './2.ClockApp'
import VotingApp from './VotingApp'
import AirBnBApp from './AirBnBApp'

class App extends Component {
    render() {
        return (
            //<HelloWorld />
            //<Greetings name={'kamarul'}/>
            //<ClockApp />
            // <VotingApp />
            <AirBnBApp/>
        );
    }
}

export default App;
