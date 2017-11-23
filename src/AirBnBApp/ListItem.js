import React, {Component} from 'react'
import {sections, experienceType} from './seedData'
// import './style.css'



export default class ListItem extends Component{
    render(){
        const {title, image, categoryName, price} = this.props.listItem
        return (
            <div className='list_item'>
                <img src={image} alt={title}/>
                <div className='category_name'>{categoryName}</div>
                <div className='item_title'>{title}</div>
                <div className='price'>Price: {price}$</div>
            </div>
        )
    }
}

// <div class="_6ikqekk" role="img" 
// aria-label="Street dancing in the South Bronx" 
// style="width: 100%; height: 100%; 
// background-image: url(&quot;https://a0.muscache.com/im/pictures/cf737cdb-0ff8-4d0d-aedf-78c988004470.jpg?aki_policy=large&quot;);">
// </div>