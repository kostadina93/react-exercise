import axios from 'axios';

export const getHomeSections = () => {
  const request = axios.request({
    method: 'get',
    url: "https://voda-react-assessment.herokuapp.com/home",
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(resp => {
    return resp.data
  })
  return request;
}