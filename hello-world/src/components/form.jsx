import React from "react";

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            topic: '',
            text: ''
        }
    }
    inputHandler1 = (e)=>{
        e.target.style.color = 'black';
        if ( e.target.value.length < 5 ){
            e.target.value ='podaj imię i nazwisko ';
            e.target.style.color = 'red'
        }
    };
    inputHandler2 = (e)=>{
        e.target.style.color = 'black';
        if (e.target.value.indexOf('@') && e.target.value.length < 3 ){
            e.target.value ='podaj prawidłowy adres email';
            e.target.style.color = 'red'
        }
    };
    inputHandler3 = (e)=>{
        e.target.style.color = 'black';
        if ( e.target.value.length < 3 ){
            e.target.value ='podaj temat';
            e.target.style.color = 'red'
        }
    };
    inputHandler4 = (e)=>{
        e.target.style.color = 'black';
        if ( e.target.value.length < 8 ){
            e.target.value ='wpisz wiadomość';
            e.target.style.color = 'red'
        }
    };
//wrzuamy dane do maila przez fetch ze strony https://stackoverflow.com/questions/46640024/how-do-i-post-form-data-with-fetch-api
    // let formData = new FormData();
    // formData.append('name', 'John'); //tu dać state z kązdego pola
    // formData.append('password', 'John123');
    //
    // fetch("api/SampleData",
    //     {
    //         body: formData,
    //         method: "post"
    //     });
    render() {
        return (
            <form className="form" id="imObjectForm_3" method="post" >
                <div className="form-row">
                    <label htmlFor="field-name">Imię i Nazwisko</label>
                    <input type="text" name="imObjectForm_3_1" required id="field-message"
                           pattern="[a-zA-ZąĄććęęłŁńŃóÓśŚżŻŹŹ ]+" onBlur={this.inputHandler1}/>
                </div>
                <div className="form-row">
                    <label htmlFor="field-email">Email*</label>
                    <input type="email" name="imObjectForm_3_2" required id="field-message"
                           pattern="[^@\s]+@[^@\s]+\.[^@\s]+" onBlur={this.inputHandler2}/>
                </div>
                <div className="form-row">
                    <label htmlFor="field-name">Temat</label>
                    <input type="text" name="imObjectForm_3_3" required id="field-message"
                           pattern="[a-zA-ZąĄććęęłŁńŃóÓśŚżŻŹŹ ]+" onBlur={this.inputHandler3}/>
                </div>
                <div className="form-row">
                    <label htmlFor="field-message">Wiadomość</label>
                    <textarea name="imObjectForm_3_4" required  id="field-message"
                              pattern=".+" onBlur={this.inputHandler4}/>
                </div>
                <div className="form-row">
                    <button type="submit" className="submit-btn">
                        Wyślij
                    </button>
                </div>
            </form>
        );
    }
}

export default ()=>(
    <Form/>
)