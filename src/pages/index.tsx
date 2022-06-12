import * as React from 'react';
import './index.scss';
import Scaffold from '../scaffold/scaffold';
import Header from '../fragments/header/header';
import Separator from '../fragments/separator/separator';
import SectionTitle from '../fragments/section-title/section-title';
import UMCSImage from '../images/umcs.jpeg';
import SGGWImage from '../images/sggw.jpeg';
import LemisoftImage from '../images/lemisoft.jpeg';
import MinisterstwoFinansowImage from '../images/ministerstwo-finansow.jpeg';
import ExpandOnlineImage from '../images/expand-online.jpeg';
import { PropsWithChildren, PropsWithRef } from 'react';

function Skills() {
  return (
    <>
      <SectionTitle title="Umiejętności" />

      <ul>
        <li>Angular</li>
        <li>HTML</li>
        <li>CSS/SCSS</li>
        <li>Typescript</li>
        <li>Bootstrap / PrimeNG / Material</li>
        <li>OOP</li>
        <li>Nest.js</li>
      </ul>
    </>
  );
}

function Education() {
  return (
    <>
      <SectionTitle title="Wykształcenie" />

      <ul>
        <li>
          <div>
            <div>
              <img
                src={SGGWImage}
                alt="Logotyp Szkoły Głównej Gospodarstwa Wiejskiego w Warszawie"
              />
            </div>
            <div>Szkoła Główna Gospodarstwa Wiejskiego w Warszawie</div>
            <div>2018-2020</div>
            <div>Tytuł: Magister Inżynier, Informatyka</div>
          </div>
        </li>

        <li>
          <div>
            <div>
              <img
                src={UMCSImage}
                alt="Logotyp Uniwersytetu Marii Curie-Skłodowskiej w Lublinie"
              />
            </div>
            <div>Uniwersytet Marii Curie-Skłodowskiej w Lublinie</div>
            <div>2015-2018</div>
            <div>Tytuł: Licencjat, Informatyka</div>
          </div>
        </li>
      </ul>
    </>
  );
}

export interface ExperienceDescriptionProps {
  company: {
    logo: {
      url: string;
      title: string;
    };
    name: string;
  };
  position: string;
  city: string;
  period: string;
}

function ExperienceDescription(
  props: PropsWithChildren<ExperienceDescriptionProps>
) {
  const {
    children,
    company: {
      logo: { url, title },
      name,
    },
    period,
    city,
    position,
  } = props;

  return (
    <>
      <div>
        <img
          src={url}
          alt={title}
        />
      </div>
      <div>{position}</div>
      <div>{name}</div>
      <div>{period}</div>
      <div>{city}</div>
      <p>{children}</p>
    </>
  );
}

function Experience() {
  return (
    <>
      <SectionTitle title="Doświadczenie" />

      <ul>
        <li>
          <ExperienceDescription
            position="Programista Angular"
            period="Lipiec 2018 - obecnie"
            city="Lublin, Polska"
            company={{
              logo: {
                url: LemisoftImage,
                title: 'Logotyp Lemisoft',
              },
              name: 'Lemisoft',
            }}
          >
            Tworzenie warstwy frontendowej aplikacji webowych - Angular,
            PrimeNG, NGBootstrap, Angular Material. Tworzenie aplikacji
            mobilnych dla systemów Android oraz iOS przy zastosowaniu Ionic,
            Flutter & Dart. Konfiguracja środowiska developerskiego - wybór
            stacku technologicznego, ESLint, Docker. Używanie narzędzi do
            statycznej analizy kodu aplikacji. Przygotowywanie dedykowanych i
            reużywalnych komponentów aplikacji. Stosowanie bibliotek komponentów
            - PrimeNG, Angular Material, Bootstrap. Stosowanie dobrych praktyk
            pisania kodu oraz projektowania aplikacji - czysty kod, czysta
            architektura, Atomic Design. Praca w zespole stosującym techniki
            zwinnego wytwarzania oprogramowania (SCRUM). Estymacja projektów
            informatycznych i planowanie prac programistycznych. Weryfikacja
            kodu źródłowego aplikacji. Przygotowanie, weryfikacja oraz ocena
            zadań rekrutacyjnych.
          </ExperienceDescription>
        </li>

        <li>
          <ExperienceDescription
            position="Programista Angular"
            period="Czerwiec 2021 - obecnie"
            city="Lublin, Polska"
            company={{
              logo: {
                url: MinisterstwoFinansowImage,
                title: 'Logotyp Ministerstwa Finansów',
              },
              name: 'Ministerstwo Finansów',
            }}
          >
            Tworzenie warstwy frontendowej dla Modułu Postępowań
            Administracyjnych w ramach systemu poboru opłaty elektronicznej
            eToll. Przygotowanie architektury aplikacji frontendowej.
            Weryfikacja kodu źródłowego aplikacji. Wsparcie techniczne
            developerów. Praca w zespole stosującym techniki zwinnego
            wytwarzania oprogramowania (SCRUM).
          </ExperienceDescription>
        </li>

        <li>
          <ExperienceDescription
            position="Programista Wordpress"
            period="Lipiec 2017 - Lipiec 2018"
            city="Łuków, Polska"
            company={{
              logo: {
                url: ExpandOnlineImage,
                title: 'Logotyp Expand-Online',
              },
              name: 'Expand-Online',
            }}
          >
            Tworzenie stron internetowych oraz szablonów Wordpress. Cięcie
            szablonu PSD w programie Photoshop. Edycja i wprowadzanie poprawek
            na stronach internetowych. Optymalizacja stron internetowych
            (kompresja obrazów, minifikacja kodu CSS, JavaScript). Optymalizacja
            stron internetowych pod SEO. RWD.
          </ExperienceDescription>
        </li>
      </ul>
    </>
  );
}

function IndexPage() {
  return (
    <Scaffold>
      <Separator size="5rem" />

      <Header />

      <div className="row">
        <div className="col-5">
          <Skills />
          <Education />
        </div>

        <div className="col-7">
          <Experience />
        </div>
      </div>
    </Scaffold>
  );
}

export default IndexPage;
