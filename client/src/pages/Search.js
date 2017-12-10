import React, { Component } from "react";
import {SaveBtn} from "../components/Buttons";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Search extends Component {

  state = {
    searchTerm: '',
    startDate: '',
    endDate: '',
    results: [],
    toSave: {}
  }

  handleFormSubmit = event => {
    event.preventDefault();

    API.callNYT(this.state.searchTerm)
    .then(res => console.log(res))
    .then(res => this.setState({ results: res.data }))
    .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  saveArticle = event => {
    const newArticle = {
      title: event.target.title,
      url: event.target.url
    };
    this.setState({toSave: newArticle});

    API.saveArticle(this.state.toSave)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

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
                <List>
                  {this.state.results.map(article => (
                    <ListItem key={article._id}>
                      <a href={article.web_url}>{article.headline.main}</a>
                      <SaveBtn onClick={() => this.saveArticle(article._id)} />
                    </ListItem>
                  ))}
                </List>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
