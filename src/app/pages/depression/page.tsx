"use client";

import Image from "next/image"; // Import Next.js Image component
import "../../styles/depression.css";

export default function DepressionHeroSection() {
  return (
    <section id="depressionHeroSection" className="depression-hero-section">
      <div className="depression-hero-section-img">
        {/* Use Next.js Image component for optimization */}
        <Image
          src="/depression.jpg" // Adjust the image path
          alt="Depression Hero Image"
          width={500}
          height={500} // Adjust as needed
          priority // Optional, to prioritize image loading
        />
      </div>
      <div className="depression-hero-section-content-box">
        <div className="depression-hero-section-content">
          <p className="depression-section-title">Vad är depression?</p>

          <p className="depression-hero-section-description">
            Att känna sig nedstämd eller ledsen då och då är en del av livet och
            ofta en normal reaktion på svåra händelser. Men när känslorna av
            nedstämdhet inte går över och börjar påverka din vardag på ett
            påtagligt sätt, kan det vara tecken på något mer än tillfällig sorg
            – det kan vara depression. Depression är en psykisk sjukdom som
            påverkar både hur du känner, tänker och beter dig, och det kan få en
            djupgående inverkan på din livskvalitet.
          </p>

          <p className="depression-section-title2">
            Skillnaden mellan nedstämdhet och depression
          </p>

          <p className="depression-hero-section-description1">
            Nedstämdhet är vanligt och kan vara en reaktion på livshändelser som
            förlust, stress eller besvikelse. Denna känsla går ofta över efter
            en tid och påverkar vanligtvis inte hela din livssituation.
            Depression, å andra sidan, är en mer ihållande känsla av hopplöshet
            och tomhet som kan hålla i sig i veckor, månader eller till och med
            år. Med depression försvinner ofta intresset för aktiviteter som
            tidigare var meningsfulla och det kan kännas svårt att klara av de
            enklaste vardagliga uppgifterna. Det som skiljer depression från
            vanlig nedstämdhet är hur genomgripande och långvariga symtomen är.
            Med depression kan du uppleva en kombination av känslor som djup
            sorg, trötthet, skuld, värdelöshet och ofta en oförmåga att känna
            glädje. Det kan också leda till fysiska symtom som sömnproblem,
            förändringar i aptit och minskad energi. Många med depression
            beskriver att de känner sig "instängda" i ett mörkt hål, där inget
            längre känns meningsfullt.
          </p>

          <p className="depression-section-title3">
            Skillnaden mellan nedstämdhet och depression
          </p>

          <p className="depression-hero-section-description2">
            Depression kan orsakas av en rad olika faktorer. Ibland är det en
            specifik livshändelse, som en förlust, separation eller långvarig
            stress, som triggar tillståndet. För andra kan det bero på en
            kombination av ärftliga faktorer och kemiska obalanser i hjärnan,
            vilket gör att man är mer sårbar för depression. Ofta handlar det om
            ett komplext samspel mellan biologiska, psykologiska och sociala
            faktorer. Känslomässiga upplevelser under barndomen, som trauma
            eller missbruk, kan också öka risken att utveckla depression senare
            i livet. Även om det ibland kan kännas som att det inte finns någon
            tydlig orsak till depression, är det viktigt att komma ihåg att det
            är en verklig och behandlingsbar sjukdom, precis som vilken annan
            fysisk sjukdom som helst. Att uppleva depression är inte ett tecken
            på svaghet, och det finns hjälp att få.
          </p>

          <p className="depression-section-title4">
            Behandling och stöd vid depression
          </p>

          <p className="depression-hero-section-description3">
            Depression kan kännas överväldigande, men det finns flera effektiva
            behandlingar som kan hjälpa dig att må bättre. På Svea Psykologerna
            arbetar vi med olika vetenskapligt baserade metoder som vi anpassar
            efter dina individuella behov och din specifika situation. Vår
            behandlingsplan tar hänsyn till dina unika förutsättningar och vi
            arbetar tillsammans med dig för att hjälpa dig förstå vad som ligger
            bakom din depression. Genom att behandlingen skräddarsys efter dina
            behov kan vi hjälpa dig att återfå kontrollen över ditt liv, stärka
            ditt emotionella välbefinnande och förbättra din livskvalitet.{" "}
          </p>

          <p className="depression-hero-section-description4">
            Alla våra behandlingsmetoder syftar till att ge dig de verktyg du
            behöver för att hantera dina känslor och bryta de mönster som håller
            depressionen vid liv. Målet är att hjälpa dig hitta vägar tillbaka
            till ett mer meningsfullt och tillfredsställande liv.
          </p>
          <p className="depression-section-title5">
            Hur vi kan hjälpa dig vidare
          </p>

          <p className="depression-hero-section-description5">
            Att ta steget att söka hjälp för depression kan kännas svårt, men
            det är ett viktigt och modigt beslut. Hos oss får du ett tryggt och
            professionellt bemötande, där vi tillsammans skapar en plan för hur
            du kan må bättre. Du behöver inte hantera din depression ensam – vi
            finns här för att stödja dig genom hela processen, från första
            konsultationen till återhämtning. Genom att söka hjälp kan du få de
            verktyg och det stöd som behövs för att hitta tillbaka till dig
            själv och det liv du vill leva.
          </p>

          <p className="depression-hero-section-description6">
            Om du känner igen dig i beskrivningen av depression, tveka inte att
            ta kontakt med oss för en kostnadsfri konsultation. Du förtjänar att
            må bra, och vi på Svea Psykologerna är här för att hjälpa dig på
            vägen mot bättre psykisk hälsa.
          </p>
        </div>
      </div>
    </section>
  );
}
