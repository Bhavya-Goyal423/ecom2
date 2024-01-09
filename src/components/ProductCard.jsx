import styles from "./ProductCard.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function ProductCard() {
  return (
    <Card sx={{ maxWidth: 210 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10673544/2019/9/24/6b9c7688-7ca2-4d11-9e5b-a3745ecd8f761569310358973-The-Indian-Garage-Co-Men-Shirts-8481569310357131-1.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            className={styles.spacing}
          >
            Men Slim Fit Casual Shirt
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Rs. 544
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;
