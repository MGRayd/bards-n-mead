import React, { useEffect, useState } from 'react';
import AccordionCard from '../components/AccordionCard';
import ReactMarkdown from 'react-markdown';
import styles from '../styles/Rules.module.css';
import rehypeRaw from 'rehype-raw';

export default function Rules() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/rules.md`)
      .then(res => res.text())
      .then(text => {
        const sections = text.split(/^# (.+)/gm);
        const parsed = [];
        for (let i = 1; i < sections.length; i += 2) {
          const title = sections[i].trim();
          const body = sections[i + 1].trim();
          parsed.push({ title, body });
        }
        setContent(parsed);
      });
  }, []);

  return (
    <div className={styles.rulesContainer}>
      <h1 className={styles.title}>📜 Game Rules</h1>
      {content.map((section, idx) => (
        <AccordionCard key={idx} title={section.title}>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            skipHtml={false}
            components={{
              img: ({ node, ...props }) => (
                <img
                  {...props}
                  src={`${process.env.PUBLIC_URL}${props.src}`}
                  alt={props.alt}
                  className={styles.cardImage}
                />
              ),
              div: ({ node, ...props }) => {
                if (props.className === 'card-row') {
                  return <div className={styles.cardRow}>{props.children}</div>;
                }
                return <div {...props} />;
              }
            }}
          >
            {section.body}
          </ReactMarkdown>
        </AccordionCard>
      ))}
    </div>
  );
}
