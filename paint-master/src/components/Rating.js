import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating, Box } from "./RatingStyles";
import { useStyles } from './HeaderStyles.js';

const Rate = () => {
  const [rate, setRate] = useState(0);
  const [hover, setHover] = useState(0);
  const classes = useStyles();
  
  return (
    <div className={classes.root} id="header">
    <Box>
    <h1 style={{ color: "#ffec3d", textAlign: "center", marginTop: "-30px", fontSize: "50px" }}>
        How was your experience?
    </h1>
    <Container>
        
      {[...Array(5)].map((item, index) => {
        const ratingValue = index + 1;
        return (
          <label>
            <Radio
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {setRate(ratingValue);}}
            />
            <Rating>
            <FaStar
                className="star"
                color={ratingValue <= (hover || rate) ? "#ffec3d" : "#e4e5e9"}
                size={100}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
            />
            </Rating>
          </label>
        );
      })}

    </Container>
    </Box>
    </div>
  );
};
  
export default Rate;