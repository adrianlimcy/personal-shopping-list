import React from 'react';
import styled from 'styled-components';
import SubHeader from '../components/Header/SubHeader';
import ListItem from '../components/ListItem/ListItem';

const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const Alert = styled.span`
  width: 100%;
  text-align: center;
`;

const List = ({ items, loading, error, list, getListRequest, getItemsRequest, match, history }) => {
     
  React.useEffect(()=> {

    if (!list.id) {
      getListRequest(match.params.id)
    }

    if (!items.length) {
      getItemsRequest(match.params.id)
    }
  }, [items, list, match.params.id, getItemsRequest, getListRequest])


  return !loading && !error ? (
    <>
      {history && list && (
        <SubHeader
          goBack={() => history.goBack()}
          openForm={() => history.push(`${match.url}/new`)}
        />
      )}
      <ListItemWrapper>
        {items && items.map(item => <ListItem key={item.id} data={item} />)}
      </ListItemWrapper>
    </>
  ) : (
    <Alert>{loading ? 'Loading...' : error}</Alert>
  );
};

export default List
