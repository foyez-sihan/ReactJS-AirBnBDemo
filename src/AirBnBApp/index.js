import React, {Component} from 'react'
import ABFilters from './ABFilters'
import './style.css'
import {seedSections, filterTypes} from './seedData'
import ABSection from './ABSection'


export default class AirBnBApp extends Component {
    state = {
        allSections: [],
        sectionstoShow: [],
        favorites: [],
        filterTypes: []
    }

    componentDidMount = () => {
        this.setState({
            allSections: seedSections,
            sectionstoShow: seedSections,
            favorites: [],
            filterTypes: filterTypes
        })
    }
    checkFilter = (sectionTypeId) => {
        for (let i = 0; i < this.state.filterTypes.length; i++) {
            let filter = this.state.filterTypes[i];
            if (filter.isSelected && filter.id === sectionTypeId) {
                return true
            }
        }
        return false
    }
    onFilterClicked = (filterType) => {
        let oldFilters = this.state.filterTypes
        oldFilters.map((filter)=>{
            if (filter === filterType) {
                filter.isSelected = true
            } else {
                filter.isSelected = false
            }
        })
        this.setState({
            filterTypes: oldFilters
        })
        let newSections = this.state.allSections
        newSections = newSections.filter((section)=>this.checkFilter(section.typeId))
        this.setState({
            sectionstoShow: newSections
        })
    }
    onFavClicked = (section, item) => {
        console.log("item:: " + item.title + " and section:: " + section.title)
        // let newItem = item.
        item.isFavorite = !item.isFavorite
        let newFav = this.state.favorites
        if (newFav.includes(item)) {
            const index = newFav.indexOf(item)
            newFav.splice(index, 1)
        } else {
            newFav.push(item)
        }
        this.setState({
            favorites: newFav
        })
        console.log(this.state.sections)
    }

    render(){
        const favoriteSection = {id: -999, title: "Your favorites", listings:this.state.favorites}
        let favoriteComp = ''
        if (this.state.favorites.length > 0) {
            favoriteComp = <ABSection key={favoriteSection.id} section = {favoriteSection} onFavClicked={this.onFavClicked}/>
        }
        return (
            <div className="main ui text container">
                <div>
                <h1 className="ui dividing centered header">AirBnBDemo</h1>
                <div id="content">
                    <div>
                        <h3>Explore</h3>
                        <ABFilters filterTypes={this.state.filterTypes} onFilterClicked={this.onFilterClicked} />
                    </div>
                    <div>
                    {
                        this.state.sectionstoShow.map
                        (
                            (section) => <ABSection key={section.id} section={section} onFavClicked={this.onFavClicked}/>
                        )
                    }
                    </div>
                    <div>
                    {favoriteComp}
                    </div>
                </div>
                </div>
            </div>
        )
    }
}