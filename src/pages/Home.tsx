import React from "react";
import "primeicons/primeicons.css";
import logo from "../assets/CP-Logo 1.png";
import bannerimg from "../assets/cropped-pistaciafood_11 1.png";

const Home = () => {
  return (
    <div>
      <div
        className="logo and searchbar"
        style={{
          display: "flex",
          flexDirection: "row",
          height: "15vh",
          width: "100vw",
        }}
      >
        {/* Logo Section */}
        <div
          className="logodiv"
          style={{
            height: "100%",
            width: "30%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="logo" style={{ width: "40%" }} />
        </div>

        {/* Search Bar Section */}
        <div
          className="searchbar"
          style={{
            height: "100%",
            width: "60%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "80%",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* All Categories Button (Inside Search Bar) */}
            <button
              style={{
                position: "absolute",
                left: "1px",
                backgroundColor: "#E5E7EB",
                borderRadius: "9999px",
                height: "90%",
                padding: "0 16px",
                color: "#4B5563",
                border: "none",
                cursor: "pointer",
                zIndex: "1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "14px" }}>All Categories</span>
            </button>

            {/* Input Field (Spaced for All Categories) */}
            <input
              type="text"
              placeholder="Search"
              style={{
                width: "100%",
                padding: "8px 16px 8px 130px", // Extra left padding to make space for the button
                border: "1px solid gray",
                borderRadius: "9999px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                outline: "none",
                transition: "box-shadow 0.3s ease",
                textAlign: "left", // Aligns text to left
              }}
              onFocus={(e) =>
                (e.target.style.boxShadow = "0 0 0 3px #3B82F6")
              }
              onBlur={(e) =>
                (e.target.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)")
              }
            />

            {/* Search Button (Right Side) */}
            <button
              style={{
                position: "absolute",
                right: "1px",
                height: "90%",
                padding: "8px 16px",
                backgroundColor: "#E5E7EB",
                borderRadius: "9999px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i
                className="pi pi-search"
                style={{ fontSize: "18px", color: "black" }}
              ></i>
            </button>
          </div>
        </div>

        {/* Empty Area */}
        <div className="emptyarea" style={{ height: "100%", width: "25%" }}></div>
      </div>
      <div className="bannerimg">
        <img src={bannerimg} alt="bannerimg" style={{ width: "100%" }} />
      </div>

      <div className="subNav" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", marginTop: "20px" }}>
        {/* horizontal line */}

        <hr
          style={{
            width: "40%",
            height: "1px",
            backgroundColor: "#D0C5C580",
            border: "none",
          }}
        />

        <ul style={{display:'flex', flexDirection:'row', gap: '50px', listStyleType: 'none', padding: '0'}}>
            <li style={{color:'#84BD00', fontSize:'20px'}}>Home</li>
            <li style={{color:'#84BD00', fontSize:'20px'}}>Explore</li>
            <li style={{color:'#84BD00', fontSize:'20px'}}>Help</li>
            <li style={{color:'#84BD00', fontSize:'20px'}}>Profile</li>
        </ul>

        <hr
          style={{
            width: "40%",
            height: "2px",
            backgroundColor: "#D0C5C580",
            border: "none",
          }}
        />
      </div>

    </div>
  );
};

export default Home;
