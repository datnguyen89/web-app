import { observable, action } from 'mobx'
import themeList from '../themeList'

class CommonStore {
  /** Page name management */
  @observable pageName = []
  @action setPage = pageName => {
    this.pageName = pageName
  }

  /** App theme */
  @observable appTheme = localStorage.getItem('appTheme') ? JSON.parse(localStorage.getItem('appTheme')) : themeList.filter(x => x.name === 'blue')[0]

  @action setTheme = themeName => {
    this.appTheme = themeList.filter(x => x.name === themeName)[0]
    localStorage.setItem('appTheme', JSON.stringify(themeList.filter(x => x.name === themeName)[0]))
  }

  /** Sidebar */
  @observable isSidebarCollapsed = false
  @action setIsSidebarCollapsed = state => {
    this.isSidebarCollapsed = state
  }
  /** Drawer */
  @observable isShowDrawer = false
  @action setIsShowDrawer = state => {
    this.isShowDrawer = state
  }

  /** Mouse Cordinate */
  @observable mouseCordinate = { x: 0, y: 0 }

  @action setMouseCordinate = e => {
    this.mouseCordinate.x = e.clientX
    this.mouseCordinate.y = e.clientY
  }

  @action clearMouseCordinate = e => {
    this.mouseCordinate = { x: 0, y: 0 }
  }

  /** Clear data */
  @action clearStore = () => {
    this.pageName.length = 0
    this.setTheme('green')
    this.isSidebarCollapsed = false
    this.mouseCordinate = { x: 0, y: 0 }
  }

}

export default new CommonStore()