import React, { Component } from "react";

import Start from "./Start";
import Name from "./Name";
import Email from "./Email";
import Phone from "./Phone";
import Salary from "./Salary";
import Final from "./Final";
import List from "./List";




class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      tenant: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        salary: ""
      },
      loading: false,
      lang: "ENG"
    };

    this._nextPage = this._nextPage.bind(this);
    this._previousPage = this._previousPage.bind(this);
    this._startAgain = this._startAgain.bind(this)
    this._handleInputChange = this._handleInputChange.bind(this);
    this._submit = this._submit.bind(this);
    this._resetTenant = this._resetTenant.bind(this);
    this._toggleLang = this._toggleLang.bind(this)

  }

  render() {

    return (
      <div>
         <button
        className="button language-btn"
        onClick={this._toggleLang}>{this.state.lang}</button>
        <h1>{this.state.lang === "ENG" ? "Hello" : "Hallo"} {this.state.page < 2 ? "New Tenant" : this.state.tenant.firstName + " " + this.state.tenant.lastName}</h1>
        {this.state.page > 0 && this.state.page < 6 ?
        <React.Fragment>
        <div className="outer-bar">
          <div className="inner-bar" style={{width: (this.state.page-1)*25 + "%"}}>
          </div>
        </div>
        </React.Fragment> : ""}
        <div className="container">
        {this.state.page > 0 && this.state.page < 6 ? <List
        page={this.state.page}
        lang={this.state.lang}/> : ""}
        {this.state.page === 0 && <Start
          nextPage={this._nextPage}
          lang={this.state.lang} />}
        {this.state.page === 1 && (
          <Name
            nextPage={this._nextPage}
            previousPage={this._previousPage}
            handleInputChange={this._handleInputChange}
            firstName={this.state.tenant.firstName}
            lastName={this.state.tenant.lastName}
            lang={this.state.lang}
          />
        )}
        {this.state.page === 2 && (
          <Email
            nextPage={this._nextPage}
            previousPage={this._previousPage}
            handleInputChange={this._handleInputChange}
            email={this.state.tenant.email}
            lang={this.state.lang}
          />
        )}
        {this.state.page === 3 && (
          <Phone
            nextPage={this._nextPage}
            previousPage={this._previousPage}
            handleInputChange={this._handleInputChange}
            phone={this.state.tenant.phone}
            lang={this.state.lang}
          />
        )}
        {this.state.page === 4 && (
          <Salary
            nextPage={this._nextPage}
            previousPage={this._previousPage}
            handleInputChange={this._handleInputChange}
            salary={this.state.tenant.salary}
            lang={this.state.lang}
          />
        )}
         {this.state.page === 5 && (
          <Final
            startAgain={this._startAgain}
            tenant={this.state.tenant}
            submit={this._submit}
            handleInputChange={this._handleInputChange}
            previousPage={this._previousPage}
            resetTenant={this._resetTenant}
            lang={this.state.lang}
          />
        )}
        {this.state.loading && <h1>
          {this.state.lang === "ENG" ? "Thank you for the information!" : "Danke für die Informationen!"}</h1>}
        </div>
      </div>
    );
  }

  _nextPage() {
    this.setState({
      page: this.state.page + 1
    });
  }

  _previousPage() {
    this.setState({
      page: this.state.page - 1
    });
  }

  _startAgain() {
    this.setState({
      page: 1
    });
  }

  _toggleLang() {
    if (this.state.lang === "ENG") {
      this.setState({
        lang: "GER"
      })
    } 

    if (this.state.lang === "GER") {
      this.setState({
        lang: "ENG"
      })
    } 
  }

  _resetTenant() {
    this.setState({
      tenant: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        salary: ""
      }
    })
  }

  _submit() {
    this.setState({
      loading: true,
      page: 6
    })
    //mockup axios call to simulate sending data to backend, takes 3 seconds
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 3000, this.state.tenant);
    })
  }

  //handles input changes for the form inputs and allows state changes
  //triggerd in the components
  _handleInputChange(key, value) {
    if(key === "phone") {
      if(value.length === 4) {
        value = value + " "
      }
    }

    if(key === "loading") {
      this.setState({
        loading: value
      })
    }

    if(key === "page") {
      this.setState({
        page: value
      })
    }

    this.setState({
      tenant: { ...this.state.tenant, [key]: value }
    });
  }
}

export default Form;
