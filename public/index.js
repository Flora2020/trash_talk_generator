// 將使用者上次勾選的項目打勾
const checkedItem = document.querySelector('.option-record').dataset.record
if (checkedItem) {
  const checkedNode = document.querySelector(`.card input[value="${checkedItem}"]`)
  checkedNode.checked = true
}

/*
//點到卡片就能打勾
const cards = document.querySelector('.cards')
cards.addEventListener('click', function clickOnCard(event) {
  console.log(event.target)
  if (!event.target.classList.contains('card')) {
    return
  }
  event.target.children[1].children[0].children[0].children[0].checked = true
})
// 結果點擊到的都不是 .card，而是 img src、.card-body、.input-group-prepend。除了用 switch 分三個情況處理以外，還有別的方法嗎
*/