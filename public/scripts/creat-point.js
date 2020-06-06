//populador de estados e cidade nos selects

function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {
       for(const state of states){
           ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
       }
    })
}

populateUFs()

function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const ufValue = event.target.value
    const url =`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = `<option value="">Selecione a cidade</option>`
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json() )
    .then( cities => {
       for(const city of cities){
        citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
       }
       citySelect.disabled = false
    })

}

document.querySelector("select[name=uf]")
.addEventListener("change", getCities )

//intens de coleta 

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

//array de itens selecionados
let selectedItems = []

function handleSelectedItem(event){
    const itemLi = event.target
    itemLi.classList.toggle("selected")
    const itemId = itemLi.dataset.id

    //verificar se existem itens selecionados , se sim
    // pegar os intens selecionados
    const alreadySelected = selectedItems.findIndex( item => {
        return item == itemId
    })

    // Se ja estiver selecionado
    if ( alreadySelected >= 0 ) {
        const filteredItems = selectedItems.filter( item => {
            const itemIsDiferent = item != itemId
            return itemIsDiferent
        } )
        selectedItems = filteredItems
    } else {
        //se nao estiver selecionado, adicionar a selecao
        selectedItems.push(itemId)
    }

    //atualizar o campos escondido com os itens selecionados
    collectedItems.value = selectedItems
}