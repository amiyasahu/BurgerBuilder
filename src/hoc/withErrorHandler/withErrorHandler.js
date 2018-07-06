import React, { Component } from 'react';
import { Modal } from '../../components';
import Aux from '../Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component {

        state = {
            error: null
        };

        componentDidMount() {
            this.requestInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            this.responseInterceptor = axios.interceptors.response.use(null, (error) => {
                this.setState({ error: error.message });
                return Promise.reject(error);
            });
        };

        componentWillUnMount() {
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
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
