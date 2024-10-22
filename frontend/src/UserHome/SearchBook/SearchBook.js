import React, { useState, useEffect } from "react";
import "./SearchBook.css";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import GlassmorphismLoading from "../../Lottie/GlassmorphismLoaging";
import axios from "axios";

function SearchBook() {
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch all categories when the component loads
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = [
          "Anatomy", "ChildCare", "Surgery", "Pharmacology",
          "Nursing", "Pediatrics", "Physiotherapy", "Gynecology"
        ]; // Add more categories as needed
        const booksByCategory = {};

        // Fetch books for each category
        await Promise.all(
          categories.map(async (category) => {
            const response = await axios.get(`http://localhost:5000/api/books?category=${category}`);
            
            // Filter out books with empty titles or incomplete data
            const filteredBooks = response.data.filter(book => book.title && book.pdfLink);

            booksByCategory[category] = filteredBooks;
          })
        );

        setResult(booksByCategory);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Handle input value
  const inputValue = (e) => {
    setSearchValue(e.target.value);
  };

  // Handle form submit
  const submitForm = () => {
    setSelectedCategory(""); // Reset selected category when searching
  };

  // Handle category click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Set the selected category to filter displayed books
  };

  return (
    <div className="searchBook">
      <div className="searchBook__top">
        <div className="search__input">
          <div className="search__Icon">
            <SearchIcon />
          </div>
          <input placeholder="Search Medical Books" onChange={inputValue} />
          <IconButton onClick={submitForm}>
            <SendIcon style={{ color: "white", fontSize: "1.5rem" }} />
          </IconButton>
        </div>
      </div>

      <div className="searchBook__bottom">
        {loading ? (
          <GlassmorphismLoading />
        ) : (
          <>
            <div className="categories">
              {Object.keys(result).map((category, idx) => (
                <button
                  key={idx}
                  className={`categoryButton ${selectedCategory === category ? "active" : ""}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {selectedCategory && result[selectedCategory]?.length > 0 ? (
              <div className="searchBook__category">
                <h2>{selectedCategory}</h2>
                <div className="searchBook__grid">
                  {result[selectedCategory].map((book, index) => (
                    <div key={index} className="bookItem">
                      <h3>{book.title}</h3>
                      <a
                        href={book.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>Read More</button>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ) : selectedCategory && result[selectedCategory]?.length === 0 ? (
              <h2>No books found in this category</h2>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}

export default SearchBook;
