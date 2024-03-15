import axios from "axios";

export default{
    // resource will not be really updated on the server but it will be faked as if.
    async removeRow({state},item) {
        await axios.delete(`/posts/${item.id}`)
            .then(() => {
                state.posts = state.posts.filter((el) => el.id !== item.id)
            })
            .catch((err) => {
                console.log(err);
            });
    },
    // resource will not be really updated on the server but it will be faked as if.
    async addRow({state}, item){
        let itemToJSON = JSON.stringify(item)
        await axios.post('/posts/', {itemToJSON})
            .then(() => {
                state.posts.push(item);
            })
            .catch((err) => {
                console.log(err);
            });
    },
    async editRow({state}, item){
        let itemToJSON = JSON.stringify(item);
        await axios.put('/posts/'+item.id, itemToJSON)
            .then(() => {
                state.posts.push(item);
            })
            .catch((err) => {
                console.log(err);
            });
    }
}