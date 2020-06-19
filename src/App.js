import React from 'react'
import { Container, Row, Col, Input } from 'reactstrap'
import './style.css'

class App extends React.Component{
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return(
      <div>
        
        <Container>
        <h1>Questionnaire</h1>
        <br></br>
          <div>
          <Row>
          <Col md = "4" >
          &#8226; &nbsp;<label>Please enter your vitals.</label>
            </Col>
            <Col md = "8" >
              <Row>
                <Col md = "4" > 
                <label>Date of Birth </label>
                <input type = "text" />
                </Col>
                <Col md = "4" > 
                <label>Weight (kgs): </label>
                <input type = "text" />
                </Col>
                <Col md = "4" > 
                <label>Height: </label><br></br>
                <input type = "text" style = {{width : "20%"}} />&nbsp;<label>Feet</label>&nbsp;<input type = "text" style = {{width : "20%"}} />&nbsp;<label>Inches</label>
                </Col>
              </Row>
            </Col>
         </Row>
        <br></br>
         <Row>
          <Col md = "4" >
          &#8226; &nbsp;<label>Please enter your measurements</label><br></br>
              <span>* &nbsp;Please measure the fullest part of your hip and waist</span>
            </Col>
            <Col md = "8" >
              <Row>
                <Col md = "6" > 
                <label>Waise size (inches) </label><br></br>
                <input type = "text" />
                </Col>
                <Col md = "6" > 
                <label>Hip size (inches) </label><br></br>
                <input type = "text" />
                </Col>
              </Row>
            </Col>
         </Row>
          <br></br>
          <br></br>
         <Row>
          <Col md = "4" >
          <label>&#8226;&nbsp;Select the option that best describes your purpose of consultation.</label><br></br>
            
            </Col>
            <Col md = "6" >
            <Input type="select" name="select" id="exampleSelect">
              <option>I want to know why I might have gained weight</option>
              <option>I am more concerned about future risks from this weight</option>
              <option>I want to prepare my body for the conception</option>
              <option>Need to get my prescription renewed</option>
              <option>Need to get a second opinion</option>
        </Input>
            </Col>
         </Row>


          </div>
        </Container>
      </div>
    )
  }
}

export default App