// Função para salvar um carro no LocalStorage
function salvarCarro() {
  const marca = document.getElementById("marca").value;
  const modelo = document.getElementById("modelo").value;
  const ano = document.getElementById("ano").value;
  const versao = document.getElementById("versao").value;
  const quilometragem = document.getElementById("quilometragem").value;
  const preco = document.getElementById("preco").value;
  const cor = document.getElementById("cor").value;
  const opcionais_airbag = document.getElementById("opcionais_airbag").value;
  const opcionais_ar_condicionado = document.getElementById(
    "opcionais_ar_condicionado"
  ).value;
  const opcionais_bancos_couro = document.getElementById(
    "opcionais_bancos_couro"
  ).value;
  const opcionais_computador_bordo = document.getElementById(
    "opcionais_computador_bordo"
  ).value;
  const opcionais_controle_aut = document.getElementById(
    "opcionais_controle_aut"
  ).value;
  const opcionais_controle_tracao = document.getElementById(
    "opcionais_controle_tracao"
  ).value;
  const opcionais_direcao_hidr = document.getElementById(
    "opcionais_direcao_hidr"
  ).value;
  const opcionais_freio_abs = document.getElementById(
    "opcionais_freio_abs"
  ).value;
  const opcionais_rodas_liga_leve = document.getElementById(
    "opcionais_rodas_liga_leve"
  ).value;
  const opcionais_sens_estacionamento = document.getElementById(
    "opcionais_sens_estacionamento"
  ).value;
  const opcionais_teto_solar = document.getElementById(
    "opcionais_teto_solar"
  ).value;
  const opcionais_vidros_eletricos = document.getElementById(
    "opcionais_vidros_eletricos"
  ).value;
  const blindado = document.getElementById("blindado").value;

  const carro = {
    marca,
    modelo,
    ano,
    versao,
    quilometragem,
    preco,
    cor,
    opcionais_airbag,
    opcionais_ar_condicionado,
    opcionais_bancos_couro,
    opcionais_computador_bordo,
    opcionais_controle_aut,
    opcionais_controle_tracao,
    opcionais_direcao_hidr,
    opcionais_freio_abs,
    opcionais_rodas_liga_leve,
    opcionais_sens_estacionamento,
    opcionais_teto_solar,
    opcionais_vidros_eletricos,
    blindado,
  }; // Cria objeto carro

  // Verificar se já existem carros salvos no LocalStorage
  let carros = [];
  if (localStorage.getItem('carros')) {
    carros = JSON.parse(localStorage.getItem('carros'));
  }
  carros.push(carro); // Adicionar novo carro ao array de carros
  localStorage.setItem('carros', JSON.stringify(carros)); // Salvar carros no LocalStorage

  exibirCarros(); // Atualizar a lista de carros exibida
  document.getElementById('carForm').reset(); // Limpar o formulário
}
