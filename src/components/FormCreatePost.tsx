import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, Box } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'
import { IPost } from '../models/IPost';
import { postApi } from '../services/PostService';

interface FormProps {
    open: boolean
    handleClose: () => void;
}

const FormCreatePost: FC<FormProps> = ({ open, handleClose }) => {
    const [createPost, { isSuccess }] = postApi.useCreatePostMutation();
    const [formTitle, setFormTitle] = useState('');
    const [formBody, setFormBody] = useState('');

    const handleCreate = async () => {
        await createPost({ title : formTitle, body: formBody, userId: 1 } as IPost)
    }

    useEffect(() => {
        isSuccess && handleClose();
    }, [isSuccess])

    return (
        <Dialog open={open} onClose={handleClose}>
            <Box component="form"
                noValidate
                autoComplete="off">
                <DialogTitle>Расскажите, что у вас нового</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Заголовок"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={formTitle}
                        onChange={(e) => setFormTitle(e.target.value)}
                    />
                    <TextField
                        id="standard-multiline-flexible"
                        label="Сообщение"
                        multiline
                        maxRows={4}
                        fullWidth
                        value={formBody}
                        onChange={(e) => setFormBody(e.target.value)}
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Закрыть</Button>
                    <Button onClick={handleCreate}>Отправить</Button>
                </DialogActions>
            </Box>
        </Dialog>
    )
}

export default FormCreatePost;
