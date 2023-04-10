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
      id: Date.now(),
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
    editarFormulario(carro.id.blindado)
   });
 
   var excluirBtn = document.createElement("button");
   excluirBtn.textContent = "Excluir";
   excluirBtn.addEventListener("click", function() {
     carrosTable.deleteRow(newRow.rowIndex);
   });
 
   // Adicionar os botões à célula de opções
   opcoesCell.appendChild(editarBtn);
   opcoesCell.appendChild(excluirBtn);

   //Essa funcao nao esta funcionando corretamente 
    function editarFormulario(id) {
      var redireciona = document.getElementById("form")
      if (redireciona) {
        // Usa o método scrollIntoView() para rolar a página até o elemento alvo
        redireciona.scrollIntoView();
        
        // Busca o objeto do carro pelo ID no LocalStorage   
  var carros = JSON.parse(localStorage.getItem("carros")) || [];
  var carroIndex = -1;
  for (var i = 0; i < carros.length; i++) {
    if (carros[i].id === id) {
      carroIndex = i;
      break;
    }
  }

  // Verifica se o carro foi encontrado
  if (carroIndex === -1) {
    console.error("Carro não encontrado para o ID:", id);
    return;
  }

  // Preenche os campos do formulário com os dados do carro
  document.getElementById("marca").value = carros[carroIndex].marca;
  document.getElementById("modelo").value = carros[carroIndex].modelo;
  document.getElementById("versao").value = carros[carroIndex].versao;
  document.getElementById("quilometragem").value = carros[carroIndex].quilometragem;
  document.getElementById("ano").value = carros[carroIndex].ano;
  document.getElementById("preco").value = carros[carroIndex].preco;
  document.getElementById("cor").value = carros[carroIndex].cor;
  var opcionaisCheckboxes = document.getElementsByName("opcionais");
  for (var i = 0; i < opcionaisCheckboxes.length; i++) {
    opcionaisCheckboxes[i].checked = carros[carroIndex].opcionais.includes(opcionaisCheckboxes[i].value);
  }
  document.querySelector("input[name='blindado'][value='" + carros[carroIndex].blindado + "']").checked = true;

  // Adiciona evento para o envio do formulário
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir o comportamento padrão do formulário

    // Atualiza os dados do carro no objeto do carro
    carros[carroIndex].marca = document.getElementById("marca").value;
    carros[carroIndex].modelo = document.getElementById("modelo").value;
    carros[carroIndex].versao = document.getElementById("versao").value;
    carros[carroIndex].quilometragem = document.getElementById("quilometragem").value;
    carros[carroIndex].ano = document.getElementById("ano").value;
    carros[carroIndex].preco = document.getElementById("preco").value;
    carros[carroIndex].cor = document.getElementById("cor").value;
    carros[carroIndex].opcionais = [];
    for (var i = 0; i < opcionaisCheckboxes.length; i++) {
      if (opcionaisCheckboxes[i].checked) {
        carros[carroIndex].opcionais.push(opcionaisCheckboxes[i].value);
      }
    }
    carros[carroIndex].blindado = document.querySelector("input[name='blindado']:checked").value;

    // Atualiza o LocalStorage com os novos dados do carro
    localStorage.setItem("carros", JSON.stringify(carros));

  });

    }
  
    
   }
  
}

