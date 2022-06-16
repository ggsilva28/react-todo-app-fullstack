import axios from "axios";

const URL = "http://localhost:3003/api/todos";

export const changeDescription = (event) => ({
	type: "DESCRIPTION_CHANGE",
	payload: event.target.value
});

export const search = () => {
	return (dispatch, getState) => {
		const description = getState().todo.description;
		const search = description ? `&description__regex=/${description}/` : ''
		axios.get(`${URL}?sort=-createdAt${search}`).then(resp => dispatch({
			type: "TODO_SEARCHED",
			payload: resp.data
		}))
	}
};

export const add = (description) => {
	return (dispatch) => {
		axios
			.post(`${URL}`, { description })
			.then((resp) => dispatch({ type: "TODO_CLEAR" }))
			.then(() => dispatch(search()));
	};
};

export const markAsDone = (todo) => {
	return (dispatch) => {
		axios
            .put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(() => dispatch(search()));
	};
};

export const markAsPending = (todo) => {
	return (dispatch) => {
		axios
            .put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(() => dispatch(search()));
	};
};

export const remove = (todo) => {
	return (dispatch) => {
		axios
            .delete(`${URL}/${todo._id}`)
            .then(() => dispatch(search()));
	};
};

export const clear = () => ([{ type: "TODO_CLEAR" }, search()]);