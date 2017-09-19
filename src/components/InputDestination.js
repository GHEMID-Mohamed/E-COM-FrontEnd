import React, { Component } from 'react';
import { Button } from 'reactstrap'
import '../components/InputDestination.css'
import SearchInput, { createFilter } from 'react-search-input'
import countries from 'cities.json'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import DropdownAutoSearch from '../components/DropdownAutoSearch'
import InputResult from '../components/InputResult'

const KEYS_TO_FILTERS = ['name', 'country']


export default class InputDestination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      value: '',
      dropdownOpen: false,
      resultFound: false
    };

    this.searchUpdated = this.searchUpdated.bind(this)
    this.resultHandleClick = this.resultHandleClick.bind(this)
  }

  resultHandleClick(value) {
    console.log(value)
    const v = value
    console.log(value)
    this.setState({
      searchTerm: v,
      resultFound: true,
      value: v
    })

  }



  searchUpdated(term) {
    this.setState({
      searchTerm: term,
      value: term
    })

  }

  render() {
    const filteredCountries = countries.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (

      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} ref="searchInput" value={this.state.value} />
        {filteredCountries.map(countrie => {
          if (this.state.searchTerm.length > 2 && !this.state.resultFound)
            return (
              <InputResult value={countrie.name} listenOnCLick={this.resultHandleClick}></InputResult>
            )
        })}
      </div>
    );
  }
}


{/*<div>
              <div className="from">{countrie.name}</div>
              <div className="subject">{countrie.countrie}</div>
            </div>*/}