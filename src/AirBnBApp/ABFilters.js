import React, {Component} from 'react'
import {filterTypes} from './seedData'


export default class ABFilters extends Component{
    render(){
        return (
            <div className='filter_container'>
                {
                    filterTypes.map((type) =>
                    <div className='filter_item' key={type.id}> 
                        <button>{type.title}</button>
                    </div>                    
                )
            }
            </div>
        )
    }
}