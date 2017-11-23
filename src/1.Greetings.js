/**
 * Created by kawnayeen on 11/6/17.
 */
import React, {Component} from "react";

// function Greetings(props) {
//     return <h1>Hello, {props.name}</h1>;
// }

export default class Greetings extends Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
