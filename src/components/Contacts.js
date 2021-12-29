import React, {Component} from 'react';
import './Contacts.css'
import Contact from './Contact'


class Contacts extends Component{
    constructor(){
        super()
        this.state = {
            // State is immutsble
          contacts: [
              {
                  id: 1,
                  name: 'John Doe',
                  email: 'johndoe@gmail.com',
                  phone: '555-555-5555',
                  course: 'computer science'
              },
              {
                id: 2,
                name: 'Sandra Ogun',
                email: 'sandraogun@gmail.com',
                phone: '444-444-4444',
                course: 'micro biology'
            },
            {
                id: 3,
                name: 'Nico Jackson',
                email: 'nicojackson@gmail.com',
                phone: '333-333-3333',
                course: 'computer science'
                },
                {
                    id: 4,
                    name: 'Precious Felix',
                    email: 'preciousfelix@gmail.com',
                    phone: '222-222-2222',
                    course: 'banking and finance'
                },
                {
                    id: 5,
                    name: 'Kele Godfrey',
                    email: 'kelegodfrey@gmail.com',
                    phone: '777-777-7777',
                    course: 'Agricultural Science'
                }
                 
            ]
        }
    }

deleteContact = (id) =>{
    const {contacts} = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id)

    this.setState({contacts: newContacts})
}

    render(){
        const {contacts} = this.state;
        return(
            <React.Fragment>
                {contacts.map(contact => (
                <Contact
                        key = {contact.id}
                        name = {contact.name}
                        course = {contact.course}
                        email = {contact.email}
                        phone = {contact.phone}
                        deleteClickHandler = {this.deleteContact.bind(this, contact.id)}
                    />
                )
            )}
            </React.Fragment>
        )
    }
}

// A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.


export default Contacts;