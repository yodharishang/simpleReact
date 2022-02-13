import React, { useState } from "react";
import dataService from "./../Services/apiServices";

const ViewApi = () => {
  // state awal datapi
  const initialDataApi = {
    id: null,
    title: '',
    body: '',
    userId: null
  };
 
  const [dataApi, setDataApi] = useState(initialDataApi);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setDataApi({ ...dataApi, [name]: value });
  };

  const saveDataApi = () => {
    var data = {
      title: dataApi.title,
      body: dataApi.body,
      userId:dataApi.userId
    };

// membuat data baru
    dataService.create(data)
      .then(response => {
        setDataApi({
          title: response.data.title,
          body: response.data.body,
          userId: response.data.userId
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newDataApi = () => {
    setDataApi(initialDataApi);
    setSubmitted(false);
  };
  return (
    // ...
    <div className="">
    <h1 className="bg-black text-white">Tutorial RestApi pakai axios</h1>
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="" onClick={newDataApi}>
            Tambah
          </button>
        </div>
      ) : (
        <div>
          <div className="">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className=""
              id="title"
              required
              value={dataApi.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>
          <div className="">
            <label htmlFor="body">Body</label>
            <input
              type="text"
              className=""
              id="body"
              required
              value={dataApi.body}
              onChange={handleInputChange}
              name="body"
            />
          </div>
          <div className="">
            <label htmlFor="userId">User Id</label>
            <input
              type="text"
              className=""
              id="userId"
              required
              value={dataApi.userId}
              onChange={handleInputChange}
              name="userId"
            />
          </div>
          <button onClick={saveDataApi} className="">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
export default ViewApi;
