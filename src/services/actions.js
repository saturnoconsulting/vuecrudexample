import axios from "axios";

export default{
    async removeRow({state},item) {
        await axios.delete(`/posts/${item.id}`)
            .then(() => {
                state.posts = state.posts.filter((el) => el.id !== item.id)
            })
            .catch((err) => {
                console.log(err);
            });
    }/*,
    async addRow({state},item){

    }*/
}