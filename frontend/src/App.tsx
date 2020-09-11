import React, { useEffect, useState } from "react";
import api, { csrftoken } from "./services";


const CSRFToken = () => {

    return <input type={"hidden"} name="csrfmiddlewaretoken" value={csrftoken ? csrftoken : ''} />
};

function App() {
  const [data, setData] = useState<any>([]);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  useEffect(() => {
    api.post("api/auth/", {username: "admin4", password: "admin4"}).then(resp => console.log(resp))
    // api.get("posts/api/list-posts/", {data: {token: content}}).then((resp) => {
    //   setData(resp.data);
    //   console.log(resp.data);
    // });
  }, []);

  // const handleChange = (e: any, TexCont: boolean) => {
  //   e.preventDefault();
  //   TexCont ? setTitle(e.target.value) : setContent(e.target.value);
  // };

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   api
  //     .post("api/create-posts/", { data: { title: title, content: content }})
  //     .then((resp) => {
  //       console.log(resp);
  //     })
  //     .catch((err) => console.log(err));
  // };
  return (
    <div className="App">
      {data.map((item: any) => (
        <li key={item.id}>
          {item.title} - {item.content}
        </li>
      ))}
      {/* <form onSubmit={handleSubmit}>
        <CSRFToken />
        <input
          type={"text"}
          value={title}
          onChange={(e) => handleChange(e, true)}
          placeholder={"title"}
        />
        <input
          type={"text"}
          value={content}
          onChange={(e) => handleChange(e, false)}
          placeholder={"content"}
        />
        <input type={"submit"} value={"Send"} />
      </form> */}
    </div>
  );
}

export default App;
