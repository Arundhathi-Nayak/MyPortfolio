import { motion } from 'framer-motion';
import { ArrowDown, FileText } from 'lucide-react';
import { profile, resumeHref } from '../data/profile';
import { CodeWindow } from './CodeWindow';
import { SocialLinks } from './SocialLinks';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const rise = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export function Hero() {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="container hero__grid">
        <motion.div className="hero__copy" variants={stagger} initial="hidden" animate="show">
          <motion.p className="hero__status" variants={rise}>
            <span className="hero__status-dot" aria-hidden="true" />
            Open to software developer roles
          </motion.p>

          <h1 className="hero__title">
            <motion.span className="hero__greeting" variants={rise}>
              Hi, I'm {profile.name}
            </motion.span>
            <motion.span className="hero__headline" variants={rise}>
              {profile.headline}
            </motion.span>
          </h1>

          <motion.p className="hero__intro" variants={rise}>
            {profile.intro}
          </motion.p>

          <motion.div className="hero__actions" variants={rise}>
            <a className="btn btn--primary" href="#projects">
              View Projects
              <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a className="btn btn--ghost" href={resumeHref} target="_blank" rel="noopener noreferrer">
              <FileText size={18} aria-hidden="true" />
              View Resume
            </a>
          </motion.div>

          <motion.div variants={rise}>
            <SocialLinks />
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
        >
          <CodeWindow />
        </motion.div>
      </div>
    </section>
  );
}