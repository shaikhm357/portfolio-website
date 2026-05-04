import SectionHeader from "../ui_premitives/SectionHeader";

const CLIENTS_DATA = [
  {
    name: "Alwrite",
    logo: "https://www.alwrite.com/wp-content/uploads/2021/01/alwrite_logo_v3.png",
    url: "https://www.alwrite.com/"
  },
  {
    name: "AdsCult",
    logo: "https://adscult.com/wp-content/uploads/2025/08/AdsCult-logo.webp",
    url: "https://adscult.com/"
  },
  {
    name: "You?",
    logo: null,
    url: "#contact"
  }
];

const Clients = () => {
  return (
    <section id="clients" className="page-section band-section" style={{ maxWidth: "100%", background: "rgba(10,25,44,.4)", padding: "60px 80px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader number="03" title="Organizations I've Contributed To" />
        <div className="clients-logos-track">
          <div className="clients-logos-slide">
             {[...CLIENTS_DATA, ...CLIENTS_DATA].map((client, i) => (
               <a
                 key={`logo-${i}`}
                 href={client.url}
                 target={client.url.startsWith('#') ? '_self' : '_blank'}
                 rel={client.url.startsWith('#') ? '' : 'noopener noreferrer'}
                 className="client-logo-link"
               >
                 <div
                   className="client-logo-box"
                   style={client.logo ? {} : { background: 'rgba(79,195,247,.15)', border: '2px dashed var(--accent)' }}
                 >
                   {client.logo ? (
                     <img
                       src={client.logo}
                       alt={`${client.name} logo`}
                       className="client-logo"
                     />
                   ) : (
                     <span style={{ fontSize: '2.5rem', color: 'var(--accent)', fontWeight: '900', textShadow: '0 0 15px var(--accent)', lineHeight: '1' }}>?</span>
                   )}
                 </div>
                 <span className="client-name">{client.name}</span>
               </a>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
