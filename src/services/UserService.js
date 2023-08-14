// import axios from "./customize_axios";

// const getUser = () => {
//   return axios.get("/api/users?page=1");
// };
// const getArticlesApi = () => {
//   axios.get("/api/articles?limit=20&offset=0")
// }
// // const loginApi = (email, password) => {
// //   return axios
// //     .post("/api/users/login", { user: { email, password } })
// //     .then((res) => {
// //       return res;
// //     })
// //     .catch((err) => {
// //       console.log("err", err);
// //       return err.response;
// //     });
// // };
// // const signupApi = ( email, password,username) => {
// //   return axios
// //     .post("/api/users", { "user": { email, password, username } })
// //     .then((res) => {
// //       return res;
// //     })
// //     .catch((err) => {
// //       console.log("err", err);
// //       return err.response;
// //     });
// // };
// // const deleteUserApi = (id) => {
// //   return axios.delete(`/api/users/${id}`);
// // };
// // const getImageApi = () => {
// //   return axios.get("/api/users?delay=5");
// // };
// // const getArticlesApi = () => {
// //   return axios.get("/api/articles?limit=20&offset=0")
// // }
// // const getDetailsUserApi=() =>{
// //   return axios.get("/api/user",{
// //     headers :{
// //       "accept": "application/json",
// //       "Authorization": "Bearer " + localStorage.getItem("token")
// //     }
// //   })
// //   .then((res) => {
// //     return res;
// //   })
// //   .catch((err) => {
// //     return err.response;
// //   });
// // }
// // const updateUserApi = (username,email,bio,image)=>{
// //   return axios.put("/api/user",
// //   {
// //     "user":{ username,email,bio,image}
// //   },
// //   {
// //     headers :{
// //       "accept": "application/json",
// //       "Authorization": "Bearer " + localStorage.getItem("token")
// //     }
// //   })
// //   .then((res) => {
// //     return res;
// //   })
// //   .catch((err) => {
// //     return err.response;
// //   });
// // }
// // const postArticlesApi = (title,description,body,tagList)=>{
// //   return axios.post("/api/articles",
// //   {
// //     "article":{ title,description,body,"tagList":[tagList]}
// //   },
// //   {
// //     headers :{
// //       "accept": "application/json",
// //       "Authorization": "Bearer " + localStorage.getItem("token")
// //     }
// //   })
// //   .then((res) => {
// //     return res;
// //   })
// //   .catch((err) => {
// //     return err.response;
// //   });
// // }
// // const getCommentsApi = (slug)=>{
// //   return axios.get(`/api/articles/${slug}/comments`)
// //   .then((res) => {
// //     return res;
// //   })
// //   .catch((err) => {
// //     return err.response;
// //   });
// // }
// // const postLikeApi = (slug)=>{
// //   return axios.post(`/api/articles/${slug}/favorite`,{
// //     headers :{
// //       "accept": "application/json",
// //       "Authorization": "Bearer " + localStorage.getItem("token")
// //     }
// //   })
// //   .then((res) => {
// //     return res;
// //   })
// //   .catch((err) => {
// //     return err.response;
// //   });
// // }
// // const deleteLikeApi = (slug)=>{
// //   return axios.delete(`/api/articles/${slug}/favorite`,{
// //     headers :{
// //       "accept": "application/json",
// //       "Authorization": "Bearer " + localStorage.getItem("token")
// //     }
// //   })
// //   .then((res) => {
// //     return res;
// //   })
// //   .catch((err) => {
// //     return err.response;
// //   });
// // }
// // const PostCommentApi = (slug,body)=>{
// //   return axios.post(`/api/articles/${slug}/comments`,{
// //     "comment":{body}
// //   },{
// //     headers :{
// //       "accept": "application/json",
// //       "Authorization": "Bearer " + localStorage.getItem("token")
// //     }
// //   })
// //   .then((res) => {
// //     return res;
// //   })
// //   .catch((err) => {
// //     return err.response;
// //   });
// // }
// export { getUser, loginApi, deleteUserApi, getImageApi, 
//   signupApi,getArticlesApi,getDetailsUserApi, updateUserApi,
//   postArticlesApi, getCommentsApi,postLikeApi,deleteLikeApi,PostCommentApi};
