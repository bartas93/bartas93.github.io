import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import styles from "./index.module.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from "@mui/icons-material/Star";
import Translate from "@docusaurus/Translate";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Portfolio() {
const sliderSettings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 500,
      cssEase: "linear"
    };

  const { siteConfig, i18n } = useDocusaurusContext();
  let localePathRoot = "";
  if (i18n.currentLocale != i18n.defaultLocale)
    localePathRoot = "/" + i18n.currentLocale;
  return (
    <Layout title={`Portfolio`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="landing_page/css/fonts.css" />
        <link rel="stylesheet" href="landing_page/css/style.css" />
        <script src="landing_page/js/preset.js"></script>
      </Head>
      <main class="landing-page">
        <section class="hero">
          <div class="container">
            <div class="hero-inner">
              <div class="anime-element">
                <img
                  src="portfolio/bartek_jablonski_1.png"
                  alt="Bartek Jablonski"
                />
              </div>

              <div class="hero-copy">
                <img
                  src="portfolio/allCompanies.png"
                  alt="LPP Finastra Intel Capgemini"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
        <Slider {...sliderSettings}>
                  <div className="container">
                    <img className="logo-slider white-logo-slider" src="portfolio/companies/lpp.svg" />
                  </div>
                  <div className="container">
                    <img className="logo-slider white-logo-slider" src="portfolio/companies/unitygroup.svg" />
                  </div>
                  <div className="container">
                    <img className="logo-slider white-logo-slider" src="portfolio/companies/intel.svg" />
                  </div>
                  <div className="container">
                    <img className="logo-slider white-logo-slider" src="portfolio/companies/solwit-white.svg" />
                  </div>
                  <div className="container">
                    <img className="logo-slider white-logo-slider" src="portfolio/companies/finastra.svg" />
                  </div>
                  <div className="container">
                    <img className="logo-slider white-logo-slider" src="portfolio/companies/envira.webp" />
                  </div>
                  <div className="container">
                    <img className="logo-slider white-logo-slider" src="portfolio/companies/capgemini.svg" />
                  </div>
                  <div className="container">
                    <img className="logo-slider white-logo-slider" src="portfolio/companies/abc-elektro.webp" />
                  </div>
                </Slider>
        </section>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgba(255, 255, 255, 0.1)",
            }}
            date="03.2020 - 08.2023"
            iconStyle={{ background: "#25c2a0", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              <Translate id="portfolio.work.camply.name">Camply.pl</Translate>
            </h3>
            <img src="portfolio/camply.webp" alt="camply" />
            <h4 className="vertical-timeline-element-subtitle">
              <Translate id="portfolio.work.camply.role">
                Owner/Senior Backend Developer
              </Translate>
            </h4>
            <p>
              <Translate id="portfolio.work.camply.description">
                Camply.pl was polish marketplace for camps and semi-camps. I was
                responsible for the application backend, database,
                finances,settlements and for part of contacts with customers and
                partners.I actively participated in sales and marketing
                activities. Camply has signed 73 travel agencies and sold
                hundreds reservations.Backend involved: Spring boot, query-dsl,
                Mysql, Gitlab CI, GoogleKubernetes Engine, Google cloud
                functions, Thymeleaf, rabbitMq,App Engine GCP, Google storage,
                OAuth, Firebase, Tooljet
              </Translate>
            </p>
            <a
              class="button button-primary"
              href={`${localePathRoot}/docs/camply`}
            >
              <Translate id="portfolio.work.camply.more">
                More informations
              </Translate>
            </a>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgba(255, 255, 255, 0.1)",
            }}
            date="06.2020 - 01.2023"
            iconStyle={{ background: "#25c2a0", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              <Translate id="portfolio.work.lpp.name">
                LPP SA (via Unity Group)
              </Translate>
            </h3>
            <img src="portfolio/LPP.jpg" alt="LPP SA" />
            <h4 className="vertical-timeline-element-subtitle">
              <Translate id="portfolio.work.lpp.role">
                Senior Java Developer (Remote)
              </Translate>
            </h4>
            <p>
              <Translate id="portfolio.work.lpp.description">
                Integration project for world company in clothing industry
                (LPP-House,Cropp,Sinsey etc.). The goal is to provide
                multichannel stock management solution.Technologies: Java17,
                Kubernetes, Mule 4, Mule3, Spring boot,Spring integration,
                RabbitMq, ActiveMq, oracle db, ApacheIgnite, Grafana,
                Prometheus, Enterprise Architect
              </Translate>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgba(255, 255, 255, 0.1)",
            }}
            date="03.2020 - 06.2020"
            iconStyle={{ background: "#25c2a0", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              <Translate id="portfolio.work.unity-group.name">
                Unity Group
              </Translate>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              <Translate id="portfolio.work.unity-group.role">
                Java Developer (Remote)
              </Translate>
            </h4>
            <p>
              <Translate id="portfolio.work.unity-group.description">
                Integration project for company providing household goods. The
                goal is to automate and streamline price and stock management.
                Technologies: Mule, Spring boot(JHipster), RabbitMq
              </Translate>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgba(255, 255, 255, 0.1)",
            }}
            date="07.2019 - 03.2020"
            iconStyle={{ background: "#25c2a0", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              <Translate id="portfolio.work.finastra.name">
                Finastra (via Solwit SA)
              </Translate>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              <Translate id="portfolio.work.finastra.role">
                Java Developer
              </Translate>
            </h4>
            <p>
              <Translate id="portfolio.work.finastra.description">
                Entire communication in English. Tech stack: Spring boot 2+,
                Java 8 MongoDb, Postman, Oauth2,OpenId Connect, Kubernetes,
                Azure, Jira, Microservices Software designing and
                implementation, analysing and solving complex engineering
                problems, creating and reviewing requirements and functional
                design, diagnosing and troubleshooting software faults,
                integration and testing software
              </Translate>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgba(255, 255, 255, 0.1)",
            }}
            date="05.2018 - 07.2019"
            iconStyle={{ background: "#25c2a0", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              <Translate id="portfolio.work.solwit.name">Solwit SA</Translate>
            </h3>
            <img src="portfolio/Solwi-sa.jpg" alt="Solwit SA" />
            <h4 className="vertical-timeline-element-subtitle">
              <Translate id="portfolio.work.solwit.role">
                Junior Java Developer
              </Translate>
            </h4>
            <p>
              <Translate id="portfolio.work.solwit.envira.description">
                01.2019 – 07.2019 (Envira project) – Spring, Spring MVC,
                JSP,JavaScript, Jooq, Docker, Jira, Bamboo, Upsource, Git
              </Translate>
              <br />
              <Translate id="portfolio.work.solwit.intel.description">
                05.2018 - 12.2018 (Intel project) – Spring boot, Angular
                5(TypeScript), Gradle, Jenkins, Docker, PostgreSql, VSTS, Git
              </Translate>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgba(255, 255, 255, 0.1)",
            }}
            date="06.2020 - 01.2023"
            iconStyle={{ background: "#25c2a0", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              <Translate id="portfolio.work.capgemini.name">
                Capgemini
              </Translate>
            </h3>
            <img src="portfolio/capgemini-office.jpg" alt="Capgemini" />
            <h4 className="vertical-timeline-element-subtitle">
              <Translate id="portfolio.work.capgemini.role">
                Internship Java Developer
              </Translate>
            </h4>
            <p>
              <Translate id="portfolio.work.lpp.capgemini">
                For 3 months I was learning basics of java, spring, jpa,
                sql,javascript, angular 4 under the guidance of Capgemini
                experts.
              </Translate>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="10.2016 - 02.2018"
            contentStyle={{
              background: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgba(255, 255, 255, 0.1)",
            }}
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              <Translate id="portfolio.education.pwr.name">
                Wroclaw University of Science and Technology
              </Translate>
            </h3>
            <img src="portfolio/pwr.jpg" alt="Politechnika Wroclawska" />
            <h4 className="vertical-timeline-element-subtitle">
              <Translate id="portfolio.education.degree.master">
                Second degree of Computer Science
              </Translate>
            </h4>
            <p>
              <Translate id="portfolio.education.degree.master.thesis">
                Master’s thesis consists in designing an application for
                managing a restaurant - FeedServ. Then,implement the module to
                manage orders and examine the usability (UX) of this module
                (used technologies angular 4 and spring boot).
              </Translate>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="10.2012 - 06.2016"
            contentStyle={{
              background: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgba(255, 255, 255, 0.1)",
            }}
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              <Translate id="portfolio.education.pwr.name">
                Wroclaw University of Science and Technology
              </Translate>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              <Translate id="portfolio.education.degree.bachelor">
                First degree of Civil Engineering
              </Translate>
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>

        <section class="features section">
          <div class="container">
            <div class="features-inner section-inner has-bottom-divider">
              <div class="features-wrap">
                <div class="feature text-center is-revealing">
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <img
                        src="landing_page/images/feature-icon-01.svg"
                        alt="Feature 01"
                      />
                    </div>
                    <h4 class="feature-title mt-24">
                      SKILLS
                    </h4>
                    <p class="text-sm mb-0">
Programming languages: Java, Mule 4, Sql
(Additionally I wrote some apps using JavaScript, Python)
Frameworks: Spring, Spring Boot, Mule 4, RabbitMq, ToolJet
Cloud: GCP (GKE, Functions, Storage, Pub/Sub, Scheduler,
IAM, Google Shell, Firebase, Cloud Registry, App Engine)
Others: Kubernetes, Docker, Maven, Git, Gitlab CI,
Enterprise Architect, Agile, Scrum
                    </p>
                  </div>
                </div>
                <div class="feature text-center is-revealing">
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <img
                        src="landing_page/images/feature-icon-02.svg"
                        alt="Feature 02"
                      />
                    </div>
                    <h4 class="feature-title mt-24">
                      Cloud And Other Certificates /gcp
                    </h4>
                    <p class="text-sm mb-0">
                      Languages
                      English (C1)
                      Polish (Native)
                      Russian (A1)
                    </p>
                  </div>
                </div>
                <div class="feature text-center is-revealing">
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <img
                        src="landing_page/images/feature-icon-03.svg"
                        alt="Feature 03"
                      />
                    </div>
                    <h4 class="feature-title mt-24">
                      Visited Countries
                    </h4>
                    <p class="text-sm mb-0">
                      M.Sc., engineer
                      Senior Java developer
                      <strong>
                        mcs51/stm8/cortex-m[0/0+/3/23/33/35p/4/7]/riscv
                      </strong>{" "}
                      mcu projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
