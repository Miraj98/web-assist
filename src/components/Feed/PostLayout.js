import React from 'react'
import { Box, Image, Text } from 'grommet'
import { connect } from 'react-redux'
import Linkify from 'react-linkify'
import PostActions from './PostActions'
import { voteRequest, /* requestLinkPreviewFromApi */ } from '../../redux/actions/post'
import twitter from 'twitter-text'
import MicrolinkCard from '@microlink/react'
import { Link } from 'react-router-dom'

const LinkPreview = props => (
    <Box margin={{ left: "small", top: "medium" }}>
        <MicrolinkCard
            url={props.url}
            style={{ borderRadius: "0.5em" }}
            size="large"
        />  
    </Box>
)

const handleLinkPreview = post_text => {
    let urls = twitter.extractUrls(post_text)
    if(urls.length === 0) return null
    else {
        if(urls[0].includes('http')) {
            return <LinkPreview url={urls[0]} />
        }
        else return null
    }
}

class PostLayout extends React.Component {

    // componentDidMount() {
    //     this.props.requestLinkPreviewFromApi(this.props.id, this.props.post_text)
    // }

    handleVoteButtonPressed = (vote, post_id) => {
        let currentVoteState = this.props.self_vote
        console.log("Current vote state:", currentVoteState)
        let currentLikes = this.props.likes
        console.log("Current total likes:", currentLikes)
        let newVoteState = vote === currentVoteState ? 0 : vote
        let newLikes

        console.log("New votes state:", newVoteState)

        switch(newVoteState) {
            case 0:
                newLikes = currentLikes - currentVoteState
                break
            default:
                newLikes = currentLikes - currentVoteState + newVoteState
        }

        console.log("New likes:", newLikes)

        this.props.voteRequest(newVoteState, post_id, newLikes, currentVoteState, currentLikes)
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
            >
                <Box height="64px" width="64px">
                    <Image
                        fit="cover"
                        src={require('../../assets/avatar1.png')}
                    />
                </Box>
                <Text weight="bold" color="black" margin="small" size="1.25rem">{this.props.user_name}</Text>
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
                    <Link
                        to={{
                            pathname: "/post",
                            state: { 
                                post_id: this.props.id,
                                fromFeed: true
                            }
                        }}
                        style={{ textDecoration: 'none' }}
                    >
                        <Text weight="bold" color="black" size="1.125rem">{this.props.post_title}</Text>
                    </Link>
                    <Linkify properties={{ target: '_blank', style: { color: '#1976d2', textDecoration: 'none' } }}>
                        <pre style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: "1.125rem", color: 'black' }} wrap="normal">{this.props.post_text}</pre>
                    </Linkify>
                </Box>
                    {
                        this.props.linkPreview ? handleLinkPreview(this.props.post_text) : null
                        // urls.length === 0 ? null : (urls[0].includes('http') ? <LinkPreview url={urls[0]} /> : null)
                    }
            </Box>
                <PostActions
                    comments={this.props.comments_number}
                    likes={this.props.likes}
                    self_vote={this.props.self_vote}
                    post_id={this.props.id}
                    handleVote={this.handleVoteButtonPressed}
                />
            </Box>
        )
    }
}

const mapStateToProps = (state, props) => ({
    ...state.posts.byId[props.id]
})
const mapDispatchToProps = {
    voteRequest,
    // requestLinkPreviewFromApi
}

export default connect(mapStateToProps, mapDispatchToProps)(PostLayout)