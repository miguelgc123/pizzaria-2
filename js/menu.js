// ---------- Dados ----------
// Setores do menu. "foto" é usada nas bolinhas e no topo de cada setor.
const SETORES = [
  { chave: "pizzas",  rota: "pizzas/salgadas", nome: "Pizzas",        bolinha: "img/pizzas.jpg",  desc: "Salgadas e doces, com bordas recheadas." },
  { chave: "esfihas", rota: "esfihas",         nome: "Esfihas",       bolinha: "img/esfiha.jpg",  desc: "Salgadas ou doces, do clássico ao especial." },
  { chave: "pasteis", rota: "pasteis",         nome: "Pastéis",       bolinha: null,              desc: "Crocantes e recheados, feitos na hora." },
  { chave: "lanches", rota: "lanches",         nome: "Lanches",       bolinha: "img/lanches.jpg", desc: "Beirutes bem servidos e dogs da família." },
  { chave: "dogs",    rota: "dogs-no-prato",   nome: "Dogs no prato", bolinha: "img/dog.jpg",     desc: "Quatro salsichas e combinações que valem por uma refeição." },
  { chave: "bebidas", rota: "bebidas",         nome: "Bebidas",       bolinha: "img/coca.jpg",    desc: "Refrigerantes, cervejas e sucos." }
];

const SUB_PIZZAS = [
  { rota: "pizzas/salgadas", nome: "Salgadas" },
  { rota: "pizzas/doces",    nome: "Doces" }
];

