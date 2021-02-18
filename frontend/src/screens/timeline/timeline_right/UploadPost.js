import React, { useEffect, useState } from "react";
import FormInput from "../../../components/forms/Form";
import axios from "axios";
import Url from "../../../util/BaseUrl"
function UploadPost(props) {
  console.log(Url.baseUrl)
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const handleDesChange = (e) => {
    setDescription(e.target.value);
  };
  const handleCatChange = (e) => {
    setCategory(e.target.value);
  };
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };
  const submit = (e) => {
    const id = localStorage.getItem("id");
    const username = localStorage.getItem("username");
    e.preventDefault();
    let form = new FormData();
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    form.append("image", image);
    form.append("description", description);
    form.append("category", category);
    form.append("_id", id);
    form.append("username", username);
    form.append("date", date);
    form.append("time", time);

    axios
      .post("http://localhost:3002/upload/post", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        props.handlec();
        props.UploadPostField()
      });
  };
  return (
    <div>
      <form>
        <FormInput
          label="Description"
          name="description"
          type="text"
          placeholder="Enter Description"
          onchange={handleDesChange}
        />
        <FormInput
          label="Category"
          name="category"
          type="text"
          placeholder="Enter Category"
          onchange={handleCatChange}
        />
        <input type="file" name="image" onChange={handleFileChange} />
        <input type="submit" onClick={submit}  />
      </form>
    </div>
  );
}

export default UploadPost;
