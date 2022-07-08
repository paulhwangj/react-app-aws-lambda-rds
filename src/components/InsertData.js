import React from 'react';
import axios from 'axios';

export default class InsertData extends React.Component {
  state = {
    id: 1,
    firstName: ''
  }

  handleChangeID = event => {
    this.setState({
        id: event.target.value
    });
  }

  handleChangefirstName = event => {
    this.setState({
        firstName: event.target.value 
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.id); // delete
    console.log(this.state.firstName); // delete

    const employee = {
      id: this.state.id,
      first_name: this.state.firstName
    };

    // axios.post(`https://al31ingud8.execute-api.us-east-2.amazonaws.com/insert-staging`, { employee })
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
      
    axios.post(`https://al31ingud8.execute-api.us-east-2.amazonaws.com/insert-staging`, { 
        id: this.state.id,
        first_name: this.state.firstName
     })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
}
      

  render() {
    return (
        <div id="insert-container">
            <h1>Insert Data into the Database</h1>
            <form onSubmit={this.handleSubmit}>
                <label>
                    New Id Number:
                    <input type="text" size="20" placeholder="id number" name="id" onChange={this.handleChangeID} />
                </label>
                <label>
                    New First_Name:
                    <input type="text" size="20" placeholder="first_name" name="firstName" onChange={this.handleChangefirstName} />
                </label>
                <input type="submit" value="Insert Data" />
            </form>
        </div>
    );
  }
}