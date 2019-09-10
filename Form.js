const nome = document.querySelector("#nomeid");
const endereço = document.querySelector("#enderecoid");
const cidade = document.querySelector("#cidadeid");
const uf = document.querySelector("#Ufid");
const telefoneResidencial = document.querySelector("#TelefoneResidencialid");
const celular = document.querySelector("#Celularid");
const email = document.querySelector("#Emailid");
const profissao = document.querySelector("Profissaoid");
const motivoSolitacao = document.querySelector(".MotivoSolicitacao");
const Rg = document.querySelector("#Rgid")
const Cnh = document.querySelector("#Cnhid");
const cpf = document.querySelector("#Cpfid");  
const títuloEleitor = document.querySelector("#TítuloEleitorid");
const passAntigo = document.querySelector("#pAntigo")
const NumPassaporte = document.querySelector("#NumPassaporteid")
const nomeError = document.querySelector("#nomeError");
const enderecoError = document.querySelector("#enderecoError");
const cidadeError = document.querySelector("#cidadeError");
const ufError = document.querySelector("#ufError");


MaskJS(telefoneResidencial).mascararPadrao("(99) 9999-9999");
MaskJS(uf).mascararPadrao("AA");
MaskJS(celular).mascararPadrao("(99) 9-9999-9999");
MaskJS(Rg).mascararPadrao("9999999999-9");
MaskJS(cpf).mascararPadrao("999.999.999-99");
MaskJS(Cnh).mascararPadrao("99999999999");
MaskJS(NumPassaporte).mascararPadrao("AA999999");
MaskJS(títuloEleitor).mascararPadrao("999999999999");


const forname = valor =>{
	const regraname = /[^a-zA-Z\s]+/gi;
	if(regraname.test(valor)){
		nomeError.innerText  = "Nome inválido";

}else{
	nomeError.innerText  = "";
}
	}

const forcity = valor  =>{
	const regracity = /[\d]/gi;
	if(regracity.test(valor)){
		cidadeError.innerText = "Cidade inválida";
	}else{
		cidadeError.innerText = "";
		
	}
}

const forendereco = valor  =>{
	const regraendereco = /[^a-zA-Z0-9]{1,}[vf]+/gi;
	if(regraendereco.test(valor)){
		enderecoError.innerText = "Endereço inválido";
	}else{
		enderecoError.innerText = " ";
	}
}

const forUf = valor  =>{
	const regrauf = /[\d]{2}/gi;
	if(regrauf.test(valor)){
		ufError.innerText = "Uf inválido";
	}else{
		ufError.innerText = "";
	}
}
/*const forcelular = valor  =>{
	const regracelular = /\(\d{2}\)\s\d{4,5}\-\d{4}/gi;
	if(regracelular.test(valor)){
		alert("celular inválido");
	}else{
		alert("");
	}
}*/

/*MaskJS(celular).mascararPadrao("(99) 9-9999-9999");
*/
const foremail = valor  =>{
	let regraemail = /[\w]{1,}[@]{1}[\w]{1,}[.]{1}[\w]{1,}/gi;
	if(regraemail.test(valor)){
		emailError.innerText = "";
	}else{
		emailError.innerText = "email inválido";
		haveErro = true;
	}
}


const forProfissao = valor  =>{
	const regraProfissao = /[^a-zA-Z\s]+/gi;
	if(regraProfissao.test(valor)){
		profissaoError.innerText = "Profissao inválida";
	}else{
		profissaoError.innerText = "";
	}
}