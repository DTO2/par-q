import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super ()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      heartProblems: "",
      chestPain: "",
      chestpain2: "",
      diatbetes: "",
      dizziness: "",
      shortnessOfBreath: "",
      jointProblems: "",
      highOrLowBloodPressure: "",
      prescribedMedicine: "",
      pregnant: "",
      other: ""

    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name] : checked }) :this.setState({ [name]: value })
  }



  render() {
    return (
      <div>
        <div className="intro">
        <h1>Physical Activity Readiness Questionnaire (PAR-Q)</h1>
        <h2>A questionnaire for people aged 15-69</h2>
        <p>Regular physical activity is fun and healthy and increasing more people are starting to become more active every day.
          <br />
          Being more active is very safe for most people. However, some people should check with their doctor before they start becoming much more physically active.
          <br />
          If you are planning to become much more physically active than you are now start by answering the eleven questions below. If you are between the ages of 15-69 the PAR-Q will tell you if you should check with your doctor before you start.
          <br />
          If you are over 69 years of age and you are not used to being very active, check with your doctor.
          <br />
          Common sense is your best guide when answering these questions, please read the questions carefully and answer each one honestly
        </p>
        </div>

        <form className="form">
          <div className="name">
          <input type="text" value={this.state.firstName} name="firstName" placeholder="first name" onChange={this.handleChange}/>
          <input type="text" value={this.state.lastName} name="lastName" placeholder="last name" onChange={this.handleChange}/>
          </div>

          <label>
          <input type="checkbox" name="age" checked={this.state.age} onChange={this.handleChange}/>
          Are you between the ages of 15-69?
          </label>

          <label>
          <input type="checkbox" name="heartProblems" checked={this.state.heartProblems} onChange={this.handleChange}/>
          Has your doctor ever said that you have a heart condition and that you should only do physical activity recommended by a doctor?
          </label>

          <label>
          <input type="checkbox" name="chestPain" checked={this.state.chestPain} onChange={this.handleChange}/>
          have you ever felt pain in your chest when you do physical exercise?
          </label>

          <label>
          <input type="checkbox"  name="chestPain2" checked={this.state.chestPain2} onChange={this.handleChange}/>
          In the past month have you had chest pain whe you were not doing physical activity?
          </label>

          <label>
          <input type="checkbox"  name="diabetes" checked={this.state.diabetes} onChange={this.handleChange}/>
          Do you have any metabolic, adrenal conditions (i.e diabetes of hyperthyroidism)?
          </label>

          <label>
          <input type="checkbox"  name="dizziness" checked={this.state.dizziness} onChange={this.handleChange}/>
          Do you often feel faint, have spells of dizziness or have lost consciousness?
          </label>

          <label>
          <input type="checkbox"  name="shortnessOfBreath" checked={this.state.shortnessOfBreath} onChange={this.handleChange}/>
          Have you ever suffered from unusual shortness of breath at rest or with mild exertion?
          </label>

          <label>
          <input type="checkbox"  name="jointProblems" checked={this.state.jointProblems} onChange={this.handleChange}/>
          Has the doctor ever said that you have a bone or joint problem, such as arthrities, that has been aggravated by exercise or that may be made worse by exercise?
          </label>

          <label>
          <input type="checkbox"  name="highOrLowBloodPressure" checked={this.state.highOrLowBloodPressure} onChange={this.handleChange}/>
          Do you have either high or low blood pressure? If yes what type?
          </label>

          <label>
          <input type="checkbox"  name="prescribedMedcine" checked={this.state.prescribedMedcine} onChange={this.handleChange}/>
          Are you currently on any prescribed medicines that may affect your ability to exercise?
          </label>

          <label>
          <input type="checkbox" name="pregnant" checked={this.state.pregnant} onChange={this.handleChange}/>
          Are you pregnant or have you had a baby in the last 6 months (females only)?
          </label>

          <label>
          <input type="checkbox" name="other" checked={this.state.other} onChange={this.handleChange}/>
          Do you know of any other reason that would affect your ability to participate in physical activity?
          </label>

        </form>

        <div className="outro">
          <p>If you answered YES to one or more questions:
          Talk to your doctor either in person or by phone before you start becoming more physically active and/or taking a
          fitness appraisal. Tell your doctor what questions you answered yes to on this form.
          You may still be able to do any activity you want as long as you start slowly and build up gradually or it may be 
          that you need to restrict your activities to those which are safe for you.</p>

          <p>Signature:<span> </span></p>
          <p>Date: <span>{new Date().toLocaleString()}</span></p>

        </div>

      </div>
     
    )
  }  
}

export default App;
