import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using the ReachX Group website (reachxgroup.com) or any of our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website or engage our services.

These Terms apply to all visitors, clients, and users who access or use our services in any capacity. We reserve the right to update these Terms at any time, and continued use of our services following any changes constitutes your acceptance of those changes.`,
  },
  {
    title: '2. Services',
    content: `ReachX Group provides digital services including but not limited to:
• IT Consulting & Web/App Development
• UI/UX Design & AI/ML Solutions
• 3D Animation & Visualization (via Tanzzzx Studio)
• Video Production & Cinematography
• Branding, Strategy & Social Content

All services are subject to individual service agreements, project scopes, and proposals agreed upon separately between ReachX Group and the client. These Terms serve as the baseline governing agreement for all engagements.`,
  },
  {
    title: '3. Client Responsibilities',
    content: `As a client or user of ReachX Group, you agree to:
• Provide accurate, complete, and current information for any project or consultation
• Respond to requests for feedback, approvals, or content in a timely manner
• Not use our services for any unlawful, fraudulent, or harmful purpose
• Respect the intellectual property rights of ReachX Group and third parties
• Not attempt to reverse engineer, copy, or redistribute any proprietary work without written consent

Failure to meet these responsibilities may result in project delays or termination of the engagement at our discretion.`,
  },
  {
    title: '4. Payment Terms',
    content: `Specific payment terms are outlined in individual project proposals and contracts. However, the following general terms apply:
• A deposit (typically 50%) is required before project commencement unless otherwise agreed in writing
• Remaining balances are due upon project completion or at milestones as specified
• Late payments may incur interest charges of 2% per month on the outstanding balance
• ReachX Group reserves the right to pause or terminate work in the event of non-payment
• All fees are non-refundable unless expressly stated in a written project agreement`,
  },
  {
    title: '5. Intellectual Property',
    content: `Upon full and final payment of all agreed fees, the client receives full ownership of the final deliverables created specifically for their project.

ReachX Group retains:
• Ownership of all preliminary concepts, drafts, and unused work
• The right to display completed work in our portfolio and marketing materials unless the client requests confidentiality in writing
• All rights to proprietary tools, frameworks, templates, and methodologies developed by ReachX Group

Third-party assets, fonts, stock media, or software included in deliverables are subject to their respective licenses.`,
  },
  {
    title: '6. Confidentiality',
    content: `Both parties agree to keep confidential any sensitive business information, proprietary processes, or non-public data shared during the course of the engagement. This obligation survives the termination of any project agreement.

ReachX Group will not disclose client information to third parties without prior written consent, except as required by law or to fulfill service delivery using trusted sub-contractors or tools.`,
  },
  {
    title: '7. Limitation of Liability',
    content: `To the maximum extent permitted by applicable law, ReachX Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of revenue, loss of data, or business interruption, even if we have been advised of the possibility of such damages.

Our total liability for any claim arising out of or related to our services shall not exceed the total fees paid by the client for the specific service giving rise to the claim in the three (3) months preceding the claim.`,
  },
  {
    title: '8. Warranties & Disclaimers',
    content: `ReachX Group makes no representations or warranties of any kind, express or implied, that:
• Our services will meet all of your specific requirements or expectations
• Our services will be uninterrupted, error-free, or completely secure
• Results obtained from using our services will be accurate or reliable

We provide all services on an "as is" and "as available" basis. Specific warranties, guarantees, or SLAs may be outlined in individual project agreements.`,
  },
  {
    title: '9. Termination',
    content: `Either party may terminate an engagement with written notice as specified in the project agreement. Upon termination:
• The client is responsible for payment of all work completed up to the termination date
• ReachX Group will deliver all completed work or work-in-progress materials upon receipt of outstanding payment
• Any active retainer arrangements will be settled within 30 days of termination

ReachX Group reserves the right to terminate any engagement immediately, without notice, if the client engages in unlawful, abusive, or unethical conduct.`,
  },
  {
    title: '10. Governing Law',
    content: `These Terms and Conditions are governed by the laws of India. Any disputes arising from these Terms or from any engagement with ReachX Group shall be subject to the exclusive jurisdiction of the courts located in West Bengal, India.

If any provision of these Terms is found to be unenforceable or invalid under applicable law, that provision shall be modified to the minimum extent necessary, while the remaining provisions shall continue in full force and effect.`,
  },
  {
    title: '11. Contact Us',
    content: `If you have any questions, concerns, or requests regarding these Terms and Conditions, please reach out to us at:

Email: reachxgroup@gmail.com
Phone: +91 9123855424
Website: reachxgroup.com

We are committed to addressing your concerns promptly and transparently.`,
  },
];

const TermsAndConditions = () => {
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
            Terms &amp;<br />
            <span style={{
              background: 'linear-gradient(90deg, #7ab3ff, #c084fc)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Conditions</span>
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14, margin: 0 }}>
            Last updated: <strong style={{ color: 'rgba(255,255,255,0.7)' }}>April 14, 2025</strong>
            &nbsp;&nbsp;·&nbsp;&nbsp;
            Effective: <strong style={{ color: 'rgba(255,255,255,0.7)' }}>April 14, 2025</strong>
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
            Please read these Terms and Conditions carefully before using the services of{' '}
            <strong style={{ color: '#0c1a2e' }}>ReachX Group</strong>. By engaging with our agency, website, or any associated services, you confirm that you have read, understood, and agree to be bound by these Terms.
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
            Questions about our terms?
          </p>
          <h3 style={{ color: '#fff', fontSize: 28, fontWeight: 800, margin: '0 0 20px', letterSpacing: '-0.02em' }}>
            We're here to help.
          </h3>
          <a
            href="mailto:reachxgroup@gmail.com"
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

export default TermsAndConditions;
