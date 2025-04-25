import React, { useEffect, useState } from "react";
import { fetchCatalogue } from "../../api"; // Import API function
import "./CataloguesPage.css";

const CataloguesPage = () => {
  const [catalogue, setCatalogue] = useState([]);

  useEffect(() => {
    fetchCatalogue().then((data) => setCatalogue(data)); // Fetch and set catalogue data
  }, []);

  return (
    <div>
      <h2>Library Catalogue</h2>
      <ul>
        {catalogue.map((book) => (
          <li key={book.id}>
            <strong>{book.book_name}</strong> by {book.author} ({book.book_genre})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CataloguesPage;
