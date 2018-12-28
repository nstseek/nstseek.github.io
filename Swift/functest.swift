let a = 9
let b = 7
var c = 0

func soma (x: Int, y: Int) -> Int {
  return x + y
}

c = soma(x: a, y: b)
print(c)


func imprima (str: String) {
  print("O parametro é \(str)")
}

let funcao = imprima

imprima(str: "Hello World!")
