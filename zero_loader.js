// ================================================================
// zero_loader.js — lê DADOS e alimenta todos os jogos
// Adicionar no final do index.html, ANTES do </script>
// ================================================================

function getDia(arr) {
  if (!arr || !arr.length) return null;
  const hoje = new Date().toISOString().split('T')[0];
  const doHoje = arr.filter(r => r.data === hoje);
  return doHoje.length ? doHoje : arr.filter(r => r.data === arr[0].data);
}

// Monta array de pistas a partir de um registro do quiz
function montarPistas(r) {
  return [
    { icon: r.emoji || '🏟️', txt: r.pista_clube },
    { icon: '🌎', txt: r.pista_selecao },
    { icon: '📍', txt: r.pista_origem },
    { icon: '🏆', txt: r.pista_titulo },
    { icon: '👕', txt: r.pista_camisa },
    { icon: '🎭', txt: r.pista_apelido }
  ];
}

// Aplica pistas nos botões de um card específico (sem afetar outros cards)
function aplicarPistasNoCard(r) {
  const rodadaNum = r.rodada || 1;
  // Tenta achar o card pelo data-rodada; fallback: pega o card ativo
  let hintGrid = document.querySelector(`#g-quiz .rodada-card[data-rodada="${rodadaNum}"] .hint-grid`);
  if (!hintGrid) {
    // fallback: usa o primeiro hint-grid visível
    hintGrid = document.querySelector('#g-quiz .rodada-card.active .hint-grid')
            || document.querySelector('#g-quiz .hint-grid');
  }
  if (!hintGrid) return;

  const pistas = montarPistas(r);

  // Limpa estado visual dos botões deste card
  hintGrid.querySelectorAll('.hint-btn').forEach(b => {
    b.classList.remove('used');
    b.style.borderColor = '';
    b.style.background = '';
  });

  // Atribui onclick correto
  hintGrid.querySelectorAll('.hint-btn').forEach((btn, i) => {
    if (pistas[i] && pistas[i].txt) {
      const p = pistas[i];
      btn.onclick = function() { qHint(this, p.icon, p.txt, 50); };
    }
  });
}

