const tagsEl = document.getElementById("tags")
const textarea = document.getElementById("textarea")

textarea.focus()

textarea.addEventListener('keyup',(e)=>{
  createTags(e.target.value)

  if(e.key==="Enter"){
    setTimeout(()=>{
      e.target.value = ''
    },10)

    randomSelect()
  }
})

function createTags(input){
  const tags = input.split(',')
  .filter(tag => tag.trim()!=='')
  .map(tag => tag.trim())
  // console.log(tags)
  tagsEl.innerHTML = ''
 
  tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })
}

function randomSelect(){
  console.log(1);
}