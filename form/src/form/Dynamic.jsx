import React, { useState } from 'react';

const Dynamic = () => {
    const [input, setInput] = useState([
        { name: '', phone: '' }
    ]);

    const addform = () => {
        setInput([...input, { name: '', phone: '' }]);
    };

    const handleadd = (index, e) => {
        const { name, value } = e.target;
        const updatedInputs = [...input];
        updatedInputs[index][name] = value;
        setInput(updatedInputs);
    };

    const handleDelete = (index) => {
        const updatedInputs = input.filter((_, currentIndex) => currentIndex !== index);
        setInput(updatedInputs);
    };

    const submitform = (e) => {
        e.preventDefault();
        console.log("Submitted data:", input);
        alert("Form submitted! Check console.");
    };

    return (
        <div align="center">
            <h2>Add Form</h2>
            {input.map((item, index) => (
                <form key={index} onSubmit={submitform}>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={item.name}
                        onChange={(e) => handleadd(index, e)}
                    />
                    <br /><br />
                    Phone:
                    <input
                        type="text"
                        name="phone"
                        value={item.phone}
                        onChange={(e) => handleadd(index, e)}
                    />
                    <br /><br />
                    {index !== 0 && (
                        <button
                            type="button"
                            className="delete-btn"
                            onClick={() => handleDelete(index)}>
                            Remove
                        </button>
                    )}
                    <hr />
                </form>
            ))}
            <input type="button" onClick={addform} value="Add" />
            <input type="button" onClick={submitform} value="Submit" />
        </div>
    );
};

export default Dynamic;
