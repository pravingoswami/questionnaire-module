import React from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css"
// import "./Questionnaire.css"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            birthDate: new Date(),
            weight: '',
            heightFeet: '',
            heightInch: '',
            waistSize: '',
            hipSize: '',
            purposeOfConsultations: [
                { id: '1', name: 'I want to know why I might have gained weight' },
                { id: '2', name: 'I am more concerned about future risks from this weight' },
                { id: '3', name: 'I want to prepare my body for the conception' },
                { id: '4', name: 'Need to get my prescription renewed' },
                { id: '5', name: 'Need to get a second opinion' },
                { id: '6', name: 'other' },
            ],
            purposeOfConsultation: '',
            booleanPurposeOfConsultation: false,
            booleanExistingConditions: false,
            hadBaby: '',
            existionConditions: [],
            pcosPcod: false,
            pcosPcodTime: '',
            hypothyroidism: false,
            hypothyroidismTime: '',
            hyperprolactemia: false,
            hyperprolactemiaTime: '',
            booleanOtherCondition: false, // if and only if booleanOtherCondition is true then only the other condition data will be sent 
            otherCondition: '',
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
            protienSupplements: false,

        }
    }

    handleDateChange = (birthDate) => {
        console.log(birthDate)
        this.setState({ birthDate });
    };

    handleWeightChange = (e) => {
        const weight = e.target.value
        console.log(weight)
        this.setState({ weight })
    }

    handleHeightChange = (e) => {
        const height = e.target.value
        console.log(height)
        this.setState({ [e.target.name]: height })
    }

    handleHipChange = (e) => {
        const hipSize = e.target.value
        console.log(hipSize)
        this.setState({ hipSize })
    }

    handleWaistChange = (e) => {
        const waistSize = e.target.value
        console.log(waistSize)
        this.setState({ waistSize })
    }

    handlePurposeOfConsultationChange = (e) => {
        const purposeOfConsultation = e.target.value
        console.log(purposeOfConsultation)
        if (purposeOfConsultation == "other") {
            const booleanPurposeOfConsultation = true
            const purposeOfConsultation = ""
            const booleanExistingConditions = true
            this.setState({ booleanExistingConditions, purposeOfConsultation, booleanPurposeOfConsultation })
        } else {
            const booleanPurposeOfConsultation = false
            if (purposeOfConsultation == "I want to know why I might have gained weight" || purposeOfConsultation == "I am more concerned about future risks from this weight" || purposeOfConsultation == "I want to prepare my body for the conception" || purposeOfConsultation == "Need to get a second opinion") {
                const booleanExistingConditions = true
                this.setState({ booleanExistingConditions, purposeOfConsultation, booleanPurposeOfConsultation })
            } else {
                const booleanExistingConditions = false
                this.setState({ booleanExistingConditions, purposeOfConsultation, booleanPurposeOfConsultation })
            }
        }
    }

    weightGainedHandleChange = (e) => {
        console.log(e.target.value)
        this.setState({ [e.target.name]: e.target.value })
    }

    handlePurposeOfConsultationChangeOther = (e) => {
        const purposeOfConsultation = e.target.value
        console.log(purposeOfConsultation)
        this.setState({ purposeOfConsultation })
    }

    handleExistionConditionsChange = (e) => {
        const existionConditions = e.target.value
        console.log(e.target.checked)
        console.log(existionConditions)
        if (existionConditions == "other") {
            this.setState({ booleanOtherCondition: e.target.checked })
        } else {
            this.setState({ [existionConditions]: e.target.checked })
        }
    }

    handleOtherConditionChange = (e) => {
        const otherCondition = e.target.value
        console.log(otherCondition)
        this.setState({ otherCondition })
    }

    hadBabyChange = (e) => {
        console.log(e.target.value)
        const hadBaby = e.target.value
        this.setState({ hadBaby })
    }

    conditionInuptHandleChange = (e) => {
        console.log(e)
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSymptomsChange = (e) => {
        console.log(e)
        this.setState({ [e.target.value]: e.target.checked })
    }

    handleOtherSymptomChange = (e) => {
        console.log(e)
        this.setState({ otherSymptom: e.target.value })
    }

    handleSymptomInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleMenstrualProblemChange = (e) => {
        this.setState({ [e.target.value]: e.target.checked })
    }

    handleLastPeriodChange = (e) => {
        const lastPeriodTime = e.target.value
        this.setState({ lastPeriodTime })
    }

    handleOtherMedications = (e) => {
        this.setState({ [e.target.value]: e.target.checked })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        const data = {}
        data['Date-Of-Birth'] = this.state.birthDate
        data['Weight'] = this.state.weight
        data['Height'] = `${this.state.heightFeet}"${this.state.heightInch}'`
        data['Hip-Size'] = this.state.hipSize
        data['Waist-Size'] = this.state.waistSize
        data['Purpose-Of-Consultation'] = this.state.purposeOfConsultation
        data['Had-Baby'] = this.state.hadBaby
        console.log(data)
    }


    render() {
        return (
            <div>
                <br />
                <br />
                <h2 style={{ textAlign: "center" }}> Questionnaire </h2>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <div className="main-body">
                        <br />
                        <div className="row">
                            <div className="col-md-3">
                                <h4> Please Enter Your Vitals </h4>
                            </div>
                            <div className="col-md-3">
                                <p> Birth date:</p>
                                <DatePicker
                                    selected={this.state.birthDate}
                                    onChange={this.handleDateChange}
                                />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="weight"> Weight(Kg) :  </label>
                                <input style={{ display: "block" }} type="text" id="weight" value={this.state.weight} onChange={this.handleWeightChange} />
                            </div>
                            <div className="col-md-3">
                                <label> Height :  </label>
                                <br />
                                <input type="text" id="feet" name="heightFeet" value={this.state.heightFeet} style={{ width: "35px" }} onChange={this.handleHeightChange} /> <label htmlFor="feet"> Feet </label>
                                <input type="text" id="inch" name="heightInch" value={this.state.heightInch} style={{ width: "35px" }} onChange={this.handleHeightChange} /> <label htmlFor="inch"> Inch </label>
                            </div>
                        </div>

                        <br />
                        <br />
                        <div className="row">
                            <div className="col-md-3">
                                <h4> Please Enter Your Measurements </h4>
                                <p style={{ fontSize: "12px" }}> *Please measure your fullest part of Hip and Waist</p>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="waist-size"> Waist Size(inches) :  </label>
                                <input type="text" style={{ width: "50px" }} id="waist-size" value={this.state.waistSize} onChange={this.handleWaistChange} />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="hip-size"> Hip Size(inches) :  </label>
                                <input type="text" style={{ width: "50px" }} id="hip-size" value={this.state.hipSize} onChange={this.handleHipChange} />
                            </div>

                        </div>
                        <br />
                        <br />

                        <div className="row">
                            <div className="col-md-3">
                                <h4> Select the option that best describes your purpose of consultation </h4>
                            </div>
                            <div className="col-md-4">
                                <select onChange={this.handlePurposeOfConsultationChange}>
                                    <option value="">  </option>
                                    {
                                        this.state.purposeOfConsultations.map(consultation => {
                                            return (
                                                <option key={consultation.id}>
                                                    {consultation.name}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-md-1">
                            </div>
                            <div className="col-md-4">
                                {
                                    this.state.booleanPurposeOfConsultation && <div> <label>Please specify the reason</label> <br /> <textarea id="purpose-of-consultation" onChange={this.handlePurposeOfConsultationChangeOther} value={this.state.purposeOfConsultation} /> </div>
                                }
                            </div>
                        </div>


                        <br />
                        <br />
                        <div className="row">
                            <div className="col-md-3">
                                <h4>Are you someone who has a baby within the last one year?</h4>
                            </div>
                            <div className="col-md-4">
                                <select onChange={this.hadBabyChange}>
                                    <option value="">Select</option>
                                    <option value="yes"> Yes </option>
                                    <option value="no"> No </option>
                                </select>
                            </div>
                        </div>

                        <br />
                        <br />
                        <div>
                            {
                                this.state.booleanExistingConditions && (
                                    <div className="row">
                                        <div className="col-md-3">
                                            <br />
                                            <br />
                                            <h4>Please select from this list of all the existing condition(s) that you have </h4>
                                        </div>
                                        <div className="col-md-3">
                                            <br />
                                            <br />
                                            <input type="checkbox" onChange={this.handleExistionConditionsChange} id="hyperprolactemia" value="hyperprolactemia" checked={this.state.hyperprolactemia} />
                                            <label htmlFor="hyperprolactemia">Hyperprolactemia </label> <br />
                                            {/* - Exess secretion of the hormone Prolactin */}
                                            <input type="checkbox" onChange={this.handleExistionConditionsChange} id="pcos/pcod" value="pcosPcod" checked={this.state.pcosPcod} />
                                            <label htmlFor="pcos/pcod">PCOS/PCOD</label> <br />
                                            <input type="checkbox" onChange={this.handleExistionConditionsChange} id="hypothyroidism" value="hypothyroidism" checked={this.state.hypothyroidism} />
                                            <label htmlFor="hypothyroidism">Hypothyroidism</label> <br />
                                            <input type="checkbox" onChange={this.handleExistionConditionsChange} id="other" value="other" checked={this.state.booleanOtherCondition} />
                                            <label htmlFor="other">other</label>
                                            <span>
                                                {
                                                    this.state.booleanExistingConditions && this.state.booleanOtherCondition && <input style={{ display: "block", width: "250px" }} type="text" placeholder="Mention other conditions" value={this.state.otherCondition} onChange={this.handleOtherConditionChange} />
                                                }
                                            </span>
                                        </div>
                                        <div className="col-md-3">
                                            <p><strong>Severity of the Condition</strong></p>
                                            <p>{this.state.hyperprolactemia ? 'slider' : <br />}</p>
                                            <p>{this.state['pcosPcod'] ? <br /> : <br />}</p>
                                            <p>{this.state.hypothyroidism ? 'slider' : <br />}</p>
                                            <p>{this.state.booleanOtherCondition ? 'slider' : <br />}</p>
                                        </div>
                                        <div className="col-md-3">
                                            <p><strong>How long has it been since this was diagnosed?</strong></p>
                                            <span>{this.state.hyperprolactemia ? <input type="text" value={this.state.hyperprolactemiaTime} onChange={this.conditionInuptHandleChange} name="hyperprolactemiaTime" /> : <br />}</span>
                                            <span>{this.state['pcosPcod'] ? <input type="text" value={this.state.pcosPcodTime} onChange={this.conditionInuptHandleChange} name="pcosPcodTime" /> : <br />}</span>
                                            <span>{this.state.hypothyroidism ? <input type="text" value={this.state.hypothyroidismTime} onChange={this.conditionInuptHandleChange} name="hypothyroidismTime" /> : <br />}</span>
                                            <span>{this.state.booleanOtherCondition ? <input type="text" value={this.state.otherConditionTime} onChange={this.conditionInuptHandleChange} name="otherConditionTime" /> : <br />}</span>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                        <br />
                        <br />
                        <div>
                            {
                                this.state.booleanExistingConditions && <div className="row">
                                    <div className="col-md-3">
                                        <h4>Please enter how much weight you gained and in how much time? </h4>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" onChange={this.weightGainedHandleChange} name="weightGained" value={this.state.weightGained} /> <span>kg</span>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" onChange={this.weightGainedHandleChange} name="weightGainedTime" value={this.state.weightGainedTime} /> <span>days</span>
                                    </div>
                                </div>
                            }
                        </div>
                        <br />

                        <div>
                            {
                                this.state.purposeOfConsultation !== "Need to get my prescription renewed" && this.state.hyperprolactemia === false && this.state.pcosPcod === false && this.state.hypothyroidism === false && (

                                    <div className="row">
                                        <div className="col-md-3">
                                            <br />
                                            <br />
                                            <h4>Please enter all the details of all the symptoms that you noticed apart from weight gain </h4>
                                        </div>
                                        <div className="col-md-3">
                                            <br />
                                            <br />
                                            {/* passing values to handle for directly changing the state */}
                                            <input type="checkbox" onChange={this.handleSymptomsChange} id="hair-loss" value="hairLoss" checked={this.state.hairLoss} />
                                            <label htmlFor="hair-loss">Hair fall/Hair loss </label> <br />

                                            <input type="checkbox" onChange={this.handleSymptomsChange} id="acne" value="acne" checked={this.state.acne} />
                                            <label htmlFor="acne">Acne</label> <br />

                                            <input type="checkbox" onChange={this.handleSymptomsChange} id="missedPeriods" value="missedPeriods" checked={this.state.missedPeriods} />
                                            <label htmlFor="missedPeriods">Missed/Irregular periods/Heavy Bleeding</label> <br />

                                            <input type="checkbox" onChange={this.handleSymptomsChange} id="extraHair" value="extraHair" checked={this.state.extraHair} />
                                            <label htmlFor="extraHair">Extra hair growth on body and face</label> <br />

                                            <input type="checkbox" onChange={this.handleSymptomsChange} id="constipation" value="constipation" checked={this.state.constipation} />
                                            <label htmlFor="constipation">Constipation</label> <br />

                                            <input type="checkbox" onChange={this.handleSymptomsChange} id="skinPigmentation" value="skinPigmentation" checked={this.state.skinPigmentation} />
                                            <label htmlFor="skinPigmentation">Skin pigmentation/thickness/dryness</label> <br />

                                            <input type="checkbox" onChange={this.handleSymptomsChange} id="slowHeartbeat" value="slowHeartbeat" checked={this.state.slowHeartbeat} />
                                            <label htmlFor="slowHeartbeat">Slow/fast Heartbeat</label> <br />

                                            <input type="checkbox" onChange={this.handleSymptomsChange} id="headache" value="headache" checked={this.state.headache} />
                                            <label htmlFor="headache">Headache</label> <br />

                                            <input type="checkbox" onChange={this.handleSymptomsChange} id="dischargeNipple" value="dischargeNipple" checked={this.state.dischargeNipple} />
                                            <label htmlFor="dischargeNipple">Discharge from nipple</label> <br />

                                            <input type="checkbox" onChange={this.handleSymptomsChange} id="moodSwings" value="moodSwings" checked={this.state.moodSwings} />
                                            <label htmlFor="moodSwings">Mood Swings/Lethargy/Sluggishness</label> <br />

                                            <input type="checkbox" onChange={this.handleSymptomsChange} id="otherSymptom" value="booleanOtherSymptom" checked={this.state.booleanOtherSymptom} />
                                            <label htmlFor="otherSymptom">other</label>
                                            <span>
                                                {
                                                    this.state.booleanOtherSymptom && <input style={{ display: "block", width: "250px" }} type="text" placeholder="Mention other Symptoms" value={this.state.otherSymptom} onChange={this.handleOtherSymptomChange} />
                                                }
                                            </span>
                                        </div>
                                        <div className="col-md-3">
                                            <p><strong>Rate Severity on the Scale of 10</strong></p>
                                            <p>{this.state.hairLoss ? 'slider' : <br />}</p>
                                            <p>{this.state.acne ? 'slider' : <br />}</p>
                                            <p>{this.state.missedPeriods ? <br /> : <br />}</p>
                                            <p>{this.state.extraHair ? 'slider' : <br />}</p>
                                            <p>{this.state.constipation ? <br /> : <br />}</p>
                                            <p>{this.state.skinPigmentation ? <br /> : <br />}</p>
                                            <p>{this.state.slowHeartbeat ? <br /> : <br />}</p>
                                            <p>{this.state.headache ? 'slider' : <br />}</p>
                                            <p>{this.state.dischargeNipple ? <br /> : <br />}</p>
                                            <p>{this.state.moodSwings ? <br /> : <br />}</p>
                                            <p>{this.state.booleanOtherSymptom ? 'slider' : <br />}</p>
                                        </div>
                                        <div className="col-md-3">
                                            <p><strong>How long has it been since this was diagnosed</strong></p>
                                            <span>{this.state.hairLoss ? <input type="text" value={this.state.hairLossTime} onChange={this.handleSymptomInputChange} name="hairLossTime" /> : <br />}</span>
                                            <span>{this.state.acne ? <input type="text" value={this.state.acneTime} onChange={this.handleSymptomInputChange} name="acneTime" /> : <br />}</span>
                                            <span>{this.state.missedPeriods ? <input type="text" value={this.state.missedPeriodsTime} onChange={this.handleSymptomInputChange} name="missedPeriodsTime" /> : <br />}</span>
                                            <span>{this.state.extraHair ? <input type="text" value={this.state.extraHairTime} onChange={this.handleSymptomInputChange} name="extraHairTime" /> : <br />}</span>
                                            <span>{this.state.constipation ? <br /> : <br />}</span>
                                            <span>{this.state.skinPigmentation ? <br /> : <br />}</span>
                                            <span>{this.state.slowHeartbeat ? <br /> : <br />}</span>

                                            <span>{this.state.headache ? <input type="text" value={this.state.headacheTime} onChange={this.handleSymptomInputChange} name="headacheTime" /> : <br />}</span>

                                            <span>{this.state.dischargeNipple ? <br /> : <br />}</span>
                                            <span>{this.state.moodSwings ? <br /> : <br />}</span>
                                            <span>{this.state.booleanOtherSymptom ? <input type="text" value={this.state.otherSymptomTime} onChange={this.handleSymptomInputChange} name="otherSymptomTime" /> : <br />}</span>
                                        </div>
                                    </div>

                                )
                            }
                        </div>
                        <br />

                        <div>
                            {
                                this.state.missedPeriods && (
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h4> In relation to your menstrual problems, please select all statements that apply to you </h4>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="checkbox" onChange={this.handleMenstrualProblemChange} id="stopped-getting-menstrual-period" value="StoppedPeriods" checked={this.state.StoppedPeriods} />
                                            <label htmlFor="stopped-getting-menstrual-period">Stopped getting Menstrual Periods </label> <br />

                                            <input type="checkbox" onChange={this.handleMenstrualProblemChange} id="less-than-6-cycles" value="lessThanSixCycles" checked={this.state.lessThanSixCycles} />
                                            <label htmlFor="less-than-6-cycles">Less than 6 cycles a year</label> <br />

                                            <input type="checkbox" onChange={this.handleMenstrualProblemChange} id="moreThanSixCycles" value="moreThanSixCycles" checked={this.state.moreThanSixCycles} />
                                            <label htmlFor="moreThanSixCycles">More than 6 cycles a year</label> <br />

                                            <input type="checkbox" onChange={this.handleMenstrualProblemChange} id="countinuosFlow" value="countinuosFlow" checked={this.state.countinuosFlow} />
                                            <label htmlFor="countinuosFlow">Countinuous flow for more than 7 days</label> <br />
                                        </div>
                                        <div className="col-md-3">
                                            <label>How many days ago was your last menstrual Period</label>
                                            <input type="text" value={this.state.lastPeriodTime} onChange={this.handleLastPeriodChange} /> days
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                        <div>
                            {
                                this.state.purposeOfConsultation !== "Need to get my prescription renewed" && (
                                    <div className="row">
                                        <div className="col-md-3">
                                            <br />
                                            <h4> Are you taking medications for any of the following conditions?</h4>
                                        </div>
                                        <div className="col-md-4">
                                            <br />
                                            {/* passing values to handle for directly changing the state */}
                                            <input type="checkbox" onChange={this.handleOtherMedications} id="currentlyNotUnderAnyMedication" value="currentlyNotUnderAnyMedication" checked={this.state.currentlyNotUnderAnyMedication} />
                                            <label htmlFor="currentlyNotUnderAnyMedication">Currently not under any medication </label> <br />

                                            <input type="checkbox" onChange={this.handleOtherMedications} id="diabetes" value="diabetes" checked={this.state.diabetes} />
                                            <label htmlFor="diabetes">Diabetes</label> <br />

                                            <input type="checkbox" onChange={this.handleOtherMedications} id="migrane" value="migrane" checked={this.state.migrane} />
                                            <label htmlFor="migrane">Migraine</label> <br />

                                            <input type="checkbox" onChange={this.handleOtherMedications} id="highBloodPressure" value="highBloodPressure" checked={this.state.highBloodPressure} />
                                            <label htmlFor="highBloodPressure">High Blood Pressure</label> <br />

                                            <input type="checkbox" onChange={this.handleOtherMedications} id="mentalDisorder" value="mentalDisorder" checked={this.state.mentalDisorder} />
                                            <label htmlFor="mentalDisorder">Mental Health Disorder</label> <br />

                                            <input type="checkbox" onChange={this.handleOtherMedications} id="steriodTherapy" value="steriodTherapy" checked={this.state.steriodTherapy} />
                                            <label htmlFor="steriodTherapy">Steriod Therapy</label> <br />

                                            <input type="checkbox" onChange={this.handleOtherMedications} id="horomonalContraception" value="horomonalContraception" checked={this.state.horomonalContraception} />
                                            <label htmlFor="horomonalContraception">Hormonal Contraception</label> <br />

                                            <input type="checkbox" onChange={this.handleOtherMedications} id="seizureFit" value="seizureFit" checked={this.state.seizureFit} />
                                            <label htmlFor="seizureFit">Seizure/fit</label> <br />

                                            <input type="checkbox" onChange={this.handleOtherMedications} id="protienSupplements" value="protienSupplements" checked={this.state.protienSupplements} />
                                            <label htmlFor="protienSupplements">Protien Supplements</label> <br />

                                        </div>
                                        <div className="col-md-4">
                                            <p>For how Long?</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                    </div>
                    <br />
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}


export default App