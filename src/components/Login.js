import React from 'react';
import HomeView from './HomeView'

class Login extends React.Component {
    state = {
        name: '',
        username: '',
        password: '',
        confirmPassword: ''
        // TODO: What needs to be represented in state for a fully controlled form?
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    // TODO: What methods need to be created for a fully controlled form?
    // HINT: Use the line below to change the view when the form is submitted
    // this.props.changeView('home')

    loginSubmitHandler = event => {
        event.preventDefault()
        if (this.state.password === this.state.confirmPassword) {
        this.props.componentDidMount()
        this.props.changeView('home')
        } else {
            alert("Password and Confirm Password must match.")
        }
    }

    render(){
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        return (
            <form className="vertical-flex" onSubmit={event => this.loginSubmitHandler(event)}>
                <h2>Create an Account</h2>
                <input placeholder="Name" name="name" value={this.state.name} onChange={event => this.handleChange(event)}/>
                <input placeholder="Username" name="username" value={this.state.username} onChange={event => this.handleChange(event)}/>
                <input placeholder="Password" name="password" value={this.state.password} onChange={event => this.handleChange(event)}/>
                <input placeholder="Confirm Password" name="confirmPassword" value={this.state.confirmPassword} onChange={event => this.handleChange(event)}/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Login;