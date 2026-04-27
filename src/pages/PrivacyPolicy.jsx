import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us, such as when you fill out a contact form, schedule a consultation, or communicate with us. This may include your name, email address, phone number, company name, and any message content you submit.

We also automatically collect certain technical information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages visited. This is collected through standard web technologies such as cookies and server logs.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to:
• Respond to your inquiries and fulfill service requests
• Schedule and manage consultation calls and project onboarding
• Send you relevant updates, proposals, or project-related communication
• Improve and optimize our website and service delivery
• Comply with legal obligations and protect our legitimate business interests

We do not sell, rent, or share your personal information with third parties for their marketing purposes.`,
  },
  {
    title: '3. Cookies & Tracking',
    content: `Our website uses cookies — small text files stored on your device — to enhance your browsing experience and analyze site traffic. These include:

• Essential cookies: Required for core site functionality
• Analytics cookies: Help us understand how visitors interact with our pages (e.g., Google Analytics)
• Preference cookies: Remember your settings and choices

You may disable cookies through your browser settings, though this may affect certain features of the site.`,
  },
  {
    title: '4. Third-Party Services',
    content: `We may use trusted third-party services including:
• Cal.com — for scheduling and booking management
• Google Analytics — for website traffic analysis
• Vercel / hosting providers — for site delivery and performance

Each third party has its own privacy policy, and we encourage you to review them. We only work with providers who maintain appropriate data protection standards.`,
  },
  {
    title: '5. Data Retention',
    content: `We retain your personal data only for as long as necessary to fulfill the purposes described in this policy, or as required by applicable law. Contact and inquiry data is typically retained for up to 3 years from the date of last interaction, unless you request earlier deletion.`,
  },
  {
    title: '6. Your Rights',
    content: `Depending on your jurisdiction, you may have the right to:
• Access the personal data we hold about you
• Request correction of inaccurate data
• Request deletion of your data ("right to be forgotten")
• Object to or restrict certain processing of your data
• Request portability of your data

