import react from 'react'

const Greeting = (props) => {
    const { branding } = props
    return(
        <div>
            <h1>Welcome {branding }</h1>
        </div>
    )
}

export default Greeting