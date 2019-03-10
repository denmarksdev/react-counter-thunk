import React from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { loadData } from '../actions/actions'

import  './Info.css'

class Info extends React.Component {

    componentDidMount(){
        this.props.loadData()
    }

    render() {
        return (
            <Card className='info-container' >
                <Card.Header>Titulo</Card.Header>
                <Card.Body>
                    <p>Corpo do texto</p>
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetiching
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadData:()=> dispatch(loadData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)