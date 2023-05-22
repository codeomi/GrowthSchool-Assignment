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
              <input type="text" />
            </div>
            <div className="descriptionInputContainer input-cont">
              <div className="courseDescription">Course Description</div>
              <input type="text" />
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
