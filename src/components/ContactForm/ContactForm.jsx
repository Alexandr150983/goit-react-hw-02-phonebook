import React, { Component } from 'react';
import { Form } from './ContactForm.styled';
import { Label } from './ContactForm.styled';
import { Button } from './ContactForm.styled';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;

    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    this.props.onSubmit(name, number);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />
        </Label>
        <br />
        <Label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            required
          />
        </Label>
        <br />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
