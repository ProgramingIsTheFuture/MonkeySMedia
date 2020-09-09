import React, { useEffect, useState } from "react";
import api from "./services";

function App() {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    api.get("api/list-posts/").then((resp) => setData(resp.data));
  }, []);
  return (
    <div className="App">
      {data.map((item: any) => (
        <li key={item.id}>
          {item.title} - {item.content}
        </li>
      ))}
    </div>
  );
}

export default App;
