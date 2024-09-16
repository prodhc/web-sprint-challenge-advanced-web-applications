import { axiosWithAuth } from '../helpers/axiosWithAuth';


const fetchColors = () => {
	// let newList = [];
	return axiosWithAuth()
		.get('http://localhost:5000/api/colors')
		.then(res => {
			// console.log('res.data: ', res.data);
			// newList = res.data;
			// return newList;
			return res.data;
		})
		.catch(err => {
			console.log(err);
		});
};

export default fetchColors;