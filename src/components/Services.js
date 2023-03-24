import {BsArrowUpRight} from "react-icons/bs"

import {motion} from "framer-motion"
import { fadeIn } from "../variant"

const services = [{
    name:"Desarrollo web",
    description:"Desarrollo web con el MERN stack",
    link:"Ver mas"
},
{
    name:"Analisis de datos",
    description:"Analisis de datos con Python",
    link:"Ver mas"
},
{
    name:"Geomatica ",
    description:"Navegacion satelital, automatizacion de procesos cartograficos, analisis geoespacial, topografia",
    link:"Ver mas"
}


]


function Services(){
    return(
        <section id="services" className="section">
            <div className="container mx-auto">
                <div className="flex fkex-col lg:flex-row">
                    {/*texto*/}
                    <motion.div 
                    variants={fadeIn("right",0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}}
                    
                    className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
                        <h2 className="h2 mb-6 text-accent">Que hago?</h2>
                        <h3 className="h3 max-w-[455px] mb-16">Soy Ingeniero geomatico, candidato a doctor en la Universidad de Calgary con mas de 10 anios de experiencia en programacion</h3>
                        <button className="btn btn-sm">Ver mi trabajo</button>
                    </motion.div>
                    {/*servicios*/}
                    <motion.div 
                    variants={fadeIn("left",0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}}className="flex-1">
                        {/*Lista de servicios */}
                        <div>
                            {services.map((service,index)=>{
                                //desctructurar
                                const {name, description, link} = service
                                return(
                                    <div className="border-b border-white/20 h-[146px] mb-[38px] flex" key={index}>
                                        <div className="max-w-[476px]">
                                            <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                                                {name}
                                                </h4>
                                            <p className="font-secondary leading-tight">
                                                {description}</p>
                                        </div>
                                        <div className="flex flex-col flex-1 items-end">
                                            <a className="btn w-9 h-9 mb-[42px] flex justify-center items-center" href="#">
                                                <BsArrowUpRight/>
                                            </a>
                                            <a className="text-gradient text-sm" href="#">{link}</a>
                                        </div>
                                    </div>

                                )
                            })}
                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    )

}

export default Services