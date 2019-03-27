import React from 'react'
import { Box, Text, InfiniteScroll } from 'grommet'
import { Article, Edit } from 'grommet-icons'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { requestFeedFromApi } from '../../redux/actions/feed'
import { requestInterestsFromApi } from '../../redux/actions/interests'
import PostLayout from './PostLayout'
import Loader from 'react-loader-spinner'

class Feed extends React.PureComponent {

    componentDidMount() {
        this.props.requestFeedFromApi("f20170635@pilani.bits-pilani.ac.in")
        this.props.requestInterestsFromApi()
    }

    render() {
        let feed = this.props.auth === null ? <Redirect to="/auth" /> : 
        (
            <Box
                fill
                justify="start"
                align="center"
                background="light-3"
                pad={{ top: 'small' }}
                style={{ wordWrap: "anywhere" }}
                overflow={{ vertical: "scroll" }}
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
                   <Text
                        weight={900}
                        size='1.5rem'
                        color='black'>
                        Feed
                    </Text>
                    {
                        this.props.isFetchingFeed ? <Loader type="Triangle" color="#4527a0" height="2rem" width="2rem" /> : <Article color="#4527a0" />
                    }
                </Box>
                <InfiniteScroll items={this.props.feed}>
                    {
                        item => (
                            <PostLayout key={item} id={item} linkPreview={false} />
                        )
                    }
                </InfiniteScroll>
                <Link to="/createpost">
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
                        <Edit/>
                        <Text color="white" weight={900}>Write a post</Text>
                    </Box>
                </Link>
            </Box>
        )
        return feed
    }
}

const mapStateToProps = state => ({
    feed: state.feed,
    isFetchingFeed: state.isFetching.feed,
    feedApiRequestState: state.isRequestSuccessful.feed,
    auth: state.auth
})

const mapDispatchToProps = {
    requestFeedFromApi,
    requestInterestsFromApi
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)