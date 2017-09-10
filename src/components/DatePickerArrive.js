import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import '../components/DatePicker.css'

export default class DatePickerArrive extends Component {
    constructor (props) {
        super(props)
        this.state = {
          startDate: ''
        };
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(date) {
        this.setState({
          startDate: date
        });
      }
    
      render() {
        return <DatePicker
            className="DatePicker"
            dateFormat="DD/MM/YYYY"
            selected={this.state.startDate}
            onChange={this.handleChange}
            placeholderText="Arrivée"
        />;
      }
}