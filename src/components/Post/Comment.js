import React from 'react'
import { Box, Text, Image } from 'grommet'
import { connect } from 'react-redux'
import Linkify from 'react-linkify'

const Comment = props => {
    console.log(props)
    return (
        <Box
        pad="medium"
        align="center"
        background={{ color: 'white' }}
        width="48rem"
        flex={false}
        margin={{ bottom: "2px" }}
    >
    <Box
        direction="row"
        fill="horizontal"
        align="center"
    >
        <Box height="64px" width="64px">
            <Image
                fit="cover"
                src={require('../../assets/avatar1.png')}
            />
        </Box>
        <Text weight="bold" color="black" margin="small" size="1.25rem">{props.user_name}</Text>
    </Box>
    <Box
        pad={{ left: "64px" }}
        justify="center"
        fill="horizontal"
        wrap
    >
        <Box
            margin={{ left: "small" }}
            overflow={{ horizontal: "hidden" }}
        >
            <Linkify properties={{ target: '_blank', style: { color: '#1976d2', textDecoration: 'none' } }}>
                <Text color="black" size="1rem" margin={{ top: "xsmall" }}>{props.comment}</Text>
            </Linkify>
        </Box>
    </Box>
    </Box>
)
}

const mapStateToProps = (state, props) => ({
    ...state.comments.byId[props.id]
})

export default connect(mapStateToProps)(Comment)