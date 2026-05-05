// ================================================================
// DO ZERO A CRAQUE — dados.js
// Edite este arquivo no GitHub para atualizar os jogos do dia
// Formato da data: AAAA-MM-DD  ex: 2026-05-06
// ================================================================

const DADOS = {

  // ══════════════════════════════════════════
  // QUIZ — 3 jogadores por dia
  // dificuldade: "facil" | "medio" | "dificil"
  // ══════════════════════════════════════════
  quiz: [
    {
      data: "2026-05-05",
      rodada: 1,
      dificuldade: "facil",
      nome: "Vinicius Junior",
      posicao: "ATA",
      idade: 25,
      nacionalidade: "BRA",
      liga: "La Liga",
      clube: "Real Madrid",
      gols_temporada: 22,
      assists_temporada: 11,
      altura: "1.76m",
      pe: "DIR",
      emoji: "🇧🇷",
      pista_clube:   "Maior campeão europeu de todos os tempos — camisa branca",
      pista_selecao: "Convocado 30+ vezes pela Seleção Brasileira",
      pista_origem:  "Nasceu em São Gonçalo, Rio de Janeiro",
      pista_titulo:  "Campeão da Champions League 2024",
      pista_camisa:  "Camisa 7 no clube, 11 na Seleção",
      pista_apelido: "Apelido: Vini Jr — Melhor do Mundo 2024"
    },
    {
      data: "2026-05-05",
      rodada: 2,
      dificuldade: "medio",
      nome: "Lautaro Martinez",
      posicao: "ATA",
      idade: 28,
      nacionalidade: "ARG",
      liga: "Serie A",
      clube: "Inter de Milão",
      gols_temporada: 22,
      assists_temporada: 5,
      altura: "1.74m",
      pe: "DIR",
      emoji: "🇦🇷",
      pista_clube:   "Joga de azul e preto na capital da moda italiana",
      pista_selecao: "Campeão do Mundo com a Argentina em 2022",
      pista_origem:  "Nasceu em Bahía Blanca, Argentina",
      pista_titulo:  "Fez o gol do título da Copa América 2024",
      pista_camisa:  "Camisa 10 na Inter de Milão",
      pista_apelido: "Apelido: El Toro"
    },
    {
      data: "2026-05-05",
      rodada: 3,
      dificuldade: "dificil",
      nome: "Cole Palmer",
      posicao: "MEI",
      idade: 24,
      nacionalidade: "ENG",
      liga: "Premier League",
      clube: "Chelsea",
      gols_temporada: 20,
      assists_temporada: 12,
      altura: "1.89m",
      pe: "ESQ",
      emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      pista_clube:   "Clube londrino que joga em Stamford Bridge",
      pista_selecao: "Vice-campeão da Euro 2024 com a Inglaterra",
      pista_origem:  "Cria do Manchester City — nunca jogou lá",
      pista_titulo:  "Fez o gol da Inglaterra na final da Euro 2024",
      pista_camisa:  "Camisa 20",
      pista_apelido: "Apelido: Cold Palmer"
    }
  ],

  // ══════════════════════════════════════════
  // IMPOSTOR — 1 por dia
  // impostor: índice (0,1,2 ou 3) do jogador que NUNCA jogou no time
  // ══════════════════════════════════════════
  impostor: [
    {
      data: "2026-05-05",
      time: "Real Madrid",
      impostor: 2,
      jogadores: [
        { nome: "Cristiano Ronaldo", nac: "🇵🇹", detalhe: "Atacante · 2009–2018 · 450 gols" },
        { nome: "Sergio Ramos",      nac: "🇪🇸", detalhe: "Zagueiro · 2005–2021 · 5 UCL"   },
        { nome: "Lionel Messi",      nac: "🇦🇷", detalhe: "Atacante · ???"                  },
        { nome: "Karim Benzema",     nac: "🇫🇷", detalhe: "Atacante · 2009–2023 · 354 gols" }
      ],
      evidencias: [
        { ico: "🏆", txt: "Títulos conquistados pelo clube",  rev: "CR7: 4 UCL · Ramos: 5 UCL · Benzema: 5 UCL · Messi: 0" },
        { ico: "⚽", txt: "Gols pelo Real Madrid",            rev: "CR7: 450 · Ramos: 101 · Benzema: 354 · Messi: 0"       },
        { ico: "📅", txt: "Anos no clube",                    rev: "CR7: 09-18 · Ramos: 05-21 · Benzema: 09-23 · Messi: NUNCA" },
        { ico: "💡", txt: "O impostor é rival histórico",     rev: "Quem nunca jogou pelo lado merengue?" }
      ]
    }
  ],

  // ══════════════════════════════════════════
  // ESCUDO — 5 por dia
  // correct: nome exato da resposta certa
  // ══════════════════════════════════════════
  escudo: [
    { data: "2026-05-05", n: 1, correct: "Real Madrid", emoji: "⭐", opcoes: ["Barcelona","Real Madrid","Atletico Madrid","PSG"],       pistas: ["Joga na capital espanhola","Mais Champions da história","Apelido: Os Merengues"] },
    { data: "2026-05-05", n: 2, correct: "Flamengo",    emoji: "🔴⚫", opcoes: ["Fluminense","Flamengo","Vasco","Botafogo"],            pistas: ["Maior torcida do Brasil","Campeão Libertadores 2019 e 2022","Apelido: Mengão"] },
    { data: "2026-05-05", n: 3, correct: "Barcelona",   emoji: "🔵🔴", opcoes: ["Barcelona","Real Madrid","Valencia","Sevilla"],        pistas: ["Clube catalão — veste azul e grená","Camp Nou","La Masia — base mais famosa"] },
    { data: "2026-05-05", n: 4, correct: "Manchester City", emoji: "🩵", opcoes: ["Man United","Manchester City","Chelsea","Arsenal"], pistas: ["Gigante azul celeste de Manchester","Campeão da tríplice coroa 22-23","Etihad Stadium"] },
    { data: "2026-05-05", n: 5, correct: "Bayern",      emoji: "🍺", opcoes: ["Dortmund","Bayern","Leipzig","Leverkusen"],              pistas: ["Gigante da Baviera — sul da Alemanha","Maior campeão alemão","Apelido: Die Roten"] }
  ],

  // ══════════════════════════════════════════
  // CARREIRA — 3 por dia
  // ══════════════════════════════════════════
  carreira: [
    {
      data: "2026-05-05", n: 1,
      nome: "Ronaldo Fenômeno",
      gols: 352, clubes: 8, anos: 18, assists: 150,
      copas: 2, ucl: 0, baloes: 2, pais: "BRA",
      clube1: "Cruzeiro (93-94)", clube2: "PSV (94-95)", clube3: "Barcelona (96-97)",
      dica: "Dois gols na final da Copa 2002 contra a Alemanha"
    },
    {
      data: "2026-05-05", n: 2,
      nome: "Zinedine Zidane",
      gols: 156, clubes: 5, anos: 17, assists: 200,
      copas: 1, ucl: 1, baloes: 3, pais: "FRA",
      clube1: "Cannes (89-92)", clube2: "Bordeaux (92-96)", clube3: "Real Madrid (01-06)",
      dica: "Cabeçada em Materazzi na final da Copa 2006"
    },
    {
      data: "2026-05-05", n: 3,
      nome: "Ronaldinho Gaúcho",
      gols: 98, clubes: 6, anos: 14, assists: 170,
      copas: 1, ucl: 1, baloes: 2, pais: "BRA",
      clube1: "Grêmio (98-01)", clube2: "PSG (01-03)", clube3: "Barcelona (03-08)",
      dica: "Bola de Ouro em 2004 e 2005 pelo Barcelona"
    }
  ],

  // ══════════════════════════════════════════
  // ADIVINHE O ANO — 3 fatos por dia
  // ══════════════════════════════════════════
  ano: [
    { data: "2026-05-05", n: 1, ano: 1998, fato: "Brasil eliminado nas quartas pela França. Ronaldo jogou com convulsões na véspera. Zidane fez dois gols de cabeça.", categoria: "Copa do Mundo", fase: "Quartas", local: "França",  dica: "Copa sediada em país europeu ocidental" },
    { data: "2026-05-05", n: 2, ano: 2014, fato: "O Mineirazo. Alemanha goleou o Brasil na semifinal. 4 gols em 6 minutos.",                                           categoria: "Copa do Mundo", fase: "Semifinal", local: "Brasil", dica: "Copa no Brasil — o Brasil era favorito" },
    { data: "2026-05-05", n: 3, ano: 1986, fato: "Maradona marca a Mão de Deus e o Gol do Século contra a Inglaterra.",                                                categoria: "Copa do Mundo", fase: "Quartas", local: "México",  dica: "Copa no mesmo país da Copa de 1970" }
  ],

  // ══════════════════════════════════════════
  // ACERTE O CLUBE — 3 por dia
  // correct: nome exato da resposta certa (deve bater com uma das opcoes)
  // ══════════════════════════════════════════
  clube: [
    { data: "2026-05-05", n: 1, jogador: "Rafael Leão",      pos: "Atacante", emoji: "🇵🇹", correct: "Milan",        opcoes: ["Milan","Juventus","Inter de Milão","Napoli"],       pista: "Joga em San Siro — veste vermelho e preto" },
    { data: "2026-05-05", n: 2, jogador: "Bukayo Saka",      pos: "Atacante", emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", correct: "Arsenal",      opcoes: ["Arsenal","Chelsea","Liverpool","Tottenham"],        pista: "Clube vermelho do norte de Londres" },
    { data: "2026-05-05", n: 3, jogador: "Vinicius Junior",  pos: "Atacante", emoji: "🇧🇷", correct: "Real Madrid",  opcoes: ["Real Madrid","Barcelona","PSG","Manchester City"],  pista: "Maior campeão europeu de todos os tempos" }
  ],

  // ══════════════════════════════════════════
  // QUEM MARCOU — 1 por dia
  // correct: nome exato da resposta certa
  // ══════════════════════════════════════════
  gol: [
    {
      data: "2026-05-05",
      descricao: "Recebeu no meio-campo, driblou 4 jogadores em 60 metros e chutou no canto. O narrador gritou o nome 34 vezes.",
      categoria: "Copa do Mundo", fase: "Quartas", local: "Azteca México", ano: 1986,
      correct: "Maradona",
      opcoes: ["Maradona","Pelé","Zidane","Cristiano"],
      pistas: [
        "Camisa 10 da seleção argentina",
        "Também fez a Mão de Deus no mesmo jogo",
        "Eleito Gol do Século pela FIFA em 2002"
      ]
    }
  ],

  // ══════════════════════════════════════════
  // PLACAR — 1 por dia
  // gols: [casa, fora]
  // ══════════════════════════════════════════
  placar: [
    {
      data: "2026-05-05",
      time_casa: "Alemanha", time_fora: "Brasil",
      gols: [7, 1],
      categoria: "Copa do Mundo", fase: "Semifinal",
      local: "Mineirão, Belo Horizonte", ano: 2014,
      curiosidade: "O Mineirazo — 4 gols em 6 minutos"
    }
  ],

  // ══════════════════════════════════════════
  // VERSUS — 5 duelos por dia
  // correct: 0=esquerda ganhou | 1=direita ganhou | -1=empate
  // ══════════════════════════════════════════
  versus: [
    { data: "2026-05-05", n: 1, pergunta: "QUEM TEM MAIS BALÕES DE OURO?",         f0:"🇦🇷", n0:"MESSI",    c0:"Barcelona/PSG/Miami", s0:"8", f1:"🇵🇹", n1:"CRISTIANO", c1:"Real Madrid/Al-Nassr", s1:"5", correct: 0, exp: "Messi tem 8 Balões de Ouro — recorde absoluto" },
    { data: "2026-05-05", n: 2, pergunta: "QUEM MARCOU MAIS GOLS EM COPAS?",       f0:"🇧🇷", n0:"RONALDO",  c0:"Brasil 1994-2006",    s0:"15",f1:"🇩🇪", n1:"KLOSE",     c1:"Alemanha 1998-2014",  s1:"16",correct: 1, exp: "Klose tem 16 gols — recorde histórico" },
    { data: "2026-05-05", n: 3, pergunta: "QUAL TRANSFERÊNCIA FOI MAIS CARA?",     f0:"🇧🇷", n0:"NEYMAR",   c0:"Barça → PSG 2017",   s0:"€222M", f1:"🇫🇷", n1:"MBAPPÉ", c1:"PSG → Real Madrid",  s1:"€180M", correct: 0, exp: "Neymar ainda é a mais cara — €222M" },
    { data: "2026-05-05", n: 4, pergunta: "QUEM FEZ MAIS GOLS EM UMA TEMPORADA?", f0:"🇳🇴", n0:"HAALAND",  c0:"Man City PL 22-23",  s0:"36",f1:"🇵🇱", n1:"LEWANDOWSKI",c1:"Bayern BL 20-21",    s1:"41",correct: 1, exp: "Lewandowski fez 41 gols — recorde da Bundesliga" },
    { data: "2026-05-05", n: 5, pergunta: "QUAL CLUBE TEM MAIS CHAMPIONS?",        f0:"🇪🇸", n0:"REAL MADRID",c0:"Espanha",           s0:"15",f1:"🇪🇸", n1:"BARCELONA", c1:"Espanha",            s1:"5", correct: 0, exp: "Real Madrid tem 15 Champions" }
  ],

  // ══════════════════════════════════════════
  // FORCA — 1 por dia
  // palavra: em MAIÚSCULO sem acento
  // ══════════════════════════════════════════
  forca: [
    {
      data: "2026-05-05",
      palavra: "HAALAND",
      nome_completo: "Erling Haaland",
      dica1: "Posição: Atacante · Clube: Manchester City",
      dica2: "País: Noruega 🇳🇴",
      dica3: "Apelido: Cometa — artilheiro histórico da Premier League"
    }
  ]

};
