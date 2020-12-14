import axios from 'axios';

export const getMenuElements = () => {
  const request = axios.request({
    method: 'get',
    url: "https://voda-react-assessment.herokuapp.com/menu",
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(resp => {
    return resp.data
  })
  return request;
}