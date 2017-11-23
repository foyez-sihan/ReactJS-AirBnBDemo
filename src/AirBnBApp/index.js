import React, {Component} from 'react'
import ABFilters from './ABFilters'
import './style.css'
import {seedSections} from './seedData'
import ABSection from './ABSection'


export default class AirBnBApp extends Component {
    state = {
        sections: [],
        favorites: []
    }

    componentDidMount = () => {
        this.setState({
            sections: seedSections,
            favorites: []
        })
    }


    render(){
        const favoriteSection = {id: 999, title: "Your favorites", listings:this.state.favorites}
        let favoriteComp = ''
        if (this.state.favorites.length > 0) {
            favoriteComp = <ABSection key={ favoriteSection.id} section = {favoriteSection}/>
        }
        return (
            <div className="main ui text container">
                <div>
                <h1 className="ui dividing centered header">AirBnBDemo</h1>
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

                    {favoriteComp}
                </div>
                </div>
            </div>
        )
    }
}