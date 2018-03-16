import axios from 'axios';
export const utilFetchSingleWeight = id => (
  axios({
    method: 'get',
    url: `/api/weights/${id}`,
  })
);

export const utilFetchAllWeights = () => (
  axios({
    method: 'get',
    url: `/api/weights`,
  })
);

export const utilSearchWeights = query => (
  axios({
    method: 'GET',
    url: '/api/weights?query=${query}',
  })
);

export const utilCreateWeight = weight => (
  axios({
    method: 'POST',
    url: '/api/weights',
    data: { weight }
  })
);

export const utilUpdateWeight = weight => (
  axios({
    method: 'PATCH',
    url: `/api/weights/${weight.id}`,
    data: { weight }
  })
)

export const utilDeleteWeight = weight => {
  return(
  axios({
    method: 'DELETE',
    url: `/api/weights/${weight.id}`
  })
)}
