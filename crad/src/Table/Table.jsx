import React from 'react'

const Localstorage = () => {
    const [record, setRecord] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : []);
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        courses: [],
        city: ""
    });

    const changeInput = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            if (checked) {
                setInput({
                    ...input,
                    courses: [...input.courses, value]
                });
            } else {
                setInput({
                    ...input,
                    courses: input.courses.filter(course => course !== value)
                });
            }
        } else {
            setInput({
                ...input,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = [...record, input];
        setRecord(newRecord);
        localStorage.setItem('user', JSON.stringify(newRecord));
        setInput({
            name: "",
            email: "",
            password: "",
            gender: "",
            courses: [],
            city: ""
        });
    };

    const handleDelete = (index) => {
        const updated = record.filter((val, i) => i !== index);
        setRecord(updated);
        localStorage.setItem('user', JSON.stringify(updated));
    };

    const handleEdit = (index) => {
        const itemToEdit = record.find((val, i) => i === index);
        setInput(itemToEdit);
    };

    return (
        <div align="center">
            <Form
                setRecord={setRecord}
                record={record}
                changeInput={changeInput}
                handleSubmit={handleSubmit}
                input={input} />
            <br></br>
            <View
                record={record}
                handleDelete={handleDelete}
                handleEdit={handleEdit} />
        </div>
    );
};

export default Localstorage;
