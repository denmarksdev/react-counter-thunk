import React from 'react'

import { 
    loadUA , 
    TYPE_LOAD_UA_REQUEST,
    TYPE_LOAD_UA_SUCCESS,
 } from '../actions/actionsUA'

describe('testing action', () => {

    test('loadUA', (done) => {
        const get = jest.fn()
        const data = {}
        
        get.mockReturnValue(Promise.resolve({data}))
        let callNumber = 0;
        
        const dispatch = jest.fn( params => {
            if (callNumber === 0){
                expect(params).toEqual({ type: TYPE_LOAD_UA_REQUEST })
            }else if (callNumber == 1 ){
                expect(params).toEqual({
                    type:TYPE_LOAD_UA_SUCCESS,
                    data: data
                })
                done()
            }
            callNumber++
        })

        const axiosMock = {
            get
        }
        
        loadUA(axiosMock)(dispatch)
    })
})