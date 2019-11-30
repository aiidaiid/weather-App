import React from 'react'

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.onGetWeather}>
                <input type='text' name='city' placeholder='Enter city'/>
                <input type='text' name='country' placeholder='Enter Country'/>
                <button>Get Weather</button>
            </form>
        )
    }
}


export default Form