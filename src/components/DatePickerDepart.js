import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import '../components/DatePicker.css'

export default class DatePickerDepart extends Component {
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
    });
  }

  handleSelect(date) {
    if (date != null)
      this.props.goGetDateDepart(date.format('YYYYMMDD'))
      console.log(date.format('YYYYMMDD'))
  }

  render() {
    return <DatePicker
      className="DatePicker"
      dateFormat="DD/MM/YYYY"
      minDate={moment()}
      excludeDates={[moment(), moment().subtract(1, "days")]}
      selected={this.state.startDate}
      onChange={this.handleChange}
      onSelect={this.handleSelect}
      placeholderText="Départ"
    />;
  }
}