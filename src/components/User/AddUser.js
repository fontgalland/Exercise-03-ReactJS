import Card from "../UI/Card/card";
import classes from './AddUser.module.css'
import Button from "../UI/Button/button";
import { useState } from "react";
import Modal from "../UI/Modal/modal";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();


    const onAddUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return
        };
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age (> 0).'
            })
            return
        };
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <Modal title={error?.title} message={error?.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={onAddUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input onChange={usernameChangeHandler} value={enteredUsername} type='text' id='username'></input>
                    <label htmlFor="age">Age (years)</label>
                    <input onChange={ageChangeHandler} value={enteredAge} type='number' id='age'></input>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;