To exercise any of these rights, please contact us at the email address below. We will respond within 30 days.`,
  },
  {
    title: '7. Data Security',
    content: `We implement industry-standard technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: '8. Children\'s Privacy',
    content: `Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected data from a minor, please contact us immediately and we will delete it.`,
  },
  {
    title: '9. Changes to This Policy',
    content: `We may update this Privacy Policy periodically to reflect changes in our practices or applicable regulations. When we do, we will update the "Last Updated" date at the top of this page. We encourage you to review this policy periodically.`,
  },
  {
    title: '10. Contact Us',
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal data, please contact us at:

Email: hello@reachxgroup.com
Website: reachxgroup.com

We are committed to resolving any privacy-related concerns promptly and transparently.`,
  },
];

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: '#f0f7ff', minHeight: '100vh', fontFamily: "'DM Sans', 'Inter', sans-serif" }}>

      {/* ── HERO HEADER ── */}
      <div style={{
        background: 'linear-gradient(135deg, #050505 0%, #0c1a2e 60%, #1a2e4a 100%)',
        padding: '80px 24px 60px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{
          position: 'absolute', top: -120, right: -120,
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(44,103,242,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: -80, left: '20%',
          width: 300, height: 300, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(100,160,255,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Back button */}
          <button
            onClick={() => navigate('/')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              color: 'rgba(255,255,255,0.55)', background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 100, padding: '8px 18px 8px 12px',
              cursor: 'pointer', fontSize: 13, fontWeight: 600,
              marginBottom: 40, letterSpacing: '0.02em',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
          >
            <ArrowLeft size={15} />
            Back to Home
          </button>

          {/* Badge */}
          <div style={{
            display: 'inline-block',
            background: 'rgba(44,103,242,0.2)',
            border: '1px solid rgba(44,103,242,0.35)',
            borderRadius: 100, padding: '5px 16px',
            fontSize: 11, fontWeight: 700, letterSpacing: '0.15em',
            textTransform: 'uppercase', color: '#7ab3ff',
            marginBottom: 20,
          }}>
            Legal Document
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 800, color: '#fff',
            lineHeight: 1.05, letterSpacing: '-0.03em',
            margin: '0 0 20px',
          }}>
            Privacy<br />
            <span style={{
              background: 'linear-gradient(90deg, #7ab3ff, #c084fc)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Policy</span>
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14, margin: 0 }}>
            Last updated: <strong style={{ color: 'rgba(255,255,255,0.7)' }}>April 13, 2025</strong>
            &nbsp;&nbsp;·&nbsp;&nbsp;
            Effective: <strong style={{ color: 'rgba(255,255,255,0.7)' }}>April 13, 2025</strong>
          </p>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px 100px' }}>

        {/* Intro card */}
        <div style={{
          background: '#fff',
          borderRadius: 20,
          padding: '28px 32px',
          marginBottom: 40,
          border: '1px solid rgba(12,26,46,0.07)',
          boxShadow: '0 2px 20px rgba(12,26,46,0.06)',
        }}>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#4a5568', margin: 0 }}>
            At <strong style={{ color: '#0c1a2e' }}>ReachX Group</strong>, we are committed to protecting your privacy and handling your personal data with transparency and care. This Privacy Policy explains what information we collect, how we use it, and the choices available to you.
          </p>
        </div>

        {/* Section cards */}
        {sections.map((section, i) => (
          <div
            key={i}
            style={{
              background: '#fff',
              borderRadius: 20,
              padding: '28px 32px',
              marginBottom: 16,
              border: '1px solid rgba(12,26,46,0.07)',
              boxShadow: '0 2px 20px rgba(12,26,46,0.04)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: 'linear-gradient(135deg, #2c67f2, #7ab3ff)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, marginTop: 2,
                fontSize: 12, fontWeight: 800, color: '#fff',
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <h2 style={{
                fontSize: 19, fontWeight: 700, color: '#0c1a2e',
                margin: 0, lineHeight: 1.3, letterSpacing: '-0.01em',
              }}>
                {section.title.replace(/^\d+\. /, '')}
              </h2>
            </div>

            <div style={{ paddingLeft: 52 }}>
              {section.content.split('\n').map((line, li) =>
                line.trim() === '' ? (
                  <br key={li} />
                ) : (
                  <p key={li} style={{
                    fontSize: 15, lineHeight: 1.8,
                    color: line.startsWith('•') ? '#2d3748' : '#4a5568',
                    margin: '0 0 4px',
                    paddingLeft: line.startsWith('•') ? 0 : 0,
                  }}>
                    {line}
                  </p>
                )
              )}
            </div>
          </div>
        ))}

        {/* Bottom CTA */}
        <div style={{
          marginTop: 40,
          background: 'linear-gradient(135deg, #0c1a2e, #1a3558)',
          borderRadius: 24,
          padding: '40px 36px',
          textAlign: 'center',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 12 }}>
            Questions about your data?
          </p>
          <h3 style={{ color: '#fff', fontSize: 28, fontWeight: 800, margin: '0 0 20px', letterSpacing: '-0.02em' }}>
            We're here to help.
          </h3>
          <a
            href="mailto:hello@reachxgroup.com"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#2c67f2', color: '#fff',
              padding: '14px 28px', borderRadius: 100,
              fontSize: 14, fontWeight: 700, textDecoration: 'none',
              letterSpacing: '0.02em',
            }}
          >
            Contact Us →
          </a>
        </div>

      </div>

      {/* Simple footer strip */}
      <div style={{
        background: '#050505',
        textAlign: 'center',
        padding: '20px 24px',
        color: 'rgba(255,255,255,0.25)',
        fontSize: 12,
      }}>
        © {new Date().getFullYear()} ReachX Group. All Rights Reserved.
        &nbsp;·&nbsp;
        <button
          onClick={() => navigate('/')}
          style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer', fontSize: 12, textDecoration: 'underline' }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
