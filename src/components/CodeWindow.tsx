import { motion } from 'framer-motion';

type TokenKind = 'kw' | 'key' | 'str' | 'punc' | 'com' | 'bool' | 'plain';
type Token = [TokenKind, string];

/** The code-inspired hero illustration. Edit the strings freely. */
const lines: Token[][] = [
  [['com', '// arundhathi.ts']],
  [['kw', 'const '], ['plain', 'developer '], ['punc', '= {']],
  [['plain', '  '], ['key', 'name'], ['punc', ': '], ['str', '"Arundhathi Nayak"'], ['punc', ',']],
  [['plain', '  '], ['key', 'role'], ['punc', ': '], ['str', '"Software Developer"'], ['punc', ',']],
  [['plain', '  '], ['key', 'interests'], ['punc', ': [']],
  [['plain', '    '], ['str', '"Web applications"'], ['punc', ',']],
  [['plain', '    '], ['str', '"AI-powered solutions"'], ['punc', ',']],
  [['plain', '  '], ['punc', '],']],
  [['plain', '  '], ['key', 'approach'], ['punc', ': ['], ['str', '"problem-solving"'], ['punc', ', '], ['str', '"learning"'], ['punc', '],']],
  [['plain', '  '], ['key', 'featuredProject'], ['punc', ': '], ['str', '"HealthGrid AI"'], ['punc', ',']],
  [['plain', '  '], ['key', 'openToWork'], ['punc', ': '], ['bool', 'true'], ['punc', ',']],
  [['punc', '};']],
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.55 } },
};

const lineVariant = {
  hidden: { opacity: 0, x: -6 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export function CodeWindow() {
  return (
    <div
      className="code"
      role="img"
      aria-label="Code snippet describing Arundhathi Nayak as a software developer interested in web applications and AI-powered solutions, open to work."
    >
      <div className="code__chrome" aria-hidden="true">
        <span className="code__dot" />
        <span className="code__dot" />
        <span className="code__dot" />
        <span className="code__tab">arundhathi.ts</span>
      </div>

      <motion.ol className="code__body" aria-hidden="true" variants={container} initial="hidden" animate="show">
        {lines.map((tokens, index) => (
          <motion.li key={index} className="code__line" variants={lineVariant}>
            <span className="code__no">{index + 1}</span>
            <span className="code__text">
              {tokens.map(([kind, text], i) => (
                <span key={i} className={`tok tok--${kind}`}>
                  {text}
                </span>
              ))}
              {index === lines.length - 1 && <span className="code__cursor" />}
            </span>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
}