// Fotos dos itens, pela chave "página|nome do item". Itens sem foto usam o logo.
const FOTOS = {
  "pizzas/salgadas|Calabresa com Cebolas":  "img/calabresa.jpg",
  "pizzas/salgadas|Mussarela":              "img/queijo.jpg",
  "pizzas/salgadas|Frango com Catupiry":    "img/frango.jpg",
  "esfihas|Carne":                          "img/esfiha.jpg",
  "dogs-no-prato|Dog Bacon":                "img/dog.jpg",
  "bebidas|Coca-Cola - lata":               "img/coca.jpg",
  "bebidas|Coca-Cola 2 L":                  "img/itens/bebidas/coca2l.webp",
  "bebidas|Fanta Laranja 2 L":              "img/itens/bebidas/fanta2l.jpg",
  "bebidas|Guaraná Antarctica 1,5 L":       "img/itens/bebidas/guarana1,5.webp",
  "bebidas|Fanta Uva 2 L":                  "img/itens/bebidas/fantauva2l.jpg",
  "bebidas|Fanta Laranja - lata":           "img/itens/bebidas/fantalaranjalata.webp",
  "bebidas|Fanta Uva - lata":           "img/itens/bebidas/fantauvalata.jpg",
  "bebidas|Convenção":           "img/itens/bebidas/convencao.jpg",
  "bebidas|Original":           "img/itens/bebidas/Original.jpg",
  "bebidas|Skol":           "img/itens/bebidas/skol.jpg",
  "bebidas|Heineken - lata":           "img/itens/bebidas/heinekenlata.jpg",
  "bebidas|Suco com água":           "img/itens/bebidas/sucoagua.jpg",
  "bebidas|Suco com leite":           "img/itens/bebidas/sucoleite.avif",



  "pizzas/salgadas|À Moda da Casa":           "img/itens/pizzasalgada/amodadacasa.jpg",
  "pizzas/salgadas|À Moda do Pizzaiolo":      "img/itens/pizzasalgada/amodadopizzaiolo.jpg",
  "pizzas/salgadas|Bauru":                    "img/itens/pizzasalgada/pizzabauru.png",
  "pizzas/salgadas|Champignon":                    "img/itens/pizzasalgada/champignon.jpg",
  "pizzas/salgadas|Jardineira":                    "img/itens/pizzasalgada/jardineira.jpg",
  "pizzas/salgadas|Napolitana":                    "img/itens/pizzasalgada/napolitana.jpg",
  "pizzas/salgadas|Palmito":                    "img/itens/pizzasalgada/palmito.jpg",
  "pizzas/salgadas|Paulista":                    "img/itens/pizzasalgada/paulista.jpg",
  "pizzas/salgadas|Portuguesa":                    "img/itens/pizzasalgada/portuguesa.jpg",
  "pizzas/salgadas|À Moda do Cliente":                    "img/itens/pizzasalgada/modadocliente.jpg",
  "pizzas/salgadas|Alho e Óleo":                    "img/itens/pizzasalgada/alhoeoleo.jpg",
  "pizzas/salgadas|Bacon":                    "img/itens/pizzasalgada/bacon.jpg",
  "pizzas/salgadas|Brócolis Especial":                    "img/itens/pizzasalgada/brocolisespecial.jpg",
  "pizzas/salgadas|Baiana":                    "img/itens/pizzasalgada/baiana.jpg",
  "pizzas/salgadas|Calabresa Especial":                    "img/itens/pizzasalgada/calabresaespecial.jpg",
  "pizzas/salgadas|Atum Especial":                    "img/itens/pizzasalgada/atumespecial.jpg",
  "pizzas/salgadas|Grega":                    "img/itens/pizzasalgada/grega.jpg",
  "pizzas/salgadas|Atum com Cebolas":                    "img/itens/pizzasalgada/atumcomcebola.jpg",
  "pizzas/salgadas|Atum com Mussarela":                    "img/itens/pizzasalgada/atumcommussarela.webp",
  "pizzas/salgadas|Bauru Especial":                    "img/itens/pizzasalgada/bauruespecial.jpg",
  "pizzas/salgadas|Brócolis":                    "img/itens/pizzasalgada/brocolis.jpg",
  "pizzas/salgadas|Caipira":                    "img/itens/pizzasalgada/caipira.jpg",
  "pizzas/salgadas|Costela":                    "img/itens/pizzasalgada/costelapizza.webp",
  "pizzas/salgadas|Salame":                    "img/itens/pizzasalgada/salame.jpg",
  "pizzas/salgadas|Lombo":                    "img/itens/pizzasalgada/lombo.jpg",
  "pizzas/salgadas|Milho Verde":                    "img/itens/pizzasalgada/milhoverde.jpg",
  "pizzas/salgadas|Nordestina":                    "img/itens/pizzasalgada/nordestina.jpg",
  "pizzas/salgadas|Portuguesa Especial":                    "img/itens/pizzasalgada/portuguesaespecial.jpg",
  "pizzas/salgadas|Toscana":                    "img/itens/pizzasalgada/toscana.jpg",
  "pizzas/salgadas|Escarola":                    "img/itens/pizzasalgada/escarola.webp",
  "pizzas/salgadas|Imperador":                    "img/itens/pizzasalgada/imperador.jpg",
  "pizzas/salgadas|Três Queijos":                    "img/itens/pizzasalgada/tresqueijos.jpg",
  "pizzas/salgadas|Tropical Bolonhesa":                    "img/itens/pizzasalgada/bolonhesa.jpg",
  "pizzas/salgadas|Vegetariana":                    "img/itens/pizzasalgada/vegetariana.jpg",
  "pizzas/salgadas|Batata Frita":                    "img/itens/pizzasalgada/batatafrita.jpg",
  "pizzas/salgadas|Frango Cremoso":                    "img/itens/pizzasalgada/frangocremoso.jpg",
  "pizzas/salgadas|Portuga":                    "img/itens/pizzasalgada/portuga.jpg",
  "pizzas/salgadas|Frango Especial":                    "img/itens/pizzasalgada/frangoespecial.jpg",
  "pizzas/salgadas|Quatro Queijos":                    "img/itens/pizzasalgada/quatroqueijos.jpg",
  "pizzas/salgadas|Siciliana":                    "img/itens/pizzasalgada/siciliana.jpg",
  "pizzas/salgadas|Tropical":                    "img/itens/pizzasalgada/tropical.jpg",
  "pizzas/salgadas|Catupiry ou cheddar":                    "img/itens/pizzasalgada/borda.jpg",


  
  "esfihas|Alho e Óleo":                    "img/itens/esfihas/esfirraalhoeoleo.jpg",
  "esfihas|Atum":                    "img/itens/esfihas/esfihaatum.jpg",
  "esfihas|Atum com Mussarela":                    "img/itens/esfihas/esfihaatumcommussarela.jpg",
  "esfihas|Atum, Cebola e Catupiry":                    "img/itens/esfihas/atumcebolaecatupiry.jpg",
  "esfihas|Bacon com Mussarela e Milho":                    "img/itens/esfihas/baconcommussarelaemilho.jpg",
  "esfihas|Brócolis, Mussarela e Bacon":                    "img/itens/esfihas/esfihabrocolismussarelaebacon.jpg",
  "esfihas|Brócolis Especial":                    "img/itens/esfihas/esfihabrocolisespecial.jpg",
  "esfihas|Calabresa":                    "img/itens/esfihas/esfihacalabresa.jpg",
  "esfihas|Calabresa com Catupiry":                    "img/itens/esfihas/esfihacalabresacomcatupiry.jpg",
  "esfihas|Calabresa com Cheddar":                    "img/itens/esfihas/esfihacalabresacomcheddar.jpg",
  "esfihas|Calabresa com Mussarela":                    "img/itens/esfihas/esfihacalabresacommussarela.jpg",
  "esfihas|Carne":                    "img/itens/esfihas/esfihacarne.jpg",
  "esfihas|Carne com Mussarela":                    "img/itens/esfihas/esfihacarnecommussarela.jpg",
  "esfihas|Carne-seca com Mussarela":                    "img/itens/esfihas/esfihacarnesecacommussarela.jpg",
  "esfihas|Costela":                    "img/itens/esfihas/esfihacostela.jpg",
  "esfihas|Dois Queijos":                    "img/itens/esfihas/esfihadoisqueijos.jpg",
  "esfihas|Escarola, Mussarela e Bacon":                    "img/itens/esfihas/esfihaescarolamussarelabacon.jpg",
  "esfihas|Frango":                    "img/itens/esfihas/esfiha-frango.jpg",
  "esfihas|Frango com Catupiry":                    "img/itens/esfihas/esfiha-frango-com-catupiry.jpg",
  "esfihas|Frango com Cheddar":                    "img/itens/esfihas/esfiha-frango-com-cheddar.jpg",
  "esfihas|Frango com Mussarela":                    "img/itens/esfihas/esfiha-frango-com-mussarela.jpg",
  "esfihas|Napolitana":                    "img/itens/esfihas/esfiha-napolitana.jpg",
  "esfihas|Palmito com Mussarela":                    "img/itens/esfihas/esfiha-palmito-com-mussarela.jpg",
  "esfihas|Presunto, Ovo e Mussarela":                    "img/itens/esfihas/esfiha-presunto-ovo-e-mussarela.jpg",
  "esfihas|Quatro Queijos":                    "img/itens/esfihas/esfiha-quatro-queijos.jpg",
  "esfihas|Queijo e Presunto":                    "img/itens/esfihas/esfiha-queijo-presunto.jpg",
  "esfihas|Queijo Mussarela":                    "img/itens/esfihas/esfiha-queijo-mussarela.jpg",
  "esfihas|Três Queijos":                    "img/itens/esfihas/esfiha-tres-queijos.jpg",
  "esfihas|Pepperoni":                    "img/itens/esfihas/esfiha-pepperoni.jpg",
  "esfihas|Chocolate":                    "img/itens/esfihas/esfiha-chocolate.jpg",
  "esfihas|Chocolate e Morango":                    "img/itens/esfihas/esfiha-chocolate-e-morango.jpg",
  "esfihas|Romeu e Julieta":                    "img/itens/esfihas/esfiha-romeu-e-julieta.jpg",
  "esfihas|M&M's":                    "img/itens/esfihas/esfiha-M&Ms.jpg",
  "esfihas|Abacaxi":                    "img/itens/esfihas/esfiha-abacaxi.jpg",
  "esfihas|Banana":                    "img/itens/esfihas/esfiha-banana.jpg",
  "esfihas|Banana Especial":                    "img/itens/esfihas/esfiha-banana-especial.jpg",
  "esfihas|Chocolate e Granulado":                    "img/itens/esfihas/esfiha-chocolate-granulado.jpg",
  "esfihas|Paçoca":                    "img/itens/esfihas/esfiha-paçoca.jpg",
  "esfihas|Prestígio":                    "img/itens/esfihas/esfiha-prestigio.jpg",
  "esfihas|Bis - Novidade":                    "img/itens/esfihas/esfiha-bis.jpg",
  "esfihas|KitKat":                    "img/itens/esfihas/esfiha-kitkat.jpg",
  "esfihas|Pistache":                    "img/itens/esfihas/esfiha-pistache.jpg",
  "esfihas|Nutella":                    "img/itens/esfihas/esfiha-nutela.jpg",
  "esfihas|Ovomaltine":                    "img/itens/esfihas/esfiha-ovomaltin.jpg",
  "esfihas|Nutella com Ovomaltine":                    "img/itens/esfihas/esfiha-nutella-com-ovomaltine.jpg",
  "esfihas|Churros":                    "img/itens/esfihas/esfiha-churros.jpg",
  "esfihas|Pistache com Uva":                    "img/itens/esfihas/esfiha-pistache-com-uva.jpg",
  "esfihas|Chocolate com Uva":                    "img/itens/esfihas/esfiha-chocolate-com-uva.jpg",



  "pizzas/doces|Banana":                    "img/itens/pizzasdoces/pizza-banana.jpg",
  "pizzas/doces|Brigadeiro":                    "img/itens/pizzasdoces/pizza-brigadeiro.jpg",
  "pizzas/doces|Explosão de Chocolate":                    "img/itens/pizzasdoces/pizza-chocolate-preto-branco.jpg",
  "pizzas/doces|Banana Caramelizada":                    "img/itens/pizzasdoces/pizza-banana-caramelizada.jpg",
  "pizzas/doces|Romeu e Julieta":                    "img/itens/pizzasdoces/pizza-romeu-julieta.jpg",
  "pizzas/doces|KitKat":                    "img/itens/pizzasdoces/pizza-kitkat.jpg",
  "pizzas/doces|Pistache":                    "img/itens/pizzasdoces/pizza-pistache.jpg",
  "pizzas/doces|Ovomaltine":                    "img/itens/pizzasdoces/pizza-ovomaltine.jpg",
  "pizzas/doces|Nutella":                    "img/itens/pizzasdoces/pizza-nutella.jpg",
  "pizzas/doces|M&M's":                    "img/itens/pizzasdoces/pizza-M&M's.jpg",
  "pizzas/doces|Abacaxi Caramelizado":                    "img/itens/pizzasdoces/pizza-abacaxi-caramelizado.jpg",
  "pizzas/doces|Uva e Chocolate":                    "img/itens/pizzasdoces/pizza-uva-chocolate.jpg",
  "pizzas/doces|Doce de Leite":                    "img/itens/pizzasdoces/pizza-doce-de-leite.jpg",
  "pizzas/doces|Chocolate":                    "img/itens/pizzasdoces/pizza-chocolate.jpg",
  "pizzas/doces|Morango":                    "img/itens/pizzasdoces/pizza-chocolate-morango.jpg",
  "pizzas/doces|Chocolate branco ou preto":                    "img/itens/pizzasdoces/borda-doce.jpg",



  "pasteis|Brócolis, Mussarela e Bacon":                    "img/itens/pasteis/pasteis-brocolis-mussarela-bacon.jpg",
  "pasteis|Calabresa":                    "img/itens/pasteis/pasteis-calabresa.jpg",
  "pasteis|Bauru":                    "img/itens/pasteis/pasteis-bauru.jpg",
  "pasteis|Carne":                    "img/itens/pasteis/pasteis-carne.jpg",
  "pasteis|Costela":                    "img/itens/pasteis/pasteis-costela.jpg",
  "pasteis|Costela com Cheddar":                    "img/itens/pasteis/pasteis-costela-com-chedar.jpg",
  "pasteis|Costela com Requeijão":                    "img/itens/pasteis/pasteis-costela-com-requeijao.jpg",
  "pasteis|Carne com Mussarela":                    "img/itens/pasteis/pasteis-carne-com-mussarela.jpg",
  "pasteis|Frango com Catupiry":                    "img/itens/pasteis/pasteis-frango-com-catupiry.jpg",
  "pasteis|Frango com Requeijão":                    "img/itens/pasteis/pasteis-frango-com-requeijao.jpg",
  "pasteis|Frango":                    "img/itens/pasteis/pasteis-frango.jpg",
  "pasteis|Frango com Cheddar":                    "img/itens/pasteis/pasteis-frango-com-chedar.jpg",
  "pasteis|Queijo":                    "img/itens/pasteis/pasteis-queijio.jpg",
  "pasteis|Carne Dois":                    "img/itens/pasteis/pasteis-carne-2.jpg",
  "pasteis|Palmito, Mussarela e Azeitona":                    "img/itens/pasteis/pasteis-palmito-mussarela-e-azeitona.jpg",
  "pasteis|Dois Queijos":                    "img/itens/pasteis/pasteis-dois-queijos.jpg",
  "pasteis|Três Queijos":                    "img/itens/pasteis/pasteis-tres-queijos.jpg",
  "pasteis|Pizza":                    "img/itens/pasteis/pasteis-pizza.jpg",
  "pasteis|Carne-seca com Mussarela":                    "img/itens/pasteis/pasteis-carne-seca-com-mussarela.jpg",
  "pasteis|Calabresa com Mussarela":                    "img/itens/pasteis/pasteis-pasteis-calabresa-com-mussarela.jpg",
  "pasteis|Escarola, Mussarela e Bacon":                    "img/itens/pasteis/pasteis-escarola-mussarela-e-bacon.jpg",
  "pasteis|Especial":                    "img/itens/pasteis/pasteis-especial.jpg",
  "pasteis|Banana":                    "img/itens/pasteis/pasteis-banana.jpg",
  "pasteis|Brigadeiro":                    "img/itens/pasteis/pasteis-brigadeiro.jpg",
  "pasteis|Chocolate com Abacaxi":                    "img/itens/pasteis/.jpg",
  "pasteis|M&M's":                    "img/itens/pasteis/.jpg",
  "pasteis|Chocolate com Morango":                    "img/itens/pasteis/.jpg",
  "pasteis|Romeu e Julieta":                    "img/itens/pasteis/.jpg",
  "pasteis|Chocolate Preto e Branco":                    "img/itens/pasteis/.jpg",
  "pasteis|Nutella":                    "img/itens/pasteis/.jpg",
  "pasteis|Chocolate":                    "img/itens/pasteis/.jpg",
};

