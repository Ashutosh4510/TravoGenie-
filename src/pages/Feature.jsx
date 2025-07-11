function Feature() {
  const features = [
    { icon: "fas fa-route", title: "Personalized Itineraries", desc: "Tailored plans to match your travel style and interests" },
    { icon: "fas fa-wallet", title: "Smart Budget Planner", desc: "Control expenses and travel within your budget" },
    { icon: "fas fa-plane-departure", title: "Real-time Flight Tracking", desc: "Track flights and get live updates on your trips" },
    { icon: "fas fa-language", title: "Multi-language Support", desc: "Travel-friendly interface in multiple global languages" },
    { icon: "fas fa-headset", title: "24/7 Customer Support", desc: "We're here for you anytime, anywhere" },
    { icon: "fas fa-gift", title: "Exclusive Deals & Offers", desc: "Access special discounts and travel packages" },
    { icon: "fas fa-map-marked-alt", title: "Interactive Map Integration", desc: "Explore destinations visually with our smart maps" },
    { icon: "fas fa-lock", title: "Secure Payment Gateway", desc: "Pay safely and swiftly with trusted partners" }
  ];

  return (
    <section style={{ padding: "8rem 5% 5rem" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2 style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          background: "linear-gradient(135deg, #1E90FF, #2ECC71)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          Why Choose Travogenie?
        </h2>
        <p style={{ color: "#666", fontSize: "1.2rem" }}>
          Your one-stop destination for seamless, smart, and stress-free travel.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "2rem",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {features.map((item, i) => (
          <div key={i} style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "2rem",
            textAlign: "center",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)"
          }}>
            <div style={{
              fontSize: "2.5rem",
              marginBottom: "1.5rem",
              background: "linear-gradient(135deg, #1E90FF, #2ECC71)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              <i className={item.icon}></i>
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Feature;
