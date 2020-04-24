import React, {PureComponent} from 'react';
import Table from '../../components/table';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
    Container,
    Button,
    Row,
    Col,
    Spinner
} from 'reactstrap';

import {
    fetchCountriesRequested,
    deleteCountriesRequested,
    sortCountry

} from '../../actions/country'

class App extends PureComponent {
    componentDidMount() {
        this.props.getCountries();
    }

    handlePagination = (skip) => {
        this.props.getCountries({skip});
    } 

    render() {
        const {
            countries,
            limit,
            total,
            tableProps,
            onSort,
            loading,
        } = this.props;
        return (
            <Container>
                <Row>
                    <Col>
                        <h3>Tabla de datos </h3>
                    </Col>
                    <Col sm="3">
                        <Button color="primary" tag={Link} to="/country/edit/new"> Nuevo </Button>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
                        {loading && (
                            <Spinner color="danger" />
                        )}
                        {!loading && (
                            <Table {...{
                                data: countries,
                                ...tableProps,
                                onSort,
                                limit,
                                total,
                                onPageClick: this.handlePagination,
                                onDelete:this.props.deleteCountries
                            }}/>
                        )}
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state /* nuestro Store */, ownProps /*  */ ) => {
    const {documents: {countries, limit, total, loading}, tableProps} = state.country;
    return {
        tableProps,
        countries,
        limit,
        total,
        loading
    };
}

const mapDispatchToProps = (dispatch /* acciones a disparar */, ownProps /*  */ ) => ({
    getCountries: filters => dispatch(fetchCountriesRequested(filters)),
    onSort: sort => dispatch(sortCountry(sort)),
    deleteCountries: id => dispatch (deleteCountriesRequested, id)
})

export default connect(
    mapStateToProps, // MaspStateToProps 1
    mapDispatchToProps // MapDispatchToProps 2
    // MergeProps <<<<<  1 + 2 = 3
)(App);
