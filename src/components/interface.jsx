import { motion } from "framer-motion";

const Section = (props) => {
    const { children } = props;


    return <motion.section className={`

    h-screen w-screen p-8 max-w-screen-2xl mx-auto
    flex flex-col items-start justify-center `}

        initial={{
            opacity: 0,
            y: 50,
        }}

        whileInView={{
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.6,
            }
        }}
    >{children}
    </motion.section>;
};



export const Interface = () => {
    return (
        <div className="flex flex-col items-center w-screen">
            <AboutSection />
            <SkillsSection />
            <ContactSection />
            <Section>
                <h1> Home </h1>
            </Section>
            <Section>
                <h1> Projects </h1>
            </Section>
            <Section>
                <h1> Contact </h1>
            </Section>
        </div>
    )
};

const AboutSection = () => {
    return (
        <Section>
            <h1 className="text-6xl font-extrabold leading-snug">
                Hi, I'm
                <br />
                <span className="bg-white px-1 italic"> Masaki </span>
            </h1>
            <motion.p className="text-lg text-grey-600 mt-4"
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    delay: 1.5,
                }}>

                I am an computer science student
                <br />
                currently working as junior developer
            </motion.p>
            <motion.button className={`bg-indigo-600 text-white py-4 px-8 
            rounded-lg font-bold text-lg mt-16`}

                whileHover={{ scale: 1.3}} 
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    delay: 2.5,
                }}
            >
                Contact me
            </motion.button>

        </Section>

    );
};


const skills = [
    {
        title: "Threejs / React Three Fiber",
        level: 70
    },
    {
        title: "JavaScript",
        level: 80
    },
    {
        title: "Java",
        level: 90
    },
    {
        title: "MySQL",
        level: 80
    },
    {
        title: "Python",
        level: 90
    },
    {
        title: "Algorithm Design",
        level: 100
    },
    {
        title: "DataBase Development",
        level: 70
    },
    {
        title: "TypeScript",
        level: 60
    }

];

const languages = [
    {
        title: "Japanese",
        level: 100
    },
    {
        title: "Mandarin",
        level: 100
    },
    {
        title: "English",
        level: 100
    }

];


const SkillsSection = () => {
    return (
        <Section>
            <div>
                <h2 className="text-5xl font-bold">Skills</h2>
                <div className="mt-8 space-y-4">
                    {skills.map((skill, index) => (
                        <div className="w-64" key={index}>
                            <motion.h3 className="text-xl font-bold text-gray-800"
                                initial={{
                                    opacity: 0,
                                    y: 25,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 1.5,
                                }}>{skill.title}</motion.h3>
                            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                <motion.div className="h-full bg-indigo-500 rounded-full" style={{ width: `${skill.level}%` }}
                                    initial={{
                                        opacity: 0,
                                        y: 25,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: 1.5,
                                    }} />


                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div>
                <h2 className="text-5xl font-bold mt-10">Languages</h2>
                <div className="mt-8 space-y-4">
                    {languages.map((lng, index) => (
                        <div className="w-64" key={index}>
                            <motion.h3 className="text-xl font-bold text-gray-800"
                                initial={{
                                    opacity: 0,
                                    y: 25,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 1.5,
                                }}>{lng.title} </motion.h3>
                            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                <motion.div className="h-full bg-indigo-500 rounded-full" style={{ width: `${lng.level}%` }}
                                    initial={{
                                        opacity: 0,
                                        y: 25,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: 1.5,
                                    }} />


                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );

};

const ContactSection = () => {
    return (
        <Section>
            <h2 className="text-5xl font-bold">Contact Me </h2>
            <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
                <form>
                    <label for="name" className="font-medium text-gray-900 block mb-1"> Name </label>
                    <input type="text" name="name" id="name" className="block w-full rounded-md border-0 text-gray-900 shadow ring-1 ring-inset ring-gray-300 
                    placeholder:text-gray"></input>

                    <label for="email" className="font-medium text-gray-900 block mb-1 mt-8"> Email </label>
                    <input type="text" name="name" id="name" className="block w-full rounded-md border-0 text-gray-900 shadow ring-1 ring-inset ring-gray-300 
                    placeholder:text-gray"></input>

                    <label for="msg" className="font-medium text-gray-900 block mb-1 mt-8"> Message </label>
                    <textarea name="message" id="message" className="block w-full rounded-md border-0 text-gray-900 shadow ring-1 ring-inset ring-gray-300 
                    placeholder:text-gray"/>
                    <motion.button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16"
                        whileHover={{ scale: 1.3 }}>
                        Submit!
                    </motion.button>



                </form>
            </div>

        </Section>
    );

}