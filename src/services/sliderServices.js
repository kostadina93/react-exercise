import axios from 'axios';

export const getSliderImages = () => {
  const request = axios.request({
    method: 'get',
    url: "https://voda-react-assessment.herokuapp.com/slider",
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(resp => {
    return resp.data
  })
  return request;
}