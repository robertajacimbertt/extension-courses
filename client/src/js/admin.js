import React, {Component} from 'react';
import {render} from 'react-dom';

import '../css/style.scss';

export default class App extends Component {
    render() {
        console.log("oi");
        return (
            <div>
                Hello Administer
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));