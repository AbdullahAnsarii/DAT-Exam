import { FC, useRef, useCallback, FormEvent, useState } from "react";
import styles from "../styles/SignUp.module.scss";

const SignUp: FC = () => {
    const inputName = useRef<HTMLInputElement>(null);
    const inputEmail = useRef<HTMLInputElement>(null);
    const inputPassword = useRef<HTMLInputElement>(null);
    const [postResponse, setPostResponse] = useState({
        type: '',
        message: ''
    });
    const messageType = postResponse.type == "success" ? styles.successMsg : styles.errorMsg;
    const handlePostResponse = (message: string, type: string) => {
        setPostResponse({
            type: type,
            message: message
        })
        setTimeout(() => {
            setPostResponse({
                type: '',
                message: ''
            })
        }, 3000)
    }
    const handleSubmit = useCallback(
        () => (event: FormEvent<EventTarget>): void => {
            event.preventDefault();
            const data = {
                name: inputName.current?.value,
                email: inputEmail.current?.value,
                password: inputPassword.current?.value,
            };
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };
            fetch('http://54.169.31.224:3000/signup', requestOptions)
                .then(async (response) => {
                    switch (response.status) {
                        case 201 || 200:
                            (response.json()
                                .then(parsedResponse => {
                                    handlePostResponse(parsedResponse.message, 'success');
                                }))
                            break;

                        case 400:
                            (response.json()
                                .then(parsedResponse => {
                                    let errors = "";
                                    parsedResponse.message.forEach((item: any) => {
                                        errors += Object.values(item.constraints);
                                    })
                                    handlePostResponse(errors, 'error');
                                }))
                            break;

                        default:
                            handlePostResponse("Something bad happened, please try again", 'error');
                            break;
                    }
                })
        },
        []
    );
    return (
        <section id="form" className={styles.container}>
            <div>
                <h1>Receive payments quickly from anywhere</h1>
                <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not.
                    Letter of on become he tended active enable to.</p>
            </div>
            <div>
                <p className={styles.redText}>Get Started for Free</p>
                {postResponse.message && <p className={messageType}>{postResponse.message}</p>}
                <form onSubmit={handleSubmit()}>
                    <input ref={inputName} className={styles.inputField} placeholder="Name" type="text" name="name" /><br />
                    <input ref={inputEmail} className={styles.inputField} placeholder="Email Address" type="email" name="email" /><br />
                    <input ref={inputPassword} className={styles.inputField} placeholder="Password" type="password" name="password" /><br />
                    <input className={styles.submitButton} type="submit" value="GET STARTED" />
                </form>
            </div>
        </section>
    )
}

export default SignUp;