import React from 'react';
import './Home.css';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import './HomeContent.css';

function Home() {
    const links = [
        { url: 'https://elite.com', label: 'Elite' },
        { url: 'https://www.researchgate.net', label: 'Research Gate' },
        { url: 'https://pubmed.ncbi.nlm.nih.gov', label: 'PubMed' },
        { url: 'https://www.bibguru.com', label: 'BibGuru' },
        { url: 'https://discovery.researcher.life/', label: 'R Discovery' },
        { url: 'https://www.paperdigest.org', label: 'Paper Digest' },
        { url: 'https://www.chatpdf.com', label: 'ChatPDF' },
        { url: 'https://www.perplexity.ai', label: 'Perplexity AI' },
        { url: 'https://www.litmap.com', label: 'LitMap' }
    ];

    return (
        <div className="mainContent" style={{ marginTop: '65px', height: '100vh' }}>
            <div className='overlayer' style={{ padding: '50px 50px' }}>
                <div className='content' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '60vh' }}>
                    <div className="top__content">
                        <h1 style={{ color: 'white', fontSize: '2.5rem' }}>
                            <span style={{ color: 'white', fontSize: '3rem' }}>Rivers state school of nursing and midwifery </span>
                            E-Library <TurnedInNotIcon />
                        </h1>
                    </div>
                    <div className="bottom__content">
                        <h5 className="tagline">Smart Learning E-library Platform</h5>
                        <h1 className="title">Medical Ebooks available here<span>!</span></h1>
                        <p className="message">You can Read and Do Research here</p>
                        <div className="icons">
                            <a className="social-icon">
                                <i id="l_with_fb" className="fab fa-facebook-f"></i>
                            </a>
                            <a id="l_with_t" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a id="l_with_gl" className="social-icon">
                                <i className="fab fa-google"></i>
                            </a>
                            <a id="l_with_l" className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Links section at the bottom */}
                <div className="links-section" style={{ marginTop: '20px', textAlign: 'center' }}>
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
            </div>
        </div>
    );
}

export default Home;
