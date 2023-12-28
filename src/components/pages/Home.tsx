
export default function Home() {
    const corTexto = {
        color: 'var(--color-one-pink)',
        paddingLeft: '10%',
        width: '80%',       
    }
    return(
        <>
        <section className="content">
        <p style={corTexto}>Olá, seja bem vindo. Esta é uma simples aplicação modelo com 
        a estrutura e metodologia de Atomic Design</p>
        <div style={corTexto}>
        O conceito principal do Atomic Design é dividir a interface em cinco níveis, 
        chamados de "átomos", "moléculas", "organismos", "templates" e "páginas", 
        representando componentes cada vez mais complexos e compostos. 
        Esses elementos modulares podem ser organizados e combinados para criar interfaces consistentes e flexíveis.
        Embora o Atomic Design não seja uma "arquitetura" no sentido estrito, ele fornece uma estrutura conceitual para o 
        desenvolvimento de componentes e sistemas de design, o que pode ser fundamental para a organização e manutenção de 
        projetos de interface de usuário em larga escala. A aplicação prática do Atomic Design pode influenciar a 
        arquitetura geral de um projeto, especialmente em termos de como os componentes são estruturados e organizados.
        </div>
        </section>        
        </>
    )
}

//um exemplo simples de aplicação css inline