import React, {Component} from 'react'
import ListItem from './ListItem'


export default class ABSection extends Component{
    onFavClicked = (item) => {
        console.log("item:: " + item.title + " and section:: " + this.props.section.title)
        this.props.onFavClicked(this.props.section, item)
    }
    render(){
        const {title, listings} = this.props.section
        
        return (
            <div className="section_container">
                <h3>{title}</h3>
                <div className="listing_container">
                {
                    listings.map(
                        (item) => <div><ListItem key={item.id} listItem={item} onFavClicked={this.onFavClicked}/></div>
                    )
                }
                </div>
            </div>
        )
    }
}