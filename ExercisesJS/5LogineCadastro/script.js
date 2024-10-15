function buscarEndereco() {
    const cep = document.getElementById("cep").value.replace(/\D/g, "");

    if (cep.length !== 8) {
        alert("Por favor, insira um CEP válido com 8 dígitos.");
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao buscar o endereço. Verifique o CEP.");
            }
            return response.json();
        })
        .then(data => {
            if (data.erro) {
                alert("CEP não encontrado.");
                return;
            }

            document.getElementById("logradouro").value = data.logradouro;
            document.getElementById("bairro").value = data.bairro;
            document.getElementById("cidade").value = data.localidade;
            document.getElementById("estado").value = data.uf;
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Não foi possível buscar o endereço.");
        });
}

function irLogin() {
    const formlogin = document.getElementById("logon");
    const formCadastro = document.getElementById("cadastro");

    if (formCadastro && formlogin) {
        formCadastro.classList.add("hidden");
        formCadastro.classList.remove("cadastro")
        formlogin.classList.remove("hidden");
    } else {
        console.error("Elementos de formulário não encontrados.");
    }
}