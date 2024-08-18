
function copiarTexto() {
    var textoArea = document.getElementById("Resultado");
    textoArea.select();
    textoArea.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Texto copiado: " + textoArea.value);
}

function encriptar(){
    document.querySelector(".Salidatext").style.display ="none";
    document.querySelector(".cuadrosalida").style.display ="block";
    let textoUsuario = document.getElementById("texto").value.toLowerCase();
    document.getElementById("Resultado").value = encriptador(textoUsuario)  
}

function desencriptar(){
    document.querySelector(".Salidatext").style.display ="none";
    document.querySelector(".cuadrosalida").style.display ="block";
    let textoUsuario = document.getElementById("texto").value.toLowerCase();
    document.getElementById("Resultado").value = desencriptador(textoUsuario)  
}

function encriptador(textoEncriptar) {
    
    let textoEncriptado = "";  
    for (i = 0; i < textoEncriptar.length; i++) {
        if (textoEncriptar[i] === "e") {
            textoEncriptado += "enter";
        }else if (textoEncriptar[i] === "i") {
            textoEncriptado += "imes";
        }else if (textoEncriptar[i] === "a") {
            textoEncriptado += "ai";
        }else if (textoEncriptar[i] === "o") {
            textoEncriptado += "ober";
        }else if (textoEncriptar[i] === "u") {
            textoEncriptado += "ufat";
        }
                
        else {
            textoEncriptado += textoEncriptar[i];
        }
    }
    return textoEncriptado;
}

function desencriptador(textoEncriptado) {
    let textoDesencriptado = "";
    for (let i = 0; i < textoEncriptado.length; i++) {
        if (textoEncriptado[i] === "e" && textoEncriptado.substring(i, i + 5) === "enter") {
            textoDesencriptado += "e";
            i += 4; 
        } else if (textoEncriptado[i] === "i" && textoEncriptado.substring(i, i + 4) === "imes") {
            textoDesencriptado += "i";
            i += 3; 
        } else if (textoEncriptado[i] === "a" && textoEncriptado.substring(i, i + 2) === "ai") {
            textoDesencriptado += "a";
            i += 1; 
        } else if (textoEncriptado[i] === "o" && textoEncriptado.substring(i, i + 4) === "ober") {
            textoDesencriptado += "o";
            i += 3;
        } else if (textoEncriptado[i] === "u" && textoEncriptado.substring(i, i + 4) === "ufat") {
            textoDesencriptado += "u";
            i += 3; 
        } else {
            textoDesencriptado += textoEncriptado[i];
        }
    }
    return textoDesencriptado;
}
