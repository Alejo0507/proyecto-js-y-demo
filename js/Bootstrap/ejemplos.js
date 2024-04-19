let personajes=Array()
let menu="1.agregar - 2.eliminar - 3.ver personajes - 4.salir"
let opcion=0

do{
    opcion=parseInt(prompt(menu))
    switch(opcion){
        case 1:
            personajes.push(prompt("ingrese el nombre"))
            break
        case 2:
            let per=personajes.pop()
            if (confirm('desea eliminar el ultimo personaje')){
                alert("se a eliminado")
            }else{
                personajes.push(per)
            }
            break
        case 3:
            alert(personajes)
            break
        case 4:
            menu=3
            break
    }
    
}while(menu!=3)
