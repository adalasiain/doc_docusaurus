import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '¿Que es una promesa?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Una "promesa" en JavaScript es un objeto que representa una operación asíncrona que puede estar en tres estados:
        <ul>
          <li>Pendiente</li>
          <li>Cumplida</li>
          <li>Rechazada</li>
        </ul>
        Facilitando el manejo de resultados y errores de manera más estructurada.
      </>

    ),
  },
  {
    title: '¿Que es el Fetch API?',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <p>
          El Fetch API es una interfaz de JavaScript que permite realizar solicitudes de red de manera asíncrona, utilizando promesas para manejar las respuestas.
        </p>
      </>
    ),
  },
  // {
  //   title: 'A continuación puedes ',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
