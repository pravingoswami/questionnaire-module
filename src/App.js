import React from 'react'
import { Container, Row, Col, Input, Button } from 'reactstrap'
import DatePicker from "react-datepicker";

import './style.css'
import "react-datepicker/dist/react-datepicker.css"


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      name : '',
      email : '',
      birthDate: '',
      weight : '',
      heightFeet : '',
      heightInch : '',
      waistSize : '',
      hipSize : '',
      purposeOfConsultations: [
        { id: '1', name: 'I want to know why I might have gained weight' },
        { id: '2', name: 'I am more concerned about future risks from this weight' },
        { id: '3', name: 'I want to prepare my body for the conception' },
        { id: '4', name: 'Need to get my prescription renewed' },
        { id: '5', name: 'Need to get a second opinion' },
        { id: '6', name: 'other' },
    ],
    purposeOfConsultation: '',
    purposeOfConsultationReason : '',
            booleanPurposeOfConsultation: false,
            booleanExistingConditions: false,
            hadBaby: '',
            hyperprolactemia : false,
            pcosPcod : false,
            hypothyroidism : false,
            pcosPcodTime: '',
            hypothyroidismTime: '',
            hyperprolactemiaTime: '',
            booleanOtherCondition: false, // if and only if booleanOtherCondition is true then only the other condition data will be sent 
            otherCondition: false,
            otherConditionName : '',
            otherConditionTime: '',
            weightGainedTime: '',
            weightGained: '',
            // section 5 states
            hairLoss: false,
            hairLossTime: '',
            acne: false,
            acneTime: '',
            missedPeriods: false,
            missedPeriodsTime: '',
            extraHair: false,
            extraHairTime: '',
            constipation: false,
            skinPigmentation: false,
            slowHeartbeat: false,
            headache: false,
            headacheTime: '',
            dischargeNipple: false,
            moodSwings: false,
            booleanOtherSymptom: false,
            otherSymptom: '',
            otherSymptomTime: '',
            StoppedPeriods: false,
            lessThanSixCycles: false,
            moreThanSixCycles: false,
            countinuosFlow: false,
            lastPeriodTime: '',
            currentlyNotUnderAnyMedication: false,
            diabetes: false,
            migrane: false,
            highBloodPressure: false,
            mentalDisorder: false,
            steriodTherapy: false,
            seizureFit: false,
            horomonalContraception: false,
            protienSupplements: false
    }
  }
  
  handleInputChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }


  handleDateChange = (birthDate) => {
    console.log(birthDate)
    this.setState({ birthDate });
};

handleNumberInputChange = (e) => {
  if(!isNaN(e.target.value)){
    this.setState({
      [e.target.name] : e.target.value
    })
  } else {
    alert('Enter valid input')
  }
}

handlePurposeOfConsultations = (e) => {
  const purposeOfConsultation = e.target.value
  this.setState({
    purposeOfConsultation : purposeOfConsultation
  })
}

handleBabyChange = (e) => {
  this.setState({
    hadBaby : e.target.value
  })
}

handleExistionConditionsChange = (e) => {
    this.setState({
      [e.target.name] : e.target.checked
    })
}

