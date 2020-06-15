// DÚVIDA SOBE O FUNCIONAMENTO: dica -> usar console.log

/* ()=>{} -> função arrow -> função vazia */

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() ) // apenas 1 var 
    // (res) => { return res.json()}  -> mais de uma variável 
   .then(states => {

        for( const state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>` 
            /* += -> repete a variavel + o option */
    
        }

     } )
}

populateUFs()


function getCities(event) {
   const citySelect = document.querySelector("[name=city]")
   const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value // valor da UF 

    const  indexOfSelectedState  =  event.target.selectedIndex
    stateInput.value =  event.target.options[indexOfSelectedState ].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value> Selecione a cidade </option>"
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json() ) 
    .then( cities => {

        for(const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>` 
    
        }

        citySelect.disabled = false

     } )
}


document 
  .querySelector("select[name=uf]") /* busca o select */
  .addEventListener("change", getCities) /* ouvidor de eventos */
   

// Itens de coleta
// pegar todos os li's
 
const itemsToCollect = document.querySelectorAll(".items-grid li")
 
for(const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

// itens selcionados

let selectedItems = []

function handleSelectedItem(event) {
 
    const itemLi = event.target

    // adicionar ou remover uma classe com js 

    itemLi.classList.toggle("selected") 
    // itemLi.classList.add/remove/toggle -> adiciona/remove/adc ou rem a classe

    const itemId = itemLi.dataset.id // mostra o número da data-id o item 

    // console.log('ITEM ID: ', itemId)

    // verificar se existem itens selecionados, se sim
    // pegar os itens selecionados

    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId // isso será true ou false
        return itemFound
    })

    // se já estiver selecionado, 
    if( alreadySelected >= 0) {
        // tirar de seleção
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId // item diferente do item => false
            return itemIsDifferent
        })

        selectedItems = filteredItems
    } else {
        // se não estiver selecionado, 
        selectedItems.push(itemId) //adicionar a seleção
    }

    // console.log(selectedItems)
    // atualizar o campo esclhido com os itens selecionados
    
    collectedItems.value = selectedItems
}
