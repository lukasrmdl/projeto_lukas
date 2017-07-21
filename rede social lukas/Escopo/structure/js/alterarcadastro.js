jQuery(function($){
	$("#cpf").mask("999.999.999-99");
	$("#cep").mask("99999-999");
});
$("#logo").on("click", function log() {
	window.location = "login.html";
})
var userData = JSON.parse(localStorage.getItem('userData'));
$("#nome").val(userData.first_name);
$("#sobrenome").val(userData.last_name);
$("#email").val(userData.email);
$("#idade").val(userData.age);
$("#cpf").val(userData.cpf);
$("#cep").val(userData.cep);
$("#endereco").val(userData.address);
$("#senha").val(userData.password);
$("form").on("submit", function () {
	var nome = $("#nome").val();
	var sobrenome = $("#sobrenome").val();
	var email = $("#email").val();
	var idade = $("#idade").val();
	var cpf = $("#cpf").val();
	var cep = $("#cep").val();
	var endereco = $("#endereco").val();
	var senha = $("#senha").val();


	if (nome == "" || sobrenome == "" || email == "" || idade == "" || cpf == "" || cep == "" || endereco == "" || senha == "") {
		if (nome == "") {
			$("#nome").addClass("erro");
		} else {
			$("#nome").removeClass("erro");
		}

		if (sobrenome == "") {
			$("#sobrenome").addClass("erro");
		} else {
			$("#sobrenome").removeClass("erro");
		}

		if (email == "") {
			$("#email").addClass("erro");
			
		} else {
			$("#email").removeClass("erro");
		}

		if (idade == "") {
			$("#idade").addClass("erro");
			
		} else {
			$("#idade").removeClass("erro");
		}

		if (cpf == "") {
			$("#cpf").addClass("erro");
			
		} else {
			$("#cpf").removeClass("erro");
		}

		if (cep == "") {
			$("#cep").addClass("erro");
			
		} else {
			$("#cep").removeClass("erro");
		}

		if (endereco == "") {
			$("#endereco").addClass("erro");
			
		} else {
			$("#endereco").removeClass("erro");
		}

		if (senha == "") {
			$("#senha").addClass("erro");
			
		} else {
			$("#senha").removeClass("erro");

		}
		return false;
	}

	var data = {
		first_name: nome,
		last_name: sobrenome,
		email: email,
		age: idade,
		cpf: cpf,
		cep: cep,
		address: endereco,
		password: senha
	}

	$.ajax({
		type: 'post',
		url:"http://realizadigital-api.nodo.cc/alter",
		data: data,
		success: function(res){
			var toSave = res;
			toSave.password = data.password;
			localStorage.setItem('userData', JSON.stringify(toSave));
			alert("Dados modificados  com sucesso!");
			window.location = "home.html"
		},
		error: function(xhr){
			alert(xhr.response.JSON.error.message);
		}
	});
	return false
});