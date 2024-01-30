import { useEffect, useRef, useState } from "react";
import { Form } from "react-router-dom";

export default function SearchForm({ query, queryInput, setQueryInput }) {
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
            // value={queryInput}
            // defaultValue={query}
            // onChange={(e) => {
            //   setQueryInput(e.target.value);
            // }}
            ref={queryRef}
          ></input>
        </div>
        <button className="btn">Search</button>
      </div>
    </Form>
  );
}
