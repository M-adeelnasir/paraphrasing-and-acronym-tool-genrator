import React, { Component } from 'react';
import { Button, CircularProgress, Box } from '@material-ui/core';
import axios from 'axios';
import config from '../config.json';

class SubmitButton extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    state = { loading: false }

    async handleSubmit() {
        this.setState({ loading: true })
        const body = { inputText: this.props.inputText }

        const response = await axios({
            method: 'post',
            url: 'https://paraphrasing-tool1.p.rapidapi.com/api/rewrite',
            headers: {
                "x-rapidapi-host": "paraphrasing-tool1.p.rapidapi.com",
                "x-rapidapi-key": config.paraphrasingToolRapidAPIKey,
                "content-type": "application/json",
                "accept": "application/json",
                "useQueryString": true
            },
            data: { "sourceText": body.inputText }
        })

        this.setState({ loading: false })
        this.props.responseText(response.data.newText)
        this.props.setName(true)
    }

    render() {
        const { loading } = this.state;
        return (
            <Box flexWrap="wrap" >
                {
                    loading ?
                        <CircularProgress color="primary" />
                        : <div className='d-flex justify-content-center'><Button onClick={this.handleSubmit} disabled={loading} variant="contained" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px' }} className="rounded-pill pt-2 pb-2 pl-5 pr-5 text-center btn-primary">Go<i className="fa fa-paper-plane-o pl-2"></i> </Button> </div>
                }
            </Box>

        );
    }
}

export default SubmitButton;