import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <>
      <div className="container">
        <div className="formContainer">
          <div className="heading">Create New Post</div>
          <form>
            <div className="titleInputContainer input-cont">
              <div className="courseTitle">Course Title</div>
              <input type="text" placeholder="Title" />
            </div>
            <div className="descriptionInputContainer input-cont">
              <div className="courseDescription">Course Description</div>
              <input type="text" placeholder="Description..." />
            </div>
            <div className="insertLinkContainer input-cont">
              <div className="courseDescription">Insert Link</div>
              <input type="link" placeholder="wwww.johndoe.com" />
            </div>
            <div className="uploadContainer input-cont">
              <div for="img">Select image:</div>
              <input type="file" id="img" name="img" accept="image/*" />
            </div>
            <div className="submitButton" type="submit">Create</div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
