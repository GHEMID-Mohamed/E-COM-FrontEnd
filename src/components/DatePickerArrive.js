import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import '../components/DatePicker.css'

export default class DatePickerArrive extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })


  }

  handleSelect(date) {
    if(date!=null)
    this.props.goGetDateArrive(date.format('YYYYMMDD'))
  }

  render() {
    return <DatePicker
      className="DatePicker"
      dateFormat="DD/MM/YYYY"
      minDate={moment()}
      selected={this.state.startDate}
      onSelect={this.handleSelect}
      onChange={this.handleChange}
      placeholderText="Arrivée"
    />;
  }
}