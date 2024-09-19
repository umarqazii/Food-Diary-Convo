import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "primeicons/primeicons.css";
import "@fontsource/montserrat/500.css";
import Card from "react-bootstrap/Card";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import logo from "../assets/CP-Logo 1.png";
import bannerimg from "../assets/cropped-pistaciafood_11 1.png";
import footerimg from "../assets/Rectangle 48.png";
import Navbar from "../components/Navbar";
import { fetchRecipes } from "../utils/apis";
import { Recipe } from "../utils/interfaces";
import { useResponsive } from "../hooks/useResponsive";


const Home = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const breakpoints = [610]; // Example breakpoints: small, medium, large screens
  const breakpointIndex = useResponsive(breakpoints);

  useEffect(() => {
    // Fetching recipes from DummyJSON API
    fetchRecipes()
      .then((data) => {
        setRecipes(data.recipes); // Extracting and setting the recipes array
      })
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <>
    {breakpointIndex === 0 && (
      <>
      <h2>Responsiveness not Adjusted for Screens smaller than 610px as we weren't given a design for smaller screens (Used Custom Hook for this)</h2>
      </>
    )}
    {breakpointIndex === 1 && (
      <>
      <Navbar />
      <div style={{ width: "100%" }}>
      <div
        className="logo and searchbar"
        style={{
          display: "flex",
          flexDirection: "row",
          height: "15vh",
          width: "100%",
          position: "sticky",
          zIndex: 999,
          top: 0,
          backgroundColor: "white",
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
            {/* All Categories Button */}
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
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  fontFamily: "Montserrat, sans-serif",
                  color: "black",
                }}
              >
                All Categories
              </span>
            </button>

            {/* Input Field */}
            <input
              type="text"
              placeholder="Search"
              style={{
                width: "100%",
                padding: "8px 16px 8px 190px",
                border: "1px solid #E5E7EB",
                borderRadius: "9999px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                outline: "none",
                transition: "box-shadow 0.3s ease",
                fontFamily: "Montserrat, sans-serif",
                fontSize:'20px',
                fontWeight: "700",
              }}
              onFocus={(e) => (e.target.style.boxShadow = "0 0 0 3px #3B82F6")}
              onBlur={(e) =>
                (e.target.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)")
              }
            />

            {/* Search Button */}
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
        <div
          className="emptyarea"
          style={{ height: "100%", width: "25%" }}
        ></div>
      </div>

      {/* Banner Image */}
      <div className="bannerimg">
        <img src={bannerimg} alt="bannerimg" style={{ width: "100%" }} />
      </div>

      {/* Subnav */}
      <div
        className="subNav"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "20px",
        }}
      >
        <hr
          style={{
            width: "40%",
            height: "1px",
            backgroundColor: "#D0C5C580",
            border: "none",
          }}
        />
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "50px",
            listStyleType: "none",
            padding: "0",
          }}
        >
          <li
            style={{
              color: "#84BD00",
              fontSize: "20px",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Home
          </li>
          <li
            style={{
              color: "#84BD00",
              fontSize: "20px",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Explore
          </li>
          <li
            style={{
              color: "#84BD00",
              fontSize: "20px",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Help
          </li>
          <li
            style={{
              color: "#84BD00",
              fontSize: "20px",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Profile
          </li>
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

      {/* Recipes Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <div
          className="cards"
          style={{
            marginTop: "50px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "33px",
            width: "80%",
          }}
        >
          {recipes.map((recipe) => (
            <Card
            key={recipe.id}
            className="Card"
            style={{
              width: "20rem",
              cursor: "pointer",
              marginTop: "50px",
              transition: "transform 0.3s ease", // Add smooth transition
            }}
            onClick={() => navigate(`/recipe-details/${recipe.id}`)}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")} // Scale up on hover
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}   // Reset scale when not hovering
          >
              <Card.Img
                variant="top"
                src={recipe.image}
                style={{ borderRadius: "5px", width: "100%", height: "300px" }}
              />
              <Card.Body
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  className="title-and-reviews"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>{recipe.name}</span>
                  <span
                    style={{ backgroundColor: "#84BD00", padding: "2px 5px" }}
                  >
                    Reviews: {recipe.reviewCount}
                  </span>
                </div>
                <div
                  className="time-and-mealtype"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>{recipe.prepTimeMinutes} mins</span>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span>{recipe.mealType.join("/")}</span>
                    <div style={{ display: "flex", alignItems: "right" }}>
                      {Array.from(
                        { length: Math.floor(recipe.rating) },
                        (_, i) => (
                          <FaStar
                            key={i}
                            style={{ color: "#FFD700", marginRight: "2px" }}
                          />
                        )
                      )}

                      {/* Render half star if rating includes .5 */}
                      {recipe.rating % 1 !== 0 && (
                        <FaStarHalfAlt
                          style={{ color: "#FFD700", marginRight: "2px" }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer Image */}
      <div
        className="footerimg"
        style={{ position: "relative", width: "100%", marginTop: "50px" }}
      >
        <img
          src={footerimg}
          alt="footerimg"
          style={{ width: "100%", display: "block" }}
        />
        <img
          src={logo}
          alt=""
          style={{
            width: "15%",
            position: "absolute",
            bottom: "25%",
            left: "10%", // Adjust positioning as needed
            zIndex: 1, // Ensure it's above the image
          }}
        />
        <h2
          style={{
            color: "white",
            position: "absolute",
            bottom: "0%",
            left: "10%", // Adjust positioning as needed
            zIndex: 1, // Ensure it's above the image
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            fontSize:'2vw'
          }}
        >
          All rights reserved
        </h2>
      </div>
    </div>
      </>
    )}
    
    </>
  );
};

export default Home;