// Itens que aparecem em "Destaques" na página inicial.
const DESTAQUES = [
  "pizzas/salgadas|Calabresa com Cebolas",
  "pizzas/salgadas|Mussarela",
  "pizzas/salgadas|Frango com Catupiry",
  "esfihas|Carne",
  "dogs-no-prato|Dog Bacon",
  "bebidas|Coca-Cola - lata"
];

const PAGINAS = {
  "pizzas/salgadas": {
    chave: "pizzas", titulo: "Pizzas salgadas", bajada: "Sabores para todos os momentos",
    fundo: "img/pizza-escura.jpg", rodape: "Consulte disponibilidade • Imagens ilustrativas baseadas em produtos reais da Família Dog",
    grupos: [
      { titulo: "Clássicas", itens: [
        ["À Moda da Casa", "55,00", "Palmito, mussarela, presunto e milho."],
        ["À Moda do Pizzaiolo", "55,00", "Milho, tomate, mussarela e catupiry."],
        ["Bauru", "50,00", "Presunto, mussarela e tomate."],
        ["Champignon", "55,90", "Catupiry, mussarela, bacon e champignon."],
        ["Jardineira", "55,00", "Frango, mussarela, catupiry e bacon."],
        ["Napolitana", "50,00", "Mussarela, tomate e parmesão."],
        ["Palmito", "55,00", "Palmito, mussarela, catupiry e tomate."],
        ["Paulista", "55,00", "Calabresa com cobertura de mussarela."],
        ["Portuguesa", "55,00", "Presunto, milho, ervilha, ovo, cebola e mussarela."],
        ["À Moda do Cliente", "65,00", "Escolha até 4 ingredientes."],
        ["Alho e Óleo", "50,00", "Alho, tomate e mussarela."]
      ]},
      { titulo: "Favoritas", itens: [
        ["Bacon", "55,00", "Bacon, mussarela, milho e catupiry."],
        ["Brócolis Especial", "60,00", "Brócolis, mussarela, bacon, catupiry e cheddar."],
        ["Baiana", "55,00", "Calabresa moída, catupiry, pimenta, cebola, tomate e ovo."],
        ["Calabresa com Cebolas", "48,90", "Molho de tomate, calabresa, cebola, orégano e azeitona."],
        ["Calabresa Especial", "55,00", "Calabresa, mussarela e catupiry."],
        ["Atum Especial", "60,00", "Atum, cheddar, catupiry e mussarela."],
        ["Grega", "55,00", "Calabresa moída coberta com mussarela e bacon."],
        ["Atum com Cebolas", "50,00", "Molho de tomate, atum, cebola, orégano e azeitona."],
        ["Atum com Mussarela", "60,00", "Molho de tomate, mussarela, atum, orégano e azeitona."],
        ["Bauru Especial", "60,00", "Mussarela, presunto, cebola, cheddar e catupiry."],
        ["Brócolis", "55,00", "Brócolis, mussarela, bacon e alho frito."]
      ]},
      { titulo: "Especiais", itens: [
        ["Caipira", "50,00", "Frango, catupiry e milho."],
        ["Costela", "65,00", "Costela, cebola, cream cheese e mussarela."],
        ["Salame", "60,00", "Mussarela e salame."],
        ["Lombo", "55,00", "Lombo, cebola, bacon e catupiry."],
        ["Milho Verde", "50,00", "Milho verde e mussarela."],
        ["Mussarela", "48,90", "Mussarela e tomate."],
        ["Nordestina", "65,00", "Carne-seca, mussarela, tomate, cebola e catupiry."],
        ["Portuguesa Especial", "60,00", "Presunto, milho, ervilha, ovos, tomate, cheddar e catupiry."],
        ["Toscana", "55,00", "Calabresa moída, cebola e catupiry."],
        ["Escarola", "55,00", "Escarola, mussarela, bacon, milho e catupiry."],
        ["Frango com Catupiry", "50,00", "Molho de tomate, frango, catupiry, mussarela, orégano e azeitona."]
      ]},
      { titulo: "Mais sabores", itens: [
        ["Imperador", "60,00", "Calabresa, frango, mussarela, catupiry e champignon."],
        ["Três Queijos", "53,00", "Mussarela, catupiry e cheddar."],
        ["Tropical Bolonhesa", "60,00", "Carne moída, parmesão, mussarela, cheddar e catupiry."],
        ["Vegetariana", "55,00", "Mussarela, brócolis, champignon e ervilha."],
        ["Batata Frita", "65,00", "Molho, queijo, batata frita, cheddar, bacon, orégano e azeitona."],
        ["Frango Cremoso", "55,00", "Molho de tomate, frango, requeijão, mussarela, orégano e azeitona."],
        ["Portuga", "60,00", "Molho, presunto, mussarela, bacon, ovo, milho, ervilha e cebola."],
        ["Frango Especial", "55,00", "Frango desfiado, mussarela, milho e batata palha."],
        ["Quatro Queijos", "55,00", "Mussarela, catupiry, cheddar e parmesão."],
        ["Siciliana", "55,00", "Mussarela, bacon, parmesão e champignon."],
        ["Tropical", "55,00", "Mussarela, catupiry, ovo e parmesão."]
      ]},
      { titulo: "Bordas recheadas", itens: [
        ["Catupiry ou cheddar", "10,00", "Borda recheada para a sua pizza."]
      ]}
    ]
  },

  "pizzas/doces": {
    chave: "pizzas", titulo: "Pizzas doces", bajada: "Para fechar o pedido do melhor jeito",
    fundo: "img/doces.jpg", rodape: "Consulte disponibilidade • Imagens ilustrativas baseadas em produtos reais da Família Dog",
    grupos: [
      { titulo: "Pizzas doces", itens: [
        ["Banana", "55,00", "Doce de leite, banana e canela."],
        ["Brigadeiro", "55,00", "Chocolate coberto com granulado."],
        ["Explosão de Chocolate", "55,00", "Chocolate preto e chocolate branco."],
        ["Banana Caramelizada", "60,00", "Pitada de mussarela, banana, chocolate branco caramelizado e canela."],
        ["Romeu e Julieta", "55,00", "Goiabada com queijo."],
        ["KitKat", "70,00", "Chocolate preto e KitKat."],
        ["Pistache", "70,00", "Creme de pistache."],
        ["Ovomaltine", "70,00", "Creme de Ovomaltine."]
      ]},
      { titulo: "Mais doces", itens: [
        ["Nutella", "80,00", "Nutella original."],
        ["M&M's", "55,00", "Chocolate com M&M's."],
        ["Abacaxi Caramelizado", "60,00", "Pitada de mussarela, abacaxi, chocolate branco caramelizado e canela."],
        ["Uva e Chocolate", "60,00", "Chocolate preto com uva."],
        ["Doce de Leite", "50,00", "Doce de leite e canela."],
        ["Chocolate", "55,00", "Chocolate ao leite cremoso."],
        ["Morango", "65,00", "Chocolate preto com morango e leite condensado."]
      ]},
      { titulo: "Bordas recheadas", itens: [
        ["Chocolate branco ou preto", "7,00", "Borda recheada para a sua pizza."]
      ]}
    ]
  },

  "esfihas": {
    chave: "esfihas", titulo: "Esfihas que todo mundo ama", bajada: "Salgadas ou doces: escolha a sua favorita",
    fundo: "img/esfiha.jpg", rodape: "Massa leve, recheio caprichado e sabor de verdade • Consulte disponibilidade",
    grupos: [
      { titulo: "Salgadas", itens: [
        ["Alho e Óleo", "3,50", "Alho e óleo."],
        ["Atum", "3,50", "Atum."],
        ["Atum com Mussarela", "6,00", "Atum e mussarela."],
        ["Atum, Cebola e Catupiry", "6,00", "Atum, cebola e catupiry."],
        ["Bacon com Mussarela e Milho", "6,00", "Bacon, mussarela e milho."],
        ["Brócolis, Mussarela e Bacon", "6,00", "Brócolis, mussarela e bacon."],
        ["Brócolis Especial", "6,00", "Brócolis, queijo, bacon, cheddar e catupiry."],
        ["Calabresa", "3,50", "Calabresa."],
        ["Calabresa com Catupiry", "5,00", "Calabresa e catupiry."],
        ["Calabresa com Cheddar", "5,00", "Calabresa e cheddar."],
        ["Calabresa com Mussarela", "5,00", "Calabresa e mussarela."],
        ["Carne", "3,50", "Carne."]
      ]},
      { titulo: "Mais salgadas", itens: [
        ["Carne com Mussarela", "5,00", "Carne e mussarela."],
        ["Carne-seca com Mussarela", "7,00", "Carne-seca e mussarela."],
        ["Costela", "7,00", "Costela e cream cheese."],
        ["Dois Queijos", "5,00", "Mussarela e catupiry."],
        ["Escarola, Mussarela e Bacon", "6,00", "Escarola, mussarela e bacon."],
        ["Frango", "3,50", "Frango."],
        ["Frango com Catupiry", "4,50", "Frango e catupiry."],
        ["Frango com Cheddar", "4,50", "Frango e cheddar."],
        ["Frango com Mussarela", "5,00", "Frango e mussarela."],
        ["Napolitana", "4,50", "Queijo, tomate e parmesão."],
        ["Palmito com Mussarela", "4,50", "Palmito e mussarela."],
        ["Presunto, Ovo e Mussarela", "5,00", "Presunto, ovo e mussarela."]
      ]},
      { titulo: "Favoritas", itens: [
        ["Quatro Queijos", "6,00", "Mussarela, catupiry, cheddar e parmesão."],
        ["Queijo e Presunto", "5,00", "Queijo e presunto."],
        ["Queijo Mussarela", "3,50", "Queijo mussarela."],
        ["Três Queijos", "5,00", "Mussarela, catupiry e cheddar."],
        ["Pepperoni", "6,00", "Pepperoni."],
        ["Chocolate", "5,00", "Chocolate."],
        ["Chocolate e Morango", "10,00", "Chocolate e morango."],
        ["Romeu e Julieta", "7,00", "Mussarela e goiabada."],
        ["M&M's", "6,00", "Chocolate e M&M's."],
        ["Abacaxi", "10,00", "Abacaxi e creme."],
        ["Banana", "7,00", "Banana, doce de leite, leite condensado e canela."],
        ["Banana Especial", "10,00", "Banana, mussarela, chocolate branco e canela."]
      ]},
      { titulo: "Doces irresistíveis", itens: [
        ["Chocolate e Granulado", "6,00", "Brigadeiro."],
        ["Paçoca", "6,00", "Chocolate e paçoca."],
        ["Prestígio", "6,00", "Chocolate e coco ralado."],
        ["Bis - Novidade", "7,00", "Chocolate, Bis e leite condensado."],
        ["KitKat", "10,00", "KitKat e chocolate."],
        ["Pistache", "7,00", "Creme de pistache."],
        ["Nutella", "10,00", "Nutella."],
        ["Ovomaltine", "10,00", "Chocolate e Ovomaltine."],
        ["Nutella com Ovomaltine", "12,00", "Nutella e Ovomaltine."],
        ["Churros", "6,00", "Doce de leite, leite condensado e canela."],
        ["Pistache com Uva", "8,00", "Pistache e uva."],
        ["Chocolate com Uva", "10,00", "Chocolate, uva e leite condensado."]
      ]}
    ]
  },

  "pasteis": {
    chave: "pasteis", titulo: "Pastéis crocantes e recheados", bajada: "Do clássico ao especial, sempre feito para matar a fome",
    fundo: null, rodape: "Pastéis preparados na hora • Consulte disponibilidade",
    grupos: [
      { titulo: "Os clássicos", itens: [
        ["Brócolis, Mussarela e Bacon", "17,00", "Brócolis, mussarela e bacon."],
        ["Calabresa", "12,00", "Calabresa."],
        ["Bauru", "15,00", "Mussarela, presunto e tomate."],
        ["Carne", "12,00", "Carne."],
        ["Costela", "17,00", "Cream cheese, queijo e costela."],
        ["Costela com Cheddar", "17,00", "Cheddar e costela."],
        ["Costela com Requeijão", "17,00", "Requeijão, queijo e costela."],
        ["Carne com Mussarela", "15,00", "Carne e mussarela."]
      ]},
      { titulo: "Bem recheados", itens: [
        ["Frango com Catupiry", "15,00", "Frango e catupiry."],
        ["Frango com Requeijão", "15,00", "Frango e requeijão."],
        ["Frango", "12,00", "Frango."],
        ["Frango com Cheddar", "15,00", "Frango e cheddar."],
        ["Queijo", "12,00", "Queijo."],
        ["Carne Dois", "17,00", "Carne, queijo e catupiry."],
        ["Palmito, Mussarela e Azeitona", "15,00", "Palmito, mussarela e azeitona."],
        ["Dois Queijos", "14,00", "Queijo e catupiry."]
      ]},
      { titulo: "Sabores especiais", itens: [
        ["Três Queijos", "15,00", "Mussarela, cheddar e catupiry."],
        ["Pizza", "12,00", "Queijo, orégano e tomate."],
        ["Carne-seca com Mussarela", "17,00", "Carne-seca e mussarela."],
        ["Calabresa com Mussarela", "15,00", "Calabresa e mussarela."],
        ["Escarola, Mussarela e Bacon", "14,00", "Escarola, mussarela e bacon."],
        ["Especial", "18,00", "Carne, frango, queijo, calabresa, catupiry e milho."],
        ["Banana", "15,00", "Banana, doce de leite e canela."],
        ["Brigadeiro", "15,00", "Chocolate e granulado."]
      ]},
      { titulo: "Pastéis doces", itens: [
        ["Chocolate com Abacaxi", "15,00", "Abacaxi e chocolate preto."],
        ["M&M's", "15,00", "Chocolate e M&M's."],
        ["Chocolate com Morango", "17,00", "Chocolate e morango."],
        ["Romeu e Julieta", "15,00", "Queijo e goiabada."],
        ["Chocolate Preto e Branco", "15,00", "Chocolate preto e chocolate branco."],
        ["Nutella", "15,00", "Recheado com Nutella."],
        ["Chocolate", "15,00", "Chocolate."]
      ]}
    ]
  },

  "lanches": {
    chave: "lanches", titulo: "Lanches de respeito", bajada: "Beirutes e dogs para quem não brinca com a fome",
    fundo: "img/lanches.jpg", rodape: "Capricho em cada recheio • Pedidos: (11) 91640-0439",
    grupos: [
      { titulo: "Beirutes bem servidos", itens: [
        ["Bauru", "35,00", "Presunto, queijo e orégano."],
        ["Calabresa", "35,00", "Calabresa e cebola."],
        ["Calabresa Especial", "45,00", "Calabresa, cebola, catupiry e bacon."],
        ["Carne-seca", "45,00", "Carne-seca, catupiry e cebola."],
        ["Frango com Catupiry", "35,00", "Frango e catupiry."],
        ["Frango Especial", "40,00", "Frango desfiado, milho e batata palha."],
        ["Lombo", "40,00", "Lombo, catupiry e cebola."],
        ["Costela", "45,00", "Costela, cebola, mussarela e cream cheese."]
      ]},
      { titulo: "Dogs da família", itens: [
        ["Dog Simples", "10,00", "Pão, salsicha, batata palha, purê, tomate, milho e molhos."],
        ["Dog Duplo", "12,00", "Duas salsichas, purê, batata palha, tomate, milho e molhos."],
        ["Dog Prensado", "12,00", "Salsicha, batata palha, milho, cheddar e catupiry."],
        ["Duplo Prensado", "14,00", "Duas salsichas, batata palha, purê, milho, cheddar e catupiry."],
        ["Dog da Casa", "18,00", "Duas salsichas, presunto, queijo, milho, tomate, purê e batata palha."],
        ["Dog Bacon", "20,00", "Duas salsichas, bacon, purê, batata palha, milho, queijo, tomate, catupiry e cheddar."]
      ]},
      { titulo: "Dogs doces", itens: [
        ["Dog Sensação", "15,00", "Pão de dog, chocolate, morango e leite condensado."],
        ["Dog de Banana", "15,00", "Pão de dog, doce de leite, banana e canela."],
        ["Dog de Chocolate", "10,00", "Pão de dog e chocolate branco ou preto."],
        ["Dog Prestígio", "12,00", "Pão de dog, chocolate, leite condensado e coco ralado."],
        ["Dog de Pistache com Uva", "13,00", "Pão de dog, pistache e uva."],
        ["Dog de Chocolate com Uva", "13,00", "Pão de dog, chocolate e uva."],
        ["Dog de Abacaxi", "15,00", "Pão de dog, leite condensado, chocolate e abacaxi."],
        ["Dog de M&M's", "15,00", "Pão de dog, chocolate e M&M's."]
      ]}
    ]
  },

  "dogs-no-prato": {
    chave: "dogs", titulo: "Dog no prato: fome de verdade", bajada: "Quatro salsichas e combinações que valem por uma refeição",
    fundo: "img/dog.jpg", rodape: "Todos os dogs no prato são preparados com ingredientes selecionados • Consulte disponibilidade",
    grupos: [
      { titulo: "Os queridinhos", itens: [
        ["À Moda da Casa", "25,00", "4 salsichas, presunto, mussarela e milho."],
        ["Dog Bacon", "27,00", "4 salsichas, purê, mussarela, milho, catupiry, cheddar e bacon."],
        ["Baiana", "27,00", "4 salsichas, calabresa moída, mussarela, catupiry, bacon, cebola, tomate, purê e batata palha."],
        ["Bauru Especial", "27,00", "4 salsichas, purê, batata palha, mussarela, presunto, catupiry e cheddar."],
        ["Brócolis", "25,00", "4 salsichas, purê, batata palha, brócolis, queijo, bacon e alho frito."],
        ["Brócolis Especial", "27,00", "4 salsichas, purê, batata palha, mussarela, brócolis, bacon, alho frito, cheddar e catupiry."]
      ]},
      { titulo: "Sabores especiais", itens: [
        ["Calabresa", "23,00", "4 salsichas, purê, batata palha, calabresa e cebola."],
        ["Calabresa Especial", "27,00", "4 salsichas, purê, batata palha, molhos, calabresa, cebola e catupiry."],
        ["Costela", "30,00", "4 salsichas, purê, batata palha, molhos, costela, cream cheese, cebola e queijo."],
        ["Carne-seca", "30,00", "4 salsichas, purê, batata palha, molhos, carne-seca, cebola, tomate, catupiry e queijo."],
        ["Frango com Catupiry", "25,00", "4 salsichas, purê, batata palha, molhos, frango e catupiry."],
        ["Frango Especial", "27,00", "4 salsichas, purê, batata palha, molhos, frango, milho, catupiry e queijo."]
      ]},
      { titulo: "Mais pedidos", itens: [
        ["Atum", "25,00", "4 salsichas, purê, batata palha, molhos, atum, cebola e queijo."],
        ["Jardineiro", "27,00", "4 salsichas, purê, batata palha, molhos, frango, catupiry, bacon e queijo."],
        ["Mussarela", "23,00", "4 salsichas, purê, batata palha, molhos, mussarela e tomate."],
        ["Dois Queijos", "23,00", "4 salsichas, purê, batata palha, molhos, mussarela e catupiry."],
        ["Três Queijos", "25,00", "4 salsichas, purê, batata palha, molhos, mussarela, catupiry e cheddar."],
        ["Quatro Queijos", "27,00", "4 salsichas, purê, batata palha, molhos, mussarela, catupiry, cheddar e parmesão."]
      ]},
      { titulo: "Para variar", itens: [
        ["Grego", "27,00", "4 salsichas, purê, batata palha, molhos, queijo, calabresa e bacon."],
        ["Lombo", "27,00", "4 salsichas, purê, batata palha, molhos, lombo, cebola, bacon, queijo e catupiry."],
        ["Português", "27,00", "4 salsichas, purê, batata palha, molhos, queijo, presunto, milho, ervilha, cebola e ovo."],
        ["Caipira", "27,00", "4 salsichas, purê, batata palha, molhos, frango, milho e catupiry."]
      ]}
    ]
  },

  "bebidas": {
    chave: "bebidas", titulo: "Bebidas", bajada: "Para fechar o pedido do melhor jeito",
    fundo: "img/coca.jpg", rodape: "Pedidos: (11) 91640-0439 • Família Dog Pizzaria",
    grupos: [
      { titulo: "Refrigerantes", itens: [
        ["Coca-Cola 2 L", "17,00"],
        ["Fanta Laranja 2 L", "17,00"],
        ["Guaraná Antarctica 1,5 L", "15,00"],
        ["Fanta Uva 2 L", "17,00"],
        ["Fanta Laranja - lata", "6,00"],
        ["Fanta Uva - lata", "6,00"],
        ["Coca-Cola - lata", "6,00"],
        ["Convenção", "8,00"]
      ]},
      { titulo: "Cervejas", itens: [
        ["Original", "5,00"],
        ["Skol", "5,00"],
        ["Heineken - lata", "7,00"]
      ]},
      { titulo: "Sucos", itens: [
        ["Suco com água", "10,00", "Escolha um dos sabores abaixo."],
        ["Suco com leite", "12,00", "Escolha um dos sabores abaixo."]
      ],
        sabores: [
          "Abacaxi", "Abacaxi com Hortelã", "Acerola", "Açaí", "Acerola com Laranja",
          "Amora", "Cajá", "Caju", "Coco", "Cupuaçu", "Frutas Vermelhas", "Goiaba",
          "Graviola", "Limão", "Manga", "Maracujá", "Melancia", "Morango", "Pêssego", "Uva"
        ]
      }
    ]
  }
};

