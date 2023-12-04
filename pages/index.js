function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        alignItems: "center",
        background: "#730045",
        borderRadius: "40px",
      }}
    >
      <style>
        {`
          .responsive-image {
            width: 50%; /* Default width for mobile devices */
          }

          .message {
            font-size: 19px; /* Default font size for mobile devices */
            font-family: 'Pacifico';
          }

          @media screen and (min-width: 768px) { /* Adjust the breakpoint as needed */
            .responsive-image {
              width: 30%; /* Width for larger screens like computers */
            }
            .message { /* Targeting the .message class */
              font-size: 24px; /* Increase the font size on larger screens */
            }
          }
        `}
      </style>
      <div style={{ padding: "10px 1px" }}>
        {" "}
        {/* Padding around the image */}
        <img
          className="responsive-image"
          src="/images/20230729_160754.jpg"
          alt="Two Lovers"
          style={{
            display: "block",
            margin: "auto",
            height: "auto",
            borderRadius: "10px",
          }}
        />
      </div>
      <div style={{ padding: "10px 1px" }}>
        {" "}
        {/* Padding around the text */}
        <h1
          className="message"
          style={{
            color: "#ffffff",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          {" "}
          {/* Font size set here */}
          Finding you was the second best event in my life, the best one is the
          present as long as we're both partners and we believe 100% we're soul
          mates, this is a simple message and also a result of my studies, which
          I didn't care about before I met you, you made me strive to be the
          person I've always wanted to become, and although there's still a long
          way to go, you've inspired me to come miles away from where I was.
          <br /> {/* Line break here */}
          <br /> {/* Line break here */}
          Thank you, with all we've been through I wouldn't dare to say God
          didn't have our back during the entire time, and I'm sure that as long
          as we respect ourselves, Him, and others, we're still gonna be blessed
          with health, wisdom, and happiness by him.
          <br /> {/* Line break here */}
          <br /> {/* Line break here */}
          Let's be strong and always help each other in their journey, because
          we're two separate beings that together form one completely new one,
          with a new journey.
          <br /> {/* Line break here */}
          <br /> {/* Line break here */}
          I truly love you, Beatriz.
          <br /> {/* Line break here */}
          <br /> {/* Line break here */}
          Thank you for loving me for who I am, I'll never let you down.
          <br /> {/* Line break here */}
          <br /> {/* Line break here */}
          To you, from your lucky, needy boyfriend. ❤️
        </h1>
      </div>
    </div>
  );
}

export default Home;
