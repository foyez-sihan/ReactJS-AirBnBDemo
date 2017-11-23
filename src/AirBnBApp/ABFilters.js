import React, {Component} from 'react'
import {experienceType} from './seedData'


export default class ABFilters extends Component{
    render(){
        return (
            <div className='filter_container'>
                {
                    experienceType.map((type) =>
                    <div className='filter_item' key={type.id}> 
                        <button>{type.title}</button>
                    </div>                    
                )
            }
            </div>
        )
    }
}