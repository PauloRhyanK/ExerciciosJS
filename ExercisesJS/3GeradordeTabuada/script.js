
function gerartabuada(){
    const inum = Number(document.getElementById('inumber').value);
    const divout = document.querySelector('#divresult')

    if (divout.hasChildNodes()){
        divout.innerHTML = '';
    }

    outtitle = document.createElement('label');
    outtitle.setAttribute('for','txtout');
    outtitle.textContent = 'Resultado';

    txtresultado = document.createElement('textarea');
    txtresultado.setAttribute('id','txtarea');
    txtresultado.setAttribute('name','txtarea');
    txtresultado.setAttribute('rows','11');
    txtresultado.setAttribute('readonly', true);

    btnCopiar = document.createElement('button');
    btnCopiar.classList.add("copiar");
    btnCopiar.textContent = "Copiar"
    btnCopiar.onclick = function copiar(){
        txtresultado.select();
        document.execCommand('copy');

        const tempMessage = document.createElement('div');
        tempMessage.classList.add('concluded');
        tempMessage.textContent = 'Copiado!';
        divout.appendChild(tempMessage);

        setTimeout(() => {
            divout.removeChild(tempMessage)
        },3000
        );

        
    };

    for (i=0; i<11; i++){
        txtresultado.textContent += `${inum} x ${i} = ${inum*i}\n`;
    }
    divout.appendChild(outtitle);
    divout.appendChild(txtresultado);
    divout.appendChild(btnCopiar); 
};