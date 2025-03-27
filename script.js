var client = document.querySelector(".client");
var client_block = document.querySelector("#client-block");
var client_none = document.querySelector(".p-text-client-none");
var document_block = document.querySelector("#document-div");
var document_none = document.querySelector(".document-none");
var document_big = document.querySelector(".document");

client.addEventListener('mouseover', () => {

    client_none.style.display = "block";
    client_block.style.display = "none";
})

client.addEventListener('mouseout', () => {

   client_none.style.display = "none";
   client_block.style.display = "block";
})


document_big.addEventListener('mouseover', () => {

    document_none.style.display = "block";
    document_block.style.display = "none";
})

document_big.addEventListener('mouseout', () => {

document_none.style.display = "none";
document_block.style.display = "block";

})
