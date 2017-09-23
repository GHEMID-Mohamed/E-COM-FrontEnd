import React, { Component } from 'react';
import { Button } from 'reactstrap'
import '../components/InputDestination.css'
import SearchInput, { createFilter } from 'react-search-input'
import countries from '../extern_module/cities.json'
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
    this.reset = this.reset.bind(this)
  }

  reset() {
    this.setState({
      resultFound: true
    })
  }

  resultHandleClick(value) {
    const v = value
    this.setState({
      searchTerm: v,
      resultFound: true,
      value: v
    })

  }

  searchUpdated(term) {
    if(term.length<4) this.setState({ resultFound: false})
    this.setState({
      searchTerm: term,
      value: term
    })
    console.log(term)
    this.props.getInputValueProp(term)
  }

  render() {
    const filteredCountries = countries.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (

      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} ref="searchInput" value={this.state.value}/>
        {filteredCountries.map(countrie => {
          if (this.state.searchTerm.length > 1 && !this.state.resultFound){
            return (
              <InputResult value={countrie.name} listenOnCLick={this.resultHandleClick}></InputResult>
            )
          }

        })}
      </div>
    );
  }
}


{/*<div>
              <div className="from">{countrie.name}</div>
              <div className="subject">{countrie.countrie}</div>
            </div>*/}