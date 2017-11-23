import React, {Component} from 'react'
import ABFilters from './ABFilters'
import './style.css'
import {sections} from './seedData'
import ABSection from './ABSection'


export default class AirBnBApp extends Component{
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
                        sections.map
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