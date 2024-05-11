import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Translate from "@docusaurus/Translate";
import {Slide} from "react-awesome-reveal";

export default function Home() {

    const {siteConfig, i18n} = useDocusaurusContext();
    let localePathRoot = "";
    if (i18n.currentLocale != i18n.defaultLocale)
        localePathRoot = "/" + i18n.currentLocale;
    return (
        <Layout title={`Home`}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                {/*<link rel="stylesheet" href="landing_page/css/fonts.css" />*/}
                {/*<link rel="stylesheet" href="landing_page/css/style.css" />*/}
                <script src="landing_page/js/preset.js"></script>
            </Head>
            <main>
                <section className="hero">

                    <div className="container mx-auto md:px-30 flex flex-wrap flex-col md:flex-row items-center">
                        <div className="w-full md:w-2/4 md:p-8 overflow-hidden">
                            <Slide direction={"left"}>
                                <img className="" loading="lazy" alt="Bartosz Jablonski logo" width=""
                                     height=""
                                     src="images/logo-white.svg"/>
                            </Slide>
                            <Slide direction={"up"}>
                                <div>
                                    <h1 className="text-xl">
                                        <Translate id="home.tagline">
                                            Personal Website | Programmer, Entrepreneur, Travel Enthusiast | Bartosz
                                            Jabłoński - IT Blog and Travel
                                        </Translate>
                                    </h1>
                                </div>
                                <div className="my-5">
                                    <Slide direction={"left"}><a
                                        className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        href={`${localePathRoot}/about`}
                                    >
                                        <Translate id="home.about.button">
                                            Check out my experience
                                        </Translate>
                                    </a></Slide></div>
                            </Slide>
                        </div>
                        <div className="w-full md:w-2/4 md:p-8 overflow-hidden">
                            <Slide direction={"down"}>
                                <img className="" loading="lazy" alt="Bartosz Jablonski image" width="" height=""
                                     src="landing_page/images/bartek_jablonski_3.png"/>
                            </Slide>
                        </div>


                    </div>
                </section>

                <section className="my-16">
                    <div className="container mx-auto md:px-30 flex flex-wrap flex-col md:flex-row items-center">
                        <div className="w-full md:w-2/4 md:p-8 overflow-hidden">
                            <Slide direction={"left"}><img className="" loading="lazy" alt="T8T Tournamets" width=""
                                                           height=""
                                                           src="landing_page/images/t8t.png"/></Slide>
                        </div>
                        <div className="w-full md:w-2/4 md:p-8 overflow-hidden">
                            <div>
                                <div className="flex items-center content-center justify-center mx-auto">

                                    <Slide direction={"down"}><h1><Translate id="home.t8t"> T8t is discord tournament
                                        bot where you can play for
                                        real money.
                                    </Translate></h1></Slide>

                                    <Slide direction={"right"}>

                                        <img className="w-24 m-2" loading="lazy" alt="T8t bot" width="" height=""
                                             src="landing_page/images/t8t-logo.png"/>
                                    </Slide>
                                </div>
                                <div className="flex justify-center my-5">
                                    <Slide direction={"up"}><a
                                        className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        href={`${localePathRoot}/docs/t8t/getting-started`}
                                    >
                                        <Translate id="home.t8t.button">
                                            Go to documentation
                                        </Translate>
                                    </a></Slide>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="my-16">
                    <div className="container mx-auto md:px-30 flex flex-wrap flex-col md:flex-row items-center">

                        <div className="w-full md:w-2/4 md:p-8 overflow-hidden">
                            <div>
                                <div className="flex items-center content-center justify-center mx-auto">

                                    <Slide direction={"down"}><h1><Translate id="home.camply"> Camply - Polish marketplace for camps and semi-camps. Platform is for sale
                                    </Translate></h1></Slide>
                                </div>
                                <div className="flex justify-center my-5">
                                    <Slide direction={"up"}><a
                                        className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        href={`${localePathRoot}/docs/camply`}
                                    >
                                        <Translate id="home.camply.button">
                                            More informations
                                        </Translate>
                                    </a></Slide>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-2/4 md:p-8 overflow-hidden">
                            <Slide direction={"right"}><img className="" loading="lazy" alt="Camply" width=""
                                                           height=""
                                                           src="landing_page/images/camply.webp"/></Slide>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
