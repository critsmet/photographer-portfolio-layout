const html = require('choo/html')
const ready = require('document-ready')

//define template function
function home(state, emit){

  function randBotMarg() {
    return Math.floor(1 + Math.random()*(100 + 1 - 1))
  }

  function randWidMarg() {
    return Math.floor(Math.random()*(175 + 1))
  }

  function randWidth(){
    return Math.floor(200 + Math.random()*(350 + 1 - 200))
  }

  function formatImages(images){
    return images.map(image => {
      return html`
        <img src=${state.getUrl(image).width(1250).url()} align="center" style="margin-left: 0px; margin-right: ${randWidMarg()}px; margin-bottom: ${randBotMarg()}px" width=${randWidth()}/>
      `
    })
  }

  ready(() => {
    if(state.page !== "Home"){
      emit('setImages', "title", "Home", "title, photos")
    }

  })

  return html`
    <div id="container" style="width: 100vw; display: flex-wrap; justify-content: space-between;">
      ${state.page === "Home" ? formatImages(state.images[0].photos) : null}
    </div>
    `
}

//export wrapped module
module.exports = home
