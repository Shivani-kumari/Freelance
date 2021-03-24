import React, { Component } from 'react'
import EmployeeForm from './employee'
import { connect } from "react-redux";
import * as actions from "../actions/employeeActions"
import { bindActionCreators } from "redux";

class TransactionList extends Component {


    handleEdit = (index) => {
        this.props.updateTransactionIndex(index)
    }

    handleDelete = (index) => {
        this.props.deleteTransaction(index)
    }

    render() {
        return (
            <div>
                <EmployeeForm />
                <hr />
                <table>
                    <tbody>
                        {this.props.list.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.role}</td>
                                <td>{item.location}</td>
                                <td>{item.active}</td>
                                <td><button onClick={() => this.handleEdit(index)}>Edit</button></td>
                                <td><button onClick={() => this.handleDelete(index)}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateTransactionIndex: actions.updateIndex,
        deleteTransaction: actions.Delete
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)