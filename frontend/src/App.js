import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [csvFile, setCsvFile] = useState();
  const onSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios({
      method: "POST",
      url: "http://localhost:5000/api/coinRecords",
      data: csvFile,
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(data);
  };
  return (
    <div className="App">
      <h1>Hi this is the app</h1>
      <Form onSubmit={onSubmit}>
        <input
          type="file"
          id="csv-upload"
          onChange={(e) => {
            setCsvFile(e.target.files[0]);
          }}
        ></input>
        <Button type="submit" color="success">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
