import { TextField } from "@mui/material";
import classes from "./Crud.module.css";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../cta-button/Cta-button";

const Crud = () => {
	const [fields, setFields] = useState([{ id: uuidv4(), name: "", surname: ""  }]);

	const addField = () => {
		setFields([...fields, { id: uuidv4(), name: "", surname: ""  }]);
	};

	const removeField = (id) => {
		setFields(fields.filter((field) => field.id !== id));
	};

	const handleSubmit = () => {
		console.log(fields);
	};

	const handleChange = (event, id, key) => {
		const updatedFields = fields.map((field) =>
			field.id === id ? { ...field, [key]: event.target.value } : field
		);
		setFields(updatedFields);
	};

	return (
		<div className={classes.container}>
           <Button label="Show List" size='medium' styleType="danger"></Button>
			{fields.map((field, index) => (
				<div key={field.id} className={classes.fields}>
					<TextField
						sx={{ width: "450px" }}
						id={`outlined-basic-name-${field.id}`}
						label="Name"
						variant="outlined"
						onChange={(event) => handleChange(event, field.id, "name")}
					/>
					<TextField
						sx={{ width: "450px", marginLeft: "5px" }}
						id={`outlined-basic-surname-${field.id}`}
						label="Surname"
						variant="outlined"
						onChange={(event) => handleChange(event, field.id, "surname")}
					/>
					{index === fields.length - 1 && (
						<div className={classes.addBtn} onClick={addField}>
							<AddIcon />
						</div>
					)}
					{index !== fields.length - 1 && (
						<div
							onClick={() => removeField(field.id)}
							className={classes.removeBtn}
						>
							<CloseIcon />
						</div>
					)}
				</div>
			))}
			 <Button onClick={handleSubmit} label="Submit" size='small' styleType="danger"></Button>
		</div>
	);
};

export default Crud;