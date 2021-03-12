import axios from 'axios'
import { firebaseURL } from '../config'
import firebaseStore from '../stores/FirebaseStore'

export const FirebaseRequest = {
  getInfoFirebase: userCode =>
    axios({
      method: 'get',
      url: `${firebaseURL}/info/${firebaseStore.fcmToken}?details=true`,
      headers: {
        'Authorization': `key AIzaSyBOKJib5S04xqKIVqvLULEFsZ39BvjPRsg`,
        'Content-Type': 'application/json',
      },
    }),

}