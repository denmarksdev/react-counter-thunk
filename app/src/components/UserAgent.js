import React from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import actionsUA from '../actions/actionsUA'
import { ProgressBar, Alert } from 'react-bootstrap'

class UserAgent extends React.Component {

    componentDidMount() {
        this.props.loadUA()
    }

    render() {
        const { isFetching, ua, error } = this.props

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
                    <strong>
                        User Agent
                    </strong>
                </Card.Header>
                <Card.Body>
                    <p>{JSON.stringify(ua)}</p>
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.ua.isFetiching,
        ua: state.ua.data,
        error: state.ua.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadUA: () => dispatch(actionsUA.loadUA())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAgent)
