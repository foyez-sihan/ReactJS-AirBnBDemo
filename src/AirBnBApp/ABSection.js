import React, {Component} from 'react'
import ListItem from './ListItem'


export default class ABSection extends Component{
    onFavClicked = (item) => {
        this.props.onFavClicked(this.props.section, item)
    }
    filterOnSection = () => {
        this.props.filterOnSection(this.props.section.id);
    }
    render(){
        const {title, listings} = this.props.section
        
        return (
            <div className="section_container">
                <h3>{title}</h3>
                <div className="listing_container">
                {
                    listings.map(
                        (item) => <ListItem key={item.id} listItem={item} onFavClicked={this.onFavClicked} filterOnSection={this.filterOnSection}/>
                    )
                }
                </div>
            </div>
        )
    }
}