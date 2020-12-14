import axios from 'axios';

export const getPageData = () => {
  const request = axios.request({
    method: 'get',
    url: "https://voda-react-assessment.herokuapp.com/page",
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(resp => {
    return resp.data
  })
  return request;
}