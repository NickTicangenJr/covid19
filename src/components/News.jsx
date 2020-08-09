import React, {Component} from 'react';
import { List, ListItem, ListItemAvatar, Avatar,ListItemText, Typography, Divider, } from '@material-ui/core';
import {TiNews} from 'react-icons/ti';


class News extends Component{
    render(){
        const {articles, gettime} = this.props;
        return(
                <div className="Container-News-Header">
                    <div className="News-Header">
                        <Typography>
                        <h5><TiNews /><span className="font-news-header"> PH trending topics</span></h5>
                        </Typography>
                    </div>
                    <div className="Container-News">
                    {articles.map(article => (
                        <List key={article.link}>
                            <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                    <Avatar alt="url_Image" src={article.primary_image_link} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={<a href={article.link}><b>{article.title}</b></a>}
                                secondary={
                                <React.Fragment>
                                    <Typography
                                    component="span"
                                    variant="body2"
                                    color="textPrimary"
                                    >
                                    {"Publised: "+new Date(gettime).toLocaleDateString()}<br />                                    
                                    {article.author == null ? "" : "-"+article.authors+" "}
                                    </Typography>
                                    {article.snippet == null ? "" : article.snippet}
                                </React.Fragment>
                                }
                            />
                            </ListItem><Divider variant="inset" component="li" />
                        </List>
                        
                        
                    ))}
                    </div>
                </div>
        )
    }

}

export default News;
