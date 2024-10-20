import _ from "lodash";
import axios from "axios";


let limitIncreaser = 0;
export const ProductService = {
	async getAll(offset = 0, limit = 10) {
		const response = await axios.get(`https://
			api.slingacademy.com/v1/sample-data/products?offset=${offset}&limit=${limit + limitIncreaser}`) 
		
		const { products: productsData } = response.data;
		return productsData
				.map(productObj => (
					_.mapKeys(productObj, (value, key) => _.camelCase(key))
			))
	},

	async getById(id) {
		const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/products/${id}`)
		
		const { product: productData } = response.data;
		return _.mapKeys(productData, (value, key) => _.camelCase(key))
	},

	async create(data) {
		limitIncreaser += 1;
		return data && true;
	}
}
