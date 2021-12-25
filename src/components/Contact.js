import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
    // You can do the proptypes this way static proptypes
// or you can just name the class and append .proptyps to it

static propTypes = {
    name: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired

}
    render() {
        const { name, email, phone, course } = this.props
        return (
            <div className = 'card card-body mb-3'>
                <h4>{name}</h4>
                <ul className = 'list-group'>
                    <li className = 'list-group'>Email: {email}</li>
                    <li className = 'list-group'>Course: {course}</li>
                    <li className = 'list-group'>Phone: {phone}</li>
                    
                </ul>
            </div>
        )
    }
}



export default Contact