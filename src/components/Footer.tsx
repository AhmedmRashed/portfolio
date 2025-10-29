import { motion } from "framer-motion";
import { Github, Mail, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                © 2025 Ahmed Mohammed Rashed. All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="glass hover:bg-accent/10"
                asChild
              >
                <a href="https://github.com/AhmedmRashed" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="glass hover:bg-accent/10"
                asChild
              >
                <a href="mailto:ahmedmarraba@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="glass hover:bg-accent/10"
                onClick={scrollToTop}
              >
                <ArrowUp className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
