import axios from 'axios'
import accountStore from './stores/accountStore'


var CancelToken = axios.CancelToken
var source = CancelToken.source()

export const Api = {
  post: (url, data) => {
    return (
      axios({
        method: 'post',
        url: url,
        headers: {
          'Content-Type': 'application/json',
          ...(accountStore.token && { 'Authorization': `Bearer ${accountStore.token}` }),
        },
        ...(data && { data: data }),
        cancelToken: source.token,
      })
    )
  },
  get: (url, params) => {
    return (
      axios({
        method: 'get',
        url: url,
        headers: {
          'Content-Type': 'application/json',
          ...(accountStore.token && { 'Authorization': `Bearer ${accountStore.token}` }),
        },
        ...(params && { params: params }),
      })
    )
  },
}