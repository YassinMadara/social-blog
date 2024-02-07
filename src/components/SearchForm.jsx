import { useEffect, useRef, useState } from "react";
import { Form } from "react-router-dom";

export default function SearchForm({ query, users, userId, userOptionSearch }) {
  // const [inqry, setInqry] = useState("");

  const queryRef = useRef();
  const userIdRef = useRef();

  useEffect(() => {
    queryRef.current.value = query || "";
  }, [query]);

  userOptionSearch &&
    useEffect(() => {
      userIdRef.current.value = userId || "";
    }, [userId]);

  return (
    <Form className="form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="query"> Search</label>
          <input
            type="search"
            name="query"
            id="query"
            defaultValue={queryRef}
            ref={queryRef}
            // value={inqry}
            // onChange={(e) => {
            //   setInqry(e.target.value);
            // }}
          ></input>
        </div>
        {userOptionSearch && (
          <div className="form-group">
            <label htmlFor="userId">Author</label>
            <select name="userId" id="userId" ref={userIdRef}>
              <option value="">Any</option>
              {users.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name}
                </option>
              ))}
            </select>
          </div>
        )}
        <button className="btn">Search</button>
      </div>
    </Form>
  );
}
