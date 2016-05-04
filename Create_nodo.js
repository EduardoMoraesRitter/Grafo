//--Criar NODOS (atributos)  Vértice
create ()

//com categoria 
create ( : Times)

//com categoria e proriedade nome
create ( : Times{nome:"sao"})
create ( : Times{nome:"timao"})

//--atualizar
match (n:Times {nome:"sao"}) set n.nome = "sao paulo" 

//--consulta geral
match (n) return n

//com filtro por classe
match (n:Times) return n

//com filtro por classe com where por nome
match (n:Times {nome:"sao"}) return n
//ou
match (n:Times) where n.nome = "sao" return n

//--deletar tudo, para nao bloquear "detach"
match (n) detach delete n