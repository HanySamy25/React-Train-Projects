import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import Table from "./Table";
import styleCss from '../Groceries/Groceries.module.css';

const UsersPosts = () => {
  const style = {
    backgroundColor: "lightgreen",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "10px",
  };
  const API_URL = "https://jsonplaceholder.typicode.com";
  const [reqType, setReqType] = useState("users");
  const [data, setData] = useState([]);
  const [foundError, setfoundError] = useState(false);
  const [view, setView] = useState("list");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/${reqType}`);
        if (!response.ok) throw Error("No Data");
        const result = await response.json();
        setfoundError(false);
        setData(result);
      } catch (error) {
        setfoundError(error.message);
        // console.log(error);
        // console.log('errorssssssss');
      }
    };

    fetchData();
  }, [reqType]);

  // const handelClick = async (type) => {
  //   console.log(type);
  //   setReqType(type);
  //   const response =await fetch(`${API_URL}/${type}`);
  //   const result= await response.json();
  //   setData(result);
  //   console.log(result);
  // };

  const toggleView = (type) => {
    setView(type);
  };

  return (
    <form style={style} onSubmit={(e) => e.preventDefault()}>
      <div className={styleCss.view}>
       <label htmlFor="viewList">
        <input type="radio" name="view" id="viewList" defaultChecked onChange={() => toggleView("list")} /> List</label>
        <label htmlFor="viewTable"><input type="radio" name="view" id="viewTable" onChange={() => toggleView("table")} /> Table</label>
      </div>

      <Buttons btnText="users" reqType={reqType} setReqType={setReqType} />
      <Buttons btnText="posts" reqType={reqType} setReqType={setReqType} />
      <Buttons btnText="comments" reqType={reqType} setReqType={setReqType} />
      {foundError && <p className={styleCss.errMsg}> {`Error: ${foundError}`}</p>}
      {!foundError && data && (
        <>
          {view==="list" && <ul>
            {data.map((item) => (
              <li key={item.id}>{JSON.stringify(item)}</li>
            ))}
          </ul>}
          {view==="table" && <Table items={data} />}
        </>
      )}
    </form>
  );
};

export default UsersPosts;
