// write your custom hook here to control your checkout form
import { useState } from "react";

// I used a callback parameter for each submit button on every form this hook is used on.
export const useForm = (initialValue, cb) => {
	const [values, setValues] = useState(initialValue);

	const handleChanges = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		cb();
	};

	return [values, handleChanges, handleSubmit];
};
