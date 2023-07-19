import React, { Component } from 'react'
import Person from './Person';

export default class PersonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: [
              {
                id: 1,
                firstName: "Nguyen Van",
                lastName: "A",
              },
              {
                id: 2,
                firstName: "Nguyen Van",
                lastName: "B",
              },
              {
                id: 3,
                firstName: "Nguyen Van",
                lastName: "C",
              }
            ]
        };
    }

    componentDidMount() {
      setInterval(() => {
        this.setState((oldState) => {
          return {
            person: [...oldState.person] // Update đối tượng person bằng cách sử dụng toán tử spread // setState(prevState)
          };
        });
      }, 1000);
    }

  render() {
    console.log("App rendered!");

    const personList = this.state.person.map((person) => (
      <Person
        key={person.id}
        id={person.id}
        firstName={person.firstName}
        lastName={person.lastName}
      />
    ));

    return <div>{personList}</div>;
  }
}
