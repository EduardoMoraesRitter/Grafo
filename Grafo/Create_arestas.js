//--Criar ARESTAS
match (ti:Times {nome:"timao"})
match (ta:Times {nome:"sao"})
create (ti)- [:ganho]-> (ta)

match (ti:Times {nome:"timao"})
match (ca:pessoa {nome:"cahr"})
create (ca)- [:gosta]-> (ti)

//consulta
match (n:Times {nome:"timao"})-[:ganha]->(g:Times {id: 8}) return (n),(g)