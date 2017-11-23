import React, {Component} from 'react'


export default class ABFilters extends Component{
    buttonClicked = (type) => (event) => {
        console.log("Clicked: " + type.id)
        this.props.onFilterClicked(type)
    }
    render() {
        console.log(this.props)
        return (
            <div className='filter_container'>
                {
                    this.props.filterTypes.map((type) => {
                        let className = 'filter_item';
                        if (type.isSelected) {
                            className = "filter_item_selected"
                        }
                        console.log(className);
                        return <div className={className} key={type.id} onClick={ this.buttonClicked(type) }>
                            {type.title}
                        </div>
                    }
                )
            }
            </div>
        )
    }
}