import { Avatar, Button, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React, { FC } from 'react'
import { IPost } from '../models/IPost';
import { userApi } from '../services/UserService';

interface PostItemProps {
  post: IPost
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ post, remove, update }) => {

  const { data: user, error, isLoading } = userApi.useFetchUserQuery(post.userId);

  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post)
  }

  const handleUpdate = (event: React.MouseEvent) => {
    const title = "Обновлено";
    update({ ...post, title })
  }

  console.log("рендер PostItem");

  return (
    <Card sx={{ minWidth: 275, mb: 3 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {user?.username.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={user?.username}
        subheader={user?.email}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {post.id}. {post.title}
        </Typography>
        <Typography variant="body2">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="error" size="small" onClick={handleRemove}>Удалить</Button>
        <Button variant="outlined" size="small" onClick={handleUpdate}>Обновить</Button>
      </CardActions>
    </Card>
  )
}

export default PostItem;
