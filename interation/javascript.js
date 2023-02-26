let p1=document.getElementById('p1')
let p2=document.getElementById('p2')
let p3=document.getElementById('p3')
let p4=document.getElementById('p4')
let p5=document.getElementById('p5')
let icon=document.getElementsByClassName('icon')
let perg=document.getElementsByClassName('perg')
let escolha=(pg,e)=>{
    if (pg.style.display == 'block'){
        pg.style.display = 'none'
        icon[e].style = ''
        perg[e].style.fontWeight = ''
        perg[e].style.color = 'hsl(237, 12%, 33%)'

    } else if (pg.style.display = 'none') {
        pg.style.display = 'block'
        icon[e].style = 'rotate:180deg'
        perg[e].style.fontWeight = '900'
        perg[e].style.color = 'hsl(238, 29%, 16%)'
    }
}

const pg1=()=>{
    escolha(p1,0)
}
const pg2=()=>{
    escolha(p2,1)
}
const pg3=()=>{
    escolha(p3,2)
}
const pg4=()=>{
    escolha(p4,3)
}
const pg5=()=>{
    escolha(p5,4)

}

