// @flow
import React from 'react';
import {
  createRefetchContainer,
  graphql,
} from 'react-relay';

const TodoWithComments = props => {
  const { relay, todo: { id, text, status, details } } = props;
  const refetch = e => {
    relay.refetch({
      showDetails: true,
      id,
    });
  };
  return (
    <div className="event-row">
      <span>{text + ' status: ' + status}</span>
      <span><button onClick={refetch} >check details</button></span>
      {details && <span style={{ backgroundColor: 'red', color: 'white' }}> {details}</span>}
    </div>
  );
};


export default createRefetchContainer(TodoWithComments,
  graphql.experimental`fragment TodoWithComments_todo on Todo
      @argumentDefinitions(
          showDetails:{
            type:"Boolean!",
            defaultValue:false
          }
      ){
        id
        text
        status
        details @include(if: $showDetails)
    }`,
  graphql.experimental`
    query TodoWithCommentsBoChenRefetchQuery($id: ID!, $showDetails: Boolean!){
        node(id: $id){
          ... TodoWithComments_todo @arguments(showDetails:$showDetails)
        }
    }`);