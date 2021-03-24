import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from "../actions/employeeActions"
import { bindActionCreators } from "redux";

class TransactionForm extends Component {

    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
        if (this.props.currentIndex == -1)
            return {
                name: '',
                role: '',
                location: '',
                active: ''
            }
        else
            return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex != this.props.currentIndex || prevProps.list.length != this.props.list.length) {
            this.setState({ ...this.returnStateObject() })
        }
    }
     

    handleInputChange = (e) => {
        let letterNumber = /^[0-9a-zA-Z]*$/
        if(e.target.value.match(letterNumber )){
            this.setState({
                [e.target.name]: e.target.value
            })
        }else{
            alert("Please Enter AlfaNumarivalue")
        }

        
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.props.currentIndex == -1)
            this.props.insertTransaction(this.state)
        else
            this.props.updateTransaction(this.state)

        
            
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} autoComplete="off">
                <input name="name" placeholder="Employee Name" onChange={this.handleInputChange} value={this.state.name} /><br />
                < input name="role" placeholder="role" onChange={this.handleInputChange} value={this.state.role} /><br />
                < input name="location" placeholder="Location" onChange={this.handleInputChange} value={this.state.location} /><br />
                < input name="active" placeholder="Active" onChange={this.handleInputChange} value={this.state.active} /><br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.list,
        currentIndex: state.currentIndex
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        insertTransaction: actions.insert,
        updateTransaction: actions.update
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm)