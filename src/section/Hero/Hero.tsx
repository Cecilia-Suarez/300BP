const Hero = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-3xl">
                    <h1 className="mb-5 text-5xl font-bold">Entrenamos como guerreros, competimos como atletas</h1>
                    <p className="mb-5">
                        En <strong>300 Boxing Promoter</strong> impulsamos el desarrollo de boxeadores profesionales a través de la disciplina, el respeto y la visión. Porque el verdadero combate se libra todos los días, dentro y fuera del ring. 
                        <br />Ya seas un atleta con hambre de gloria o un promotor en busca de rivales dignos, este es tu lugar.
                    </p>
                    <div className='gap-5 items-center justify-center flex flex-col md:flex-row'>
                        <button className="btn btn-primary">Sumate al equipo</button>
                        <button className="btn btn-primary">¿Buscás un rival digno?</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero