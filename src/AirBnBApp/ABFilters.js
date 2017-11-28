import React, {Component} from 'react';


export default class ABFilters extends Component{
    buttonClicked = (type) => (event) => {
        this.props.onFilterClicked(type)
    }
    render() {
        return (
            <div className='filter_container'>
                {
                    this.props.filterTypes.map((type) => {
                        let className = 'filter_item';
                        if (type.isSelected) {
                            className = "filter_item_selected"
                        }
                        return (<div className={className} key={type.id} onClick={ this.buttonClicked(type) }>
                            <img className='filterImage' src={type.image} alt={type.title} />
                            <div>
                                {type.title}
                            </div>
                        </div>)

                    }
                )
            }
            </div>
        )
    }
}