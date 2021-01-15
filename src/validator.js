/** Use only with Antd Form */
/** Currently validator will no longer working if using regex from outside 'validator' object */
import utils from './utils'

const validator = {

  validateCurrencyFormat: (rule, value, callback) => {
    const regex = /^[a-zA-Z]{3}/g
    if (value === '') {
      callback(`Cần nhập giá trị`)
    } else if (!regex.test(value)) {
      callback(`Định dạng tiền tệ không đúng. VD: 'USD', 'EUR'`)
    }
  },

  validatorSelectUser: (rule, value, callback) => {
    if (value && !value.value.includes('USR')) {
      callback('Vui lòng lựa chọn cá nhân xử lý!')
    } else {
      callback()
    }
  },

  validateInputString: (rule, value, callback) => {
    const regex = /[!@#$%^*?"{}|<>]/g
    if (value && value.trim() === '') {
      callback(`Cần nhập ký tự, vui lòng không bỏ trống`)
    } else if (regex.test(value)) {
      callback(`Vui lòng không nhập các ký tự đặc biệt như: ! @ # $ % ^ * ? " { } | < >`)
    } else {
      callback()
    }
  },

  validateDocumentCode: (rule, value, callback) => {
    const input = utils.removeVietnameseCharMark(value)
    const regex = /^[a-zA-Z0-9._]+$/g
    if (input && !regex.test(input)) {
      callback(`Mã văn bản chỉ được phép nhập chữ, số, dấu chấm & gạch dưới. VD: VIMC.QTTB.CNTT01_1`)
    } else {
      callback()
    }
  },

  validateWebsite: (rule, value, callback) => {
    const regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm
    if (value && !regex.test(value)) {
      callback('Sai định dạng website!')
    } else {
      callback()
    }
  },

  validateEmail: (rule, value, callback) => {
    const regex = /^[A-Za-z][A-Za-z0-9-_\.]{1,32}(\+?[0-9]){0,5}@[A-Za-z0-9_-]{2,}(\.[A-Za-z0-9]{2,4}){1,2}$/gm
    if (value && !regex.test(value)) {
      callback('Sai định dạng email!')
    } else {
      callback()
    }
  },

  validateIntergerNumber: (rule, value, callback) => {
    if (value && !Number.isInteger(value)) {
      callback('Không phải số nguyên')
    } else if (value && value < 0) {
      callback('Không được phép nhập số âm')
    } else {
      callback()
    }
  },

  validateNumber: (rule, value, callback) => {
    const regex = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/g
    if (value && value.trim() === '') {
      callback('Cần nhập số')
    } else if (isNaN(value) && value !== '' && value !== undefined) {
      callback(`Không phải số`)
    } else if (value !== '' && value !== undefined && regex.test(value) === false) {
      callback(`Sai định dạng số. Bỏ số 0 ở đầu, dấu cách hoặc các ký tự đặc biệt`)
    } else if (value < 0) {
      callback(`Cần nhập số lớn hơn 0`)
    } else {
      callback()
    }
  },

  validateUsername: (rule, value, callback) => {
    const regex = /^(?=[a-zA-Z0-9._]{4,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/g
    if (value && !regex.test(value)) {
      callback('Tên đăng nhập không đúng định dạng!')
    } else {
      callback()
    }
  },

  validatePhoneNumber: (rule, value, callback) => {
    // const regex = /0[0-9]{9,11}/g
    const regex = /((01|09|03|07|08|05|\+84|84)+([0-9]{8,9})\b)/g
    if (value && (!regex.test(value) || value.length > 13)) {
      callback('Sai định dạng số điện thoại!')
    } else {
      callback()
    }
  },

}

export default validator