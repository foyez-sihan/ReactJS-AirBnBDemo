import React, {Component} from 'react'


export default class ListItem extends Component{
    render(){
        const {title, image, categoryName, price} = this.props.listItem
        return (
            <div className='list_item'>
                <img src={image} alt={title}/>
                <div className='category_name'>{categoryName}</div>
                <div className='item_title'>{title}</div>
                <div className='price'>{price}$ Per person</div>
            </div>
        )
    }
}

