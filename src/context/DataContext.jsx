import { createContext, useState, useEffect } from "react";
import image0 from "../img/image0.jpg";
import image1 from "../img/image1.jpg";
import image2 from "../img/image2.jpg";
import image3 from "../img/image3.jpg";
import image4 from "../img/image4.jpg";
import image5 from "../img/image5.jpg";
import image6 from "../img/image6.jpg";
import image7 from "../img/image7.jpg";
import image8 from "../img/image8.jpg";
import image9 from "../img/image9.jpg";
import image10 from "../img/image10.jpg";
import image11 from "../img/image11.jpg";
import image12 from "../img/image12.jpg";
import image13 from "../img/image13.jpg";
import image14 from "../img/image14.jpg";
import image15 from "../img/image15.jpg";
import image16 from "../img/image16.jpg";
import image17 from "../img/image17.jpg";
import image18 from "../img/image18.jpg";
import image19 from "../img/image19.jpg";
import image20 from "../img/image20.jpg";
import image21 from "../img/image21.jpg";
import image22 from "../img/image22.jpg";
import image23 from "../img/image23.jpg";
import image24 from "../img/image24.jpg";
import image25 from "../img/image25.jpg";
import image26 from "../img/image26.jpg";
import image27 from "../img/image27.jpg";
import image28 from "../img/image28.jpg";
import image29 from "../img/image29.jpg";
import image30 from "../img/image30.jpg";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const fetchedImages = [
        { id: 0, url: `${image0}`, alt: { image0 }, tags: "Bike" },
        { id: 1, url: `${image1}`, alt: "Image 1", tags: "Nature" },
        { id: 2, url: `${image2}`, alt: "Image 2", tags: "Luxury" },
        { id: 3, url: `${image3}`, alt: "Image 3", tags: "Daytime" },
        { id: 4, url: `${image4}`, alt: "Image 4", tags: "Fields" },
        { id: 5, url: `${image5}`, alt: "Image 5", tags: "Maps" },
        { id: 6, url: `${image6}`, alt: "Image 6", tags: "Cars" },
        { id: 7, url: `${image7}`, alt: "Image 7", tags: "Long Exposure" },
        { id: 8, url: `${image8}`, alt: "Image 8", tags: "Sunset" },
        { id: 9, url: `${image9}`, alt: "Image 9", tags: "Beach" },
        { id: 10, url: `${image10}`, alt: "Image 10", tags: "Sitting" },
        { id: 11, url: `${image11}`, alt: "Image 11", tags: "Playing" },
        { id: 12, url: `${image12}`, alt: "Image 12", tags: "Running" },
        { id: 13, url: `${image13}`, alt: "Image 13", tags: "Walking" },
        { id: 14, url: `${image14}`, alt: "Image 14", tags: "Traffic" },
        { id: 15, url: `${image15}`, alt: "Image 15", tags: "Cities" },
        { id: 16, url: `${image16}`, alt: "Image 16", tags: "Landscapes" },
        { id: 17, url: `${image17}`, alt: "Image 17", tags: "Mountains" },
        { id: 18, url: `${image18}`, alt: "Image 18", tags: "Forests" },
        { id: 19, url: `${image19}`, alt: "Image 19", tags: "Plants" },
        { id: 20, url: `${image20}`, alt: "Image 20", tags: "Dioramas" },
        { id: 21, url: `${image21}`, alt: "Image 21", tags: "Snow" },
        { id: 22, url: `${image22}`, alt: "Image 22", tags: "Mountains" },
        { id: 23, url: `${image23}`, alt: "Image 23", tags: "Blue" },
        { id: 24, url: `${image24}`, alt: "Image 24", tags: "Teens" },
        { id: 25, url: `${image25}`, alt: "Image 25", tags: "Smiles" },
        { id: 26, url: `${image26}`, alt: "Image 26", tags: "Professionals" },
        { id: 27, url: `${image27}`, alt: "Image 27", tags: "Fun" },
        { id: 28, url: `${image28}`, alt: "Image 28", tags: "Landscapes" },
        { id: 29, url: `${image29}`, alt: "Image 29", tags: "Travel" },
        { id: 30, url: `${image30}`, alt: "Image 30", tags: "Snowfall" },
      ];
      setImages(fetchedImages);
      setLoading(false);
      // Simulating a 6-second delay
    }, 6000);
  }, []);
  // ========>

  return (
    <DataContext.Provider value={{ images, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
