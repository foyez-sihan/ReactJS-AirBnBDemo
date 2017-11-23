import React, {Component} from 'react'
import ABFilters from './ABFilters'
import './style.css'
import {seedSections} from './seedData'
import ABSection from './ABSection'


export default class AirBnBApp extends Component{
    state = {
        sections: []
    }

    componentDidMount = () => {
        this.setState({
            sections: seedSections
        })
    }


    render(){
        return (
            <div className="main ui text container">
                <div>
                <h1 className="ui dividing centered header">AirBnBApp</h1>
                <div id="content">
                    <div>
                        <h3>Filters</h3>
                        <ABFilters/>
                    </div>
                    {
                        this.state.sections.map
                        (
                            (section) => <ABSection key={section.id} section={section}/> 
                        )
                    }
                </div>
                </div>
            </div>
        )
    }
}