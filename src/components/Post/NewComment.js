import React from 'react'
import { Box, Image, TextArea, Button } from 'grommet'
import { Send } from 'grommet-icons'
import { postCommentRequest, requestPostByIdFromApi } from '../../redux/actions/post'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'

class NewComment extends React.Component {

    state = {
        comment: ''
    }

    handlePostComment() {
        this.setState(() => ({ comment: '' }))
        this.props.postCommentRequest(this.props.post_id, this.state.comment)
        setTimeout(() => this.props.requestPostByIdFromApi(this.props.post_id), 100)
    }

    render() {
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
                justify="between"
            >
                <Box height="64px" width="64px" margin={{ right: "small" }}>
                    <Image
                        fit="cover"
                        src={require('../../assets/avatar1.png')}
                    />
                </Box>
                <TextArea
                    plain
                    placeholder="Write a comment"
                    resize={false}
                    style={{ backgroundColor: "#eeeeee" }}
                    value={this.state.comment}
                    onChange={({ target }) => this.setState(() => ({ comment: target.value }))}
                />
                {
                    this.props.isPostingComments ? <Box margin="medium"><Loader type="Grid" color="#7e57c2" height="1.6em" width="1.6em" /></Box> : <Button margin="small" icon={<Send/>} onClick={() => this.handlePostComment()} />
                }
            </Box>
        </Box>
        )
    }
}

const mapStateToProps = state => ({
    isPostingComments: state.isPosting.comments
})

const mapDispatchToProps = {
    postCommentRequest,
    requestPostByIdFromApi
}

export default connect(mapStateToProps, mapDispatchToProps)(NewComment)