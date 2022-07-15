// Lista de intoxicados por raça por região
  let dados = [
    {
      "regiao": "Todo o Brasil",
      "brancas": 3302,
      "negras": 3859,
      "indígenas": 36,
      "amarelas": 75,
      "sem informação": 1145
    },
    {
      "regiao": "Norte",
      "brancas": 78,
      "negras": 592,
      "indígenas": 3,
      "amarelas": 5,
      "sem informação": 10
    },
    {
      "regiao": "Nordeste",
      "brancas": 148,
      "negras": 1396,
      "indígenas": 15,
      "amarelas": 36,
      "sem informação": 875
    },
    {
      "regiao": "Sudeste",
      "brancas": 1032,
      "negras": 911,
      "indígenas": 3,
      "amarelas": 8,
      "sem informação": 136
    },
    {
      "regiao": "Sul",
      "brancas": 1876,
      "negras": 476,
      "indígenas": 9,
      "amarelas": 21,
      "sem informação": 60
    },
    {
      "regiao": "Centro-Oeste",
      "brancas": 168,
      "negras": 484,
      "indígenas": 6,
      "amarelas": 5,
      "sem informação": 64
    }
  ]
  
  // Seleciona <ul>
  let lista = document.querySelector( 'ul' )
  
  // Cria elementos
  for ( let dado of dados ) {
  
    // Cria elemento pai
    let item = document.createElement( 'li' )
  
    // Cria elementos filhos
    let rotulo = document.createElement( 'span' )
    let barra = document.createElement( 'span' )
    let quantidade = document.createElement( 'span' )
    
    // Adiciona texto
    rotulo.textContent = dado.regiao
  
    // Adiciona classes
    rotulo.classList.add( 'rotulo' )
    barra.classList.add( 'barra' )
    quantidade.classList.add( 'quantidade' )
  
    // Insere os elementos
    item.append( rotulo )
    item.append( barra )
    item.append( quantidade )
    lista.append( item )
  
  }
  
  // Seleciona todas as <li>
  let itens = document.querySelectorAll( 'li' )
  
  // Seleciona o elemento <select>
  let seletor = document.querySelector( 'select' )
  
  // Dispara uma funcão a partir do seletor
  seletor.addEventListener( 'change', redimensionaBarras )
  
  // Função que muda o comprimento das barras
  function redimensionaBarras() {
  
    // Identifica a raça que a pessoa selecionou
    let raca = seletor.value
    
    // Para cada região…
    for ( let dado of dados ) {
  
      // Guardar a região atual
      let regiao = dado.regiao
  
      // Para cada <li>…
      for ( let item of itens ) {
  
        // Seleciona elemento  da região
        let rotulo = item.querySelector( '.rotulo' )
  
        // Se o texto desse elemento é  igual ao da região
        if ( rotulo.textContent == regiao ) {
          
          // Seleciona elementos .barra e .quantidade
          let barra = item.querySelector( '.barra' )
          let quantidade  = item.querySelector( '.quantidade' )
  
          // Guarda o valor
          let valor = dado[ raca ]
  
          // Calcula o comprimento para as barras
          let largura = valor / 5
          
          // Aplica o comprimento
          barra.style.width = largura + 'px' 
  
          // Adiciona um espaço
          quantidade.textContent = ' ' + valor
  
        }
  
      }
  
    }
  
  }
  
  // Desenha o gráfico quando a página é carregada
  redimensionaBarras()