import React, {Component} from 'react'
import {filterTypes} from './seedData'


export default class ABFilters extends Component{
    buttonClicked = (item) => (event) => {
        console.log("Clicked: " + item.id)
    }
    render() {
        return (
            <div className='filter_container'>
                {
                    filterTypes.map((type) =>
                    <div className='filter_item' key={type.id}> 
                        <button onClick={ this.buttonClicked(type) }>{type.title}</button>
                    </div>                    
                )
            }
            </div>
        )
    }
}