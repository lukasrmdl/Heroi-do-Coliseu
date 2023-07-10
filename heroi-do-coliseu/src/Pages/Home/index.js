import React from 'react';

const Home = () => {
    return (
        <div className='container'>
            <header id='header_home'>
                <p>Home</p>
            </header>
            <main>
                <section className='box-titulo'>
                    <h1>Herói do Coliseu</h1>
                    <p>Prepare-se para uma experiência única e emocionante no mundo dos gladiadores. Nosso jogo coloca você no papel de um gladiador corajoso em busca de glória e honra nas arenas mais renomadas do Império Romano.</p>
                    <p>Estás pronto para entrar nas Arenas de toda roma e provar seu valor como um verdadeiro campeão? Junte-se a nós e comece sua jornada rumo à grandeza!</p>
                    <a href='/download'>Clique aqui para saber mais</a>
                </section>
                <section className='box-requisitos'>
                    <h1>features</h1>
                    <p id='box-requisitos'>O jogo ainda está em desenvolvimento, então pedimos para que tenha paciência.</p>
                    <p id='box-requisitos'>Veja abaixo quais são os objetivos do nosso jogo!</p>
                    <div className='box-cards'>
                        <div className='card'>
                            <h3>Aprendizagem Tangencial</h3>
                            <p className='box-requisitos-pp'>Estimular o ensino e a aprendizagem por meio da diversão e com uma metodologia leve.</p>
                        </div>
                        <div className='card'>
                            <h3>Rejogabilidade</h3>
                            <p className='box-requisitos-pp'>Todo bom jogo roguelite precisa e é oque nos queremos para o jogo, varias maneiras diferentes de se jogar e vencer!</p>
                        </div>
                        <div className='card'>
                            <h3>Narrativa e Ambientação</h3>
                            <p className='box-requisitos-pp'>Um dos fatores mais importantes dos jogos, por isso Herói do Coliseu pretende contar a história de 6 gladiadores diferentes em suas batalhas da vida.</p>
                        </div>
                    </div>
                </section>
            </main>
            <footer id='footer_home'>
                <p className='autor'>Lukas Raphael - Tecnologia em sistemas para internet - IFSUL</p>
            </footer>
        </div>
    )
}
  

export default Home;
