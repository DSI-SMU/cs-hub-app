import React from 'react';
import { Card, List, ListItem, ListItemText, ListItemIcon, Typography, makeStyles } from '@material-ui/core';

export type CardGridInfo = {
    title: string;
    items: CardGridItem[];
}
interface CardGridItem {
    text: string;
    icon: React.ReactElement;
}

interface CardGridProps {
    cardInfo: CardGridInfo;
}


// Define the styles
const useStyles = makeStyles((theme) => ({
    card: {
        margin: theme.spacing(2),
    },
    title: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.default, // Adjust color as needed
        textAlign: 'center',
        fontWeight: 'bold',
    },
    listItem: {
        borderTop: '1px solid #e0e0e0', // Change color as per your theme
    },
}));

const CardGrid: React.FC<CardGridProps> = ({ cardInfo }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Typography variant="h6" className={classes.title}>
                { cardInfo.title}
            </Typography>
            <List>
                {cardInfo.items.map((item, index) => (
                    <ListItem key={index} className={classes.listItem}>
                        <ListItemText primary={item.text} />
                        <ListItemIcon>{item.icon}</ListItemIcon>
                    </ListItem>
                ))}
            </List>
        </Card>
    );
};

export default CardGrid;
