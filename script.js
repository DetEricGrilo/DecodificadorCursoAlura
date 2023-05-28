const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
	
	const textoEncriptado = encriptar(textArea.value);
	mensagem.value = textoEncriptado;
	textArea.value = "";
	const section = document.querySelector('#imagem');
	section.style.display = 'none';
}

function encriptar(stringEncriptada) {

	let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufa"]];
	stringEncriptada = stringEncriptada.toLowerCase();

	for(let i = 0; i < matrizCodigo.length; i++) {
		if(stringEncriptada.includes(matrizCodigo[i][0])) {
			stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
		}
	}
	return stringEncriptada;

}

function btnDesencriptar() {
	const textoDesencriptado = desencriptar(textArea.value);
	mensagem.value = textoDesencriptado;
	textArea.value = "";
	const section = document.querySelector('#imagem');
	section.style.display = 'none';
}

function desencriptar(stringDesencriptada) {

	let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufa"]];
	stringDesencriptada = stringDesencriptada.toLowerCase();

	for(let i = 0; i < matrizCodigo.length; i++) {
		if(stringDesencriptada.includes(matrizCodigo[i][1])) {
			stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
		}
	}
	return stringDesencriptada;
	
}

function btnCopiar () {
        let textoCopiado = document.querySelector(".mensagem");
        navigator.clipboard.writeText(textoCopiado.value);
		textoCopiado.value='';
		console.log();
}