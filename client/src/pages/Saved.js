import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Search extends Component {

  state = {
    searchTerm: '',
    startDate: '',
    endDate: '',
    results: []
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log('clicked');
    API.callNYT(this.state.searchTerm)
    .then(res => this.setState({results: res.data}))
    .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render () {
    return (
      <div>
        <Container>
          <Jumbotron>
            <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
          </Jumbotron>
          <Row>
            <Col size="sm-12">
              <br />
              <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
              <form>
                <Input
                  value={this.state.searchTerm}
                  onChange={this.handleInputChange}
                  name="searchTerm"
                  placeholder="Search Term (required)"
                />

                <Input
                  value={this.state.startYear}
                  onChange={this.handleInputChange}
                  name="startYear"
                  placeholder="Start Year (optional)"
                />

                <Input
                  value={this.state.endYear}
                  onChange={this.handleInputChange}
                  name="endYear"
                  placeholder="End Year (optional)"
                />

                <FormBtn
                  disabled={!(this.state.searchTerm)}
                  onClick={this.handleFormSubmit}
                >
                  Submit
                </FormBtn>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size='sm-12'>
              <br />
                <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Top Articles</strong></h3>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
