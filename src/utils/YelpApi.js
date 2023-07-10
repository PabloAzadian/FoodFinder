import {fetch as fetchPolyfill} from 'whatwg-fetch'
const apiKey = "";
const apiUrl = "https://api.yelp.com/v3/businesses/search";
const corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";


const search = (terms, location, sortBy) => {
  const url = `${corsAnywhereUrl}${apiUrl}?term=${terms}&location=${location}&sort_by=${sortBy}`;

  console.log("Request URL:", url); // Add this line to log the URL

  return fetch(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "x-requested-with": "XMLHttpRequest"
    }
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Request failed");
      }
    })
    .then((data) => {
      if (data.businesses) {
        return data.businesses.map((business) => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count,
        }));
      } else {
        return [];
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle error state as per your requirements
      return [];
    });
};

export default search;