function carregarTodos() {
  if (typeof DADOS === 'undefined') { console.warn('[ZERO] dados.js não carregado'); return; }
  console.log('[ZERO] Carregando dados...');

  // ── QUIZ ──
  const quiz = getDia(DADOS.quiz);
  if (quiz && quiz.length) {
    const r = quiz.find(q => q.rodada === 1) || quiz[0];
    window._QUIZ = { rows: quiz, idx: 0, atual: r };

    // Stats na tela
    const vals = [r.posicao, r.idade, r.nacionalidade, r.liga,
                  r.gols_temporada, r.assists_temporada, r.altura,
                  r.pe === 'DIR' ? 'DIR' : 'ESQ'];
    document.querySelectorAll('#g-quiz .scv').forEach((el, i) => {
      if (vals[i] !== undefined) el.textContent = vals[i];
    });

    // Pistas nos botões — apenas do card da rodada 1
    aplicarPistasNoCard(r);

    console.log('[ZERO] Quiz:', r.nome);
  }

  // ── IMPOSTOR ──
  const imp = getDia(DADOS.impostor);
  if (imp && imp.length) {
    const d = imp[0];
    window._IMP_CORRETO = d.impostor;
    d.jogadores.forEach((j, i) => {
      const card = document.getElementById('ic' + i);
      if (card) {
        card.querySelector('.imp-name').textContent = j.nome;
        card.querySelector('.imp-det').textContent = j.detalhe;
        card.querySelector('.imp-photo div').textContent = j.nac;
      }
    });
    document.querySelectorAll('.evid-btn').forEach((btn, i) => {
      if (d.evidencias[i]) {
        const ev = d.evidencias[i];
        btn.onclick = function() { iEv(this, ev.rev); };
        btn.closest('.evid-row').querySelector('.evid-txt').textContent = ev.txt;
        btn.closest('.evid-row').querySelector('.evid-ico').textContent = ev.ico;
      }
    });
    console.log('[ZERO] Impostor: idx', d.impostor);
  }

  // ── ESCUDO ──
  const escudo = getDia(DADOS.escudo);
  if (escudo && escudo.length) {
    window._ESCUDO_HOJE = escudo;
    window._ESC_IDX = 0;
    carregarProximoEscudo();
    console.log('[ZERO] Escudo:', escudo.length, 'times');
  }

  // ── CARREIRA ──
  const carr = getDia(DADOS.carreira);
  if (carr && carr.length) {
    window._CARREIRA_HOJE = carr;
    const c = carr[0];
    const scvs = document.querySelectorAll('#g-carreira .scv');
    if (scvs[0]) scvs[0].textContent = c.gols;
    if (scvs[1]) scvs[1].textContent = c.clubes;
    if (scvs[2]) scvs[2].textContent = c.anos;
    console.log('[ZERO] Carreira:', c.nome);
  }

  // ── ADIVINHE O ANO ──
  const ano = getDia(DADOS.ano);
  if (ano && ano.length) {
    const f = ano[0];
    window._ANO_CORRETO = f.ano;
    const fatotxt = document.querySelector('.fact-text');
    if (fatotxt) fatotxt.textContent = '"' + f.fato + '"';
    const tagsDiv = document.querySelector('#g-ano .fact-card > div:last-child');
    if (tagsDiv) tagsDiv.innerHTML =
      '<span class="tag tag-dim">' + f.categoria + '</span>' +
      '<span class="tag tag-dim">' + f.fase + '</span>' +
      '<span class="tag tag-dim">' + f.local + '</span>';
    console.log('[ZERO] Ano:', f.ano);
  }

  // ── ACERTE O CLUBE ──
  const clube = getDia(DADOS.clube);
  if (clube && clube.length) {
    window._CLUBE_HOJE = clube;
    const c = clube[0];
    window._CLUBE_ANS = c.correct;
    const foto = document.getElementById('clubePlayerPhoto');
    if (foto) foto.textContent = c.emoji;
    const nome = document.getElementById('clubePlayerName');
    if (nome) nome.textContent = c.jogador;
    const pos = document.getElementById('clubePlayerPos');
    if (pos) pos.textContent = 'Posição: ' + c.pos;
    const opts = document.getElementById('clubeOpts');
    if (opts) {
      opts.innerHTML = c.opcoes.map(op =>
        '<button class="opt-card" onclick="clubeGuess(this,\'' + op + '\',' + (op === c.correct) + ')">' + op + '</button>'
      ).join('');
    }
    console.log('[ZERO] Clube:', c.jogador, '→', c.correct);
  }

  // ── QUEM MARCOU ──
  const gol = getDia(DADOS.gol);
  if (gol && gol.length) {
    const g = gol[0];
    window._GOL_CORRETO = g.correct;
    const desc = document.querySelector('.goal-text');
    if (desc) desc.textContent = '"' + g.descricao + '"';
    const tags = document.querySelector('#g-gol .goal-card > div:last-child');
    if (tags) tags.innerHTML =
      '<span class="tag tag-gold">' + g.categoria + ' ' + g.ano + '</span>' +
      '<span class="tag tag-dim">' + g.fase + '</span>' +
      '<span class="tag tag-dim">' + g.local + '</span>';
    const opts = document.querySelector('#g-gol .opts-2x2');
    if (opts) {
      opts.innerHTML = g.opcoes.map(op =>
        '<button class="opt-card" onclick="golGuess(this,\'' + op + '\',' + (op === g.correct) + ')">' + op + '</button>'
      ).join('');
    }
    if (g.pistas && g.pistas[0]) {
      const p1 = document.querySelector('#g-gol .card-body > div > div:first-child');
      if (p1) p1.textContent = '✓ ' + g.pistas[0];
    }
    console.log('[ZERO] Gol:', g.correct);
  }

  // ── PLACAR ──
  const placar = getDia(DADOS.placar);
  if (placar && placar.length) {
    const p = placar[0];
    window.PL_ANSWER = p.gols;
    const title = document.querySelector('.placar-match-title');
    if (title) title.innerHTML = p.time_casa.toUpperCase() + ' × ' + p.time_fora.toUpperCase() +
      '<br><span style="font-size:16px;color:var(--td)">' + p.fase + ' · ' + p.local + ' · ' + p.ano + '</span>';
    const label = document.querySelector('.placar-match-label');
    if (label) label.textContent = 'JOGO HISTÓRICO — ' + p.categoria.toUpperCase();
    const inpA = document.getElementById('plA');
    const inpB = document.getElementById('plB');
    if (inpA) inpA.placeholder = p.time_casa.substring(0,3).toUpperCase();
    if (inpB) inpB.placeholder = p.time_fora.substring(0,3).toUpperCase();
    console.log('[ZERO] Placar:', p.time_casa, p.gols[0], 'x', p.gols[1], p.time_fora);
  }

  // ── VERSUS ──
  const versus = getDia(DADOS.versus);
  if (versus && versus.length) {
    window.VERSUS_DATA = versus.map(v => ({
      q: v.pergunta,
      f0: v.f0, n0: v.n0, c0: v.c0, s0: v.s0,
      f1: v.f1, n1: v.n1, c1: v.c1, s1: v.s1,
      correct: v.correct
    }));
    vIdx = 0; vCorrect = 0; vWrong = 0; vPts = 0;
    loadVersus();
    console.log('[ZERO] Versus:', versus.length, 'duelos');
  }

  // ── FORCA ──
  const forca = getDia(DADOS.forca);
  if (forca && forca.length) {
    const f = forca[0];
    window.TRAV_WORD = f.palavra.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    window.TRAV_HINT = f.dica1;
    initTrav();
    const el = document.getElementById('travHint');
    if (el) el.innerHTML = '<span style="margin-right:6px">💡</span>' + f.dica1;
    console.log('[ZERO] Forca:', window.TRAV_WORD);
  }

  if (window.ZERO) ZERO.init();
  console.log('[ZERO] Pronto!');
}

