import react, { Component } from 'react'

class Contact extends Component {
    

    render() {
        const { name, email, phone, course } = this.props
        return (
            <div>
                <h4>{name}</h4>
                <ul>
                    <li>Email: {email}</li>
                    <li>Course: {course}</li>
                    <li>Phone: {phone}</li>
                    
                </ul>
            </div>
        )
    }
}

export default Contact