import React, {Component} from 'react'
import ListItem from './ListItem'


export default class ABSection extends Component{
    render(){
        const {title, listings} = this.props.section
        
        return (
            <div className="section_container">
                <h3>{title}</h3>
                <div className="listing_container">
                {
                    listings.map(
                        (item) => <div><ListItem key={item.id} listItem={item} /></div>
                    )
                }
                </div>
            </div>
        )
    }
}