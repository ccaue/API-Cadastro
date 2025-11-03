function salvar() { 
										
    var json, cliente,
		data 	= {},
		request = new XMLHttpRequest(),
		url 	= "http://localhost:8080/apirest/cliente";
		
	data.nome      = document.getElementById('inputNome').value;
	data.sobrenome = document.getElementById('inputSobrenome').value;
	data.telefone  = document.getElementById('inputTelefone').value;
	data.email     = document.getElementById('inputEmail').value;
	data.senha 	   = document.getElementById('inputSenha').value
	
	json 	  	= JSON.stringify(data);
	
    request.open('POST', url, true);
	request.setRequestHeader("Content-Type", "application/json");
		
	request.onload = function () {
		
		cliente = JSON.parse(request.responseText);
	
		if (request.readyState == 4 && request.status == "201") {
			console.table(cliente);
		} else {
			console.error(cliente);
		}
	}
	
	request.onerror = function() {
        console.log("Erro:"+request);
    };

    request.send(json);
	console.log(request.response);	
}

function alterar(){
	
	var cliente, json,
		data 	= {},
		url  	= "http://localhost:8080/apirest/cliente",
		request = new XMLHttpRequest();
	
	data.nome      = document.getElementById('inputNome').value;
	data.sobrenome = document.getElementById('inputSobrenome').value;
	data.telefone  = document.getElementById('inputTelefone').value;
	data.email     = document.getElementById('inputEmail').value;
	data.senha 	   = document.getElementById('inputSenha').value
	
	json	  	= JSON.stringify(data);
	
	request.open("PUT", url, true);
	request.setRequestHeader("Content-type","application/json");
	
	request.onload = function () {
		
		cliente = JSON.parse(request.responseText);
	
		if (request.readyState == 4 && request.status == "200") {
			console.table(cliente);	
		} else {	
			console.error(cliente);		
		}		
	}

	request.send(json);	
}

function excluir(){
	
	var cliente,
		data 	= {},
		request = new XMLHttpRequest(),
		url 	= "http://localhost:8080/apirest/cliente";
	
	data.id 	= document.getElementById('inputID').value;
		
	request.open("DELETE", url+'/'+data.id, true);
	
	request.onload = function () {
		
		cliente = JSON.parse(request.responseText);
	
		if (request.readyState == 4 && request.status == "200") {
			console.table(cliente);
		} else {
			console.error(cliente);
		}
	}
	request.send(null);
}

function listar() { 
	
	var resp, i, 
		txt 	= "",
		request = new XMLHttpRequest(),
		url 	= "http://localhost:8080/apirest/cliente";
                    
	request.open('GET', url, true);

    request.onload = function() {
		if (request.readyState == 4 && (request.status >= 200 && request.status < 400)) {

			resp = JSON.parse(request.responseText);
														
			txt += "<table style='width:53%' border='1' class='table table-hover'>"
			txt += "<thead class='thead-dark'>"
			txt += "<tr><th style='text-align:center'>id</th><th>nome</th><th>cpf</th><th>telefone</th><th>email</th><th>cep</th></tr></thead>"
			
		
			for (i=0; i < resp.length; i++) {
				txt += "<tr><td style='text-align:center'>" + resp[i].id + "</td>";
				txt += "<td>" + resp[i].nome + "</td>";
				txt += "<td>" + resp[i].sobrenome + "</td>";
				txt += "<td>" + resp[i].telefone + "</td>";
				txt += "<td>" + resp[i].email + "</td>";
				txt += "<td>" + resp[i].senha + "</td></tr>";
			}
				
			txt += "</table>"
			document.getElementById('tabela').innerHTML = txt;
							
		} else {
			console.error(request);
		}
	};

    request.onerror = function() {
        console.log("Erro:"+request);
    };
	
    request.send();    
}

function buscar() { 
	
	var resp,
		txt 	= "",
		data 	= {},
		request = new XMLHttpRequest(),
		url 	= "http://localhost:8080/apirest/cliente";

	data.id	  	= document.getElementById('inputID').value;
		
	request.open('GET', url+'/'+data.id, true);

    request.onload = function() {
		if (request.readyState == 4 && (request.status >= 200 && request.status < 400)) {
                
			resp = JSON.parse(request.responseText);
				
			txt += "<table style='width:53%' border='1' class='table table-hover'>"
			txt += "<thead class='thead-dark'>"
			txt += "<tr><th style='text-align:center'>id</th><th>nome</th><th>cpf</th><th>telefone</th><th>email</th><th>cep</th></tr></thead>"
	
			txt += "<tr><td style='text-align:center'>" + resp.id + "</td>";
			txt += "<td style='text-align:center'>" + resp.nome + "</td>";
			txt += "<td style='text-align:center'>" + resp.cpf + "</td>";
			txt += "<td style='text-align:center'>" + resp.telefone + "</td>";
			txt += "<td style='text-align:center'>" + resp.email + "</td>";
			txt += "<td style='text-align:center'>" + resp.cep + "</td></tr>";
			
			txt += "</table>"
			document.getElementById('tabela').innerHTML = txt;
							
		} else {
			console.error(request);
		}
	};

    request.onerror = function() {
        console.log("Erro:"+request);
    };

    request.send();    
}