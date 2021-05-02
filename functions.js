var controll = 0
var micBtn = document.querySelector('#microphone-icon-container')
var infoTxt = document.querySelector('#info-container span')

function test() {
  controll++
  console.log(controll)

  if (controll % 2 == 0) {
    micBtn.style.border = "3px solid #777"
    infoTxt.innerHTML = "Clique no microfone para detectar"
  } else {
    micBtn.style.border = "3px solid #59b280"
    infoTxt.innerHTML = "Nenhum som detectado"
  }
}



