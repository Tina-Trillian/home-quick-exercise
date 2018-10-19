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
      loading: false
    };

    this._nextPage = this._nextPage.bind(this);
    this._previousPage = this._previousPage.bind(this);
    this._startAgain = this._startAgain.bind(this)
    this._handleInputChange = this._handleInputChange.bind(this);
    this._submit = this._submit.bind(this);
    this._resetTenant = this._resetTenant.bind(this);

  }

  render() {

    return (
      <div>
        <h1>Hello {this.state.page < 2 ? "New Tenant" : this.state.tenant.firstName + " " + this.state.tenant.lastName}</h1>
        {this.state.page > 0 && this.state.page < 6 ?
        <React.Fragment>
        <div className="outer-bar">
          <div className="inner-bar" style={{width: (this.state.page-1)*25 + "%"}}>
          </div>
        </div>
        </React.Fragment> : ""}
        <div className="container">
        {this.state.page > 0 && this.state.page < 6 ? <List
        page={this.state.page}/> : ""}
        {this.state.page === 0 && <Start nextPage={this._nextPage} />}
        {this.state.page === 1 && (
          <Name
            nextPage={this._nextPage}
            previousPage={this._previousPage}
            handleInputChange={this._handleInputChange}
            firstName={this.state.tenant.firstName}
            lastName={this.state.tenant.lastName}
          />
        )}
        {this.state.page === 2 && (
          <Email
            nextPage={this._nextPage}
            previousPage={this._previousPage}
            handleInputChange={this._handleInputChange}
            email={this.state.tenant.email}
          />
        )}
        {this.state.page === 3 && (
          <Phone
            nextPage={this._nextPage}
            previousPage={this._previousPage}
            handleInputChange={this._handleInputChange}
            phone={this.state.tenant.phone}
          />
        )}
        {this.state.page === 4 && (
          <Salary
            nextPage={this._nextPage}
            previousPage={this._previousPage}
            handleInputChange={this._handleInputChange}
            salary={this.state.tenant.salary}
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
          />
        )}
        {this.state.loading && <h1>Thank you for the information!</h1>}
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