const ORDEM = Object.keys(PAGINAS);

// ---------- Utilidades ----------
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const slug = s => String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const semAcento = s => String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const setorDe = chave => SETORES.find(s => s.chave === chave);

// Foto do item: usa a foto mapeada, senão procura img/itens/<pagina>__<nome>.jpg.
// Se o arquivo não existir, mostra o logo no lugar (classe "vazio").
function imagemDoItem(rota, nome) {
  const caminho = FOTOS[`${rota}|${nome}`] || `img/itens/${rota.replace("/", "-")}__${slug(nome)}.jpg`;
  return `<img src="${caminho}" alt="${esc(nome)}" loading="lazy" width="400" height="300" onerror="this.onerror=null;this.src='img/logo.png';this.width=200;this.height=200;this.closest('.card-foto').classList.add('vazio')">`;
}

function produtosDe(rota) {
  return PAGINAS[rota].grupos.flatMap(g => (g.itens || []).map(i => ({ rota, grupo: g.titulo, item: i })));
}

function contarSetor(chave) {
  return ORDEM.filter(r => PAGINAS[r].chave === chave)
    .reduce((t, r) => t + produtosDe(r).length, 0);
}

function rotaAtual() {
  const h = decodeURIComponent(location.hash.replace(/^#\/?/, "")).replace(/\/$/, "");
  if (h === "pizzas") return "pizzas/salgadas";
  if (PAGINAS[h]) return h;
  return "";
}

// ---------- Componentes ----------
function topo() {
  return `
  <header class="topo">
    <div class="topo-in">
      <a class="marca" href="#/" aria-label="Início do cardápio">
        <img src="img/logo.png" alt="" width="40" height="40">
        <span>Família Dog</span>
      </a>
      <span class="espaco"></span>
      <a class="ligar" href="tel:+5511916400439"><span class="ligar-texto-curto">Ligar</span><span class="ligar-texto-longo">Ligar (11) 91640-0439</span></a>
    </div>
  </header>`;
}

function pilulas(chaveAtiva) {
  return `
  <nav class="pilulas" aria-label="Setores do cardápio">
    <ul>
      ${SETORES.map(s => `<li><a href="#/${s.rota}"${s.chave === chaveAtiva ? ' aria-current="page"' : ""}>${esc(s.nome)}</a></li>`).join("")}
    </ul>
  </nav>`;
}

function fotoOuLogo(caminho, classeExtra = "") {
  if (caminho) return `<img src="${caminho}" alt="" loading="lazy" width="400" height="300">`;
  return `<img src="img/logo.png" alt="" loading="lazy" width="200" height="200" class="${classeExtra}">`;
}

function card(rota, [nome, preco, desc]) {
  const busca = semAcento(`${nome} ${desc || ""}`);
  return `
    <li class="item-grade" data-busca="${esc(busca)}">
      <article class="card">
        <div class="card-foto">
          ${imagemDoItem(rota, nome)}
        </div>
        <div class="card-corpo">
          <h3>${esc(nome)}</h3>
          ${desc ? `<p class="desc">${esc(desc)}</p>` : ""}
          <p class="preco"><small>R$</small>${esc(preco)}</p>
        </div>
      </article>
    </li>`;
}

function cardCompacto(rota, [nome, preco]) {
  return `
    <li class="item-grade" data-busca="${esc(semAcento(nome))}">
      <article class="card compacto">
        <div class="card-foto">
          ${imagemDoItem(rota, nome)}
        </div>
        <div class="card-corpo">
          <h3>${esc(nome)}</h3>
          <p class="preco"><small>R$</small>${esc(preco)}</p>
        </div>
      </article>
    </li>`;
}

function grupo(rota, g, indice) {
  const id = slug(`${rota}-${g.titulo}`);
  const itens = g.itens || [];
  const corpo = itens.length
    ? `<ul class="grade">${itens.map(i => (g.sabores ? cardCompacto(rota, i) : card(rota, i))).join("")}</ul>`
    : "";
  const sabores = g.sabores
    ? `<div class="flavors"><h3>Sabores</h3><p>Escolha um dos sabores para o seu suco.</p><ul>${g.sabores.map(s => `<li>${esc(s)}</li>`).join("")}</ul></div>`
    : "";
  return `
    <section class="grupo" id="${id}" data-grupo="${esc(g.titulo)}">
      <div class="grupo-titulo">
        <h2>${esc(g.titulo)}</h2>
        <span>${itens.length || (g.sabores || []).length} ${(itens.length || (g.sabores || []).length) === 1 ? "opção" : "opções"}</span>
      </div>
      ${corpo}
      ${sabores}
    </section>`;
}

function proximaTela(rota) {
  const i = ORDEM.indexOf(rota);
  const ant = ORDEM[(i - 1 + ORDEM.length) % ORDEM.length];
  const prox = ORDEM[(i + 1) % ORDEM.length];
  const nomeDe = r => PAGINAS[r].chave === "pizzas" ? PAGINAS[r].titulo : setorDe(PAGINAS[r].chave).nome;
  return `
  <nav class="proxima-tela" aria-label="Outras seções">
    <a href="#/${ant}"><span class="rotulo">Anterior</span><span class="nome">${esc(nomeDe(ant))}</span></a>
    <a href="#/${prox}"><span class="rotulo">Próxima</span><span class="nome">${esc(nomeDe(prox))}</span></a>
  </nav>`;
}

function rodape(texto) {
  return `<footer class="rodape"><p>${esc(texto)}</p><p style="margin-top:.35rem">Pedidos: <a href="tel:+5511916400439">(11) 91640-0439</a></p></footer>`;
}

function barraPedido() {
  return `<div class="pedir"><a href="tel:+5511916400439">Pedir pelo (11) 91640-0439</a></div>`;
}

// ---------- Páginas ----------
function paginaInicial() {
  const destaques = DESTAQUES.map(k => {
    const [rota, nome] = k.split("|");
    const prod = produtosDe(rota).find(p => p.item[0] === nome);
    return { rota, prod: prod.item };
  });
  return `
  ${topo()}
  <main id="conteudo" tabindex="-1">
    <section class="hero" aria-label="Apresentação">
      <img class="hero-foto" src="img/hero.jpg" alt="" aria-hidden="true">
      <div class="hero-in">
        <img class="hero-logo" src="img/logo.png" alt="Logo Família Dog Pizzaria" width="170" height="170">
        <h1 id="titulo">Qualidade que reúne <em>a família</em></h1>
        <p class="lead">Pizzas, esfihas, pastéis, lanches, dogs e bebidas. Escolha uma categoria ou busque pelo sabor que você quer.</p>
        <form class="busca" role="search" id="form-busca">
          <label class="oculto" for="campo-busca-inicio">Buscar no cardápio</label>
          <input id="campo-busca-inicio" name="q" type="search" placeholder="Buscar pizza, esfiha, dog..." autocomplete="off">
          <button type="submit">Buscar</button>
        </form>
      </div>
    </section>

    <section class="categorias" aria-label="Categorias">
      <ul>
        ${SETORES.map(s => `
        <li>
          <a href="#/${s.rota}">
            <span class="circulo${s.bolinha ? "" : " vazio"}">
              ${s.bolinha ? `<img src="${s.bolinha}" alt="" width="96" height="96">` : `<img src="img/logo.png" alt="" width="96" height="96">`}
            </span>
            <span class="nome-cat">${esc(s.nome)}</span>
          </a>
        </li>`).join("")}
      </ul>
    </section>

    <section class="bloco" aria-labelledby="destaques-titulo">
      <div class="bloco-topo">
        <h2 id="destaques-titulo">Destaques da casa</h2>
      </div>
      <ul class="trilho">
        ${destaques.map(d => card(d.rota, d.prod).replace('class="item-grade"', 'class="item-grade"')).join("")}
      </ul>
    </section>

    <section class="bloco" aria-label="Todas as seções">
      <div class="bloco-topo"><h2>Todo o cardápio</h2></div>
      <ul class="grade-setores" style="list-style:none;margin:0;padding:0;display:grid;gap:12px;grid-template-columns:1fr 1fr">
        ${SETORES.map(s => `
          <li><a href="#/${s.rota}" style="display:block;text-decoration:none;background:var(--card);border:1px solid var(--linha);border-radius:var(--raio);padding:1rem;color:var(--creme);height:100%">
            <span style="display:block;font-family:var(--display);font-size:1.35rem;color:var(--ouro);line-height:1.1">${esc(s.nome)}</span>
            <span style="display:block;color:var(--muted);font-size:.9rem;margin-top:.35rem">${esc(s.desc)}</span>
            <span style="display:block;margin-top:.6rem;font-weight:700;font-size:.9rem">${contarSetor(s.chave)} opções</span>
          </a></li>`).join("")}
      </ul>
    </section>
  </main>
  ${rodape("Família Dog Pizzaria • Imagens ilustrativas baseadas em produtos reais da Família Dog")}
  ${barraPedido()}`;
}

function paginaSetor(rota) {
  const p = PAGINAS[rota];
  const sub = p.chave === "pizzas"
    ? `<nav class="subabas" aria-label="Tipo de pizza"><div class="segmento">${SUB_PIZZAS.map(s => `<a href="#/${s.rota}"${s.rota === rota ? ' aria-current="page"' : ""}>${esc(s.nome)}</a>`).join("")}</div></nav>`
    : "";
  const total = produtosDe(rota).length;
  const fundoCss = p.fundo ? `<img class="cabeca-foto" src="${p.fundo}" alt="" aria-hidden="true">` : "";
  return `
  ${topo()}
  ${pilulas(p.chave)}
  <main id="conteudo" tabindex="-1">
    <section class="cabeca" aria-label="Apresentação da seção">
      ${fundoCss}
      <div class="cabeca-in">
        <h1 id="titulo" tabindex="-1">${esc(p.titulo)}</h1>
        <p class="bajada">${esc(p.bajada)}</p>
        <p class="contagem">${total} opções nesta página</p>
      </div>
    </section>
    ${sub}
    <div class="ferramentas">
      <div class="busca" role="search">
        <label class="oculto" for="campo-busca">Buscar nesta página</label>
        <input id="campo-busca" type="search" placeholder="Buscar nesta página" autocomplete="off">
      </div>
      <ul class="chips" aria-label="Ir para um grupo">
        ${p.grupos.map(g => `<li><a href="#${slug(`${rota}-${g.titulo}`)}">${esc(g.titulo)}</a></li>`).join("")}
      </ul>
    </div>
    <div class="vitrine" id="vitrine">
      ${p.grupos.map((g, i) => grupo(rota, g, i)).join("")}
      <p class="sem-resultado oculto" id="sem-resultado">Nenhum sabor encontrado com essa busca.</p>
    </div>
    ${proximaTela(rota)}
  </main>
  ${rodape(p.rodape)}
  ${barraPedido()}`;
}

function paginaBusca(termo) {
  const t = semAcento(termo).trim();
  const achados = ORDEM.flatMap(r => produtosDe(r).map(p => ({ ...p, sec: r }))).filter(p => {
    const texto = semAcento(`${p.item[0]} ${p.item[2] || ""}`);
    return texto.includes(t);
  });
  return `
  ${topo()}
  <main id="conteudo" tabindex="-1">
    <section class="cabeca" aria-label="Resultado da busca">
      <div class="cabeca-in">
        <p class="voltar"><a href="#/" style="color:var(--ouro);font-weight:700">Voltar ao início</a></p>
        <h1 id="titulo" tabindex="-1">Resultados</h1>
        <p class="bajada">${achados.length} ${achados.length === 1 ? "opção encontrada" : "opções encontradas"} para “${esc(termo)}”</p>
      </div>
    </section>
    <div class="vitrine">
      ${achados.length
        ? `<ul class="grade">${achados.map(p => card(p.sec, p.item)).join("")}</ul>`
        : `<p class="sem-resultado">Nenhum sabor encontrado. Tente outro nome ou veja as <a href="#/" style="color:var(--ouro)">categorias</a>.</p>`}
    </div>
  </main>
  ${rodape("Consulte disponibilidade")}
  ${barraPedido()}`;
}

// ---------- Interações ----------
function ligarBuscaDaPagina() {
  const campo = document.getElementById("campo-busca");
  if (!campo) return;
  const sem = document.getElementById("sem-resultado");
  const grupos = [...document.querySelectorAll(".grupo")];
  campo.addEventListener("input", () => {
    const termo = semAcento(campo.value).trim();
    let visiveis = 0;
    grupos.forEach(g => {
      let n = 0;
      g.querySelectorAll(".item-grade").forEach(li => {
        const ok = !termo || li.dataset.busca.includes(termo);
        li.classList.toggle("oculto", !ok);
        if (ok) n++;
      });
      g.classList.toggle("oculto", n === 0);
      visiveis += n;
    });
    sem.classList.toggle("oculto", visiveis > 0);
  });
}

function ligarBuscaInicio() {
  const form = document.getElementById("form-busca");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const q = form.q.value.trim();
    if (q) location.hash = `#/busca/${encodeURIComponent(q)}`;
  });
}

// ---------- Roteador ----------
function render() {
  const h = decodeURIComponent(location.hash.replace(/^#\/?/, ""));
  const app = document.getElementById("app");
  let html;
  if (h.startsWith("busca/")) html = paginaBusca(h.slice(6));
  else {
    const rota = rotaAtual();
    html = rota ? paginaSetor(rota) : paginaInicial();
  }
  app.innerHTML = html;
  const rota = rotaAtual();
  document.title = h.startsWith("busca/")
    ? `Busca • Cardápio Família Dog`
    : rota ? `${PAGINAS[rota].titulo} • Cardápio Família Dog` : "Cardápio Família Dog";
  window.scrollTo({ top: 0, behavior: "auto" });
  ligarBuscaDaPagina();
  ligarBuscaInicio();
}

window.addEventListener("hashchange", render);
if (!location.hash) history.replaceState(null, "", "#/");
render();
