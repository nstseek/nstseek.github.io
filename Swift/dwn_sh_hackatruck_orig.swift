let path = ["/courses/EADLOOSJ/document/Imagens_Teaser/Swift_3.0/Modulo_01/Teaser04_A.JPG", "/courses/EADLOOSJ/document/Imagens_Teaser/Swift_3.0/Modulo_01/Teaser04_B.JPG", "/courses/EADLOOSJ/document/Imagens_Teaser/Swift_3.0/Modulo_01/Teaser04_C.JPG", "/courses/EADLOOSJ/document/Imagens_Teaser/Swift_3.0/Modulo_01/Teaser03_A.JPG", "/courses/EADLOOSJ/document/Imagens_Teaser/Swift_3.0/Modulo_01/Teaser03_B.JPG", "/courses/EADLOOSJ/document/Imagens_Teaser/Swift_3.0/Modulo_01/Teaser03_C.JPG"]
let commanda = "curl --insecure --cookie ~/hackatruck.txt --user-agent \"Mozilla/5.0 (Windows NT 6.1; WOW64; rv:61.0) Gecko/20100101 Firefox/61.0\" --output"
let commandb = ["https://lms.hackatruck.com.br/courses/EADLOOSJ/document/Imagens_Teaser/Swift_3.0/Modulo_01/Teaser04_A.JPG", "https://lms.hackatruck.com.br/courses/EADLOOSJ/document/Imagens_Teaser/Swift_3.0/Modulo_01/Teaser04_B.JPG", "https://lms.hackatruck.com.br/courses/EADLOOSJ/document/Imagens_Teaser/Swift_3.0/Modulo_01/Teaser04_C.JPG", "https://lms.hackatruck.com.br/courses/EADLOOSJ/document/Imagens_Teaser/Swift_3.0/Modulo_01/Teaser03_A.JPG", "https://lms.hackatruck.com.br/courses/EADLOOSJ/document/Imagens_Teaser/Swift_3.0/Modulo_01/Teaser03_B.JPG", "https://lms.hackatruck.com.br/courses/EADLOOSJ/document/Imagens_Teaser/Swift_3.0/Modulo_01/Teaser03_C.JPG"]
var i = 0
print("path array size: \(path.count)")
print("commandb array size: \(commandb.count)")
for i in 0..<path.count {
  print("\(commanda) ~\(path[i]) \(commandb[i])")
}
