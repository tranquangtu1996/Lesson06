import React, { Component, PureComponent } from 'react';
import styled from "styled-components";
// import "./Persons.css"                      // CSS in CSS tylesheet - className="camelCase"
// import styles from "./Person.module.css"    // CSS in CSS Module  - className={styles."camelCase"}

// CSS in JS
const PersonWrapper = styled.div` 
  color: Green;
`;


export default class Person extends PureComponent {
    constructor(props) {
        super(props);
    }

    renderFullName = () => {
        return `${this.props.firstName} ${this.props.lastName} ${this.props.id}`;
    };

    render() {

      // CSS Inline - styles
      // const personWrapper = {
      //   color: "Green"
      // };

      console.log(`Person ${this.props.id} rendered`);
  
      return (
        <PersonWrapper>
          <h1>Full Name: {this.renderFullName()}</h1>
        </PersonWrapper>
      );
    }
}
