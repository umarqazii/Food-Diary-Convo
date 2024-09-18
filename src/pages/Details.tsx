import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "primeicons/primeicons.css";
import { FcOk } from "react-icons/fc";
import { Audio } from "react-loader-spinner";
import Card from "react-bootstrap/Card";
import "@fontsource/montserrat/600.css";
import logo from "../assets/CP-Logo 1.png";
import bannerimg from "../assets/cropped-pistaciafood_11 1.png";
import footerimg from "../assets/Rectangle 48.png";

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState<Recipe | null>(null); // Initialize with `null` to indicate no data initially
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    // Fetching recipe by ID from DummyJSON API
    
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((response) => response.json())
      .then((data: Recipe) => {
        setRecipe(data);
      })
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [id]); // Add `id` as a dependency to trigger the effect when `id` changes

  useEffect(() => {
    if (recipe) {
      console.log(recipe); // This will log the updated recipe when the state changes
    }
  }, [recipe]); // This effect runs when `recipe` state changes

  return (
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
          <img src={logo} alt="logo" style={{ width: "40%", cursor: "pointer" }} 
          onClick={() => {navigate("/")}}
          />
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
          ></div>
        </div>

        {/* Empty Area */}
        <div
          className="emptyarea"
          style={{ height: "100%", width: "25%" }}
        ></div>
      </div>

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
              cursor: "pointer",
            }}
            onClick={() => {navigate("/")}}
          >
            Home
          </li>
          <li
            style={{
              color: "#84BD00",
              fontSize: "20px",
              fontFamily: "Montserrat, sans-serif",
              cursor: "pointer",
            }}
            onClick={() => {navigate("/")}}
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
      <div className="recipe" style={{}}>
        {recipe ? (
          <div className="recipe-container" style={{ display: "flex" }}>
            <div
              className="recipe-details"
              style={{
                width: "50%",
                height: "auto",
                padding: "20px",
                borderRadius: "10px",
                margin: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#E5E7EB",
                  width: "60%",
                  padding: "15px",
                  borderRadius: "10px",
                }}
              >
                <h2>{recipe.name}</h2>
                {/* recipe instructions concatenated */}
                <p>{recipe.instructions.join("\n")}</p>
                <br></br>
                <h3>Ingredients</h3>
                <hr style={{ width: "100%", color: "gray" }} />
                {recipe.ingredients.map((ingredient) => (
                  <p>
                    <FcOk /> {"  "} {ingredient}
                  </p>
                ))}
              </div>
            </div>

            <div
              className="recipe-image"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
                height: "auto",
              }}
            >
              <img
                src={recipe.image}
                alt="recipe"
                style={{ width: "70%", borderRadius: "100%" }}
              />
            </div>
          </div>
        ) : (
          <>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  height: "8rem",
                  width: "8rem",
                  borderRadius: "50%",
                  borderBottom: "2px solid black",
                  animation: "spin 1s linear infinite",
                }}
              ></div>
            </div>
            <style>
              {`
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`}
            </style>
          </>
        )}
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
            width: "200px",
            position: "absolute",
            bottom: "60px",
            left: "100px", // Adjust positioning as needed
            zIndex: 1, // Ensure it's above the image
          }}
        />
        <h2
          style={{
            color: "white",
            position: "absolute",
            bottom: "10px",
            left: "100px", // Adjust positioning as needed
            zIndex: 1, // Ensure it's above the image
          }}
        >
          All rights reserved
        </h2>
      </div>
    </div>
  );
};

export default RecipeDetails;
