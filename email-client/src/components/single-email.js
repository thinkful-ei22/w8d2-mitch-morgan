import React from 'react';
import {connect} from 'react-redux';
import './single-email.css';

export function SingleEmail(props) {
    //return <p>GOT IT TO RENDER</p>
    return (
        <div className="single-email">
            <div className="single-email-headers">
                <h2 className="single-email-title">{props.title}</h2>
                <div className="single-email-from"><strong>From: </strong>{props.from}</div>
                <div className="single-email-to"><strong>To: </strong>{props.to}</div>
            </div>
            <div className="single-email-content">
                {props.content}
            </div>
        </div>
    );
}

const mapStateToProps = (state, props) => {
  const folderId = props.match.params.folderId;
  const emailId = props.match.params.emailId;
  const email = state[folderId].emails[emailId];
  console.log('EMAIL',email);
  return Object.assign({}, email, {folderId, emailId});
  // return {
  //   title: email.title,
  //   from: email.from,
  //   to: email.to
  // };
}
//state[props.folderId].emails[props.emailId];

export default connect(mapStateToProps)(SingleEmail);
