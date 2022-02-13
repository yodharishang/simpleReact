import {INCREMENT,DECREMENT} from '../types/counter';

export const increment = () => ({
	type:INCREMENT
});

export const decrement = () => ({
	type:DECREMENT
});

export const someAction =(data) => ({
	type:INCREMENT,
	payload:data
})