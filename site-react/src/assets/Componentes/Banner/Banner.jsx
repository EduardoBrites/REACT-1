import './Banner.css'

function Banner(props){
    return(
        <div>
            <h1 className="titulo-principal">{props.textoBanner}</h1>
            <p>Texto do componente</p>
            <img src="vite.svg"/>
        </div>
    )
}

export default Banner