handleSubmit = (e) => {
  e.preventDefault()
  console.log(this.state)
}


  render(){
    return(
      <div>
        
        <Container>
        <h1 className = "title" >Questionnaire</h1>
        <br></br>
        {/* Section - 1 for personal detail */}
          <div>
            <form onSubmit = {this.handleSubmit} >
          <Row>
          <Col md = "4" >
          &#8226; &nbsp;<label>Please enter your Personal Detail.</label>
            </Col>
            <Col md = "8" >
              <Row>
                <Col md = "6" >
                <label htmlFor = "name" >Name</label>&nbsp;&nbsp; 
                <br></br>
                <input type = "text" name = "name" id = "name" value = {this.state.name} onChange = {this.handleInputChange} />
                </Col>
                <Col md = "6" > 
                <label htmlFor = "email" >Email</label>&nbsp;&nbsp;
                <br></br>
                <input type = "text" name = "email" id = "email" value = {this.state.email} onChange = {this.handleInputChange} />
                </Col>    
              </Row>
            </Col>
         </Row>
          <br></br>
          <Row>
          <Col md = "4" >
          &#8226; &nbsp;<label>Please enter your vitals.</label>
            </Col>
            <Col md = "8" >
              <Row>
                <Col md = "4" > 
                <label>Date of Birth </label>
                <DatePicker
                    selected={this.state.birthDate}
                    onChange={this.handleDateChange}
                                />
                </Col>
                <Col md = "4" > 
                <label htmlFor = "weight" >Weight (kgs): </label>
                <input type = "text" id = "weight" name = "weight" value = {this.state.weight} onChange = {this.handleNumberInputChange} />
                </Col>
                <Col md = "4" > 
                <label htmlFor = "height" >Height: </label><br></br>
                <input type = "text" style = {{width : "20%"}} name = "heightFeet" id = "height" value = {this.state.heightFeet} onChange = {this.handleNumberInputChange} />&nbsp;
                <label>Feet</label>&nbsp;
                <input type = "text" style = {{width : "20%"}} name = "heightInch" id = "height" value = {this.state.heightInch} onChange = {this.handleNumberInputChange} />&nbsp;<label>Inches</label>
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
                <label htmlFor = "waistSize" >Waise size (inches) </label><br></br>
                <input type = "text" name = "waistSize" id = "waistSize" value = {this.state.waistSize} onChange = {this.handleNumberInputChange} />
                </Col>
                <Col md = "6" > 
                <label htmlFor = "hipSize" >Hip size (inches) </label><br></br>
                <input type = "text" name = "hipSize" id = "hipSize" value = {this.state.hipSize} />
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
            <Col md = "5" >
            <Input type="select" name="select" id="exampleSelect" onChange = {this.handlePurposeOfConsultations} >
              <option>Select your purpose of consultation.</option>
    {this.state.purposeOfConsultations.map(consultation => <option key = {consultation.id} >{consultation.name}</option> )}
        </Input>
            </Col>
            
        {
          (this.state.purposeOfConsultation == "other") && (
            <Col md = "3" >
            <label htmlFor = "purposeOfConsultationReason" >Please specify the reason</label>
            <input type = "text" width = "100%" name = "purposeOfConsultationReason" value = {this.state.purposeOfConsultationReason} onChange = {this.handleInputChange} ></input>
            </Col>
          )
        }

         </Row>

        <br></br>
        <br></br>
        <Row>
          <Col md = "4" >
          <label>&#8226;&nbsp;Are you someone who has had a baby within the last one year?</label><br></br>
            
            </Col>
            <Col md = "6" >
            {/* <div onChange = {this.handleBabyChange} > */}
            <input type = "radio" name = "baby" value = "Yes" onChange = {this.handleBabyChange} /><label>&nbsp; Yes</label>&nbsp;&nbsp;
              <input type = "radio" name = "baby" value = "No" onChange = {this.handleBabyChange} /><label>&nbsp; No</label>
            {/* </div> */}
            </Col>
         </Row>
          <br></br>
        {
          (this.state.purposeOfConsultation != "Need to get my prescription renewed" && this.state.purposeOfConsultation !== '' ) && (
            <div>
               <Row>
          <Col md = "4" >
        <label>  &#8226; &nbsp; Please select from this list all existing condition(s) that you have.</label>
            </Col>
            <Col md = "8" >
              <Row>
                <Col md = "4" >
                  <label>Select Conditions</label>
                  <br></br>
                  <input type = "checkbox" name = "hyperprolactemian" value = "Hyperprolactemia"  onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label>Hyperprolactemia</label>
                  <br></br> <br></br>
                  <input type = "checkbox" name = "pcosPcod" value = "PCOS/PCOD" onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label>PCOS/PCOD</label>
                  <br></br> <br></br>
                  <input type = "checkbox" name = "hypothyroidism" value = "Hypothyroidism" onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label>Hypothyroidism</label>
                  <br></br> <br></br>
                  <input type = "checkbox" name = "otherCondition" value = "other" onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label>other</label>
                  <br></br> <br></br>
                  {(this.state.otherCondition == true && (<input type = "text" name = "otherConditionName" value = {this.state.otherConditionName} onChange = {this.handleInputChange} placeholder = "Mention Condition" />))}
                </Col>
                <Col md = "4" > 
                {
                  (this.state.hyperprolactemian == true || this.state.pcosPcod == true || this.state.hypothyroidism || this.state.otherConditio == true) && (
                    <React.Fragment>
                          <label>Severity of the Condition</label>
                          <br></br>
                          {(this.state.hyperprolactemian == true) && (<label>Slider</label>)}
                          <br></br> <br></br>
                          {(this.state.pcosPcod == true) && (<label>Slider</label>)}
                          <br></br> <br></br>
                          {(this.state.hypothyroidism == true) && (<label>Slider</label>)}
                          <br></br> <br></br>
                          {(this.state.otherCondition == true) && (<label>Slider</label>)}
                          <br></br> <br></br>

                    </React.Fragment>
                  )
                    
                }
                  
                </Col>  
                <Col md = "4" > 
                {
                  (this.state.hyperprolactemian == true || this.state.pcosPcod == true || this.state.Hypothyroidism || this.state.otherConditio == true) && (
                    <React.Fragment>
                      <label>Duration of the Condition</label>
                      <br></br>
                      {(this.state.hyperprolactemian == true) && (<input type = "text" name = "hyperprolactemiaTime" placeholder = "Hyperprolactemia" value = {this.state.hyperprolactemiaTime} onChange = {this.handleInputChange} />)}
                      <br></br> <br></br>
                      {(this.state.pcosPcod == true) && (<input type = "text" name = "pcosPcodTime" placeholder = "PCOS/PCOD" value = {this.state.pcosPcodTime} onChange = {this.handleInputChange} />)}
                      <br></br> <br></br>
                      {(this.state.hypothyroidism == true) && (<input type = "text" name = "hypothyroidismTime" placeholder = "Hypothyroidism" value = {this.state.hypothyroidismTime} onChange = {this.handleInputChange} />)}
                      <br></br> <br></br>
                      {(this.state.otherCondition == true) && (<input type = "text" name = "otherConditionTime" placeholder = "Other" value = {this.state.otherConditionTime} onChange = {this.handleInputChange} />)}
                      <br></br> <br></br>
                    </React.Fragment>
                  )
                }
                </Col>      
              </Row>
            </Col>
         </Row>
            </div>
          )
        }

         <br></br>
         <Button type = "submit" color="info">SUBMIT</Button>{' '}
         </form>
          </div>
        </Container>
      </div>
    )
  }
}

export default App