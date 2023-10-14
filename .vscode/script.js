function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
    // se tiver light mode, adicionar a imagem light
  } else{
    img.setAttribute("src", "./assets/avatar-dark.png")
    // se tiver sem light mode, manter a imagem normal

  // const alt = document.querySelector("#profile alt")  
  // if(html.classList.contains('light')) {
  //     alt.setAttribute('alt', foto de mayk brito sorrindo, usando óculos, camisa preta e barba.)
  // } else{
  //     alt.setAttribute('alt', foto de mayk brito sorrindo, usando óculos escuro, camisa preta e barba.)
  // }


  /*
    const html = document.documentElement
    html.classList.toggle('light')
    if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else{
    html.classList.add('light')
  }
  */
  }
}