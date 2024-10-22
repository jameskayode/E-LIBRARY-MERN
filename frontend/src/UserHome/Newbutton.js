import React from 'react';

const Newbutton = () => {
  const links = [
    { url: 'https://elite.com', label: 'Elite' },
    { url: 'https://www.researchgate.net', label: 'Research Gate' },
    { url: 'https://pubmed.ncbi.nlm.nih.gov', label: 'PubMed' },
    { url: 'https://www.bibguru.com', label: 'BibGuru' },
    { url: 'https://www.researcher-app.com', label: 'R Discovery' },
    { url: 'https://www.paperdigest.org', label: 'Paper Digest' },
    { url: 'https://www.chatpdf.com', label: 'ChatPDF' },
    { url: 'https://www.perplexity.ai', label: 'Perplexity AI' },
    { url: 'https://www.litmap.com', label: 'LitMap' }
  ];

  return (
    <div>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            margin: '10px',
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontSize: '16px'
          }}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default Newbutton;
