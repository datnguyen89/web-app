import { action, autorun, computed, observable } from 'mobx'
import { AccountRequest } from '../requests/accountRequest'
import utils from '../utils'

class AccountStore {
  /** Current User */
  @observable profile = null
  /** App token */
  @observable token = localStorage.getItem('jwt')
  @action setToken = token => {
    this.token = token
  }

  /** User action */
  @observable extendData = undefined
  @action setExtendData = (extendData) => {
    this.extendData = extendData
  }
  @observable description = undefined
  @action setDescription = (description) => {
    this.description = description
  }

  @action userRegister = (accountName, fullname, password) => {
    return new Promise((resolve, reject) => {
      AccountRequest.register(accountName, fullname, password)
        .then(res => {
          let decrypted = utils.decryptAES(res?.data?.data)
          return decrypted
        })
        .then(decrypted => {
          resolve(decrypted)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  @action userLogin = (username, password) => {
    return new Promise((resolve, reject) => {
      AccountRequest.userLogin(username, password)
        .then(res => {
          console.log('RESPONSE ENCRYPTED', res.data)
          let decrypted = utils.decryptAES(res?.data?.data)
          return decrypted
        })
        .then(decrypted => {
          resolve(decrypted)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  @action userLogout = () => {
    console.log('logout')
    const itemRemove = [
      'jwt',
      'subcriptionId',
      'deviceRequestKey',
    ]
    itemRemove.forEach(item =>
      localStorage.removeItem(item))
    this.token = null
    this.profile = null
    this.subcriptionId = null
    this.deviceRequestKey = '9f75fc51d915de2cdaf80d64774b28ac'
  }

  @action activeDevice = (extendData, activeCode, publicKey) => {
    return new Promise((resolve, reject) => {
      AccountRequest.activeDevice(extendData, activeCode, publicKey)
        .then(res => {
          let decrypted = utils.decryptAES(res?.data?.data)
          return decrypted
        })
        .then(decrypted => {
          resolve(decrypted)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
  @action activeAccount = (extendData, activeCode, publicKey) => {
    return new Promise((resolve, reject) => {
      AccountRequest.activeAccount(extendData, activeCode, publicKey)
        .then(res => {
          let decrypted = utils.decryptAES(res?.data?.data)
          return decrypted
        })
        .then(decrypted => {
          resolve(decrypted)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
  @observable deviceRequestKey = localStorage.getItem('deviceRequestKey') ? localStorage.getItem('deviceRequestKey') : '9f75fc51d915de2cdaf80d64774b28ac'
  @observable subcriptionId = localStorage.getItem('subcriptionId')
  @observable fcmToken = localStorage.getItem('fcmToken')
  @action getTokenData = (tokenKey) => {
    return new Promise((resolve, reject) => {
      AccountRequest.getTokenData(tokenKey, this.fcmToken)
        .then(res => {
          this.setToken(res?.data?.param?.token)
          this.subcriptionId = res?.data?.param?.subcriptionId
          localStorage.setItem('subcriptionId', res?.data?.param?.subcriptionId)

          this.deviceRequestKey = res?.data?.param?.deviceRequestKey
          localStorage.setItem('deviceRequestKey', res?.data?.param?.deviceRequestKey)

          this.getMyProfile()
          localStorage.setItem('jwt', res?.data?.param?.token)
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
  @observable numberNewNotify = 0
  @action setNumberNewNotify = (number) => {
    this.numberNewNotify = number
  }
  @action getMyProfile = () => {
    return new Promise((resolve, reject) => {
      AccountRequest.getProfile()
        .then(res => {
          this.profile = res?.data?.param
          this.numberNewNotify = res?.data?.param?.numberNewNotify
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
  @action logout = () => {
    return new Promise((resolve, reject) => {
      AccountRequest.logout()
        .then(res => {
          resolve(res)
          this.userLogout()
        })
        .catch(error => {
          reject(error)
        })
    })
  }
  @action changePassword = (oldPassword, newPassword) => {
    return new Promise((resolve, reject) => {
      AccountRequest.changePassword(oldPassword, newPassword)
        .then(res => {
          let decrypted = utils.decryptAES(res?.data?.data)
          return decrypted
        })
        .then(decrypted => {
          resolve(decrypted)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
  @action changeEmail = (data) => {
    return new Promise((resolve, reject) => {
      AccountRequest.changeEmail(data)
        .then(res => {
          let decrypted = utils.decryptAES(res?.data?.data)
          return decrypted
        })
        .then(decrypted => {
          resolve(decrypted)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
  @action confirmChangeEmail = (data) => {
    return new Promise((resolve, reject) => {
      AccountRequest.confirmChangeEmail(data)
        .then(res => {
          let decrypted = utils.decryptAES(res?.data?.data)
          return decrypted
        })
        .then(decrypted => {
          resolve(decrypted)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
  @action sendVerifyEmail = (data) => {
    return new Promise((resolve, reject) => {
      AccountRequest.sendVerifyEmail(data)
        .then(res => {
          let decrypted = utils.decryptAES(res?.data?.data)
          return decrypted
        })
        .then(decrypted => {
          resolve(decrypted)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
  @action confirmSendVerifyEmail = (data) => {
    return new Promise((resolve, reject) => {
      AccountRequest.confirmSendVerifyEmail(data)
        .then(res => {
          let decrypted = utils.decryptAES(res?.data?.data)
          return decrypted
        })
        .then(decrypted => {
          resolve(decrypted)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  @action resetPassword = (data) => {
    return new Promise((resolve, reject) => {
      AccountRequest.resetPassword(data)
        .then(res => {
          let decrypted = utils.decryptAES(res?.data?.data)
          return decrypted
        })
        .then(decrypted => {
          resolve(decrypted)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  @action checkUser = (accountName) => {
    return new Promise((resolve, reject) => {
      AccountRequest.checkUser(accountName)
        .then(res => {
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
  @observable ListNotify = []
  @observable NotifyPageIndex = 1
  @observable NotifyPageSize = 5
  @observable ListNotifyTotalItem = 0
  @action setNotifyPageIndex = (page) => {
    this.NotifyPageIndex = page
  }
  @action setNotifyPageSize = (size) => {
    this.NotifyPageSize = size
  }
  @action getNotifyAccount = (param) => {
    return new Promise((resolve, reject) => {
      AccountRequest.getNotifyAccount(param)
        .then(res => {
          this.ListNotify = res?.data?.param
          this.ListNotifyTotalItem = res?.data?.extendData
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
  @action readNotify = (data) => {
    return new Promise((resolve, reject) => {
      AccountRequest.readNotify(data)
        .then(res => {
          let decrypted = utils.decryptAES(res?.data?.data)
          return decrypted
        })
        .then(decrypted => {
          resolve(decrypted)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  @action uploadAvatar = (data) => {
    return new Promise((resolve, reject) => {
      AccountRequest.uploadAvatar(data)
        .then(res => {
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
  @action ekyc = (data) => {
    return new Promise((resolve, reject) => {
      AccountRequest.ekyc(data)
        .then(res => {
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
  @action confirmEkyc = (data) => {
    return new Promise((resolve, reject) => {
      AccountRequest.confirmEkyc(data)
        .then(res => {
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

}

export default new AccountStore()
