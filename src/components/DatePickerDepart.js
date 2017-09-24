import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import '../components/DatePicker.css'

export default class DatePickerDepart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: '',
      Arrive: this.props.dateArrive
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    
            this.setState({
                    Arrive: nextProps.dateArrive
                })
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
    var selected = this.state.Arrive
    return <DatePicker
      className="DatePicker"
      dateFormat="DD/MM/YYYY"
      minDate={this.state.Arrive}
      excludeDates={[this.state.Arrive]}
      selected={this.state.startDate}
      onChange={this.handleChange}
      onSelect={this.handleSelect}
      placeholderText="Départ"
    />;
  }
}