import React from 'react'
import { Box, TextArea, Text, Button, Layer, Select } from 'grommet'
import { postNewPost } from '../../redux/actions/post'
import { Send } from 'grommet-icons'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import autosize from 'autosize'

class CreatePost extends React.Component {

    state = {
        title: '',
        text: '',
        showModal: false,
        interestSelected: '',
        submitPressed: false
    }

    componentDidMount() {
        autosize(this.textarea)
    }

    handleSubmitPost() {
        this.setState(prevState => ({ ...prevState, submitPressed: true }))
        this.props.postNewPost(this.state.title, this.state.text, this.state.interestSelected)
    }

    render() {
        return (
            <Box
                fill
                pad={{ top: "small" }}
                overflow={{ vertical: "scroll" }}
                align="center"
                justify="start"
                background="light-3"
            >
                <Box
                    direction="row"
                    justify="between"
                    align="center"
                    pad="medium"
                    background={{ color: 'white' }}
                    width="48rem"
                    margin={{ bottom: 'xsmall' }}
                    elevation="small"
                    flex={false}
                >
                    <TextArea
                        placeholder="Post Title"
                        value={this.state.title}
                        onChange={({ target }) => this.setState(prevState => ({ ...prevState, title: target.value }))}
                        plain
                        resize={false}
                        style={{ fontWeight: 900, fontSize: "2rem" }}
                    />
                </Box>
                <Box
                    direction="row"
                    justify="between"
                    align="center"
                    pad="medium"
                    background={{ color: 'white' }}
                    width="48rem"
                    margin={{ bottom: 'xsmall' }}
                    elevation="small"
                    flex="grow"
                >
                    <TextArea
                        placeholder="Post Content"
                        value={this.state.text}
                        onChange={({ target }) => this.setState(prevState => ({ ...prevState, text: target.value }))}
                        ref={post_area => this.textarea = post_area}
                        fill
                        plain
                        resize={false}
                        style={{ fontWeight: "bolder", fontSize: "2rem" }}
                    />
                </Box>
                <Button onClick={() => this.setState(prevState => ({ ...prevState, showModal: true }))}>
                    <Box
                        direction="row"
                        pad="medium"
                        style={{ position: "fixed", bottom: "2rem", right: "4em" }}
                        elevation="medium"
                        align="center"
                        justify="between"
                        gap="small"
                        background="brand"
                        round="large"
                    >
                        <Send/>
                        <Text color="white" weight={900}>Publish Post</Text>
                    </Box>
                </Button>
                {
                    this.state.showModal
                    ? <Layer
                        onEsc={() => this.setState(prevState => ({ ...prevState, showModal: false }))}
                        onClickOutside={() => this.setState(prevState => ({ ...prevState, showModal: false }))}
                    >
                        <Box pad="medium">
                            <Text weight={900} size="1.125rem">Select a community to post in</Text>
                            <Select
                                options={this.props.interests}
                                dropHeight="small"
                                margin="medium"
                                value={this.state.interestSelected}
                                onChange={({ option }) => this.setState(prevState => ({ ...prevState, interestSelected: option }))}
                            />
                            <Button
                                color="brand"
                                primary
                                icon={this.props.isPostingNewPost ? <Loader type="Oval" color="white" height="1.2rem" width="1.2rem" /> : null}
                                label="Submit"
                                alignSelf="center"
                                margin="small"
                                disabled={this.state.interestSelected === ''}
                                onClick={() => this.handleSubmitPost()}
                            />
                            {
                                this.props.postNewPostRequestState ? <Redirect to="/feed" /> : null
                            }
                        </Box>   
                    </Layer> : null
                }
            </Box>
        )
    }
}

const mapStateToProps = state => ({
    interests: state.allInterests.allIds,
    isPostingNewPost: state.isPosting.post,
    postNewPostRequestState: state.isRequestSuccessful.post,
    auth: state.auth
})

const mapDispatchToProps = {
    postNewPost
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)