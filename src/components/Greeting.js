import react from 'react';
import PropTypes from 'prop-types';
import './Greeting.css'

const Greeting = (props) => {
    const { branding } = props
    return(
        <nav className = 'navbar navbar-expan-sm navbar-dark bg-danger mb-3 py-0'>
                <div className = 'container'> 
                    <a href = '/' className = 'navbar-brand'>
                        {branding}
                    </a>
                    <div>
                        <ul className = 'navbar-nav mr-auto'>
        <li className = 'nav-item'>
        <a href = '/' className = 'nav-link'>Home</a>
        </li>
                        </ul>
                    </div>
            </div>
        </nav>
    )
}

// Creating Default props

// Greeting.defaultProps = {
//     branding : 'My App'
// }

// const headingStyle = {
//     color: 'red',
//     fontSize: '50px'
// }
// for proptype
// it helps you check the datatype of the props 
// if a wrong datatype is put it throws an error on the console
Greeting.propTypes = {
    branding: PropTypes.string.isRequired
}



export default Greeting