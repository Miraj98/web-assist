import React from 'react'
import { connect } from 'react-redux'
import { Box, InfiniteScroll } from 'grommet'
import PostLayout from '../Feed/PostLayout'
import Comment from './Comment'
import NewComment from './NewComment'
import { requestPostByIdFromApi } from '../../redux/actions/post'

class Post extends React.PureComponent {

    componentDidMount() {
        this.props.requestPostByIdFromApi(this.props.location.state.post_id)
    }

    render() {
        console.log(this.props.commentIds)
        return (
            <Box
                fill
                justify="start"
                align="center"
                background="light-3"
                pad={{ top: 'small', bottom: "large" }}
                style={{ wordWrap: "anywhere" }}
                overflow={{ vertical: "scroll" }}
            >
                <Box
                    justify="between"
                    align="center"
                    pad="medium"
                    background={{ color: 'white' }}
                    width="48rem"
                    margin={{ bottom: 'xsmall' }}
                    elevation="large"
                    flex={false}
                >
                    <PostLayout id={this.props.location.state.post_id} linkPreview={true} />
                </Box>
                <NewComment post_id={this.props.location.state.post_id} />
                <InfiniteScroll items={this.props.commentIds}>
                    {
                        item => <Comment key={item} id={item} />
                    }
                </InfiniteScroll>
            </Box>
        )
    }
}

const mapStateToProps = (state, props) => ({
    commentIds: state.posts.byId[props.location.state.post_id].comments || [],
})
const mapDispatchToProps = {
    requestPostByIdFromApi
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)