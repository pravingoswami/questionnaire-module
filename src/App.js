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

            hyperprolactemiaTimeType : 'Days',
            pcosPcodTimeType : 'Days',
            hypothyroidismTimeType : 'Days',
            otherConditionNameType : 'Days',

            
            booleanOtherCondition: false, // if and only if booleanOtherCondition is true then only the other condition data will be sent 
            otherCondition: false,
            otherConditionName : '',
            otherConditionTime: '',

            anyOtherSymptoms : '',

            weightGainedTime: '',
            weightGained: '',
            weightGainedTimeType : 'Days',

            // section 5 states
            hairLoss: false,
            hairLossTime: '',
            hairLossTimeType : 'Days',

            acne: false,
            acneTime: '',
            acneTimeType : 'Days',

            missedPeriods: false,
            missedPeriodsTime: '',
            missedPeriodsTimeType : 'Days',

            extraHair: false,
            extraHairTime: '',
            extraHairTimeType : 'Days',
            
            constipation: false,

            skinPigmentation: false,

            slowHeartbeat: false,

            headache: false,
            headacheTime: '',
            headacheTimeType : 'Days',

            dischargeNipple: false,

            moodSwings: false,

            booleanOtherSymptom: false,

            otherSymptom: '',
            otherSymptomTime: '',
            otherSymptomTimeType : 'Days',


            StoppedPeriods: false,
            lessThanSixCycles: false,
            moreThanSixCycles: false,
            countinuosFlow: false,
            lastPeriodTime: '',
            lastPeriodTimeType : 'Days',

            steroidTherapy : false,
            hormonalContraception : false,
            seizureFit : false,
            proteinSupplements : false,
            medicationDiabetes : false,
            medicationHighBloodPressure : false,
            medicationMentalHealthDisorder : false,
            currentlyNotUnderAnyMedication: false,
            migrane: false,

            steroidTherapyDuration : '',
            hormonalContraceptionDuration : '',
            seizureFitDuration : '',
            proteinSupplementsDuration : '',
            medicationDiabetesDuration : '',
            medicationHighBloodPressureDuration : '',
            medicationMentalHealthDisorderDuration : '',
            currentlyNotUnderAnyMedicationDuration : '',
            migraneDuration : '',

            steroidTherapyDurationType : 'Days',
            hormonalContraceptionDurationType : 'Days',
            seizureFitDurationType : 'Days',
            proteinSupplementsDurationType : 'Days',
            medicationDiabetesDurationType : 'Days',
            medicationHighBloodPressureDurationType : 'Days',
            medicationMentalHealthDisorderDurationType : 'Days',
            currentlyNotUnderAnyMedicationDurationType : 'Days',
            migraneDurationType : 'Days',



            workoutValue : '',
            workoutHour : '',

            eatingFoodValue : '',

            sleepHour : '',

            highBloodPressure: false,
            highCholesterol : false,
            familyHypothyroidism : false,
            diabetes: false,
            pcos : false,

            reportFirst : '',
            reportSecond : '',

            otherExtraDetailForDoctor : '',

            nutritionExpert : false,
            yogaTherapist : false,
            dermatologist : false,
            psychiatrist : false,

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
    return alert('Enter valid input')
  } else {
    this.setState({
      [e.target.name] : e.target.value
    })
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

handleEatingFoodValue = (e) => {
  this.setState({
    eatingFoodValue : e.target.value
  })
}

handleWorkoutValue = (e) => {
  this.setState({
    workoutValue : e.target.value
  })
}


handleDurationValueChange = (e) => {
  console.log(e.target.name)
  this.setState({
    [e.target.name] : e.target.value
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
                   &nbsp; &nbsp;<input type = "checkbox" name = "hyperprolactemia" value = "hyperprolactemia" onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label>Hyperprolactemia</label>
                  <br></br> <br></br>
                   &nbsp; &nbsp;<input type = "checkbox" name = "pcosPcod" value = "PCOS/PCOD" onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label>PCOS/PCOD</label>
                  <br></br> <br></br>
                   &nbsp; &nbsp;<input type = "checkbox" name = "hypothyroidism" value = "Hypothyroidism" onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label>Hypothyroidism</label>
                  <br></br> <br></br>
                   &nbsp; &nbsp;<input type = "checkbox" name = "otherCondition" value = "other" onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label>other</label>
                  <br></br> <br></br>
                  {(this.state.otherCondition == true && (<input type = "text" name = "otherConditionName" value = {this.state.otherConditionName} onChange = {this.handleInputChange} placeholder = "Mention Condition" />))}
                  <br></br>
                </Col>
                <Col md = "4" > 
                {
                  (this.state.hyperprolactemia == true || this.state.pcosPcod == true || this.state.hypothyroidism || this.state.otherCondition == true) && (
                    <React.Fragment>
                          <label>Severity of the Condition</label>
                          <br></br>
                          {(this.state.hyperprolactemia == true) && (<label>Slider</label>)}
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
                  <br></br>
                  <br></br>
                </Col>  
                <Col md = "4" > 
                {
                  (this.state.hyperprolactemia == true || this.state.pcosPcod == true || this.state.hypothyroidism || this.state.otherCondition == true) && (
                    <React.Fragment>
                      <label>Duration of the Condition</label>
                      <br></br>
                      {/* {(this.state.hyperprolactemia == true) && (<input type = "text" name = "hyperprolactemiaTime" placeholder = "Hyperprolactemia" value = {this.state.hyperprolactemiaTime} onChange = {this.handleInputChange} />)}
                      <br></br> <br></br> */}

                      {
                    (this.state.hyperprolactemia == true) && (
                      <div>

                        <Row>
                          <Col md = "6">
                          <Input type = "text" name = "hyperprolactemiaTime" onChange = {this.handleInputChange} />
                          </Col>
                          <Col md = "6">
                              
                        <Input type="select" name="hyperprolactemiaTimeType" id="medication" onChange = {this.handleDurationValueChange} >
                        <option name = "duration" value = "Days" >Days</option>
                        <option name = "duration" value = "Months" >Months</option>
                        <option name = "duration" value = "Years" >Years</option>
                            </Input>
                            </Col>
                        </Row>
                        <br></br>
                      </div>
                    )
                  }

{
                    (this.state.pcosPcod == true) && (
                      <div>

                        <Row>
                          <Col md = "6">
                          <Input type = "text" name = "pcosPcodTime" onChange = {this.handleInputChange} />
                          </Col>
                          <Col md = "6">
                              
                        <Input type="select" name="pcosPcodTimeType" id="medication" onChange = {this.handleDurationValueChange} >
                        <option name = "duration" value = "Days" >Days</option>
                        <option name = "duration" value = "Months" >Months</option>
                        <option name = "duration" value = "Years" >Years</option>
                            </Input>
                            </Col>
                        </Row>
                        <br></br>
                      </div>
                    )
                  }

{
                    (this.state.hypothyroidism == true) && (
                      <div>

                        <Row>
                          <Col md = "6">
                          <Input type = "text" name = "hypothyroidismTime" onChange = {this.handleInputChange} />
                          </Col>
                          <Col md = "6">
                              
                        <Input type="select" name="hypothyroidismTimeType" id="medication" onChange = {this.handleDurationValueChange} >
                        <option name = "duration" value = "Days" >Days</option>
                        <option name = "duration" value = "Months" >Months</option>
                        <option name = "duration" value = "Years" >Years</option>
                            </Input>
                            </Col>
                        </Row>
                        <br></br>
                      </div>
                    )
                  }
                         {
                    (this.state.otherCondition == true) && (
                      <div>

                        <Row>
                          <Col md = "6">
                          <Input type = "text" name = "otherConditionTime" onChange = {this.handleInputChange} />
                          </Col>
                          <Col md = "6">
                              
                        <Input type="select" name="otherConditionTimeType" id="medication" onChange = {this.handleDurationValueChange} >
                        <option name = "duration" value = "Days" >Days</option>
                        <option name = "duration" value = "Months" >Months</option>
                        <option name = "duration" value = "Years" >Years</option>
                            </Input>
                            </Col>
                        </Row>
                        <br></br>
                      </div>
                    )
                  }

{/* 
                      {(this.state.pcosPcod == true) && (<input type = "text" name = "pcosPcodTime" placeholder = "PCOS/PCOD" value = {this.state.pcosPcodTime} onChange = {this.handleInputChange} />)}
                      <br></br> <br></br>
                      {(this.state.hypothyroidism == true) && (<input type = "text" name = "hypothyroidismTime" placeholder = "Hypothyroidism" value = {this.state.hypothyroidismTime} onChange = {this.handleInputChange} />)}
                      <br></br> <br></br>
                      {(this.state.otherCondition == true) && (<input type = "text" name = "otherConditionTime" placeholder = "Other" value = {this.state.otherConditionTime} onChange = {this.handleInputChange} />)}
                      <br></br> <br></br> */}
                    </React.Fragment>
                  )
                }
                </Col>      
              </Row>
            </Col>
         </Row>
                <br></br>

           {
              (this.state.hyperprolactemia == true || this.state.pcosPcod == true || this.state.hypothyroidism || this.state.otherCondition == true) && (
                <Row>
                  <Col md = "4" >
          <label>&#8226;&nbsp;Any symptoms that you are particularly concerned about?</label>      
            </Col>
            <Col md = "6" >
                <input type = "text" name = "anyOtherSymptoms" value = {this.state.anyOtherSymptoms} onChange = {this.handleInputChange} />
            </Col>
            
                </Row>
              )
           }

         <br></br>
         
         <Row>
          <Col md = "4" >
          <label>&#8226;&nbsp;Please enter how much weight you gained and in how much time</label>      
            </Col>
            <Col md = "4" >
                <input type = "text" name = "weightGained" value = {this.state.weightGained} onChange = {this.handleNumberInputChange} /> &nbsp;&nbsp;<label>Kgs</label>


            </Col>
            
            <Col md = "4">
                          <Row>
                          <Col md = "6">
                          <Input type = "text" name = "weightGained" onChange = {this.handleInputChange} />
                          </Col>
                          <Col md = "6">
                              
                        <Input type="select" name="weightGainedType" id="medication" onChange = {this.handleDurationValueChange} >
                        <option name = "duration" value = "Days" >Days</option>
                        <option name = "duration" value = "Months" >Months</option>
                        <option name = "duration" value = "Years" >Years</option>
                            </Input>
                            </Col>
                          </Row>
                        </Col>
         </Row>
         <br></br>
         <br></br>

         {
            (this.state.hyperprolactemia == true || this.state.pcosPcod == true || this.state.hypothyroidism || this.state.otherCondition == true) && (
              <div>
              <Row>
                <Col md = "4" >
                <label >&#8226;&nbsp;Ignore Section</label>
                </Col>

                <Col md = "4" >
                <label>Symptom</label>
                  <br></br>
                   &nbsp; &nbsp;<input type = "checkbox" name = "hairLoss" value = "hairLoss"  onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label class = "symptom" >Hair Fall / Hair Loss</label>
                  <br></br> <br></br>
                  &nbsp; &nbsp;<input type = "checkbox" name = "acne" value = "acne"  onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label class = "symptom" >Acene</label>
                  <br></br> <br></br>
                  &nbsp; &nbsp;<input type = "checkbox" name = "missedPeriods" value = "missedPeriods"  onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label class = "symptom" >Missed / Iregular Period / Heavy Bleeding</label>
                  <br></br> <br></br>
                  &nbsp; &nbsp;<input type = "checkbox" name = "extraHair" value = "extraHair"  onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label class = "symptom" >Extra Hair Growth on Body and Face</label>
                  <br></br> <br></br>
                  &nbsp; &nbsp;<input type = "checkbox" name = "constipation" value = "constipation"  onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label class = "symptom" >Constipation</label>
                  <br></br> <br></br>
                  &nbsp; &nbsp;<input type = "checkbox" name = "skinPigmentation" value = "skinPigmentation"  onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label class = "symptom" >Skin Pigmentation / Thickness / Dryness</label>
                  <br></br> <br></br>
                  &nbsp; &nbsp;<input type = "checkbox" name = "slowHeartbeat" value = "slowHeartbeat"  onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label class = "symptom" >Slow / Fast Heartbeat</label>
                  <br></br> <br></br>
                  &nbsp; &nbsp;<input type = "checkbox" name = "headache" value = "headache"  onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label class = "symptom" >Headache</label>
                  <br></br> <br></br>
                  &nbsp; &nbsp;<input type = "checkbox" name = "dischargeNipple" value = "dischargeNipple"  onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label class = "symptom" >Discharge from Nipple</label>
                  <br></br> <br></br>
                  &nbsp; &nbsp;<input type = "checkbox" name = "moodSwings" value = "moodSwings"  onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label class = "symptom" >Mood Swings / Lethargy / Sluggishness</label>
                  <br></br> <br></br>
                  &nbsp; &nbsp;<input type = "checkbox" name = "booleanOtherSymptom" value = "booleanOtherSymptom"  onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label class = "symptom" >Others</label>
                  <br></br> 
                  {(this.state.booleanOtherSymptom == true && (<input type = "text" name = "otherSymptom" value = {this.state.otherSymptom} onChange = {this.handleInputChange} placeholder = "Mention Symptom" />))}
                  </Col>

                  <Col md = "4" >
                    {
                      (this.state.hairLoss == true || this.state.acne == true || this.state.missedPeriods == true || this.state.extraHair == true || this.state.headache == true || this.state.otherSymptom == true ) && (
                        <label>Since how long have you been experiencing this symptom?</label>
                      )
                    }

                  {
                    (this.state.hairLoss == true) && (
                      <div>
                     
<br></br>
                        <Row>
                          <Col md = "6">
                          <Input type = "text" name = "hairLossTime" onChange = {this.handleInputChange} />
                          </Col>
                          <Col md = "6">
                              
                        <Input type="select" name="hairLossTimeType" id="medication" onChange = {this.handleDurationValueChange} >
                        <option name = "duration" value = "Days" >Days</option>
                        <option name = "duration" value = "Months" >Months</option>
                        <option name = "duration" value = "Years" >Years</option>
                            </Input>
                            </Col>
                        </Row>
                        <br></br>
                      </div>
                    )
                  }

{
                    (this.state.acne == true) && (
                      <div>

                        <Row>
                          <Col md = "6">
                          <Input type = "text" name = "acneTime" onChange = {this.handleInputChange} />
                          </Col>
                          <Col md = "6">
                              
                        <Input type="select" name="acneTimeType" id="medication" onChange = {this.handleDurationValueChange} >
                        <option name = "duration" value = "Days" >Days</option>
                        <option name = "duration" value = "Months" >Months</option>
                        <option name = "duration" value = "Years" >Years</option>
                            </Input>
                            </Col>
                        </Row>
                        <br></br>
                      </div>
                    )
                  }


{
                    (this.state.missedPeriods == true) && (
                      <div>

                        <Row>
                          <Col md = "6">
                          <Input type = "text" name = "missedPeriodsTime" onChange = {this.handleInputChange} />
                          </Col>
                          <Col md = "6">
                              
                        <Input type="select" name="missedPeriodsTimeType" id="medication" onChange = {this.handleDurationValueChange} >
                        <option name = "duration" value = "Days" >Days</option>
                        <option name = "duration" value = "Months" >Months</option>
                        <option name = "duration" value = "Years" >Years</option>
                            </Input>
                            </Col>
                        </Row>
                        <br></br>
                      </div>
                    )
                  }

{
                    (this.state.extraHair == true) && (
                      <div>

                        <Row>
                          <Col md = "6">
                          <Input type = "text" name = "extraHairTime" onChange = {this.handleInputChange} />
                          </Col>
                          <Col md = "6">
                              
                        <Input type="select" name="extraHairTimeType" id="medication" onChange = {this.handleDurationValueChange} >
                        <option name = "duration" value = "Days" >Days</option>
                        <option name = "duration" value = "Months" >Months</option>
                        <option name = "duration" value = "Years" >Years</option>
                            </Input>
                            </Col>
                        </Row>
                        <br></br>
                      </div>
                    )
                  }

{
                    (this.state.headache == true) && (
                      <div>

                        <Row>
                          <Col md = "6">
                          <Input type = "text" name = "headacheTime" onChange = {this.handleInputChange} />
                          </Col>
                          <Col md = "6">
                              
                        <Input type="select" name="headacheTimeType" id="medication" onChange = {this.handleDurationValueChange} >
                        <option name = "duration" value = "Days" >Days</option>
                        <option name = "duration" value = "Months" >Months</option>
                        <option name = "duration" value = "Years" >Years</option>
                            </Input>
                            </Col>
                        </Row>
                        <br></br>
                      </div>
                    )
                  }

                  
{
                    (this.state.booleanOtherSymptom == true) && (
                      <div>

                        <Row>
                          <Col md = "6">
                          <Input type = "text" name = "otherSymptomTime" onChange = {this.handleInputChange} />
                          </Col>
                          <Col md = "6">
                              
                        <Input type="select" name="otherSymptomTimeType" id="medication" onChange = {this.handleDurationValueChange} >
                        <option name = "duration" value = "Days" >Days</option>
                        <option name = "duration" value = "Months" >Months</option>
                        <option name = "duration" value = "Years" >Years</option>
                            </Input>
                            </Col>
                        </Row>
                        <br></br>
                      </div>
                    )
                  }
                  </Col>
              </Row>
              <Row>
                <col md = "4">
                {(this.state.missedPeriods == true) && <label >&#8226;&nbsp;In relation to your menstrual problems, please select all statements that apply to you","IGNORE SECTION</label>}
                </col>
                <col md = "4">
                {(this.state.missedPeriods == true) && <React.Fragment>
                   &nbsp; &nbsp;<input type = "checkbox" name = "hairLoss" value = "hairLoss"  onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label class = "symptom" >Hair Fall / Hair Loss</label>
                  <br></br> <br></br>
                </React.Fragment> }
                </col>
                <col md = "4">
                  
                </col>
              </Row>
              </div>
            )
         }

  <br></br>
  <br></br>

         <Row>  
         <Col md = "4" >
          <label >&#8226;&nbsp;Are you taking medications for any of the following conditions?</label>
            </Col>
              <Col md = "4"  >
            <label>Select Conditions</label>
                  <br></br>
                   &nbsp; &nbsp;<input type = "checkbox" name = "currentlyNotUnderAnyMedication" value = "currentlyNotUnderAnyMedication"  onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label class = "medication" >Currently not under medication</label>
                  <br></br> <br></br>
                  &nbsp; &nbsp;<input type = "checkbox" name = "medicationDiabetes" value = "medicationDiabetes"  onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label class = "medication" >Diabetes </label>
                  <br></br> <br></br>
                  &nbsp; &nbsp;<input type = "checkbox" name = "migrane" value = "migrane"  onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label class = "medication" >Migraine</label>
                  <br></br> <br></br>
                  &nbsp; &nbsp;<input type = "checkbox" name = "medicationHighBloodPressure" value = "medicationHighBloodPressure"  onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label class = "medication" >High Blood pressure </label>
                  <br></br> <br></br>
                  &nbsp; &nbsp;<input type = "checkbox" name = "medicationMentalHealthDisorder" value = "medicationMentalHealthDisorder"  onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label class = "medication" >Mental health disorder</label>
                  <br></br> <br></br>
                  &nbsp; &nbsp;<input type = "checkbox" name = "steroidTherapy" value = "steroidTherapy"  onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label class = "medication" >Steroid therapy</label>
                  <br></br> <br></br>
                  &nbsp; &nbsp;<input type = "checkbox" name = "hormonalContraception" value = "hormonalContraception"  onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label class = "medication" >Hormonal Contraception</label>
                  <br></br> <br></br>
                  &nbsp; &nbsp;<input type = "checkbox" name = "seizureFit" value = "seizureFit"  onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label class = "medication" >Seizure / Fit</label>
                  <br></br> <br></br>
                  &nbsp; &nbsp;<input type = "checkbox" name = "proteinSupplements" value = "proteinSupplements"  onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label class = "medication" >Protein Supplements</label>
                  <br></br> <br></br>
              </Col>

                <Col md = "4">
                  {
                    (this.state.currentlyNotUnderAnyMedication == true || this.state.medicationDiabetes || this.state.migrane || this.state.medicationHighBloodPressure || this.state.medicationMentalHealthDisorder || this.state.steriodTherapy || this.state.hormonalContraception == true || this.state.seizureFit == true || this.state.proteinSupplements == true) && (
                      <div>
                          <label>For how long?</label>
                          <br></br>
                        {
                          (this.state.currentlyNotUnderAnyMedication == true) && (
                            <div>

                              <Row>
                                <Col md = "6">
                                <Input type = "text" name = "currentlyNotUnderAnyMedicationDuration" onChange = {this.handleNumberInputChange} />
                                </Col>
                                <Col md = "6">
                                     
                              <Input type="select" name="currentlyNotUnderAnyMedicationDurationType" id="medication" onChange = {this.handleDurationValueChange} >
                              <option name = "duration" value = "Days" >Days</option>
                              <option name = "duration" value = "Months" >Months</option>
                              <option name = "duration" value = "Years" >Years</option>
                                  </Input>
                                  </Col>
                              </Row>
                              <br></br>
                            </div>
                          )
                        }
                        

                        {
                          (this.state.medicationDiabetes == true) && (
                            <div>

                              <Row>
                                <Col md = "6">
                                <Input type = "text" name = "medicationDiabetesDuration" onChange = {this.handleNumberInputChange} />
                                </Col>
                                <Col md = "6">
                                     
                              <Input type="select" name="medicationDiabetesDurationType" id="medication" onChange = {this.handleDurationValueChange} >
                              <option name = "duration" value = "Days" >Days</option>
                              <option name = "duration" value = "Months" >Months</option>
                              <option name = "duration" value = "Years" >Years</option>
                                  </Input>
                                  </Col>
                              </Row>
                              <br></br>
                            </div>
                          )
                        }



{
  (this.state.migrane == true) && (
    <div>

      <Row>
        <Col md = "6">
        <Input type = "text" name = "migraneDuration" onChange = {this.handleNumberInputChange} />
        </Col>
        <Col md = "6">
             
      <Input type="select" name="migraneDurationType" id="medication" onChange = {this.handleDurationValueChange} >
      <option name = "duration" value = "Days" >Days</option>
      <option name = "duration" value = "Months" >Months</option>
      <option name = "duration" value = "Years" >Years</option>
          </Input>
          </Col>
      </Row>

      <br></br>
    </div>
  )
}



{
  (this.state.medicationHighBloodPressure == true) && (
    <div>

      <Row>
        <Col md = "6">
        <Input type = "text" name = "medicationHighBloodPressureDuration" onChange = {this.handleNumberInputChange} />
        </Col>
        <Col md = "6">
             
      <Input type="select" name="medicationHighBloodPressureDurationType" id="medication" onChange = {this.handleDurationValueChange} >
      <option name = "duration" value = "Days" >Days</option>
      <option name = "duration" value = "Months" >Months</option>
      <option name = "duration" value = "Years" >Years</option>
          </Input>
          </Col>
      </Row>
      <br></br>
    </div>
  )
}




{
  (this.state.medicationMentalHealthDisorder == true) && (
    <div>

      <Row>
        <Col md = "6">
        <Input type = "text" name = "medicationMentalHealthDisorderDuration" onChange = {this.handleNumberInputChange} />
        </Col>
        <Col md = "6">
             
      <Input type="select" name="medicationMentalHealthDisorderDurationType" id="medication" onChange = {this.handleDurationValueChange} >
      <option name = "duration" value = "Days" >Days</option>
      <option name = "duration" value = "Months" >Months</option>
      <option name = "duration" value = "Years" >Years</option>
          </Input>
          </Col>
      </Row>
      <br></br>
    </div>
  )
}




{
  (this.state.steroidTherapy == true) && (
    <div>

      <Row>
        <Col md = "6">
        <Input type = "text" name = "steroidTherapyDuration" onChange = {this.handleNumberInputChange} />
        </Col>
        <Col md = "6">
             
      <Input type="select" name="steroidTherapyDurationType" id="medication" onChange = {this.handleDurationValueChange} >
      <option name = "duration" value = "Days" >Days</option>
      <option name = "duration" value = "Months" >Months</option>
      <option name = "duration" value = "Years" >Years</option>
          </Input>
          </Col>
      </Row>
      <br></br>
    </div>
  )
}



{
  (this.state.hormonalContraception == true) && (
    <div>

      <Row>
        <Col md = "6">
        <Input type = "text" name = "hormonalContraceptionDuration" onChange = {this.handleNumberInputChange} />
        </Col>
        <Col md = "6">
             
      <Input type="select" name="hormonalContraceptionDurationType" id="medication" onChange = {this.handleDurationValueChange} >
      <option name = "duration" value = "Days" >Days</option>
      <option name = "duration" value = "Months" >Months</option>
      <option name = "duration" value = "Years" >Years</option>
          </Input>
          </Col>
      </Row>
      <br></br>
    </div>
  )
}




{
  (this.state.seizureFit == true) && (
    <div>

      <Row>
        <Col md = "6">
        <Input type = "text" name = "seizureFitDuration" onChange = {this.handleNumberInputChange} />
        </Col>
        <Col md = "6">
             
      <Input type="select" name="seizureFitDurationType" id="medication" onChange = {this.handleDurationValueChange} >
      <option name = "duration" value = "Days" >Days</option>
      <option name = "duration" value = "Months" >Months</option>
      <option name = "duration" value = "Years" >Years</option>
          </Input>
          </Col>
      </Row>

      <br></br>
    </div>
  )
}



{
  (this.state.proteinSupplements == true) && (
    <div>

      <Row>
        <Col md = "6">
        <Input type = "text" name = "proteinSupplementsDuration" onChange = {this.handleNumberInputChange} />
        </Col>
        <Col md = "6">
             
      <Input type="select" name="proteinSupplementsDurationType" id="medication" onChange = {this.handleDurationValueChange} >
      <option name = "duration" value = "Days" >Days</option>
      <option name = "duration" value = "Months" >Months</option>
      <option name = "duration" value = "Years" >Years</option>
          </Input>
          </Col>
      </Row>

    </div>
  )
}


                        
                      </div>
                    )
                  }
                </Col>


         </Row>
                

          <br></br>
          <br></br>
         <Row>
          <Col md = "4" >
          <label >&#8226;&nbsp;Do you work out for more than 2.5 hours or 150 minutes per week?</label>
            </Col>
            <Col md = "4" >
            <input type = "radio" name = "baby" value = "Yes" onChange = {this.handleWorkoutValue} /><label>&nbsp; Yes</label>&nbsp;&nbsp;
              <input type = "radio" name = "baby" value = "No" onChange = {this.handleWorkoutValue} /><label>&nbsp; No</label>
            </Col>
            <Col md = "4">
              {
                (this.state.workoutValue == "No") && (
                  <React.Fragment>
                    <label>For how many hours per week?</label> 
                    <input type = "text" name = "workoutHour" value = {this.state.workoutHour} onChange = {this.handleNumberInputChange} />
                  </React.Fragment>
                )
              }
            </Col>
         </Row>

         <br></br>

         <Row>
          <Col md = "4" >
          <label >&#8226;&nbsp;Do eat any of the following more than twice a week?</label>
          <br></br><ul>
            <li>Sugary food</li>
            <li>Soft-Drinks</li>
            <li>Bakery Items</li>
            <li>Processed food</li>
            <li>Fried Food</li>
            <li>Desserts</li>
          </ul>
            </Col>
            <Col md = "6" >
            <input type = "radio" name = "baby" value = "Yes" onChange = {this.handleEatingFoodValue} /><label>&nbsp; Yes</label>&nbsp;&nbsp;
              <input type = "radio" name = "baby" value = "No" onChange = {this.handleEatingFoodValue} /><label>&nbsp; No</label>
            </Col>
         </Row>
                
          <br></br>

         <Row>
          <Col md = "4" >
          <label>&#8226;&nbsp;How many hours of sleep do you get in a day?</label>      
            </Col>
            <Col md = "6" >
                <input type = "text" name = "sleepHour" value = {this.state.sleepHour} onChange = {this.handleNumberInputChange} /> &nbsp;&nbsp;<label>Hours</label>
            </Col>
         </Row>

         <br></br>

         <Row>
          <Col md = "4" >
          <label>&#8226;&nbsp;Please enter any health conditions in your family members.<br></br>
          (Straight blood relatives only)</label><br></br>
          <span>* &nbsp;This information is important for diagnosis to highlight any risks and possible complications.</span>
            
            </Col>
            <Col md = "6" >
            <label>Select Conditions</label>
                  <br></br>
                   &nbsp; &nbsp;<Input type = "checkbox" name = "highBloodPressure" value = "highBloodPressure"  onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label>High Blood Pressure</label>
                  <br></br>
                   &nbsp; &nbsp;<Input type = "checkbox" name = "highCholesterol" value = "highCholesterol" onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label>High Cholesterol</label>
                  <br></br>
                   &nbsp; &nbsp;<Input type = "checkbox" name = "familyHypothyroidism" value = "familyHypothyroidism" onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label>Hypothyroidism</label>
                  <br></br>
                   &nbsp; &nbsp;<Input type = "checkbox" name = "diabetes" value = "diabetes" onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label>Diabetes</label>
                  <br></br>
                   &nbsp; &nbsp;<Input type = "checkbox" name = "pcos" value = "pcos" onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label>PCOS</label>
                  <br></br> 
            </Col>
         </Row>

         
            </div>
          )
        }

        <br></br>

        <Row>
          <Col md = "4" >
          <label htmlFor = "reportFirst" >&#8226;&nbsp;Please upload reports of recent blood tests or ultrasounds taken with 3 months</label>      
            </Col>
            <Col md = "6" >
            <Input type="file" name="file" id="reportFirst" />
            </Col>
         </Row>

         <br></br>

         <Row>
          <Col md = "4" >
          <label htmlFor = "reportSecond" >&#8226;&nbsp;Please upload prescriptions of any treatments you might be undergoing.</label>      
            </Col>
            <Col md = "6" >
            <Input type="file" name="file" id="reportSecond" />
            </Col>
         </Row>

         <br></br>

         <Row>
          <Col md = "4" >
          <label>&#8226;&nbsp;Please enter any other detail you might want the doctor to know.</label>      
            </Col>
            <Col md = "6" >
                <Input type = "textarea" name = "otherExtraDetailForDoctor" value = {this.state.otherExtraDetailForDoctor} onChange = {this.handleNumberInputChange} />
            </Col>
         </Row>
         <br></br>

         <Row>
          <Col md = "4" >
          <label>&#8226;&nbsp;At Proactive, we focus on a multidisciplinary approach to obtain the best outcome and healthcare experience for our patients. <br></br>
          (Please select if you would like any additional support or guidance from any of our other experts..)</label>

            </Col>
            <Col md = "6" >
            <label>Select Your Options</label>
                  <br></br>
                  &nbsp; &nbsp;<Input type = "checkbox" name = "nutritionExpert" value = "nutritionExpert"  onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label>Nutrition expert</label>
                  <br></br>
                   &nbsp; &nbsp;<Input type = "checkbox" name = "yogaTherapist" value = "yogaTherapist" onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label>Yoga Therapist</label>
                  <br></br>
                   &nbsp; &nbsp;<Input type = "checkbox" name = "dermatologist" value = "dermatologist" onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label>Dermatologist</label>
                  <br></br>
                   &nbsp; &nbsp;<Input type = "checkbox" name = "psychiatrist" value = "psychiatrist" onChange = {this.handleExistionConditionsChange} />&nbsp;&nbsp;<label>Psychiatrist</label>
                  <br></br> 
            </Col>
         </Row>
        

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