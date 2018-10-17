import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault(); // 페이지 리로딩 방지
    console.log("this.state", this.state)
    this.props.onCreate(this.state); // 상태값을 onCreate를 통하여 부모에게 전달
    this.setState({
      name: '',
      phone: ''
    })
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input
              name="name"
              placeholder="이름"
              value={this.state.name}
              onChange={this.handleChange}
          />

          <input
              name="phone"
              placeholder="전화번호"
              value={this.state.phone}
              onChange={this.handleChange}
          />
          <div>{this.state.name} {this.state.phone}</div>
          <button type="submit">등록</button>
        </form>
    );
  }
}

export default PhoneForm;
