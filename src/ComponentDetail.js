import React from "react";

const ComponentDetail = (props) => {
  return (
    <div className="ui comments">
    <div className="comment">
      <div className="avatar">
        <img src={props.avata} alt={props.author} />
      </div>
      <div className="content">
        <div className="author">{props.author}</div>
        <div className="metadata">
          <span className="date">{props.time}</span>
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
    </div>
  );
};
export default ComponentDetail;
