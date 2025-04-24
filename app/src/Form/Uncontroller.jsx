import { useRef } from "react"

const Uncontroller = () => {
    const firstName = useRef("")
    const lastName = useRef("")
    const age = useRef("")

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(firstName.current.value); 
        console.log(lastName.current.value);
        console.log(age.current.value);
        console.log("Form submitted");
    }
    return (
        <>
            <div align='center'>
                <h1>Form</h1>
                <form onSubmit={handleSubmit}>
                    <table border={1}>
                        <tbody>
                            <tr>
                                <td><label>First Name:</label></td>
                                <td><input type="text" name="firstName" ref={firstName} /></td>
                            </tr>
                            <tr>
                                <td><label>Last Name:</label></td>
                                <td><input type="text" name="lastName" ref={lastName} /></td>
                            </tr>
                            <tr>
                                <td><label>Age:</label></td>
                                <td><input type="number" name="age" ref={age} /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><input type="submit" value="Submit" /></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    )
}

export default Uncontroller