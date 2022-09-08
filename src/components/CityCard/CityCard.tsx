import { useEffect, useState } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea } from "@mui/material"
import { City } from "../../types/types"
import { getPhoto, getWikiPhotoUrl } from "../../helpers"

export default function CityCard({ city }: { city: City }) {
  const [photo, setPhoto] = useState<string>("")

  useEffect(() => {
    if (city.photos.length === 0) return
    getPhoto(city.region)
      .then((res) => res.json())
      .then((res) => {
        const data = res?.query?.pages[0]
        const image: string = data?.thumbnail?.source
        console.log(image)
        setPhoto(image)
      })

    return () => {}
  }, [city.photos])

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={
            city.photos.length > 0
              ? getWikiPhotoUrl(city.photos[0])
              : "https://elevationdogs.com/wp-content/uploads/2020/09/placeholder-img-4.jpg"
          }
          onError={(e) => {
            e.currentTarget.src = photo
          }}
          alt={city.photos[0]}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {city.region}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {city.path.join(" > ")}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold" }}
            color="text.secondary"
          >
            {Object.keys(city.themes).join(" . ")}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
