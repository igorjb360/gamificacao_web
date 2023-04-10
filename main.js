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
  var blindado = $("input[name='blindado']:checked").val()
    
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
  
   // Obter a referência da tabela
   var carrosTable = document.getElementById("carrosTable");

   // Criar uma nova linha na tabela
   var newRow = carrosTable.insertRow();
 
   // Criar células para cada coluna na nova linha
   var marcaCell = newRow.insertCell(0);
   var modeloCell = newRow.insertCell(1);
   var anoCell = newRow.insertCell(2);
   var opcoesCell = newRow.insertCell(3);
 
   // Definir o conteúdo das células com os dados do carro
   marcaCell.textContent = carro.marca;
   modeloCell.textContent = carro.modelo;
   anoCell.textContent = carro.ano;
 
   // Criar os botões de editar e excluir
   var editarBtn = document.createElement("button");
   editarBtn.textContent = "Editar";
   editarBtn.addEventListener("click", function() {
    editarFormulario()
   });
 
   var excluirBtn = document.createElement("button");
   excluirBtn.textContent = "Excluir";
   excluirBtn.addEventListener("click", function() {
     carrosTable.deleteRow(newRow.rowIndex);
   });
 
   // Adicionar os botões à célula de opções
   opcoesCell.appendChild(editarBtn);
   opcoesCell.appendChild(excluirBtn);

}

// Função para editar o formulário
function editarFormulario() {
  // Obtém os valores dos campos do formulário
  var marca = document.getElementById("marca").value;
  var modelo = document.getElementById("modelo").value;
  var versao = document.getElementById("versao").value;
  var quilometragem = document.getElementById("quilometragem").value;
  var ano = document.getElementById("ano").value;
  var preco = document.getElementById("preco").value;
  var cor = document.getElementById("cor").value;
  var opcionais = [];

  // Obtém os valores dos checkboxes de opcionais
  var opcionaisCheckbox = document.getElementsByName("opcionais");
  for (var i = 0; i < opcionaisCheckbox.length; i++) {
    if (opcionaisCheckbox[i].checked) {
      opcionais.push(opcionaisCheckbox[i].value);
    }
  }

  // Atualiza os campos do formulário com os valores obtidos
  document.getElementById("marca-edit").value = marca;
  document.getElementById("modelo-edit").value = modelo;
  document.getElementById("versao-edit").value = versao;
  document.getElementById("quilometragem-edit").value = quilometragem;
  document.getElementById("ano-edit").value = ano;
  document.getElementById("preco-edit").value = preco;
  document.getElementById("cor-edit").value = cor;

  // Atualiza os checkboxes de opcionais
  var opcionaisEditCheckbox = document.getElementsByName("opcionais-edit");
  for (var i = 0; i < opcionaisEditCheckbox.length; i++) {
    if (opcionais.includes(opcionaisEditCheckbox[i].value)) {
      opcionaisEditCheckbox[i].checked = true;
    } else {
      opcionaisEditCheckbox[i].checked = false;
    }
  }

  // Exibe o formulário de edição
  document.getElementById("form-edit").style.display = "block";
}

// Função para cancelar a edição do formulário
function cancelarEdicao() {
  // Limpa os campos do formulário de edição
  document.getElementById("marca-edit").value = "";
  document.getElementById("modelo-edit").value = "";
  document.getElementById("versao-edit").value = "";
  document.getElementById("quilometragem-edit").value = "";
  document.getElementById("ano-edit").value = "";
  document.getElementById("preco-edit").value = "";
  document.getElementById("cor-edit").value = "";
  var opcionaisEditCheckbox = document.getElementsByName("opcionais-edit");
  for (var i = 0; i < opcionaisEditCheckbox.length; i++) {
    opcionaisEditCheckbox[i].checked = false;
  }

  // Oculta o formulário de edição
  document.getElementById("form-edit").style.display = "none";
}

