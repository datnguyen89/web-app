import { observable, action } from 'mobx'

const themeList = {
  blue: {
    name: 'blue',
    solidColor: '#1a82c5',
    solidLightColor: 'rgb(233, 245, 254)',
    gradientColor: 'linear-gradient(108.88deg, #04BEFE 0%, #4481EB 100%)',
    shadowColor: '0 2px 10px rgba(68, 129, 235, 0.5)',
    lightShadowColor: '0 2px 4px rgba(61, 147, 190, 0.24), 0 4px 8px rgba(61, 153, 190, 0.16)',
  },
  wood: {
    name: 'wood',
    solidColor: '#d6ae7b',
    solidLightColor: 'rgba(214, 174, 123, .2)',
    gradientColor: 'linear-gradient(to right, #d6ae7b 0%,#eacda3 100%)',
    shadowColor: '0 2px 10px rgba(214, 174, 123, .4)',
    lightShadowColor: '0 2px 4px rgba(214, 174, 123, .2), 0 4px 8px rgba(214, 174, 123, .2)',
  },
  green: {
    name: 'green',
    solidColor: '#3DBEA3',
    solidLightColor: '#ecf9f6',
    gradientColor: 'linear-gradient(167.51deg, #2ECF94 24.37%, #3DBEA3 78.07%)',
    shadowColor: '0 2px 10px rgba(46,207,148,0.6)',
    lightShadowColor: '0 2px 4px rgba(61, 190, 163, 0.24), 0 4px 8px rgba(61, 190, 163, 0.16)',
  },

}

class CommonStore {
  /** Page name management */
  @observable pageName = []
  @action setPage = pageName => {
    this.pageName = pageName
  }

  /** App theme */
  @observable appTheme = localStorage.getItem('appTheme') ? JSON.parse(localStorage.getItem('appTheme')) : themeList.wood

  @action setTheme = themeName => {
    switch (themeName) {
      case 'wood':
        this.appTheme = themeList.wood
        localStorage.setItem('appTheme', JSON.stringify(themeList.wood))
        break
      case 'green':
        localStorage.setItem('appTheme', JSON.stringify(themeList.green))
        break
      case 'blue':
        localStorage.setItem('appTheme', JSON.stringify(themeList.blue))
        break
      default:
        break
    }
  }

  /** Sidebar */
  @observable isSidebarCollapsed = false
  @action toggleCollapsedSidebar = state => {
    this.isSidebarCollapsed = state
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