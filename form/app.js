const submitAction = document.getElementById("formDataDiri");

submitAction.addEventListener('submit', function(event){
    const inputNama = document.getElementById("inputNama").value;
    const inputDomisili = document.getElementById("inputDomisili").value;
    const hiddenMessage = `Hallo ${inputNama}, bagaimana cuaca hari ini di ${inputDomisili}?`;

    document.getElementById("messageAfterSubmit").innerText = hiddenMessage;
    event.preventDefault();
})