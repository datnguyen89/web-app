import { observable, action } from 'mobx'
import { FirebaseRequest } from '../requests/FirebaseRequest'

class FirebaseStore {
  @observable fcmToken = localStorage.getItem('fcmToken')
  @observable infoFirebase = null
  @action getInfoFirebase = (token) => {
    return new Promise((resolve, reject) => {
      debugger
      FirebaseRequest.getInfoFirebase(token)
        .then(res => {
          resolve(res)
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  }
}

export default new FirebaseStore()