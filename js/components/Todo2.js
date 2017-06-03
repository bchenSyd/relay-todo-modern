// @flow
import React from 'react';
import {
  createRefetchContainer,
  graphql,
} from 'react-relay';

const Todo2 = props => {
  console.log(`Todo2 is re-rendering...`)
  const { relay, todo: { id, text, additional, comments } } = props;
  const refetch = e => {
    relay.refetch({
      showComments: true,
      id,
    }, null);
  };
  return (
    <div>
      <span>{text + '--' + additional}</span>
      <span><button onClick={refetch} >view comments</button></span>
      {comments && <span style={{ backgroundColor: 'red', color: 'white' }}> comments:{comments}</span>}
    </div>
  );
};


export default createRefetchContainer(Todo2,
  graphql.experimental`fragment Todo2_todo on Todo
      @argumentDefinitions(
          # this should be an optional argument; not argument with optional value type
          id:{
            type:"ID!",
            defaultValue:""
          },
          showComments:{
            type:"Boolean!",
            defaultValue:false
          }
      ){
        id
        text
        additional
        comments @include(if: $showComments)
    }`,
  graphql.experimental`
    query Todo2CommentsRefetchQuery($id: ID!, $showComments: Boolean!){
        node(id: $id){
          ... Todo2_todo @arguments(id: $id, showComments:$showComments)
        }
    }`);