import React, { useEffect, useState } from "react";
import api from "../../services";
import { useStoreActions, useStoreState } from "easy-peasy";



const Feed = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const token: any = localStorage.getItem("auth");
  const {addPost, setPosts} = useStoreActions((action: any) => ({addPost: action.Posts.addPost, setPosts: action.Posts.setPosts}))
  const Posts = useStoreState(state => state.Posts.Posts)

  useEffect(() => {
    api
      .get("api/posts/list-posts/", {
        headers: { Authorization: `Token ${JSON.parse(token).token}` },
      })
      .then((resp) => {
        setPosts(resp.data)
      });
  }, []);

  const handleChange = (e: any, TexCont: boolean) => {
    e.preventDefault();
    TexCont ? setTitle(e.target.value) : setContent(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    api
      .post("api/posts/create-posts/", { title: title, content: content }, {headers: {Authorization: `Token ${JSON.parse(token).token}` }})
      .then((resp) => {
        if (resp.data) {
          addPost(resp.data);
          setTitle('')
          setContent('')
        } 
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">

      <form onSubmit={handleSubmit} >
        <input type={"text"} value={title} onChange={(e) => handleChange(e, true)} />
        <input type={"text"} value={content} onChange={(e) => handleChange(e, false)} />
        <input type={"submit"} value={"Post"} />
      </form>

      {Posts.map((item: any) => (
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

export default Feed;
