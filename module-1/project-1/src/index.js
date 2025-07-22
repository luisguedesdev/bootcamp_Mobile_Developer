const player1 = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const player2 = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

const player3 = {
  NOME: "Peach",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 2,
  PONTOS: 0,
};

const player4 = {
  NOME: "Bowser",
  VELOCIDADE: 5,
  MANOBRABILIDADE: 2,
  PODER: 5,
  PONTOS: 0,
};

const player5 = {
  NOME: "Yoshi",
  VELOCIDADE: 2,
  MANOBRABILIDADE: 4,
  PODER: 3,
  PONTOS: 0,
};

const player6 = {
  NOME: "Donkey Kong",
  VELOCIDADE: 2,
  MANOBRABILIDADE: 2,
  PODER: 5,
  PONTOS: 0,
};

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1; //Função que simula o lançamento de um dado de 6 lados
} //async é para a função esperar para ser executada

async function getRandomBlock() {
  let random = Math.random();
  let result;
  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
      break;
  }
  return result;
}

async function logRollResult(characterName, block, diceResult, attibute) {
  console.log(
    `${characterName} rolou um dado de ${block} ${diceResult} + ${attibute} = ${
      diceResult + attibute
    }`
  );
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    //Sortear os blocos
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    //Rolar os dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    //Teste de Habilidade
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "RETA") {
      totalTestSkill1 = character1.VELOCIDADE + diceResult1;
      totalTestSkill2 = character2.VELOCIDADE + diceResult2;
      await logRollResult(
        character1.NOME,
        "velocidade",
        diceResult1,
        character1.VELOCIDADE
      );
      await logRollResult(
        character2.NOME,
        "velocidade",
        diceResult2,
        character2.VELOCIDADE
      );
    }
    if (block === "CURVA") {
      totalTestSkill1 = character1.MANOBRABILIDADE + diceResult1;
      totalTestSkill2 = character2.MANOBRABILIDADE + diceResult2;

      await logRollResult(
        character1.NOME,
        "manobrabilidade",
        diceResult1,
        character1.MANOBRABILIDADE
      );
      await logRollResult(
        character2.NOME,
        "manobrabilidade",
        diceResult2,
        character2.MANOBRABILIDADE
      );
    }
    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.PODER;
      let powerResult2 = diceResult2 + character2.PODER;
      console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊`);

      await logRollResult(
        character1.NOME,
        "poder",
        diceResult1,
        character1.PODER
      );
      await logRollResult(
        character2.NOME,
        "poder",
        diceResult2,
        character2.PODER
      );

      if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
        character2.PONTOS--;
        console.log(`${character1.NOME} ganhou a batalha!`);
        console.log(`${character2.NOME} perdeu 1 ponto! 🐢`);
      }
      if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
        character1.PONTOS--;
        console.log(`${character2.NOME} ganhou a batalha!`);
        console.log(`${character1.NOME} perdeu 1 ponto! 🐢`);
      }
    }

    //Verificando o vencedor da rodada
    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${character1.NOME} marcou ponto!`);
      character1.PONTOS++;
    }
    if (totalTestSkill1 < totalTestSkill2) {
      console.log(`${character2.NOME} marcou ponto!`);
      character2.PONTOS++;
    }

    console.log("----------------------------------------------");
  }
}

async function declareWinner(character1, character2) {
  console.log("-----------------------------------------------");
  console.log("🏁🏆 Fim da corrida! 🏆🏁");
  console.log(`${character1.NOME} - Pontos: ${character1.PONTOS}`);
  console.log(`${character2.NOME} - Pontos: ${character2.PONTOS}`);

  if (character1.PONTOS > character2.PONTOS) {
    console.log(`${character1.NOME} é o grande vencedor! 🎉`);
  } else if (character2.PONTOS > character1.PONTOS) {
    console.log(`${character2.NOME} é o grande vencedor! 🎉`);
  } else {
    console.log("É um empate! Ambos os jogadores são vencedores! 🤝");
  }
}

(async function main() {
  console.log("Bem-vindo ao jogo de dados Mario Kart!");
  console.log(`Os jogadores são: \n 1. ${player1.NOME} \n 2. ${player2.NOME}`); // TODO: Adicionar menu para escolher o personagem, posteriormente
  console.log("🏁🚨 A corrida vai começar...");
  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
  console.log("Obrigado por jogar! Até a próxima! 👋");
})();
