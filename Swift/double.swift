protocol ComandoLabirinto {
  func execute() -> Bool
}

class ParaFrente: ComandoLabirinto {
  func execute() -> Bool {
    print("frente")
    return true
  }
}

class ParaTras: ComandoLabirinto {
  func execute() -> Bool {
    print("tras")
    return true
  }
}

class ParaDireita: ComandoLabirinto {
  func execute() -> Bool {
    print("direita")
    return true
  }
}

class ParaEsquerda: ComandoLabirinto {
  func execute() -> Bool {
    print("esquerda")
    return true
  }
}

class Jogo {
  var comandos: [ComandoLabirinto]

  init(comandos: [ComandoLabirinto]) {
    self.comandos = comandos
  }
}

var character = Jogo()
