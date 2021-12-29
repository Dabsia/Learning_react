import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
    constructor(){
        super()
        this.state = {
            showContactInfo :false
        }

        // this.onShowClick = this.onShowClick.bind(this)
    }
    // You can do the proptypes this way static proptypes
    // or you can just name the class and append .proptyps to it
    static propTypes = {
        name: PropTypes.string.isRequired,
        course: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired

    }
    onDeleteClick = () =>{
        this.props.deleteClickHandler()
    }

    onShowClick =() =>{
    // Setting the state tobe the opposite of the previous state
    // For toggling
    this.setState({showContactInfo: !this.state.showContactInfo})
    // If you want to pass an argument to a function
    // this.onShowClick.bind(this, param)
}
    render() {
        const { name, email, phone, course } = this.props;
        const {showContactInfo} = this.state
        return (
            // Using the ternary operator, if showContactInfo is false, Hide info else showInfo
            <div className = 'card card-body mb-3'>
                <h4>{name}<i onClick={this.onShowClick} class="ri-arrow-down-s-fill" style = {{cursor: 'pointer'}}></i>
                <i style = {{cursor: 'pointer', color: 'red', float: 'right'}} onClick={this.onDeleteClick} class="ri-delete-bin-fill"></i></h4>
                {showContactInfo ? <ul className = 'list-group'>
                    <li className = 'list-group'>Email: {email}</li>
                    <li className = 'list-group'>Course: {course}</li>
                    <li className = 'list-group'>Phone: {phone}</li>
                </ul>
                : null}
                
            </div>
        )
    }
}



export default Contact