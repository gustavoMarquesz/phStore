import {useFetchDocuments} from "../../hooks/useFetchDocuments"
import styleHomePage from "../HomePage/styleHomePage.css"

import Hello from "../../assets/undraw_hello_re_3evm.svg"
import Ph from "../../assets/ph.jpeg"

import { BsFillArrowDownCircleFill } from "react-icons/bs";
import {BsWhatsapp} from "react-icons/bs"

function HomePage (){
    const {pcs: posts, loading} = useFetchDocuments("pcs")
    console.log(posts)

    return(
        <section>
            <div className="custom-shape-divider-bottom-1665597448">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
                </svg>
            </div>
            
            <div className="welcome">
                <img src={Hello} alt="" />
                <h2>Opa! seja muito bem-vindo a revendedora e assistência ténica PH</h2>
                <h1>Logo abaixo você pode vizualizar os produtos em estoque</h1>
                <h1> <BsFillArrowDownCircleFill/></h1>               
            </div>

            <div className="aboutPh">
                <img src={Ph}/>
                <div className="phText">
                    <h3>Esposo, pai e aspirante em tecnologia, desde dos 17 anos</h3>
                    <h4>venho entregando serviços completos e de altissíma qualidade.</h4>
                    <h4>Atualmente também vendo peças separadas e computadores completos, desde pcs para Office, quanto Gamers.</h4>
                    <h4>tudo isso por um preço justo, saindo mais em conta para o sem bolso, sem perder a qualidade do serviço ou da peça em questão.</h4>
                    <h4><a href="https://wa.me/558198734051?text=Olá,%20gostaria%20de%20solicitar%20uma%20assistência%20técnica!">qualquer dúvida ou solicitação de serviço, pelo whatsapp <BsWhatsapp/></a></h4>
                </div>
            </div>

            <div className="itensPri">
            <div class="custom-shape-divider-top-1665597520">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
                </svg>
            </div>
                {posts && posts.map((post, index)=>(
                    <div key={index} className="itens">
                    <div className="itensChildren">
                            <h1>Em estoque</h1>
                            <h3>Para você, agora: {post.title}</h3>
                            <p>{post.pc}</p>
                            <p>De: <span className="span1">{post.oldValor}</span> por somente: <span className="span2"> {post.newValor}</span></p>
                            <a href="https://wa.me/558198734051?text=Olá,%20tenho%20interesse%20em%20comprar%20o%20nomedopc!">Quero este pc com desconto! <BsWhatsapp/> </a>
                    </div>
                    </div>
                ))}
            </div>

            
        </section>
        
    )
}
export default HomePage