
/** App utils */

const utils = {

  /** Add commas for separate thousand in number */
  thousandSeparator: num => {
    let parts = num.toString().split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    return parts.join('.')
  },

  /** Compare time, return -1 for sooner, 0 for equal, 1 for later */
  compareTime: (DateA, DateB) => {
    let a = new Date(DateA)
    let b = new Date(DateB)
    let msDateA = Date.UTC(a.getFullYear(), a.getMonth() + 1, a.getDate())
    let msDateB = Date.UTC(b.getFullYear(), b.getMonth() + 1, b.getDate())
    if (parseFloat(msDateA) < parseFloat(msDateB))
      return -1  // lt
    else if (parseFloat(msDateA) === parseFloat(msDateB))
      return 0  // eq
    else if (parseFloat(msDateA) > parseFloat(msDateB))
      return 1  // gt
    else
      return null // error
  },

  removeVietnameseCharMark: str => {
    if (str) {
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
      str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
      str = str.replace(/đ/g, 'd')
      str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A')
      str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E')
      str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I')
      str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O')
      str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U')
      str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y')
      str = str.replace(/Đ/g, 'D')
      return str
    }
    return str
  },

  /** Decode JWT token */
  jwtDecode: token => {
    let base64Url = token.split('.')[1]
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
    return JSON.parse(jsonPayload)
  },

  /** Filter unique object in array */
  getUnique: (arr, comp) => {
    return arr.map(e => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter((e) => arr[e]).map(e => arr[e])
  },

  /** Get gender name */
  getGenderName: gender => {
    let genderName = ''
    switch (gender) {
      case 0:
        genderName = 'Nữ'
        break
      case 1:
        genderName = 'Nam'
        break
      case 2:
        genderName = 'Khác'
        break
      default:
        genderName = undefined
        break
    }
    return genderName
  },

  /** Render weekday name */
  renderWeekday: day => {
    switch (day) {
      case 1:
        return 'Thứ hai'
      case 2:
        return 'Thứ ba'
      case 3:
        return 'Thứ tư'
      case 4:
        return 'Thứ năm'
      case 5:
        return 'Thứ sáu'
      case 6:
        return 'Thứ bảy'
      default:
        return 'Chủ nhật'
    }
  },

  /** Check nullish */
  isNullish: value => {
    return value === undefined || value === null || value === ''
  },

  /** Capitalize name */
  getNameInCapitalize: string => string.replace(/(^|\s)\S/g, l => l.toUpperCase()),

  /** Get date range between 2 dates
   * Input values should be in string format (YYYY-MM-DD)
   * */
  getDateRange: date => {
    if (typeof date !== 'string') {
      throw new Error('Input date should be a string in format YYYY-MM-DD')
    }
    let d1 = new Date(date)
    let d2 = new Date()
    let diff = d1.getTime() - d2.getTime()
    return diff / (1000 * 3600 * 24)
  },

  /** Return the date range from week number and year
   * For example: Input weekNo = 3, year = 2020 will return 2020-01-13 and 2020-01-19
   * Remember to use moment('YYYY-MM-DD').isoWeekYear()
   * */
  getDateRangeOfWeek: (weekNo, yearNo) => {
    if (!(Number.isInteger(weekNo) && Number.isInteger(yearNo) && weekNo >= 1 && yearNo >= 1970)) return false
    Date.prototype.getWeek = function() {
      let date = new Date(this.getTime())
      date.setHours(0, 0, 0, 0)
      date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7)
      let week1 = new Date(date.getFullYear(), 0, 4)
      return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7)
    }
    let d1, numOfdaysPastSinceLastMonday, month, date
    let rangeIsFrom, rangeIsTo
    d1 = new Date('' + yearNo + '')
    numOfdaysPastSinceLastMonday = d1.getDay() - 1
    d1.setDate(d1.getDate() - numOfdaysPastSinceLastMonday)
    d1.setDate(d1.getDate() + (7 * (weekNo - d1.getWeek())))
    month = d1.getMonth() + 1 < 10 ? `0${d1.getMonth() + 1}` : d1.getMonth() + 1
    date = d1.getDate() < 10 ? `0${d1.getDate()}` : d1.getDate()
    rangeIsFrom = `${d1.getFullYear()}-${month}-${date}`
    d1.setDate(d1.getDate() + 6)
    month = d1.getMonth() + 1 < 10 ? `0${d1.getMonth() + 1}` : d1.getMonth() + 1
    date = d1.getDate() < 10 ? `0${d1.getDate()}` : d1.getDate()
    rangeIsTo = `${d1.getFullYear()}-${month}-${date}`
    return [rangeIsFrom, rangeIsTo]
  },
  renderDocumentCommitteeStatus: statusCode => {
    switch (statusCode) {
      case '00':
        return 'Tạo văn bản mới'
      case '01':
        return 'Đã đến'
      case '02':
        return 'Từ chối tiếp nhận'
      case '03':
        return 'Đã tiếp nhận văn bản'
      case '04':
        return 'Phân công xử lý'
      case '05':
        return 'Đang xử lý'
      case '06':
        return 'Hoàn thành'
      case '13':
        return 'Yêu cầu lấy lại văn bản'
      case '15':
        return 'Đồng ý lấy lại, cập nhật văn bản'
      case '16':
        return 'Từ chối lấy lại, cập nhật văn bản'
      case null:
        return 'Đã gửi'
      case '100':
        return 'Văn bản bị thu hồi'
      case '200':
        return 'Văn bản bị cập nhật'
      case '300':
        return 'Văn bản bị thay thế'
      default:
        return ''
    }
  },
  renderDocumentCommitteeTag: status => {
    const tag = {
      color: '',
      text: '',
    }
    switch (status) {
      case '01':
        tag.color = 'black'
        tag.name = 'Đã đến'
        break
      case '02':
        tag.color = 'red'
        tag.name = 'Từ chối tiếp nhận'
        break
      case '03':
        tag.color = 'purple'
        tag.name = 'Đã tiếp nhận'
        break
      case '04':
        tag.color = 'lime'
        tag.name = 'Phân công'
        break
      case '05':
        tag.color = 'green'
        tag.name = 'Đang xử lý'
        break
      case '06':
        tag.color = 'blue'
        tag.name = 'Hoàn thành'
        break
      case '13':
        tag.color = 'magenta'
        tag.name = 'Lấy lại'
        break
      case '15':
        tag.color = 'volcano'
        tag.name = 'Đồng ý cập nhật / lấy lại'
        break
      case '16':
        tag.color = 'red'
        tag.name = 'Từ chối cập nhật / lấy lại'
        break
      case null:
        tag.color = 'gray'
        tag.name = 'Chưa đọc'
        break
      case '100':
        tag.color = 'red'
        tag.name = 'Văn bản bị thu hồi'
        break
      case '200':
        tag.color = 'red'
        tag.name = 'Văn bản bị cập nhật'
        break
      case '300':
        tag.color = 'red'
        tag.name = 'Văn bản bị thay thế'
        break
      default:
        tag.color = ''
        tag.name = ''
        break
    }
    return tag
  },
  renderInternalDocumentTag: status => {
    const tag = {
      color: '',
      text: '',
    }
    switch (status) {
      case '100':
        tag.color = 'black'
        tag.name = 'Chưa duyệt'
        break
      case '101':
        tag.color = 'green'
        tag.name = 'Đã duyệt'
        break
      case '102':
        tag.color = 'blue'
        tag.name = 'Tạo danh sách công việc'
        break
      default:
        tag.color = ''
        tag.name = ''
        break
    }
    return tag
  },
}

export default utils