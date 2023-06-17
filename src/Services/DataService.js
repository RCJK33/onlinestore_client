import axios from "axios";

class DataService{
    serverURL = 'http://127.0.0.1:5000';

    async getProducts() {
        const request = await axios.get(this.serverURL + '/api/products');
        return request.data;
    }

    async postProduct(product) {
        console.log(product);
        const request = await axios.post(this.serverURL + '/api/products', product);
        return request.data;
    }
    
    async getCategories() {
        const request = await axios.get(this.serverURL + '/api/categories');
        return request.data;
    }
    
    async getCoupons() {
        const request = await axios.get(this.serverURL + '/api/coupons');
        return request.data;
    }
}

export default DataService;