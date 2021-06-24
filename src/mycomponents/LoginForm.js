import React, { Component } from "react";
import styles from "./index.module.css";
import EmployeeDetails from "./EmployeeDetails";
class LoginForm extends Component {

    state = {
        fields: {},
        success: false
    };
    handleInputChange = (e, name) => {
        let fields = this.state.fields;
        console.log(name);
        fields[name] = e.target.value;

        this.setState({ fields });
        console.log(this.state.fields);
    };
    handleSubmitClick = () => {
        const { fields } = this.state;
        if (fields.username === "sumeet" && fields.password === "12345") {
            this.setState({
                success: true
            });
        }
        else {
            alert('please enter correct credentials');
        }
    };
    render() {
        const { success } = this.state;
        return (
            <div>
                {success ? (
                    <EmployeeDetails />
                ) :

                    (<div className={styles.wrapper}>

                        {/* Form element */}
                        <form className={styles.box}>
                            <div className={styles.container}>


                                {/* User credentials input */}
                                <div className={styles.content}>
                                    <label>UserName</label>
                                    <input type="text" className="form-control" placeholder="UserName"
                                        onChange={(e) => this.handleInputChange(e, 'username')} required />
                                    {/* password input */}
                                    <label for="">Password</label>
                                    <input type="password" className="form-control" placeholder="password"

                                        onChange={(e) => this.handleInputChange(e, 'password')} required />
                                </div>
                                <div className={styles.footer} >
                                    <button type="submit" className={styles.submitBtn}
                                        className="btn btn-primary btn-lg btn-block" onClick={this.handleSubmitClick}
                                    >Log In</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    )}
            </div>
        );
    }
}
export default LoginForm;