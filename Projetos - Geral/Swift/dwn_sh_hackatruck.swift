let path = ["courses/EADLOOSJ/document/Imagens_Exercicios/EX_LP_L3_1a.png", "courses/EADLOOSJ/document/Imagens_Exercicios/EX_LP_L3_1b.png", "courses/EADLOOSJ/document/Imagens_Exercicios/EX_LP_L3_1c.png", "courses/EADLOOSJ/document/Imagens_Exercicios/EX_LP_L3_1d.png", "courses/EADLOOSJ/document/Imagens_Exercicios/EX_LP_L3_1e.png"]
let commanda = "curl --insecure --cookie ~/hackatruck.txt --user-agent \"Mozilla/5.0 (Windows NT 6.1; WOW64; rv:61.0) Gecko/20100101 Firefox/61.0\" --output"
let commandb = ["https://lms.hackatruck.com.br/courses/EADLOOSJ/document/Imagens_Exercicios/EX_LP_L3_1a.png", "https://lms.hackatruck.com.br/courses/EADLOOSJ/document/Imagens_Exercicios/EX_LP_L3_1b.png", "https://lms.hackatruck.com.br/courses/EADLOOSJ/document/Imagens_Exercicios/EX_LP_L3_1c.png", "https://lms.hackatruck.com.br/courses/EADLOOSJ/document/Imagens_Exercicios/EX_LP_L3_1d.png", "https://lms.hackatruck.com.br/courses/EADLOOSJ/document/Imagens_Exercicios/EX_LP_L3_1e.png"]
var i = 0
print("path array size: \(path.count)")
print("commandb array size: \(commandb.count)")
for i in 0..<path.count {
  print("\(commanda) ~\(path[i]) \(commandb[i])")
}
