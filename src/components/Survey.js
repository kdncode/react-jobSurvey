import React, { Component } from 'react';
var firebase = require('firebase');
var uuid = require('uuid');

// Initialize Firebase



class Survey extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            uid: uuid.v1(),
            studentName: 'Wick',
            answers: {
                answer1: '',
                answer2: '',
                answer3: ''
            },
            isSubmitted: false
        };
        this.nameSubmit = this.nameSubmit.bind(this);
        this.questionSubmitted = this.questionSubmitted.bind(this);
        this.answerSelected = this.answerSelected.bind(this);
    }

    // Name textbox
    nameSubmit(event) {
        let studentName = this.refs.name.value;
        this.setState( {studentName: studentName}, () => {
            console.log(this.state);
        })
    }

    // Answer Selected Radio buttons
    answerSelected(event) {
        let answers = this.state.answers;

        if ( event.target.name === 'answer1' ) {
            answers.answer1 = event.target.value;
        } else if ( event.target.name === 'answer2' ) {
            answers.answer2 = event.target.value;
        } else if ( event.target.name === 'answer3' ) {
            answers.answer3 = event.target.value;
        }

        this.setState( { answers: answers }, () => {
            console.log(this.state)
        } )
    }


    // Question form
    questionSubmitted() {
        // Todo
    }
    
    render() {
        var studentName;
        var questions;

        if ( this.state.studentName === '' && this.state.isSubmitted === false) {
            studentName = <div>
                <h1>Hi student, what's your name?</h1>
                <form onSubmit={this.nameSubmit}>
                    <input className="txtName" type="text" ref="name" placeholder="Enter your name" />
                </form>
            </div>;

            questions = '';

        } else if (this.state.studentName !== '' && this.state.isSubmitted === false ) {
            studentName = <h1>Welcome to job survey, {this.state.studentName}!</h1>;
            questions = <div>
                <h2>Please complete the questions below:</h2>
                <form onSubmit={this.questionSubmitted}>
                    <div className="card">
                        <label>What is your job title?</label><br />
                        <input type="radio" onChange={this.answerSelected} name="answer1" value="SoftwareEngineer"/>Software Engineer
                        <input type="radio" onChange={this.answerSelected} name="answer1" value="UIUXDesigner"/>UI/UX Designer
                        <input type="radio" onChange={this.answerSelected} name="answer1" value="ProjectManager"/>Project Manager
                    </div>
                    <div className="card">
                        <label>What is salary range?</label><br />
                        <input type="radio" onChange={this.answerSelected} name="answer2" value="50k"/> Less than 50k
                        <input type="radio" onChange={this.answerSelected} name="answer2" value="80k"/> Less than 80k
                        <input type="radio" onChange={this.answerSelected} name="answer2" value="120k"/>Less than 120k
                    </div>
                    <div className="card">
                        <label>How many years of experience do you have?</label><br />
                        <input type="radio" onChange={this.answerSelected} name="answer3" value="1"/> 0-2 years
                        <input type="radio" onChange={this.answerSelected} name="answer3" value="2"/> 2-5 years
                        <input type="radio" onChange={this.answerSelected} name="answer3" value="3"/> 5+ years
                    </div>
                    <input type="submit" className="feedback-button" value="Submit" />
                </form>
            </div>;

        } else if ( this.state.isSubmitted === true ) {
            studentName = <h1> Thanks for your time, {this.state.studentName} </h1>
        }

        return (
            <div>
                {studentName} 
               
                {questions}
            </div>
        );
    }
}

export default Survey;