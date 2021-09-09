import React, {useState} from 'react';

function ContactForm(){
    const [formState, setFormState] = useState({name:"", email:"", message:""});
    const {name, email, message} = formState;

    function handleChange(e){
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    
    console.log(formState);

    function handleSubmit(e){
        e.preventDefault();
        console.log(formState);

    }
    return(
        <section>
            <h1>Contact Me</h1>
            <form id = "contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name"></label>
                    <input type="text" name="name" defaultValue={name} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email"></label>
                    <input type="email" name="email" defaultValue={email} onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="message"></label>
                    <textarea name ="" rows="5" defaultValue={message} onChange={handleChange}></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;