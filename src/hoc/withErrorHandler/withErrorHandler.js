import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../../components';
import Aux from '../Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component {

        state = {
            error: null
        };

        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            axios.interceptors.response.use(null, (error) => {
                console.log(error);
                this.setState({ error: error.message });
                return Promise.reject(error);
            });
        };

        errorRead = () => {
            this.setState({ error: null });
        };

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error}
                           modalClosed={this.errorRead}>
                        {this.state.error}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    };
};

export default withErrorHandler;
