import React, { Component } from 'react';
import axios from 'axios'
import '../../components/stylesheet';
import './search.css';
import Repository from './components/repository';
import Sort from './components/sort';

class Search extends Component {

  constructor() {
    super();
    this.state = {
      userInfo: '',
      userRepos: '',
      search: '',
      sortFilters: false,
      results: null,
    }
  
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);

    this.actions = {
      getRepositoryData: this.getRepositoryData.bind(this),
    }

    this.axiosConfig = {
      baseURL: 'https://api.github.com/users/',
      timeout: 5000,
    }
  }
  

  handleInputChange(event) {
    this.setState({ search: event.target.value });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.getRepositoryData();
  }

  getRepositoryData(sort) {
      const repo = this.state.search;
      repo && axios.get(`${repo}/repos${sort ? '?sort='+sort : ''}`, this.axiosConfig)
        .then(response => {
          this.setState({ 
            userRepos: response.data,
            sortFilters: response.data.length > 0,
            results: response.data.length,
          });
        })
        .catch(() => {
          this.setState({ 
            userRepos: '',
            sortFilters: false,
            results: 0,
          });
        });;
  }

  render() {
    return (
      <div className="container search">
         <div className="row">
          <div className="column">
            <header className="search-header">
              <h1 className="search-title">List Github public repositories from a user</h1>
            </header>
            <form onSubmit={this.handleOnSubmit}>
              <div className="row">
                <div className="column column-50 column-offset-25">
                  <input className="search-field" type="text" placeholder="Enter Github username..." onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="row">
                <div className="column column-50 column-offset-25 text-center">
                  <input className="button-primary search-button" type="submit" value="Search"/>
                </div>
              </div>
              <div className="row">
                <div className="column column-50 column-offset-25">
                  {this.state.results === 0 && <p>User not found or without public repositories.</p>}
                  <Sort actions={this.actions} visible={this.state.sortFilters} />
                  <Repository data={this.state.userRepos} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
