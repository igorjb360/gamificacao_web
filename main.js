// pega o form e adiciona o evento de submit para passar a funcao de salvar o objeto carro
document.getElementById("form").addEventListener("submit", function (event) {
  console.log("oiii");
  event.preventDefault(); // Prevenir o comportamento padrão do formulário
  salvarCarro(); // Chamar a função para salvar o carro no LocalStorage
});

// Função para salvar um carro no LocalStorage
function salvarCarro() {
  var marca = document.getElementById("marca").value;
  var modelo = document.getElementById("modelo").value;
  var versao = document.getElementById("versao").value;
  var quilometragem = document.getElementById("quilometragem").value;
  var ano = document.getElementById("ano").value;
  var preco = document.getElementById("preco").value;
  var cor = document.getElementById("cor").value;
  var opcionais = [];
  var opcionaisCheckboxes = document.getElementsByName("opcionais");
  for (var i = 0; i < opcionaisCheckboxes.length; i++) {
    if (opcionaisCheckboxes[i].checked) {
      opcionais.push(opcionaisCheckboxes[i].value);
    }
  }
  var blindado = document.getElementById("blindado").value;

  // Cria um objeto com os dados do carro
  var carro = {
    marca: marca,
    modelo: modelo,
    versao: versao,
    quilometragem: quilometragem,
    ano: ano,
    preco: preco,
    cor: cor,
    opcionais: opcionais,
    blindado: blindado,
  };

  let carros = [];
  if (localStorage.getItem("carros")) {
    carros = JSON.parse(localStorage.getItem("carros"));
  }
  carros.push(carro); // Adicionar novo carro ao array de carros
  localStorage.setItem("carros", JSON.stringify(carros)); // Salvar carros no LocalStorage

  // Limpa os campos do formulário
  document.getElementById("marca").value = "";
  document.getElementById("modelo").value = "";
  document.getElementById("versao").value = "";
  document.getElementById("quilometragem").value = "";
  document.getElementById("ano").value = "";
  document.getElementById("preco").value = "";
  document.getElementById("cor").value = "";
  for (var i = 0; i < opcionaisCheckboxes.length; i++) {
    opcionaisCheckboxes[i].checked = false;
  }
}
