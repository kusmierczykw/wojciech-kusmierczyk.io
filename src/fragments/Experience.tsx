import React from 'react';
import SectionTitle from './SectionTitle';
import './Experience.scss';

function Experience() {
  return (
    <div className="experience">
      <SectionTitle title="Doświadczenie_" />

      <div className="experience__item">
        <div className="experience__info">
          <div className="experience__company">Lemisoft</div>
          <div className="experience__position">Programista Angular</div>
          <div className="experience__period">Lipiec 2018 - obecnie</div>
          <div className="experience__place">Lublin, Polska</div>
        </div>

        <div className="experience__description">
          Tworzenie warstwy frontendowej aplikacji webowych - Angular, PrimeNG,
          NGBootstrap, Angular Material. Konfiguracja środowiska developerskiego
          - wybór stacku technologicznego, ESLint, Docker. Używanie narzędzi do
          statycznej analizy kodu aplikacji. Przygotowywanie dedykowanych i
          reużywalnych komponentów aplikacji. Stosowanie bibliotek komponentów -
          PrimeNG, Angular Material, Bootstrap. Stosowanie dobrych praktyk
          pisania kodu oraz projektowania aplikacji - czysty kod, czysta
          architektura, Atomic Design. Praca w zespole stosującym techniki
          zwinnego wytwarzania oprogramowania (SCRUM). Estymacja projektów
          informatycznych i planowanie prac programistycznych. Weryfikacja kodu
          źródłowego aplikacji. Przygotowanie, weryfikacja oraz ocena zadań
          rekrutacyjnych. Prowadzenie rozmów technicznych z potencjalnymi
          kandydatami.
        </div>
      </div>

      <div className="experience__item">
        <div className="experience__info">
          <div className="experience__company">Ministerstwo Finansów</div>
          <div className="experience__position">
            Programista Angular / Team Leader
          </div>
          <div className="experience__period">Czerwiec 2021 - obecnie</div>
          <div className="experience__place">Lublin, Polska</div>
        </div>

        <div className="experience__description">
          Tworzenie warstwy frontendowej dla Modułu Postępowań Administracyjnych
          w ramach systemu poboru opłaty elektronicznej eToll. Przygotowanie
          architektury aplikacji frontendowej. Weryfikacja kodu źródłowego
          aplikacji. Wsparcie techniczne developerów. Praca w zespole stosującym
          techniki zwinnego wytwarzania oprogramowania (SCRUM).
        </div>
      </div>

      <div className="experience__item">
        <div className="experience__info">
          <div className="experience__company">Expand-Online</div>
          <div className="experience__position">Programista Wordpress</div>
          <div className="experience__period">Lipiec 2017 - Lipiec 2018</div>
          <div className="experience__place">Łuków, Polska</div>
        </div>

        <div className="experience__description">
          Tworzenie stron internetowych oraz szablonów Wordpress. Cięcie
          szablonu PSD w programie Photoshop. Edycja i wprowadzanie poprawek na
          stronach internetowych. Optymalizacja stron internetowych (kompresja
          obrazów, minifikacja kodu CSS, JavaScript). Optymalizacja stron
          internetowych pod SEO. RWD.
        </div>
      </div>
    </div>
  );
}

export default Experience;
