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

        if ( e.target.value.length < 5 ){
    //        e.target.value ='podaj imię i nazwisko ';
            e.target.className = 'notValid'
        }else {
            e.target.classList.remove('notValid');
            this.setState({
                name: e.target.value
            })
        }
    };
    inputHandler2 = (e)=>{
        if (e.target.value.indexOf('@') <0 || e.target.value.length < 3 ){
        //    e.target.value ='podaj prawidłowy adres email';
            e.target.className = 'notValid'
        }else {
            e.target.classList.remove('notValid');
            this.setState({
                email: e.target.value
            })
        }
    };
    inputHandler3 = (e)=>{
        if ( e.target.value.length < 3 ){
      //      e.target.value ='podaj temat';
            e.target.className = 'notValid'
        }else {
            e.target.classList.remove('notValid');
            this.setState({
                topic: e.target.value
            })
        }
    };
    inputHandler4 = (e)=>{

        if ( e.target.value.length < 8 ){
       //     e.target.value ='wpisz wiadomość';
            e.target.className = 'notValid'
        }else {
            e.target.classList.remove('notValid');
            this.setState({
                text: e.target.value
            })
        }
    };

    submitHandler = (e)=>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('imObjectForm_3_1', this.state.name);
        formData.append('imObjectForm_3_2', this.state.email);
        formData.append('imObjectForm_3_3', this.state.topic);
        formData.append('imObjectForm_3_4', this.state.text);
        fetch("/mail/imEmailForm.php",
            {
                body: formData,
                method: "post",

            })
            .then(function () {
                console.log('ok')
            }).catch(function () {
                alert('Błąd wysyłania danych, spróbuj ponownie później')
        });
    };
    render() {
        return (
            <form className="form" id="imObjectForm_3" method="post" onSubmit={this.submitHandler}>
                <div className="form-row">
                    <label htmlFor="field-name">Imię i Nazwisko</label>
                    <input type="text" name="imObjectForm_3_1" required
                           pattern="[a-zA-ZąĄććęęłŁńŃóÓśŚżŻŹŹ ]+" onInput={this.inputHandler1}/>
                </div>
                <div className="form-row">
                    <label htmlFor="field-email">Email</label>
                    <input type="email" name="imObjectForm_3_2" required
                           pattern="[^@\s]+@[^@\s]+\.[^@\s]+" onInput={this.inputHandler2}/>
                </div>
                <div className="form-row">
                    <label htmlFor="field-name">Temat</label>
                    <input type="text" name="imObjectForm_3_3" required
                           pattern="[a-zA-ZąĄććęęłŁńŃóÓśŚżŻŹŹ ]+" onInput={this.inputHandler3}/>
                </div>
                <div className="form-row">
                    <label htmlFor="field-message">Wiadomość</label>
                    <textarea name="imObjectForm_3_4" required
                              pattern=".+" onInput={this.inputHandler4}/>
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