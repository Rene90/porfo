import CountUp from "react-countup"
import {useInView} from "react-intersection-observer"
import {motion} from "framer-motion"
import { fadeIn } from "../variant"
function About(){
    const [ref,inView] = useInView({
        threshold:0.5
    })
    return(
        <section id="about" className="section" ref={ref}>
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
                    <motion.div 
                    variants={fadeIn("right",0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}}
                    className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></motion.div>
                    <motion.div 
                     variants={fadeIn("left",0.5)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{once:false, amount:0.3}}
                    
                     className="flex-1">
                        <h2 className="h2 text-accent">
                           Acerca de mi 
                        </h2>
                        <h3 className="h3 mb-4">Soy Ingeniero geomatico, candidato a doctor en la Universidad de Calgary con mas de 10 anios de experiencia en programacion</h3>
                        <p className="mb-6">
                            Mi experiencia abarca temas relacionados con geomatica, topografia, geodesia y navegacion satelital. Soy desarrollador fullstack de aplicaciones web con el MERN stack y Django. Soy analista de datos georreferenciados con Python y R, y con software de analisis geoespacial QGIS.
                        </p>
                        <div className="flex gap-x-6 lg:gap-x-10 mb-12 pt-4">
                            <div>
                                <div className="text-[40px] text-gradient mb-2">
                                    {inView ? <CountUp start={0} end={13} duration={3}/>:null}
                                </div>
                                <div className="font-primary text-sm tracing-[2px]">
                                    Anios de <br/>
                                    Experiencia
                                </div>
                            </div>
                            <div>
                                <div className="text-[40px]  text-gradient mb-2">
                                    {
                                        inView ? <CountUp start={0} end={15} duration={3}/>:null}
                                        k+
                                </div>
                                <div className="font-primary text-sm tracing-[2px]">
                                    Proyectos <br/>
                                    Realizados
                                </div>
                            </div>
                            <div>
                                <div className="text-[40px] text-gradient mb-2">
                                    {
                                        inView ? <CountUp start={0} end={12} duration={3}/>:null}
                                        k+
                                </div>
                                <div className="font-primary text-sm tracing-[2px]">
                                    Clientes  <br/>
                                    Satisfechos
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-x-8 items-center">
                            <button className="btn btn-lg">Contactame</button>
                            <a href="#" className="text-gradient btn-link">
                                Mi Portfolio
                            </a>
                        </div>
                    </motion.div>

                </div>

            </div>
            
        </section>
    )

}

export default About