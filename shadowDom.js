class ShadowDom extends HTMLElement {
    //SHADOW DOM NAO É API DO JAVASCRIPT/ É UMA API DO BROWSER 
    //SHADOW DOM PERMITE MANIPULAR OBJETOS EM ESPECÍFICOS SEM AFETAR O DOM(DOCUMENTO COMPLETO HTML)
    // ELE CHAMA EVENTO POR EVENTO

    constructor() {
      super()
  
      //MODE OPEN CONSEGUE MANIPULAR O DOM  -- MODE CLOSE NAO PERMITE MANIPULAR O OBJETO

      const shadow = this.attachShadow({ mode: 'open' })
      
      const wrapper = document.createElement('div')
      wrapper.setAttribute('class', 'wrapper')
  
      const style = document.createElement('style')
      style.textContent = `
        .wrapper {
          width: 100px;
          height: 100px;
          background-color: blue;
        }
      `
      
      shadow.appendChild(style)
      shadow.appendChild(wrapper)
    }
  }
  
  customElements.define('shadow-dom', ShadowDom)