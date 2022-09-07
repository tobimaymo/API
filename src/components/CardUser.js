import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { Card, CardContent, CardActionArea, Typography } from '@mui/material';

const CardUser = ({ data }) => {
	return (
		<Card sx={{ maxWidth: 345, margin: 10 }}>
			<CardActionArea>
      <CardMedia component='img' image={data.imageUrl} />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{data.name}
					</Typography>
					<Typography gutterBottom variant='h5' component='div'>
						{data.role}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default CardUser;