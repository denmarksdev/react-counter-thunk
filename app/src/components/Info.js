import React from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { loadData } from '../actions/actionsIP'
import { ProgressBar, Alert } from 'react-bootstrap'

import './Info.css'

class Info extends React.Component {

    componentDidMount() {
        this.props.loadData()
    }

    render() {
        const { isFetching, data, error } = this.props

        if (error) {
            return (
                <Alert variant='danger'>Falha ao consumir os dados da API</Alert>
            )
        }

        if (isFetching) {
            return (
                <ProgressBar animated now={45} />
            )
        }
        return (
            <Card className='info-container' >
                <Card.Header>
                    <strong>Seu ip</strong>
                </Card.Header>
                <Card.Body>
                    <p>{JSON.stringify(data)}</p>
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.ip.isFetiching,
        data: state.ip.data,
        error: state.ip.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadData: () => dispatch(loadData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)
