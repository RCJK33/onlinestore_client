import axios from "axios";

class DataService{
    serverURL = 'http://127.0.0.1:5000';

    async getProducts() {
        const request = await axios.get(this.serverURL + '/api/products');
        return request.data;
    }

    async postProduct(product) {
        const request = await axios.post(this.serverURL + '/api/products', product);
        return request.data;
    }
    
    async deleteProduct(_id) {
        const request = await axios.delete(this.serverURL + '/api/products/'+ _id);
        return request.data;
    }
    
    async getCategories() {
        const request = await axios.get(this.serverURL + '/api/categories');
        return request.data;
    }
    
    async postCoupon(coupon) {
        const request = await axios.post(this.serverURL + '/api/coupons', coupon);
        return request.data;
    }
    
    async getCoupons() {
        const request = await axios.get(this.serverURL + '/api/coupons');
        return request.data;
    }
    
    async getCouponByCode(code) {
        try {
            const request = await axios.get(this.serverURL + '/api/coupons/' + code);
            return request.data;
        } catch (error) {
            console.log(error.response);
            return null;
        }
    }
    
    async deleteCoupon(_id) {
        const request = await axios.delete(this.serverURL + '/api/coupons/' + _id);
        return request.data;
    }
}

export default DataService;