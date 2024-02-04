import { useEffect, useRef, useState } from "react";
import { Form } from "react-router-dom";

export default function SearchForm({ query }) {
  // const [inqry, setInqry] = useState("");

  const queryRef = useRef();

  useEffect(() => {
    queryRef.current.value = query;
  }, [query]);
  console.log(query);
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
        <button className="btn">Search</button>
      </div>
    </Form>
  );
}
