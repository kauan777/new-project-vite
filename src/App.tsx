import styles from "./styles/styles.module.scss";
import "./App.css";
import TrackerSection from "./components/TrackerSection";

type AdvtageProps = {
  id: number;
  title: string;
  description: string;
};

function App() {
  const advantage: AdvtageProps[] = [
    {
      id: 1,
      title: "Tecnologia 4G",
      description:
        "Diferentes de outras empresas, a Nettracker utiliza em seus rastreadores a tecnologia 4G. Além de ser a maior tecnologia móvel no Brasil, em questão de velocidade se torna superior ao 3G, o qual está presente nos rastreadores atuais.",
    },
    {
      id: 2,
      title: "Chip multi-operadoras",
      description:
        "O nosso chip é multi-operadoras. Isso significa que caso o seu rastreador sair de área porque não foi possível se conectar a torre, ele automaticamente se conectará com uma torre de operadora diferente.",
    },
    {
      id: 3,
      title: "Tecnologia Híbrida",
      description:
        "Possuímos em nosso rastreador uma tecnologia híbrida. Isso significa que o nosso rastreador é compativel com qualquer tecnologia que esteja atribuida a seu veículo, independente se tal for Autotrac, Ominilink, Onix, entre outras.",
    },
    {
      id: 4,
      title: "Compatibilidade",
      description:
        "O rastreador Nettracker possui o menor equipamento do mercado, fornecendo a maior compatibilidade e discrição. Contudo, não significa que nosso equipamento é frágil, pelo ao contrario. Além de todos os beníficos, o rastreador apresenta uma durabilidade consistente.",
    },
    {
      id: 5,
      title: "100% Brasileiro",
      description:
        "Todos os periféricos são produzidos no Brasil, desde o desenvolvimento até a montagem. A Nettracker traz toda a originalidade e hosnetidade para os clientes.",
    },
    {
      id: 6,
      title: "Rede 485",
      description:
        "Uma de suas principais vantagens é que essa rede permite a instalação de vários dispositivos RS485 no mesmo barramento, o que torna possível a conexão de vários nós entre si. Logo, conseguimos operar várias travas, sensores, sensores de temperatura de forma simultânea e individual.",
    },
  ];

  return (
    <main className={styles.container}>
      <div className={styles.backgroundImage}>
        <img src={"/nettracker.svg"} width={150} height={150} alt="" />
      </div>
      <TrackerSection />

      <div className={styles.textIntroduction}>
        <h2>Novo rastreador Nettracker</h2>

        <span>
          O novo rastreador da Nettracker vem para mudar de vez o mercado de
          rastreamento veicular. Diferente de tudo já visto, nós trazemos uma
          tecnologia inovadora. Confira algumas vantagens abaixo:
        </span>
      </div>

      <section className={styles.containerAdvantage}>
        {advantage.map((item) => (
          <div className={styles.itemAdvantage} key={item.id}>
            <h4>{item.title}</h4>
            <span>{item.description}</span>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
