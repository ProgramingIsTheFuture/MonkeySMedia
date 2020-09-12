import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/",
});

export default api;

// api
// .post(
//   "api/posts/create-posts/",
//   { title: "abcccctypescript", content: "conteudo:p" },
//   { headers: { Authorization: `Token ${token2.token}` } }
// )
// .then((resp) => console.log(resp));


// const history = useHistory();//do react-router-dom
// history.push({
//   pathname: '/sua-url',
//   search: history.location.search,
//   state: {
//     seustate: valor-do-state,
//   },
// });