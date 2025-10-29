import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "./ui/card";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    title: "Bachelor of Geography (GIS)",
    institution: "Faculty of Arts, Assiut University",
    description: "Specialized in Geographic Information Systems with focus on spatial analysis and cartography.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Award,
    title: "ICDL Certification",
    institution: "Assiut University",
    description: "International Computer Driving License covering essential digital literacy and computer skills.",
    color: "from-purple-500 to-pink-500"
  }
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-muted/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Education & <span className="gradient-text">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="glass p-6 h-full hover-lift">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-accent font-medium mb-3">{item.institution}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
