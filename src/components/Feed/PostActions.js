import React from 'react'
import { Box, Text, Button } from 'grommet'
import { Like, Dislike, Chat, ShareOption } from 'grommet-icons'

const PostActions = props => (
    <Box
        direction="row"
        margin={{ top: "small" }}
        pad="small"
        align="center"
        justify="around"
        fill="horizontal"
    >
        <Box
            direction="row"
            align="center"
            justify="between"
            gap="1.5rem"
        >
            <Button icon={<Like size="1.25rem" color={props.self_vote === 1 ? 'green' : null} />} onClick={() => props.handleVote(1, props.post_id)} margin="none" />
            <Text>{props.likes}</Text>
            <Button icon={<Dislike size="1.25rem" color={props.self_vote === -1 ? 'red' : null} />} onClick={() => props.handleVote(-1, props.post_id)} margin="none" />
        </Box>
        <Box
            direction="row"
            align="center"
            justify="center"
            gap="0.5rem"
        >
            <Button icon={<Chat size="1.25rem" />} onClick={() => {}} />
            <Text>{props.comments === 0 ? "Comment" : props.comments}</Text>
        </Box>
        <Button icon={<ShareOption size="1.25rem" />} onClick={() => {}} margin="none" />
    </Box>
)

export default PostActions