// Escudo: carregar próximo do dia
function carregarProximoEscudo() {
  const escudo = window._ESCUDO_HOJE;
  if (!escudo || !escudo.length) return;
  const idx = window._ESC_IDX || 0;
  if (idx >= escudo.length) return;
  const e = escudo[idx];
  window.CLUBE_ANS = e.correct;
  const emoji = document.getElementById('shEmoji');
  if (emoji) emoji.textContent = e.emoji;
  const opts = document.querySelector('#g-escudo .opts-2x2');
  if (opts) {
    opts.innerHTML = e.opcoes.map(op =>
      '<button class="opt-card" onclick="escGuess(this,\'' + op + '\')">' + op + '</button>'
    ).join('');
  }
  window.eHintTexts = e.pistas;
  window.eHints = 0;
}

// Chamar quando a página carregar
document.addEventListener('DOMContentLoaded', carregarTodos);

window.qProximo = function() {
  if (!window._QUIZ) return;
  const quiz = window._QUIZ.rows;
  const idx = (window._QUIZ.idx || 0) + 1;
  if (idx >= quiz.length) return;
  window._QUIZ.idx = idx;
  const r = quiz[idx];
  window._QUIZ.atual = r;

  // Atualiza stats
  const vals = [r.posicao, r.idade, r.nacionalidade, r.liga,
                r.gols_temporada, r.assists_temporada, r.altura,
                r.pe === 'DIR' ? 'DIR' : 'ESQ'];
  document.querySelectorAll('#g-quiz .scv').forEach((el, i) => {
    if (vals[i] !== undefined) el.textContent = vals[i];
  });

  // Limpa caixa de dicas abertas
  const box = document.getElementById('qHintBox');
  if (box) { box.innerHTML = ''; box.classList.remove('show'); }

  // Aplica pistas APENAS no card da nova rodada (limpa + reatribui onclick)
  aplicarPistasNoCard(r);

  // Limpa input e tentativas
  const inp = document.getElementById('qInp');
  if (inp) inp.value = '';
  const guesses = document.getElementById('qGuesses');
  if (guesses) guesses.innerHTML = '';
  const dots = document.querySelectorAll('#qDots .dot');
  dots.forEach(d => { d.className = 'dot'; });
  if (dots[0]) dots[0].classList.add('on');
};
