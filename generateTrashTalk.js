function generateRandomIndex(upperbound) {
  return Math.floor(Math.random() * upperbound)
}

function generateTrashTalk(occupation) {
  if (!occupation) {
    return '您尚未選擇想對誰說幹話'
  }
  //setting trash talk collection
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  //generate a subject
  const subject = `身為一個${occupation.ch}`

  //generate a task randomly
  const work = task[occupation.en][generateRandomIndex(task[occupation.en].length)]

  //generate a phrase randomly
  const adverb = phrase[generateRandomIndex(phrase.length)]

  //return the trash talk
  return `${subject}，${work}，${adverb}吧！`
}

module.exports = generateTrashTalk