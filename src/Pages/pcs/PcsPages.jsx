import { useEffect, useState } from "react"
import { useInsertPc } from "../../hooks/useInsertPc"

import cadastroStyle from "../pcs/cadastroStyle.css"

function PcsPage(){

    const [title, setTitle] = useState("")
    const [newValor, setNewValor] = useState("")
    const [oldValor, setOldValor] = useState("")
    const [pc, setPc] = useState("")


    const {insertPc, response} = useInsertPc("pcs")


    const handleSubmit = (e) =>{
        e.preventDefault()

        insertPc({
            title,
            pc,
            oldValor,
            newValor
        })

    }

    return(
        <section className="pcs">
            <form onSubmit={handleSubmit}>
                <h1>Cadastro de Pcs</h1>
                <input placeholder="título..." onChange={(e)=> setTitle(e.target.value)} value={title}/>
                <input placeholder="valor antigo..." onChange={(e)=> setOldValor(e.target.value)} value={oldValor} />
                <input placeholder="valor novo..." onChange={(e)=> setNewValor(e.target.value)} value={newValor} />
                <textarea placeholder="especificações do pc" onChange={(e)=> setPc(e.target.value)} value={pc}/>
                <button>criar anuncio</button>
            </form>
            <h4>Em breve vai suportar imagens</h4>
        </section>
    )
}


export default PcsPage