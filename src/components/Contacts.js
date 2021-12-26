import React, {Component} from 'react';
import './Contacts.css'
import Contact from './Contact'


class Contacts extends Component{
    constructor(){
        super()
        this.state = {
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
                name: 'Nico Jacksons',
                email: 'nicojackson@gmail.com',
                phone: '333-333-3333',
                course: 'computer science'
                }
            ]
        }
    }
    render(){
        const {contacts} = this.state;
        return(
            <div>
                {contacts.map(contact => (<Contact
                        key = {contact.id}
                        name = {contact.name}
                        course = {contact.course}
                        email = {contact.email}
                        phone = {contact.phone}
                    />
                )
                
            )}
            </div>
        )
    }
}


export default Contacts;